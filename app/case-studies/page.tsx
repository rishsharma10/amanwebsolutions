import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, ExternalLink, ArrowUpRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { caseStudiesData } from '@/lib/caseStudiesData';

export const metadata: Metadata = {
  title: 'Case Studies | Real Client Engineering Work | Vidhyonix',
  description: 'Explore verified engineering case studies from Vidhyonix covering custom Shopify 3D storefronts, AI assessment SaaS platforms, and enterprise web applications.',
  alternates: {
    canonical: 'https://vidhyonix.com/case-studies',
  }
};

export default function CaseStudiesHub() {
  const studies = Object.values(caseStudiesData);

  return (
    <>
      <main className="relative min-h-screen bg-brand-dark overflow-hidden text-white">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-40 pb-20 border-b border-white/5 overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-brand-cyan/10 via-brand-violet/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan uppercase tracking-wider">
              <Sparkles size={13} /> Proven Outcomes
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Case Studies: Real Work for Real Businesses
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              We let our code and architecture speak for themselves. Discover how we partner with ambitious brands to engineer dependable digital products.
            </p>
          </div>
        </section>

        {/* Case Studies Gallery */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {studies.map((study) => (
                <div
                  key={study.slug}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
                        {study.industry}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {study.clientName}
                      </span>
                    </div>

                    <h2 className="text-2xl font-heading font-bold text-white group-hover:text-brand-cyan transition-colors">
                      {study.title}
                    </h2>

                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                      {study.summary}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-2">
                      {study.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-white/5 rounded-lg text-[11px] font-mono text-slate-400 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 mt-6 border-t border-white/5 flex items-center justify-between">
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-heading font-bold text-white group-hover:text-brand-cyan transition-colors"
                    >
                      <span>Read Deep Architecture</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {study.liveUrl && (
                      <a
                        href={study.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                      >
                        <span>Visit Live</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
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