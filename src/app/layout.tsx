import type { Metadata } from 'next'
import { IBM_Plex_Sans, Instrument_Serif } from 'next/font/google'
import { site } from '@/content/site'
import './globals.css'

const plex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex',
  display: 'swap',
})

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: 'Invocable Ops | AI-native GTM systems',
  description:
    'An independent GTM systems practice for B2B SaaS. Salesforce, Outreach, HubSpot, Marketo, Apollo, and Clay — architected so enrichment, routing, and follow-up run on their own.',
  keywords: [
    'GTM systems',
    'revenue operations',
    'Salesforce Sales Cloud',
    'Outreach.io',
    'HubSpot',
    'Marketo',
    'Apollo',
    'Clay',
    'AI GTM',
    'RevOps consultant',
  ],
  openGraph: {
    title: 'Invocable Ops | AI-native GTM systems',
    description:
      'An independent GTM systems practice for B2B SaaS. One operator, no handoffs.',
    url: site.url,
    siteName: site.name,
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plex.variable} ${instrument.variable}`}>
      <body>{children}</body>
    </html>
  )
}
