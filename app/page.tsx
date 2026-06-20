'use client'

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import AIProducts from '@/components/home/AIProducts';
import Services from '@/components/home/Services';
import Projects from '@/components/home/Projects';
import Testimonials from '@/components/home/Testimonials';
import Stats from '@/components/home/Stats';
import SkillyTalkShowcase from '@/components/home/SkillyTalkShowcase';
import CTA from '@/components/home/CTA';
import Industries from '@/components/home/Industries';
import Methodology from '@/components/home/Methodology';
import TechStack from '@/components/home/TechStack';
import ProjectEstimator from '@/components/shared/ProjectEstimator';

export default function Home() {
  return (
    <>
      <main className="relative overflow-x-hidden bg-brand-dark">
        {/* JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                '@id': 'https://vidhyonix.com/#organization',
                name: 'Vidhyonix',
                legalName: 'Vidhyonix IT Solutions',
                alternateName: ['Vidhyonix Solutions', 'Vidhyonix IT Company'],
                url: 'https://vidhyonix.com',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://vidhyonix.com/favicon.png',
                  width: 400,
                  height: 400
                },
                description: 'Vidhyonix is a leading IT company specialising in website development, mobile app development, SEO, custom web development, and AI-powered digital solutions. We also own SkillyTalk, an AI-powered interview platform.',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Mohali, Chandigarh',
                  addressCountry: 'IN'
                },
                contactPoint: [
                  {
                    '@type': 'ContactPoint',
                    telephone: '+91 8770283188',
                    contactType: 'sales',
                    email: 'info@vidhyonix.com',
                    areaServed: ['IN', 'US', 'GB', 'AE', 'CA', 'AU'],
                    availableLanguage: ['English', 'Hindi']
                  },
                  {
                    '@type': 'ContactPoint',
                    telephone: '+91 8770283188',
                    contactType: 'customer support',
                    areaServed: 'IN',
                    availableLanguage: ['English', 'Hindi']
                  }
                ],
                sameAs: [
                  'https://www.linkedin.com/company/vidhyonix',
                  'https://twitter.com/vidhyonix',
                  'https://www.instagram.com/vidhyonix/',
                  'https://www.facebook.com/people/Vidhyonix/61580259069806/'
                ],
                email: 'info@vidhyonix.com',
                telephone: '+91 8770283188',
                areaServed: ['India', 'United States', 'United Kingdom', 'United Arab Emirates', 'Canada', 'Australia'],
                knowsAbout: ['Website Development', 'Mobile App Development', 'Search Engine Optimization', 'Custom Web Development', 'AI Development', 'Digital Marketing']
              },
              {
                '@context': 'https://schema.org',
                '@type': 'LocalBusiness',
                '@id': 'https://vidhyonix.com/#localbusiness',
                name: 'Vidhyonix',
                image: 'https://vidhyonix.com/favicon.png',
                url: 'https://vidhyonix.com',
                telephone: '+91 8770283188',
                email: 'info@vidhyonix.com',
                priceRange: '₹₹',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Mohali, Chandigarh',
                  addressCountry: 'IN'
                },
                openingHoursSpecification: {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '19:00'
                },
                sameAs: [
                  'https://www.linkedin.com/company/vidhyonix',
                  'https://twitter.com/vidhyonix',
                  'https://www.instagram.com/vidhyonix/',
                  'https://www.facebook.com/people/Vidhyonix/61580259069806/'
                ]
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                '@id': 'https://vidhyonix.com/#website',
                name: 'Vidhyonix',
                url: 'https://vidhyonix.com',
                publisher: {
                  '@id': 'https://vidhyonix.com/#organization'
                },
                inLanguage: 'en-US',
                potentialAction: {
                  '@type': 'SearchAction',
                  target: {
                    '@type': 'EntryPoint',
                    urlTemplate: 'https://vidhyonix.com/search?q={search_term_string}'
                  },
                  'query-input': 'required name=search_term_string'
                }
              },
              {
                '@context': 'https://schema.org',
                '@type': 'SoftwareApplication',
                '@id': 'https://skillytalkinterview.vidhyonix.com/#app',
                name: 'SkillyTalk Interview',
                applicationCategory: 'BusinessApplication',
                operatingSystem: 'Web',
                url: 'https://skillytalkinterview.vidhyonix.com/',
                description: 'SkillyTalk is an AI-powered interview platform that automates candidate evaluation with intelligent scoring and unbiased assessments. Built by Vidhyonix.',
                offers: {
                  '@type': 'Offer',
                  price: '0',
                  priceCurrency: 'USD',
                  availability: 'https://schema.org/InStock'
                },
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: '4.8',
                  ratingCount: '150'
                },
                author: {
                  '@id': 'https://vidhyonix.com/#organization'
                },
                brand: {
                  '@type': 'Brand',
                  name: 'Vidhyonix'
                }
              }
            ])
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
        <TechStack />
        <AIProducts />
        <Services />
        <Industries />
        <Methodology />
        <Stats />
        <SkillyTalkShowcase />
        <Projects />
        <Testimonials />
        <section className="py-20 relative z-10 border-t border-white/5 bg-brand-dark/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-extrabold text-white mb-4">Calculate Your <span className="text-brand-cyan">Project Scope</span></h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">Use our interactive estimator to get a custom roadmap and timeline in just 3 clicks.</p>
            </div>
            <ProjectEstimator />
          </div>
        </section>
        <CTA />
        <Footer />
      </main>
    </>
  );
}