import React from 'react';
import { notFound } from 'next/navigation';
import { industriesData } from '@/lib/industriesData';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CTA from '@/components/home/CTA';
import { Building2, ArrowRight, CheckCircle2, ChevronRight, Activity } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({
    slug: slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const data = industriesData[params.slug];
  if (!data) return { title: 'Industry Not Found' };
  
  return {
    title: `${data.title} | Vidhyonix`,
    description: data.heroSubheadline,
  };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const data = industriesData[params.slug];
  
  if (!data) {
    notFound();
  }

  return (
    <main className="bg-brand-dark min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 py-1 px-3 mb-6 rounded-full bg-white/5 text-brand-cyan border border-brand-cyan/20 font-medium text-sm">
              <Building2 size={16} /> Industry Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
              {data.heroHeadline}
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              {data.heroSubheadline}
            </p>
            <Link href="/contact">
              <button className="px-8 py-4 bg-brand-cyan text-brand-dark rounded-xl font-bold hover:bg-white transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                Discuss Your Project <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-24 bg-white/5 border-y border-white/10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Challenges We Solve</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {data.challenges.map((c, i) => (
              <div key={i} className="bg-brand-dark p-8 rounded-2xl border border-white/10">
                <div className="w-12 h-12 bg-red-500/10 text-red-400 rounded-xl flex items-center justify-center mb-6">
                  <Activity size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{c.title}</h3>
                <p className="text-slate-400">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Our Solutions</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {data.solutions.map((s, i) => (
              <div key={i} className="bg-gradient-to-br from-brand-cyan/10 to-brand-violet/10 p-8 rounded-2xl border border-brand-cyan/20">
                <div className="w-12 h-12 bg-brand-cyan/20 text-brand-cyan rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-slate-300">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study / Problem Solved */}
      {data.caseStudy && (
        <section className="py-24 relative z-10 bg-brand-dark overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-fuchsia/5 rounded-full blur-[150px]" />
          </div>
          <div className="container mx-auto px-4 relative z-10 max-w-5xl">
            <div className="glass-morphism rounded-3xl p-8 md:p-12 border border-brand-fuchsia/20 shadow-[0_0_50px_rgba(217,70,239,0.05)]">
              <span className="inline-block py-1 px-3 mb-6 rounded-full bg-brand-fuchsia/10 text-brand-fuchsia font-bold text-sm tracking-widest uppercase">
                Case Study
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-10 leading-tight">
                {data.caseStudy.title}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-red-400 flex items-center gap-2">
                    <Activity size={20} /> The Problem
                  </h4>
                  <p className="text-slate-300 leading-relaxed bg-black/20 p-5 rounded-2xl border border-white/5">
                    {data.caseStudy.problem}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-green-400 flex items-center gap-2">
                    <CheckCircle2 size={20} /> The Solution
                  </h4>
                  <p className="text-slate-300 leading-relaxed bg-black/20 p-5 rounded-2xl border border-white/5">
                    {data.caseStudy.solution}
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10 text-center">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Business Impact</h4>
                <p className="text-xl md:text-2xl font-bold text-brand-cyan max-w-3xl mx-auto leading-relaxed">
                  "{data.caseStudy.impact}"
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <ChevronRight className="text-brand-cyan" size={20} /> {faq.q}
                </h4>
                <p className="text-slate-400 pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
