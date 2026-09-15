'use client';

import Link from 'next/link';
import { ArrowRight, Code2 } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export default function TechStackSection() {
  const stack = [
    { name: 'Next.js', category: 'Full-Stack Framework', desc: 'App Router, Server Actions, and SSR for sub-second page performance.', slug: 'nextjs' },
    { name: 'TypeScript', category: 'Type Safety', desc: 'Strict compile-time type verification across entire client and server repos.', slug: 'typescript' },
    { name: 'React', category: 'UI Components', desc: 'Accessible component systems, reactive state, and fluid animations.', slug: 'react' },
    { name: 'Node.js', category: 'Backend Runtime', desc: 'Asynchronous microservices, event queues, and high-throughput APIs.', slug: 'nodejs' },
    { name: 'Python', category: 'AI & Data Science', desc: 'PyTorch, LangChain, RAG embeddings, and FastAPIs for intelligent models.', slug: 'python' },
    { name: 'AWS', category: 'Cloud Infrastructure', desc: 'Auto-scaling compute, container orchestration, and multi-AZ database backups.', slug: 'aws' },
    { name: 'PostgreSQL', category: 'Relational Database', desc: 'Robust multi-tenant data isolation with pgvector semantic search support.', slug: '' },
    { name: 'Tailwind CSS', category: 'Modern Styling', desc: 'Predictable design systems, consistent spacing tokens, and zero CSS bloat.', slug: '' },
  ];

  return (
    <section className="py-24 relative bg-brand-dark/80 border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-brand-cyan text-xs font-mono uppercase tracking-widest block font-bold">
              10. Production Tooling
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
              Our Modern Technology Stack
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              We choose battle-tested, open technologies that maximize developer productivity, speed to market, and long-term maintainability.
            </p>
          </div>
          <Link
            href="/technologies"
            onClick={() => trackEvent('cta_click', { location: 'tech_stack_header', label: 'View Tech Guides' })}
            className="inline-flex items-center gap-2 text-xs font-heading font-bold text-brand-cyan hover:text-white transition-colors"
          >
            <span>Read Technology Guides</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stack.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all space-y-2 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand-cyan block">
                  {item.category}
                </span>
                <h3 className="text-lg font-heading font-bold text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {item.slug && (
                <div className="pt-4 border-t border-white/5">
                  <Link
                    href={`/technologies/${item.slug}`}
                    className="text-[11px] font-heading font-bold text-slate-300 hover:text-brand-cyan inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Architecture Guide</span>
                    <ArrowRight size={11} />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
