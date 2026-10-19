import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/port.jpg";
import storage from "@/assets/Warm_Burlap_Sacks_in_Storage.webp.asset.json";
import { BulletGrid, Heading, Note, PageHero, QuoteCTA, Section, SpecTable } from "@/components/site/Layout";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/export-logistics")({
  head: () => seo("Export & Logistics from Kenya, VonSchelling", "From enquiry to delivery: quotations, samples, contracts, documentation and freight coordinated from Kenya."),
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
            <div className="space-y-8">
              <SpecTable title="Loading Points & Shipping Configurations" rows={[
                ["Sea Freight", "FOB Port of Mombasa (KE_MBA) containerized cargo"],
                ["Air Freight", "FCA Jomo Kenyatta International Airport (KE_NBO) cargo terminals"],
                ["Incoterms Supported", "FOB, CFR, CIF"],
              ]} />
              <SpecTable title="Documentation Support" rows={[
                ["Certificates", "Phytosanitary Certificates, Certificates of Origin, EUR.1 movement certificates"],
                ["Freight", "Bill of Lading clearance and full shipment documentation"],
              ]} />
            </div>
          </div>
          <figure className="mt-12">
            <img src={storage.url} alt="Burlap coffee sacks stacked in a warehouse ahead of shipment" loading="lazy" width={1535} height={1024} className="aspect-[4/3] w-full object-cover md:aspect-[21/9]" />
            <figcaption className="mt-3 text-xs text-muted-foreground">Coffee storage and shipment preparation.</figcaption>
          </figure>
          <div className="mt-12"><Note>We don't promise fixed transit times or guaranteed capacity until supported by confirmed freight arrangements. For temperature-sensitive products, logistics and import eligibility are established before an order is accepted.</Note></div>
        </Section>
      </section>
      <QuoteCTA />
    </>
  );
}
