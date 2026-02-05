'use client'

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Projects from '@/components/home/Projects';
import Testimonials from '@/components/home/Testimonials';
import Stats from '@/components/home/Stats';
import SkillyTalkShowcase from '@/components/home/SkillyTalkShowcase';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <>
      <main className="relative overflow-x-hidden bg-brand-dark">
        {/* JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Vidhyonix',
              url: 'https://vidhyonix.com',
              logo: 'https://vidhyonix.com/favicon.png',
              sameAs: [
                'https://www.linkedin.com/company/vidhyonix',
                'https://twitter.com/vidhyonix'
              ],
              contactPoint: [{
                '@type': 'ContactPoint',
                telephone: '+91 8770283188',
                contactType: 'customer service',
                areaServed: 'Chandigarh, India',
                availableLanguage: 'en'
              }]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Vidhyonix',
              url: 'https://vidhyonix.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://vidhyonix.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'SkillyTalk Interview',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD'
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '150'
              },
              description: 'AI-powered interview platform that adapts in real-time. Screen global talent with high-fidelity voice agents, intelligent follow-ups, and instant analytics. The engine of verified meritocracy for modern hiring.',
              url: 'https://skillytalkinterview.vidhyonix.com/',
              author: {
                '@type': 'Organization',
                name: 'Vidhyonix'
              },
              featureList: [
                'AI-Powered Interviews',
                'Vocal Intelligence',
                'Visual Veracity',
                'Merit Analytics',
                'Contextual Threading',
                'Zero Latency Setup',
                'Talent Scorecarding',
                'Real-time Adaptation',
                'Instant Analytics'
              ]
            })
          }}
        />
        {/* Animated blurry dots and moving elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Glow orbs */}
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-brand-cyan/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-brand-fuchsia/5 rounded-full blur-[150px]" />
        </div>
        <Header />
        <Hero />
        <Services />
        <Stats />
        <SkillyTalkShowcase />
        <Projects />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </>
  );
}