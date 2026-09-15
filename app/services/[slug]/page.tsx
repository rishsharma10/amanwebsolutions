import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceDetail from '@/components/services/ServiceDetail';
import { servicesData, ServiceItem } from '@/lib/servicesData';

interface Props {
  params: {
    slug: string;
  };
}

// Map legacy slugs to current canonical slugs
const slugAliases: Record<string, string> = {
  'ai-agent-development': 'ai-agents',
  'cloud-engineering': 'cloud-development',
};

function resolveService(slug: string): ServiceItem | undefined {
  const normalizedSlug = slugAliases[slug] || slug;
  return servicesData[normalizedSlug];
}

export async function generateStaticParams() {
  const mainSlugs = Object.keys(servicesData);
  const aliasSlugs = Object.keys(slugAliases);
  const allSlugs = Array.from(new Set([...mainSlugs, ...aliasSlugs]));
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = resolveService(params.slug);

  if (!service) {
    return {
      title: 'Service Not Found | Vidhyonix',
      description: 'The requested service could not be found.',
    };
  }

  const canonicalUrl = `https://vidhyonix.com/services/${service.slug}`;

  return {
    title: `${service.title} | Vidhyonix`,
    description: service.heroSubtitle,
    openGraph: {
      title: `${service.title} | Vidhyonix IT Solutions`,
      description: service.heroSubtitle,
      type: 'website',
      url: canonicalUrl,
      images: [
        {
          url: '/favicon.png',
          width: 1200,
          height: 630,
          alt: `${service.title} - Vidhyonix IT Solutions`,
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Vidhyonix`,
      description: service.heroSubtitle,
      images: ['/favicon.png'],
    },
    alternates: {
      canonical: canonicalUrl,
    }
  };
}

export default function ServicePage({ params }: Props) {
  const service = resolveService(params.slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': service.title,
    'description': service.heroSubtitle,
    'provider': {
      '@type': 'Organization',
      'name': 'Vidhyonix IT Solutions',
      'url': 'https://vidhyonix.com',
      'logo': 'https://vidhyonix.com/favicon.png',
      'telephone': '+91 8770283188',
      'email': 'vidhyonixitsolutions@gmail.com',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Mohali, Chandigarh',
        'addressCountry': 'IN'
      }
    },
    'serviceType': service.pillar,
    'areaServed': 'Worldwide'
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://vidhyonix.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Services',
        'item': 'https://vidhyonix.com/services'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': service.title,
        'item': `https://vidhyonix.com/services/${service.slug}`
      }
    ]
  };

  const faqSchema = service.faqs && service.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': service.faqs.map((faq) => ({
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
        <ServiceDetail service={service} />
        <Footer />
      </main>
    </>
  );
}
