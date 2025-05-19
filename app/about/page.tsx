import React from 'react';
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
      <main>
        <Header />
        <AboutHero />
        <CTA />
        <Footer />
      </main>
    </>
  );
}