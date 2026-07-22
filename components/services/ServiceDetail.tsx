'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronDown, Rocket, Code2, Globe } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import CTA from '@/components/home/CTA';

interface ServiceData {
  title: string;
  heroSubtitle: string;
  benefits: { title: string; desc: string }[];
  process: string[];
  faqs: { q: string; a: string }[];
}

export default function ServiceDetail({ data, slug }: { data: ServiceData, slug: string }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-brand-dark min-h-screen text-white pt-24">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-ai-grid bg-repeat opacity-[0.03]" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-cyan/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-extrabold mb-6"
          >
            {data.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 mb-10 leading-relaxed"
          >
            {data.heroSubtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/contact">
               <button className="px-8 py-4 bg-brand-cyan text-brand-dark rounded-xl font-bold hover:bg-white transition-colors flex items-center gap-2 mx-auto">
                 Book Consultation <ArrowRight size={18} />
               </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Core <span className="ai-gradient-text">Benefits</span></h2>
            <p className="text-slate-400">Why this service drives business growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.benefits.map((benefit, i) => (
              <div key={i} className="glass-morphism p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center mb-6">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-brand-dark/50 border-y border-white/5 relative">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Our <span className="ai-gradient-text">Process</span></h2>
            <p className="text-slate-400">A transparent and proven methodology.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {data.process.map((step, i) => (
              <div key={i} className="flex flex-col items-center p-6 w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] lg:w-[calc(20%-20px)] glass-morphism rounded-2xl border border-white/5 text-center">
                 <div className="text-4xl font-bold text-white/10 mb-2">0{i + 1}</div>
                 <h4 className="font-bold text-white mb-2">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Teaser */}
      <section className="py-24 relative text-center">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Proven <span className="text-brand-fuchsia">Success</span></h2>
           <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
             Explore how we've implemented similar solutions for startups and enterprises globally, delivering measurable ROI.
           </p>
           <Link href="/portfolio">
             <button className="px-8 py-4 border border-white/10 rounded-xl text-white font-bold hover:bg-white/5 transition-colors">
               View Case Studies
             </button>
           </Link>
         </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-brand-dark/50 border-t border-white/5 relative">
        <div className="container mx-auto px-4 max-w-3xl">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Frequently Asked <span className="ai-gradient-text">Questions</span></h2>
          </div>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <div key={i} className="glass-morphism rounded-2xl border border-white/5 overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-bold text-lg">{faq.q}</span>
                  <ChevronDown className={`transform transition-transform ${openFaq === i ? 'rotate-180 text-brand-cyan' : 'text-slate-400'}`} />
                </button>
                {openFaq === i && (
                  <div className="p-6 pt-0 text-slate-400 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
