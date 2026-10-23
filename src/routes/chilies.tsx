import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/chilies.jpg";
import { BulletGrid, Note, PageHero, QuoteCTA, Section, SpecTable } from "@/components/site/Layout";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/chilies")({
  staticData: { sitemap: true },
  head: () => seo("Kenyan Chilli Exports, VonSchelling", "Fresh, dried whole and processed Kenyan chillies supplied to agreed quality, food-safety and destination-market specifications.", "/chilies", "chillies.jpg"),
  component: () => (
    <>
      <PageHero image={img} eyebrow="Products · Chillies" title="Chillies, Selected for Market Requirements." intro="We connect chilli supply partners with buyers seeking products that meet agreed specifications for quality, food safety, packaging and destination-market requirements." />
      <Section>
        <div className="grid gap-16 md:grid-cols-2">
          <BulletGrid title="Product formats" items={[
            "Fresh chillies, where sourcing, shelf life and export arrangements support the intended market.",
            "Dried whole chillies.",
            "Processed chilli products or flakes, where suitable processing partners and approvals are available.",
          ]} />
          <BulletGrid title="Specifications we confirm" items={[
            "Available varieties, product form, origin and seasonal availability.",
            "Size, colour, moisture and other applicable specifications.",
            "Pesticide-residue testing and destination food-safety requirements.",
            "Packaging, shelf life, storage and transport conditions.",
            "Phytosanitary requirements for applicable plant products.",
            "Export volumes, samples, lead times and quotations.",
          ]} />
        </div>
        <div className="mt-16">
          <SpecTable title="Chilli Specification Sheet" rows={[
            ["Varieties", "African Bird's Eye (ABE), Cayenne"],
            ["Forms", "Fresh whole, Sun-dried, Crushed Flakes"],
            ["Aflatoxin Level", "< 5 ppb compliance"],
          ]} />
        </div>
        <div className="mt-16"><Note>Fresh and dried chillies each have their own handling, shelf-life and import controls, and we manage them accordingly. Phytosanitary certification for regulated plant exports is issued through Kenya's plant health authority, KEPHIS.</Note></div>
      </Section>
      <QuoteCTA title="Request Chilli Specifications" />
    </>
  ),
});
