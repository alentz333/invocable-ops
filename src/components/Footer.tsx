import { nav, site } from '@/content/site'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--canvas)] py-14">
      <div className="container">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden
                className="h-[9px] w-[9px] rounded-full bg-[var(--rust)]"
              />
              <span className="font-display text-[21px] leading-none text-[var(--ink)]">
                {site.name}
              </span>
            </div>
            <p className="mt-3 max-w-[36ch] text-[14px] text-[var(--steel)]">
              An independent GTM systems practice for B2B SaaS.
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <nav className="flex flex-col gap-2.5">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[14px] text-[var(--steel)] transition-colors hover:text-[var(--rust)]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-2.5">
              <a
                href={`mailto:${site.email}`}
                className="text-[14px] text-[var(--steel)] transition-colors hover:text-[var(--rust)]"
              >
                {site.email}
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-[14px] text-[var(--steel)] transition-colors hover:text-[var(--rust)]"
              >
                LinkedIn
              </a>
              <a
                href={site.calendarUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[14px] text-[var(--steel)] transition-colors hover:text-[var(--rust)]"
              >
                Book 30 minutes
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--line)] pt-6">
          <p className="text-[13px] text-[var(--slate)]">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
