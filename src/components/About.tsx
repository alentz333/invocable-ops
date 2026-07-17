const stats = [
  { value: '10+', label: 'Years in GTM Systems' },
  { value: '50+', label: 'Salesforce Implementations' },
  { value: '100%', label: 'Focus on SaaS' },
];

export default function About() {
  return (
    <section id="about" className="section bg-slate-900">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Built for teams that
              <span className="gradient-accent"> move fast</span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                I'm Alex Lentz — Head of GTM Systems at Honeycomb.io, where I own 
                the operational tooling for Sales, Marketing, CS, and Professional Services.
              </p>
              <p>
                After years of building and scaling revenue operations at SaaS companies, 
                I've seen what works and what becomes technical debt. Invocable Ops brings 
                that experience to teams who need senior-level Salesforce expertise without 
                the enterprise consulting markup.
              </p>
              <p>
                My approach: understand the business problem first, then architect solutions 
                that your team can actually maintain. No black-box implementations. No vendor lock-in. 
                Just clean, documented systems that scale.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-slate-800">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Visual / Credentials */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-4">Core Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['Salesforce', 'CPQ', 'Flow', 'Apex', 'HubSpot', 'Outreach', 'Workato', 'Snowflake', 'LeanData'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-4">Certifications</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="w-8 h-8 bg-[var(--color-accent)]/20 rounded-lg flex items-center justify-center text-sm">SF</span>
                  Salesforce Certified Administrator
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="w-8 h-8 bg-[var(--color-accent)]/20 rounded-lg flex items-center justify-center text-sm">SF</span>
                  Salesforce Certified Advanced Administrator
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="w-8 h-8 bg-[var(--color-accent)]/20 rounded-lg flex items-center justify-center text-sm">SF</span>
                  CPQ Specialist
                </li>
              </ul>
            </div>
            
            <div className="card bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
              <blockquote className="text-slate-300 italic">
                "Systems should make the complex feel simple — not the other way around."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
