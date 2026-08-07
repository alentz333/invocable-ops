/**
 * Single source of truth for site content.
 *
 * Anything marked TODO is a placeholder Alex needs to replace before launch.
 * Search this file for "TODO" to find every one of them.
 */

export const site = {
  name: 'Invocable Ops',
  tagline: 'AI-native GTM systems',

  // TODO: confirm this is the inbox you actually want mail delivered to.
  email: 'hello@invocableops.com',

  // TODO: replace with your real Cal.com / Calendly URL.
  calendarUrl: 'https://cal.com/alexlentz',

  // TODO: replace with your real LinkedIn URL.
  linkedin: 'https://www.linkedin.com/in/alexlentz',

  url: 'https://invocableops.com',
} as const

export const nav = [
  { label: 'What I do', href: '#work' },
  { label: 'Platforms', href: '#platforms' },
  { label: 'About', href: '#about' },
  { label: 'Engagements', href: '#engagements' },
] as const

/* ---------------------------------------------------------------- */

export const hero = {
  lead: "I design and build the revenue systems behind B2B SaaS go-to-market — Salesforce, Outreach, HubSpot, Marketo, Apollo, Clay — so that enrichment, routing, research, and follow-up run on their own instead of on someone's calendar reminder.",
  note: 'One operator. No handoffs, no junior consultants, no six-figure SI contract.',
}

/* The concept section — plays the role of TOP's "operating point" definition. */
export const definition = {
  word: 'in·vo·ca·ble',
  pronunciation: '/inˈvōkəbəl/',
  partOfSpeech: 'adjective',
  gloss: 'Able to be called on demand and return the same result every time.',
  body: [
    "It's how a good system behaves. A routing rule, an enrichment waterfall, a forecast roll-up — you should be able to call it a thousand times and get the same answer, whether it's Tuesday morning or the last day of the quarter.",
    "Most GTM stacks aren't invocable. They're a sediment of automations nobody has audited since the person who built them left, held together by a spreadsheet and someone's memory. That's the thing worth fixing before you add AI on top of it — because AI built on an unreliable system just produces unreliable answers faster.",
  ],
}

/* ---------------------------------------------------------------- */

export const services = [
  {
    num: '01',
    title: 'AI-native pipeline systems',
    summary:
      'The part most teams are trying to figure out right now: where AI actually belongs in the funnel, and where it quietly makes things worse.',
    // TODO: replace these with the real things you've built. This is the section
    // that decides whether the site reads as credible or as vapor.
    points: [
      'Enrichment waterfalls that resolve an account once and write back clean',
      'LLM scoring of inbound against a real ICP definition, not a keyword list',
      'Research and account briefs generated before the rep opens the record',
      'Automated data hygiene that holds the model together as volume grows',
    ],
  },
  {
    num: '02',
    title: 'Revenue architecture',
    summary:
      'The data model and reporting layer underneath everything else. Unglamorous, and the reason the other two work.',
    points: [
      'Salesforce object and lifecycle design that survives the next reorg',
      'Lead-to-opportunity flow: capture, dedupe, route, attribute',
      'Forecast and pipeline reporting leadership can actually trust',
      'Untangling the automations that accumulated before you got here',
    ],
  },
  {
    num: '03',
    title: 'Outbound & lifecycle engines',
    summary:
      'The execution layer — sequencing, nurture, and handoffs wired so no one is copying fields between tabs.',
    points: [
      'Outreach and Apollo sequence architecture tied to CRM state',
      'Marketo and HubSpot lifecycle stages that mean one specific thing',
      'Clean SDR-to-AE and marketing-to-sales handoffs with no dropped records',
      'Attribution that survives contact with a real buying committee',
    ],
  },
] as const

/* ---------------------------------------------------------------- */

export const platforms = [
  { name: 'Salesforce', detail: 'Sales Cloud — data model, automation, forecasting, reporting' },
  { name: 'Outreach', detail: 'Sequence architecture, CRM sync, rep workflow' },
  { name: 'HubSpot', detail: 'Marketing Hub and CRM, lifecycle and lead flow' },
  { name: 'Marketo', detail: 'Program design, scoring, nurture, sync hygiene' },
  { name: 'Apollo', detail: 'Prospecting, data, and outbound execution' },
  { name: 'Clay', detail: 'Enrichment waterfalls, research agents, CRM write-back' },
] as const

/* ---------------------------------------------------------------- */

export const about = {
  // Framing: describe the role, don't name the employer.
  body: [
    "I'm Alex Lentz. I currently lead GTM Systems at a venture-backed observability company, where I own the stack end to end for Sales, Marketing, Customer Success, and Professional Services — the same function I'm hired into as a consultant.",
    'That matters more than it sounds. Most people selling GTM systems work have sold the tools or implemented them on someone else\'s timeline. I run this function from the inside, which means I know which "best practice" survives a real quarter-end and which one falls over the first time a rep is in a hurry.',
    'Invocable Ops is the practice I run alongside that: senior systems work for teams who need the depth without an enterprise consulting contract wrapped around it. You work with me directly, start to finish.',
  ],
}

/* ---------------------------------------------------------------- */

export const engagements = [
  {
    num: '01',
    title: 'Audit',
    duration: 'TODO: e.g. 2 weeks, fixed fee',
    body: 'I map what you have — objects, automations, integrations, where the data actually breaks — and hand back a prioritized list of what to fix, in what order, and what it buys you. Yours to keep whether or not we work together after.',
    best: 'Best when you suspect something is wrong but can\'t name it.',
  },
  {
    num: '02',
    title: 'Build sprint',
    duration: 'TODO: e.g. 4–8 weeks, scoped per project',
    body: 'A defined build with a start and an end. Rebuild lead routing. Stand up Clay-to-Salesforce enrichment. Migrate Marketo to HubSpot without losing attribution history. Scoped up front, documented on delivery.',
    best: 'Best when you know exactly what needs to exist.',
  },
  {
    num: '03',
    title: 'Fractional GTM systems lead',
    duration: 'TODO: e.g. monthly retainer',
    body: "I'm the systems owner for a team that doesn't have one yet. Roadmap, builds, vendor decisions, and the judgment calls in between — at the fraction of the week the problem actually requires.",
    best: 'Best when the work is ongoing and nobody senior owns it.',
  },
  {
    num: '04',
    title: 'Enablement',
    duration: 'TODO: e.g. per engagement',
    body: 'Teaching your admin or first ops hire to run what exists — the architecture, the reasoning behind it, and the failure modes to watch. The goal is that you stop needing me.',
    best: 'Best when you have the headcount but not the depth.',
  },
] as const

/* ---------------------------------------------------------------- */

export const why = [
  {
    title: 'You get the operator',
    body: 'The person scoping the work is the person doing the work. Nothing gets sold by one team and delivered by another.',
  },
  {
    title: 'Built to be handed over',
    body: 'Documented, legible systems your team can maintain. No black boxes, no dependency on me after the engagement ends.',
  },
  {
    title: 'AI where it earns its place',
    body: "I'll tell you which parts of your funnel AI genuinely improves and which parts it just makes faster at being wrong.",
  },
] as const

export const contact = {
  heading: 'Know what\'s slowing revenue down?',
  lead: "Tell me what's broken, or book thirty minutes and we'll figure out whether I'm the right person for it. Either way you'll get a straight answer.",
}
