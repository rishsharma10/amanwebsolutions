import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { industriesData, IndustryData } from '@/lib/industriesData';
import {
  Building2, ArrowRight, CheckCircle2, ChevronRight,
  Sparkles, Cpu, Layers, Link2, ExternalLink
} from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = industriesData[params.slug];
  if (!data) return { title: 'Industry Not Found | Vidhyonix' };

  const canonicalUrl = `https://vidhyonix.com/industries/${params.slug}`;

  return {
    title: `${data.title} | Vidhyonix`,
    description: data.heroSubheadline,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${data.title} | Vidhyonix IT Solutions`,
      description: data.heroSubheadline,
      url: canonicalUrl,
      type: 'website'
    }
  };
}

export default function IndustryPage({ params }: Props) {
  const data = industriesData[params.slug];

  if (!data) {
    notFound();
  }

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
        'name': 'Industries',
        'item': 'https://vidhyonix.com/industries'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': data.title,
        'item': `https://vidhyonix.com/industries/${data.slug}`
      }
    ]
  };

  const faqSchema = data.faqs && data.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': data.faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.a
      }
    }))
  } : null;

  return (
    <main className="bg-brand-dark min-h-screen text-white">
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

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-32 pb-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 font-mono">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/industries" className="hover:text-white transition-colors">Industries</Link>
          <ChevronRight size={12} />
          <span className="text-brand-cyan">{data.slug.replace('-', ' ')}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 border-b border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-brand-cyan/10 via-brand-violet/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan uppercase tracking-wider">
            <Building2 size={13} /> {data.title}
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
            {data.heroHeadline}
          </h1>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            {data.heroSubheadline}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-cyan to-brand-violet text-brand-dark rounded-xl font-heading font-bold text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition-all flex items-center justify-center gap-2"
            >
              <span>Discuss Your Industry Project</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Problem & Business Challenges */}
      <section className="py-24 bg-white/5 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-red-400 text-xs font-mono uppercase tracking-widest block font-bold">
              The Operational Problem
            </span>
            <h2 className="text-3xl font-heading font-bold text-white">
              Challenges Facing Modern Teams
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              {data.industryProblem}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.challenges.map((c, i) => (
              <div key={i} className="p-6 rounded-2xl bg-brand-dark/90 border border-white/10 space-y-3">
                <span className="font-mono text-xs text-red-400 font-bold block">Challenge 0{i + 1}</span>
                <h3 className="text-lg font-heading font-bold text-white">{c.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vidhyonix Solutions */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-brand-cyan text-xs font-mono uppercase tracking-widest block font-bold">
              Our Solution
            </span>
            <h2 className="text-3xl font-heading font-bold text-white">
              Tailored Engineering Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.solutions.map((s, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:border-brand-cyan/40 transition-all">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="text-lg font-heading font-bold text-white">{s.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI, Automation & Software Opportunities */}
      <section className="py-24 bg-white/5 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-6xl space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-brand-cyan text-xs font-mono uppercase tracking-widest block font-bold">
              Technology Vectors
            </span>
            <h2 className="text-3xl font-heading font-bold text-white">
              AI, Automation & Software Opportunities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Opportunities */}
            <div className="p-8 rounded-3xl bg-brand-dark/90 border border-brand-cyan/20 space-y-6">
              <div className="flex items-center gap-2 text-brand-cyan font-heading font-bold text-sm uppercase">
                <Sparkles size={16} />
                <span>AI Opportunities</span>
              </div>
              <div className="space-y-4">
                {data.aiOpportunities.map((item, i) => (
                  <div key={i} className="space-y-1">
                    <h3 className="text-base font-bold text-white">{item.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Automation Opportunities */}
            <div className="p-8 rounded-3xl bg-brand-dark/90 border border-brand-violet/20 space-y-6">
              <div className="flex items-center gap-2 text-brand-violet font-heading font-bold text-sm uppercase">
                <Cpu size={16} />
                <span>Automation Opportunities</span>
              </div>
              <div className="space-y-4">
                {data.automationOpportunities.map((item, i) => (
                  <div key={i} className="space-y-1">
                    <h3 className="text-base font-bold text-white">{item.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Software Opportunities */}
            <div className="p-8 rounded-3xl bg-brand-dark/90 border border-emerald-500/20 space-y-6">
              <div className="flex items-center gap-2 text-emerald-400 font-heading font-bold text-sm uppercase">
                <Layers size={16} />
                <span>Software Opportunities</span>
              </div>
              <div className="space-y-4">
                {data.softwareOpportunities.map((item, i) => (
                  <div key={i} className="space-y-1">
                    <h3 className="text-base font-bold text-white">{item.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Integrations */}
          <div className="p-8 rounded-2xl bg-brand-dark/60 border border-white/5 space-y-4">
            <div className="flex items-center gap-2 text-slate-300 font-heading font-bold text-sm">
              <Link2 size={16} className="text-brand-cyan" />
              <span>Relevant Integrations & Supported Protocols</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.integrations.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-white/5 rounded-lg text-xs font-mono text-slate-300 border border-white/10">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Feature */}
      {data.caseStudy && (
        <section className="py-24 border-b border-white/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-brand-cyan/10 via-brand-violet/10 to-transparent border border-white/10 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-brand-cyan uppercase tracking-widest">
                  Featured Case Study
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {data.caseStudy.clientName}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
                {data.caseStudy.title}
              </h2>

              <div className="space-y-4 text-xs md:text-sm text-slate-300 leading-relaxed">
                <p><strong className="text-white">Challenge:</strong> {data.caseStudy.problem}</p>
                <p><strong className="text-white">Engineering Solution:</strong> {data.caseStudy.solution}</p>
                <p><strong className="text-white">Qualitative Outcome:</strong> {data.caseStudy.impact}</p>
              </div>

              {data.caseStudy.link && (
                <div className="pt-2">
                  <Link
                    href={data.caseStudy.link}
                    className="inline-flex items-center gap-2 text-xs font-heading font-bold text-brand-cyan hover:text-white transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="py-24 border-b border-white/5">
          <div className="container mx-auto px-4 max-w-3xl space-y-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white text-center">
              Industry FAQs
            </h2>
            <div className="space-y-4">
              {data.faqs.map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                  <h3 className="text-base font-heading font-bold text-white">{faq.q}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h2 className="text-3xl font-heading font-extrabold text-white">
            Ready to modernise your {data.slug.replace('-', ' ')} operations?
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Let’s discuss your current systems and architect a practical, high-ROI digital roadmap.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-cyan to-brand-violet text-brand-dark rounded-xl font-heading font-bold text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition-all"
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
