'use client';

import { motion } from 'framer-motion';
import { Layers, Activity, ShieldCheck } from 'lucide-react';

export default function ServicesHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-sm font-medium mb-8"
          >
            <Layers size={14} />
            <span>Full-Spectrum Ecosystems</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-white leading-tight mb-8">
            Orchestrating <span className="ai-gradient-text">Neural</span> Solutions
          </h1>

          <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto leading-relaxed">
            From high-fidelity voice agents to autonomous cloud infrastructure. We deploy the technical protocols required to scale your digital presence into a dominant market force.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Neural Deployments', count: '150+', icon: Activity, color: 'text-brand-cyan' },
              { title: 'Operational Up-time', count: '99.9%', icon: ShieldCheck, color: 'text-brand-fuchsia' },
              { title: 'Global Stakeholders', count: '500+', icon: Layers, color: 'text-brand-violet' },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="glass-morphism rounded-[2rem] p-8 border border-white/5 group hover:border-white/20 transition-all duration-500"
                >
                  <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 mx-auto ${stat.color}`}>
                    <Icon size={24} />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.count}</div>
                  <div className="text-slate-500 text-sm font-bold tracking-widest uppercase">{stat.title}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-brand-cyan/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-brand-fuchsia/10 blur-[100px] rounded-full" />
    </section>
  );
}