import { platforms } from '@/content/site'

export default function Platforms() {
  return (
    <section id="platforms" className="section">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">Platforms</p>
            <h2 className="display h2">
              Six tools, gone <span className="accent">deep</span> rather than
              twenty gone shallow.
            </h2>
          </div>
          <p className="lead lg:mb-2">
            I don&apos;t claim coverage of every tool on the market. These are
            the ones I&apos;ve administered, broken, rebuilt, and lived with
            through real quarters.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius)] border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="group bg-[var(--paper)] p-8 transition-colors hover:bg-[color-mix(in_srgb,var(--rust)_4%,var(--paper))]"
            >
              <div className="flex items-center gap-2.5">
                <span
                  aria-hidden
                  className="h-[7px] w-[7px] rounded-full bg-[var(--stone)] transition-colors group-hover:bg-[var(--rust)]"
                />
                <h3 className="display text-[24px] text-[var(--ink)]">
                  {platform.name}
                </h3>
              </div>
              <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--steel)]">
                {platform.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
