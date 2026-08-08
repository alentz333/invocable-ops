import { layers } from '@/content/site'
import { Panel, Tile } from './Panel'

const requires = ['Foundation layer', 'Requires 01', 'Requires 01 + 02']

export default function Layers() {
  return (
    <section id="work" className="band">
      <div className="shell">
        <p className="label mb-4">What I actually do</p>
        <h2 className="display display-lg max-w-[22ch]">
          Three layers, and each one needs the{' '}
          <span className="accent">layer before it</span>.
        </h2>
        <p className="lede">
          Teams almost always call about the top layer. The work almost always
          starts at the bottom one.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {layers.map((layer, i) => (
            <Panel key={layer.num} className="flex flex-col">
              <div className="panel__head">
                <Tile glyph={layer.glyph} color={layer.color} />
                <div className="min-w-0 flex-1">
                  <p className="label" style={{ color: layer.color }}>
                    Layer {layer.num}
                  </p>
                  <h3 className="display display-md mt-1">{layer.title}</h3>
                </div>
              </div>

              <div className="panel__body flex flex-1 flex-col">
                <p className="text-[14.5px] leading-relaxed">{layer.summary}</p>

                <ul className="mt-5 flex-1 space-y-2.5 border-t border-[var(--line-soft)] pt-5">
                  {layer.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-[14px] leading-snug"
                    >
                      <span
                        aria-hidden
                        className="mt-[7px] h-[5px] w-[5px] flex-none rounded-[1px]"
                        style={{ background: layer.color }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <p className="label mt-5 border-t border-[var(--line-soft)] pt-4">
                  {requires[i]}
                </p>
              </div>
            </Panel>
          ))}
        </div>
      </div>
    </section>
  )
}
