import { Metadata } from 'next';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Trust from '@/components/home/Trust';
import Services from '@/components/home/Services';
import Projects from '@/components/home/Projects';
import Methodology from '@/components/home/Methodology';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Industries from '@/components/home/Industries';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';
import BeforeAfter from '@/components/home/BeforeAfter';
import ROICalculator from '@/components/shared/ROICalculator';

export const metadata: Metadata = {
  title: 'Vidhyonix | Top AI Software Development & Digital Agency',
  description: 'Transform your business with custom AI solutions, SaaS applications, and enterprise software engineered for scale and performance.',
  alternates: {
    canonical: 'https://vidhyonix.com',
  }
};

export default function Home() {
  return (
    <>
      <main className="relative overflow-x-hidden bg-brand-dark">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'LocalBusiness',
                '@id': 'https://vidhyonix.com/#localbusiness',
                name: 'Vidhyonix',
                image: 'https://vidhyonix.com/favicon.png',
                url: 'https://vidhyonix.com',
                telephone: '+91 8770283188',
                email: 'vidhyonixitsolutions@gmail.com',
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
                '@type': 'SoftwareApplication',
                '@id': 'https://aiinterview.skillytalk.com/#app',
                name: 'SkillyTalk Interview',
                applicationCategory: 'BusinessApplication',
                operatingSystem: 'Web',
                url: 'https://aiinterview.skillytalk.com/',
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
        <Trust />
        <Services />
        <Projects />
        <Methodology />
        <BeforeAfter />

        <section className="py-24 relative z-10 bg-brand-dark/50 border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Calculate Your <span className="ai-gradient-text">Savings</span></h2>
              <p className="text-slate-400 text-lg">Discover how much time and money AI automation can save your business.</p>
            </div>
            <ROICalculator />
          </div>
        </section>

        <WhyChooseUs />
        <Industries />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </>
  );
}