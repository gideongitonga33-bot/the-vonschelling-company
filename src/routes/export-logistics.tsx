import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/port.jpg";
import { BulletGrid, Heading, Note, PageHero, QuoteCTA, Section } from "@/components/site/Layout";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/export-logistics")({
  head: () => seo("Export & Logistics from Kenya — VonSchelling", "From enquiry to delivery: quotations, samples, contracts, documentation and freight coordinated from Kenya."),
  component: Exp,
});

const steps = [
  ["Enquiry & requirements", "Product, specification, destination, quantity, packaging and delivery date."],
  ["Supply & quotation", "Verify availability with supply partners and quote on agreed terms."],
  ["Samples & approval", "Arrange samples, specifications and agreed quality checks."],
  ["Contract & payment", "Price, currency, payment terms, Incoterms, schedule and responsibilities."],
  ["Preparation & documentation", "Sourcing, processing, packing, inspections and export documents."],
  ["Freight & shipment", "Road, air or sea transport, temperature control, insurance and tracking."],
  ["Delivery & records", "Shipment documents and communication through post-shipment follow-up."],
];

function Exp() {
  return (
    <>
      <PageHero image={img} eyebrow="Export & Logistics" title="From Enquiry to Delivery." intro="Every shipment coordinated for the product, route, buyer and destination." />
      <Section>
        <Heading eyebrow="How an order moves" title="Seven coordinated stages." />
        <ol className="mt-14 space-y-0 border-l border-gold/50">
          {steps.map(([t, d], i) => (
            <li key={t} className="relative py-6 pl-12">
              <span className="absolute -left-[9px] top-8 h-4 w-4 rotate-45 border border-gold bg-background" />
              <p className="eyebrow text-gold">Stage 0{i + 1}</p>
              <h3 className="mt-2 text-3xl">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </Section>
      <section className="bg-secondary/50">
        <Section>
          <div className="grid gap-16 md:grid-cols-2">
            <BulletGrid title="What we coordinate" items={[
              "Shipment planning from Kenya to the buyer's destination.",
              "Packaging and handling appropriate to each commodity.",
              "Sea, air or road freight where commercially suitable.",
              "Cold-chain arrangements for eligible chilled or frozen products.",
              "Inspections, permits, certificates and customs documentation.",
              "Cargo insurance and risk allocation as agreed.",
            ]} />
            <div>
              <h3 className="text-2xl">Incoterms & payment</h3>
              <div className="gold-rule mt-4 w-24" />
              <p className="mt-6 leading-relaxed text-foreground/80">Quotations are prepared using agreed Incoterms — such as FOB or CIF where suitable for the product and route. Each quotation specifies the delivery point, cost allocation, insurance responsibilities, payment milestones and contract conditions.</p>
              <div className="mt-8"><Note>We don't promise fixed transit times or guaranteed capacity until supported by confirmed freight arrangements. For temperature-sensitive products, logistics and import eligibility are established before an order is accepted.</Note></div>
            </div>
          </div>
        </Section>
      </section>
      <QuoteCTA />
    </>
  );
}
