import { about, why } from '@/content/site'
import { Panel, PanelHead } from './Panel'

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

          {/* Record-detail read view: mono label, plain value. */}
          <Panel className="self-start">
            <PanelHead glyph="hub" color="#2F35D4" title="Why leaders call" />
            <div className="panel__body pt-1">
              {why.map((item) => (
                <div key={item.title} className="field-row">
                  <p className="label">{item.title}</p>
                  <p className="field-row__value text-[14.5px] leading-snug">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </section>
  )
}
