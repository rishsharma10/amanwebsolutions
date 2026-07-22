'use client';

import { motion } from 'framer-motion';
import { fadeUp, slideInLeft, slideInRight } from '@/lib/animations';
import { SectionReveal } from '@/components/PageTransition';

export default function Team() {
  return (
    <section className="relative py-24 md:py-32 bg-brand-dark/50 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionReveal>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
              The <span className="ai-gradient-text">Leadership</span> Team
            </h2>
            <p className="text-lg text-slate-400">
              The engineers, designers, and strategists behind Vidhyonix's success. (Team profiles being updated)
            </p>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <SectionReveal key={item}>
              <div className="glass-morphism rounded-[2rem] border border-white/5 overflow-hidden group">
                <div className="aspect-square bg-white/5 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white/10 group-hover:text-white/20 transition-colors">
                    <span className="font-heading font-bold text-lg uppercase tracking-widest">Profile Pending</span>
                  </div>
                </div>
                <div className="p-6 text-center border-t border-white/5">
                  <h3 className="text-xl font-bold text-white mb-1">Executive Name</h3>
                  <p className="text-brand-cyan text-xs font-bold uppercase tracking-widest">Leadership Role</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}