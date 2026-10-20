import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BuyerResources } from "@/components/site/BuyerResources";
import img from "@/assets/Hands-on_Coffee_Cupping_Tasting_1.png";
import { Heading, Note, PageHero, QuoteCTA, Section } from "@/components/site/Layout";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/quality")({
  head: () => seo("Quality, Compliance & Traceability, VonSchelling", "Our framework for supplier qualification, product verification, traceability, certifications and export documentation."),
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
  ["Chillies", "Phytosanitary requirements, pesticide-residue limits, food-safety controls and processing or facility approvals"],
  ["Meats", "Veterinary permits and health certificates, eligible establishments, cold-chain controls and destination approvals"],
  ["Dried fruits", "Food-safety management, microbiological and chemical controls, labelling, shelf-life validation and buyer certifications"],
];
const pipeline = [
  ["Highland Farmer Cooperatives & Auctions", "Origin sourcing, lot identity and supplier records established at the farm gate and auction floor."],
  ["Central Nairobi Cupping & Sorting Facility", "Grading, sensory cupping, physical sorting and pre-shipment sampling under one roof."],
  ["Mombasa Port, Port-Side Logistics", "Container stuffing, customs clearance, certification checks and vessel loading."],
  ["Global Destination Port", "Documented handover to the buyer's destination with full shipment records."],
];

const authorities = [
  ["Coffee licensing", "Verify the current licence, issuer, validity and activity scope with the competent Kenyan coffee authority. Confirm the applicable role of AFA and the Coffee Board of Kenya for the transaction."],
  ["ICO · Coffee origin records", "Check whether an International Coffee Organization Certificate of Origin is applicable to the consignment. This is not a quality certification."],
  ["KEPHIS · Plant health", "Confirm destination-specific phytosanitary requirements and applicable Kenya Plant Health Inspectorate Service certificates for plant products."],
  ["KNCCI · Trade origin", "Confirm the required origin documentation and competent issuer, including the Kenya National Chamber of Commerce and Industry where applicable. Preferential origin rules are assessed separately."],
];

function Quality() {
  return (
    <>
      <PageHero image={img} eyebrow="Quality & Traceability" title="Our Quality & Compliance Framework." intro="One disciplined approach, applied to the needs of each commodity and destination market." />
      <Section>
        <div className="grid gap-px bg-border md:grid-cols-5">
          {steps.map(([t, d], i) => (
            <div key={t} className="bg-background p-8"><p className="font-display text-4xl text-gold">0{i + 1}</p><h3 className="mt-4 text-xl">{t}</h3><p className="mt-3 text-sm text-muted-foreground">{d}</p></div>
          ))}
        </div>
        <div className="mt-10"><Note>Testing verification includes pre-shipment sampling, sensory cupping evaluations, and chemical testing aligned with global standards (SGS, Bureau Veritas, or KEPHIS compliance frameworks).</Note></div>
      </Section>

      <section className="bg-forest-deep text-ivory">
        <Section>
          <Heading light eyebrow="Supply Chain Pipeline" title="Traceability, from highland farm to destination port." intro="Every consignment moves through a documented pipeline. Each stage hands over records to the next." />
          <ol className="mt-16 grid gap-10 md:grid-cols-4 md:gap-0">
            {pipeline.map(([t, d], i) => (
              <li key={t} className="relative md:px-6">
                {i < pipeline.length - 1 && <span className="absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] translate-x-6 bg-gold/40 md:block" />}
                <span className="relative flex h-12 w-12 items-center justify-center border border-gold bg-forest-deep font-display text-xl text-gold">0{i + 1}</span>
                <h3 className="mt-6 text-2xl leading-snug">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/70">{d}</p>
              </li>
            ))}
          </ol>
        </Section>
      </section>

      <section className="bg-secondary/50">
        <Section>
          <Heading eyebrow="By Commodity" title="Requirements we assess." intro="What we check with suppliers and authorities for every product we offer." />
          <div className="mt-12 divide-y divide-border border-y border-border">
            {reqs.map(([a, b]) => (
              <div key={a} className="grid gap-4 py-8 md:grid-cols-[220px_1fr]"><p className="font-display text-3xl">{a}</p><p className="text-foreground/75">{b}</p></div>
            ))}
          </div>
          <div className="mt-10"><Note>Depending on customer and supply chain, buyers may request HACCP, ISO 22000, GlobalG.A.P., organic or other market-specific schemes. KEPHIS handles phytosanitary certification for plant products; the Directorate of Veterinary Services oversees veterinary trade certification for meat.</Note></div>
        </Section>
      </section>
      <Section>
        <Heading eyebrow="Regulatory & Trade Records" title="Verify the authority. Verify the document." intro="Buyer approval starts with current, transaction-specific evidence. These are the Kenyan bodies whose records support each shipment, so your team can verify every document." />
        <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {authorities.map(([title, description]) => <div key={title} className="border-t border-gold/40 pt-6"><h3 className="text-2xl">{title}</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p></div>)}
        </div>
      </Section>
      <section className="bg-forest-deep text-ivory">
        <Section>
          <Heading light eyebrow="EU Buyer Due Diligence · EUDR" title="Evidence at plot level. Confidence at lot level." intro="For EU-bound coffee, we work through the plot-level evidence with you before you commit to a lot, so your due diligence rests on records." />
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              ["Locate production", "Request plot geolocation, production dates and the chain linking the plots to the offered coffee. Polygon data is needed where the regulation requires it."],
              ["Review the evidence", "Assess records against the 31 December 2020 deforestation cut-off and relevant production-country law. Identify gaps and risk mitigation requirements."],
              ["Agree responsibilities", "Confirm the EU operator's applicable due diligence and Information System statement obligations. An export document does not replace EUDR due diligence."],
            ].map(([title, description], i) => <li key={title} className="border-t border-gold/40 pt-6"><p className="font-display text-4xl text-gold">0{i + 1}</p><h3 className="mt-4 text-2xl">{title}</h3><p className="mt-4 text-sm leading-relaxed text-ivory/75">{description}</p></li>)}
          </ol>
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-ivory/75">We prepare the supporting records lot by lot and share them early, so your compliance team can review them in good time against the obligations for your operator category.</p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Button asChild className="h-auto whitespace-normal bg-gold px-6 py-4 text-forest-deep hover:bg-gold-soft"><Link to="/contact" search={{ request: "documents" }}>Enquire about EUDR-related records<ArrowUpRight /></Link></Button>
            <a href="https://eur-lex.europa.eu/eli/reg/2023/1115" target="_blank" rel="noreferrer" className="text-sm text-gold-soft underline underline-offset-4">Read the EU regulation</a>
          </div>
        </Section>
      </section>
      <Section>
        <Heading eyebrow="Evidence for Procurement" title="Build a lot-specific approval file." intro="Request the issuing laboratory, test method, date and lot reference for a COA, and the evaluator and method for a cupping report. We tell you upfront which documents come with your lot." />
        <BuyerResources />
      </Section>
      <QuoteCTA />
    </>
  );
}
