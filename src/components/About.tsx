import { about, why } from '@/content/site'
import { Plate, PlateHead } from './Plate'

export default function About() {
  return (
    <section id="about" className="band">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="label mb-4">About</p>
            <h2 className="display display-lg max-w-[20ch]">
              Run by someone who owns this function{' '}
              <span className="accent">from the inside</span>.
            </h2>

            <div className="mt-7">
              {about.body.map((para, i) => (
                <p
                  key={i}
                  className="mb-4 max-w-[64ch] text-[15.5px] leading-[1.68] last:mb-0"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          <Plate className="self-start">
            <PlateHead glyph="hub" color="#FF9F2B" title="Why leaders call" />
            <div className="plate__body space-y-4 pt-4">
              {why.map((item) => (
                <div
                  key={item.title}
                  className="border-l-2 pl-3.5"
                  style={{ borderColor: 'var(--orange)' }}
                >
                  <p className="label label--accent">{item.title}</p>
                  <p className="mt-1.5 text-[14.5px] leading-snug text-[var(--ink)]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </Plate>
        </div>
      </div>
    </section>
  )
}
