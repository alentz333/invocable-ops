/**
 * Glyph set for the slots.
 *
 * Drawn heavier than a typical UI icon set — 2.1 stroke on a 24-unit
 * grid, with solid cores. Factorio's item icons are painted 3D props,
 * so they read as objects with mass; flat hairline strokes sitting in
 * a recessed slot would look like a web app wearing a costume. Weight
 * is what sells it.
 */

type IconProps = { size?: number }

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.1,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
})

/** Gear — the house mark, and the "assembling" glyph. */
export function IconHub({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)}>
      {/* Eight teeth as one path so the mark holds together at 16px. */}
      <path
        d="M12 2.6l1.9.55.9-1.05 1.65 1.1-.35 1.35 1.4 1.4 1.35-.35 1.1 1.65-1.05.9.55 1.9-.55 1.9 1.05.9-1.1 1.65-1.35-.35-1.4 1.4.35 1.35-1.65 1.1-.9-1.05-1.9.55-1.9-.55-.9 1.05-1.65-1.1.35-1.35-1.4-1.4-1.35.35-1.1-1.65 1.05-.9L2.6 12l-.55-1.9-1.05-.9 1.1-1.65 1.35.35 1.4-1.4-.35-1.35 1.65-1.1.9 1.05z"
        strokeWidth={1.7}
      />
      <circle cx="12" cy="12" r="3.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Stacked plates — the data model everything else is built from. */
export function IconFoundation({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="m3 7 9-4 9 4-9 4z" fill="currentColor" stroke="none" />
      <path d="m3 7 9-4 9 4-9 4z" />
      <path d="M3 12.2 12 16.2l9-4M3 17.2l9 4 9-4" />
    </svg>
  )
}

/** Splitter — inputs resolved into one clean output. */
export function IconResolve({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M3 6h5.5M3 18h5.5" />
      <path d="M8.5 6c4.5 0 3 6 7 6M8.5 18c4.5 0 3-6 7-6" />
      <rect
        x="15.5"
        y="8.7"
        width="6.5"
        height="6.5"
        rx="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}

/** Inserter — the arm that moves work out of the machine. */
export function IconDispatch({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M5 20.5V15l6-9" />
      <rect x="2.5" y="20" width="5" height="2" rx="1" fill="currentColor" stroke="none" />
      <path d="m11 6 8.5 2.5M19.5 8.5 16 15" />
      <circle cx="19.5" cy="8.5" r="2.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Storage tank — the system of record everything drains into. */
export function IconCloud({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)}>
      <rect x="4" y="5" width="16" height="15" rx="1.5" />
      <path d="M4 13.5h16" />
      <path d="M4 16.5h16V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" fill="currentColor" stroke="none" />
      <path d="M8 5V2.8M16 5V2.8" />
    </svg>
  )
}

/** Stepped output — cadence increasing over time. */
export function IconCadence({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M3 21h4.5v-5H3zM9.75 21h4.5v-9.5h-4.5zM16.5 21H21V5.5h-4.5z" fill="currentColor" stroke="none" />
      <path d="M3 21h4.5v-5H3zM9.75 21h4.5v-9.5h-4.5zM16.5 21H21V5.5h-4.5z" />
    </svg>
  )
}

/** Furnace mouth — volume in, qualified out. */
export function IconFunnel({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M2.5 4h19l-7.5 8.5V21l-4-2.5v-6z" />
      <path d="M2.5 4h19l-2.2 2.5H4.7z" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Targeting reticle — ICP fit. */
export function IconTarget({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)}>
      <circle cx="12" cy="12" r="8.5" strokeWidth={1.9} />
      <path d="M12 1.8v4M12 18.2v4M1.8 12h4M18.2 12h4" />
      <circle cx="12" cy="12" r="2.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Cascading pipe run — the enrichment waterfall. */
export function IconWaterfall({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M3.5 4.5h6.5v6.5h6.5v6.5h-6.5" />
      <circle cx="19.5" cy="17.5" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="3.5" cy="4.5" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Circuit loop — two systems reconciled against each other. */
export function IconSync({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M4 9h13l-3.5-3.5M20 15H7l3.5 3.5" />
    </svg>
  )
}

/** Belt segment — throughput itself. */
export function IconBelt({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)}>
      <rect x="2" y="7.5" width="20" height="9" rx="1" />
      <path d="M6 7.5 8.5 12 6 16.5M11.5 7.5 14 12l-2.5 4.5M17 7.5 19.5 12 17 16.5" strokeWidth={1.7} />
    </svg>
  )
}

/** Check — a stage running clean. */
export function IconCheck({ size = 13 }: IconProps) {
  return (
    <svg {...base(size)} strokeWidth={2.9}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  )
}

/** Alert — the blocked stage. Factorio's yellow warning triangle. */
export function IconAlert({ size = 13 }: IconProps) {
  return (
    <svg {...base(size)} strokeWidth={2.2}>
      <path d="M12 3.4 22 20.6H2z" />
      <path d="M12 10v4.4M12 17.8v.3" />
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
  belt: IconBelt,
} as const

export type GlyphName = keyof typeof glyphs
