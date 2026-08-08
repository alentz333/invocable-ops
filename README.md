# Invocable Ops

Marketing site for **Invocable Ops** — an independent GTM systems practice for B2B SaaS, specializing in AI-native revenue systems across Salesforce Sales Cloud, Outreach, HubSpot, Marketo, Apollo, and Clay.

Live at **[invocableops.com](https://invocableops.com)**.

## Stack

- **Next.js 16** (App Router) + React 19 + TypeScript
- **Tailwind CSS 4** (via `@tailwindcss/postcss`) layered over a hand-rolled design system in `src/app/globals.css`
- **Fonts:** Archivo (display + UI, loaded with its `wdth` axis) + JetBrains Mono (field labels), via `next/font/google`
- Contact form posts to a Route Handler that relays through **Resend**

## Design direction

The site is built with the visual grammar of the tool its audience lives in all day: **a Salesforce console, reinterpreted.** Panels with header strips, colour-coded object tiles, mono field labels, tight 6px radii, and a dense data-forward layout — Salesforce-adjacent on purpose, Salesforce-derivative nowhere.

Deliberate departures from SLDS so it evokes rather than imitates:

| | SLDS | Here |
|---|---|---|
| Accent | `#0176D3` (hue 205°) | `#2F35D4` (hue 238°) |
| Canvas | `#F3F3F3` neutral | `#EBEEF5` blue-tinted |
| Display type | Salesforce Sans, sentence case | Archivo **expanded** (`wdth 116`), uppercase |
| Icons | Salesforce icon set | Custom 24-unit glyph family in `Icons.tsx` |

**The signature element is the Path** (`Path.tsx`) — the chevron stage component every revenue person reads instantly as "where this record actually is." It appears once, in the hero, showing a lead lifecycle stalling in a typical stack and running clean after a rebuild. That is the whole pitch, stated before a word of copy is read.

Structural numbering is load-bearing, not decorative: the three service panels are numbered because each layer genuinely depends on the one before it (`Requires 01`, `Requires 01 + 02`). The four engagement models are *not* numbered, because they're alternatives rather than a sequence.

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

Tokens live at the top of `src/app/globals.css`.

Component classes (`.btn`, `.panel`, `.band`, `.display`, `.label`, `.path`) are defined inside `@layer components` **on purpose** — Tailwind v4 emits utilities into `@layer utilities`, and unlayered CSS would beat them in the cascade, silently breaking things like `md:hidden` on a `.btn`.

Two cascade gotchas worth knowing before editing:

- `.band--chrome` recolours `.display`, `.label`, and `.link` for dark sections. A **light panel nested inside a dark band** needs those rules undone or its text renders white-on-white — that's what the `.band--chrome .panel:not(.panel--chrome)` block exists for.
- The Path uses `clip-path` for its chevrons, which cannot render borders. Stages rely on background fills, so they need a canvas darker than white behind them.

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
