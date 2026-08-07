import { nav, site } from '@/content/site'

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--canvas)_88%,transparent)] backdrop-blur-md">
      <div className="container flex h-[72px] items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span
            aria-hidden
            className="h-[9px] w-[9px] rounded-full bg-[var(--rust)]"
          />
          <span className="font-display text-[21px] leading-none text-[var(--ink)]">
            {site.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] text-[var(--steel)] transition-colors hover:text-[var(--rust)]"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--primary btn--small">
            Start a conversation
          </a>
        </nav>

        <a href="#contact" className="btn btn--primary btn--small md:hidden">
          Get in touch
        </a>
      </div>
    </header>
  )
}
