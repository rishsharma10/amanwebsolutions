import { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProjectQualificationForm from '@/components/shared/ProjectQualificationForm';
import { Mail, Phone, MapPin, MessagesSquare, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us & Book a Consultation | Vidhyonix',
  description: 'Book a free 30-minute discovery consultation with the Vidhyonix engineering team or request a detailed project scope assessment.',
  alternates: {
    canonical: 'https://vidhyonix.com/contact',
  }
};

export default function ContactPage() {
  return (
    <>
      <main className="relative min-h-screen bg-brand-dark overflow-hidden text-white">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-40 pb-12 border-b border-white/5 overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-brand-cyan/10 via-brand-violet/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan uppercase tracking-wider">
              <MessagesSquare size={13} /> Direct Communication
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Let’s Architect Your Next Solution
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Complete our 5-step qualification assessment below to receive an architectural review, or connect directly through our official channels.
            </p>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
              {/* Form Column */}
              <div className="lg:col-span-8">
                <ProjectQualificationForm />
              </div>

              {/* Direct Info Column */}
              <div className="lg:col-span-4 space-y-6">
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6">
                  <h3 className="text-lg font-heading font-bold text-white border-b border-white/10 pb-3">
                    Direct Contact Channels
                  </h3>

                  <div className="space-y-4 text-xs">
                    <a
                      href="mailto:vidhyonixitsolutions@gmail.com"
                      className="p-4 rounded-xl bg-brand-dark border border-white/5 hover:border-brand-cyan/40 block space-y-1 transition-all group"
                    >
                      <span className="text-slate-400 font-mono block">Direct Engineering Email</span>
                      <div className="flex items-center gap-2 font-bold text-white group-hover:text-brand-cyan transition-colors">
                        <Mail size={15} className="text-brand-cyan" />
                        <span>vidhyonixitsolutions@gmail.com</span>
                      </div>
                    </a>

                    <a
                      href="tel:+918770283188"
                      className="p-4 rounded-xl bg-brand-dark border border-white/5 hover:border-brand-cyan/40 block space-y-1 transition-all group"
                    >
                      <span className="text-slate-400 font-mono block">Phone Support Line</span>
                      <div className="flex items-center gap-2 font-bold text-white group-hover:text-brand-cyan transition-colors">
                        <Phone size={15} className="text-brand-cyan" />
                        <span>+91 8770283188</span>
                      </div>
                    </a>

                    <a
                      href="https://wa.me/918770283188"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl bg-brand-dark border border-white/5 hover:border-emerald-500/40 block space-y-1 transition-all group"
                    >
                      <span className="text-slate-400 font-mono block">WhatsApp Chat</span>
                      <div className="flex items-center gap-2 font-bold text-white group-hover:text-emerald-400 transition-colors">
                        <MessagesSquare size={15} className="text-emerald-400" />
                        <span>Chat on WhatsApp</span>
                      </div>
                    </a>

                    <div className="p-4 rounded-xl bg-brand-dark border border-white/5 space-y-1">
                      <span className="text-slate-400 font-mono block">Office Location</span>
                      <div className="flex items-center gap-2 font-bold text-white">
                        <MapPin size={15} className="text-brand-cyan" />
                        <span>Mohali, Chandigarh, India</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Guarantees Box */}
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2 font-bold text-white">
                    <ShieldCheck size={16} className="text-brand-cyan" />
                    <span>Our Engagement Guarantee</span>
                  </div>
                  <ul className="space-y-2 text-slate-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-brand-cyan" />
                      <span>Response within 1 business day</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-brand-cyan" />
                      <span>Mutual Non-Disclosure Agreement (NDA)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-brand-cyan" />
                      <span>Direct consultation with lead architect</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}