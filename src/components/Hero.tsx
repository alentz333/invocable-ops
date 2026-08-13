import { hero, lifecycle } from '@/content/site'
import { Plate, PlateHead } from './Plate'
import Line from './Line'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="floor" aria-hidden />

      <div className="shell relative z-10">
        <div className="grid items-center gap-12 py-16 lg:grid-cols-[1fr_1.05fr] lg:py-20">
          <div>
            <h1 className="display display-xl lift">
              Your GTM stack, rebuilt so the{' '}
              <span className="accent">AI does the work</span>.
            </h1>

            <p className="lede lift s1">{hero.lead}</p>

            <p className="lift s1 mt-3 text-[14px] text-[var(--faint)]">
              {hero.note}
            </p>

            <div className="lift s2 mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="btn btn--primary">
                Let&apos;s talk
              </a>
              <a href="#work" className="btn btn--neutral">
                See how I work
              </a>
            </div>
          </div>

          {/* The thesis, stated as a factory floor before a word of copy
              is read: same line, once jammed and once running. */}
          <Plate className="lift s3">
            <PlateHead
              glyph="belt"
              color="#FF9F2B"
              title="Lead processing line"
              meta={<span className="chip">5 stages</span>}
            />
            <div className="plate__body space-y-7 sm:px-5">
              <Line
                stages={lifecycle.stages}
                states={lifecycle.before.states}
                label={lifecycle.before.label}
                status={lifecycle.before.status}
                note={lifecycle.before.note}
                meter={lifecycle.before.meter}
                tone="fault"
              />
              <div className="rule" />
              <Line
                stages={lifecycle.stages}
                states={lifecycle.after.states}
                label={lifecycle.after.label}
                status={lifecycle.after.status}
                note={lifecycle.after.note}
                meter={lifecycle.after.meter}
                tone="running"
              />
            </div>
          </Plate>
        </div>
      </div>
    </section>
  )
}
