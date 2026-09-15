'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function HomeFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Who owns the source code and intellectual property upon project completion?',
      a: 'You retain 100% full intellectual property and source code ownership. From day one, all repositories, design systems, database models, and deployment configurations are your company assets. We impose zero proprietary vendor lock-in or ongoing platform royalties.'
    },
    {
      q: 'How long does an initial software or MVP build typically take?',
      a: 'A focused, production-grade Minimum Viable Product (MVP) or custom automation system typically takes 4 to 8 weeks. Larger enterprise platforms or complex multi-tenant SaaS architectures usually span 8 to 16 weeks, delivered in predictable two-week sprints with staging previews.'
    },
    {
      q: 'How does Vidhyonix ensure our company and customer data remains secure when deploying AI?',
      a: 'We architect AI pipelines that deploy directly inside your dedicated cloud environment (AWS or GCP VPC) or on-premise infrastructure. We enforce strict role-based access control, data encryption in transit and at rest, and we never train public third-party foundation models on your private data.'
    },
    {
      q: 'Can Vidhyonix integrate with our existing legacy ERP, CRM, and databases?',
      a: 'Yes. A large percentage of our engineering work involves connecting modern web storefronts and AI automation agents to existing legacy systems (SAP, NetSuite, Salesforce, custom on-premise SQL databases, and proprietary POS terminals) through secure, queue-backed API bridges.'
    },
    {
      q: 'What is your engagement and pricing model?',
      a: 'We work on milestone-based fixed-scope contracts for clearly defined initial builds, and dedicated sprint-based partnerships for continuous product iteration. Every engagement includes a detailed technical specification, architecture diagrams, and fixed delivery deliverables.'
    },
    {
      q: 'Do you provide ongoing support, hosting maintenance, and feature iterations after launch?',
      a: 'Yes. We provide structured Service Level Agreements (SLAs) covering 24/7 infrastructure uptime monitoring, proactive security patching, performance optimization, and scheduled development hours for continuous feature iteration.'
    }
  ];

  return (
    <section className="py-24 relative bg-brand-dark/80 border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <div className="text-center mb-16 space-y-3">
          <span className="text-brand-cyan text-xs font-mono uppercase tracking-widest block font-bold">
            14. Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Clear Answers to Common Questions
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Everything you need to know about our engineering approach, code ownership, and delivery timelines.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={cn(
                  "rounded-2xl border transition-all duration-200 overflow-hidden",
                  isOpen ? "bg-white/5 border-brand-cyan/30" : "bg-white/5 border-white/5 hover:border-white/10"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-white text-base md:text-lg"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={cn(
                      "text-slate-400 shrink-0 transition-transform duration-200",
                      isOpen && "rotate-180 text-brand-cyan"
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-300 text-xs md:text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
