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

  return {
    title: `${service.title} Services | ${APP_NAME}`,
    description: service.heroSubtitle,
    openGraph: {
      title: `${service.title} | ${APP_NAME}`,
      description: service.heroSubtitle,
      type: 'website',
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

  return (
    <>
      <main className="relative min-h-screen bg-brand-dark overflow-hidden">
        <Header />
        <ServiceDetail data={service} slug={params.slug} />
        <Footer />
      </main>
    </>
  );
}
