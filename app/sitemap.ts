import { MetadataRoute } from 'next';
import { servicesData } from '@/lib/servicesData';
import { industriesData } from '@/lib/industriesData';
import { caseStudiesData } from '@/lib/caseStudiesData';
import { technologiesData } from '@/lib/technologiesData';
import { blogPosts } from '@/lib/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vidhyonix.com';
  const now = new Date().toISOString();

  // 1. Core Static Pages
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/industries',
    '/case-studies',
    '/technologies',
    '/free-tools',
    '/blog',
    '/portfolio',
    '/contact',
    '/team',
    '/partner-with-us',
    '/privacy-policy',
    '/terms',
    '/cookies',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. Services (All 21 Commercial Service Offerings)
  const serviceRoutes = Object.keys(servicesData).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // 3. Industries (All 8 Industry Solution Pages)
  const industryRoutes = Object.keys(industriesData).map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // 4. Case Studies (All 6 Real Project Landing Pages)
  const caseStudyRoutes = Object.keys(caseStudiesData).map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 5. Technologies (All 6 Deep Technology Guides)
  const technologyRoutes = Object.keys(technologiesData).map((slug) => ({
    url: `${baseUrl}/technologies/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  // 6. Free Assessment Tools
  const freeToolRoutes = [
    '/free-tools/ai-readiness-assessment',
    '/free-tools/ai-automation-roi-calculator',
    '/free-tools/saas-mvp-cost-calculator',
    '/free-tools/website-development-cost-calculator',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // 7. Blog Posts (Clean Slug URLs)
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedDate || now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...caseStudyRoutes,
    ...technologyRoutes,
    ...freeToolRoutes,
    ...blogRoutes,
  ];
}
