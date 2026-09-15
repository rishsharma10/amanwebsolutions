'use client';

import Link from 'next/link';
import {
  Sparkles, Bot, PhoneCall, FileText, Compass,
  Cpu, ArrowRight, CheckCircle2, Shield
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export default function AICapabilities() {
  const capabilities = [
    {
      title: 'Autonomous AI Agents',
      icon: Bot,
      desc: 'Multi-step agents that call APIs, execute complex logic, inspect results, and escalate edge cases to human operators with audit trails.',
      link: '/services/ai-agents'
    },
    {
      title: 'AI Workflow Automation',
      icon: Cpu,
      desc: 'Connect internal tools with deterministic AI automation pipelines that eliminate manual data entry and repetitive approvals.',
      link: '/services/ai-automation'
    },
    {
      title: 'Voice AI & Conversational Telephony',
      icon: PhoneCall,
      desc: 'Sub-600ms latency voice agents that answer inbound phone calls, qualify caller requirements, and book calendar appointments.',
      link: '/services/voice-ai'
    },
    {
      title: 'Enterprise Document Intelligence',
      icon: FileText,
      desc: 'Automated OCR parsing and validation for vendor invoices, legal contracts, medical intake charts, and technical compliance reports.',
      link: '/services/ai-development'
    },
    {
      title: 'Private Retrieval-Augmented Generation (RAG)',
      icon: Sparkles,
      desc: 'Query proprietary documentation and internal databases with guaranteed citations and zero risk of data leakage.',
      link: '/services/generative-ai'
    },
    {
      title: 'Intelligent Recommendation Systems',
      icon: Compass,
      desc: 'Vector-powered discovery engines that analyze user behavior to suggest personalized catalog products and content in real time.',
      link: '/services/ai-development'
    }
  ];

  return (
    <section className="py-24 relative bg-brand-dark overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-brand-cyan text-xs font-mono uppercase tracking-widest block font-bold">
              05. AI Engineering
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
              AI Capabilities Built for Business Utility
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              We do not build generic AI gimmicks. We engineer deterministic, secure AI systems integrated directly into your software stack.
            </p>
          </div>
          <Link
            href="/services/ai-development"
            onClick={() => trackEvent('cta_click', { location: 'ai_capabilities_header', label: 'View All AI Services' })}
            className="inline-flex items-center gap-2 text-xs font-heading font-bold text-brand-cyan hover:text-white transition-colors"
          >
            <span>View All AI Services</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              onClick={() => trackEvent('cta_click', { location: 'ai_capability_card', label: item.title })}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-cyan/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <span className="text-xs font-heading font-bold text-slate-300 group-hover:text-brand-cyan flex items-center gap-1.5 transition-colors">
                <span>Learn Architecture</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
