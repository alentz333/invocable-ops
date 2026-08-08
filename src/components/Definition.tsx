import { definition } from '@/content/site'

export default function Definition() {
  return (
    <section className="band band--tight band--alt border-y border-[var(--line)]">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
          <div>
            <p className="label mb-4">Where the name comes from</p>
            <p className="display display-lg lowercase">{definition.word}</p>
            <p className="label mt-3">
              {definition.pronunciation} · {definition.partOfSpeech}
            </p>
            <p className="mt-5 border-l-2 border-[var(--primary)] pl-4 text-[15px] text-[var(--ink)]">
              {definition.gloss}
            </p>
          </div>

          <div className="lg:pt-9">
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
