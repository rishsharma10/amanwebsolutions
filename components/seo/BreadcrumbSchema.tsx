'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';

export default function BreadcrumbSchema() {
  const pathname = usePathname();

  if (!pathname || pathname === '/') return null;

  const paths = pathname.split('/').filter(Boolean);
  const siteUrl = 'https://vidhyonix.com';

  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      ...paths.map((path, index) => {
        // Capitalize and format the path string
        const name = path
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (char) => char.toUpperCase());

        const url = `${siteUrl}/${paths.slice(0, index + 1).join('/')}`;

        return {
          '@type': 'ListItem',
          position: index + 2,
          name,
          item: url,
        };
      }),
    ],
  };

  return (
    <Script
      id={`breadcrumb-schema-${pathname}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
    />
  );
}
