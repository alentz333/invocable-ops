import { IconHub } from './Icons'
import { site } from '@/content/site'

/** The house mark, seated in a slot like any other item. */
export function LogoSlot({ lg = false }: { lg?: boolean }) {
  return (
    <span
      className={`slot slot--filled${lg ? ' slot--lg' : ''}`}
      style={
        {
          '--slot-tint': '#FF9F2B38',
          '--slot-ink': '#FF9F2B',
        } as React.CSSProperties
      }
      aria-hidden
    >
      <IconHub size={lg ? 22 : 18} />
    </span>
  )
}

export default function Logo({ lg = false }: { lg?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoSlot lg={lg} />
      <span className="text-[15px] font-black uppercase leading-none tracking-[0.06em] text-[var(--ink)]">
        {site.name}
      </span>
    </span>
  )
}
