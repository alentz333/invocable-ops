import type { CSSProperties } from 'react'
import { glyphs } from './Icons'
import { Meter } from './Plate'
import type { Stage, StageState } from '@/content/site'

/**
 * The Line — the signature element.
 *
 * Machines connected by belts that actually run. The entire pitch is one
 * difference between the two lines in the hero: on the current stack the
 * belt is stopped, cargo is piled against a stage nobody owns, and every
 * machine downstream is starved. Anyone who has played Factorio reads that
 * jam in under a second, and anyone who owns a pipeline has lived it.
 *
 * Belt state is derived, never authored, so the picture stays physically
 * honest: a belt backs up *before* a blocked machine and starves *after*
 * it. Getting that backwards is the tell that a factory is a costume.
 */
type BeltState = 'running' | 'backed' | 'starved'

function beltState(prev: StageState, next: StageState): BeltState {
  if (prev === 'running' && next === 'running') return 'running'
  if (next === 'blocked') return 'backed'
  return 'starved'
}

const ring: Record<StageState, string> = {
  running: 'var(--running)',
  blocked: 'var(--fault)',
  starved: '#5c584f',
}

const spoken: Record<StageState, string> = {
  running: 'running',
  blocked: 'blocked',
  starved: 'starved — no input reaching it',
}

/** Cargo piled against the blocked machine, nose to tail. */
const JAM = ['calc(100% - 17px)', 'calc(100% - 33px)', 'calc(100% - 49px)']

/** Evenly spaced departures, so the running belt never shows a gap. */
const FLOW = ['0ms', '207ms', '414ms']

function Belt({ state }: { state: BeltState }) {
  const running = state === 'running'
  return (
    <span
      className={`belt ${running ? 'belt--running' : 'belt--stopped'}`}
      aria-hidden
    >
      <span className="belt__lane" />

      {running &&
        FLOW.map((delay) => (
          <span key={delay} className="cargo" style={{ animationDelay: delay }} />
        ))}

      {state === 'backed' &&
        JAM.map((pos) => (
          <span
            key={pos}
            className="cargo cargo--held"
            style={{ '--pos': pos } as CSSProperties}
          />
        ))}
    </span>
  )
}

export default function Line({
  stages,
  states,
  label,
  status,
  note,
  meter,
  tone,
}: {
  stages: readonly Stage[]
  states: readonly StageState[]
  label: string
  status: string
  note: string
  meter: number
  tone: 'fault' | 'running'
}) {
  const color = tone === 'fault' ? 'var(--fault)' : 'var(--running)'

  return (
    <div>
      <div className="mb-3.5 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <p className="label">{label}</p>
        <div className="flex items-center gap-2.5">
          <Meter filled={meter} color={color} />
          <span className="chip" style={{ color }}>
            {status}
          </span>
        </div>
      </div>

      <ol className="line" aria-label={`${label}: lead processing line`}>
        {stages.map((stage, i) => {
          const state = states[i] ?? 'starved'
          const Glyph = glyphs[stage.glyph]
          const next = states[i + 1]

          return (
            <li key={stage.name} className="line__seg">
              <div className="line__node">
                <span
                  className="machine slot slot--lg"
                  style={
                    {
                      '--state': ring[state],
                      '--state-glow':
                        state === 'starved' ? 'transparent' : ring[state],
                      color: state === 'starved' ? '#6f6a60' : ring[state],
                    } as CSSProperties
                  }
                >
                  <Glyph size={21} />
                  <span className="machine__ring" />
                  <span
                    className={`machine__lamp${
                      state === 'blocked' ? ' machine__lamp--fault' : ''
                    }`}
                  />
                </span>
                <span className="line__name">
                  {stage.name}
                  <span className="sr-only"> — {spoken[state]}</span>
                </span>
              </div>

              {next && <Belt state={beltState(state, next)} />}
            </li>
          )
        })}
      </ol>

      <p
        className="mt-4 flex items-start gap-2.5 text-[13.5px] leading-snug"
        style={{ color: tone === 'fault' ? '#e08a7a' : '#9dd48d' }}
      >
        <span
          aria-hidden
          className="mt-[6px] h-[6px] w-[6px] flex-none"
          style={{ background: color }}
        />
        {note}
      </p>
    </div>
  )
}
