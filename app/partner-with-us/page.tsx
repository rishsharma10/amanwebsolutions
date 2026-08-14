import { Metadata } from 'next';
import PartnerPageClient from '@/components/partner/PartnerPageClient';

export const metadata: Metadata = {
  title: 'Partner With Vidhyonix | AI & Software Development Partnerships',
  description: 'Partner with Vidhyonix for AI development, SaaS engineering, custom software, white-label development, technology partnerships, and long-term product development.',
  alternates: {
    canonical: 'https://vidhyonix.com/partner-with-us',
  },
  openGraph: {
    title: 'Partner With Vidhyonix | AI & Software Development Partnerships',
    description: 'Partner with Vidhyonix for AI development, SaaS engineering, custom software, white-label development, technology partnerships, and long-term product development.',
    url: 'https://vidhyonix.com/partner-with-us',
    type: 'website',
    images: [
      {
        url: '/favicon.png',
        width: 1200,
        height: 630,
        alt: 'Vidhyonix Partnerships',
      }
    ]
  },
  twitter: {
    card: 'summary',
    title: 'Partner With Vidhyonix | AI & Software Development Partnerships',
    description: 'Partner with Vidhyonix for AI development, SaaS engineering, custom software, white-label development, technology partnerships, and long-term product development.',
    images: ['/favicon.png'],
  }
};

export default function PartnerWithUsPage() {
  return <PartnerPageClient />;
}
