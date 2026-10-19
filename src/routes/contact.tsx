import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Copy, Check } from "lucide-react";
import { Heading, Note, Section } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { buildEnquiryEmail, parseRequestKind, SAMPLE_SIZES, type RequestKind } from "@/lib/procurement";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo("Quotations, Coffee Samples & Buyer Documents, VonSchelling", "Request Kenyan coffee evaluation samples, commercial quotations and lot-specific buyer documentation from VonSchelling."),
  validateSearch: (search: Record<string, unknown>) => ({ request: parseRequestKind(search.request) }),
  component: Contact,
});

const field = "w-full min-w-0 border-b border-foreground/25 bg-transparent py-3 outline-none transition focus:border-gold";
const label = "eyebrow text-gold";

function Contact() {
  const { request } = Route.useSearch();
  const [selected, setSelected] = useState<RequestKind | null>(null);
  const kind = selected ?? request;
  const [draft, setDraft] = useState<ReturnType<typeof buildEnquiryEmail> | null>(null);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDraft(buildEnquiryEmail(new FormData(event.currentTarget), kind));
    setCopied(false);
  };
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div>
          <Heading eyebrow="Contact · Samples & Quotations" title="Tell us what you're looking for." intro="Share your product, specifications and destination. Sample availability, documentation and commercial terms are confirmed for your request." />
          <div className="mt-12 space-y-6 text-sm">
            <div><p className={label}>Office</p><p className="mt-2 leading-relaxed">90 JGO Building, Ikigai, Lavington<br />P.O. Box 9226, 00300<br />Nairobi, Kenya</p></div>
            <div><p className={label}>Email</p><p className="mt-2"><a href="mailto:info@vonschelling.co.ke" className="hover:text-primary">info@vonschelling.co.ke</a></p></div>
            <div><p className={label}>Web</p><p className="mt-2"><a href="https://www.vonschelling.co.ke" target="_blank" rel="noreferrer" className="hover:text-primary">www.vonschelling.co.ke</a></p></div>
          </div>
        </div>
        <div>
          <form className="grid gap-8 bg-card p-6 shadow-elegant sm:p-10 md:grid-cols-2" onSubmit={submit}>
            <fieldset className="md:col-span-2">
              <legend className={label}>Request type</legend>
              <div className="mt-4 grid gap-3">
                {([['quote', 'Commercial quotation'], ['sample', 'Green Coffee Beans evaluation sample'], ['documents', 'Buyer documentation']] as const).map(([value, text]) => (
                  <label key={value} className="flex items-center gap-3 text-sm"><input type="radio" name="request" value={value} checked={kind === value} onChange={() => { setSelected(value); setDraft(null); }} className="accent-primary" />{text}</label>
                ))}
              </div>
            </fieldset>
            <div><label className={label} htmlFor="name">Full name</label><input id="name" name="name" required autoComplete="name" className={field} placeholder="Jane Otieno" /></div>
            <div><label className={label} htmlFor="company">Company</label><input id="company" name="company" required autoComplete="organization" className={field} placeholder="Company Ltd" /></div>
            <div><label className={label} htmlFor="email">Email</label><input id="email" name="email" required type="email" autoComplete="email" className={field} placeholder="you@company.com" /></div>
            {kind === 'sample' ? (
              <>
                <div><label className={label} htmlFor="sampleSize">Preferred sample size</label><select id="sampleSize" name="sampleSize" className={field}>{SAMPLE_SIZES.map(size => <option key={size} value={size}>{size}g</option>)}</select></div>
                <div><label className={label} htmlFor="grade">Coffee grade</label><select id="grade" name="grade" className={field}><option>AA</option><option>AB</option><option>PB (Peaberry)</option><option>C</option><option>Specialty micro-lot</option><option>Please advise</option></select></div>
                <div><label className={label} htmlFor="origin">Preferred origin or lot</label><input id="origin" name="origin" className={field} placeholder="e.g. Nyeri or a lot reference" /></div>
                <div className="md:col-span-2"><Note>300g and 500g are requested preferences, not guaranteed pack sizes. We confirm the representative lot, packaging, sample cost, courier charges and dispatch window before arranging a sample.</Note></div>
              </>
            ) : (
              <div><label className={label} htmlFor="commodity">Commodity category</label><select id="commodity" name="commodity" required className={field} defaultValue=""><option value="" disabled>Select commodity</option><option>Green Coffee Beans</option><option>Mizizi Roasted Coffee</option><option>Private-Label Coffee</option><option>Bulk Chillies</option><option>Inspected Meat</option><option>Dried Fruits</option></select></div>
            )}
            {kind === 'quote' && (
              <>
                <div><label className={label} htmlFor="volume">Required volume</label><input id="volume" name="volume" required type="number" min="1" className={field} placeholder="e.g. 10" /></div>
                <div><label className={label} htmlFor="unit">Volume unit</label><select id="unit" name="unit" required className={field} defaultValue=""><option value="" disabled>Select unit</option><option>Metric Tons</option><option>Kilograms</option><option>FCL 20ft Container</option><option>FCL 40ft Container</option></select></div>
                <div><label className={label} htmlFor="incoterm">Preferred Incoterm</label><select id="incoterm" name="incoterm" required className={field} defaultValue=""><option value="" disabled>Select Incoterm</option><option>FOB</option><option>CFR</option><option>CIF</option><option>Please advise</option></select></div>
                <div><label className={label} htmlFor="payment">Payment preference</label><select id="payment" name="payment" className={field}><option>Discuss with our team</option><option>Letter of credit at sight</option><option>Cash against documents</option><option>Bank transfer</option></select></div>
              </>
            )}
            {kind === 'documents' && <div className="md:col-span-2"><label className={label} htmlFor="documents">Documents needed</label><textarea id="documents" name="documents" required rows={3} className={field} placeholder="Lot specification, cupping report, COA, applicable licence or EUDR-related evidence" /></div>}
            <div className="md:col-span-2"><label className={label} htmlFor="destination">{kind === 'sample' ? 'Delivery city & country' : 'Destination port & country'}</label><input id="destination" name="destination" required className={field} placeholder={kind === 'sample' ? 'e.g. Berlin, Germany' : 'e.g. Rotterdam, Netherlands'} /></div>
            <div className="md:col-span-2"><label className={label} htmlFor="specs">Specifications & notes</label><textarea id="specs" name="specs" rows={4} className={field} placeholder="Cup profile, packaging, certifications, delivery window…" /></div>
            <p className="text-sm leading-relaxed text-muted-foreground md:col-span-2">Your request is prepared as an email draft. Send it from your email app to reach our team. No enquiry is submitted or stored on this page.</p>
            <Button type="submit" className="h-auto whitespace-normal px-6 py-4 md:col-span-2"><Mail />Prepare enquiry email</Button>
          </form>
          {draft && <div role="status" className="mt-8 border border-gold/50 bg-card p-6">
            <p className={label}>Email draft ready</p><h3 className="mt-3 text-3xl">Review and send your enquiry.</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Nothing has been sent yet. Open your email app and send the draft to info@vonschelling.co.ke, or copy the details below.</p>
            <textarea aria-label="Enquiry email details" readOnly value={draft.body} rows={10} className="mt-5 w-full border border-border bg-background p-4 text-sm" />
            <div className="mt-5 flex flex-wrap gap-3"><Button asChild className="h-auto whitespace-normal py-3"><a href={draft.href}><Mail />Open email draft</a></Button><Button variant="outline" className="h-auto whitespace-normal py-3" onClick={async () => { try { await navigator.clipboard.writeText(draft.body); setCopied(true); setCopyError(false); } catch { setCopyError(true); } }}>{copied ? <Check /> : <Copy />}{copied ? 'Copied' : 'Copy enquiry'}</Button></div>
            {copyError && <p className="mt-3 text-sm">Please select and copy the enquiry details above.</p>}
          </div>}
        </div>
      </div>
    </Section>
  );
}
