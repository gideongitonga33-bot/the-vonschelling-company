import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-farm.jpg";
import cupping from "@/assets/cupping.jpg";
import bag from "@/assets/mizizi-bag.png.asset.json";
import range from "@/assets/mizizi-range.png.asset.json";
import greenPhoto from "@/assets/coffee-green.jpg.asset.json";
import dryingPhoto from "@/assets/coffee-drying.jpg.asset.json";
import kiambuPhoto from "@/assets/coffee-kiambu.jpg.asset.json";
import roastPhoto from "@/assets/coffee-roast.jpg.asset.json";

function Photo({ src, alt, credit, className = "" }: { src: string; alt: string; credit: string; className?: string }) {
  return (
    <figure className={className}>
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      <figcaption className="mt-2 text-xs opacity-60">{credit}</figcaption>
    </figure>
  );
}
import { Heading, Note, PageHero, QuoteCTA, Section, SpecTable } from "@/components/site/Layout";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/coffee")({
  head: () => seo("Kenyan Coffee Exports & Mizizi Coffee, VonSchelling", "Green Kenyan Arabica, Mizizi roasted coffee and private-label coffee for importers, traders and roasters."),
  component: Coffee,
});

const offers = [
  { n: "01", t: "Green Coffee Beans, Our Primary Export Offering", s: "For international importers, commodity traders, roasters and other qualified trade buyers.", d: "Washed Kenyan Arabica from the central highlands, offered in AA, AB, PB (Peaberry) and C grades, with specialty micro-lots from single estates and cooperative factories available on request. Details may include grade, origin, processing, crop information, screen size, defect profile, moisture, cup characteristics and available volume. Buyers can enquire about samples, specifications, bulk quantities, packaging and delivery terms." },
  { n: "02", t: "Mizizi Coffee, Roasted & Packaged", s: "Our specialist coffee brand for buyers seeking a finished Kenyan coffee product.", d: "Developed around whole-bean or ground coffee, roast profiles, pack sizes and target-market requirements. Retail, hospitality and distribution opportunities are discussed according to available products and production arrangements." },
  { n: "03", t: "Private-Label Coffee", s: "Coffee supply and branding for businesses seeking coffee under their own brand.", d: "Depending on the production partner, services may include coffee selection, roast profile development, packaging formats, label coordination and production planning. Lead times and branding capabilities are confirmed per project." },
];

const journey = [
  ["Sourcing at origin", "Engage with farmers, cooperatives and licensed supply partners to understand available coffee, origin and supply conditions."],
  ["Auction & market sourcing", "Where appropriate, source through authorised auction or market channels to access suitable grades and consolidate volumes."],
  ["Lot identification", "Record supplier, origin, grade and lot information; confirm preparation and packaging arrangements."],
  ["Quality evaluation & cupping", "Physical assessment and cup evaluation using qualified evaluators or partner facilities."],
  ["Scores & verification", "Share documented cupping results, test results and certifications only when available and verified."],
  ["Buyer samples & approval", "Provide representative samples and agree the specifications the order will be supplied against."],
  ["Contract & shipment", "Confirm commercial terms, export requirements, shipment arrangements and records supplied."],
];

const regions = [
  ["Nyeri", "1,600 to 2,300 m", "The heartland of classic Kenyan coffee on the slopes of Mount Kenya and the Aberdares. Deep red volcanic soils produce intense, complex cups with blackcurrant brightness and winey acidity."],
  ["Kirinyaga", "1,400 to 1,900 m", "Mount Kenya's southern slopes, home to celebrated cooperative factories. Bright, sweet and layered cups with pronounced fruit character."],
  ["Murang'a", "1,350 to 1,950 m", "East of the Aberdare Range, with a dense network of cooperative wet mills. Juicy, balanced coffees with vibrant acidity."],
  ["Kiambu", "1,500 to 2,200 m", "Nairobi's neighbouring highlands and one of Kenya's oldest coffee districts. Large estates and smallholders producing full-bodied, well-structured lots."],
  ["Embu", "1,300 to 1,900 m", "On Mount Kenya's eastern slopes. Floral, delicate cups with refined complexity and sweet citrus notes."],
  ["Meru", "1,300 to 1,950 m", "Northeast of Mount Kenya, a fast-rising specialty origin. Rich volcanic soils give bold, fruity coffees with excellent depth."],
];

const docs = [
  ["Origin and lot identity", "Available origin, supplier or lot reference, crop details where known"],
  ["Grade and preparation", "Confirmed grade, screen information and preparation details"],
  ["Cup quality", "Cupping report or score from an identified evaluator, when available"],
  ["Food safety and testing", "Relevant test reports, such as pesticide-residue or contaminant results, when required"],
  ["Certifications", "Valid certificates applicable to the specific supplier, facility, product and transaction"],
  ["Export readiness", "Applicable licences, certificates and shipping documentation for the intended route"],
];

function Coffee() {
  return (
    <>
      <PageHero image={hero} eyebrow="VonSchelling Coffee Operations" title="Kenyan Coffee. From Origin to Opportunity." intro="Green coffee beans, Mizizi-branded roasted coffee and private-label opportunities, subject to confirmed availability and specifications." />
      <Section>
        <Heading eyebrow="Our Coffee Offering" title="Green · Roasted · Private Label" />
        <div className="mt-14 divide-y divide-border border-y border-border">
          {offers.map((o) => (
            <div key={o.n} className="grid gap-6 py-10 md:grid-cols-[120px_1fr_1.3fr]">
              <p className="font-display text-5xl text-gold">{o.n}</p>
              <div><h3 className="text-3xl">{o.t}</h3><p className="mt-3 text-muted-foreground">{o.s}</p></div>
              <p className="leading-relaxed text-foreground/80">{o.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 grid items-start gap-10 lg:grid-cols-2">
          <Photo src={greenPhoto.url} alt="Inspecting the shape, colour and aroma of raw green coffee beans" credit="Green bean inspection. Photo: DFID, CC BY 2.0" className="[&_img]:aspect-[4/3]" />
          <SpecTable title="Green Coffee Beans, Technical Specification" rows={[
            ["Grades", "AA, AB, PB (Peaberry), and C options available"],
            ["Specialty Micro-Lots", "Single-estate and single-factory lots, cupping 84+ points, available on request"],
            ["Varieties", "SL28, SL34, Ruiru 11 and Batian"],
            ["Moisture Level", "10% to 11%"],
            ["Defect Tolerance", "Primary defects 0%, Secondary defects < 5%"],
          ]} />
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <SpecTable title="Mizizi Coffee, Packing Data" rows={[
            ["Packaging", "500g and 1Kg high-barrier nitrogen-flushed valve bags"],
            ["Case Configuration", "20 bags per master shipping carton"],
          ]} />
          <div className="flex flex-col justify-center border border-gold/50 bg-secondary/60 p-8">
            <p className="eyebrow text-gold">Private Label, Baseline Constraint</p>
            <p className="mt-4 font-display text-2xl leading-snug">Minimum Order Quantity (MOQ) for private label custom packing begins at 1,000 Kilograms per roast profile.</p>
          </div>
          <Photo src={roastPhoto.url} alt="Freshly roasted coffee beans turning in a roaster cooling tray" credit="Roast profiling. Photo: Wikimedia Commons, CC BY-SA 3.0" className="[&_img]:aspect-[4/3]" />
        </div>
      </Section>

      <section className="bg-primary text-primary-foreground">
        <Section>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Heading light eyebrow="Where Our Coffee Grows" title="Six counties. One highland character." intro="Our green coffee beans are sourced from Kenya's central highlands, where volcanic soils, high altitude and cool nights produce the bright, complex cups Kenyan Arabica is famous for." />
            <Photo src={kiambuPhoto.url} alt="Coffee plantation near Kawaida Falls, Cianda, Kiambu County" credit="Cianda, Kiambu County. Photo: Lebu Ayiga, CC BY 4.0" className="[&_img]:aspect-[4/3]" />
          </div>
          <div className="mt-14 grid gap-px bg-ivory/15 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map(([name, alt, desc]) => (
              <div key={name} className="bg-primary p-8">
                <p className="eyebrow text-gold-soft">{alt}</p>
                <h3 className="mt-2 font-display text-3xl">{name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">{desc}</p>
              </div>
            ))}
          </div>
        </Section>
      </section>

      <section id="mizizi" className="bg-navy text-ivory">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-[1fr_1.1fr]">
          <img src={bag.url} alt="Mizizi Coffee bag" loading="lazy" className="w-full" />
          <div>
            <p className="eyebrow text-gold">A coffee brand of VonSchelling Limited</p>
            <h2 className="mt-4 text-6xl md:text-7xl">Mizizi Coffee</h2>
            <p className="mt-3 font-display text-2xl italic text-gold-soft">Exceptional coffee from the heart of Kenya.</p>
            <div className="gold-rule my-8 w-32" />
            <p className="leading-relaxed text-ivory/75">Our special blend. 100% Arabica, roasted and packaged for buyers who want a finished Kenyan coffee, rooted in the highlands, crafted for cups everywhere.</p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-ivory/15 pt-8 text-sm">
              <div><p className="eyebrow text-gold">Roasts</p><p className="mt-2">Light · Medium · Dark</p></div>
              <div><p className="eyebrow text-gold">Formats</p><p className="mt-2">Whole bean · Ground</p></div>
              <div><p className="eyebrow text-gold">Sizes</p><p className="mt-2">250g · 500g · 1kg</p></div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <img src={range.url} alt="Mizizi Coffee range, light, medium and dark roasts with gift box" loading="lazy" className="w-full" />
        </div>
      </section>

      <Section>
        <Heading eyebrow="The Coffee Journey" title="From farmer to cup." intro="Coffee does not always travel the same route. Direct, cooperative and auction sourcing are distinct paths, and auction-sourced lots may carry different upstream traceability records." />
        <ol className="mt-16 grid gap-px bg-border md:grid-cols-4">
          {journey.map(([t, d], i) => (
            <li key={t} className="bg-background p-8">
              <p className="font-display text-4xl text-gold">0{i + 1}</p>
              <h3 className="mt-4 text-xl">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </li>
          ))}
          <li className="hidden bg-primary p-8 text-primary-foreground md:block">
            <p className="eyebrow text-gold-soft">Every lot</p>
            <p className="mt-4 font-display text-2xl">Documented, sampled and agreed before it ships.</p>
          </li>
        </ol>
      </Section>

      <section className="bg-secondary/50">
        <Section>
          <div className="grid gap-16 md:grid-cols-[1fr_1.4fr]">
            <div>
              <Heading eyebrow="Buyer Documentation" title="Cupping scores, certifications & traceability." intro="Each offered lot is supported by a specification sheet stating what is known and verified." />
              <img src={cupping} alt="" loading="lazy" className="mt-10 aspect-[4/3] w-full object-cover" />
            </div>
            <div>
              <table className="w-full text-left text-sm">
                <thead><tr className="border-b border-foreground/20"><th className="eyebrow py-4 pr-6">Buyer requirement</th><th className="eyebrow py-4">What we provide</th></tr></thead>
                <tbody>
                  {docs.map(([a, b]) => (
                    <tr key={a} className="border-b border-border"><td className="py-5 pr-6 font-display text-lg">{a}</td><td className="py-5 text-foreground/75">{b}</td></tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-8"><Note>We do not display a universal coffee score, certification logo or a blanket "fully traceable" promise. Instead, we share verifiable evidence for each lot.</Note></div>
            </div>
          </div>
        </Section>
      </section>
      <QuoteCTA title="Request Samples & Lot Specifications" />
    </>
  );
}
