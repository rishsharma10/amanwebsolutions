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
      <main className="relative overflow-x-hidden bg-brand-soft dark:from-neutral-900 dark:via-blue-950 dark:to-fuchsia-950">
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
          {/* Large blue dot top left */}
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-sky-400/20 blur-[100px] animate-pulse" />
          {/* Large fuchsia dot bottom right */}
          <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-fuchsia-400/20 blur-[120px] animate-pulse" />
          {/* Animated moving dots */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-blue-400 via-fuchsia-400 to-pink-400 opacity-20"
              style={{
                width: `${32 + i * 10}px`,
                height: `${32 + i * 10}px`,
                left: `${10 + i * 15}%`,
                top: `${20 + i * 12}%`,
                filter: 'blur(8px)',
                animation: `moveDot${i} 12s ease-in-out infinite alternate`,
              }}
            />
          ))}
        </div>
        <Header />
        <Hero />
        {/* Blurred gradient overlay to blend Hero into next section */}
        <div className="relative z-10 -mt-16 h-24 w-full pointer-events-none">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-transparent via-white/60 to-white dark:via-blue-950/60 dark:to-fuchsia-950/80 blur-2xl" />
        </div>
        <Services />
        <Stats />
        <SkillyTalkShowcase />
        <Projects />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
      <style jsx global>{`
        @keyframes moveDot0 {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(40px) scale(1.08); }
        }
        @keyframes moveDot1 {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(-30px) scale(1.12); }
        }
        @keyframes moveDot2 {
          0% { transform: translateX(0) scale(1); }
          100% { transform: translateX(30px) scale(1.05); }
        }
        @keyframes moveDot3 {
          0% { transform: translateX(0) scale(1); }
          100% { transform: translateX(-30px) scale(1.1); }
        }
        @keyframes moveDot4 {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(20px) scale(1.07); }
        }
      `}</style>
    </>
  );
}