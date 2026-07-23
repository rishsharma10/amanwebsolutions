import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceDetail from '@/components/services/ServiceDetail';
import { servicesData } from '@/lib/servicesData';

const APP_NAME = "Vidhyonix";

interface Props {
  params: {
    slug: string;
  };
}

// Generate static params for all services so they are built at compile time (optional but good for SEO/Performance)
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

// Dynamic SEO metadata based on the service slug
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = servicesData[params.slug as keyof typeof servicesData];
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  // Map slug to optimized local service image card
  let imagePath = '/images/services_software.jpg';
  const slug = params.slug;
  if (slug.includes('ai-') || slug.includes('chatbot')) {
    imagePath = '/images/services_ai.jpg';
  } else if (slug.includes('web') || slug.includes('mobile') || slug.includes('mvp')) {
    imagePath = '/images/services_web_mobile.jpg';
  } else if (slug.includes('cloud') || slug.includes('infra')) {
    imagePath = '/images/services_cloud.jpg';
  }

  return {
    title: `${service.title} Services | ${APP_NAME}`,
    description: service.heroSubtitle,
    openGraph: {
      title: `${service.title} | ${APP_NAME}`,
      description: service.heroSubtitle,
      type: 'website',
      url: `https://vidhyonix.com/services/${params.slug}`,
      images: [
        {
          url: imagePath,
          width: 1200,
          height: 630,
          alt: `${service.title} Services`,
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} Services | ${APP_NAME}`,
      description: service.heroSubtitle,
      images: [imagePath],
    },
    alternates: {
      canonical: `https://vidhyonix.com/services/${params.slug}`
    }
  };
}

export default function ServicePage({ params }: Props) {
  const service = servicesData[params.slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': `${service.title} Services`,
    'provider': {
      '@type': 'LocalBusiness',
      'name': APP_NAME,
      'url': 'https://vidhyonix.com',
      'logo': 'https://vidhyonix.com/favicon.png',
      'image': 'https://vidhyonix.com/favicon.png',
      'telephone': '+91 8770283188',
      'email': 'vidhyonixitsolutions@gmail.com',
      'priceRange': '₹₹',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Mohali, Chandigarh',
        'addressCountry': 'IN'
      }
    },
    'description': service.heroSubtitle
  };

  const faqSchema = service.faqs && service.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': service.faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.a
      }
    }))
  } : null;

  return (
    <>
      <main className="relative min-h-screen bg-brand-dark overflow-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}
        <Header />
        <ServiceDetail data={service} slug={params.slug} />
        <Footer />
      </main>
    </>
  );
}
