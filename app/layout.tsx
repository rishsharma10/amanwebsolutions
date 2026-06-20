import './globals.css';
import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SkillyTalkModal from '@/components/SkillyTalkModal';
import NeuralCursor from '@/components/layout/NeuralCursor';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Vidhyonix | Best IT Company — Website Development, SEO & AI Solutions',
    template: '%s | Vidhyonix'
  },
  description: 'Vidhyonix is a top-rated IT company for custom website development, mobile app development, SEO, and AI solutions. Delivering next-gen tech. Get a free consultation.',
  keywords: [
    'Best IT Company India', 'Website Development Company', 'Next.js Development', 'React Development', 'Node.js', 'NestJS',
    'Mobile App Development', 'React Native', 'Flutter', 'AWS', 'Azure', 'DevOps', 'AI Web Solutions', 'SkillyTalk AI Hiring',
    'Custom Software Development', 'SEO Services for Tech Companies', 'Digital Marketing'
  ],
  authors: [{ name: 'Vidhyonix Team' }],
  creator: 'Vidhyonix',
  publisher: 'Vidhyonix',
  metadataBase: new URL('https://vidhyonix.com'),
  openGraph: {
    title: 'Vidhyonix | Best IT Company — Website Development, SEO & AI Solutions',
    description: 'Vidhyonix is a top-rated IT company for custom website development, mobile app development, SEO, and AI solutions.',
    url: 'https://vidhyonix.com',
    siteName: 'Vidhyonix',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vidhyonix - Next-Gen IT Solutions'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vidhyonix | Best IT Company',
    description: 'Vidhyonix is a top-rated IT company for custom website development, mobile app development, SEO, and AI solutions.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/',
    languages: { 'en-US': '/en-US' }
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body className="bg-brand-dark text-white font-sans antialiased selection:bg-brand-fuchsia/30">
        <NeuralCursor />
        <div className="scan-line" />
        {children}
        <SkillyTalkModal />
        <BreadcrumbSchema />
      </body>
    </html>
  );
}
