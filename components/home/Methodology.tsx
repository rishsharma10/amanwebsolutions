'use client';

import { motion } from 'framer-motion';
import { SectionReveal } from '@/components/PageTransition';
import { Compass, Code2, Rocket, ArrowRight } from 'lucide-react';

const phases = [
  {
    phase: '01',
    title: 'Discover & Architect',
    timeline: 'Week 1',
    icon: Compass,
    description: 'We align on your commercial objectives, model user journeys, map data schemas, and draft the product integration roadmap.',
    color: 'text-brand-cyan',
    bg: 'from-brand-cyan/20 to-transparent border-brand-cyan/10'
  },
  {
    phase: '02',
    title: 'Agile Engineering',
    timeline: 'Weeks 2-6',
    icon: Code2,
    description: 'We build responsive frontends and secure AI/backend systems in rapid sprints with continuous dashboard previews and demo feedback.',
    color: 'text-brand-violet',
    bg: 'from-brand-violet/20 to-transparent border-brand-violet/10'
  },
  {
    phase: '03',
    title: 'Launch & Scale',
    timeline: 'Ongoing',
    icon: Rocket,
    description: 'We deploy robust cloud infrastructure, execute safety/security audits, and provide ongoing optimization to maximize system performance.',
    color: 'text-brand-fuchsia',
    bg: 'from-brand-fuchsia/20 to-transparent border-brand-fuchsia/10'
  }
];

export default function Methodology() {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-brand-violet/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block py-1 px-3 mb-6 rounded-full bg-white/5 text-brand-cyan border border-brand-cyan/20 font-medium text-sm">
              How We Work
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">
              A Simple, Results-Driven <span className="ai-gradient-text">Process</span>
            </h2>
            <p className="text-slate-400 text-lg">
              We focus on speed, communication, and shipping code that moves your business metrics.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative max-w-6xl mx-auto items-stretch">
          {phases.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <SectionReveal key={index} className="flex relative h-full">
                {/* Timeline connector arrow for large screens */}
                {index < phases.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-6 -translate-y-1/2 z-20 text-white/20 select-none pointer-events-none">
                    <ArrowRight size={24} className="animate-pulse" />
                  </div>
                )}
                
                <div className="group relative w-full h-full flex flex-col justify-between p-8 rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent hover:border-white/15 hover:bg-white/[0.01] transition-all duration-500 hover:-translate-y-1">
                  {/* Glowing background backing */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 bg-gradient-to-b ${item.bg} transition-all duration-500 pointer-events-none`} />

                  <div className="space-y-6">
                    {/* Header: Phase Number & Icon */}
                    <div className="flex justify-between items-center">
                      <span className={`text-4xl md:text-5xl font-heading font-extrabold opacity-25 group-hover:opacity-40 transition-opacity ${item.color}`}>
                        {item.phase}
                      </span>
                      <div className={`p-4 rounded-2xl glass-morphism border border-white/5 group-hover:scale-110 transition-transform ${item.color}`}>
                        <IconComponent size={24} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <div className="flex items-baseline justify-between">
                        <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                          {item.title}
                        </h3>
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono">
                          {item.timeline}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Line Accent */}
                  <div className="mt-8 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full w-1/3 group-hover:w-full bg-gradient-to-r ${index === 0 ? 'from-brand-cyan to-brand-violet' : index === 1 ? 'from-brand-violet to-brand-fuchsia' : 'from-brand-fuchsia to-brand-cyan'} transition-all duration-700 rounded-full`} />
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
