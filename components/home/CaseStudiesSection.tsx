'use client';

import Link from 'next/link';
import { caseStudiesData } from '@/lib/caseStudiesData';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export default function CaseStudiesSection() {
  const featuredSlugs = ['madam-jan', 'skillytalk-ai', 'evitavonni', 'sasco-student-living'];
  const featured = featuredSlugs.map((slug) => caseStudiesData[slug]).filter(Boolean);

  return (
    <section className="py-24 relative bg-brand-dark border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-brand-cyan text-xs font-mono uppercase tracking-widest block font-bold">
              09. Proven Work
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
              Real Work Engineered for Real Businesses
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Explore production applications and systems we have architected and deployed for ambitious clients.
            </p>
          </div>
          <Link
            href="/case-studies"
            onClick={() => trackEvent('cta_click', { location: 'case_studies_header', label: 'View All Case Studies' })}
            className="inline-flex items-center gap-2 text-xs font-heading font-bold text-brand-cyan hover:text-white transition-colors"
          >
            <span>View All Case Studies</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((study, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
                    {study.industry}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {study.clientName}
                  </span>
                </div>

                <h3 className="text-2xl font-heading font-bold text-white group-hover:text-brand-cyan transition-colors">
                  {study.title}
                </h3>

                <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                  {study.summary}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {study.techStack.map((tech, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 bg-white/5 rounded-lg text-[11px] font-mono text-slate-400 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-white/5 flex items-center justify-between">
                <Link
                  href={`/case-studies/${study.slug}`}
                  onClick={() => trackEvent('case_study_view', { case_study_slug: study.slug, location: 'home_card' })}
                  className="inline-flex items-center gap-2 text-xs font-heading font-bold text-white group-hover:text-brand-cyan transition-colors"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                {study.liveUrl && (
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Visit Live</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
