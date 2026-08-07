import { services } from '@/content/site'

export default function Services() {
  return (
    <section id="work" className="section section--dark">
      <div className="container">
        <p className="eyebrow">What I actually do</p>
        <h2 className="display h2">
          Three layers, and they only work{' '}
          <span className="accent">in order</span>.
        </h2>
        <p className="lead">
          Teams usually call about the top layer. The work almost always starts
          at the bottom one.
        </p>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.num} className="card card--dark p-8">
              <div className="mb-6 flex items-baseline justify-between border-b border-[var(--dark-line)] pb-5">
                <span className="index-num">{service.num}</span>
              </div>

              <h3 className="display text-[26px] leading-tight text-white">
                {service.title}
              </h3>

              <p className="mt-4 text-[15px] leading-relaxed text-[rgba(255,255,255,0.74)]">
                {service.summary}
              </p>

              <ul className="mt-6 space-y-3 border-t border-[var(--dark-line)] pt-6">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-[14.5px] leading-relaxed text-[rgba(255,255,255,0.8)]"
                  >
                    <span
                      aria-hidden
                      className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#e8845c]"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
