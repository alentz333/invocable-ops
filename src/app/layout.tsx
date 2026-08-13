import type { Metadata } from 'next'
import { Titillium_Web, JetBrains_Mono } from 'next/font/google'
import { site } from '@/content/site'
import './globals.css'

/**
 * Titillium Web is Factorio's own interface typeface. Using it is the
 * quietest part of the theme and the one that does the most work — the
 * squared terminals and flat-cut diagonals are what makes a screen of
 * grey panels read as that game rather than as generic dark mode.
 */
const titillium = Titillium_Web({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '900'],
  variable: '--font-titillium',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
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
    <html lang="en" className={`${titillium.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  )
}
