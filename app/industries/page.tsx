import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Building2, ShoppingCart, HeartPulse, Users, Utensils, Home, Factory, GraduationCap, Rocket } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { industriesData } from '@/lib/industriesData';

export const metadata: Metadata = {
  title: 'Industry Solutions | Software, AI & Automation by Sector | Vidhyonix',
  description: 'Discover how Vidhyonix engineers tailored AI systems, custom software platforms, and automated workflows across retail, healthcare, recruitment, restaurants, and more.',
  alternates: {
    canonical: 'https://vidhyonix.com/industries',
  }
};

const industryIcons: Record<string, any> = {
  retail: ShoppingCart,
  healthcare: HeartPulse,
  recruitment: Users,
  restaurants: Utensils,
  'real-estate': Home,
  manufacturing: Factory,
  education: GraduationCap,
  startups: Rocket,
};

export default function IndustriesPage() {
  const industries = Object.values(industriesData);

  return (
    <>
      <main className="relative min-h-screen bg-brand-dark overflow-hidden">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-40 pb-20 border-b border-white/5 overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-brand-cyan/10 via-brand-violet/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan uppercase tracking-wider">
              <Building2 size={13} /> Sector Expertise
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Software & AI Engineered for Your Specific Industry
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Every industry carries unique regulatory demands, legacy integrations, and operational bottlenecks. We tailor software architectures directly around your sector’s realities.
            </p>
          </div>
        </section>

        {/* Industry Cards Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((ind) => {
                const Icon = industryIcons[ind.slug] || Building2;
                return (
                  <Link
                    key={ind.slug}
                    href={`/industries/${ind.slug}`}
                    className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-cyan/40 transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon size={24} />
                      </div>
                      <h2 className="text-2xl font-heading font-bold text-white group-hover:text-brand-cyan transition-colors">
                        {ind.title.split(' ')[0]}
                      </h2>
                      <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                        {ind.heroSubheadline}
                      </p>
                      <div className="pt-2 border-t border-white/5 space-y-1.5">
                        <span className="text-[10px] font-mono text-brand-cyan uppercase font-bold tracking-wider">
                          Key Solutions:
                        </span>
                        <ul className="text-xs text-slate-300 space-y-1">
                          {ind.solutions.slice(0, 2).map((sol, i) => (
                            <li key={i} className="truncate">• {sol.title}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-heading font-bold text-slate-300 group-hover:text-brand-cyan transition-colors">
                      <span>Explore {ind.slug.replace('-', ' ')} Solutions</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
