'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight, Sparkles, Code2, Bot, CheckCircle2,
  Layers, ShoppingBag, ShieldCheck, Terminal, ArrowUpRight
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export default function Hero() {
  const highlights = [
    'Autonomous AI Agents & RAG Pipelines',
    'Full-Stack SaaS Platforms & MVPs',
    'Enterprise Headless Ecommerce & Shopify',
    'Strict 100% Intellectual Property Ownership'
  ];

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-dark">
      {/* Background Lighting Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-brand-cyan/10 via-brand-violet/10 to-brand-fuchsia/5 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-brand-cyan backdrop-blur-md"
          >
            <Sparkles size={14} className="text-brand-cyan" />
            <span>AI, Software & Product Engineering Partner</span>
          </motion.div>

          {/* Primary Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight leading-[1.1]"
          >
            Build Smarter with <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-violet to-brand-fuchsia">
              AI, Software & Product Engineering
            </span>
          </motion.h1>

          {/* Concise Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            From autonomous AI agents and intelligent automation to high-performance SaaS platforms, custom software, and modern ecommerce experiences, Vidhyonix turns complex operational challenges into scalable digital products.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <Link
              href="/contact"
              onClick={() => trackEvent('book_consultation_click', { location: 'hero_primary' })}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-cyan to-brand-violet hover:from-cyan-400 hover:to-violet-500 text-brand-dark rounded-xl font-heading font-bold text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition-all flex items-center justify-center gap-2 group"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/case-studies"
              onClick={() => trackEvent('cta_click', { location: 'hero_secondary', label: 'View Our Work' })}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-heading font-bold text-sm uppercase tracking-wider hover:border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <span>View Our Work</span>
              <ArrowUpRight size={17} className="text-slate-400" />
            </Link>
          </motion.div>

          {/* Core Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-6 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {highlights.map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-2 text-xs text-slate-400 font-medium text-left">
                <CheckCircle2 size={15} className="text-brand-cyan shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>

          {/* Interactive Engineering Architecture Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-8 max-w-4xl mx-auto"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl text-left">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="font-mono text-slate-400 pl-2">architecture-overview.ts</span>
                </div>
                <span className="text-brand-cyan font-mono text-[11px] bg-brand-cyan/10 px-2.5 py-0.5 rounded-full border border-brand-cyan/20">
                  Production Ready
                </span>
              </div>

              <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
                <div className="bg-brand-dark/80 p-4 rounded-xl border border-white/5">
                  <div className="text-brand-cyan font-bold mb-1 flex items-center gap-1.5">
                    <Bot size={15} /> 01. AI Engine
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    LangGraph state machine with deterministic tools, vector retrieval, and human escalation policies.
                  </p>
                </div>
                <div className="bg-brand-dark/80 p-4 rounded-xl border border-white/5">
                  <div className="text-brand-violet font-bold mb-1 flex items-center gap-1.5">
                    <Code2 size={15} /> 02. Core Platform
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Next.js App Router, typed TypeScript backend, PostgreSQL schemas, and low-latency API contracts.
                  </p>
                </div>
                <div className="bg-brand-dark/80 p-4 rounded-xl border border-white/5">
                  <div className="text-emerald-400 font-bold mb-1 flex items-center gap-1.5">
                    <ShoppingBag size={15} /> 03. Commerce & Ops
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Stripe billing, real-time inventory queues, ERP synchronization, and automated operational pipelines.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}