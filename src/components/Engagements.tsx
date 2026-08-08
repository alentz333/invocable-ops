import { engagements } from '@/content/site'
import { Panel, Tile } from './Panel'

export default function Engagements() {
  return (
    <section
      id="engagements"
      className="band band--alt border-y border-[var(--line)]"
    >
      <div className="shell">
        <p className="label mb-4">Ways to work together</p>
        <h2 className="display display-lg max-w-[22ch]">
          Four shapes, depending on what&apos;s actually{' '}
          <span className="accent">in the way</span>.
        </h2>
        <p className="lede">
          Most engagements start with the first one. Not everything needs to
          become a retainer.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {engagements.map((item) => (
            <Panel key={item.title} className="flex flex-col">
              <div className="panel__head">
                <Tile glyph={item.glyph} color={item.color} />
                {/* Terms sit under the title rather than in a trailing pill:
                    a long value must wrap, not push the panel wider. */}
                <div className="min-w-0 flex-1">
                  <h3 className="display display-md">{item.title}</h3>
                  <p className="label mt-1.5">{item.terms}</p>
                </div>
              </div>

              <div className="panel__body flex flex-1 flex-col">
                <p className="flex-1 text-[14.5px] leading-relaxed">
                  {item.body}
                </p>
                <p className="label mt-5 border-t border-[var(--line-soft)] pt-4">
                  {item.best}
                </p>
              </div>
            </Panel>
          ))}
        </div>
      </div>
    </section>
  )
}
