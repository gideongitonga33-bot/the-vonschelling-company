import { createFileRoute, Link } from "@tanstack/react-router";
import { Heading, Section } from "@/components/site/Layout";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  staticData: { sitemap: true },
  head: () => seo("Privacy & Buyer Enquiries | VonSchelling", "How VonSchelling's website handles enquiry drafts, correspondence, technical information and privacy requests from trade buyers.", "/privacy"),
  component: Privacy,
});

function Privacy() {
  return <Section className="!py-16">
    <Heading as="h1" eyebrow="VonSchelling Limited" title="Privacy" intro="Clear information for buyers using our website and contacting our team." />
    <p className="mt-5 text-xs text-muted-foreground">Updated <time dateTime="2026-10-29">29 October 2026</time></p>
    <article className="mt-12 max-w-3xl space-y-10 text-sm leading-relaxed text-muted-foreground">
      <section><h2 className="text-3xl text-foreground">Your enquiry stays a draft until you send it</h2><p className="mt-4">Our contact form prepares an email in your browser. It does not automatically submit your details to VonSchelling or save them in browser storage. You choose whether to open your email app and send the draft, or copy the text. Your email provider handles the message under its own privacy terms.</p></section>
      <section><h2 className="text-3xl text-foreground">Information you share with us</h2><p className="mt-4">When you send an enquiry, you may share your name, company, email address, destination and buying requirements. We use the information you provide to respond, discuss samples or quotations and coordinate an order where agreed. Please do not include passwords, payment-card details or sensitive identity documents in the form.</p><p className="mt-4">Where an order requires coordination with a supplier, evaluator or logistics provider, discuss the necessary information and any confidentiality requirements with us before sharing commercially sensitive records.</p></section>
      <section><h2 className="text-3xl text-foreground">Website operation and external services</h2><p className="mt-4">Website hosting providers may process technical request information, such as IP addresses and browser details, to serve and secure pages. Error reporting may process an error message and page context when a page fails. Our enquiry form does not use a buyer account or tracking cookies to prepare the draft.</p><p className="mt-4">External fonts and linked reference websites are provided by third parties. Opening a reference link takes you to that provider's website, where its privacy and cookie practices apply. Downloads of our company profile and catalog are served from this website.</p></section>
      <section><h2 className="text-3xl text-foreground">Privacy questions and requests</h2><p className="mt-4">Contact <a href="mailto:info@vonschelling.co.ke" className="text-primary underline underline-offset-4">info@vonschelling.co.ke</a> to ask about information you have shared, request a correction or discuss deletion, access or confidentiality. Identify the relevant correspondence so our team can review your request and any applicable record-keeping obligations.</p><p className="mt-4">For commercial enquiries, visit our <Link to="/contact" className="text-primary underline underline-offset-4">Contact page</Link>. Our <Link to="/terms" className="text-primary underline underline-offset-4">Terms of Trade</Link> explain how website information relates to an agreed order.</p></section>
    </article>
  </Section>;
}