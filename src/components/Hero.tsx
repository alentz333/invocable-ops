import Navigation from './Navigation';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[var(--color-accent)] opacity-[0.07] blur-[120px] rounded-full" />
      
      <Navigation />
      
      <div className="container relative z-10 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-slate-300">Available for new projects</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in delay-100">
            <span className="gradient-text">Your GTM stack,</span>
            <br />
            <span className="text-white">done right.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto animate-fade-in delay-200">
            Expert Salesforce architecture, advanced automations, and GTM playbook builds 
            for startups and mid-market SaaS.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-300">
            <a href="#contact" className="btn-primary text-lg px-8 py-4">
              Start a Conversation
            </a>
            <a href="#services" className="btn-secondary text-lg px-8 py-4">
              View Services
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 pt-16 border-t border-slate-800 animate-fade-in delay-300">
            <p className="text-sm text-slate-500 mb-6">Trusted by teams at</p>
            <div className="flex items-center justify-center gap-8 md:gap-12 text-slate-500">
              <span className="text-lg font-medium">Honeycomb.io</span>
              <span className="text-slate-700">•</span>
              <span className="text-lg font-medium">SaaS Startups</span>
              <span className="text-slate-700">•</span>
              <span className="text-lg font-medium">Scale-ups</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
