import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/cupping.jpg";
import { Heading, Note, PageHero, QuoteCTA, Section } from "@/components/site/Layout";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/quality")({
  head: () => seo("Quality, Compliance & Traceability — VonSchelling", "Our framework for supplier qualification, product verification, traceability, certifications and export documentation."),
  component: Quality,
});

const steps = [
  ["Supplier qualification", "Establish supplier identity, sourcing authority, product records and relevant approvals."],
  ["Product verification", "Confirm specifications, sampling, testing needs and acceptance criteria for the commodity."],
  ["Traceability & records", "Retain supplier, origin, lot, processing and shipment records, with depth stated accurately."],
  ["Certifications & approvals", "Verify licences, certificates, approved facilities, inspection reports and market requirements."],
  ["Export documentation", "Coordinate documents for the specific product, route, buyer and destination."],
];
const reqs = [
  ["Coffee", "Coffee trading and export licences, lot specifications, cupping records, food-safety controls and buyer-requested certifications"],
  ["Chilies", "Phytosanitary requirements, pesticide-residue limits, food-safety controls and processing or facility approvals"],
  ["Meats", "Veterinary permits and health certificates, eligible establishments, cold-chain controls and destination approvals"],
  ["Dried fruits", "Food-safety management, microbiological and chemical controls, labelling, shelf-life validation and buyer certifications"],
];

function Quality() {
  return (
    <>
      <PageHero image={img} eyebrow="Quality & Traceability" title="Our Quality & Compliance Framework." intro="One disciplined approach — applied according to the requirements of each commodity, facility and destination." />
      <Section>
        <div className="grid gap-px bg-border md:grid-cols-5">
          {steps.map(([t, d], i) => (
            <div key={t} className="bg-background p-8"><p className="font-display text-4xl text-gold">0{i + 1}</p><h3 className="mt-4 text-xl">{t}</h3><p className="mt-3 text-sm text-muted-foreground">{d}</p></div>
          ))}
        </div>
      </Section>
      <section className="bg-secondary/50">
        <Section>
          <Heading eyebrow="By Commodity" title="Requirements we assess." intro="Categories we assess with suppliers and authorities for each product — not a claim of certificates held." />
          <div className="mt-12 divide-y divide-border border-y border-border">
            {reqs.map(([a, b]) => (
              <div key={a} className="grid gap-4 py-8 md:grid-cols-[220px_1fr]"><p className="font-display text-3xl">{a}</p><p className="text-foreground/75">{b}</p></div>
            ))}
          </div>
          <div className="mt-10"><Note>Depending on customer and supply chain, buyers may request HACCP, ISO 22000, GlobalG.A.P., organic or other market-specific schemes. KEPHIS handles phytosanitary certification for plant products; the Directorate of Veterinary Services oversees veterinary trade certification for meat.</Note></div>
        </Section>
      </section>
      <QuoteCTA />
    </>
  );
}
