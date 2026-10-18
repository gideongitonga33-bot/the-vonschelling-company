import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Heading, Section } from "@/components/site/Layout";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo("Request a Quotation, VonSchelling", "Contact VonSchelling for Kenyan coffee, Mizizi coffee, chillies, meats and dried fruit quotations."),
  component: Contact,
});

const field = "w-full border-b border-foreground/25 bg-transparent py-3 outline-none transition focus:border-gold";
const label = "eyebrow text-gold";

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section>
      <div className="grid gap-20 md:grid-cols-[1fr_1.3fr]">
        <div>
          <Heading eyebrow="Contact · Request a Quotation" title="Tell us what you're looking for." intro="Share your product, specifications, volume and destination. We'll confirm availability, samples and terms." />
          <div className="mt-12 space-y-6 text-sm">
            <div>
              <p className={label}>Office</p>
              <p className="mt-2 leading-relaxed">90 JGO Building, Ikigai, Lavington<br />90 James Gichuru Road<br />P.O. Box 9226, 00300<br />Nairobi, Kenya</p>
            </div>
            <div><p className={label}>Email</p><p className="mt-2"><a href="mailto:info@vonschelling.co.ke" className="hover:text-primary">info@vonschelling.co.ke</a></p></div>
            <div><p className={label}>Web</p><p className="mt-2"><a href="https://www.vonschelling.co.ke" target="_blank" rel="noreferrer" className="hover:text-primary">www.vonschelling.co.ke</a></p></div>
          </div>
        </div>
        {sent ? (
          <div className="flex items-center border border-gold/50 bg-card p-12">
            <div><p className={label}>Thank you</p><p className="mt-4 font-display text-4xl">Your enquiry has been received.</p><p className="mt-3 text-muted-foreground">Our team will respond shortly.</p></div>
          </div>
        ) : (
          <form className="grid gap-8 bg-card p-10 shadow-elegant md:grid-cols-2" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <div>
              <label className={label} htmlFor="name">Full name</label>
              <input id="name" required className={field} placeholder="Jane Otieno" />
            </div>
            <div>
              <label className={label} htmlFor="company">Company</label>
              <input id="company" required className={field} placeholder="Company Ltd" />
            </div>
            <div>
              <label className={label} htmlFor="email">Email</label>
              <input id="email" required type="email" className={field} placeholder="you@company.com" />
            </div>
            <div>
              <label className={label} htmlFor="commodity">Target Commodity Category</label>
              <select id="commodity" required className={field} defaultValue="">
                <option value="" disabled>Select commodity</option>
                <option>Green Coffee Beans</option><option>Mizizi Roasted Coffee</option><option>Private-Label Coffee</option>
                <option>Bulk Chillies</option><option>Inspected Meat</option><option>Dried Fruits</option>
              </select>
            </div>
            <div>
              <label className={label} htmlFor="volume">Required Volume</label>
              <div className="flex gap-3">
                <input id="volume" required type="number" min="1" className={field} placeholder="e.g. 10" />
                <select required className={field} defaultValue="">
                  <option value="" disabled>Unit</option>
                  <option>Metric Tons</option><option>Kilograms</option>
                  <option>FCL 20ft Container</option><option>FCL 40ft Container</option>
                </select>
              </div>
            </div>
            <div>
              <label className={label} htmlFor="incoterm">Preferred Incoterm</label>
              <select id="incoterm" required className={field} defaultValue="">
                <option value="" disabled>Select Incoterm</option>
                <option>FOB</option><option>CFR</option><option>CIF</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className={label} htmlFor="destination">Destination Port & Country</label>
              <input id="destination" required className={field} placeholder="e.g. Port of Rotterdam, Netherlands" />
            </div>
            <div className="md:col-span-2">
              <label className={label} htmlFor="specs">Specifications & Notes</label>
              <textarea id="specs" rows={4} className={field} placeholder="Grade, packaging, certifications, delivery window…" />
            </div>
            <button className="bg-primary px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase text-primary-foreground transition hover:bg-forest-deep md:col-span-2">Submit Procurement Enquiry</button>
          </form>
        )}
      </div>
    </Section>
  );
}
