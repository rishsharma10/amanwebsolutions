import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { blogPosts, BlogPost } from '@/lib/blogData';
import { notFound } from 'next/navigation';
import { Calendar, ArrowLeft, Clock, ArrowRight, User, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

interface Props {
  params: {
    id: string;
  };
}

function resolvePost(param: string): BlogPost | undefined {
  return blogPosts.find((p) => p.id === param || p.slug === param);
}

export function generateStaticParams() {
  const ids = blogPosts.map((p) => ({ id: p.id }));
  const slugs = blogPosts.map((p) => ({ id: p.slug }));
  return [...ids, ...slugs];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = resolvePost(params.id);
  if (!post) return { title: 'Article Not Found | Vidhyonix' };

  const canonicalUrl = `https://vidhyonix.com/blog/${post.slug}`;

  return {
    title: `${post.title} | Vidhyonix Blog`,
    description: post.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonicalUrl,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updatedDate,
      authors: [post.author.name],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ]
    }
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = resolvePost(params.id);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    image: post.image,
    datePublished: post.date,
    dateModified: post.updatedDate || post.date,
    author: [
      {
        '@type': 'Person',
        name: post.author.name,
        jobTitle: post.author.role,
      }
    ],
    publisher: {
      '@type': 'Organization',
      name: 'Vidhyonix IT Solutions',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vidhyonix.com/favicon.png'
      }
    },
    description: post.excerpt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://vidhyonix.com/blog/${post.slug}`
    }
  };

  return (
    <main className="relative min-h-screen bg-brand-dark overflow-hidden text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />

      {/* Hero */}
      <section className="relative pt-36 pb-12 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-brand-cyan mb-6 transition-colors"
          >
            <ArrowLeft size={13} /> Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-mono text-slate-400">
            <span className="text-brand-cyan uppercase bg-brand-cyan/10 px-2.5 py-1 rounded-md border border-brand-cyan/20">
              {post.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar size={13} /> {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock size={13} /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 pt-2">
            <div className="w-10 h-10 rounded-full bg-brand-cyan/20 text-brand-cyan flex items-center justify-center font-bold">
              {post.author.name[0]}
            </div>
            <div>
              <span className="block text-sm font-bold text-white">{post.author.name}</span>
              <span className="text-xs text-slate-400">{post.author.role}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Table of Contents */}
            {post.tableOfContents && post.tableOfContents.length > 0 && (
              <div className="lg:col-span-12">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 max-w-2xl">
                  <span className="text-xs font-mono uppercase text-brand-cyan font-bold tracking-wider block">
                    Table of Contents
                  </span>
                  <ul className="space-y-2 text-xs">
                    {post.tableOfContents.map((toc) => (
                      <li key={toc.id}>
                        <a href={`#${toc.id}`} className="text-slate-300 hover:text-brand-cyan transition-colors">
                          {toc.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Content Body */}
            <div className="lg:col-span-12 space-y-6 text-slate-300 leading-relaxed text-sm md:text-base">
              {post.content.map((paragraph, i) => (
                <p key={i} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Related Services & Case Studies */}
            <div className="lg:col-span-12 pt-10 border-t border-white/10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {post.relatedServices && post.relatedServices.length > 0 && (
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                    <span className="text-xs font-mono text-brand-cyan uppercase font-bold tracking-wider block">
                      Related Engineering Services
                    </span>
                    <div className="space-y-2">
                      {post.relatedServices.map((srv, i) => (
                        <Link
                          key={i}
                          href={`/services/${srv.slug}`}
                          className="flex items-center justify-between text-xs text-white hover:text-brand-cyan p-2.5 rounded-lg bg-brand-dark transition-colors"
                        >
                          <span>{srv.title}</span>
                          <ArrowRight size={13} />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {post.relatedCaseStudies && post.relatedCaseStudies.length > 0 && (
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                    <span className="text-xs font-mono text-brand-violet uppercase font-bold tracking-wider block">
                      Related Case Studies
                    </span>
                    <div className="space-y-2">
                      {post.relatedCaseStudies.map((cs, i) => (
                        <Link
                          key={i}
                          href={`/case-studies/${cs.slug}`}
                          className="flex items-center justify-between text-xs text-white hover:text-brand-violet p-2.5 rounded-lg bg-brand-dark transition-colors"
                        >
                          <span>{cs.title}</span>
                          <ArrowRight size={13} />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* In-article CTA */}
              <div className="p-8 rounded-3xl bg-gradient-to-r from-brand-cyan/10 via-brand-violet/10 to-transparent border border-white/10 text-center space-y-4">
                <h3 className="text-xl font-heading font-bold text-white">
                  Looking to implement this architecture in your business?
                </h3>
                <p className="text-slate-400 text-xs md:text-sm max-w-lg mx-auto">
                  Schedule a confidential 30-minute discovery consultation with our lead product architects.
                </p>
                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-cyan text-brand-dark rounded-xl font-heading font-bold text-xs uppercase tracking-wider hover:bg-white transition-all"
                  >
                    <span>Book Discovery Call</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
