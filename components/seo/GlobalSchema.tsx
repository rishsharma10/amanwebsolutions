import React from 'react';

export default function GlobalSchema() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://vidhyonix.com/#organization',
    name: 'Vidhyonix',
    url: 'https://vidhyonix.com',
    email: 'info@vidhyonix.com',
    description: 'A premium AI software development agency specializing in custom SaaS platforms, intelligent automation, and high-performance web and mobile applications.',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-555-0198',
        contactType: 'sales',
        areaServed: 'Worldwide',
        availableLanguage: ['en']
      }
    ],
    logo: {
      '@type': 'ImageObject',
      '@id': 'https://vidhyonix.com/#logo',
      url: 'https://vidhyonix.com/favicon.png',
      caption: 'Vidhyonix Logo'
    },
    sameAs: [
      'https://www.linkedin.com/company/vidhyonix',
      'https://twitter.com/vidhyonix'
    ]
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://vidhyonix.com/#website',
    url: 'https://vidhyonix.com',
    name: 'Vidhyonix',
    publisher: {
      '@id': 'https://vidhyonix.com/#organization'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://vidhyonix.com/?s={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
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
    </>
  );
}
