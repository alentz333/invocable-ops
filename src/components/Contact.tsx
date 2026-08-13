'use client'

import { useState } from 'react'
import { contact, site } from '@/content/site'
import { Plate } from './Plate'
import { IconCheck } from './Icons'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setError('')

    const data = Object.fromEntries(new FormData(e.currentTarget))

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error ?? 'Something went wrong.')
      }
      setStatus('sent')
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  return (
    <>
      {/* The page's only hazard stripe. Painted on a floor it means
          "something happens here"; used twice it would mean nothing. */}
      <div className="hazard" aria-hidden />

      <section id="contact" className="band">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="label mb-4">Contact</p>
              <h2 className="display display-lg">{contact.heading}</h2>
              <p className="lede">{contact.lede}</p>

              <div className="rule mt-9" />

              <div className="pt-7">
                <p className="label">Rather just talk</p>
                <a
                  href={site.calendarUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--neutral mt-4"
                >
                  Book 30 minutes →
                </a>
                <p className="mt-5 text-[14px] text-[var(--muted)]">
                  Or email{' '}
                  <a href={`mailto:${site.email}`} className="link">
                    {site.email}
                  </a>
                </p>
              </div>
            </div>

            <Plate>
              <div className="plate__body p-6 sm:p-7">
                {status === 'sent' ? (
                  <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                    <span
                      className="slot slot--lg slot--filled"
                      style={
                        {
                          '--slot-tint': '#63C44A38',
                          '--slot-ink': '#63C44A',
                        } as React.CSSProperties
                      }
                      aria-hidden
                    >
                      <IconCheck size={20} />
                    </span>
                    <h3 className="display display-md mt-5">Got it</h3>
                    <p className="mt-2.5 max-w-[34ch] text-[14.5px] text-[var(--muted)]">
                      I read everything that comes through here and reply within
                      a business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="label mb-1.5 block" htmlFor="name">
                          Name
                        </label>
                        <input
                          className="input"
                          id="name"
                          name="name"
                          required
                          autoComplete="name"
                        />
                      </div>
                      <div>
                        <label className="label mb-1.5 block" htmlFor="company">
                          Company
                        </label>
                        <input
                          className="input"
                          id="company"
                          name="company"
                          autoComplete="organization"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="label mb-1.5 block" htmlFor="email">
                        Work email
                      </label>
                      <input
                        className="input"
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                      />
                    </div>

                    <div>
                      <label className="label mb-1.5 block" htmlFor="stack">
                        What&apos;s in your stack
                      </label>
                      <input
                        className="input"
                        id="stack"
                        name="stack"
                        placeholder="Salesforce, Outreach, Marketo…"
                      />
                    </div>

                    <div>
                      <label className="label mb-1.5 block" htmlFor="message">
                        What&apos;s broken
                      </label>
                      <textarea
                        className="input resize-y"
                        id="message"
                        name="message"
                        rows={5}
                        required
                        placeholder="The more specific, the more useful my first reply will be."
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-[13.5px] text-[var(--fault)]">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      className="btn btn--confirm w-full"
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? 'Sending…' : 'Send'}
                    </button>

                    <p className="text-[12.5px] leading-relaxed text-[var(--faint)]">
                      No newsletter, no sequence, no nurture track. It goes to
                      my inbox.
                    </p>
                  </form>
                )}
              </div>
            </Plate>
          </div>
        </div>
      </section>
    </>
  )
}
