'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Cpu, Zap } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 md:py-40 relative overflow-hidden bg-brand-dark">
      {/* Background Image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Neural Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
      </div>

      {/* Circuit Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-ai-grid bg-repeat" />

      {/* Glow Orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-cyan/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-brand-fuchsia/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism border border-white/10 text-white text-sm font-bold tracking-widest uppercase"
          >
            <Zap size={14} className="text-brand-cyan" />
            <span>Initiate Phase One</span>
          </motion.div>

          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-white leading-tight">
              Ready to <span className="ai-gradient-text">Architect</span> Your Legacy?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Don't just keep up with the digital evolution. Lead it. Partner with our neural engineering team to build high-fidelity autonomous systems.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact">
              <button className="px-10 py-5 bg-white text-black rounded-2xl font-bold tracking-wider hover:bg-slate-200 transition-all flex items-center gap-3 group relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-cyan/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative z-10">START INNOVATION</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>

            <Link href="/contact">
              <button className="px-10 py-5 glass-morphism border border-white/10 text-white rounded-2xl font-bold tracking-wider hover:border-brand-cyan/50 transition-all">
                CONSULT WITH EXPERTS
              </button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="pt-12 flex flex-wrap justify-center gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2 text-white font-bold"><Cpu size={20} /> SYSTEMS_DEPLOYED</div>
            <div className="flex items-center gap-2 text-white font-bold"><Sparkles size={20} /> NEURAL_READY</div>
            <div className="flex items-center gap-2 text-white font-bold"><Zap size={20} /> ZERO_LATENCY</div>
          </div>

        </div>
      </div>
    </section>
  );
}