import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Code2, Layers, ShoppingBag, CheckCircle2 } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { servicesData } from '@/lib/servicesData';
import SolutionFinder from '@/components/shared/SolutionFinder';

export const metadata: Metadata = {
  title: 'Engineering Services | AI, SaaS, Software & Ecommerce | Vidhyonix',
  description: 'Explore Vidhyonix’s full engineering services catalog across AI & Automation, Custom Software Engineering, SaaS & MVP Development, and Ecommerce Technology.',
  alternates: {
    canonical: 'https://vidhyonix.com/services',
  },
  openGraph: {
    title: 'Engineering Services | Vidhyonix IT Solutions',
    description: 'Explore our full engineering capabilities across AI, custom software, SaaS, and modern ecommerce technology.',
    url: 'https://vidhyonix.com/services',
    type: 'website'
  }
};

export default function ServicesPage() {
  const pillars = [
    {
      title: 'Pillar 1: AI & Automation',
      slugPrefix: 'ai',
      icon: Sparkles,
      color: 'text-brand-cyan',
      borderColor: 'border-brand-cyan/20',
      desc: 'Autonomous agents, private cloud RAG, workflow automation, and voice telephony designed for real business execution.',
      services: ['ai-development', 'ai-agents', 'ai-automation', 'ai-chatbot-development', 'voice-ai', 'generative-ai']
    },
    {
      title: 'Pillar 2: Software & Product Engineering',
      slugPrefix: 'software',
      icon: Code2,
      color: 'text-brand-violet',
      borderColor: 'border-brand-violet/20',
      desc: 'Bespoke enterprise applications, Next.js web platforms, cross-platform mobile apps, APIs, and cloud infrastructure.',
      services: ['custom-software-development', 'web-development', 'mobile-app-development', 'api-development', 'cloud-development']
    },
    {
      title: 'Pillar 3: SaaS & Startup Development',
      slugPrefix: 'saas',
      icon: Layers,
      color: 'text-brand-fuchsia',
      borderColor: 'border-brand-fuchsia/20',
      desc: 'Multi-tenant cloud applications, rapid 4–8 week MVP delivery, and full-cycle product engineering for founders.',
      services: ['saas-development', 'mvp-development', 'product-development']
    },
    {
      title: 'Pillar 4: Ecommerce Technology',
      slugPrefix: 'ecommerce',
      icon: ShoppingBag,
      color: 'text-emerald-400',
      borderColor: 'border-emerald-400/20',
      desc: 'Headless Next.js storefronts, bespoke Shopify Plus themes, multi-vendor marketplaces, and omnichannel ERP sync.',
      services: ['ecommerce-development', 'shopify-development', 'headless-ecommerce', 'nextjs-ecommerce', 'custom-ecommerce', 'marketplace-development', 'ecommerce-automation']
    }
  ];

  return (
    <>
      <main className="relative min-h-screen bg-brand-dark overflow-hidden">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-40 pb-20 border-b border-white/5 overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-brand-cyan/10 via-brand-violet/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan uppercase tracking-wider">
              <Sparkles size={13} /> Complete Service Catalog
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Engineering Services Built for Scale and Performance
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              From autonomous AI agents and enterprise SaaS to modern ecommerce technology, explore how our engineering teams turn complex business challenges into reliable digital systems.
            </p>
          </div>
        </section>

        {/* Interactive Solution Finder */}
        <section className="py-20 border-b border-white/5 bg-white/5">
          <div className="container mx-auto px-4">
            <SolutionFinder />
          </div>
        </section>

        {/* 4 Pillars Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 space-y-24">
            {pillars.map((pillar, i) => (
              <div key={i} className="space-y-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex items-center gap-2">
                      <pillar.icon size={20} className={pillar.color} />
                      <span className="font-heading font-bold text-xs uppercase tracking-widest text-slate-400">
                        {pillar.title}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
                      {pillar.title.split(': ')[1]}
                    </h2>
                    <p className="text-slate-400 text-xs md:text-sm">
                      {pillar.desc}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pillar.services.map((slug) => {
                    const s = servicesData[slug];
                    if (!s) return null;
                    return (
                      <Link
                        key={slug}
                        href={`/services/${slug}`}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-cyan/40 transition-all duration-300 group flex flex-col justify-between"
                      >
                        <div className="space-y-3">
                          <h3 className="text-lg font-heading font-bold text-white group-hover:text-brand-cyan transition-colors">
                            {s.title}
                          </h3>
                          <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                            {s.heroSubtitle}
                          </p>
                          <div className="pt-2 flex flex-wrap gap-1.5">
                            {s.techStack.slice(0, 3).map((t, idx) => (
                              <span key={idx} className="px-2 py-0.5 rounded bg-brand-dark text-[10px] font-mono text-slate-400 border border-white/5">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-heading font-bold text-slate-300 group-hover:text-brand-cyan transition-colors">
                          <span>Explore Architecture</span>
                          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}