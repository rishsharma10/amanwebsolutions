'use client';

import { motion } from 'framer-motion';
import { Rocket, Globe, Zap, Cpu, History } from 'lucide-react';

const milestones = [
  {
    year: '2024',
    title: 'Singularity Initialized',
    description: 'Vidhyonix founded with the mission to orchestrate high-fidelity neural systems.',
    icon: Rocket,
    color: 'text-brand-cyan',
  },
  {
    year: '2025',
    title: 'Ecosystem Alpha',
    description: 'Deployed first autonomous operational framework for global enterprise stakeholders.',
    icon: Globe,
    color: 'text-brand-fuchsia',
  },
  {
    year: '2025',
    title: 'Neural Expansion',
    description: 'Integrated advanced vocal intelligence and real-time merit analytics protocols.',
    icon: Zap,
    color: 'text-brand-violet',
  },
  {
    year: '2026',
    title: 'Supremacy Target',
    description: 'Scaling to become the primary architectural layer for autonomous business evolution.',
    icon: Cpu,
    color: 'text-brand-cyan',
  },
];

export default function Journey() {
  return (
    <section className="relative py-24 md:py-40 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-sm font-medium mb-6"
          >
            <History size={14} />
            <span>Operational Log</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Our <span className="ai-gradient-text">Architectural</span> Journey
          </h2>
          <p className="text-slate-400 text-lg">
            Tracing the evolution of our neural engineering and the expansion of our autonomous ecosystems.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className="flex flex-col items-center group"
                >
                  <div className="mb-8 relative">
                    <div className="absolute -inset-4 bg-brand-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                    <div className={`relative w-20 h-20 rounded-2xl glass-morphism border border-white/10 flex items-center justify-center ${m.color} group-hover:border-brand-cyan/50 transition-all duration-500`}>
                      <Icon size={32} />
                    </div>
                    {/* Pulsing indicator */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white/20 hidden md:block">
                      <div className="absolute inset-0 rounded-full bg-brand-cyan animate-ping opacity-40" />
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-sm font-bold tracking-widest text-brand-cyan mb-2 uppercase">{m.year}</div>
                    <h3 className="text-xl font-heading font-bold text-white mb-3">{m.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-[200px] mx-auto">
                      {m.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}