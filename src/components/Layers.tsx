import { layers, layerRecipes } from '@/content/site'
import { Plate, Slot, SlotEmpty } from './Plate'

/** Recipe arrow — inputs on the left, product on the right. */
function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="recipe__arrow"
      aria-hidden
    >
      <path d="M4 12h14M13 7l5 5-5 5" />
    </svg>
  )
}

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
            <Plate key={layer.num} className="flex flex-col">
              <div className="plate__head plate__head--tall">
                <Slot glyph={layer.glyph} color={layer.color} size="lg" />
                <div className="min-w-0 flex-1">
                  <p className="label" style={{ color: layer.color }}>
                    Layer {layer.num}
                  </p>
                  <h3 className="display display-md mt-1">{layer.title}</h3>
                </div>
              </div>

              {/* The recipe: what this machine consumes to produce its
                  output. The dependency between layers is an ingredient
                  list, so it gets drawn as one rather than described. */}
              <div className="recipe">
                {i === 0 ? (
                  <SlotEmpty />
                ) : (
                  layers
                    .slice(0, i)
                    .map((input) => (
                      <Slot
                        key={input.num}
                        glyph={input.glyph}
                        color={input.color}
                        size="sm"
                      />
                    ))
                )}
                <Arrow />
                <Slot glyph={layer.glyph} color={layer.color} size="sm" />
                <p className="label ml-auto pl-2 text-right">
                  {layerRecipes[i]}
                </p>
              </div>

              <div className="plate__body flex flex-1 flex-col">
                <p className="text-[14.5px] leading-relaxed">{layer.summary}</p>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {layer.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-[14px] leading-snug"
                    >
                      <span
                        aria-hidden
                        className="mt-[7px] h-[5px] w-[5px] flex-none"
                        style={{ background: layer.color }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Plate>
          ))}
        </div>
      </div>
    </section>
  )
}
