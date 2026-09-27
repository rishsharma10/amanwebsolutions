import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LocationDetail from '@/components/locations/LocationDetail';
import { locationsData, LocationItem } from '@/lib/locationsData';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(locationsData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = locationsData[params.slug];

  if (!location) {
    return {
      title: 'Location Not Found | Vidhyonix',
      description: 'The requested local service region could not be found.',
    };
  }

  const canonicalUrl = `https://vidhyonix.com/locations/${location.slug}`;

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: [
      `web development company ${location.city}`,
      `website design ${location.city}`,
      `business website developer ${location.city}`,
      `software development ${location.city}`,
      `custom software company ${location.city}`,
      `IT company in ${location.city}`,
      `website price ${location.city}`,
      `e-commerce website development ${location.city}`
    ],
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      type: 'website',
      url: canonicalUrl,
      images: [
        {
          url: '/favicon.png',
          width: 1200,
          height: 630,
          alt: `${location.metaTitle} - Vidhyonix`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: location.metaTitle,
      description: location.metaDescription,
      images: ['/favicon.png'],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function LocationPage({ params }: Props) {
  const location = locationsData[params.slug];

  if (!location) {
    notFound();
  }

  // Schema for Local Business + Professional Service
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `https://vidhyonix.com/locations/${location.slug}/#localbusiness`,
    name: `Vidhyonix IT Solutions - ${location.city}`,
    description: location.metaDescription,
    url: `https://vidhyonix.com/locations/${location.slug}`,
    telephone: '+91 8770283188',
    email: 'vidhyonixitsolutions@gmail.com',
    priceRange: '₹₹ - ₹₹₹',
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.city,
      addressRegion: location.region,
      addressCountry: 'IN',
    },
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: location.city,
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Chandigarh Tricity',
      },
    ],
    provider: {
      '@type': 'Organization',
      name: 'Vidhyonix IT Solutions',
      url: 'https://vidhyonix.com',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://vidhyonix.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Locations',
        item: 'https://vidhyonix.com/locations',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: location.city,
        item: `https://vidhyonix.com/locations/${location.slug}`,
      },
    ],
  };

  const faqSchema = location.localFaqs && location.localFaqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: location.localFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  } : null;

  return (
    <main className="relative min-h-screen bg-brand-dark overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <Header />
      <LocationDetail location={location} />
      <Footer />
    </main>
  );
}
