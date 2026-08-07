import { NextResponse } from 'next/server'
import { site } from '@/content/site'

/**
 * Contact form handler.
 *
 * Sends via Resend when RESEND_API_KEY is set. Without it, the submission is
 * logged server-side and still returns success, so the form works in local dev
 * before the mail provider is wired up.
 *
 * TODO (Alex): create a Resend account, verify invocableops.com as a sending
 * domain, then set RESEND_API_KEY and CONTACT_FROM in the Vercel project env.
 */

type Payload = {
  name?: string
  email?: string
  company?: string
  stack?: string
  message?: string
}

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

export async function POST(request: Request) {
  let body: Payload

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const name = body.name?.trim() ?? ''
  const email = body.email?.trim() ?? ''
  const message = body.message?.trim() ?? ''
  const company = body.company?.trim() || '—'
  const stack = body.stack?.trim() || '—'

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Name, email, and a message are all required.' },
      { status: 400 },
    )
  }

  if (!isEmail(email)) {
    return NextResponse.json(
      { error: 'That email address does not look right.' },
      { status: 400 },
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FROM ?? 'Invocable Ops <onboarding@resend.dev>'

  if (!apiKey) {
    console.log('[contact] no RESEND_API_KEY set — submission logged only', {
      name,
      email,
      company,
      stack,
      message,
    })
    return NextResponse.json({ ok: true, delivered: false })
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: site.email,
      reply_to: email,
      subject: `New inquiry — ${name}${company !== '—' ? ` (${company})` : ''}`,
      text: [
        `Name:    ${name}`,
        `Email:   ${email}`,
        `Company: ${company}`,
        `Stack:   ${stack}`,
        '',
        message,
      ].join('\n'),
    }),
  })

  if (!res.ok) {
    const detail = await res.text()
    console.error('[contact] resend failed', res.status, detail)
    return NextResponse.json(
      { error: 'Could not send right now — please email me directly.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true, delivered: true })
}
