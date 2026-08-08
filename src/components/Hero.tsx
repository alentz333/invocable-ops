import { hero, lifecycle } from '@/content/site'
import { Panel, PanelHead } from './Panel'
import Path from './Path'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-field" aria-hidden />

      <div className="shell relative z-10">
        <div className="grid items-center gap-12 py-16 lg:grid-cols-[1fr_1fr] lg:py-20">
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

          {/* Thesis, stated in the audience's own UI grammar. */}
          <Panel className="lift s3">
            <PanelHead
              glyph="funnel"
              color="#2F35D4"
              title="Lead lifecycle"
              meta={<span className="pill">5 stages</span>}
            />
            <div className="panel__body space-y-6">
              <Path
                stages={lifecycle.stages}
                states={lifecycle.before.states}
                label={lifecycle.before.label}
                note={lifecycle.before.note}
                tone="warn"
              />
              <div className="h-px bg-[var(--line-soft)]" />
              <Path
                stages={lifecycle.stages}
                states={lifecycle.after.states}
                label={lifecycle.after.label}
                note={lifecycle.after.note}
                tone="good"
              />
            </div>
          </Panel>
        </div>
      </div>
    </section>
  )
}
