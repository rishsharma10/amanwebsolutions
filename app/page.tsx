import { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// 15 Sections in exact sequential order
import Hero from '@/components/home/Hero';
import Trust from '@/components/home/Trust';
import WhatWeBuild from '@/components/home/WhatWeBuild';
import BusinessProblems from '@/components/home/BusinessProblems';
import AICapabilities from '@/components/home/AICapabilities';
import SoftwareEngineeringSection from '@/components/home/SoftwareEngineeringSection';
import EcommerceTechSection from '@/components/home/EcommerceTechSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import CaseStudiesSection from '@/components/home/CaseStudiesSection';
import TechStackSection from '@/components/home/TechStackSection';
import HowWeWork from '@/components/home/HowWeWork';
import WhyVidhyonix from '@/components/home/WhyVidhyonix';
import FreeToolsSection from '@/components/home/FreeToolsSection';
import HomeFAQs from '@/components/home/HomeFAQs';
import FinalCTA from '@/components/home/FinalCTA';

export const metadata: Metadata = {
  title: 'Vidhyonix | AI, Software & Product Engineering Partner',
  description: 'We design and build intelligent software products, AI systems, SaaS platforms, automation workflows, ecommerce experiences, and custom digital solutions for ambitious businesses.',
  alternates: {
    canonical: 'https://vidhyonix.com',
  },
  openGraph: {
    title: 'Vidhyonix | AI, Software & Product Engineering Partner',
    description: 'We design and build intelligent software products, AI systems, SaaS platforms, automation workflows, and modern ecommerce experiences.',
    url: 'https://vidhyonix.com',
    type: 'website'
  }
};

export default function Home() {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://vidhyonix.com/#organization',
        'name': 'Vidhyonix IT Solutions',
        'alternateName': 'Vidhyonix',
        'url': 'https://vidhyonix.com',
        'logo': 'https://vidhyonix.com/favicon.png',
        'email': 'vidhyonixitsolutions@gmail.com',
        'telephone': '+91 8770283188',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Mohali, Chandigarh',
          'addressCountry': 'IN'
        },
        'sameAs': [
          'https://www.linkedin.com/company/vidhyonix-it-solutions/',
          'https://www.instagram.com/vidhyonix/',
          'https://www.facebook.com/people/Vidhyonix/61580259069806/'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://vidhyonix.com/#website',
        'url': 'https://vidhyonix.com',
        'name': 'Vidhyonix',
        'publisher': {
          '@id': 'https://vidhyonix.com/#organization'
        }
      }
    ]
  };

  return (
    <>
      <main className="relative overflow-x-hidden bg-brand-dark min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
        />
        <Header />
        {/* Section 1: Hero */}
        <Hero />
        {/* Section 2: Trust / Credibility */}
        <Trust />
        {/* Section 3: What Can We Build For You? */}
        <WhatWeBuild />
        {/* Section 4: Business Problems We Solve */}
        <BusinessProblems />
        {/* Section 5: AI Capabilities */}
        <AICapabilities />
        {/* Section 6: Software & Product Engineering */}
        <SoftwareEngineeringSection />
        {/* Section 7: Ecommerce Technology */}
        <EcommerceTechSection />
        {/* Section 8: Industries */}
        <IndustriesSection />
        {/* Section 9: Case Studies */}
        <CaseStudiesSection />
        {/* Section 10: Technology Stack */}
        <TechStackSection />
        {/* Section 11: How We Work */}
        <HowWeWork />
        {/* Section 12: Why Vidhyonix */}
        <WhyVidhyonix />
        {/* Section 13: Free Tools / Assessments */}
        <FreeToolsSection />
        {/* Section 14: FAQs */}
        <HomeFAQs />
        {/* Section 15: Final CTA */}
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}