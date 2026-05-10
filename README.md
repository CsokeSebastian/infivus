# Infivus — Unlimited Creative Subscription

Static HTML website for [infivus.com](https://www.infivus.com) — a flat-rate creative design subscription service.

## Stack

Pure HTML/CSS/JS — no framework, no build step, no `npm install`.  
Deployed directly on Vercel as a static site.

## File Structure

```
/
├── index.html          ← Main site (all pages in one SPA)
├── robots.txt          ← Search engine crawl rules
├── sitemap.xml         ← XML sitemap for Google
├── site.webmanifest    ← PWA / Android homescreen config
├── vercel.json         ← Vercel routing, headers, caching
├── api/
│   └── meta-capi.js    ← Meta Conversions API (serverless function)
└── README.md
```

> Portfolio images are embedded as base64 inside `index.html`.

## Before deploying — fill in your IDs

Search and replace these placeholders in `index.html`:

| Placeholder | Where to find it |
|-------------|-----------------|
| `G-XXXXXXXXXX` | Google Analytics → Admin → Data Streams → Measurement ID |
| `YOUR_META_PIXEL_ID` | Meta Business Suite → Events Manager → Pixel → Settings |
| `AW-XXXXXXXXX` | Google Ads → Tools → Google Tag |
| `AW-XXXXXXXXX/XXXXXXXXXXXX` | Google Ads → Goals → Conversions → Tag setup |

## Vercel Environment Variables (for Meta CAPI)

Add these in Vercel → Project → Settings → Environment Variables:

| Variable | Value |
|----------|-------|
| `META_PIXEL_ID` | Your Meta Pixel ID |
| `META_CAPI_TOKEN` | Meta Conversions API access token |

## Deployment

Vercel auto-deploys on every push to `main`.  
No build command needed — set **Output Directory** to `/` (root) in Vercel settings.
