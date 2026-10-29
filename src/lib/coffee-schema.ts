import { SITE_URL } from "@/lib/seo";
import { COFFEE_MOISTURE } from "@/lib/procurement";
import { CONTAINER_PLANNING, plannedCoffeeTonnes } from "@/lib/coffee";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "VonSchelling Limited",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  description: "Kenyan agricultural export house supplying Green Coffee Beans, Mizizi roasted coffee, chillies, shoats and dried fruits to international trade buyers.",
  email: "info@vonschelling.co.ke",
  address: {
    "@type": "PostalAddress",
    streetAddress: "90 JGO Building, Ikigai, Lavington",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "VonSchelling Limited",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export const COFFEE_BUYER_FAQS = [
  {
    question: "How do I request a Kenyan Green Coffee Beans evaluation sample?",
    answer: "Choose AA, AB, PB, C or a specialty micro-lot and share your origin preference, cup profile and delivery destination. Request a 300g or 500g sample preference. We confirm the lot, sample size, packaging, courier charges and dispatch timing before arranging delivery. The enquiry page prepares an email draft for you to send.",
  },
  {
    question: "How much green coffee can I plan for a 20 ft container?",
    answer: `Use ${CONTAINER_PLANNING.minBags} to ${CONTAINER_PLANNING.maxBags} bags at ${CONTAINER_PLANNING.bagKg} kg, or ${plannedCoffeeTonnes(CONTAINER_PLANNING.minBags)} to ${plannedCoffeeTonnes(CONTAINER_PLANNING.maxBags)} tonnes, as an initial planning range. Final loadability depends on payload, bag dimensions, pallets, carrier and route. Confirm the final packing list before contracting.`,
  },
  {
    question: "What EUDR evidence should an EU coffee buyer request?",
    answer: "Request production-plot geolocation, production dates, evidence against the 31 December 2020 deforestation cut-off and evidence of compliance with relevant production-country law. Confirm record availability for the selected lot, including auction-sourced coffee. The EU operator handles applicable due diligence obligations; a lot reference or origin certificate alone does not establish EUDR compliance.",
  },
  {
    question: "Can I request FOB Mombasa or CIF coffee shipment terms?",
    answer: "Request a quotation stating FOB Mombasa or CIF to your named destination port, volume and shipment window. We agree the terms for the order. Under FOB, risk transfers when goods are on board at the shipment port. Under CIF, the seller also arranges freight and insurance to the named destination, but risk still transfers at shipment, not on arrival.",
  },
  {
    question: "Can roasters in Europe or North America buy less than a full container?",
    answer: "Yes. Through our partnership with Algrano, roasters in Europe and North America can buy our Kenyan lots in smaller volumes, with import handled and the coffee delivered to their warehouse or chosen address. Importers and larger roasters can also buy full containers directly from us on FOB Mombasa, CFR or CIF terms.",
  },
] as const;

export const coffeeProductSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${SITE_URL}/coffee#green-coffee-beans`,
  name: "Kenyan Green Coffee Beans",
  description: "Washed Kenyan Arabica for international importers and roasters, in AA, AB, PB and C grades plus specialty micro-lots. Lot specifications, sample approval and shipment terms are agreed for each order.",
  url: `${SITE_URL}/coffee`,
  image: `${SITE_URL}/og/coffee.jpg`,
  category: "Green Coffee Beans",
  brand: { "@type": "Brand", name: "VonSchelling Limited" },
  countryOfOrigin: { "@type": "Country", name: "Kenya" },
  additionalProperty: [
    { "@type": "PropertyValue", name: "Grades", value: "AA, AB, PB, C and specialty micro-lots" },
    { "@type": "PropertyValue", name: "Moisture target", value: `${COFFEE_MOISTURE.min}% to ${COFFEE_MOISTURE.max}%` },
    { "@type": "PropertyValue", name: "Origins", value: "Nyeri, Kirinyaga, Murang'a, Kiambu, Embu, Meru" },
    { "@type": "PropertyValue", name: "Sourcing channels", value: "Nairobi Coffee Exchange (NCE) auction for volume requirements and direct estate channels; records confirmed per lot" },
  ],
};

export const coffeeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: COFFEE_BUYER_FAQS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export function jsonLd(value: unknown) {
  return { type: "application/ld+json", children: JSON.stringify(value).replace(/</g, "\\u003c") };
}