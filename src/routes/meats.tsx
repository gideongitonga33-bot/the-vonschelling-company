import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/meats.jpg";
import { BulletGrid, Note, PageHero, QuoteCTA, Section, SpecTable } from "@/components/site/Layout";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/meats")({
  head: () => seo("Meat Export Supply from Kenya, VonSchelling", "Eligible chilled and frozen meat products coordinated through approved, veterinary-inspected Kenyan partners."),
  component: () => (
    <>
      <PageHero image={img} eyebrow="Products · Meats" title="Meat Products for Qualified Trade Markets." intro="We connect buyers with suitable meat supply and processing partners, with product selection and export arrangements guided by the requirements of the intended market." />
      <Section>
        <div className="grid gap-16 md:grid-cols-2">
          <BulletGrid title="Product scope" items={[
            "Beef and other eligible meat categories, subject to confirmed supply.",
            "Chilled or frozen products where approved facilities and logistics support the product.",
            "Specified cuts, packing formats and quantities agreed with the buyer.",
          ]} />
          <BulletGrid title="What we confirm" items={[
            "Species, cuts and product forms actually available.",
            "Approved slaughterhouse or processing establishment details.",
            "Veterinary inspection, health certification and approvals.",
            "Temperature control, cold chain, shelf life and packaging.",
            "Halal certification where required, with verified details.",
            "Destination-market eligibility and import permits.",
            "Shipment schedules, cold storage, reefer or air-freight arrangements.",
          ]} />
        </div>
        <div className="mt-16">
          <SpecTable title="Meat Specification Sheet" rows={[
            ["Sourcing", "100% Veterinary-Inspected & Certified Processing Facilities"],
            ["Regulatory Compliance", "HACCP Certified, Halal Export Verification available upon request"],
            ["Cold-Chain Integrity", "Deep frozen (-18°C) or Chilled (0-4°C) air/sea freight configurations"],
          ]} />
        </div>
        <div className="mt-16"><Note>VonSchelling acts as the commercial exporter coordinating supply through eligible, approved partners. Veterinary trade and health certification is overseen by Kenya's Directorate of Veterinary Services.</Note></div>
      </Section>
      <QuoteCTA title="Discuss Meat Supply" />
    </>
  ),
});
