export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-slate-900 border-t border-slate-800">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold text-white">
              invocable<span className="text-[var(--color-accent)]">ops</span>
            </span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#services" className="hover:text-slate-300 transition-colors">Services</a>
            <a href="#about" className="hover:text-slate-300 transition-colors">About</a>
            <a href="#contact" className="hover:text-slate-300 transition-colors">Contact</a>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/alexanderlentz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-300 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-600">
          © {currentYear} Invocable Ops. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
