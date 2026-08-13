import { engagements } from '@/content/site'
import { Plate, Slot } from './Plate'

/**
 * Engagement models as tech-tree nodes: what the node unlocks on top, what
 * it costs along the bottom. Unlike the layers these are alternatives, not
 * a sequence, so they carry no numbers and no dependency arrows — the
 * absence is the information.
 */
export default function Engagements() {
  return (
    <section id="engagements" className="band band--well">
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
            <Plate key={item.title} className="flex flex-col">
              <div className="plate__head">
                <Slot glyph={item.glyph} color={item.color} size="lg" />
                <h3 className="display display-md min-w-0 flex-1">
                  {item.title}
                </h3>
              </div>

              <div className="plate__body flex flex-1 flex-col">
                <p className="flex-1 text-[14.5px] leading-relaxed">
                  {item.body}
                </p>
                <p className="mt-5 text-[13.5px] italic leading-snug text-[var(--muted)]">
                  {item.best}
                </p>
              </div>

              {/* Cost strip, the way a tech node states its price. */}
              <div className="recipe">
                <p className="label">Cost</p>
                <p className="label ml-auto text-right text-[var(--ink)]">
                  {item.terms}
                </p>
              </div>
            </Plate>
          ))}
        </div>
      </div>
    </section>
  )
}
