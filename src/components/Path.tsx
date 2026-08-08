import { IconAlert, IconCheck } from './Icons'
import type { StageState } from '@/content/site'

/**
 * The Path — the signature element.
 *
 * Chevron stages are the one piece of CRM chrome every revenue person reads
 * instantly: it says "here is where this record actually is". Used once, in
 * the hero, to state the thesis before a word of copy is read.
 */
export default function Path({
  stages,
  states,
  label,
  note,
  tone,
}: {
  stages: readonly string[]
  states: StageState[]
  label: string
  note: string
  tone: 'warn' | 'good'
}) {
  return (
    <div>
      <p className="label mb-2">{label}</p>

      <ol className="path" aria-label={`${label} lifecycle stages`}>
        {stages.map((stage, i) => {
          const state = states[i] ?? 'open'
          return (
            <li
              key={stage}
              className={
                'path__stage' +
                (state === 'done' ? ' path__stage--done' : '') +
                (state === 'stalled' ? ' path__stage--stalled' : '')
              }
            >
              {state === 'done' && <IconCheck size={12} />}
              {state === 'stalled' && <IconAlert size={12} />}
              <span className="path__label">{stage}</span>
              <span className="sr-only">
                {state === 'done'
                  ? ' — complete'
                  : state === 'stalled'
                    ? ' — stalled'
                    : ' — not reached'}
              </span>
            </li>
          )
        })}
      </ol>

      <p
        className="mt-2.5 flex items-start gap-2 text-[13px] leading-snug"
        style={{ color: tone === 'warn' ? 'var(--amber)' : 'var(--jade)' }}
      >
        <span
          aria-hidden
          className="mt-[6px] h-[5px] w-[5px] flex-none rounded-full"
          style={{
            background: tone === 'warn' ? 'var(--amber)' : 'var(--jade)',
          }}
        />
        {note}
      </p>
    </div>
  )
}
