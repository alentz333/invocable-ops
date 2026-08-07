import { nav } from '@/content/site'
import Logo from './Logo'

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--canvas)_88%,transparent)] backdrop-blur-md">
      <div className="container flex h-[84px] items-center justify-between gap-6">
        <a href="#top" aria-label="Invocable Ops — home">
          <Logo />
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
            Let&apos;s talk
          </a>
        </nav>

        <a href="#contact" className="btn btn--primary btn--small md:hidden">
          Let&apos;s talk
        </a>
      </div>
    </header>
  )
}
