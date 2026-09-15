'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ShieldCheck, Lock, Code2, Cpu, CheckCircle2, ArrowRight,
  Sparkles, Layers, Globe
} from 'lucide-react';

export default function Trust() {
  const verifiedProjects = [
    { name: 'Madam Jan', category: 'Retail & Homeware', tech: 'Shopify Store 2.0 & Three.js', link: '/case-studies/madam-jan' },
    { name: 'Evitavonni', category: 'Luxury Architecture & Couture', tech: 'React & Editorial Design', link: '/case-studies/evitavonni' },
    { name: 'SkillyTalk AI', category: 'HR Tech SaaS Platform', tech: 'Next.js & LLM Evaluation', link: '/case-studies/skillytalk-ai' },
    { name: 'Pali Yoga', category: 'Wellness & Booking', tech: 'Next.js & Timetable Matrix', link: '/case-studies/pali-yoga' },
    { name: 'Sasco Living', category: 'Property & Accommodation', tech: 'Portal & Intake Workflows', link: '/case-studies/sasco-student-living' },
    { name: 'Abundish', category: 'Direct Food Ordering', tech: 'Next.js & Automated Dispatch', link: '/case-studies/abundish' },
  ];

  const engineeringGuarantees = [
    {
      icon: Lock,
      title: '100% IP & Code Ownership',
      desc: 'You retain full legal ownership of all source code, database architectures, and design assets from day one.'
    },
    {
      icon: Code2,
      title: 'Strict TypeScript Foundations',
      desc: 'Typed, modular architectures that eliminate runtime bugs and pass institutional technical due diligence.'
    },
    {
      icon: Layers,
      title: 'Transparent Bi-Weekly Sprints',
      desc: 'Regular staging previews, clear milestone deliveries, and direct communication via dedicated channels.'
    },
    {
      icon: ShieldCheck,
      title: 'Zero Proprietary Lock-In',
      desc: 'We build on open, industry-standard technologies (Next.js, Node.js, PostgreSQL, AWS) so you are never trapped.'
    }
  ];

  return (
    <section className="py-20 relative bg-brand-dark/70 border-y border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        {/* Client Showcase Strip */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-mono font-bold">
            Delivering Engineering For Ambitious Brands & Products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
          {verifiedProjects.map((proj, i) => (
            <Link
              key={i}
              href={proj.link}
              className="p-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-brand-cyan/30 rounded-xl text-center transition-all group block"
            >
              <span className="font-heading font-bold text-sm text-white group-hover:text-brand-cyan transition-colors block mb-1">
                {proj.name}
              </span>
              <span className="text-[10px] text-slate-400 block truncate">
                {proj.category}
              </span>
            </Link>
          ))}
        </div>

        {/* Engineering Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engineeringGuarantees.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center">
                <item.icon size={20} />
              </div>
              <h3 className="text-base font-heading font-bold text-white">
                {item.title}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
