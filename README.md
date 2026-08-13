# Invocable Ops

Marketing site for **Invocable Ops** — an independent GTM systems practice for B2B SaaS, specializing in AI-native revenue systems across Salesforce Sales Cloud, Outreach, HubSpot, Marketo, Apollo, and Clay.

Live at **[invocableops.com](https://invocableops.com)**.

## Stack

- **Next.js 16** (App Router) + React 19 + TypeScript
- **Tailwind CSS 4** (via `@tailwindcss/postcss`) layered over a hand-rolled design system in `src/app/globals.css`
- **Fonts:** Titillium Web (display + UI) + JetBrains Mono (readouts), via `next/font/google`
- Contact form posts to a Route Handler that relays through **Resend**

## Design direction

The site is built with the visual grammar of **Factorio**: stamped steel plates with a hard bevel, sunken inventory slots, machine recipes, hazard stripes, and belts that actually move.

This isn't a costume. Factorio is the most widely understood visual language for *a system that runs itself*, which is the entire pitch — and the mapping is literal rather than decorative:

| Concept | Rendered as |
|---|---|
| Lead lifecycle | A production line of machines joined by conveyor belts |
| A stage nobody owns | A blocked machine with cargo piled up behind it |
| Layer dependencies | Machine recipes — earlier layers sit in the ingredient slots |
| Engagement models | Tech-tree nodes with a cost strip |
| The practice's name | A Factorio item tooltip |

**Titillium Web is Factorio's own interface typeface.** It is the quietest part of the theme and does the most work: its squared terminals and flat-cut diagonals are what makes a screen of grey panels read as *that game* rather than as generic dark mode.

**The signature element is the Line** (`Line.tsx`). It appears once, in the hero, showing the same five machines twice — jammed in a typical stack, running after a rebuild. That is the whole pitch, stated before a word of copy is read.

Belt state is **derived, never authored**, so the picture stays physically honest: a belt backs up *before* a blocked machine and starves *after* it. Getting that backwards is the tell that a factory is a costume.

Structural numbering is load-bearing, not decorative: the three service layers are numbered because each genuinely consumes the output of the one before it, which is why they render as recipes. The four engagement models are *not* numbered and carry no dependency arrows, because they're alternatives rather than a sequence — the absence is the information.

**There are deliberately no throughput numbers.** The lifecycle is illustrative, so the readout is a bar of cells reading `Output blocked` / `Running`. A figure like "412 leads/hr" would turn an illustration into a claim about a client's results.

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

Tokens live at the top of `src/app/globals.css`. The palette is warm grey steel (`#191917` ground, `#34342f` plate) with Factorio's own signal colours: orange chrome `#ff9f2b`, belt yellow `#d8ab2e`, and science-pack red/green/blue for item states.

Component classes (`.plate`, `.slot`, `.btn`, `.line`, `.belt`, `.recipe`, `.tooltip`, `.meter`) are defined inside `@layer components` **on purpose** — Tailwind v4 emits utilities into `@layer utilities`, and unlayered CSS would beat them in the cascade, silently breaking things like `md:hidden` on a `.btn`.

Things worth knowing before editing:

- **The page is dark end to end.** The old light/dark band inversion is gone, and with it the white-on-white hazard that came from nesting a light panel inside a dark band.
- **`.plate` sets `overflow: hidden`** so square-cornered heads and recipe strips clip to its radius. Its drop shadow is on the element's own box, so it survives the clip.
- **`.plate__head--tall`** exists only to keep recipe strips level across a row when one title wraps to two lines.
- **Cargo travels by animating `top`/`left`, not a transform.** A belt is a flex child of unknown width, so only a percentage offset against the container spans it at every viewport.
- **The Line goes vertical below 700px** — belts swap their gradient and travel axis rather than shipping a horizontal scroller.
- **One hazard stripe, on the contact band.** Painted on a floor it means "something happens here"; used twice it would mean nothing.

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
│   ├── Line.tsx             # the signature production line
│   ├── Plate.tsx            # plate / slot / meter primitives
│   └── Icons.tsx            # 24-unit glyph family
└── content/site.ts          # ALL copy and config
```
