export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Built for operators,
              <br />
              <span className="text-blue-600">by an operator</span>
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                I&apos;m Alex Lentz, and I&apos;ve spent years in the trenches of B2B SaaS revenue operations — 
                building the systems that help go-to-market teams scale.
              </p>
              <p>
                As Head of GTM Systems at Honeycomb.io, I own everything from Salesforce architecture 
                to CPQ configuration to the full marketing and sales tech stack. I know what it takes 
                to make these systems actually work together.
              </p>
              <p>
                Invocable Ops exists because I&apos;ve seen too many companies struggle with the same problems: 
                fragmented data, broken processes, and tools that don&apos;t talk to each other. 
                There&apos;s a better way, and I can help you find it.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Salesforce Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">CPQ Specialist</span>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">10+ Years in SaaS</span>
              </div>
            </div>
          </div>

          {/* Visual/Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-slate-600 dark:text-slate-300">Salesforce implementations</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="text-4xl font-bold text-blue-600 mb-2">$100M+</div>
              <div className="text-slate-600 dark:text-slate-300">Revenue processed through CPQ</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="text-4xl font-bold text-blue-600 mb-2">Series A-D</div>
              <div className="text-slate-600 dark:text-slate-300">Company stage expertise</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-slate-600 dark:text-slate-300">Client satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
