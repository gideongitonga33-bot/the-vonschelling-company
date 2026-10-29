import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/vonschelling-logo-wide.png";
import emblem from "@/assets/vonschelling-emblem.png";

export const OPERATIONS = [
  { to: "/coffee", label: "Coffee" },
  { to: "/chilies", label: "Chillies" },
  { to: "/meats", label: "Meats" },
  { to: "/dried-fruits", label: "Dried Fruits" },
] as const;

export const NAV = [
  { to: "/about", label: "About" },
  { to: "/quality", label: "Quality" },
  { to: "/sustainability", label: "Sustainability" },
  { to: "/export-logistics", label: "Export" },
] as const;

const linkCls =
  "text-[0.8rem] font-medium tracking-wide text-foreground/75 transition-colors hover:text-primary";

export function Header() {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center" aria-label="VonSchelling home">
          <img src={logo} alt="VonSchelling, Premium Kenyan Agricultural Exports" className="h-14 w-auto" />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          <Link to="/" className={linkCls} activeProps={{ className: "text-primary" }}>Home</Link>
          <Link to="/about" className={linkCls} activeProps={{ className: "text-primary" }}>About</Link>
          <div className="relative" onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)}>
            <button className={`${linkCls} flex items-center gap-1.5`} aria-haspopup="true" aria-expanded={drop} onClick={() => setDrop(!drop)}>
              Operations <ChevronDown className={`h-3.5 w-3.5 transition-transform ${drop ? "rotate-180" : ""}`} />
            </button>
            {drop && (
              <div className="absolute left-1/2 top-full w-56 -translate-x-1/2 pt-3">
                <div className="border border-border bg-card py-2 shadow-elegant">
                  {OPERATIONS.map((o) => (
                    <Link key={o.to} to={o.to} onClick={() => setDrop(false)} className="block px-6 py-3 text-sm text-foreground/80 transition hover:bg-secondary hover:text-primary" activeProps={{ className: "text-primary" }}>
                      {o.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {NAV.slice(1).map((n) => (
            <Link key={n.to} to={n.to} className={linkCls} activeProps={{ className: "text-primary" }}>
              {n.label}
            </Link>
          ))}
          <Link to="/guides" className={linkCls} activeProps={{ className: "text-primary" }}>Buyer Guides</Link>
          <Link to="/contact" className="bg-primary px-5 py-2.5 text-[0.75rem] font-semibold tracking-[0.18em] uppercase text-primary-foreground transition hover:bg-forest-deep">
            Request a Quote
          </Link>
        </nav>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border bg-background px-6 py-4 lg:hidden">
          <Link to="/" onClick={() => setOpen(false)} className="py-2 text-sm">Home</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="py-2 text-sm">About</Link>
          <p className="eyebrow pt-3 text-gold">Operations</p>
          {OPERATIONS.map((o) => (
            <Link key={o.to} to={o.to} onClick={() => setOpen(false)} className="py-2 pl-4 text-sm">
              {o.label}
            </Link>
          ))}
          {[...NAV.slice(1), { to: "/guides", label: "Buyer Guides" } as const, { to: "/contact", label: "Request a Quote" } as const].map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 text-sm">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-forest-deep text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={emblem} alt="" className="h-16 w-16 rounded-sm bg-ivory p-1" />
          <p className="mt-6 font-display text-3xl">VonSchelling Limited</p>
          <p className="eyebrow mt-2 text-gold">Premium Kenyan Agri-Exports</p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/70">
            Connecting Kenyan agricultural products to international markets through responsible sourcing,
            quality assurance, traceability and dependable export partnerships.
          </p>
        </div>
        <div>
          <p className="eyebrow text-gold">Operations</p>
          <ul className="mt-5 space-y-2 text-sm text-ivory/75">
            <li><Link to="/coffee">Coffee & Mizizi</Link></li>
            <li><Link to="/chilies">Chillies</Link></li>
            <li><Link to="/meats">Meats</Link></li>
            <li><Link to="/dried-fruits">Dried Fruits</Link></li>
          </ul>
          <p className="eyebrow mt-8 text-gold">Buyer Resources</p>
          <ul className="mt-5 space-y-2 text-sm text-ivory/75">
            <li><Link to="/guides">Kenyan Coffee Buyer Guides</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-gold">Contact</p>
          <ul className="mt-5 space-y-2 text-sm text-ivory/75">
            <li>90 JGO Building, Ikigai, Lavington</li>
            <li>P.O. Box 9226, 00300 Nairobi, Kenya</li>
            <li><a href="mailto:info@vonschelling.co.ke" className="hover:text-gold-soft">info@vonschelling.co.ke</a></li>
            <li><a href="https://vonschelling.co.ke" className="hover:text-gold-soft">vonschelling.co.ke</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-6 py-6 text-xs text-ivory/50 md:flex-row">
          <span>© {new Date().getFullYear()} VonSchelling Limited · Nairobi, Kenya</span>
           <div className="flex flex-wrap gap-x-5 gap-y-2"><Link to="/privacy" className="hover:text-gold-soft">Privacy</Link><Link to="/terms" className="hover:text-gold-soft">Terms of Trade</Link><span>Mizizi Coffee is a coffee brand of VonSchelling Limited.</span></div>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, intro, image, imageClassName = "" }: { eyebrow: string; title: string; intro: string; image: string; imageClassName?: string }) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden">
      <img src={image} alt="" className={`absolute inset-0 h-full w-full object-cover ${imageClassName}`} />
      <div className="hero-overlay absolute inset-0" />
      <div className="fade-up relative mx-auto w-full max-w-7xl px-6 pb-20 text-ivory">
        <p className="eyebrow text-gold-soft">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-5xl leading-[1.02] md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/85">{intro}</p>
      </div>
    </section>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`mx-auto max-w-7xl px-6 py-24 md:py-32 ${className}`}>{children}</section>;
}

export function Heading({ eyebrow, title, intro, light, as: Tag = "h2" }: { eyebrow: string; title: string; intro?: string; light?: boolean; as?: "h1" | "h2" }) {
  return (
    <div className="max-w-3xl">
      <p className={`eyebrow ${light ? "text-gold-soft" : "text-gold"}`}>{eyebrow}</p>
      <Tag className="mt-4 text-4xl leading-tight md:text-5xl">{title}</Tag>
      {intro && <p className={`mt-5 text-lg leading-relaxed ${light ? "text-ivory/75" : "text-muted-foreground"}`}>{intro}</p>}
    </div>
  );
}

export function BulletGrid({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-2xl">{title}</h2>
      <div className="gold-rule mt-4 w-24" />
      <ul className="mt-6 space-y-4">
        {items.map((i) => (
          <li key={i} className="flex gap-4 text-[0.95rem] leading-relaxed text-foreground/80">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SpecTable({ title, rows }: { title: string; rows: [string, string][] }) {
  return (
    <div className="border border-border bg-card">
      <p className="eyebrow border-b border-border bg-secondary/60 px-6 py-4 text-primary">{title}</p>
      <dl className="divide-y divide-border">
        {rows.map(([k, v]) => (
          <div key={k} className="grid gap-1 px-6 py-4 sm:grid-cols-[200px_1fr] sm:gap-6">
            <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{k}</dt>
            <dd className="text-sm leading-relaxed text-foreground/85">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <div className="border-l-2 border-gold bg-secondary/60 px-6 py-5 text-sm leading-relaxed text-foreground/80">{children}</div>
  );
}

export function QuoteCTA({ title = "Discuss Your Requirements" }: { title?: string }) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-center">
        <div>
          <p className="eyebrow text-gold-soft">Request a Quotation</p>
          <h2 className="mt-3 text-4xl md:text-5xl">{title}</h2>
          <p className="mt-3 max-w-xl text-ivory/75">Share the product, specification, volume and destination, and we'll respond with availability and terms.</p>
        </div>
        <Link to="/contact" className="border border-gold bg-gold px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase text-forest-deep transition hover:bg-gold-soft">
          Request a Quote
        </Link>
      </div>
    </section>
  );
}
