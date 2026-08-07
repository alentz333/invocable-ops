import { about, why } from '@/content/site'

export default function About() {
  return (
    <section id="about" className="section section--paper border-y border-[var(--line)]">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="display h2">
              Run by someone who owns this function{' '}
              <span className="accent">from the inside</span>.
            </h2>

            <div className="mt-8">
              {about.body.map((para, i) => (
                <p
                  key={i}
                  className="mb-5 max-w-[62ch] text-[17px] leading-[1.7] text-[rgba(47,55,68,0.84)] last:mb-0"
                >
                  {para}
                </p>
              ))}
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-8 border-t border-[var(--line)] pt-10">
              {about.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-[42px] leading-none text-[var(--ink)]">
                      {stat.value}
                    </span>
                    <span className="mt-2 block text-[13px] leading-snug text-[var(--steel)]">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:pt-24">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--steel)]">
              Why leaders bring me in
            </p>
            <div className="mt-6 space-y-px overflow-hidden rounded-[var(--radius)] border border-[var(--line)] bg-[var(--line)]">
              {why.map((item, i) => (
                <div key={item.title} className="bg-[var(--canvas)] p-7">
                  <div className="flex items-baseline gap-3">
                    <span className="index-num">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="display text-[21px] text-[var(--ink)]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-[var(--steel)]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
