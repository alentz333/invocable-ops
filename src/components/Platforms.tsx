import { platforms } from '@/content/site'
import { Tile } from './Panel'

export default function Platforms() {
  return (
    <section
      id="platforms"
      className="band band--alt border-y border-[var(--line)]"
    >
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="label mb-4">Platforms</p>
            <h2 className="display display-lg max-w-[18ch]">
              Six tools gone <span className="accent">deep</span>, not twenty
              gone shallow.
            </h2>
          </div>
          <p className="lede lg:mb-1">
            I don&apos;t claim coverage of every tool on the market. These are
            the ones I&apos;ve administered, broken, rebuilt, and lived with
            through real quarters.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="panel flex items-start gap-3.5 p-4 transition-shadow hover:shadow-[var(--shadow)]"
            >
              <Tile glyph={platform.glyph} color={platform.color} size={34} />
              <div className="min-w-0">
                <h3 className="display display-md">{platform.name}</h3>
                <p className="mt-1.5 text-[13.5px] leading-snug text-[var(--muted)]">
                  {platform.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
