import { IconHub } from './Icons'
import { site } from '@/content/site'

/** The house mark as an object tile — the same chip a CRM puts on a record. */
export function LogoTile({ size = 30 }: { size?: number }) {
  return (
    <span
      className="tile"
      style={{ width: size, height: size }}
      aria-hidden
    >
      <IconHub size={Math.round(size * 0.54)} />
    </span>
  )
}

export default function Logo({
  onChrome = false,
  tile = 30,
}: {
  onChrome?: boolean
  tile?: number
}) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoTile size={tile} />
      <span
        className="text-[15px] font-bold uppercase leading-none tracking-[0.02em]"
        style={{
          fontVariationSettings: '"wdth" 112',
          color: onChrome ? '#fff' : 'var(--ink)',
        }}
      >
        {site.name}
      </span>
    </span>
  )
}
