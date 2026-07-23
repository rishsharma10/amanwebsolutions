import './globals.css';
import React from 'react';
import Script from 'next/script';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Poppins } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import SkillyTalkModal from '@/components/SkillyTalkModal';
import NeuralCursor from '@/components/layout/NeuralCursor';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import GlobalSchema from '@/components/seo/GlobalSchema';
import AIChatbot from '@/components/shared/AIChatbot';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    default: 'Vidhyonix | Premium AI Software Development Agency',
    template: '%s | Vidhyonix'
  },
  description: 'Vidhyonix is a premium AI software development agency specializing in custom SaaS platforms, intelligent automation, and high-performance web and mobile applications.',
  keywords: [
    'AI Software Development Company', 'Custom SaaS Development', 'Mobile App Agency', 'Next.js Development', 'Enterprise Software',
    'AI Integration Services', 'Digital Transformation', 'Cloud Native Architecture', 'SkillyTalk AI', 'Proprietary AI Models'
  ],
  authors: [{ name: 'Vidhyonix Team' }],
  creator: 'Vidhyonix',
  publisher: 'Vidhyonix',
  metadataBase: new URL('https://vidhyonix.com'),
  openGraph: {
    title: 'Vidhyonix | Premium AI Software Development Agency',
    description: 'Specializing in custom SaaS platforms, intelligent automation, and high-performance applications.',
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
    title: 'Vidhyonix | AI Software Agency',
    description: 'Specializing in custom SaaS platforms, intelligent automation, and high-performance applications.',
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
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable} ${poppins.variable}`} style={{ colorScheme: 'dark' }}>
      <head>
        <GlobalSchema />
      </head>
      <body className="bg-brand-dark text-white font-sans antialiased selection:bg-brand-fuchsia/30">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NFKQYZX8BB"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NFKQYZX8BB');
          `}
        </Script>
        <NeuralCursor />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="scan-line" />
          {children}
          <AIChatbot />
        </ThemeProvider>
        <SkillyTalkModal />
        <BreadcrumbSchema />
      </body>
    </html>
  );
}
