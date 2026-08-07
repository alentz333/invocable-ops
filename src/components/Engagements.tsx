import { engagements } from '@/content/site'

export default function Engagements() {
  return (
    <section id="engagements" className="section">
      <div className="container">
        <p className="eyebrow">Ways to work together</p>
        <h2 className="display h2">
          Four shapes, depending on what&apos;s actually{' '}
          <span className="accent">in the way</span>.
        </h2>
        <p className="lead">
          Most engagements start with the first one. Not everything needs to
          become a retainer.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {engagements.map((item) => (
            <article key={item.num} className="card card--flat flex flex-col p-9">
              <div className="flex flex-col gap-2 border-b border-[var(--line)] pb-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <div className="flex items-baseline gap-4">
                  <span className="index-num">{item.num}</span>
                  <h3 className="display text-[28px] text-[var(--ink)]">
                    {item.title}
                  </h3>
                </div>
                <span className="pl-9 text-[12px] font-medium uppercase tracking-[0.1em] text-[var(--steel)] sm:shrink-0 sm:pl-0 sm:text-right">
                  {item.duration}
                </span>
              </div>

              <p className="mt-6 flex-1 text-[15.5px] leading-relaxed text-[rgba(47,55,68,0.84)]">
                {item.body}
              </p>

              <p className="mt-6 border-t border-[var(--line)] pt-5 text-[14px] italic text-[var(--steel)]">
                {item.best}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
