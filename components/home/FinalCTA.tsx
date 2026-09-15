'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export default function FinalCTA() {
  return (
    <section className="py-24 relative bg-brand-dark border-t border-white/5 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-brand-cyan/10 via-brand-violet/15 to-brand-fuchsia/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 p-8 md:p-16 text-center space-y-8 backdrop-blur-2xl shadow-2xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono font-bold uppercase tracking-widest">
            <Sparkles size={14} /> Ready To Build?
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Have a product idea, business challenge, or workflow you want to improve?
          </h2>

          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Let’s turn your operational requirements into a practical, scalable technology roadmap. Schedule a confidential 30-minute discovery consultation with our senior engineering team.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              onClick={() => trackEvent('book_consultation_click', { location: 'final_cta_primary' })}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-cyan to-brand-violet hover:from-cyan-400 hover:to-violet-500 text-brand-dark rounded-xl font-heading font-bold text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-all flex items-center justify-center gap-2 group"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/free-tools/ai-readiness-assessment"
              onClick={() => trackEvent('cta_click', { location: 'final_cta_secondary', label: 'Take AI Assessment' })}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-heading font-bold text-sm uppercase tracking-wider hover:border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Take Free Assessment</span>
            </Link>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-brand-cyan" />
              <span>30-Minute Discovery Call</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-brand-cyan" />
              <span>No Obligation Proposal</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-brand-cyan" />
              <span>Full NDA Protection</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
