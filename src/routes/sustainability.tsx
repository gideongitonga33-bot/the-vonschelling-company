import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/hero-farm.jpg";
import farmer from "@/assets/coffee-farmer.png.asset.json";
import { Heading, PageHero, QuoteCTA, Section } from "@/components/site/Layout";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/sustainability")({
  head: () => seo("Sustainability & Responsible Sourcing, VonSchelling", "Growth that begins at origin: responsible sourcing aligned with UN SDG 8 and SDG 12."),
  component: Sus,
});

const pillars = [
  ["Supporting Agricultural Livelihoods", "We work with farmers, cooperatives and supply partners to connect products with market opportunities, grounded in clear requirements and fair dealing."],
  ["Traceability & Transparency", "We maintain supplier, origin, product and lot records by commodity and sourcing route, and keep improving their completeness and reliability."],
  ["Responsible Product Handling", "We protect product integrity and reduce avoidable losses through appropriate storage, handling, packaging and transport."],
];

function Sus() {
  return (
    <>
      <PageHero image={img} eyebrow="Sustainability & Responsible Sourcing" title="Growth That Begins at Origin." intro="Agricultural trade should create value across the supply chain, through responsible relationships, transparent information and fair commercial practice." />
      <Section>
        <div className="grid gap-px bg-border md:grid-cols-3">
          {pillars.map(([t, d]) => (<div key={t} className="bg-background p-10"><h3 className="text-3xl">{t}</h3><p className="mt-4 text-muted-foreground">{d}</p></div>))}
        </div>
      </Section>

      <section className="bg-secondary/50">
        <Section>
          <div className="grid items-center gap-16 md:grid-cols-2">
            <img src={farmer.url} alt="Kenyan farmer hand-picking ripe coffee cherries on a highland farm" loading="lazy" className="shadow-elegant aspect-[4/3] w-full object-cover" />
            <div>
              <Heading eyebrow="Direct & Fair Pathways" title="Trading directly with Kenyan cooperative societies." intro="Our sourcing model prioritises fair and direct transaction pathways with domestic agricultural cooperative societies, so more of the export value reaches the farmers who grow the product." />
              <ul className="mt-8 space-y-4 text-[0.95rem] leading-relaxed text-foreground/80">
                <li className="flex gap-4"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />Direct engagement with registered farmer cooperatives and societies across Kenya's highland growing regions.</li>
                <li className="flex gap-4"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />Transparent pricing agreed at the society level, with payment records retained per lot.</li>
                <li className="flex gap-4"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />Shorter supply chains that cut unnecessary intermediaries between farmer and export market.</li>
              </ul>
            </div>
          </div>
        </Section>
      </section>

      <section className="bg-forest-deep text-ivory">
        <Section>
          <Heading light eyebrow="Our SDG Alignment" title="Measured by practice, not promises." />
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <div className="border border-gold/40 p-10">
              <p className="eyebrow text-gold">Primary · SDG 8</p>
              <h3 className="mt-4 text-4xl">Decent Work & Economic Growth</h3>
              <p className="mt-4 text-ivory/70">Develop market opportunities for agricultural producers, encourage responsible partnerships and contribute to sustainable growth and employment.</p>
            </div>
            <div className="border border-ivory/15 p-10">
              <p className="eyebrow text-gold-soft">Supporting · SDG 12</p>
              <h3 className="mt-4 text-4xl">Responsible Consumption & Production</h3>
              <p className="mt-4 text-ivory/70">Encourage sourcing records, traceability, food-safety practices, responsible resource use and reduced avoidable losses.</p>
            </div>
          </div>
          <p className="mt-14 max-w-3xl font-display text-2xl italic text-ivory/85">"We view sustainability as an ongoing operational responsibility rather than a marketing claim."</p>
        </Section>
      </section>
      <QuoteCTA />
    </>
  );
}
