import { hero } from '@/content/site'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="dot-grid" aria-hidden />
      <div
        className="ring hidden lg:block"
        aria-hidden
        style={{ right: '-150px', top: '70px', width: '470px', height: '470px' }}
      />
      <div
        className="ring hidden lg:block"
        aria-hidden
        style={{ right: '30px', top: '210px', width: '320px', height: '320px' }}
      />

      <div className="container relative z-10">
        <div className="grid items-center gap-16 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <p className="eyebrow rise">{hero.eyebrow}</p>

            <h1 className="display h1 rise d1">
              Your GTM stack, rebuilt so the{' '}
              <span className="accent">AI does the work</span>.
            </h1>

            <p className="lead rise d2">{hero.lead}</p>

            <p className="rise d2 mt-4 text-[15px] text-[var(--steel)]">
              {hero.note}
            </p>

            <div className="rise d3 mt-9 flex flex-wrap gap-4">
              <a href="#contact" className="btn btn--primary">
                Start a conversation
              </a>
              <a href="#work" className="btn btn--secondary">
                See how I work
              </a>
            </div>
          </div>

          {/* Abstract: a system that resolves cleanly. */}
          <div className="rise d3 hidden lg:block">
            <SystemDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}

const stages = [
  { label: 'Signal in', detail: 'form, list, intent' },
  { label: 'Resolve', detail: 'dedupe + enrich' },
  { label: 'Qualify', detail: 'ICP fit, scored' },
  { label: 'Route', detail: 'owner, SLA, sequence' },
]

function SystemDiagram() {
  return (
    <div className="card relative overflow-hidden p-9">
      <div className="mb-7 flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--steel)]">
          One record, end to end
        </span>
        <span className="index-num">/ invocable</span>
      </div>

      <ol className="relative space-y-0">
        {stages.map((stage, i) => (
          <li key={stage.label} className="relative flex gap-5 pb-7 last:pb-0">
            {i < stages.length - 1 && (
              <span
                aria-hidden
                className="absolute left-[13px] top-[26px] h-full w-px bg-[var(--line)]"
              />
            )}
            <span
              aria-hidden
              className="relative z-10 mt-[3px] flex h-[27px] w-[27px] shrink-0 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[var(--paper)] font-display text-[13px] text-[var(--rust)]"
            >
              {i + 1}
            </span>
            <span>
              <span className="block text-[15px] font-semibold text-[var(--ink)]">
                {stage.label}
              </span>
              <span className="block text-[14px] text-[var(--steel)]">
                {stage.detail}
              </span>
            </span>
          </li>
        ))}
      </ol>

      <div className="mt-7 flex items-center gap-2.5 border-t border-[var(--line)] pt-6">
        <span
          aria-hidden
          className="h-[7px] w-[7px] rounded-full bg-[var(--rust)]"
        />
        <span className="text-[14px] text-[var(--steel)]">
          Same result on the first call and the ten-thousandth.
        </span>
      </div>
    </div>
  )
}
