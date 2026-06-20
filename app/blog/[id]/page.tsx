import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { blogPosts } from '@/lib/blogData';
import { notFound } from 'next/navigation';
import { Calendar, Terminal, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import LeadMagnet from '@/components/blog/LeadMagnet';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

// Note: In Next.js 15 App Router, dynamic params in Server Components are Promises.
export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-brand-dark overflow-hidden">
      {/* Article JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            image: `https://vidhyonix.com${post.image}`,
            datePublished: new Date().toISOString(), // Mocking current date as published date for example
            dateModified: new Date().toISOString(),
            author: [{
              '@type': 'Organization',
              name: 'Vidhyonix',
              url: 'https://vidhyonix.com'
            }],
            publisher: {
              '@type': 'Organization',
              name: 'Vidhyonix',
              logo: {
                '@type': 'ImageObject',
                url: 'https://vidhyonix.com/favicon.png'
              }
            },
            description: post.excerpt,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://vidhyonix.com/blog/${post.id}`
            }
          })
        }}
      />
      {/* Background Visual System */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] bg-ai-grid bg-repeat" />
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-brand-cyan/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-brand-fuchsia/5 rounded-full blur-[150px]" />
      </div>

      <Header />
      
      <section className="relative pt-32 pb-20 z-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-brand-cyan hover:text-white mb-8 transition-colors">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
          
          <div className="inline-block px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-sm font-medium mb-6 uppercase tracking-widest">
            {post.category}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-6 text-sm text-slate-400 mb-12 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Terminal size={16} />
              {post.readTime}
            </div>
          </div>
          
          <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 border border-white/10">
            <Image 
              src={post.image} 
              alt={post.title} 
              fill
              className="object-cover"
            />
          </div>
          
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-a:text-brand-cyan">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              {post.excerpt}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc imperdiet sollicitudin. Phasellus vel lorem in quam tristique dignissim. Fusce in aliquet nisl. Nulla facilisi. Sed tristique risus sed nunc tincidunt, ut euismod sem tempus. Cras vel lorem ut nulla convallis luctus eu sed velit. Vestibulum in ante dapibus, vehicula sapien vitae, vulputate ex. In interdum massa in nibh convallis scelerisque. Curabitur sed arcu quis erat consequat dignissim quis vel enim. Nullam aliquet urna et turpis congue, id semper nunc viverra.
            </p>
            <h2>Understanding the Impact</h2>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla consequat ut sem ac egestas. Nulla condimentum iaculis diam a tempus. Phasellus vulputate risus at odio scelerisque, nec mollis nulla vestibulum. Phasellus imperdiet in mauris viverra pretium. Mauris egestas mi id tortor egestas cursus. Nulla posuere urna lectus, quis semper libero ultrices quis. Cras dignissim tempor felis nec scelerisque. Praesent euismod est id ante rhoncus aliquam.
            </p>
            <ul>
              <li>First crucial point regarding the topic at hand.</li>
              <li>Second important consideration for businesses.</li>
              <li>Final actionable takeaway to implement today.</li>
            </ul>
            <p>
              Nam luctus non neque egestas pulvinar. Mauris scelerisque est in lorem tempus vehicula. Ut in erat vel ligula imperdiet pretium a condimentum odio. Ut vitae dolor sed mi tempus ullamcorper vel hendrerit metus. Nam et nunc nisl. Nullam at tristique ipsum. Fusce condimentum odio nulla.
            </p>

            <LeadMagnet />
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
