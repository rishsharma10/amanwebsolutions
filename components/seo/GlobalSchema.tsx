import React from 'react';

export default function GlobalSchema() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://vidhyonix.com/#organization',
    name: 'Vidhyonix IT Solutions',
    alternateName: 'Vidhyonix',
    url: 'https://vidhyonix.com',
    email: 'vidhyonixitsolutions@gmail.com',
    telephone: '+91 8770283188',
    description: 'AI, Software & Product Engineering Partner designing and building intelligent software products, AI systems, SaaS platforms, automation workflows, and modern ecommerce experiences.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mohali, Chandigarh',
      addressCountry: 'IN'
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91 8770283188',
        contactType: 'customer support',
        areaServed: 'Worldwide',
        availableLanguage: ['en', 'hi']
      }
    ],
    logo: {
      '@type': 'ImageObject',
      '@id': 'https://vidhyonix.com/#logo',
      url: 'https://vidhyonix.com/favicon.png',
      caption: 'Vidhyonix IT Solutions'
    },
    sameAs: [
      'https://www.linkedin.com/company/vidhyonix-it-solutions/',
      'https://www.instagram.com/vidhyonix/',
      'https://www.facebook.com/people/Vidhyonix/61580259069806/'
    ]
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://vidhyonix.com/#website',
    url: 'https://vidhyonix.com',
    name: 'Vidhyonix',
    description: 'AI, Software & Product Engineering Partner',
    publisher: {
      '@id': 'https://vidhyonix.com/#organization'
    }
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://vidhyonix.com/#localbusiness',
    name: 'Vidhyonix IT Solutions',
    alternateName: 'Vidhyonix Web & AI Development',
    url: 'https://vidhyonix.com',
    image: 'https://vidhyonix.com/favicon.png',
    telephone: '+91 8770283188',
    email: 'vidhyonixitsolutions@gmail.com',
    priceRange: '₹₹ - ₹₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sector 119, Balongi',
      addressLocality: 'Sahibzada Ajit Singh Nagar (Mohali)',
      addressRegion: 'Punjab',
      postalCode: '160055',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '30.7046',
      longitude: '76.7179'
    },
    areaServed: [
      { '@type': 'City', name: 'Chandigarh' },
      { '@type': 'City', name: 'Mohali' },
      { '@type': 'City', name: 'Panchkula' },
      { '@type': 'AdministrativeArea', name: 'Tricity' },
      { '@type': 'Country', name: 'India' }
    ],
    knowsAbout: [
      'Web Development',
      'Business Website Design',
      'SaaS Development',
      'AI Agent Development',
      'E-Commerce Technology'
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
