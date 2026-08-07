import { hero } from '@/content/site'
import IntegrationDiagram from './IntegrationDiagram'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="dot-grid" aria-hidden />

      <div className="container relative z-10">
        <div className="grid items-center gap-14 py-20 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
          <div>
            <h1 className="display h1 rise">
              Your GTM stack, rebuilt so the{' '}
              <span className="accent">AI does the work</span>.
            </h1>

            <p className="lead rise d1">{hero.lead}</p>

            <p className="rise d1 mt-4 text-[15px] text-[var(--steel)]">
              {hero.note}
            </p>

            <div className="rise d2 mt-9 flex flex-wrap gap-4">
              <a href="#contact" className="btn btn--primary">
                Let&apos;s talk
              </a>
              <a href="#work" className="btn btn--secondary">
                See how I work
              </a>
            </div>
          </div>

          {/* Below `sm` the pill labels scale down past legibility, so the
              diagram sits out on phones rather than shipping unreadable text. */}
          <div className="rise d3 hidden sm:block">
            <IntegrationDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}
