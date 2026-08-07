import { definition } from '@/content/site'

export default function Definition() {
  return (
    <section className="section section--paper border-y border-[var(--line)]">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">The name</p>
            <p className="display text-[clamp(38px,4.4vw,58px)] leading-none">
              {definition.word}
            </p>
            <p className="mt-4 font-display text-[19px] text-[var(--steel)]">
              {definition.pronunciation}
              <span className="ml-2 italic">{definition.partOfSpeech}</span>
            </p>
            <p className="mt-5 max-w-[38ch] border-l-2 border-[var(--rust)] pl-5 text-[17px] text-[var(--graphite)]">
              {definition.gloss}
            </p>
          </div>

          <div className="lg:pt-16">
            {definition.body.map((para, i) => (
              <p
                key={i}
                className="mb-5 max-w-[62ch] text-[17px] leading-[1.7] text-[rgba(47,55,68,0.84)] last:mb-0"
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
