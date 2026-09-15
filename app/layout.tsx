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
    default: 'Vidhyonix | AI, Software & Product Engineering Partner',
    template: '%s | Vidhyonix'
  },
  description: 'We design and build intelligent software products, AI systems, SaaS platforms, automation workflows, ecommerce experiences, and custom digital solutions for ambitious businesses.',
  keywords: [
    'AI Development Company', 'AI Agent Development', 'Software Engineering Partner',
    'Custom SaaS Development', 'Next.js Development Company', 'Headless Ecommerce Technology',
    'Workflow Automation', 'Cloud Architecture', 'Mobile App Development', 'Product Engineering'
  ],
  authors: [{ name: 'Vidhyonix Engineering Team' }],
  creator: 'Vidhyonix IT Solutions',
  publisher: 'Vidhyonix IT Solutions',
  metadataBase: new URL('https://vidhyonix.com'),
  openGraph: {
    title: 'Vidhyonix | AI, Software & Product Engineering Partner',
    description: 'We design and build intelligent software products, AI systems, SaaS platforms, automation workflows, ecommerce experiences, and custom digital solutions.',
    url: 'https://vidhyonix.com',
    siteName: 'Vidhyonix IT Solutions',
    images: [
      {
        url: '/favicon.png',
        width: 1200,
        height: 630,
        alt: 'Vidhyonix - AI, Software & Product Engineering'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vidhyonix | AI, Software & Product Engineering Partner',
    description: 'Intelligent software products, AI systems, SaaS platforms, and modern ecommerce experiences.',
    images: ['/favicon.png'],
  },
  alternates: {
    canonical: 'https://vidhyonix.com',
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
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
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
        <BreadcrumbSchema />
      </body>
    </html>
  );
}
