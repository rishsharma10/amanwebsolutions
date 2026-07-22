'use client';

import { motion } from 'framer-motion';
import { SectionReveal } from '@/components/PageTransition';
import { Compass, Map, PenTool, Code2, ShieldCheck, Rocket, Headset } from 'lucide-react';

const steps = [
  {
    icon: Compass,
    title: 'Discovery',
    description: 'We align on business goals, requirements, and technical constraints.',
  },
  {
    icon: Map,
    title: 'Planning',
    description: 'Creating detailed roadmaps, architectures, and strategic timelines.',
  },
  {
    icon: PenTool,
    title: 'Design',
    description: 'Crafting premium, intuitive user interfaces and user experiences.',
  },
  {
    icon: Code2,
    title: 'Development',
    description: 'Agile engineering with modern, scalable, and secure technologies.',
  },
  {
    icon: ShieldCheck,
    title: 'Testing',
    description: 'Rigorous QA, security audits, and performance optimization.',
  },
  {
    icon: Rocket,
    title: 'Deployment',
    description: 'Seamless CI/CD pipelines for zero-downtime global launches.',
  },
  {
    icon: Headset,
    title: 'Support',
    description: 'Ongoing monitoring, maintenance, and long-term scaling.',
  }
];

export default function Methodology() {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block py-1 px-3 mb-6 rounded-full bg-white/5 text-brand-violet border border-brand-violet/20 font-medium text-sm">
              Our Methodology
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">
              How We Ensure <span className="ai-gradient-text">Success</span>
            </h2>
            <p className="text-gray-400 text-lg">
              A transparent, proven process that transforms complex challenges into elegant, scalable digital products.
            </p>
          </div>
        </SectionReveal>

        <div className="flex flex-wrap justify-center gap-6">
          {steps.map((step, index) => (
            <SectionReveal key={index} className="relative w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)]">
              {/* Connection line for desktop */}
              {index < steps.length - 1 && index !== 3 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-brand-violet/30 to-transparent" />
              )}
              
              <div className="flex flex-col items-center text-center p-6 glass-morphism rounded-3xl border border-white/5 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-start/20 to-brand-end/20 border border-white/10 flex items-center justify-center mb-6 relative z-10">
                  <step.icon className="text-brand-cyan" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
