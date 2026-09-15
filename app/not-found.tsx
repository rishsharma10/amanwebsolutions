import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ArrowRight, Compass, Home, Sparkles, Layers } from 'lucide-react';

export default function NotFound() {
  const popularServices = [
    { title: 'Custom AI Development', href: '/services/ai-development' },
    { title: 'AI Agent Development', href: '/services/ai-agents' },
    { title: 'Custom Software Development', href: '/services/custom-software-development' },
    { title: 'SaaS Platform Development', href: '/services/saas-development' },
    { title: 'Ecommerce Technology Engineering', href: '/services/ecommerce-development' },
  ];

  const featuredCaseStudies = [
    { title: 'Madam Jan 3D Storefront', href: '/case-studies/madam-jan' },
    { title: 'SkillyTalk AI Assessment Platform', href: '/case-studies/skillytalk-ai' },
    { title: 'Evitavonni Luxury Digital Showcase', href: '/case-studies/evitavonni' },
  ];

  return (
    <>
      <main className="relative min-h-screen bg-brand-dark overflow-hidden text-white flex flex-col justify-between">
        <Header />

        <section className="relative pt-44 pb-24 container mx-auto px-4 max-w-4xl text-center space-y-8">
          <span className="font-mono text-xs font-bold text-brand-cyan bg-brand-cyan/10 px-3.5 py-1.5 rounded-full border border-brand-cyan/20 inline-block uppercase tracking-widest">
            Error 404
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight">
            Page Not Found
          </h1>

          <p className="text-base md:text-lg text-slate-300 max-w-lg mx-auto leading-relaxed">
            The page you are looking for may have been relocated, restructured, or is temporarily unavailable. Let’s get you back on track.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-cyan text-brand-dark rounded-xl font-heading font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]"
            >
              <Home size={14} />
              <span>Back to Homepage</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition-all"
            >
              <span>Contact Engineering Team</span>
            </Link>
          </div>

          <div className="pt-16 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-brand-cyan font-heading font-bold text-sm uppercase tracking-wider">
                <Sparkles size={16} />
                <span>Popular Services</span>
              </div>
              <ul className="space-y-2 text-xs">
                {popularServices.map((srv, i) => (
                  <li key={i}>
                    <Link
                      href={srv.href}
                      className="text-slate-300 hover:text-brand-cyan flex items-center justify-between py-1 transition-colors"
                    >
                      <span>{srv.title}</span>
                      <ArrowRight size={12} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-brand-violet font-heading font-bold text-sm uppercase tracking-wider">
                <Layers size={16} />
                <span>Featured Case Studies</span>
              </div>
              <ul className="space-y-2 text-xs">
                {featuredCaseStudies.map((cs, i) => (
                  <li key={i}>
                    <Link
                      href={cs.href}
                      className="text-slate-300 hover:text-brand-violet flex items-center justify-between py-1 transition-colors"
                    >
                      <span>{cs.title}</span>
                      <ArrowRight size={12} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
