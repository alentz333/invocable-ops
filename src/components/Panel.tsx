import type { ReactNode } from 'react'
import { glyphs, type GlyphName } from './Icons'

export function Panel({
  children,
  className = '',
  chrome = false,
}: {
  children: ReactNode
  className?: string
  chrome?: boolean
}) {
  return (
    <div className={`panel ${chrome ? 'panel--chrome' : ''} ${className}`}>
      {children}
    </div>
  )
}

/** Object tile: rounded-square chip, colour-coded per record type. */
export function Tile({
  glyph,
  color,
  size = 30,
}: {
  glyph: GlyphName
  color: string
  size?: number
}) {
  const Glyph = glyphs[glyph]
  return (
    <span
      className="tile"
      style={{ background: color, width: size, height: size }}
      aria-hidden
    >
      <Glyph size={Math.round(size * 0.54)} />
    </span>
  )
}

export function PanelHead({
  glyph,
  color,
  title,
  meta,
  onChrome = false,
}: {
  glyph?: GlyphName
  color?: string
  title: string
  meta?: ReactNode
  onChrome?: boolean
}) {
  return (
    <div className="panel__head">
      {glyph && color && <Tile glyph={glyph} color={color} />}
      <h3
        className="display display-md flex-1 min-w-0"
        style={onChrome ? { color: '#fff' } : undefined}
      >
        {title}
      </h3>
      {meta}
    </div>
  )
}
