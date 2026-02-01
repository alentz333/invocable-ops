import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-slate-900 dark:bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="text-xl font-semibold text-white">
            <span className="text-blue-400">Invocable</span> Ops
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6 text-slate-400">
            <Link href="#services" className="hover:text-white transition-colors">
              Services
            </Link>
            <Link href="#about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Invocable Ops. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
