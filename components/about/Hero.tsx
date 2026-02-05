'use client';

import { motion } from 'framer-motion';
import { Cpu, Sparkles } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-sm font-medium mb-8">
              <Cpu size={14} />
              <span>The Architect's Vision</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white leading-tight mb-8">
              Pioneering the <span className="ai-gradient-text">Neural</span> Frontier
            </h1>

            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl">
              Vidhyonix is more than a technology partner; we are the orchestrators of digital evolution. Our team architects autonomous ecosystems and high-fidelity systems that redefine the boundary between human intent and machine execution.
            </p>

            <div className="flex gap-12 border-t border-white/10 pt-10">
              <div>
                <div className="text-3xl font-bold text-white mb-1">2025</div>
                <div className="text-xs text-brand-cyan font-bold tracking-widest uppercase">Ecdysis Initialized</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">Global</div>
                <div className="text-xs text-brand-fuchsia font-bold tracking-widest uppercase">Operational Scope</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="relative"
          >
            <div className="relative aspect-square glass-morphism rounded-[3rem] border border-white/10 p-4 md:p-8">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative group">
                <img
                  src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Neural Architecture"
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />

                {/* Floating Microcard */}
                <div className="absolute bottom-8 left-8 right-8 glass-morphism p-6 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-brand-fuchsia/20 text-brand-fuchsia">
                      <Sparkles size={18} />
                    </div>
                    <h3 className="text-white font-bold">CORE_MISSION</h3>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    To deliver high-fidelity, autonomous IT solutions that drive exponential business evolution and digital supremacy.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-brand-cyan/20 blur-2xl rounded-full" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-brand-fuchsia/20 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}