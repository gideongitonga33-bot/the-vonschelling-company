import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, Section } from "@/components/site/Layout";
import { BUYER_GUIDES, GUIDE_PATHS } from "@/lib/buyer-guides";
import { seo } from "@/lib/seo";
import hero from "@/assets/Burlap_Sacks_of_Green_Coffee_Beans.webp";

export const Route = createFileRoute("/guides/")({
  staticData: { sitemap: true },
  head: () => seo("Kenyan Green Coffee Buyer Guides | VonSchelling", "Practical Kenyan coffee buying guides covering grades, harvests, auction sourcing, import documents, moisture and shipment planning.", "/guides", "coffee.jpg"),
  component: BuyerGuides,
});

function BuyerGuides() {
  return <>
    <PageHero image={hero} eyebrow="VonSchelling · Buyer Resources" title="Kenyan coffee buyer guides" intro="Clear buying references for importers and roasters, from choosing a grade to planning your shipment." />
    <Section className="!py-16">
      <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
        {BUYER_GUIDES.map((guide, index) => {
          const path = GUIDE_PATHS[index];
          if (!path) return null;
          return <article key={guide.slug} className="border-t border-gold pt-6">
            <p className="eyebrow text-gold">{guide.category}</p>
            <h2 className="mt-4 text-3xl"><Link to={path}>{guide.title}</Link></h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">{guide.description}</p>
            <Link to={path} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">Read guide<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </article>;
        })}
      </div>
    </Section>
  </>;
}