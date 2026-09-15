import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code2, Sparkles, Terminal, Cpu } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { technologiesData } from '@/lib/technologiesData';

export const metadata: Metadata = {
  title: 'Technology Guides & Architecture Standards | Vidhyonix',
  description: 'Explore in-depth architectural guides for Next.js, TypeScript, React, Node.js, Python, and AWS written by the Vidhyonix engineering team.',
  alternates: {
    canonical: 'https://vidhyonix.com/technologies',
  }
};

export default function TechnologiesHub() {
  const techs = Object.values(technologiesData);

  return (
    <>
      <main className="relative min-h-screen bg-brand-dark overflow-hidden text-white">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-40 pb-20 border-b border-white/5 overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-brand-cyan/10 via-brand-violet/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan uppercase tracking-wider">
              <Terminal size={13} /> Engineering Standards
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Technology Architecture & Framework Guides
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              We choose battle-tested, open technologies that maximize developer velocity, eliminate platform lock-in, and deliver green Core Web Vitals.
            </p>
          </div>
        </section>

        {/* Technologies Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {techs.map((tech) => (
                <div
                  key={tech.slug}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <span className="text-[11px] font-mono text-brand-cyan uppercase tracking-widest block font-bold">
                      {tech.category}
                    </span>

                    <h2 className="text-2xl font-heading font-bold text-white group-hover:text-brand-cyan transition-colors">
                      {tech.name}
                    </h2>

                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                      {tech.tagline}
                    </p>

                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                      {tech.whatItIs}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                    <Link
                      href={`/technologies/${tech.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-heading font-bold text-white group-hover:text-brand-cyan transition-colors"
                    >
                      <span>Read Full Architecture Guide</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
