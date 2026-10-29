import { createFileRoute, Link } from "@tanstack/react-router";
import { Heading, Section } from "@/components/site/Layout";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  staticData: { sitemap: true },
  head: () => seo("Terms of Trade & Export Enquiries | VonSchelling", "How VonSchelling handles trade enquiries, sample approval, lot specifications, export quotations and order-specific commercial agreements.", "/terms"),
  component: Terms,
});

function Terms() {
  return <Section className="!py-16">
    <Heading as="h1" eyebrow="VonSchelling Limited" title="Terms of Trade" intro="The starting framework for enquiries, quotations and export discussions. Your written order agreement sets the terms of your purchase." />
    <p className="mt-5 text-xs text-muted-foreground">Updated <time dateTime="2026-10-29">29 October 2026</time></p>
    <article className="mt-12 max-w-3xl space-y-10 text-sm leading-relaxed text-muted-foreground">
      <section><h2 className="text-3xl text-foreground">Website information and enquiries</h2><p className="mt-4">Our website, buyer guides and downloadable documents introduce our products and help you plan a purchase. They are not a binding offer, a live stock list or a certificate for an individual lot. Preparing an enquiry email does not place an order; send the email to begin a discussion with our team.</p></section>
      <section><h2 className="text-3xl text-foreground">Quotation and order agreement</h2><p className="mt-4">Price, currency, available volume, quotation validity, packing, delivery window and payment arrangements are confirmed in writing for your order. A purchase proceeds under the accepted written agreement, not a general description on this website. Any deposit, cancellation conditions, inspection procedure or claims process should be agreed before payment or release.</p></section>
      <section><h2 className="text-3xl text-foreground">Samples and lot specifications</h2><p className="mt-4">We agree the offered lot and its acceptance criteria with the buyer. Sample size, availability, cost, courier charges and dispatch timing are confirmed individually. Grade names and regional flavour descriptions do not guarantee a particular cup score or result.</p><p className="mt-4">Our Green Coffee Beans moisture target is 10% to 11%. The contract should identify the lot, measurement method and acceptance stage, together with any separate water-activity requirement. Certifications, cupping reports and traceability records apply only where verified for the relevant lot, supplier or transaction.</p></section>
      <section><h2 className="text-3xl text-foreground">Shipping and destination requirements</h2><p className="mt-4">Agree the named port or place and Incoterms edition, together with freight, insurance, documentation and destination charges. Planning ranges and estimated transit times are not fixed shipment guarantees; the written agreement records the applicable responsibilities and windows.</p><p className="mt-4">Confirm the document pack and destination import requirements before contracting. For EU-bound coffee, agree the lot-specific evidence available and the applicable operator due diligence responsibilities. General guidance or an origin certificate is not a blanket compliance assurance.</p></section>
      <section><h2 className="text-3xl text-foreground">Confidentiality and questions</h2><p className="mt-4">Discuss confidentiality requirements before exchanging sensitive buyer or supplier records. Any required non-disclosure terms, governing law and dispute procedure belong in the written agreement between the parties; this page does not set them on your behalf.</p><p className="mt-4">Ask our team at <a href="mailto:info@vonschelling.co.ke" className="text-primary underline underline-offset-4">info@vonschelling.co.ke</a> or use the <Link to="/contact" className="text-primary underline underline-offset-4">Contact page</Link> to clarify your order requirements. See our <Link to="/privacy" className="text-primary underline underline-offset-4">Privacy page</Link> for enquiry information handling.</p></section>
    </article>
  </Section>;
}