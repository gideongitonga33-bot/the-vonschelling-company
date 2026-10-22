import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BuyerResources } from "@/components/site/BuyerResources";
import { COFFEE_MOISTURE } from "@/lib/procurement";
import { COFFEE_GRADES, CONTAINER_PLANNING, plannedCoffeeTonnes, PRIVATE_LABEL_MOQ_KG } from "@/lib/coffee";
import hero from "@/assets/Burlap_Sacks_of_Green_Coffee_Beans.webp";
import cupping from "@/assets/Professional_Coffee_Cupping_Evaluation.png";
import bag from "@/assets/mizizi-bag.png";
import range from "@/assets/mizizi-range.png";
import greenPhoto from "@/assets/Macro_Pile_of_Green_Coffee_Beans.webp";
import dryingPhoto from "@/assets/coffee-drying.jpg";
import harvestPhoto from "@/assets/Joyful_Coffee_Harvest_in_Lush_Plantation.png";
import roastPhoto from "@/assets/coffee-roast.jpg";
import { Heading, Note, PageHero, Section, SpecTable } from "@/components/site/Layout";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/coffee")({
  head: () => seo("Kenyan Coffee Exports & Mizizi Coffee, VonSchelling", "Explore Kenyan Green Coffee Beans, highland origins, grades, crop seasons and export planning, plus Mizizi roasted and private-label coffee."),
  component: Coffee,
});

function Photo({ src, alt, credit, className = "" }: { src: string; alt: string; credit: string; className?: string }) {
  return <figure className={className}><img src={src} alt={alt} loading="lazy" className="w-full object-cover" /><figcaption className="mt-2 text-xs text-muted-foreground">{credit}</figcaption></figure>;
}

const journey = [
  ["Sourcing at origin", "Engage with farmers, cooperatives and licensed supply partners to understand available coffee, origin and supply conditions."],
  ["Auction & market sourcing", "Where appropriate, source through authorised auction or market channels to access suitable grades and consolidate volumes."],
  ["Lot identification", "Record supplier, origin, grade and lot information; confirm preparation and packaging arrangements."],
  ["Quality evaluation & cupping", "Physical assessment and cup evaluation using qualified evaluators or partner facilities."],
  ["Scores & verification", "Share documented cupping results, test results and certifications only when available and verified."],
  ["Buyer samples & approval", "Provide representative samples and agree the specifications the order will be supplied against."],
  ["Contract & shipment", "Confirm commercial terms, export requirements, shipment arrangements and records supplied."],
];

const regions = [
  ["Nyeri", "1,600 to 2,300 m", "The heartland of classic Kenyan coffee on the slopes of Mount Kenya and the Aberdares. Deep red volcanic soils produce intense, complex cups with blackcurrant brightness and winey acidity."],
  ["Kirinyaga", "1,400 to 1,900 m", "Mount Kenya's southern slopes, home to celebrated cooperative factories. Bright, sweet and layered cups with pronounced fruit character."],
  ["Murang'a", "1,350 to 1,950 m", "East of the Aberdare Range, with a dense network of cooperative wet mills. Juicy, balanced coffees with vibrant acidity."],
  ["Kiambu", "1,500 to 2,200 m", "Nairobi's neighbouring highlands and one of Kenya's oldest coffee districts. Large estates and smallholders producing full-bodied, well-structured lots."],
  ["Embu", "1,300 to 1,900 m", "On Mount Kenya's eastern slopes. Floral, delicate cups with refined complexity and sweet citrus notes."],
  ["Meru", "1,300 to 1,950 m", "Northeast of Mount Kenya, a fast-rising specialty origin. Rich volcanic soils give bold, fruity coffees with excellent depth."],
];

const docs = [
  ["Origin and lot identity", "Available origin, supplier or lot reference, crop details where known"],
  ["Grade and preparation", "Confirmed grade, screen information and preparation details"],
  ["Cup quality", "Cupping report or score from an identified evaluator, when available"],
  ["Food safety and testing", "Relevant test reports, such as pesticide-residue or contaminant results, when required"],
  ["Certifications", "Valid certificates applicable to the specific supplier, facility, product and transaction"],
  ["Export readiness", "Applicable licences, certificates and shipping documentation for the intended route"],
];

function Coffee() {
  return (
    <>
      <PageHero image={hero} eyebrow="VonSchelling Coffee Operations" title="Kenyan Coffee. From Origin to Opportunity." intro="Green Coffee Beans for international importers and roasters, Mizizi-branded roasted coffee and private-label opportunities. Every offer comes with its lot specification." />

      <Section className="!py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            ["01", "Green Coffee Beans", "Washed Kenyan Arabica in AA, AB, PB and C grades, plus specialty micro-lots for qualified trade buyers."],
            ["02", "Mizizi Coffee", "Our specialist Kenyan coffee brand for retail, hospitality and distribution, in whole-bean and ground formats."],
            ["03", "Private Label", "Coffee selection, custom roast profiles and packaging coordination under your brand, from 1,000 kg per roast profile."],
          ].map(([n, t, d]) => <div key={n} className="border-t border-gold pt-5"><p className="font-display text-4xl text-gold">{n}</p><h2 className="mt-3 text-3xl">{t}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p></div>)}
        </div>
        <div className="mt-12 flex flex-col gap-5 border-y border-gold/40 py-6 md:flex-row md:items-center md:justify-between">
          <div><p className="eyebrow text-gold">Coffee Buyer Documents</p><p className="mt-2 font-display text-2xl">Take our coffee story to your buying team.</p></div>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="h-auto whitespace-normal py-3"><a href="/docs/vonschelling-coffee-company-profile.pdf" download="VonSchelling_Coffee_Company_Profile.pdf"><Download />Company Profile (PDF)</a></Button>
            <Button asChild variant="outline" className="h-auto whitespace-normal py-3"><a href="/docs/vonschelling-coffee-product-catalog.pdf" download="VonSchelling_Coffee_Product_Catalog.pdf"><Download />Product Catalog (PDF)</a></Button>
          </div>
        </div>
      </Section>

      <section className="bg-primary text-primary-foreground">
        <Section>
          <p className="eyebrow mb-10 text-gold-soft">Chapter 01 · Green Coffee Beans · Export Desk</p>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Heading light eyebrow="Where Our Coffee Grows" title="Six counties. One highland character." intro="Kenya's central highlands bring together volcanic soils, cool nights and origins roughly 1,300 to 2,300 metres above sea level. Explore the regional character, then evaluate the individual lot." />
            <figure><img src={harvestPhoto} alt="A farmer harvesting ripe coffee cherries into a basket among coffee trees" loading="lazy" className="aspect-[4/3] w-full object-cover" /><figcaption className="mt-2 text-xs text-primary-foreground/65">Harvesting ripe coffee cherries.</figcaption></figure>
          </div>
          <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map(([name, alt, desc]) => <div key={name} className="border-t border-primary-foreground/20 pt-5"><p className="eyebrow text-gold-soft">{alt}</p><h3 className="mt-2 text-3xl">{name}</h3><p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">{desc}</p></div>)}
          </div>
          <p className="mt-8 text-xs text-primary-foreground/65">Each region has its own character. We cup the lot itself and send you the sample and notes before you commit.</p>
        </Section>
      </section>

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <Heading eyebrow="Washed Processing" title="Washed for clarity. Dried with care." intro="Many Kenyan wet mills combine pulping, fermentation, washing and a clean-water soak before drying on raised beds. We share the processing details with every lot offer." />
            <ol className="mt-8 space-y-5">
              {[
                ["Pulp & ferment", "Remove the cherry skin and break down mucilage. Fermentation responds to temperature, ripeness and the mill's practice."],
                ["Wash & soak", "Wash away mucilage; a further clean-water soak may form part of the mill's double-wash process."],
                ["Dry & stabilise", "Turn and protect coffee on raised beds. Drying duration depends on weather; our export moisture target is 10% to 11%."],
              ].map(([t, d], i) => <li key={t} className="flex gap-4 border-t border-border pt-5"><span className="font-display text-3xl text-gold">0{i + 1}</span><div><h3 className="text-2xl">{t}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p></div></li>)}
            </ol>
          </div>
          <Photo src={dryingPhoto} alt="Coffee drying on raised beds at Fairview Estate, Kiambu" credit="Raised drying beds, Fairview Estate, Kiambu. Daniel Case, CC BY-SA 4.0." className="[&_img]:aspect-[4/3]" />
        </div>
        <div className="mt-10"><Note>Fermentation and drying are managed to the conditions of each mill and season. Mill records are available with the lot on request.</Note></div>
      </Section>

      <section className="bg-secondary/50">
        <Section>
          <Heading eyebrow="Grades & Specifications" title="Choose the grade. Approve the cup." intro="AA, AB, PB and C are graded by bean size and shape. We match screen distribution and cup profile to your requirements and send samples for approval." />
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
            <div><Photo src={greenPhoto} alt="Close-up of unroasted green coffee beans showing their shape and colour" credit="Green Coffee Beans, before roasting." className="[&_img]:aspect-[4/3]" /><p className="mt-5 text-sm leading-relaxed text-muted-foreground">Specialty micro-lots from single estates and cooperative factories are available on request, each offered with its cup score, evaluator and sample date.</p></div>
            <div className="space-y-6">
              <SpecTable title="Kenyan Grade Guide" rows={COFFEE_GRADES} />
              <SpecTable title="Green Coffee Beans · Technical Specification" rows={[
                ["Varieties", "SL28, SL34, Ruiru 11 and Batian"],
                ["Moisture Level", `${COFFEE_MOISTURE.min}% to ${COFFEE_MOISTURE.max}%`],
                ["Physical Grading", "Screen distribution, defect count, sample weight and acceptance limits confirmed per lot"],
                ["Water Activity", "Testing method, result and buyer acceptance limit agreed where required"],
                ["Lot Details", "Origin, processing, crop, cup characteristics and available volume confirmed in the offer"],
              ]} />
            </div>
          </div>
        </Section>
      </section>

      <Section>
        <Heading eyebrow="Harvest & Shipment Planning" title="Two crops. More ways to plan." intro="Kenya's two harvests let you plan fresh arrivals through the year. We agree your shipment window when the lot is approved." />
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {[
            ["Main crop", "Harvest · October to January", "Typical export planning · January to June"],
            ["Fly crop", "Harvest · May to July", "Typical export planning · July to October"],
          ].map(([t, h, e]) => <div key={t} className="border-t-2 border-gold pt-6"><h3 className="text-3xl">{t}</h3><p className="mt-4 font-semibold">{h}</p><p className="mt-2 text-sm text-muted-foreground">{e}</p></div>)}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">Your contract states the crop year, milling status and agreed shipment window for your lot.</p>
        <a href="https://www.ico.org/documents/cy2018-19/icc-124-7e-profile-kenya.pdf" target="_blank" rel="noreferrer" className="mt-4 inline-block text-xs text-primary underline underline-offset-4">Kenya coffee country profile · ICO / AFA</a>
      </Section>

      <section className="bg-secondary/50">
        <Section>
          <Heading eyebrow="Export Packing & Logistics" title="Protect the lot. Plan the load." intro="Agree net weight, protective liners, labelling and freight configuration before contracting." />
          <div className="mt-10"><SpecTable title="Packing & Freight · Options to Confirm" rows={[
            ["Export Bags", "60 kg export-grade jute bags; hermetic GrainPro or Ecotact liners may be requested, subject to supplier confirmation"],
            ["Micro-Lot Formats", "Ask about smaller packs or 30 kg vacuum-sealed cartons; availability and packing costs confirmed per lot"],
            ["20 ft FCL Planning", `${CONTAINER_PLANNING.minBags} to ${CONTAINER_PLANNING.maxBags} bags at ${CONTAINER_PLANNING.bagKg} kg: ${plannedCoffeeTonnes(CONTAINER_PLANNING.minBags)} to ${plannedCoffeeTonnes(CONTAINER_PLANNING.maxBags)} metric tonnes, as an indicative planning range only`],
            ["LCL & Air Freight", "Discuss palletised smaller consignments and sample courier options against volume, destination and cost"],
          ]} /></div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">Final loadability depends on container payload, pack dimensions, pallets, carrier and route. Confirm the liner brand and final packing list in writing.</p>
          <Button asChild variant="link" className="mt-4 h-auto whitespace-normal px-0"><Link to="/export-logistics">Review shipment stages and commercial terms<ArrowUpRight /></Link></Button>
        </Section>
      </section>

      <Section>
        <Heading eyebrow="The Coffee Journey" title="From farmer to cup." intro="Direct, cooperative and auction sourcing are distinct paths. Auction-sourced lots may carry different upstream traceability records." />
        <ol className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {journey.map(([t, d], i) => <li key={t} className="border-t border-border pt-5"><p className="font-display text-4xl text-gold">0{i + 1}</p><h3 className="mt-3 text-2xl">{t}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p></li>)}
        </ol>
        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div><Heading eyebrow="Buyer Documentation" title="Cupping scores, certifications & traceability." intro="Each offered lot is supported by a specification stating what is known and verified." /><img src={cupping} alt="A coffee evaluator tasting a sample and recording her assessment" loading="lazy" width={1537} height={1023} className="mt-8 aspect-[4/3] w-full object-cover" /></div>
          <div><dl className="divide-y divide-border border-y border-border">{docs.map(([t, d]) => <div key={t} className="grid gap-3 py-5 sm:grid-cols-[1fr_1.4fr]"><dt className="font-display text-xl">{t}</dt><dd className="text-sm leading-relaxed text-muted-foreground">{d}</dd></div>)}</dl><div className="mt-6"><Note>No universal cup score, certification logo or blanket fully traceable promise. Request verifiable evidence for the lot, including EU due diligence records where relevant.</Note></div></div>
        </div>
        <div className="mt-14 grid gap-8 border-y border-gold/40 py-10 lg:grid-cols-[1.3fr_1fr]">
          <div><Heading eyebrow="Sample First" title="Evaluate before you commit." intro="Request a representative Green Coffee Beans sample in AA, AB, PB, C or a specialty micro-lot. Share your preferred origin and target cup profile." /><p className="mt-5 text-sm leading-relaxed text-muted-foreground">Choose a 300g or 500g preference. Final size, availability, packaging, courier charges and dispatch timing are confirmed individually. Agree cup and physical acceptance criteria before contracting.</p></div>
          <div className="flex flex-col items-start justify-center gap-4"><Button asChild className="h-auto whitespace-normal px-6 py-4 text-left"><Link to="/contact" search={{ request: "sample" }}>Request an evaluation sample<ArrowUpRight /></Link></Button><Button asChild variant="outline" className="h-auto whitespace-normal px-6 py-4 text-left"><Link to="/contact" search={{ request: "documents" }}>Request buyer documentation<ArrowUpRight /></Link></Button></div>
        </div>
        <BuyerResources />
      </Section>

      <section id="mizizi" className="bg-navy text-ivory">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="eyebrow mb-10 text-gold-soft">Chapter 02 · Finished & Branded Coffee</p>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <img src={bag} alt="Mizizi Coffee bag" loading="lazy" className="h-auto w-full" />
            <div><p className="eyebrow text-gold">A coffee brand of VonSchelling Limited</p><h2 className="mt-4 text-5xl md:text-7xl">Mizizi Coffee</h2><p className="mt-3 font-display text-2xl italic text-gold-soft">Exceptional coffee from the heart of Kenya.</p><div className="gold-rule my-8 w-32" /><p className="leading-relaxed text-ivory/75">Our special blend. 100% Arabica, roasted and packaged for retail, hospitality and distribution partners who want a finished Kenyan coffee. Product availability and production arrangements are confirmed for each order.</p>
              <dl className="mt-8 grid gap-6 border-t border-ivory/20 pt-6 sm:grid-cols-3">{[["Roasts", "Light · Medium · Dark"], ["Formats", "Whole bean · Ground"], ["Sizes", "250g · 500g · 1kg"]].map(([t, d]) => <div key={t}><dt className="eyebrow text-gold">{t}</dt><dd className="mt-3 text-sm">{d}</dd></div>)}</dl>
              <p className="mt-8 text-sm leading-relaxed text-ivory/75">500g and 1kg high-barrier nitrogen-flushed valve bags; 20 bags per master shipping carton. Confirm the case configuration for the chosen pack size.</p>
            </div>
          </div>
          <img src={range} alt="Mizizi Coffee range, light, medium and dark roasts with gift box" loading="lazy" className="mt-12 h-auto w-full" />
        </div>
      </section>

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div><Heading eyebrow="Private-Label Coffee" title="Your brand. Kenyan coffee." intro="Build around coffee selection, roast profile development, whole-bean or ground formats, pack sizes and target-market requirements." /><p className="mt-5 leading-relaxed text-muted-foreground">Depending on the production partner, services include packaging formats, label coordination and production planning. Lead times and branding capabilities are confirmed per project.</p><div className="mt-8 border-l-2 border-gold pl-6"><p className="eyebrow text-gold">Minimum Order Quantity</p><p className="mt-3 font-display text-3xl">{PRIVATE_LABEL_MOQ_KG.toLocaleString("en-US")} kg per roast profile</p></div></div>
          <Photo src={roastPhoto} alt="Freshly roasted coffee beans turning in a roaster cooling tray" credit="Freshly roasted beans in the cooling tray. Jkafader, CC BY-SA 3.0." className="[&_img]:aspect-[4/3]" />
        </div>
      </Section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20"><Heading light eyebrow="Your Next Coffee Order" title="Start with the right conversation." intro="Share your product, grade or roast, volume and destination. Request samples, a commercial quotation or Mizizi distribution and private-label terms." /><div className="mt-8 flex flex-wrap gap-4"><Button asChild className="h-auto whitespace-normal bg-gold px-6 py-4 text-forest-deep hover:bg-gold-soft"><Link to="/contact" search={{ request: "sample" }}>Request Green Coffee Beans samples<ArrowUpRight /></Link></Button><Button asChild className="h-auto whitespace-normal bg-ivory px-6 py-4 text-forest-deep hover:bg-gold-soft"><Link to="/contact" search={{ request: "quote" }}>Request a quotation<ArrowUpRight /></Link></Button></div></div>
      </section>
    </>
  );
}
