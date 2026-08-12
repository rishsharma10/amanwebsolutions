import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blogData';
import { industriesData } from '@/lib/industriesData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vidhyonix.com';

  // Static core pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/contact',
    '/product',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Product pages (our own products)
  const productPages = [
    {
      url: 'https://cafe.vidhyonix.com',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: 'https://aiinterview.skillytalk.com',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  // Dynamic blog posts
  const dynamicBlogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Dynamic industry pages
  const dynamicIndustryPages = Object.keys(industriesData).map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...productPages, ...dynamicBlogPages, ...dynamicIndustryPages];
}
