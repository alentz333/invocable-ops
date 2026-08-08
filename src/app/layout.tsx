import type { Metadata } from 'next'
import { Archivo, JetBrains_Mono } from 'next/font/google'
import { site } from '@/content/site'
import './globals.css'

/**
 * Archivo is loaded with its width axis so headlines can run expanded —
 * that width is the page's typographic signature, not a default.
 */
const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-archivo',
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
    <html lang="en" className={`${archivo.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  )
}
