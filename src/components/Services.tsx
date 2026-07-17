const services = [
  {
    icon: '🏗️',
    title: 'Salesforce Architecture',
    description: 'Ground-up design or optimization of your Salesforce org. Object models, permission structures, and scalable foundations that grow with you.',
    features: ['Org design & data modeling', 'Permission architecture', 'Multi-org strategy'],
  },
  {
    icon: '⚡',
    title: 'Advanced Automations',
    description: 'Flow-first automation that actually works. Complex business logic, approval chains, and cross-object orchestration without the technical debt.',
    features: ['Flow development', 'Approval processes', 'Triggered automations'],
  },
  {
    icon: '🔗',
    title: 'Custom Integrations',
    description: 'Connect your stack seamlessly. API integrations, middleware configuration, and data sync solutions that keep your systems in harmony.',
    features: ['REST/SOAP APIs', 'Middleware setup', 'Real-time sync'],
  },
  {
    icon: '🧹',
    title: 'Data Hygiene',
    description: 'Clean data = accurate forecasts. Deduplication, enrichment workflows, and governance frameworks that keep your data trustworthy.',
    features: ['Deduplication', 'Enrichment flows', 'Data governance'],
  },
  {
    icon: '📈',
    title: 'GTM Playbook Builds',
    description: 'End-to-end revenue operations playbooks. From lead routing to opportunity management to renewal workflows — systems that drive revenue.',
    features: ['Lead routing', 'Opp management', 'Renewal workflows'],
  },
  {
    icon: '🎯',
    title: 'CPQ Implementation',
    description: 'Salesforce CPQ done right. Complex pricing models, consumption-based billing, and quote workflows that sales teams actually use.',
    features: ['Product configuration', 'Pricing rules', 'Quote automation'],
  },
];

export default function Services() {
  return (
    <section id="services" className="section bg-slate-950">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What I Do
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Deep expertise across the Salesforce ecosystem, focused on 
            revenue operations and GTM systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="card group">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-400 mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                    <svg className="w-4 h-4 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
