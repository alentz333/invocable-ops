import { site } from '@/content/site'

/**
 * Hub-and-spoke mark: four satellite systems wired into one core.
 * Kept to four nodes rather than six so it stays legible at nav size.
 */
export function LogoMark({
  size = 30,
  className = '',
  nodeFill = 'var(--canvas)',
}: {
  size?: number
  className?: string
  nodeFill?: string
}) {
  const satellites = [
    [8.5, 8.5],
    [23.5, 8.5],
    [8.5, 23.5],
    [23.5, 23.5],
  ] as const

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      className={className}
    >
      {satellites.map(([x, y]) => (
        <line
          key={`l-${x}-${y}`}
          x1={16}
          y1={16}
          x2={x}
          y2={y}
          stroke="currentColor"
          strokeWidth={1.25}
          strokeLinecap="round"
          opacity={0.45}
        />
      ))}
      {satellites.map(([x, y]) => (
        <circle
          key={`c-${x}-${y}`}
          cx={x}
          cy={y}
          r={2.6}
          stroke="currentColor"
          strokeWidth={1.5}
          fill={nodeFill}
        />
      ))}
      <circle cx={16} cy={16} r={4.4} fill="currentColor" />
    </svg>
  )
}

export default function Logo({
  size = 'md',
}: {
  size?: 'md' | 'lg'
}) {
  const mark = size === 'lg' ? 34 : 30
  const text = size === 'lg' ? 'text-[30px]' : 'text-[26px]'

  return (
    <span className="flex items-center gap-3">
      <LogoMark size={mark} className="text-[var(--rust)]" />
      <span
        className={`font-display leading-none tracking-[-0.01em] text-[var(--ink)] ${text}`}
      >
        {site.name}
      </span>
    </span>
  )
}
