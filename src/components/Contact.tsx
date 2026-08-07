'use client'

import { useState } from 'react'
import { contact, site } from '@/content/site'

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
    <section id="contact" className="section section--dark">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="display h2">{contact.heading}</h2>
            <p className="lead">{contact.lead}</p>

            <div className="mt-10 border-t border-[var(--dark-line)] pt-8">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[rgba(255,255,255,0.5)]">
                Rather just talk
              </p>
              <a
                href={site.calendarUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn--outline-light mt-5"
              >
                Book 30 minutes →
              </a>
              <p className="mt-6 text-[15px] text-[rgba(255,255,255,0.6)]">
                Or email{' '}
                <a
                  href={`mailto:${site.email}`}
                  className="text-white underline decoration-[rgba(255,255,255,0.3)] underline-offset-4 transition-colors hover:decoration-[#e8845c]"
                >
                  {site.email}
                </a>
              </p>
            </div>
          </div>

          <div className="card p-9">
            {status === 'sent' ? (
              <div className="flex min-h-[420px] flex-col justify-center text-center">
                <span
                  aria-hidden
                  className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--rust-soft)] font-display text-[22px] text-[var(--rust)]"
                >
                  ✓
                </span>
                <h3 className="display mt-6 text-[28px] text-[var(--ink)]">
                  Got it.
                </h3>
                <p className="mx-auto mt-3 max-w-[36ch] text-[15px] text-[var(--steel)]">
                  I read everything that comes through here and reply within a
                  business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="field-label" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="field"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label className="field-label" htmlFor="company">
                      Company
                    </label>
                    <input
                      className="field"
                      id="company"
                      name="company"
                      autoComplete="organization"
                    />
                  </div>
                </div>

                <div>
                  <label className="field-label" htmlFor="email">
                    Work email
                  </label>
                  <input
                    className="field"
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label className="field-label" htmlFor="stack">
                    What&apos;s in your stack
                  </label>
                  <input
                    className="field"
                    id="stack"
                    name="stack"
                    placeholder="Salesforce, Outreach, Marketo…"
                  />
                </div>

                <div>
                  <label className="field-label" htmlFor="message">
                    What&apos;s broken
                  </label>
                  <textarea
                    className="field resize-y"
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="The more specific, the more useful my first reply will be."
                  />
                </div>

                {status === 'error' && (
                  <p className="text-[14px] text-[var(--rust)]">{error}</p>
                )}

                <button
                  type="submit"
                  className="btn btn--primary w-full"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending…' : 'Send'}
                </button>

                <p className="text-[13px] leading-relaxed text-[var(--slate)]">
                  No newsletter, no sequence, no CRM nurture track. It just goes
                  to my inbox.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
