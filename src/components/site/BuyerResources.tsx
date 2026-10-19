import { Download, FileCheck, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { COFFEE_MOISTURE } from "@/lib/procurement";

const resources = [
  {
    title: "Green Coffee Beans buyer specification checklist",
    file: "vonschelling-coffee-specification-checklist.txt",
    description: "Grade, origin, moisture, sample evaluation and shipment acceptance criteria.",
    body: `VONSCHELLING LIMITED\nGREEN COFFEE BEANS BUYER SPECIFICATION CHECKLIST\n\nPlanning checklist only. Not a current lot offer or certificate.\n\nConfirm for the offered lot:\n1. Lot reference, supplier, estate/cooperative, county, crop and processing.\n2. Grade: AA, AB, PB (Peaberry), C or specialty micro-lot.\n3. Varieties and available volume.\n4. Screen distribution and physical grading method.\n5. Moisture target: ${COFFEE_MOISTURE.min}% to ${COFFEE_MOISTURE.max}%; confirm test method, date and lot result.\n6. Primary/secondary defect counts, sample weight and agreed acceptance limits.\n7. Water activity result and agreed limit if required.\n8. Cupping report, evaluator, method, sample date and approval.\n9. Representative evaluation sample: requested 300g or 500g, subject to confirmation.\n10. Packaging, net bag weight, liners and lot labels.\n11. Destination requirements, testing, documents and traceability depth.\n12. Incoterm, named place, price, currency, payment and shipment window.\n\nRequest lot-specific records: info@vonschelling.co.ke\n`,
  },
  {
    title: "Buyer due diligence checklist",
    file: "vonschelling-buyer-due-diligence-checklist.txt",
    description: "Supplier verification, applicable export records and EU due diligence evidence.",
    body: "VONSCHELLING LIMITED\nBUYER DUE DILIGENCE CHECKLIST\n\nPlanning checklist only. Not an export licence, COA, certification or EUDR clearance.\n\nRequest and verify where applicable:\n1. Legal supplier identity, applicable coffee licences, validity and scope.\n2. Lot specification, origin and supplier-to-shipment chain of records.\n3. Cupping report and lot-specific Certificate of Analysis (COA), with issuing laboratory, method and date.\n4. Applicable KEPHIS phytosanitary certificate and destination requirements.\n5. ICO Certificate of Origin where applicable, customs and shipment documents.\n6. Preferential origin evidence only when applicable to the destination and trade arrangement.\n7. For EU-bound coffee: production-plot geolocation, production dates, evidence against the 31 December 2020 deforestation cut-off and compliance with relevant production-country law.\n8. Risk assessment, mitigation evidence where needed, and importer/operator responsibilities for the due diligence statement.\n9. Written confirmation of record availability before an EU-bound order is accepted. Auction lot identity alone does not establish farm-level EUDR evidence.\n10. Contract, sampling approval, payment, Incoterm and named place, insurance and shipment window.\n\nAvailability of evidence must be confirmed per lot. No blanket EUDR-ready or certification claim is made.\nContact: info@vonschelling.co.ke\n",
  },
];

function downloadResource(file: string, body: string) {
  const url = URL.createObjectURL(new Blob([body], { type: "text/plain;charset=utf-8" }));
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = file;
  anchor.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function BuyerResources() {
  return (
    <div className="mt-12 border-t border-border pt-10">
      <p className="eyebrow text-gold">Buyer resources</p>
      <h3 className="mt-3 text-3xl">Prepare your procurement file.</h3>
      <div className="mt-6 grid gap-8 md:grid-cols-2">
        {resources.map((resource) => (
          <div key={resource.file} className="border-t border-gold/40 pt-6">
            <FileCheck className="h-6 w-6 text-primary" aria-hidden="true" />
            <h4 className="mt-4 text-2xl">{resource.title}</h4>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{resource.description}</p>
            <Button variant="outline" className="mt-5 h-auto whitespace-normal py-3" onClick={() => downloadResource(resource.file, resource.body)}><Download />Download checklist</Button>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">These are planning checklists, not certificates or current lot reports. Request verified licences, a lot-specific COA and cupping records according to availability.</p>
      <Button asChild variant="link" className="mt-3 h-auto whitespace-normal px-0 text-left"><Link to="/contact" search={{ request: "documents" }}>Request lot-specific documents<ArrowUpRight /></Link></Button>
    </div>
  );
}