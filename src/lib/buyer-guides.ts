export const GUIDE_PATHS = [
  "/guides/kenyan-coffee-grades-explained",
  "/guides/kenyan-coffee-crop-calendar",
  "/guides/kenyan-green-coffee-importing-guide",
  "/guides/coffee-auction-vs-direct-trade-kenya",
  "/guides/coffee-moisture-and-water-activity-standards",
] as const;

export type BuyerGuide = {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: "beans" | "harvest" | "cupping" | "drying";
  shareImage: string;
  sections: { title: string; paragraphs: string[]; bullets?: string[] }[];
  sources: { label: string; url: string }[];
};

export const BUYER_GUIDES: BuyerGuide[] = [
  {
    slug: "kenyan-coffee-grades-explained",
    title: "Kenyan coffee grades explained",
    description: "AA, AB, PB, C and specialty micro-lots: how to compare Kenyan Green Coffee Beans by screen, preparation and cup quality.",
    category: "Grades & buying", image: "beans", shareImage: "coffee.jpg",
    sections: [
      { title: "Grade describes the bean. Cupping evaluates the coffee.", paragraphs: ["Kenyan grade names help buyers describe physical bean size and shape. They do not guarantee a cup score, density or flavour. An AA label is not, on its own, evidence that a coffee will outperform an AB or a peaberry lot on your cupping table.", "Use grade to narrow your brief, then compare the offered lot's physical report, representative sample and cup evaluation. Country and county notes are useful context, not a substitute for tasting."] },
      { title: "What AA, AB, PB and C mean", paragraphs: [], bullets: ["AA: large flat beans, commonly associated with screens 17/18.", "AB: medium flat beans, commonly associated with screens 15/16.", "PB: peaberries, rounded single beans separated by shape and graded using round-hole screens.", "C: smaller flat beans, commonly associated with screens 14/15.", "Specialty micro-lots: individually identified coffees selected for distinct attributes. Micro-lot is not a screen grade or a guaranteed score."] },
      { title: "Build a specification your team can approve", paragraphs: ["Request the screen distribution rather than assuming all beans sit on a single screen. Agree defect categories, sample weight, acceptance limits and preparation. If density matters to your roasting programme, ask for a measured result and method rather than inferring it from size or altitude.", "For a scored offer, request the evaluator, protocol and sample date. Compare sweetness, acidity, body and finish against your intended use. Blackcurrant, citrus and floral notes are possible Kenyan characteristics, not guaranteed tasting notes for every grade."], bullets: ["State grade, crop, preferred origin, volume and cup profile.", "Review moisture, processing, physical grading and lot identity.", "Approve a representative sample and record the acceptance criteria in the contract."] },
    ],
    sources: [{ label: "Kenya Coffee Directorate yearbook", url: "https://kenyacoffee.co.ke/resources/2023/Coffee%20Book%20Year%202023-24-compressed.pdf" }],
  },
  {
    slug: "kenyan-coffee-crop-calendar",
    title: "Kenyan coffee crop calendar",
    description: "Plan Kenyan coffee purchases around indicative main and fly crops, lot preparation and agreed shipment windows.",
    category: "Origin & seasons", image: "harvest", shareImage: "guides-harvest.jpg",
    sections: [
      { title: "Two harvests, with regional variation", paragraphs: ["Kenya's main and fly crops give importers more than one buying window. November to January is a useful main-crop planning focus within a broader October to January harvest range. The fly crop is commonly planned around May to July.", "These are indicative harvest periods, not nationwide fixed dates. Rainfall, altitude, county and mill conditions affect picking and preparation. Nyeri, Kirinyaga, Murang'a, Kiambu, Embu and Meru do not all release coffee on the same timetable."] },
      { title: "Harvest is not the shipment date", paragraphs: ["Freshly picked cherries still need processing, drying, stabilisation, milling and grading before export preparation. Sampling, buyer approval, contracting, documentation and a freight booking also sit between harvest and departure.", "The Coffee page uses January to June for main-crop export planning and July to October for fly-crop planning. Treat these as a starting conversation. The offered lot's actual readiness, stock position and carrier schedule determine the window you can contract."] },
      { title: "Work backwards from your arrival requirement", paragraphs: ["Start with when your roastery or warehouse needs coffee, then allow time for preparation, export handling, sea freight and destination clearance. Distinguish the cargo-ready date, vessel departure and estimated arrival; they are separate milestones.", "If you are comparing stored coffee with fresh-crop arrivals, ask for crop year, storage conditions and a current sample. A recent harvest does not automatically establish the quality of a particular lot."], bullets: ["Confirm crop year, county, lot reference and milling status.", "Agree sample approval and a cargo-ready window.", "Check destination requirements and the freight quotation.", "Record the named port, shipping window and packing specification in the contract."] },
    ],
    sources: [{ label: "ICO / AFA Kenya coffee country profile", url: "https://www.ico.org/documents/cy2018-19/icc-124-7e-profile-kenya.pdf" }],
  },
  {
    slug: "kenyan-green-coffee-importing-guide",
    title: "Importing Kenyan Green Coffee Beans",
    description: "A buyer's guide to sample approval, export documents, EUDR evidence and FOB Mombasa versus CIF shipment terms.",
    category: "Documents & shipping", image: "cupping", shareImage: "guides-cupping.jpg",
    sections: [
      { title: "Start with the lot and your destination", paragraphs: ["A clear purchase brief states grade, crop, origin preference, volume, cup profile and destination. Review the supplier identity and applicable licensing, then approve a representative sample against agreed cup and physical acceptance criteria.", "There is no single document pack that satisfies every destination. Confirm requirements with your importer, customs agent and relevant authority before you contract. This guide is a planning reference, not a customs or legal clearance." ] },
      { title: "Agree the document pack before shipment", paragraphs: ["A commercial invoice, packing list and transport document support the shipment. Check which Kenyan export records, KEPHIS phytosanitary certificate and destination-specific tests apply to your order. An ICO Certificate of Origin identifies origin under the relevant coffee procedures; it is not a cupping or quality certificate.", "Preferential origin evidence is separate and depends on the trade arrangement. A lot-specific COA or cupping report also serves a different purpose from export paperwork."], bullets: ["Verify issuing bodies, scope, lot references and document validity.", "Match bag counts, net weights and labels to the packing list.", "Confirm who arranges each document and when it will be available."] },
      { title: "For EU-bound coffee, verify the underlying evidence", paragraphs: ["Request production-plot geolocation, production dates, evidence against the 31 December 2020 deforestation cut-off and relevant production-country legality records. Confirm the evidence chain for the actual lot. Auction identity alone does not establish farm-level due diligence.", "The EU operator is responsible for applicable due diligence, risk assessment and statement requirements. Check the European Commission's current application dates and your operator category before relying on a deadline. No blanket EUDR clearance is implied by this guide."] },
      { title: "FOB and CIF allocate costs and risk", paragraphs: ["State the named port and Incoterms edition. Under FOB Mombasa, risk transfers when coffee is on board the vessel at the shipment port. Under CIF, the seller also arranges freight and insurance to the named destination port; risk still transfers at shipment. Confirm insurance scope, destination charges and the agreed shipment window in writing."] },
    ],
    sources: [
      { label: "Kenya Trade Information Portal", url: "https://infotradekenya.go.ke/Requirements?l=en" },
      { label: "KEPHIS phytosanitary guidance", url: "https://www.kephis.go.ke/faqs-0" },
      { label: "European Commission EUDR guidance", url: "https://environment.ec.europa.eu/topics/forests/deforestation/regulation-deforestation-free-products_en" },
      { label: "ICC Incoterms rules", url: "https://iccwbo.org/business-solutions/incoterms-rules/" },
    ],
  },
  {
    slug: "coffee-auction-vs-direct-trade-kenya",
    title: "Kenyan coffee auction versus direct trade",
    description: "Compare Nairobi Coffee Exchange auction sourcing and direct estate channels for volume, lot selection and traceability.",
    category: "Sourcing channels", image: "harvest", shareImage: "guides-harvest.jpg",
    sections: [
      { title: "Two sourcing routes, one buyer specification", paragraphs: ["Kenyan coffee can be sourced through the Nairobi Coffee Exchange auction or through regulated direct-sale arrangements. The route explains how a transaction is organised; it does not, by itself, guarantee quality, pricing or traceability.", "VonSchelling also purchases through the NCE auction, especially to meet commercial volume requirements. Direct estate channels provide another sourcing path. We start with your specification and the available lot, rather than treating either route as universally better."] },
      { title: "Auction sourcing for lot choice and volume", paragraphs: ["The NCE provides a structured marketplace with identified lots and trading procedures. It can support comparison across offered grades and origins. For larger orders, clarify whether the offer is one lot or several lots and how the final consignment will be identified.", "Auction access does not mean every grade, county or volume is continuously available. Confirm current offerings, sample results and the authorised transaction arrangements. An auction reference should connect to the coffee you approve and the shipment records."] },
      { title: "Direct sourcing for a defined estate or programme", paragraphs: ["A direct-sale arrangement may suit a buyer seeking a specific estate, preparation or repeat purchasing relationship. It remains subject to applicable licences, transaction rules and available production. Direct does not automatically mean lower cost, a higher score or complete farm-level evidence.", "For either route, distinguish a general origin story from the records available for the offered coffee. Request supplier, estate or cooperative, factory, crop and lot details at the depth your destination and procurement policy need."] },
      { title: "Questions to settle before purchasing", paragraphs: ["Use the same approval process whichever sourcing route you choose. Sample, specification, contract and shipment records should describe the same agreed coffee."], bullets: ["Is this one lot or a proposed combination of lots?", "Who is the licensed counterparty for the transaction?", "Which upstream records are available for each lot?", "How are quality acceptance, pricing and volume agreed?", "For EU-bound coffee, can production-plot evidence be supplied for the selected lots?"] },
    ],
    sources: [{ label: "Nairobi Coffee Exchange trading rules", url: "https://www.nairobicoffeeexchange.co.ke/licensing-rules" }, { label: "Kenya coffee regulations", url: "https://new.kenyalaw.org/akn/ke/act/ln/2019/102/eng@2022-12-31" }],
  },
  {
    slug: "coffee-moisture-and-water-activity-standards",
    title: "Green coffee moisture and water activity",
    description: "Understand the 10% to 11% moisture target, separate water-activity testing and protective packaging for Kenyan coffee shipments.",
    category: "Quality & storage", image: "drying", shareImage: "guides-drying.jpg",
    sections: [
      { title: "Moisture content and water activity are different", paragraphs: ["Moisture content describes the amount of water in the coffee. Water activity describes how available that water is for reactions and microbial growth. A moisture result cannot be converted into a dependable water-activity result without measurement.", "VonSchelling's Green Coffee Beans moisture target is 10% to 11%. Treat it as the specification to verify for the selected lot, not proof of a particular water-activity value or a universal storage guarantee. Where water activity matters, agree a separate test method and buyer acceptance limit."] },
      { title: "Make the measurement part of the lot record", paragraphs: ["Ask when the sample was taken, how it represents the lot, which instrument or laboratory was used and how the result relates to dispatch. A single reading without a method, date or lot reference is difficult to use for a shipment decision.", "Coffee can exchange moisture with its surroundings during storage and transit. Record the agreed acceptance point and procedure if arrival quality is part of your contract. Representative sampling and consistent measurement methods help both parties interpret results fairly."], bullets: ["Lot reference, sampling date and moisture result.", "Measurement method and sample handling.", "Separate water-activity result where required.", "Agreed acceptance limits and inspection stage."] },
      { title: "Protective liners are part of a wider plan", paragraphs: ["Hermetic GrainPro or Ecotact liners may be requested inside export bags, subject to supplier confirmation. Confirm the actual brand, pack format and sealing procedure in the packing specification. Do not assume every consignment includes a liner.", "A liner is not a guarantee against poor preparation, damage or condensation. Dry, clean storage, suitable handling, intact packaging and an agreed freight configuration remain important. Review container condition and route risks with the logistics provider."] },
      { title: "Approve quality and packing together", paragraphs: ["Combine your sample decision with moisture records, any water-activity requirement, net bag weight, labels and liner choice. Confirm the final packing list and shipment window before release. This gives your buying and warehouse teams a clearer basis for comparing the approved lot with the delivered coffee."] },
    ],
    sources: [{ label: "European Coffee Federation mould-prevention code", url: "https://www.ecf-coffee.org/wp-content/uploads/2020/09/Code-of-Practice-Prevention-of-Mould-Formation.pdf" }, { label: "Green coffee storage research", url: "https://www.nature.com/articles/s41598-023-33609-x" }],
  },
];