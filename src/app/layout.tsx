import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Invocable Ops | Salesforce & Revenue Operations Consulting',
  description: 'Expert Salesforce CPQ implementation, GTM systems architecture, and RevOps consulting. We help B2B SaaS companies scale their revenue operations.',
  keywords: ['Salesforce', 'CPQ', 'Revenue Operations', 'RevOps', 'GTM', 'B2B SaaS', 'Consulting'],
  openGraph: {
    title: 'Invocable Ops | Salesforce & Revenue Operations Consulting',
    description: 'Expert Salesforce CPQ implementation, GTM systems architecture, and RevOps consulting.',
    url: 'https://invocableops.com',
    siteName: 'Invocable Ops',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
