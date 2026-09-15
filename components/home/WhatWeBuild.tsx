'use client';

import Link from 'next/link';
import {
  Sparkles, Code2, Layers, Smartphone, ShoppingBag,
  Zap, ArrowRight, CheckCircle2
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export default function WhatWeBuild() {
  const cards = [
    {
      title: 'AI & Automation',
      icon: Sparkles,
      color: 'text-brand-cyan',
      borderColor: 'hover:border-brand-cyan/40',
      desc: 'Deploy autonomous AI agents, multi-step deterministic workflows, vector search RAG, and document intelligence pipelines.',
      bullets: ['Autonomous AI Agents', 'Workflow Automation', 'Private Cloud RAG', 'Voice AI Telephony'],
      href: '/services/ai-development',
      cta: 'Explore AI Solutions'
    },
    {
      title: 'Software Products',
      icon: Code2,
      color: 'text-brand-violet',
      borderColor: 'hover:border-brand-violet/40',
      desc: 'Bespoke enterprise software, internal operations portals, and data architectures built around your exact business requirements.',
      bullets: ['Custom Enterprise Portals', 'Scalable Microservices', 'Role-Based Access Control', 'Legacy Modernization'],
      href: '/services/custom-software-development',
      cta: 'Explore Custom Software'
    },
    {
      title: 'SaaS Platforms',
      icon: Layers,
      color: 'text-brand-fuchsia',
      borderColor: 'hover:border-brand-fuchsia/40',
      desc: 'Multi-tenant cloud applications with turnkey Stripe billing, team workspaces, granular permissions, and product analytics.',
      bullets: ['Multi-Tenant Architecture', 'Stripe Billing & Tiers', 'Analytics Dashboards', 'Public APIs & Webhooks'],
      href: '/services/saas-development',
      cta: 'Explore SaaS Engineering'
    },
    {
      title: 'Mobile Apps',
      icon: Smartphone,
      color: 'text-blue-400',
      borderColor: 'hover:border-blue-400/40',
      desc: 'Native-feel iOS and Android applications built with React Native and Flutter, featuring offline sync and hardware integration.',
      bullets: ['Cross-Platform Codebases', 'Offline-First SQLite Caching', 'Biometric Authentication', 'App Store Management'],
      href: '/services/mobile-app-development',
      cta: 'Explore Mobile Apps'
    },
    {
      title: 'Ecommerce Technology',
      icon: ShoppingBag,
      color: 'text-emerald-400',
      borderColor: 'hover:border-emerald-400/40',
      desc: 'Headless Next.js storefronts, bespoke Shopify themes, custom checkout flows, and real-time inventory ERP synchronization.',
      bullets: ['Headless Next.js Commerce', 'Shopify Online Store 2.0', 'Multi-Vendor Marketplaces', 'ERP & POS Integrations'],
      href: '/services/ecommerce-development',
      cta: 'Explore Commerce Tech'
    },
    {
      title: 'Business Automation',
      icon: Zap,
      color: 'text-amber-400',
      borderColor: 'hover:border-amber-400/40',
      desc: 'Connect disconnected SaaS tools, automate invoice reconciliations, and replace repetitive manual human processes.',
      bullets: ['End-to-End System Sync', 'Automated Invoice Processing', 'CRM & ERP Synchronization', 'Zero-Error Hand-offs'],
      href: '/services/ai-automation',
      cta: 'Explore Automation'
    }
  ];

  return (
    <section className="py-24 relative bg-brand-dark overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <span className="text-brand-cyan text-xs font-mono uppercase tracking-widest block font-bold">
            03. Core Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            What Can We Build For You?
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            We partner with growing companies to design, engineer, and deploy high-value software systems across six core disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`p-8 rounded-2xl bg-white/5 border border-white/10 ${card.borderColor} transition-all duration-300 flex flex-col justify-between group`}
            >
              <div>
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 ${card.color}`}>
                  <card.icon size={26} />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-white transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {card.desc}
                </p>
                <ul className="space-y-2 mb-8 border-t border-white/5 pt-4">
                  {card.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 size={13} className={card.color} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={card.href}
                onClick={() => trackEvent('cta_click', { location: 'what_we_build_card', label: card.title })}
                className="inline-flex items-center gap-2 text-xs font-heading font-bold text-white group-hover:text-brand-cyan transition-colors"
              >
                <span>{card.cta}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
