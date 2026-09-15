'use client';

import Link from 'next/link';
import {
  ShoppingBag, Zap, RefreshCw, Layers,
  Compass, ArrowRight, ShieldCheck, CheckCircle2
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export default function EcommerceTechSection() {
  const capabilities = [
    {
      title: 'Headless Next.js Storefronts',
      desc: 'Decoupled frontends achieving sub-second page transitions, dynamic 3D visualizers, and unmatched design freedom.'
    },
    {
      title: 'Custom Shopify Plus Theme Engineering',
      desc: 'Bespoke Liquid architecture without bloated third-party plugins, delivering lightning-fast mobile shopping.'
    },
    {
      title: 'Multi-Vendor Marketplace Platforms',
      desc: 'Two-sided platforms with automated commission splitting, vendor onboarding, and Stripe Connect payouts.'
    },
    {
      title: 'Real-Time Omnichannel Inventory Sync',
      desc: 'Automated bridges keeping online catalogs, physical POS terminals, and warehouse 3PLs synchronized.'
    },
    {
      title: 'AI Product Discovery & Search',
      desc: 'Vector semantic search and personalized product recommendation carousels that increase average order value.'
    },
    {
      title: 'Frictionless Custom Checkout & Invoicing',
      desc: 'Bespoke checkout flows supporting international currencies, B2B wholesale terms (Net 30/60), and custom freight.'
    }
  ];

  return (
    <section className="py-24 relative bg-brand-dark border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <span className="text-emerald-400 text-xs font-mono uppercase tracking-widest block font-bold">
            07. Commerce Engineering
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Ecommerce Technology Engineering
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            We are a technology partner that builds, modernizes, and automates high-performance commerce systems for retail brands and B2B enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {capabilities.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <ShoppingBag size={20} />
              </div>
              <h3 className="text-lg font-heading font-bold text-white">
                {item.title}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Real Commerce Case Study Callout */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-brand-cyan/10 to-transparent border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div>
            <span className="text-emerald-400 text-xs font-mono uppercase font-bold block mb-1">
              Case in Point: Madam Jan
            </span>
            <h4 className="text-lg font-heading font-bold text-white mb-1">
              Custom Shopify Store 2.0 with Three.js 3D Visualizer
            </h4>
            <p className="text-slate-400 text-xs md:text-sm">
              Engineered for high mobile conversion without third-party app bloat.
            </p>
          </div>
          <Link
            href="/case-studies/madam-jan"
            onClick={() => trackEvent('case_study_view', { case_study_slug: 'madam-jan', location: 'ecommerce_section' })}
            className="px-6 py-3 bg-emerald-400 text-brand-dark rounded-xl font-heading font-bold text-xs uppercase tracking-wider hover:bg-white transition-all whitespace-nowrap flex items-center gap-2"
          >
            <span>Read Case Study</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
