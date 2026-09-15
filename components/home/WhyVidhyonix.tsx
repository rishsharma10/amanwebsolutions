'use client';

import {
  ShieldCheck, Users2, Code2, Lock,
  Zap, MessagesSquare, CheckCircle2
} from 'lucide-react';

export default function WhyVidhyonix() {
  const differentiators = [
    {
      icon: Users2,
      title: 'Senior Engineering-Led Execution',
      desc: 'No junior developer bait-and-switch. Your project is architected and built directly by experienced full-stack and AI engineers.'
    },
    {
      icon: Lock,
      title: '100% Intellectual Property Ownership',
      desc: 'You own every line of code, database model, API contract, and design token. No proprietary lock-in or ongoing platform royalties.'
    },
    {
      icon: MessagesSquare,
      title: 'Direct, Transparent Communication',
      desc: 'We integrate directly into your Slack or Teams. Get weekly progress updates, recorded walkthroughs, and live staging previews.'
    },
    {
      icon: Code2,
      title: 'Strict Production Code Quality',
      desc: 'We write strongly-typed TypeScript and modular relational schemas that pass institutional investor technical audits.'
    },
    {
      icon: Zap,
      title: 'Fast 4–8 Week Initial Delivery',
      desc: 'We prioritize core functional value over bloated feature creep, getting working software into the hands of real users quickly.'
    },
    {
      icon: ShieldCheck,
      title: 'Commercial Business Alignment',
      desc: 'We build technology to solve measurable business challenges—not to pad resumes with unnecessary tech hype.'
    }
  ];

  return (
    <section className="py-24 relative bg-brand-dark/80 border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <span className="text-brand-cyan text-xs font-mono uppercase tracking-widest block font-bold">
            12. The Difference
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Why Ambitious Teams Choose Vidhyonix
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            We are neither a bloated legacy agency nor a freelancer marketplace. We are a dedicated engineering partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((diff, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-cyan/30 transition-all space-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center">
                <diff.icon size={22} />
              </div>
              <h3 className="text-lg font-heading font-bold text-white">
                {diff.title}
              </h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                {diff.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
