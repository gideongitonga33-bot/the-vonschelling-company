<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Website media
- Keep website media as local files in `src/assets` and use direct image imports so GitHub deployments do not depend on Lovable asset delivery.
- Attribute documentary photographs to their verified creator and licence; never retain a previous photograph's credit or location claim after replacing it.

## Buyer enquiries and resources
- Keep Coffee organised into green export and finished-coffee chapters; distinguish educational trade references from confirmed lot specifications to avoid unsupported guarantees.
- Keep request modes and email composition in a browser-safe procurement module so sample, quotation and documentation flows share one validated vocabulary.
- Until hosted inquiry delivery is approved, enquiry forms prepare email drafts with an explicit send step; never claim receipt or save buyer details locally.
- Generate buyer planning checklists in the browser, separate from verified lot certificates, so downloads cannot imply licences or compliance evidence are held.
- Serve prebuilt buyer-facing PDFs from `public/docs/` for direct same-origin downloads, while also providing a copy in workspace Files.

## SEO
- Build every page's head with `seo()` in `src/lib/seo.ts`, passing its own path and a 1200x630 copy of its hero photo in `public/og/`, so canonical, og:url and share images stay self-referencing and absolute.
- Every route sets `staticData.sitemap`; `/sitemap.xml` derives its URLs from the router so new pages are listed without a manual list.
- Keep business and coffee JSON-LD in a browser-safe schema module, with FAQ markup generated from the same answers shown on the Coffee page to prevent hidden or contradictory claims.
- Buyer guides use shared editorial data and presentation with explicit leaf routes, so each guide has its own self-referencing Article metadata and sitemap entry.
- Guide summaries, editorial identity and review dates live in shared browser-safe editorial data and feed both visible bylines and Article schema to keep them consistent. Add author social URLs only when verified.
- Privacy and trade terms are standalone public content routes using the shared shell and SEO helper; describe the actual email-draft flow and leave negotiated legal terms to written agreements.
