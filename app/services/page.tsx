import { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicesHero from '@/components/services/Hero';
import CTA from '@/components/home/CTA';
import ServiceContent from '@/components/services/ServicesContent';
import SolutionFinder from '@/components/shared/SolutionFinder';

export const metadata: Metadata = {
  title: 'Services | Custom AI Development & Cloud Architecture',
  description: 'Explore our core services: AI and Machine Learning, Custom SaaS Development, Next.js Web Development, and Enterprise Cloud Solutions.',
  openGraph: {
    title: 'Services | Custom AI Development & Cloud Architecture | Vidhyonix',
    description: 'Explore our core services: AI and Machine Learning, Custom SaaS Development, Next.js Web Development, and Enterprise Cloud Solutions.',
    url: 'https://vidhyonix.com/services',
    type: 'website',
    images: [
      {
        url: '/images/services_software.jpg',
        width: 1200,
        height: 630,
        alt: 'Vidhyonix Services Catalog',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Custom AI Development & Cloud Architecture | Vidhyonix',
    description: 'Explore our core services: AI and Machine Learning, Custom SaaS Development, Next.js Web Development, and Enterprise Cloud Solutions.',
    images: ['/images/services_software.jpg'],
  },
  alternates: {
    canonical: 'https://vidhyonix.com/services',
  }
};

export default function Services() {
  const servicesListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Vidhyonix Services Catalog',
    'description': 'A comprehensive catalog of custom AI integration, software engineering, SaaS, web/mobile, and cloud infrastructure services offered by Vidhyonix.',
    'url': 'https://vidhyonix.com/services',
    'numberOfItems': 11,
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'item': {
          '@type': 'Service',
          'name': 'AI Development',
          'url': 'https://vidhyonix.com/services/ai-development',
          'description': 'Custom AI models and data audits built to automate analysis.'
        }
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'item': {
          '@type': 'Service',
          'name': 'Custom Software Development',
          'url': 'https://vidhyonix.com/services/custom-software-development',
          'description': 'Bespoke software systems engineered to perfectly align with your business logic.'
        }
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'item': {
          '@type': 'Service',
          'name': 'SaaS Development',
          'url': 'https://vidhyonix.com/services/saas-development',
          'description': 'Multi-tenant SaaS architectures, subscription managers, and scaling protocols.'
        }
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'item': {
          '@type': 'Service',
          'name': 'AI Automation',
          'url': 'https://vidhyonix.com/services/ai-automation',
          'description': 'Autonomous AI workflows designed to eliminate repetitive operational tasks.'
        }
      },
      {
        '@type': 'ListItem',
        'position': 5,
        'item': {
          '@type': 'Service',
          'name': 'AI Chatbot Development',
          'url': 'https://vidhyonix.com/services/ai-chatbot-development',
          'description': 'Conversational AI context agents providing round-the-clock live support.'
        }
      },
      {
        '@type': 'ListItem',
        'position': 6,
        'item': {
          '@type': 'Service',
          'name': 'AI Agent Development',
          'url': 'https://vidhyonix.com/services/ai-agent-development',
          'description': 'Intelligent autonomous agents trained to handle planning, tool use, and APIs.'
        }
      },
      {
        '@type': 'ListItem',
        'position': 7,
        'item': {
          '@type': 'Service',
          'name': 'Website Development',
          'url': 'https://vidhyonix.com/services/web-development',
          'description': 'Lightning fast web platforms optimized for organic SEO and high user conversions.'
        }
      },
      {
        '@type': 'ListItem',
        'position': 8,
        'item': {
          '@type': 'Service',
          'name': 'Mobile App Development',
          'url': 'https://vidhyonix.com/services/mobile-app-development',
          'description': 'Native performance mobile app solutions engineered on Flutter and React Native.'
        }
      },
      {
        '@type': 'ListItem',
        'position': 9,
        'item': {
          '@type': 'Service',
          'name': 'MVP Development',
          'url': 'https://vidhyonix.com/services/mvp-development',
          'description': 'Rapid product prototypes designed to validate business models and seed scale.'
        }
      },
      {
        '@type': 'ListItem',
        'position': 10,
        'item': {
          '@type': 'Service',
          'name': 'API Development',
          'url': 'https://vidhyonix.com/services/api-development',
          'description': 'Secure, high-availability data channels built for unified ecosystem architectures.'
        }
      },
      {
        '@type': 'ListItem',
        'position': 11,
        'item': {
          '@type': 'Service',
          'name': 'Cloud Solutions',
          'url': 'https://vidhyonix.com/services/cloud-engineering',
          'description': 'Secure multi-cloud scaling systems on AWS, GCP, and Microsoft Azure.'
        }
      }
    ]
  };

  return (
    <>
      <main className="relative min-h-screen bg-brand-dark overflow-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesListSchema) }}
        />
        {/* Background visual system */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.03] bg-ai-grid bg-repeat" />
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-brand-cyan/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-brand-fuchsia/5 rounded-full blur-[150px]" />
        </div>

        <Header />
        <ServicesHero />
        
        <section className="py-24 relative z-10">
          <div className="container mx-auto px-4">
            <SolutionFinder />
          </div>
        </section>

        <ServiceContent />
        <CTA />
        <Footer />
      </main>
    </>
  );
}