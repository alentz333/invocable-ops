import type { CSSProperties, ReactNode } from 'react'
import { glyphs, type GlyphName } from './Icons'

/** Stamped steel panel: hard edge, top bevel, and 3px of thickness. */
export function Plate({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`plate ${className}`}>{children}</div>
}

/**
 * Inventory slot. Punched into the plate rather than sitting on it —
 * the item's own colour glows out of the recess, which is how Factorio
 * distinguishes a full slot from an empty one at a glance.
 */
export function Slot({
  glyph,
  color,
  size = 'md',
}: {
  glyph: GlyphName
  color: string
  size?: 'sm' | 'md' | 'lg'
}) {
  const Glyph = glyphs[glyph]
  const px = size === 'lg' ? 22 : size === 'sm' ? 14 : 18
  return (
    <span
      className={`slot${size === 'lg' ? ' slot--lg' : ''}${
        size === 'sm' ? ' slot--sm' : ''
      } slot--filled`}
      style={
        {
          '--slot-tint': `${color}38`,
          '--slot-ink': color,
        } as CSSProperties
      }
      aria-hidden
    >
      <Glyph size={px} />
    </span>
  )
}

/** Empty slot — a recipe input that isn't a product of this practice. */
export function SlotEmpty({ size = 'sm' }: { size?: 'sm' | 'md' }) {
  return (
    <span
      className={`slot slot--empty${size === 'sm' ? ' slot--sm' : ''}`}
      aria-hidden
    />
  )
}

export function PlateHead({
  glyph,
  color,
  title,
  meta,
}: {
  glyph?: GlyphName
  color?: string
  title: string
  meta?: ReactNode
}) {
  return (
    <div className="plate__head">
      {glyph && color && <Slot glyph={glyph} color={color} />}
      <h3 className="display display-md min-w-0 flex-1">{title}</h3>
      {meta}
    </div>
  )
}

/**
 * Throughput readout. Deliberately a bar of cells rather than a figure:
 * the lifecycle on this page is illustrative, and inventing a number
 * would turn an illustration into a claim about a client's results.
 */
export function Meter({
  filled,
  total = 6,
  color,
}: {
  filled: number
  total?: number
  color: string
}) {
  return (
    <span
      className="meter"
      style={{ '--meter': color } as CSSProperties}
      aria-hidden
    >
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={`meter__cell${i < filled ? ' meter__cell--on' : ''}`}
        />
      ))}
    </span>
  )
}
