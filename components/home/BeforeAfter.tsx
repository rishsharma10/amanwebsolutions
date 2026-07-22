'use client';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { SectionReveal } from '@/components/PageTransition';

export default function BeforeAfter() {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[150px] -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 mb-6 rounded-full bg-white/5 text-brand-cyan border border-brand-cyan/20 font-medium text-sm">
              Real Impact
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">
              The Cost of <span className="text-red-400">Inefficiency</span> vs. <br className="hidden md:block" /> The Power of <span className="text-green-400">AI Automation</span>
            </h2>
            <p className="text-gray-400 text-lg">
              We don't just write code. We eliminate bottlenecks, automate manual workflows, and engineer scalable systems that directly increase your profit margins.
            </p>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Before Column */}
          <SectionReveal>
            <div className="bg-[#1a1515] border border-red-500/20 rounded-3xl p-8 md:p-12 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500">
                  <XCircle size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Without Vidhyonix</h3>
              </div>
              <ul className="space-y-6">
                {[
                  'Wasting 30+ hours/week on manual data entry and disjointed systems.',
                  'Losing customers due to slow load times and buggy user experiences.',
                  'Paying for bloatware and off-the-shelf software that doesn\'t fit your workflow.',
                  'High server costs due to unoptimized architecture and messy code.',
                  'Guessing on business decisions without real-time AI predictive analytics.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <XCircle className="text-red-500/50 mt-1 shrink-0" size={20} />
                    <span className="text-slate-400 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>

          {/* After Column */}
          <SectionReveal>
            <div className="bg-[#12201d] border border-green-500/20 rounded-3xl p-8 md:p-12 h-full shadow-[0_0_50px_rgba(34,197,94,0.05)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px]" />
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-400">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">With Vidhyonix AI</h3>
              </div>
              <ul className="space-y-6 relative z-10">
                {[
                  'Custom AI agents autonomously handle support, scheduling, and data sync.',
                  'Lightning-fast Next.js architecture driving up conversion rates by 40%.',
                  'Bespoke software built exactly for your unique operational workflow.',
                  'Cloud-native, scalable infrastructure that reduces AWS bills by up to 60%.',
                  'Real-time dashboards that leverage machine learning to predict market trends.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="text-green-400 mt-1 shrink-0" size={20} />
                    <span className="text-slate-300 leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
