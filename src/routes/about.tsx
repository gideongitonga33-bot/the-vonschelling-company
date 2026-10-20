import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/hero-farm.jpg";
import logo from "@/assets/vonschelling-logo.png";
import { Heading, PageHero, QuoteCTA, Section } from "@/components/site/Layout";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => seo("About VonSchelling Limited, Kenyan Agri-Exports", "A Kenyan agricultural trading company connecting supply partners with domestic and international buyers."),
  component: About,
});

const values = [
  ["Integrity", "We communicate honestly about availability, origin, quality, capacity and terms."],
  ["Quality", "We align products with defined specifications and appropriate verification."],
  ["Traceability", "Reliable supplier, origin, lot and shipment records for each sourcing route."],
  ["Partnership", "Long-term relationships with farmers, cooperatives, processors, logistics providers and buyers."],
  ["Responsibility", "Responsible sourcing, sound working practices, environmental and food-safety controls."],
  ["Reliability", "Clear commitments, coordinated execution and timely communication."],
];

function About() {
  return (
    <>
      <PageHero image={img} eyebrow="About VonSchelling Limited" title="Premium Kenyan Agri-Exports." intro="A Kenyan agricultural trading company connecting supply partners with domestic and international buyers." />
      <Section>
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>We are developing our business around four product categories: coffee, chillies, meats and dried fruits. Coffee is our flagship, green coffee beans for international trade, Mizizi-branded roasted coffee and private-label opportunities.</p>
            <p>We work with farmers, cooperatives and licensed supply partners, and where appropriate use authorised auction and market channels to meet buyer specifications and volumes.</p>
            <p>International agricultural trade depends on more than product availability, it requires accurate specifications, credible supply, documentation, logistics and clear contractual responsibilities. Our role is to coordinate these elements and give buyers transparent information about each offer.</p>
          </div>
          <img src={logo} alt="VonSchelling emblem" loading="lazy" className="w-full" />
        </div>
      </Section>
      <section className="bg-forest-deep text-ivory">
        <Section>
          <div className="grid gap-12 md:grid-cols-2">
            <div><p className="eyebrow text-gold">Our Vision</p><p className="mt-5 font-display text-3xl leading-snug md:text-4xl">To become a trusted Kenyan agricultural export company connecting quality agricultural products with international markets.</p></div>
            <div><p className="eyebrow text-gold">Our Mission</p><p className="mt-5 font-display text-3xl leading-snug md:text-4xl">To develop reliable supply partnerships and deliver products that meet agreed buyer specifications through responsible sourcing and coordinated export services.</p></div>
          </div>
        </Section>
      </section>
      <Section>
        <Heading eyebrow="Our Values" title="What we stand on." />
        <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
          {values.map(([t, d]) => (
            <div key={t} className="bg-background p-10"><h3 className="text-3xl">{t}</h3><p className="mt-3 text-muted-foreground">{d}</p></div>
          ))}
        </div>
      </Section>
      <QuoteCTA />
    </>
  );
}
