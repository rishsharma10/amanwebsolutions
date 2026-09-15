import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Wrench, Calculator, Brain, LineChart, Sparkles } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Free Engineering Tools & Assessments | Vidhyonix',
  description: 'Evaluate your technology readiness, estimate SaaS MVP development timelines, calculate automation ROI, and scope web projects with our free interactive tools.',
  alternates: {
    canonical: 'https://vidhyonix.com/free-tools',
  }
};

export default function FreeToolsHub() {
  const tools = [
    {
      title: 'AI Readiness Assessment',
      slug: 'ai-readiness-assessment',
      icon: Brain,
      tag: '5-Minute Diagnostic',
      desc: 'Evaluate your organization’s data maturity, infrastructure feasibility, and highest-ROI automation vectors with a customized diagnostic roadmap.',
      features: ['Data hygiene evaluation', 'Security & infrastructure check', 'Target automation ROI breakdown', 'Personalized milestone roadmap']
    },
    {
      title: 'AI Automation ROI Calculator',
      slug: 'ai-automation-roi-calculator',
      icon: Calculator,
      tag: 'Interactive Financial Model',
      desc: 'Model the precise hours and financial savings recovered by deploying autonomous AI agents across customer support, scheduling, and data processing.',
      features: ['Support ticket deflection modeling', 'Manual administrative hours saved', 'Headcount scaling avoidance', 'Annual cost reduction projections']
    },
    {
      title: 'SaaS MVP Cost & Timeline Calculator',
      slug: 'saas-mvp-cost-calculator',
      icon: LineChart,
      tag: 'Scope & Budget Estimator',
      desc: 'Plan your startup MVP scope, select architectural components (auth, billing, dashboards), and calculate realistic budget and delivery sprint schedules.',
      features: ['Feature complexity weighting', 'Multi-tenancy & billing scope', 'Recommended team composition', 'Sprint timeline projections']
    },
    {
      title: 'Website Development Cost Calculator',
      slug: 'website-development-cost-calculator',
      icon: Wrench,
      tag: 'Web Architecture Scope',
      desc: 'Configure web application specifications, headless ecommerce requirements, CMS needs, and internationalization to calculate a realistic scope plan.',
      features: ['Headless vs. standard framework', 'Catalog & product customizers', 'Payment gateway & ERP integrations', 'Turnkey scope summary']
    }
  ];

  return (
    <>
      <main className="relative min-h-screen bg-brand-dark overflow-hidden text-white">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-40 pb-20 border-b border-white/5 overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-brand-cyan/10 via-brand-violet/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan uppercase tracking-wider">
              <Wrench size={13} /> Engineering Utilities
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Free Assessment & Scoping Tools
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Plan your next project with realistic mathematical models, readiness diagnostics, and architectural scopes before committing development capital.
            </p>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {tools.map((tool) => (
                <div
                  key={tool.slug}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center group-hover:scale-105 transition-transform">
                        <tool.icon size={24} />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                        {tool.tag}
                      </span>
                    </div>

                    <h2 className="text-2xl font-heading font-bold text-white group-hover:text-brand-cyan transition-colors">
                      {tool.title}
                    </h2>

                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                      {tool.desc}
                    </p>

                    <div className="pt-2 border-t border-white/5 space-y-1.5">
                      <span className="text-[10px] font-mono uppercase text-brand-cyan font-bold tracking-wider">
                        Diagnostic Capabilities:
                      </span>
                      <ul className="space-y-1 text-xs text-slate-400">
                        {tool.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-brand-cyan" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8 mt-6 border-t border-white/5">
                    <Link
                      href={`/free-tools/${tool.slug}`}
                      className="w-full py-3.5 bg-brand-cyan hover:bg-white text-brand-dark rounded-xl font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                    >
                      <span>Launch Interactive Assessment</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
