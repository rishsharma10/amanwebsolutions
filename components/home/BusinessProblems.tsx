'use client';

import Link from 'next/link';
import {
  Clock, AlertTriangle, Layers, Database,
  TrendingDown, RefreshCw, Users, ShieldAlert, ArrowRight
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export default function BusinessProblems() {
  const problems = [
    {
      icon: Clock,
      title: 'Repetitive Manual Workflows',
      desc: 'Valuable operational staff spend hours re-entering data, copying records between systems, and chasing routine email approvals.'
    },
    {
      icon: Database,
      title: 'Disconnected & Siloed Data',
      desc: 'Critical customer, financial, and inventory data remains trapped across incompatible SaaS tools and isolated spreadsheets.'
    },
    {
      icon: AlertTriangle,
      title: 'Outdated Legacy Systems',
      desc: 'Fragile legacy software and slow desktop tools block modern integrations, creating technical debt and severe operational drag.'
    },
    {
      icon: TrendingDown,
      title: 'Sluggish Customer Experience',
      desc: 'Slow websites, manual support lines, and disjointed checkout experiences frustrate customers and drive them to competitors.'
    },
    {
      icon: RefreshCw,
      title: 'Inefficient Internal Processes',
      desc: 'Lack of automated hand-offs leads to missed deadlines, operational errors, and communication breakdowns across teams.'
    },
    {
      icon: Users,
      title: 'Scaling Bottlenecks',
      desc: 'Operations cannot double transaction volume without linearly hiring more operational staff, capping profit margins.'
    }
  ];

  return (
    <section className="py-24 relative bg-brand-dark/60 border-y border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <span className="text-red-400 text-xs font-mono uppercase tracking-widest block font-bold">
            04. Operational Reality
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            The Business Problems We Solve
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Software is only valuable if it solves genuine operational bottlenecks. We help ambitious companies remove the friction capping their growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {problems.map((prob, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center">
                <prob.icon size={20} />
              </div>
              <h3 className="text-lg font-heading font-bold text-white">
                {prob.title}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                {prob.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-brand-cyan/10 via-brand-violet/10 to-transparent border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div>
            <h4 className="text-lg font-heading font-bold text-white mb-1">
              Experiencing one of these operational bottlenecks?
            </h4>
            <p className="text-slate-400 text-xs md:text-sm">
              Schedule a free 30-minute discovery call to map out a clear technology solution.
            </p>
          </div>
          <Link
            href="/contact"
            onClick={() => trackEvent('book_consultation_click', { location: 'business_problems_banner' })}
            className="px-6 py-3 bg-brand-cyan text-brand-dark rounded-xl font-heading font-bold text-xs uppercase tracking-wider hover:bg-white transition-all whitespace-nowrap flex items-center gap-2"
          >
            <span>Discuss Your Problem</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
