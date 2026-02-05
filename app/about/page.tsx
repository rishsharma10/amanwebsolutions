'use client';
import React, { useRef, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/about/Hero';
import Stats from '@/components/home/Stats';
import CTA from '@/components/home/CTA';
import Values from '@/components/about/Values';
import Journey from '@/components/about/Journey';
import Team from '@/components/about/Team';

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
        <Journey />
        <CTA />
        <Footer />
      </main>
    </>
  );
}