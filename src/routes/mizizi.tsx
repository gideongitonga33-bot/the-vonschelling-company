import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy, Mail, Minus, Plus, Truck } from "lucide-react";
import bag from "@/assets/mizizi-bag.png";
import range from "@/assets/mizizi-range.png";
import roastPhoto from "@/assets/coffee-roast.jpg";
import { Button } from "@/components/ui/button";
import { Heading, Section, SpecTable } from "@/components/site/Layout";
import { PRIVATE_LABEL_MOQ_KG } from "@/lib/coffee";
import { jsonLd } from "@/lib/coffee-schema";
import {
  buildMiziziOrderEmail, clampBags, GRINDS, MAX_BAGS_PER_ORDER, MIZIZI_BAG, MIZIZI_CARTON_BAGS,
  orderTotals, ROASTS, SHIPPING, usd, type ShippingRegion,
} from "@/lib/mizizi";
import { seo, SITE_URL } from "@/lib/seo";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Mizizi Coffee, Single-Origin Kenya AA, 500g",
  description: "100% single-origin Kenya Grade AA Arabica, roasted in Nairobi and packed in 500g high-barrier valve bags. Light, medium or dark roast; whole bean or ground.",
  image: `${SITE_URL}/og/mizizi.jpg`,
  brand: { "@type": "Brand", name: "Mizizi Coffee" },
  offers: {
    "@type": "Offer",
    price: MIZIZI_BAG.priceUsd.toFixed(2),
    priceCurrency: "USD",
    url: `${SITE_URL}/mizizi`,
    seller: { "@id": `${SITE_URL}/#organization` },
  },
};

export const Route = createFileRoute("/mizizi")({
  staticData: { sitemap: true },
  head: () => ({
    ...seo(
      "Mizizi Coffee, Single-Origin Kenya AA 500g, VonSchelling",
      "Buy Mizizi Coffee: 100% single-origin Kenya Grade AA, $30 USD per 500g bag, shipped from Nairobi. Wholesale and private-label roasting for cafes, retailers and brands.",
      "/mizizi",
      "mizizi.jpg",
    ),
    scripts: [jsonLd(productSchema)],
  }),
  component: Mizizi,
});

const pill = "cursor-pointer border px-4 py-3 text-left text-sm transition has-[:checked]:border-gold has-[:checked]:bg-gold/15 border-ivory/25 hover:border-gold/60";

function Mizizi() {
  const [roast, setRoast] = useState<string>(ROASTS[0].value);
  const [grind, setGrind] = useState<string>(GRINDS[0]);
  const [bags, setBags] = useState(1);
  const [region, setRegion] = useState<ShippingRegion>("international");
  const [draft, setDraft] = useState<ReturnType<typeof buildMiziziOrderEmail> | null>(null);
  const [copied, setCopied] = useState(false);
  const totals = orderTotals(region, bags);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setDraft(buildMiziziOrderEmail({ roast, grind, bags, region, name: String(data.get("name") ?? ""), destination: String(data.get("destination") ?? "") }));
    setCopied(false);
  };

  return (
    <>
      <section className="bg-navy text-ivory">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 py-16 md:py-24 lg:grid-cols-2">
          <div className="lg:sticky lg:top-28">
            <img src={bag} alt="Mizizi Coffee 500g bag, single-origin Kenya AA" width={1102} height={1427} className="mx-auto h-auto w-full max-w-md" />
          </div>
          <div>
            <div className="flex flex-wrap gap-2">
              {["100% Kenya Arabica Grade AA", "Single Origin", "Screen 17/18"].map((b) => <span key={b} className="border border-gold/60 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gold-soft">{b}</span>)}
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl">Mizizi Coffee</h1>
            <p className="mt-3 font-display text-2xl italic text-gold-soft">Single-origin Kenya AA, fresh from the source.</p>
            <p className="mt-6 font-display text-4xl">{usd(MIZIZI_BAG.priceUsd)} <span className="text-lg text-ivory/60">· {MIZIZI_BAG.grams}g bag</span></p>

            <form onSubmit={submit} className="mt-8 space-y-8">
              <fieldset>
                <legend className="eyebrow text-gold">Roast</legend>
                <div className="mt-3 grid gap-2">
                  {ROASTS.map((r) => (
                    <label key={r.value} className={pill}>
                      <input type="radio" name="roast" value={r.value} checked={roast === r.value} onChange={() => { setRoast(r.value); setDraft(null); }} className="sr-only" />
                      <span className="font-semibold">{r.value}</span><span className="block text-xs text-ivory/65">{r.note}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <fieldset>
                <legend className="eyebrow text-gold">Grind</legend>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {GRINDS.map((g) => (
                    <label key={g} className={pill}>
                      <input type="radio" name="grind" value={g} checked={grind === g} onChange={() => { setGrind(g); setDraft(null); }} className="sr-only" />{g}
                    </label>
                  ))}
                </div>
              </fieldset>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="eyebrow text-gold">Bags</p>
                  <div className="mt-3 flex items-center border border-ivory/25">
                    <button type="button" aria-label="Fewer bags" onClick={() => { setBags(clampBags(bags - 1)); setDraft(null); }} className="p-3 hover:text-gold"><Minus className="h-4 w-4" /></button>
                    <span aria-live="polite" className="flex-1 text-center font-semibold">{totals.bags}</span>
                    <button type="button" aria-label="More bags" disabled={bags >= MAX_BAGS_PER_ORDER} onClick={() => { setBags(clampBags(bags + 1)); setDraft(null); }} className="p-3 hover:text-gold disabled:opacity-40"><Plus className="h-4 w-4" /></button>
                  </div>
                </div>
                <fieldset>
                  <legend className="eyebrow text-gold">Deliver to</legend>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {(Object.keys(SHIPPING) as ShippingRegion[]).map((k) => (
                      <label key={k} className={`${pill} py-2 text-xs`}>
                        <input type="radio" name="region" value={k} checked={region === k} onChange={() => { setRegion(k); setDraft(null); }} className="sr-only" />{k === "kenya" ? "Kenya" : "Worldwide"}
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>

              <dl className="space-y-2 border-y border-ivory/20 py-5 text-sm">
                <div className="flex justify-between"><dt>Subtotal</dt><dd>{usd(totals.subtotal)}</dd></div>
                <div className="flex justify-between"><dt>{SHIPPING[region].label}</dt><dd>{totals.shipping === 0 ? "Free" : usd(totals.shipping)}</dd></div>
                <div className="flex justify-between pt-2 font-display text-2xl"><dt>Total</dt><dd>{usd(totals.total)}</dd></div>
              </dl>
              <p className="text-sm text-gold-soft">
                {region === "international"
                  ? totals.bagsToFreeShipping > 0
                    ? `Add ${totals.bagsToFreeShipping} more bag${totals.bagsToFreeShipping > 1 ? "s" : ""} for free international express shipping.`
                    : "Free international express shipping unlocked."
                  : `Flat ${usd(SHIPPING.kenya.flatUsd)} delivery anywhere in Kenya.`}
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div><label htmlFor="name" className="eyebrow text-gold">Your name</label><input id="name" name="name" required autoComplete="name" className="w-full border-b border-ivory/30 bg-transparent py-3 outline-none focus:border-gold" /></div>
                <div><label htmlFor="destination" className="eyebrow text-gold">City & country</label><input id="destination" name="destination" required className="w-full border-b border-ivory/30 bg-transparent py-3 outline-none focus:border-gold" placeholder="e.g. London, UK" /></div>
              </div>
              <Button type="submit" className="h-auto w-full whitespace-normal bg-gold py-4 text-forest-deep hover:bg-gold-soft"><Mail />Order {totals.bags} bag{totals.bags > 1 ? "s" : ""} · {usd(totals.total)}</Button>
              <p className="flex gap-3 text-xs leading-relaxed text-ivory/65"><Truck className="h-4 w-4 shrink-0 text-gold" />Roasted to order in Nairobi and dispatched by tracked express courier. Import duties or taxes at destination, where applicable, are paid by the recipient.</p>
              <p className="text-xs leading-relaxed text-ivory/65">Your order is prepared as an email draft. Send it to confirm, and we reply with availability and payment details. Nothing is charged or stored on this page.</p>
            </form>

            {draft && (
              <div role="status" className="mt-8 border border-gold/50 p-6">
                <p className="eyebrow text-gold">Order email ready</p>
                <h2 className="mt-3 text-3xl">Review and send your order.</h2>
                <textarea aria-label="Order details" readOnly value={draft.body} rows={9} className="mt-4 w-full border border-ivory/20 bg-transparent p-3 text-xs" />
                <div className="mt-4 flex flex-wrap gap-3">
                  <Button asChild className="bg-gold text-forest-deep hover:bg-gold-soft"><a href={draft.href}><Mail />Open email app</a></Button>
                  <Button type="button" variant="outline" className="border-ivory/40 bg-transparent text-ivory hover:bg-ivory/10" onClick={() => navigator.clipboard?.writeText(draft.body).then(() => setCopied(true))}>{copied ? <Check /> : <Copy />}{copied ? "Copied" : "Copy details"}</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Heading eyebrow="Our Roots" title="One origin. The top Kenyan grade." intro={'"Mizizi" means roots in Swahili. Every bag is 100% Kenya Grade AA Arabica from the volcanic highlands of Mount Kenya and the Aberdares. Never a blend.'} />
            <p className="mt-6 leading-relaxed text-muted-foreground">AA is the largest bean screen in Kenya's grading system, screens 17 and 18. Large, dense, uniform beans roast evenly and give the bright, juicy cup Kenyan coffee is known for.</p>
          </div>
          <img src={range} alt="Mizizi Coffee range in light, medium and dark roasts" loading="lazy" width={1536} height={1024} className="h-auto w-full" />
        </div>
      </Section>

      <section className="bg-secondary/50">
        <Section>
          <Heading eyebrow="Freshness & Brewing" title="Sealed fresh. Easy to brew well." />
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <SpecTable title="The Bag" rows={[
              ["Net weight", `${MIZIZI_BAG.grams}g`],
              ["Packaging", "High-barrier, nitrogen-flushed bag that protects aroma from air and light"],
              ["Valve", "One-way degassing valve releases CO₂ without letting air in"],
              ["Formats", "Whole bean or ground for filter, French press or espresso"],
            ]} />
            <SpecTable title="Brew Guide" rows={[
              ["Pour-over", "15g coffee to 250ml water at 92 to 94°C, about 3 minutes"],
              ["French press", "30g coarse coffee to 500ml water, steep 4 minutes, then press"],
              ["Espresso", "18g fine coffee for about 36g in the cup, 25 to 30 seconds"],
            ]} />
          </div>
        </Section>
      </section>

      <Section>
        <Heading eyebrow="Wholesale & Private Label" title="Serve Mizizi, or build your own brand." intro="For cafes, hotels, retailers, distributors and brands that need finished Kenyan coffee." />
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="border-t-2 border-gold pt-6">
            <p className="eyebrow text-gold">Path 01 · Wholesale Mizizi</p>
            <h3 className="mt-3 text-3xl">Stock and serve Mizizi</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Master cartons of {MIZIZI_CARTON_BAGS} × {MIZIZI_BAG.grams}g bags ({(MIZIZI_CARTON_BAGS * MIZIZI_BAG.grams) / 1000} kg) for cafes, hotels, offices and retail shelves. Ask for trade pricing and delivery to your market.</p>
            <Button asChild className="mt-6 h-auto whitespace-normal px-6 py-4"><Link to="/contact" search={{ request: "quote" }}>Request wholesale pricing<ArrowUpRight /></Link></Button>
          </div>
          <div className="border-t-2 border-gold pt-6">
            <p className="eyebrow text-gold">Path 02 · Private Label</p>
            <h3 className="mt-3 text-3xl">Your brand. Kenyan AA.</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Coffee selection, roast profile development, whole-bean or ground formats and packaging coordination under your brand. Lead times and print options are confirmed per project.</p>
            <p className="mt-4 font-display text-2xl">From {PRIVATE_LABEL_MOQ_KG.toLocaleString("en-US")} kg per roast profile</p>
            <Button asChild variant="outline" className="mt-6 h-auto whitespace-normal px-6 py-4"><Link to="/contact" search={{ request: "quote" }}>Discuss private label<ArrowUpRight /></Link></Button>
          </div>
        </div>
        <figure className="mt-14"><img src={roastPhoto} alt="Freshly roasted coffee beans turning in a roaster cooling tray" loading="lazy" className="aspect-[21/9] w-full object-cover" /><figcaption className="mt-2 text-xs text-muted-foreground">Freshly roasted beans in the cooling tray. Jkafader, CC BY-SA 3.0.</figcaption></figure>
        <p className="mt-10 text-sm text-muted-foreground">Buying green coffee by the bag or container? <Link to="/coffee" className="text-primary underline underline-offset-4">See Green Coffee Beans for export</Link>.</p>
      </Section>
    </>
  );
}
