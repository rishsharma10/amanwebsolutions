import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PortfolioHero from '@/components/portfolio/Hero';
// import ProjectGrid from '@/components/portfolio/ProjectGrid';
// import ClientLogos from '@/components/portfolio/ClientLogos';
// import CaseStudies from '@/components/portfolio/CaseStudies';
import CTA from '@/components/home/CTA';

export default function Portfolio() {
  return (
    <>
      <main>
        <Header />
        <PortfolioHero />
        {/* <ProjectGrid /> */}
        {/* <ClientLogos /> */}
        {/* <CaseStudies /> */}
        <CTA />
        <Footer />
      </main>
    </>
  );
}