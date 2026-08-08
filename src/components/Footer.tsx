import { nav, site } from '@/content/site'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="on-chrome border-t border-[var(--line-dark)] bg-[var(--chrome)] py-12">
      <div className="shell">
        <div className="flex flex-col gap-9 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo onChrome tile={34} />
            <p className="mt-3.5 max-w-[34ch] text-[13.5px] text-white/50">
              An independent GTM systems practice for B2B SaaS.
            </p>
          </div>

          <div className="flex flex-col gap-7 sm:flex-row sm:gap-14">
            <nav className="flex flex-col gap-2">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[13.5px] text-white/60 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${site.email}`}
                className="text-[13.5px] text-white/60 transition-colors hover:text-white"
              >
                {site.email}
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-[13.5px] text-white/60 transition-colors hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href={site.calendarUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[13.5px] text-white/60 transition-colors hover:text-white"
              >
                Book 30 minutes
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--line-dark)] pt-5">
          <p className="label">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
