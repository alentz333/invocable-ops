import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          Salesforce & RevOps Consulting
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
          Revenue Operations
          <br />
          <span className="text-blue-600">That Actually Works</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          We help B2B SaaS companies build scalable GTM systems, implement Salesforce CPQ, 
          and create the operational foundation for predictable revenue growth.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="#contact" 
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-blue-600/25"
          >
            Schedule a Consultation
          </Link>
          <Link 
            href="#services" 
            className="w-full sm:w-auto bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
          >
            View Services
          </Link>
        </div>

        {/* Social proof hint */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Trusted by teams at</p>
          <div className="flex items-center justify-center gap-8 text-slate-400 dark:text-slate-500">
            <span className="font-semibold text-lg">Honeycomb</span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="font-semibold text-lg">B2B SaaS</span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="font-semibold text-lg">Series A-D</span>
          </div>
        </div>
      </div>
    </section>
  )
}
