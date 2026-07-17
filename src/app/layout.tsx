import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Invocable Ops | Salesforce Architecture & GTM Systems",
  description: "Expert Salesforce architecture, advanced automations, and GTM playbook builds for startups and mid-market SaaS companies.",
  keywords: ["Salesforce", "CPQ", "GTM", "Revenue Operations", "SaaS", "Consulting"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
