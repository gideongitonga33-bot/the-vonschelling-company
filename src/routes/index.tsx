import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero-farm.jpg";
import chillies from "@/assets/chilies.jpg";
import meats from "@/assets/meats.jpg";
import fruits from "@/assets/dried-fruits.jpg";
import flagship from "@/assets/espresso-cup-and-beans.jpg.asset.json";
import port from "@/assets/port.jpg";
import bag from "@/assets/mizizi-bag.png.asset.json";
import { Heading, QuoteCTA, Section } from "@/components/site/Layout";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "VonSchelling, Premium Kenyan Agricultural Exports",
      "Kenyan green coffee beans, Mizizi roasted coffee, chillies, meats and dried fruits, responsibly sourced and export-ready for international buyers.",
    ),
  component: Index,
});

const others = [
  { to: "/chilies", title: "Chillies", text: "Fresh, dried whole and processed formats to agreed specifications.", img: chillies },
  { to: "/meats", title: "Meats", text: "Eligible products supplied through approved, veterinary-inspected partners.", img: meats },
  { to: "/dried-fruits", title: "Dried Fruits", text: "Mango, pineapple, banana and papaya, clearly specified.", img: fruits },
] as const;

const pillars = [
  ["Responsible Sourcing", "Farmers, cooperatives and licensed supply partners, and authorised auction channels where appropriate."],
  ["Quality Assurance", "Specifications, sampling, cupping and testing agreed for each commodity and buyer."],
  ["Traceability", "Supplier, origin, lot and shipment records, with traceability depth stated accurately."],
  ["Export Partnership", "Documentation, Incoterms, freight and shipment coordination from Kenya to destination."],
];

function Index() {
  return (
    <>
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <img src={hero} alt="Kenyan highland coffee farm at sunrise" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="fade-up relative mx-auto w-full max-w-7xl px-6 pb-24 text-ivory">
          <p className="eyebrow text-gold-soft">Premium Kenyan Agri-Exports</p>
          <h1 className="mt-6 max-w-4xl text-6xl leading-[0.98] md:text-8xl">
            From Kenyan soil<br /><em className="text-gold-soft">to world markets.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ivory/85">
            VonSchelling connects Kenyan agricultural products to international buyers through responsible sourcing,
            quality assurance, traceability and dependable export partnerships.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/coffee" className="bg-gold px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase text-forest-deep transition hover:bg-gold-soft">Explore Our Coffee</Link>
            <Link to="/contact" className="border border-ivory/60 px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase text-ivory transition hover:bg-ivory/10">Request a Quotation</Link>
          </div>
        </div>
      </section>

      <div className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border md:grid-cols-4">
          {["Coffee · Flagship", "Chillies", "Meats", "Dried Fruits"].map((t) => (
            <div key={t} className="eyebrow px-6 py-6 text-center text-primary">{t}</div>
          ))}
        </div>
      </div>

      {/* Coffee flagship */}
      <Section>
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <Heading
              eyebrow="Flagship Operation · Coffee"
              title="Kenyan coffee. From origin to opportunity."
              intro="We connect coffee supply partners in Kenya with international importers, commodity traders and roasters, offering green coffee beans, our Mizizi roasted coffee and private-label opportunities."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[["01", "Green Coffee Beans", "Primary export offering"], ["02", "Mizizi Coffee", "Roasted & packaged"], ["03", "Private Label", "Your brand, Kenyan coffee"]].map(([n, t, s]) => (
                <div key={n} className="border-t border-gold pt-4">
                  <p className="font-display text-3xl text-gold">{n}</p>
                  <p className="mt-1 font-semibold">{t}</p>
                  <p className="text-sm text-muted-foreground">{s}</p>
                </div>
              ))}
            </div>
            <Link to="/coffee" className="mt-10 inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-primary">
              Discover the coffee operation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <img src={flagship.url} alt="Espresso in a ceramic cup with roasted coffee beans and a rustic spoon on dark wood" loading="lazy" width={683} height={1024} className="shadow-elegant aspect-[4/3] w-full object-cover object-top" />
        </div>
      </Section>

      {/* Mizizi */}
      <section className="overflow-hidden bg-navy text-ivory">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-0">
          <img src={bag.url} alt="Mizizi Coffee 500g medium roast bag" loading="lazy" className="w-full md:max-h-[760px] md:object-cover" />
          <div className="md:py-24">
            <p className="eyebrow text-gold">Our Special Blend</p>
            <h2 className="mt-4 text-5xl md:text-7xl">Mizizi Coffee</h2>
            <p className="mt-3 font-display text-2xl italic text-gold-soft">Rooted in Kenya. Crafted for the world.</p>
            <div className="gold-rule my-8 w-32" />
            <p className="max-w-lg leading-relaxed text-ivory/75">
              "Mizizi" means <em>roots</em> in Swahili. Our premium roasted coffee, 100% Arabica from the heart of Kenya,
              available in whole-bean or ground formats, light, medium and dark roasts, for retail, hospitality and distribution partners.
            </p>
            <Link to="/coffee" hash="mizizi" className="mt-10 inline-block border border-gold px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase text-gold transition hover:bg-gold hover:text-navy">
              Meet Mizizi
            </Link>
          </div>
        </div>
      </section>

      {/* Other categories */}
      <Section>
        <Heading eyebrow="Products & Operations" title="Four categories. One standard of care." intro="Every product has its own dedicated page with formats, specifications and export requirements." />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {others.map((o) => (
            <Link key={o.to} to={o.to} className="group block">
              <div className="overflow-hidden">
                <img src={o.img} alt={o.title} loading="lazy" width={1280} height={960} className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <h3 className="mt-6 text-3xl">{o.title}</h3>
              <p className="mt-2 text-muted-foreground">{o.text}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">View specifications <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Pillars */}
      <section className="bg-forest-deep text-ivory">
        <Section>
          <Heading light eyebrow="Our Approach" title="Sourcing, quality and traceability, built into every transaction." />
          <div className="mt-16 grid gap-10 md:grid-cols-4">
            {pillars.map(([t, d], i) => (
              <div key={t} className="border-t border-ivory/15 pt-6">
                <p className="font-display text-4xl text-gold">0{i + 1}</p>
                <h3 className="mt-3 text-2xl">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/70">{d}</p>
              </div>
            ))}
          </div>
          <Link to="/quality" className="mt-14 inline-flex items-center gap-3 text-sm font-semibold text-gold">Our quality framework <ArrowRight className="h-4 w-4" /></Link>
        </Section>
      </section>

      {/* Export */}
      <section className="relative overflow-hidden">
        <img src={port} alt="Container port at dusk" loading="lazy" width={1600} height={912} className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-6 py-36 text-ivory">
          <Heading light eyebrow="Export & Logistics" title="Coordinated from Kenya to your destination." intro="Sea, air or road freight, cold chain where required, agreed Incoterms and complete shipment documentation." />
          <Link to="/export-logistics" className="mt-10 inline-flex items-center gap-3 text-sm font-semibold text-gold-soft">How we ship <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <QuoteCTA />
    </>
  );
}
