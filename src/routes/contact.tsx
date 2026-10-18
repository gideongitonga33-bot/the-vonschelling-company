import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Heading, Section } from "@/components/site/Layout";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo("Request a Quotation, VonSchelling", "Contact VonSchelling for Kenyan coffee, Mizizi coffee, chillies, meats and dried fruit quotations."),
  component: Contact,
});

const field = "w-full border-b border-foreground/25 bg-transparent py-3 outline-none transition focus:border-gold";

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section>
      <div className="grid gap-20 md:grid-cols-[1fr_1.3fr]">
        <div>
          <Heading eyebrow="Contact · Request a Quotation" title="Tell us what you're looking for." intro="Share your product, specifications, volume and destination. We'll confirm availability, samples and terms." />
          <div className="mt-12 space-y-6 text-sm">
            <div><p className="eyebrow text-gold">Location</p><p className="mt-2">Nairobi, Kenya</p></div>
            <div><p className="eyebrow text-gold">Email</p><p className="mt-2">info@vonschelling.com</p></div>
          </div>
        </div>
        {sent ? (
          <div className="flex items-center border border-gold/50 bg-card p-12">
            <div><p className="eyebrow text-gold">Thank you</p><p className="mt-4 font-display text-4xl">Your enquiry has been received.</p><p className="mt-3 text-muted-foreground">Our team will respond shortly.</p></div>
          </div>
        ) : (
          <form className="grid gap-8 bg-card p-10 shadow-elegant md:grid-cols-2" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <input required className={field} placeholder="Full name" />
            <input required className={field} placeholder="Company" />
            <input required type="email" className={field} placeholder="Email" />
            <input className={field} placeholder="Destination country" />
            <select required className={field} defaultValue="">
              <option value="" disabled>Product of interest</option>
              <option>Green coffee beans</option><option>Mizizi roasted coffee</option><option>Private-label coffee</option>
              <option>Chillies</option><option>Meats</option><option>Dried fruits</option>
            </select>
            <input className={field} placeholder="Estimated volume" />
            <textarea rows={4} className={`${field} md:col-span-2`} placeholder="Specifications, packaging, Incoterms, delivery date…" />
            <button className="bg-primary px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase text-primary-foreground transition hover:bg-forest-deep md:col-span-2">Send Enquiry</button>
          </form>
        )}
      </div>
    </Section>
  );
}
