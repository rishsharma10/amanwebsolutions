import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { caseStudiesData, CaseStudyItem } from '@/lib/caseStudiesData';
import {
  ChevronRight, ArrowRight, CheckCircle2, ExternalLink,
  Code2, Sparkles, Building2, Layers
} from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(caseStudiesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = caseStudiesData[params.slug];
  if (!study) return { title: 'Case Study Not Found | Vidhyonix' };

  const canonicalUrl = `https://vidhyonix.com/case-studies/${params.slug}`;

  return {
    title: `${study.clientName} Case Study | ${study.title} | Vidhyonix`,
    description: study.summary,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${study.clientName} Case Study | Vidhyonix`,
      description: study.summary,
      url: canonicalUrl,
      type: 'article',
      images: [
        {
          url: study.heroImage,
          width: 1200,
          height: 630,
          alt: `${study.clientName} - Vidhyonix Case Study`,
        }
      ]
    }
  };
}

export default function CaseStudyPage({ params }: Props) {
  const study = caseStudiesData[params.slug];

  if (!study) {
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
        'name': 'Case Studies',
        'item': 'https://vidhyonix.com/case-studies'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': study.clientName,
        'item': `https://vidhyonix.com/case-studies/${study.slug}`
      }
    ]
  };

  return (
    <main className="bg-brand-dark min-h-screen text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-32 pb-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 font-mono">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
          <ChevronRight size={12} />
          <span className="text-brand-cyan">{study.clientName}</span>
        </nav>
      </div>

      {/* 1. Hero */}
      <section className="relative py-16 md:py-24 border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan bg-brand-cyan/10 px-3.5 py-1.5 rounded-full border border-brand-cyan/20">
              {study.industry}
            </span>
            <span className="text-xs font-mono text-slate-400">
              Client: <strong className="text-white">{study.clientName}</strong>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            {study.title}
          </h1>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            {study.summary}
          </p>

          {study.liveUrl && (
            <div className="pt-2">
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-heading font-bold text-brand-cyan hover:underline"
              >
                <span>Visit Live Platform</span>
                <ExternalLink size={13} />
              </a>
            </div>
          )}
        </div>
      </section>

      {/* 2. Challenge & Goals */}
      <section className="py-24 bg-white/5 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <span className="text-red-400 text-xs font-mono uppercase font-bold tracking-widest block">
                The Core Challenge
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
                What Problem Were We Solving?
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {study.problem}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-brand-dark/90 border border-white/10 space-y-4">
              <span className="text-brand-cyan text-xs font-mono uppercase font-bold tracking-widest block">
                Key Strategic Goals
              </span>
              <ul className="space-y-3 text-xs md:text-sm text-slate-300">
                {study.goals.map((goal, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-brand-cyan shrink-0 mt-0.5" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Technical Solution */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-5xl space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-brand-cyan text-xs font-mono uppercase font-bold tracking-widest block">
              Engineering Execution
            </span>
            <h2 className="text-3xl font-heading font-bold text-white">
              The Engineering Solution
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              {study.solution}
            </p>
          </div>

          {/* Architecture Details */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-3">
            <span className="text-xs font-mono text-brand-violet uppercase font-bold tracking-wider block">
              System Architecture
            </span>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-mono">
              {study.architecture}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Features & Capabilities */}
      <section className="py-24 bg-white/5 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-brand-cyan text-xs font-mono uppercase font-bold tracking-widest block">
              What We Shipped
            </span>
            <h2 className="text-3xl font-heading font-bold text-white">
              Key Features & Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {study.features.map((feat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-brand-dark/90 border border-white/10 space-y-3">
                <span className="font-mono text-xs text-brand-cyan font-bold block">0{i + 1}</span>
                <h3 className="text-lg font-heading font-bold text-white">{feat.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Technology Stack */}
      <section className="py-20 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          <span className="text-brand-violet text-xs font-mono uppercase font-bold tracking-widest block">
            Tech Stack Employed
          </span>
          <div className="flex flex-wrap gap-2">
            {study.techStack.map((tech, i) => (
              <span key={i} className="px-4 py-2 bg-white/5 rounded-xl text-xs font-mono text-slate-300 border border-white/10">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Qualitative Outcomes */}
      <section className="py-24 bg-white/5 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-5xl space-y-8">
          <span className="text-emerald-400 text-xs font-mono uppercase font-bold tracking-widest block">
            Qualitative Impact
          </span>
          <h2 className="text-3xl font-heading font-bold text-white">
            Project Outcomes & Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {study.outcomes.map((out, i) => (
              <div key={i} className="p-6 rounded-2xl bg-brand-dark/80 border border-white/10 space-y-2">
                <CheckCircle2 size={20} className="text-emerald-400" />
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed">{out}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Related Services & Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              Related Capabilities
            </span>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              {study.relatedServices.map((srv, i) => (
                <Link
                  key={i}
                  href={`/services/${srv.slug}`}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors"
                >
                  {srv.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 space-y-4">
            <h2 className="text-3xl font-heading font-extrabold text-white">
              {study.ctaHeading}
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              {study.ctaSubheading}
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-cyan to-brand-violet text-brand-dark rounded-xl font-heading font-bold text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition-all"
              >
                <span>Discuss Your Project</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
