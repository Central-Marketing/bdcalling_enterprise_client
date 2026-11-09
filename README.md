# Bdcalling Enterprise — Next.js + Tailwind CSS

Redesign of https://bdcallingenterprise.com (previously WordPress/Elementor).

## Run it
```bash
npm install
npm run dev        # http://localhost:3000
```
The first `npm run dev` / `npm run build` downloads the original images from the WordPress site into `public/images` (see `scripts/fetch-assets.mjs`). Until then, images show as navy placeholders. Run it while the WordPress site is still online.

## Edit content
All text lives in `src/data/`:
- `site.ts` — contact details, socials, About text, values, leadership, page intros
- `services.ts` — the 4 services (list + detail pages)
- `industries.ts` — the 5 industries (list + detail pages)

## Structure
- `src/app` — pages (App Router): `/`, `/about-us`, `/leadership-oversight`, `/services/[slug]`, `/industries-we-serve/[slug]`, `/contact-us`
- `src/components` — Header, Footer, cards, hero, CTA, contact form
- `next.config.ts` — 301 redirects from old WordPress URLs (e.g. `/ministry-of-food`) to the new ones

## To finish before launch
- Contact form opens the visitor's email app (mailto). Hook it to an API route (Resend/Nodemailer) to send directly.
- Privacy Policy / Terms pages are placeholders — the WordPress links had no content.
- Confirm leadership details (see NOTE comments in `src/data/site.ts`).
