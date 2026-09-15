'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown, CheckCircle2, ArrowRight, Sparkles,
  ChevronRight, Code2, Layers, ShieldCheck, Compass, Building2
} from 'lucide-react';
import { ServiceItem } from '@/lib/servicesData';
import { trackEvent } from '@/lib/analytics';
import { cn } from '@/lib/utils';

export default function ServiceDetail({ service }: { service: ServiceItem }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-brand-dark min-h-screen text-white pt-28">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 font-mono">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <ChevronRight size={12} />
          <span className="text-brand-cyan">{service.title}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 border-b border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-brand-cyan/10 via-brand-violet/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan uppercase tracking-wider">
            <Sparkles size={13} /> {service.pillar}
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
            {service.h1}
          </h1>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            {service.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              onClick={() => trackEvent('book_consultation_click', { service_name: service.title, location: 'service_hero' })}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-cyan to-brand-violet hover:from-cyan-400 hover:to-violet-500 text-brand-dark rounded-xl font-heading font-bold text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition-all flex items-center justify-center gap-2 group"
            >
              <span>{service.ctaText}</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/free-tools/ai-readiness-assessment"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-heading font-bold text-sm uppercase tracking-wider hover:border-white/20 transition-all text-center"
            >
              Take Free Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 bg-white/5 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="p-8 md:p-10 rounded-3xl bg-brand-dark/90 border border-white/10 space-y-4">
            <span className="text-xs font-mono uppercase font-bold text-brand-cyan tracking-widest block">
              The Operational Challenge
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
              Why Traditional Approaches Fail
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              {service.problemStatement}
            </p>
          </div>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <span className="text-brand-cyan text-xs font-mono uppercase tracking-widest block font-bold">
              Business Value
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Key Business Benefits
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Engineered to produce measurable operational efficiency and long-term asset value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {service.benefits.map((benefit, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-cyan/40 transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-heading font-bold text-white">{benefit.title}</h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities & Tech Stack */}
      <section className="py-24 bg-white/5 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-cyan text-xs font-mono uppercase tracking-widest block font-bold">
                Capabilities
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                What We Deliver
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {service.capabilities.map((cap, i) => (
                  <div key={i} className="p-4 rounded-xl bg-brand-dark/80 border border-white/5 flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-brand-cyan shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 font-medium">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <span className="text-brand-violet text-xs font-mono uppercase tracking-widest block font-bold">
                Technology
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                Tech Stack
              </h2>
              <p className="text-slate-400 text-xs leading-relaxed">
                We select open, battle-tested technologies that eliminate vendor lock-in.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {service.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-lg bg-brand-dark border border-white/10 text-xs font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <span className="text-brand-cyan text-xs font-mono uppercase tracking-widest block font-bold">
              Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              How We Build & Deploy
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              A structured, transparent delivery lifecycle with bi-weekly sprint reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {service.process.map((step, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 relative">
                <span className="font-mono text-xs font-bold text-brand-cyan bg-brand-cyan/10 px-2.5 py-1 rounded-md border border-brand-cyan/20 inline-block">
                  {step.step}
                </span>
                <h3 className="text-base font-heading font-bold text-white">{step.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases & Industries */}
      <section className="py-24 bg-white/5 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-6">
              <span className="text-brand-cyan text-xs font-mono uppercase tracking-widest block font-bold">
                Practical Application
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                Real-World Use Cases
              </h2>
              <div className="space-y-4">
                {service.useCases.map((uc, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-brand-dark/90 border border-white/5 space-y-2">
                    <h3 className="text-lg font-heading font-bold text-white">{uc.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{uc.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <span className="text-emerald-400 text-xs font-mono uppercase tracking-widest block font-bold">
                Sector Relevance
              </span>
              <h2 className="text-3xl font-heading font-bold text-white">
                Relevant Industries
              </h2>
              <div className="space-y-2">
                {service.industries.map((ind, i) => (
                  <Link
                    key={i}
                    href={`/industries/${ind.toLowerCase().replace(/\s+/g, '-')}`}
                    className="p-3.5 rounded-xl bg-brand-dark/80 border border-white/5 hover:border-brand-cyan/40 text-xs font-medium text-slate-300 hover:text-brand-cyan flex items-center justify-between transition-colors group"
                  >
                    <span>{ind}</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-24 border-b border-white/5">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-16 space-y-3">
              <span className="text-brand-cyan text-xs font-mono uppercase tracking-widest block font-bold">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={i}
                    className={cn(
                      "rounded-2xl border transition-all duration-200 overflow-hidden",
                      isOpen ? "bg-white/5 border-brand-cyan/30" : "bg-white/5 border-white/5"
                    )}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-white text-base"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={cn("text-slate-400 shrink-0 transition-transform duration-200", isOpen && "rotate-180 text-brand-cyan")}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 text-slate-300 text-xs leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Bottom Contextual CTA Banner */}
      <section className="py-24 relative bg-brand-dark overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white">
            Ready to build with {service.title}?
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Let’s review your architectural requirements and map out an execution plan.
          </p>
          <div>
            <Link
              href="/contact"
              onClick={() => trackEvent('book_consultation_click', { service_name: service.title, location: 'service_bottom_cta' })}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-cyan to-brand-violet text-brand-dark rounded-xl font-heading font-bold text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition-all"
            >
              <span>{service.ctaText}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
