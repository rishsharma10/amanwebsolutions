import { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WebCostCalculator from '@/components/shared/WebCostCalculator';
import { Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Website Development Cost Calculator | Web & Commerce Scope | Vidhyonix',
  description: 'Calculate realistic development timelines, feature scopes, and engineering budgets for high-performance web platforms, Next.js apps, and headless ecommerce.',
  alternates: {
    canonical: 'https://vidhyonix.com/free-tools/website-development-cost-calculator',
  }
};

export default function WebsiteDevelopmentCostPage() {
  return (
    <>
      <main className="relative min-h-screen bg-brand-dark overflow-hidden text-white">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-40 pb-16 border-b border-white/5 overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan uppercase tracking-wider">
              <Wrench size={13} /> Web Architecture Scope
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
              Website & Commerce Development Cost Calculator
            </h1>
            <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
              Configure your platform architecture, catalog requirements, and third-party integrations to generate a realistic scope and sprint timeline.
            </p>
          </div>
        </section>

        {/* Interactive Scope Calculator */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <WebCostCalculator />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
