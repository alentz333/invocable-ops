import { nav, site } from '@/content/site'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--edge)] bg-[var(--well)] py-12 shadow-[inset_0_1px_0_var(--bevel-hi)]">
      <div className="shell">
        <div className="flex flex-col gap-9 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo lg />
            <p className="mt-3.5 max-w-[34ch] text-[13.5px] text-[var(--faint)]">
              An independent GTM systems practice for B2B SaaS.
            </p>
          </div>

          <div className="flex flex-col gap-7 sm:flex-row sm:gap-14">
            <nav className="flex flex-col gap-2">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[13.5px] text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${site.email}`}
                className="text-[13.5px] text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
              >
                {site.email}
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-[13.5px] text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
              >
                LinkedIn
              </a>
              <a
                href={site.calendarUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[13.5px] text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
              >
                Book 30 minutes
              </a>
            </div>
          </div>
        </div>

        <div className="rule mt-10" />
        <p className="label mt-5">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  )
}
