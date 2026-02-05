'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { servicesArray } from '../home/Services';

export default function ServiceContent() {
  return (
    <section className="py-24 md:py-36 bg-transparent overflow-hidden relative">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 gap-16 items-start relative z-10">

        {/* Left: Sticky Info */}
        <motion.div
          className="lg:col-span-2 flex flex-col gap-8 sticky top-32"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-sm font-medium w-fit">
            <Cpu size={14} />
            <span>Neural Capabilities</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-heading font-extrabold leading-tight text-white">
            Architecting <span className="ai-gradient-text">Autonomous</span> Futures
          </h2>

          <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
            Our engineering protocols are designed for maximum impact. We don't just build software; we architect ecosystems that evolve with your business requirements.
          </p>

          <div className="space-y-4">
            {['Zero-bias evaluation systems', 'High-fidelity vocal agents', 'Sovereign cloud architecture'].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-white font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Detailed Cards */}
        <div className="lg:col-span-3 grid grid-cols-1 gap-12">
          {servicesArray.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan/20 to-brand-fuchsia/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative glass-morphism rounded-[2.5rem] border border-white/5 p-8 md:p-12 overflow-hidden flex flex-col md:flex-row gap-8 items-center">
                {/* Visual placeholder / Icon area */}
                <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden relative border border-white/5">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-dark/20" />
                  <div className="absolute top-4 right-4 p-2 rounded-lg glass-morphism border border-white/10 text-white">
                    <Zap size={16} />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <h3 className="text-3xl font-heading font-bold text-white group-hover:text-brand-cyan transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-brand-fuchsia font-bold tracking-widest text-xs uppercase">
                    {service.subtitle}
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-4 flex flex-wrap gap-2">
                    {['SCALE', 'SECURE', 'PIONEER'].map((tag) => (
                      <span key={tag} className="text-[10px] font-bold px-3 py-1 rounded-full border border-white/5 text-white/40 tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
