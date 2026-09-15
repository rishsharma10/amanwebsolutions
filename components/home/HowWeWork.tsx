'use client';

import {
  Compass, Lightbulb, PenTool, Code2,
  CheckCircle2, Rocket, LineChart
} from 'lucide-react';

export default function HowWeWork() {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Feasibility',
      icon: Compass,
      desc: 'We analyze your business workflows, inspect existing data, and evaluate technical feasibility before writing code.'
    },
    {
      num: '02',
      title: 'Strategy & Scope Triage',
      icon: Lightbulb,
      desc: 'Define clear milestones, eliminate non-essential features, and calculate realistic budgets and delivery timelines.'
    },
    {
      num: '03',
      title: 'UX & System Architecture',
      icon: PenTool,
      desc: 'Produce clickable wireframes, data model schemas, API contracts, and infrastructure diagrams.'
    },
    {
      num: '04',
      title: 'Agile Sprint Development',
      icon: Code2,
      desc: 'Build in rapid two-week sprints with strict TypeScript typing, automated test coverage, and live staging previews.'
    },
    {
      num: '05',
      title: 'Rigorous QA & Security Audit',
      icon: CheckCircle2,
      desc: 'Execute end-to-end integration tests, load stress testing, cross-device QA, and security vulnerability reviews.'
    },
    {
      num: '06',
      title: 'Production Launch & Handover',
      icon: Rocket,
      desc: 'Deploy to auto-scaling cloud infrastructure with zero downtime, DNS migration, and full source code handover.'
    },
    {
      num: '07',
      title: 'Continuous Optimization',
      icon: LineChart,
      desc: 'Monitor user telemetry, fine-tune model latencies, optimize Core Web Vitals, and plan iterative feature additions.'
    }
  ];

  return (
    <section className="py-24 relative bg-brand-dark border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <span className="text-brand-cyan text-xs font-mono uppercase tracking-widest block font-bold">
            11. Delivery Lifecycle
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            How We Work
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            A disciplined, 7-stage engineering methodology designed to deliver predictable results on time and within budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-cyan/30 transition-all space-y-3 relative group ${i === 6 ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-brand-cyan bg-brand-cyan/10 px-2.5 py-1 rounded-md border border-brand-cyan/20">
                  {step.num}
                </span>
                <step.icon size={18} className="text-slate-400 group-hover:text-brand-cyan transition-colors" />
              </div>

              <h3 className="text-base font-heading font-bold text-white pt-1">
                {step.title}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
