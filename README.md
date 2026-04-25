# Infivus -- Creative Subscription Website

Premium landing page for Infivus, a productized creative subscription service.

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide React (icons)

## Project Structure

```
src/
├── content/
│   └── siteCopy.ts              # ALL website copy + SEO metadata
├── hooks/
│   └── usePageMeta.ts           # Dynamic page titles + meta tags
├── components/
│   ├── Navbar.tsx               # Fixed nav bar with mobile menu
│   ├── Hero.tsx                 # Hero section (headline, CTAs)
│   ├── SocialProof.tsx          # Testimonials and trust logos
│   ├── HowItWorks.tsx           # 4-step process cards
│   ├── Services.tsx             # Service offering cards
│   ├── TaskExamples.tsx         # "What counts as a task?" rows
│   ├── Pricing.tsx              # Pricing plans (Starter / Pro)
│   ├── FAQ.tsx                  # Accordion FAQ (FAQPage schema)
│   ├── CTA.tsx                  # Final call-to-action banner
│   ├── Footer.tsx               # Site footer with links
│   ├── JsonLd.tsx               # Structured data (Organization, Service, FAQ)
│   └── ScrollToTop.tsx          # Scrolls to top on route change
├── pages/
│   ├── HomePage.tsx             # Assembles all landing sections
│   ├── TermsPage.tsx            # Terms & Fair Usage
│   └── ContactPage.tsx          # Contact form
├── App.tsx                      # Router + layout shell
├── main.tsx                     # Entry point
└── index.css                    # Global styles + shared classes
```

## Editing Content

All text lives in `src/content/siteCopy.ts`. Change copy there -- no need to touch components.

| What to edit              | Object in `siteCopy.ts` |
|---------------------------|-------------------------|
| Brand name / tagline      | `brand`                 |
| Navigation links          | `nav`                   |
| Hero headline / CTAs      | `hero`                  |
| Testimonials / logos      | `socialProof`           |
| How it works steps        | `howItWorks`            |
| Service cards             | `services`              |
| Task examples             | `taskExamples`          |
| Pricing plans / features  | `pricing`               |
| FAQ questions / answers   | `faq`                   |
| Final CTA text            | `cta`                   |
| Footer links              | `footer`                |
| Terms page content        | `termsPage`             |
| Contact page content      | `contactPage`           |

## Which Component Controls Which Section

| Homepage Section         | Component File              |
|--------------------------|-----------------------------|
| Navigation bar           | `src/components/Navbar.tsx` |
| Hero                     | `src/components/Hero.tsx`   |
| Social proof             | `src/components/SocialProof.tsx` |
| How it works             | `src/components/HowItWorks.tsx` |
| Services                 | `src/components/Services.tsx` |
| What counts as a task    | `src/components/TaskExamples.tsx` |
| Pricing                  | `src/components/Pricing.tsx` |
| FAQ                      | `src/components/FAQ.tsx`    |
| Final CTA                | `src/components/CTA.tsx`    |
| Footer                   | `src/components/Footer.tsx` |

## Shared CSS Classes

Defined in `src/index.css` -- keeps components concise and consistent:

| Class              | Purpose                                     |
|--------------------|---------------------------------------------|
| `section-block`    | Standard section padding and vertical space |
| `section-container`| Max-width wrapper with horizontal padding   |
| `section-header`   | Centered header block with bottom margin    |
| `section-title`    | Responsive heading typography               |
| `section-subtitle` | Muted subheading below title                |
| `section-padding`  | Horizontal page padding                     |
| `glass-card`       | Dark translucent card with border           |
| `btn-primary`      | Green primary button                        |
| `btn-secondary`    | Subtle outlined button                      |

## SEO

All SEO metadata is in `src/content/siteCopy.ts` under the `seo` object. Each page has `title`, `description`, and a canonical URL derived from `brand.url`.

- **Per-page meta**: managed by `src/hooks/usePageMeta.ts`, called from each page component
- **Open Graph / Twitter cards**: defaults in `index.html`, updated dynamically per page
- **Structured data**: `src/components/JsonLd.tsx` renders Organization, Service, and FAQPage schema
- **Heading hierarchy**: one `<h1>` per page; section headings are `<h2>`; sub-items are `<h3>`
- **Semantic HTML**: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<blockquote>` used throughout
- **aria-labelledby**: sections reference their heading IDs for screen readers

To update OG defaults or robots directives, edit `index.html`.

## Common Tasks

**Update pricing**: edit `pricing.plans` in `siteCopy.ts` (name, price, features, popular flag).

**Add/remove FAQ**: edit `faq.items` array in `siteCopy.ts` -- the accordion renders automatically.

**Add a service**: add an entry to `services.items` in `siteCopy.ts` with `title`, `description`, and `icon` (must match a Lucide icon name mapped in `Services.tsx`).

**Change colors**: edit the color ramps in `tailwind.config.js` under `theme.extend.colors`.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
