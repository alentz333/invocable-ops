import { definition } from '@/content/site'
import { Slot } from './Plate'

/**
 * The dictionary entry, rendered as a Factorio item tooltip — title bar
 * with the item's slot, a hairline, then the description. It is the one
 * place on the page where the practice explains its own name, and the
 * tooltip is exactly the game's grammar for "here is what this thing is".
 */
export default function Definition() {
  return (
    <section className="band band--tight band--well">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-16">
          <div className="tooltip self-start">
            <div className="tooltip__head">
              <Slot glyph="hub" color="#FF9F2B" />
              <div className="min-w-0">
                <p className="display display-md lowercase">{definition.word}</p>
                <p className="label mt-1">
                  {definition.pronunciation} · {definition.partOfSpeech}
                </p>
              </div>
            </div>
            <div className="px-[13px] py-4">
              <p className="label label--accent mb-2.5">Description</p>
              <p className="text-[15px] leading-[1.55] text-[var(--ink)]">
                {definition.gloss}
              </p>
            </div>
          </div>

          <div>
            <p className="label mb-4">Where the name comes from</p>
            {definition.body.map((para, i) => (
              <p
                key={i}
                className="mb-4 max-w-[64ch] text-[15.5px] leading-[1.68] last:mb-0"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
