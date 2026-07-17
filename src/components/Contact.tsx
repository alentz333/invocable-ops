'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to form backend (Formspree, etc.)
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section bg-slate-950">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's Talk
            </h2>
            <p className="text-xl text-slate-400">
              Have a project in mind? Let's discuss how I can help.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">✉️</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400">I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      className="input-field"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="input-field"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Company</label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Your company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                    <textarea
                      required
                      rows={4}
                      className="input-field resize-none"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              )}
            </div>
            
            {/* Other Contact Options */}
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-lg font-semibold text-white mb-4">📅 Book a Call</h3>
                <p className="text-slate-400 mb-4">
                  Prefer to chat live? Schedule a 30-minute discovery call.
                </p>
                <a
                  href="https://calendly.com/alexlentz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full"
                >
                  Open Calendly
                </a>
              </div>
              
              <div className="card">
                <h3 className="text-lg font-semibold text-white mb-4">📧 Email Directly</h3>
                <p className="text-slate-400 mb-4">
                  For quick questions or if forms aren't your thing.
                </p>
                <a
                  href="mailto:alex@invocableops.com"
                  className="text-[var(--color-accent)] hover:text-[var(--color-accent-light)] font-medium"
                >
                  alex@invocableops.com
                </a>
              </div>
              
              <div className="card bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent border-[var(--color-accent)]/20">
                <h3 className="text-lg font-semibold text-white mb-2">Response Time</h3>
                <p className="text-slate-400">
                  I typically respond within <strong className="text-white">24 hours</strong> on business days. 
                  For urgent projects, mention it in your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
