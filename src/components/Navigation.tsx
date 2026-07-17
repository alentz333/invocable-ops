'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800' : ''
    }`}>
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="text-xl font-semibold text-white">
          invocable<span className="text-[var(--color-accent)]">ops</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-slate-400 hover:text-white transition-colors">
            Services
          </a>
          <a href="#about" className="text-slate-400 hover:text-white transition-colors">
            About
          </a>
          <a href="#contact" className="btn-primary text-sm">
            Get in Touch
          </a>
        </div>
        
        <a href="#contact" className="md:hidden btn-primary text-sm">
          Contact
        </a>
      </div>
    </nav>
  );
}
