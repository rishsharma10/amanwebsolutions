import { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/about/Hero';
import Stats from '@/components/home/Stats';
import CTA from '@/components/home/CTA';
import Values from '@/components/about/Values';
import Founder from '@/components/about/Founder';
import Journey from '@/components/about/Journey';
import Team from '@/components/about/Team';
import AIReadiness from '@/components/shared/AIReadiness';

export const metadata: Metadata = {
  title: 'About Vidhyonix | Our Mission & Leadership',
  description: 'Learn how Vidhyonix is driving digital transformation for global enterprises through custom AI development, SaaS platforms, and cutting-edge engineering.',
  alternates: {
    canonical: 'https://vidhyonix.com/about',
  }
};

export default function About() {
  return (
    <>
      <main className="relative min-h-screen bg-brand-dark overflow-hidden">
        {/* Background visual system */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.03] bg-ai-grid bg-repeat" />
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-brand-cyan/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-brand-fuchsia/5 rounded-full blur-[150px]" />
        </div>

        <Header />
        <AboutHero />
        <Values />
        <Founder />
        
        <section className="py-24 relative z-10 bg-brand-dark/50 border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Are You <span className="ai-gradient-text">AI Ready?</span></h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Take our free 5-step assessment to discover your digital maturity and uncover the best path forward.</p>
            </div>
            <AIReadiness />
          </div>
        </section>

        <Journey />
        <Team />
        <CTA />
        <Footer />
      </main>
    </>
  );
}