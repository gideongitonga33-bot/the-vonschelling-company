import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, Section } from "@/components/site/Layout";
import { BUYER_GUIDES, GUIDE_PATHS, GUIDE_EDITOR, type BuyerGuide } from "@/lib/buyer-guides";
import { seo, SITE_URL } from "@/lib/seo";
import { jsonLd } from "@/lib/coffee-schema";
import beans from "@/assets/Burlap_Sacks_of_Green_Coffee_Beans.webp";
import harvest from "@/assets/Joyful_Coffee_Harvest_in_Lush_Plantation.png";
import cupping from "@/assets/Professional_Coffee_Cupping_Evaluation.png";
import drying from "@/assets/coffee-drying.jpg";

const images = { beans, harvest, cupping, drying };

export function guideHead(guide: BuyerGuide) {
  const path = `/guides/${guide.slug}`;
  const head = seo(`${guide.title} | VonSchelling`, guide.description, path, guide.shareImage);
  return {
    ...head,
    meta: head.meta.map((entry) => entry.property === "og:type" ? { ...entry, content: "article" } : entry),
    scripts: [jsonLd({
      "@context": "https://schema.org", "@type": "Article",
      headline: guide.title, description: guide.description,
      url: `${SITE_URL}${path}`, mainEntityOfPage: `${SITE_URL}${path}`,
      image: `${SITE_URL}/og/${guide.shareImage}`,
      author: { "@type": "Person", name: GUIDE_EDITOR.name, jobTitle: "Founder & CEO", worksFor: { "@id": `${SITE_URL}/#organization` } },
      dateModified: GUIDE_EDITOR.reviewedOn,
      abstract: guide.summary,
      publisher: { "@id": `${SITE_URL}/#organization` },
      articleBody: [guide.summary, ...guide.sections.map(section => [section.title, ...section.paragraphs, ...(section.bullets ?? [])].join("\n"))].join("\n\n"),
    }), jsonLd({
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Buyer Guides", item: `${SITE_URL}/guides` },
        { "@type": "ListItem", position: 3, name: guide.title, item: `${SITE_URL}${path}` },
      ],
    })],
  };
}

export function BuyerGuidePage({ guide }: { guide: BuyerGuide }) {
  return <>
    <PageHero image={images[guide.image]} eyebrow={`Buyer Guides · ${guide.category}`} title={guide.title} intro={guide.description} />
    <Section className="!py-16">
      <nav aria-label="Breadcrumb" className="mb-12 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
        <Link to="/">Home</Link><span aria-hidden="true">/</span><Link to="/guides">Buyer Guides</Link><span aria-hidden="true">/</span><span aria-current="page">{guide.title}</span>
      </nav>
      {guide.image === "drying" && <p className="mb-8 text-xs text-muted-foreground">Raised drying beds, Fairview Estate, Kiambu. Daniel Case, CC BY-SA 4.0.</p>}
      <div className="grid gap-14 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <article className="min-w-0 space-y-12">
          <div className="border-b border-border pb-8">
            <p className="text-sm text-muted-foreground">By {GUIDE_EDITOR.name} · {GUIDE_EDITOR.role}</p>
            <p className="mt-2 text-xs text-muted-foreground">Editorial review: <time dateTime={GUIDE_EDITOR.reviewedOn}>29 October 2026</time></p>
            <div className="mt-6 border-l-2 border-gold pl-6"><h2 className="text-2xl">Buyer summary</h2><p className="mt-3 leading-relaxed text-muted-foreground">{guide.summary}</p></div>
          </div>
          {guide.sections.map(section => <section key={section.title}>
            <h2 className="text-3xl leading-tight md:text-4xl">{section.title}</h2>
            {section.paragraphs.map(text => <p key={text} className="mt-5 leading-relaxed text-muted-foreground">{text}</p>)}
            {section.bullets && <ul className="mt-5 list-disc space-y-3 pl-5 text-muted-foreground">{section.bullets.map(text => <li key={text} className="pl-1 leading-relaxed">{text}</li>)}</ul>}
          </section>)}
          <section className="border-t border-border pt-8">
            <h2 className="text-2xl">Reference sources</h2>
            <ul className="mt-5 space-y-3">{guide.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer" className="inline-flex items-start gap-2 text-sm text-primary underline underline-offset-4">{source.label}<ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" /></a></li>)}</ul>
            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">Educational buyer guidance. Confirm current requirements and the offered lot's records before contracting.</p>
          </section>
        </article>
        <aside className="self-start border-t-2 border-gold pt-6">
          <h2 className="text-2xl">Plan your Kenyan coffee purchase</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Explore our grades and origins, then share your volume, destination and target cup profile.</p>
          <div className="mt-6 flex flex-col items-start gap-3">
            <Button asChild className="h-auto whitespace-normal py-3"><Link to="/coffee">Explore Our Coffee<ArrowRight /></Link></Button>
            <Button asChild variant="outline" className="h-auto whitespace-normal py-3"><Link to="/contact" search={{ request: "sample" }}>Request an evaluation sample<ArrowUpRight /></Link></Button>
          </div>
          <h2 className="mt-10 text-2xl">More buyer guides</h2>
          <ul className="mt-5 space-y-4">{BUYER_GUIDES.map((item, index) => {
            const path = GUIDE_PATHS[index];
            if (!path || item.slug === guide.slug) return null;
            return <li key={item.slug}><Link to={path} className="text-sm leading-relaxed text-primary">{item.title}</Link></li>;
          })}</ul>
        </aside>
      </div>
    </Section>
  </>;
}