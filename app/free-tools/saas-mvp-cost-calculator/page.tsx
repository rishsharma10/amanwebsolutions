import { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProjectEstimator from '@/components/shared/ProjectEstimator';
import { LineChart, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SaaS MVP Cost & Timeline Estimator | Free Scoping Tool | Vidhyonix',
  description: 'Plan your startup MVP scope, select components (authentication, multi-tenancy, Stripe billing, dashboards), and calculate realistic budget and delivery sprint schedules.',
  alternates: {
    canonical: 'https://vidhyonix.com/free-tools/saas-mvp-cost-calculator',
  }
};

export default function SaasMvpCostCalculatorPage() {
  return (
    <>
      <main className="relative min-h-screen bg-brand-dark overflow-hidden text-white">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-40 pb-16 border-b border-white/5 overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan uppercase tracking-wider">
              <LineChart size={13} /> Scope & Budget Planner
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
              SaaS MVP Cost & Timeline Estimator
            </h1>
            <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
              Select your required architectural modules to generate a realistic timeline, sprint distribution, and development budget estimate.
            </p>
          </div>
        </section>

        {/* Estimator Container */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <ProjectEstimator />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
