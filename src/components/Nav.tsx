import { nav } from '@/content/site'
import Logo from './Logo'

/** Global chrome bar — the dark strip that sits above every console. */
export default function Nav() {
  return (
    <header className="on-chrome sticky top-0 z-50 bg-[var(--chrome)]">
      <div className="shell flex h-[56px] items-center justify-between gap-6">
        <a href="#top" aria-label="Invocable Ops — home">
          <Logo onChrome />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13.5px] text-white/70 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--primary btn--sm">
            Let&apos;s talk
          </a>
        </nav>

        <a href="#contact" className="btn btn--primary btn--sm md:hidden">
          Let&apos;s talk
        </a>
      </div>
    </header>
  )
}
