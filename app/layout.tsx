import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SkillyTalkModal from '@/components/SkillyTalkModal';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Vidhyonix IT Solutions',
    template: '%s | Vidhyonix'
  },
  description: 'Vidhyonix delivers end-to-end IT solutions: web, mobile, backend, DevOps, and cloud-native engineering for modern businesses.',
  keywords: [
    'Vidhyonix', 'IT company', 'web development', 'Next.js', 'React', 'Node.js', 'NestJS',
    'mobile app development', 'React Native', 'Flutter', 'AWS', 'Azure', 'DevOps',
    'PostgreSQL', 'Redis', 'MongoDB', 'eCommerce', 'Shopify', 'WordPress'
  ],
  metadataBase: new URL('https://vidhyonix.com'),
  alternates: {
    canonical: '/',
    languages: { 'en': '/' }
  },
  openGraph: {
    title: 'Vidhyonix IT Solutions',
    description: 'End-to-end IT solutions engineered for scale and performance. Web, mobile, backend, DevOps, and cloud.',
    url: 'https://vidhyonix.com',
    siteName: 'Vidhyonix',
    images: [
      {
        url: '/favicon.png',
        width: 1200,
        height: 630,
        alt: 'Vidhyonix - IT Innovation Partner'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vidhyonix',
    creator: '@vidhyonix',
    images: ['/favicon.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
  icons: {
    icon: '/favicon.png'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SkillyTalkModal />
      </body>
    </html>
  );
}
