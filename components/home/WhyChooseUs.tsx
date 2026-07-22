'use client';

import { motion } from 'framer-motion';
import { SectionReveal } from '@/components/PageTransition';
import { CheckCircle2, Zap, ShieldCheck, Rocket, MessagesSquare, BarChart, Clock, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

const reasons = [
  {
    title: 'AI-First Engineering',
    description: 'We don\'t just add AI as an afterthought. We architect systems from the ground up to leverage machine learning and automation for maximum efficiency.',
    icon: Zap,
    color: 'text-brand-cyan',
    bg: 'bg-brand-cyan/10 border-brand-cyan/20'
  },
  {
    title: 'Startup-Friendly Agility',
    description: 'We understand runway and burn rate. Our agile process ensures you get a market-ready product fast without sacrificing quality or breaking the bank.',
    icon: Rocket,
    color: 'text-brand-violet',
    bg: 'bg-brand-violet/10 border-brand-violet/20'
  },
  {
    title: 'Rapid Delivery',
    description: 'Time to market is critical. Our proven frameworks and proprietary tools allow us to deliver robust software weeks faster than traditional agencies.',
    icon: Clock,
    color: 'text-brand-fuchsia',
    bg: 'bg-brand-fuchsia/10 border-brand-fuchsia/20'
  },
  {
    title: 'Scalable Architecture',
    description: 'Build it right the first time. We design your infrastructure to effortlessly handle 10 users or 10 million users without costly rewrites.',
    icon: Layers,
    color: 'text-brand-cyan',
    bg: 'bg-brand-cyan/10 border-brand-cyan/20'
  },
  {
    title: 'Radical Transparency',
    description: 'No technical jargon or hidden fees. You get direct access to developers, daily progress updates, and complete ownership of your codebase.',
    icon: MessagesSquare,
    color: 'text-brand-violet',
    bg: 'bg-brand-violet/10 border-brand-violet/20'
  },
  {
    title: 'Long-Term Partnership',
    description: 'We don\'t just launch and leave. We provide ongoing support, continuous optimization, and strategic guidance as your business evolves.',
    icon: BarChart,
    color: 'text-brand-fuchsia',
    bg: 'bg-brand-fuchsia/10 border-brand-fuchsia/20'
  },
  {
    title: 'Security-First Approach',
    description: 'Your data is your most valuable asset. We implement enterprise-grade encryption and security protocols to protect you from day one.',
    icon: ShieldCheck,
    color: 'text-brand-cyan',
    bg: 'bg-brand-cyan/10 border-brand-cyan/20'
  },
  {
    title: 'Modern Technology Stack',
    description: 'We use the same battle-tested technologies trusted by tech giants, ensuring your product is fast, reliable, and future-proof.',
    icon: CheckCircle2,
    color: 'text-brand-violet',
    bg: 'bg-brand-violet/10 border-brand-violet/20'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-brand-dark/50 border-t border-white/5 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-violet/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
             <span className="inline-block py-1 px-3 mb-6 rounded-full bg-white/5 text-white border border-white/10 font-medium text-sm">
              The Vidhyonix Advantage
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Why Forward-Thinking Brands <span className="ai-gradient-text">Choose Us</span>
            </h2>
            <p className="text-slate-400 text-lg">
              We focus on business outcomes, not just writing code. Our approach is designed to maximize your ROI and minimize your technical risk.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <SectionReveal key={idx} className="relative group">
              <div className="h-full glass-morphism rounded-3xl p-8 border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20">
                <div className={cn("w-12 h-12 rounded-xl border flex items-center justify-center mb-6 transition-transform group-hover:scale-110", reason.bg, reason.color)}>
                  <reason.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
