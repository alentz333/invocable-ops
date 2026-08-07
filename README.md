# Invocable Ops

Marketing site for **Invocable Ops** — an independent GTM systems practice for B2B SaaS, specializing in AI-native revenue systems across Salesforce Sales Cloud, Outreach, HubSpot, Marketo, Apollo, and Clay.

Live at **[invocableops.com](https://invocableops.com)**.

## Stack

- **Next.js 16** (App Router) + React 19 + TypeScript
- **Tailwind CSS 4** (via `@tailwindcss/postcss`) layered over a hand-rolled design system in `src/app/globals.css`
- **Fonts:** Instrument Serif (display) + IBM Plex Sans (UI/body), self-hosted through `next/font/google`
- Contact form posts to a Route Handler that relays through **Resend**

## Running locally

```bash
npm install
npm run dev     # http://localhost:3000
```

```bash
npm run build   # production build
npm run lint    # eslint
```

## Design system

Tokens live at the top of `src/app/globals.css`: warm paper canvas (`#F5F3EE`), midnight ink (`#1A1F2B`), rust accent (`#B4441F`), 18px radii.

Component classes (`.btn`, `.card`, `.section`, `.display`, `.eyebrow`) are defined inside `@layer components` **on purpose** — Tailwind v4 emits utilities into `@layer utilities`, and unlayered CSS would beat them in the cascade, silently breaking things like `md:hidden` on a `.btn`.

## Editing content

All copy lives in **`src/content/site.ts`** — there are no hardcoded strings in the components. Edit that one file to change headlines, services, platforms, engagement models, stats, or contact details.

Placeholders awaiting real values are marked with `TODO` comments in that file.

## Environment variables

The contact form works without configuration in development — submissions are logged server-side and the form reports success. To actually deliver mail:

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key. Without it, submissions are logged only. |
| `CONTACT_FROM` | Verified sender, e.g. `Invocable Ops <hello@invocableops.com>` |

Set both in the Vercel project settings for production.

## Structure

```
src/
├── app/
│   ├── layout.tsx           # fonts, metadata
│   ├── page.tsx             # section composition
│   ├── globals.css          # design tokens + component layer
│   └── api/contact/route.ts # form handler (Resend)
├── components/              # one file per section
└── content/site.ts          # ALL copy and config
```
