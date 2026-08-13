import { nav } from '@/content/site'
import Logo from './Logo'

/** The top bar — a mounted plate spanning the whole floor. */
export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--edge)] bg-[linear-gradient(180deg,#3b3b35,#2e2e2a)] shadow-[inset_0_1px_0_var(--bevel-hi),0_2px_10px_rgba(0,0,0,0.45)]">
      <div className="shell flex h-[56px] items-center justify-between gap-6">
        <a href="#top" aria-label="Invocable Ops — home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13.5px] text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
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
