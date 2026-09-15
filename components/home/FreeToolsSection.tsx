'use client';

import Link from 'next/link';
import {
  Wrench, Calculator, LineChart, Brain,
  ArrowRight, CheckCircle2
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export default function FreeToolsSection() {
  const tools = [
    {
      title: 'AI Readiness Assessment',
      icon: Brain,
      tag: '5-Minute Diagnostic',
      desc: 'Evaluate your data maturity, infrastructure feasibility, and highest-ROI automation opportunities with a tailored readiness report.',
      href: '/free-tools/ai-readiness-assessment'
    },
    {
      title: 'AI Automation ROI Calculator',
      icon: Calculator,
      tag: 'Interactive Model',
      desc: 'Calculate how many hours and dollars automated workflows can recover across customer support, sales triage, and data entry.',
      href: '/free-tools/ai-automation-roi-calculator'
    },
    {
      title: 'SaaS MVP Cost & Timeline Estimator',
      icon: LineChart,
      tag: 'Scope Planner',
      desc: 'Estimate realistic development timelines, feature scopes, and engineering budgets for launching your early-stage SaaS product.',
      href: '/free-tools/saas-mvp-cost-calculator'
    },
    {
      title: 'Website Development Cost Calculator',
      icon: Wrench,
      tag: 'Commerce & Web',
      desc: 'Configure web application specifications, CMS requirements, and ecommerce integrations to calculate a reliable scope estimate.',
      href: '/free-tools/website-development-cost-calculator'
    }
  ];

  return (
    <section className="py-24 relative bg-brand-dark border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <span className="text-brand-cyan text-xs font-mono uppercase tracking-widest block font-bold">
            13. Interactive Assessments
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Free Engineering & Planning Tools
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Use our free interactive assessment tools to evaluate feasibility, estimate budgets, and discover automation ROI before committing capital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, i) => (
            <Link
              key={i}
              href={tool.href}
              onClick={() => trackEvent('tool_start', { tool_name: tool.title, location: 'home_section' })}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-cyan/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center group-hover:scale-105 transition-transform">
                    <tool.icon size={20} />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                    {tool.tag}
                  </span>
                </div>

                <h3 className="text-base font-heading font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                  {tool.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  {tool.desc}
                </p>
              </div>

              <span className="text-xs font-heading font-bold text-slate-300 group-hover:text-brand-cyan flex items-center gap-1.5 transition-colors">
                <span>Launch Tool</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
