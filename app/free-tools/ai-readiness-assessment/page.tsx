import { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AIReadiness from '@/components/shared/AIReadiness';
import Link from 'next/link';
import { ArrowRight, Brain, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Readiness Assessment Tool | Free Diagnostic | Vidhyonix',
  description: 'Take our free 5-step AI Readiness Assessment to evaluate your data maturity, security posture, and high-ROI automation opportunities.',
  alternates: {
    canonical: 'https://vidhyonix.com/free-tools/ai-readiness-assessment',
  }
};

export default function AIReadinessAssessmentPage() {
  return (
    <>
      <main className="relative min-h-screen bg-brand-dark overflow-hidden text-white">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-40 pb-16 border-b border-white/5 overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan uppercase tracking-wider">
              <Brain size={13} /> Free Diagnostic Tool
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
              Is Your Business Ready for Custom AI?
            </h1>
            <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
              Answer 5 foundational questions about your data cleanliness, technical infrastructure, and operational bottlenecks to receive a tailored readiness score and next steps.
            </p>
          </div>
        </section>

        {/* Assessment Tool Container */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <AIReadiness />
          </div>
        </section>

        {/* Supporting Context & Methodology */}
        <section className="py-20 bg-white/5 border-t border-white/5">
          <div className="container mx-auto px-4 max-w-4xl space-y-8">
            <h2 className="text-2xl font-heading font-bold text-white text-center">
              Our 4 Pillars of AI Readiness Evaluation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm">
              <div className="p-6 rounded-2xl bg-brand-dark/90 border border-white/5 space-y-2">
                <span className="font-mono text-brand-cyan font-bold block">01. Data Governance & Hygiene</span>
                <p className="text-slate-400 leading-relaxed">
                  Is your operational data centralized in searchable databases, or scattered across isolated spreadsheets and paper records? Clean data is the prerequisite for any AI pipeline.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-brand-dark/90 border border-white/5 space-y-2">
                <span className="font-mono text-brand-cyan font-bold block">02. Operational Volume & Repetition</span>
                <p className="text-slate-400 leading-relaxed">
                  Does your team execute hundreds of repetitive decisions or customer inquiries per week? High-frequency workflows yield the fastest return on investment.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-brand-dark/90 border border-white/5 space-y-2">
                <span className="font-mono text-brand-cyan font-bold block">03. Security & Cloud Infrastructure</span>
                <p className="text-slate-400 leading-relaxed">
                  Do you require private VPC deployments to satisfy regulatory constraints? We evaluate private hosting feasibility with zero third-party model exposure.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-brand-dark/90 border border-white/5 space-y-2">
                <span className="font-mono text-brand-cyan font-bold block">04. Human-in-the-Loop Safeguards</span>
                <p className="text-slate-400 leading-relaxed">
                  Clear determination of confidence thresholds where high-impact decisions transition seamlessly from autonomous agents to human supervisors.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
