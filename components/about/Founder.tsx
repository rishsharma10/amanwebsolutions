'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Target, Lightbulb, Rocket, Code2, Users } from 'lucide-react';

export default function Founder() {
  return (
    <section className="py-24 relative z-10 bg-brand-dark overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden relative border border-white/10 group">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent z-10" />
                <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                  {/* PROFESSIONAL IMAGE PLACEHOLDER */}
                  <span className="text-slate-500 font-medium tracking-widest uppercase text-sm">Professional Photo Placeholder</span>
                </div>
                
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <h3 className="text-2xl font-bold text-white mb-1">Founder Name</h3>
                  <p className="text-brand-cyan font-medium">Founder & CEO, Vidhyonix</p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-cyan/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-fuchsia/20 rounded-full blur-2xl" />
            </motion.div>

            {/* Content Side */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-10"
            >
              <div>
                <Quote className="text-brand-cyan/50 w-12 h-12 mb-6" />
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight mb-6">
                  "We didn't just want to build software. We wanted to build <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-violet">engines of growth</span> for ambitious businesses."
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Vidhyonix was founded on a simple premise: technology should accelerate business, not complicate it. In a world drowning in technical jargon and bloated delivery cycles, we saw a gap for a premium engineering partner that prioritizes speed, ROI, and undeniable quality.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-brand-cyan">
                    <Target size={20} />
                    <h4 className="font-bold uppercase tracking-widest text-sm">Our Mission</h4>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    To democratize enterprise-grade AI and custom software, making it accessible, scalable, and highly profitable for startups and established businesses alike.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-brand-fuchsia">
                    <Lightbulb size={20} />
                    <h4 className="font-bold uppercase tracking-widest text-sm">Our Vision</h4>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    To be the driving force behind the next generation of intelligent, automated, and hyper-efficient digital products worldwide.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-brand-violet">
                    <Code2 size={20} />
                    <h4 className="font-bold uppercase tracking-widest text-sm">Engineering Philosophy</h4>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Code is a liability; solutions are assets. We write clean, maintainable, AI-first architecture designed to scale seamlessly without technical debt.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-green-400">
                    <Rocket size={20} />
                    <h4 className="font-bold uppercase tracking-widest text-sm">How We Work</h4>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    We act as an extension of your team. Transparent sprints, rapid prototyping, business-aligned KPIs, and relentless execution.
                  </p>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
