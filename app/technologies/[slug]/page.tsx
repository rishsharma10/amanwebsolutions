import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { technologiesData, TechnologyItem } from '@/lib/technologiesData';
import {
  ChevronRight, ArrowRight, CheckCircle2, Terminal,
  Code2, Sparkles, Building2, Layers
} from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(technologiesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tech = technologiesData[params.slug];
  if (!tech) return { title: 'Technology Guide Not Found | Vidhyonix' };

  const canonicalUrl = `https://vidhyonix.com/technologies/${params.slug}`;

  return {
    title: `${tech.name} Architecture & Development Guide | Vidhyonix`,
    description: tech.heroDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${tech.name} Architecture Guide | Vidhyonix IT Solutions`,
      description: tech.heroDescription,
      url: canonicalUrl,
      type: 'article'
    }
  };
}

export default function TechnologyDetailPage({ params }: Props) {
  const tech = technologiesData[params.slug];

  if (!tech) {
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
        'name': 'Technologies',
        'item': 'https://vidhyonix.com/technologies'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': tech.name,
        'item': `https://vidhyonix.com/technologies/${tech.slug}`
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
          <Link href="/technologies" className="hover:text-white transition-colors">Technologies</Link>
          <ChevronRight size={12} />
          <span className="text-brand-cyan">{tech.name}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan bg-brand-cyan/10 px-3.5 py-1.5 rounded-full border border-brand-cyan/20 inline-block">
            {tech.category}
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
            {tech.name} Development & Architecture
          </h1>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            {tech.heroDescription}
          </p>

          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-cyan to-brand-violet text-brand-dark rounded-xl font-heading font-bold text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition-all"
            >
              <span>Discuss {tech.name} Engineering</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* What It Is & When To Use */}
      <section className="py-24 bg-white/5 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <span className="text-brand-cyan text-xs font-mono uppercase font-bold tracking-widest block">
                Definition & Foundation
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
                What is {tech.name}?
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {tech.whatItIs}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-brand-dark/90 border border-white/10 space-y-4">
              <span className="text-brand-violet text-xs font-mono uppercase font-bold tracking-widest block">
                When to Choose {tech.name}
              </span>
              <ul className="space-y-3 text-xs md:text-sm text-slate-300">
                {tech.whenToUse.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-brand-cyan shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose It */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-brand-cyan text-xs font-mono uppercase font-bold tracking-widest block">
              Architectural Advantages
            </span>
            <h2 className="text-3xl font-heading font-bold text-white">
              Why We Standardize on {tech.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tech.whyChooseIt.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <span className="font-mono text-xs text-brand-cyan font-bold block">0{i + 1}</span>
                <h3 className="text-lg font-heading font-bold text-white">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vidhyonix Capabilities */}
      <section className="py-24 bg-white/5 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-5xl space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-emerald-400 text-xs font-mono uppercase font-bold tracking-widest block">
              Engineering Expertise
            </span>
            <h2 className="text-3xl font-heading font-bold text-white">
              Vidhyonix {tech.name} Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tech.vidhyonixCapabilities.map((cap, i) => (
              <div key={i} className="p-4 rounded-xl bg-brand-dark/90 border border-white/5 flex items-start gap-3">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 font-medium">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services & Case Studies */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <span className="text-brand-cyan text-xs font-mono uppercase font-bold tracking-widest block">
                Related Services
              </span>
              <div className="space-y-2">
                {tech.relevantServices.map((srv, i) => (
                  <Link
                    key={i}
                    href={`/services/${srv.slug}`}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-brand-cyan/40 text-xs font-medium text-slate-300 hover:text-brand-cyan flex items-center justify-between transition-colors group"
                  >
                    <span>{srv.title}</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-brand-violet text-xs font-mono uppercase font-bold tracking-widest block">
                Relevant Case Studies
              </span>
              <div className="space-y-2">
                {tech.relatedCaseStudies.map((cs, i) => (
                  <Link
                    key={i}
                    href={`/case-studies/${cs.slug}`}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-brand-violet/40 text-xs font-medium text-slate-300 hover:text-brand-violet flex items-center justify-between transition-colors group"
                  >
                    <div>
                      <span className="block font-bold text-white">{cs.clientName}</span>
                      <span className="text-[11px] text-slate-400">{cs.title}</span>
                    </div>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {tech.faqs && tech.faqs.length > 0 && (
        <section className="py-24 border-b border-white/5">
          <div className="container mx-auto px-4 max-w-3xl space-y-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white text-center">
              {tech.name} Engineering FAQs
            </h2>
            <div className="space-y-4">
              {tech.faqs.map((faq, i) => (
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
            Looking to architect your next system with {tech.name}?
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Consult directly with our senior full-stack architects to review system constraints and performance goals.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-cyan to-brand-violet text-brand-dark rounded-xl font-heading font-bold text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition-all"
            >
              <span>Schedule Free Tech Discovery</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
