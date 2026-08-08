/**
 * Custom glyph set for the object tiles.
 *
 * Deliberately drawn rather than borrowed: same 24-unit grid, same 1.85
 * stroke, so they read as one family the way a CRM's object icons do —
 * without reusing anyone else's icon shapes.
 */

type IconProps = { size?: number }

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.85,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
})

/** Hub and spoke — the house mark. Four systems into one core. */
export function IconHub({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)}>
      {/* Spokes stop short of the nodes so the mark still reads as
          hub-and-spoke at 16px instead of collapsing into an X. */}
      <path d="M12 12 9.2 9.2M12 12l2.8-2.8M12 12l-2.8 2.8M12 12l2.8 2.8" />
      <circle cx="6.5" cy="6.5" r="2.1" />
      <circle cx="17.5" cy="6.5" r="2.1" />
      <circle cx="6.5" cy="17.5" r="2.1" />
      <circle cx="17.5" cy="17.5" r="2.1" />
      <circle cx="12" cy="12" r="2.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Layered foundation — the data model everything else stands on. */
export function IconFoundation({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M3 17.5 12 21.5l9-4M3 12.5 12 16.5l9-4" />
      <path d="m3 7.5 9-4 9 4-9 4z" />
    </svg>
  )
}

/** Signal resolving to a point — enrichment and scoring. */
export function IconResolve({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M3 5.5h7M3 12h4M3 18.5h7" />
      <path d="M10 5.5c5 0 3.5 6.5 8 6.5M10 18.5c5 0 3.5-6.5 8-6.5" />
      <circle cx="19.5" cy="12" r="2.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Outbound — sequenced sends leaving the system. */
export function IconDispatch({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M21 3 10.5 13.5M21 3l-6.5 18-4-7.5L3 9.5z" />
    </svg>
  )
}

/** Cloud — the CRM of record. */
export function IconCloud({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M7 18.5a4.2 4.2 0 0 1-.3-8.4A5.4 5.4 0 0 1 17 9.2a3.9 3.9 0 0 1 .6 7.7l-.6.05z" />
    </svg>
  )
}

/** Ascending cadence — sequences stepping over time. */
export function IconCadence({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M3 20.5h4v-5H3zM10 20.5h4v-9h-4zM17 20.5h4V6.5h-4z" />
    </svg>
  )
}

/** Funnel — lifecycle narrowing to qualified. */
export function IconFunnel({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M3 4.5h18l-7 8v7l-4 2v-9z" />
    </svg>
  )
}

/** Target — account selection and ICP fit. */
export function IconTarget({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Waterfall — enrichment steps cascading down. */
export function IconWaterfall({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M3.5 4.5h7v6h7v6h-7M3.5 4.5v6h7" />
      <circle cx="17.5" cy="19.5" r="2" />
    </svg>
  )
}

/** Two-way sync — records reconciled between systems. */
export function IconSync({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M4 9.5h13l-3.5-3.5M20 14.5H7l3.5 3.5" />
    </svg>
  )
}

/** Check — a stage that closed cleanly. */
export function IconCheck({ size = 13 }: IconProps) {
  return (
    <svg {...base(size)} strokeWidth={2.6}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  )
}

/** Alert — a stage nobody owns. */
export function IconAlert({ size = 13 }: IconProps) {
  return (
    <svg {...base(size)} strokeWidth={2.4}>
      <path d="M12 7.5v6M12 17.2v.3" />
      <circle cx="12" cy="12" r="9" strokeWidth={1.9} />
    </svg>
  )
}

export const glyphs = {
  hub: IconHub,
  foundation: IconFoundation,
  resolve: IconResolve,
  dispatch: IconDispatch,
  cloud: IconCloud,
  cadence: IconCadence,
  funnel: IconFunnel,
  target: IconTarget,
  waterfall: IconWaterfall,
  sync: IconSync,
} as const

export type GlyphName = keyof typeof glyphs
