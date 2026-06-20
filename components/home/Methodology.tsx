'use client';

import { motion } from 'framer-motion';
import { SectionReveal } from '@/components/PageTransition';
import { Compass, Code2, Rocket, Headset } from 'lucide-react';

const steps = [
  {
    icon: Compass,
    title: '1. Discovery & Strategy',
    description: 'We align on your business goals, target audience, and ROI metrics. We create a comprehensive roadmap before writing a single line of code.',
  },
  {
    icon: Code2,
    title: '2. Agile Development',
    description: 'Our engineers build your solution using modern, scalable tech stacks. You get regular updates and full transparency throughout the sprints.',
  },
  {
    icon: Rocket,
    title: '3. Launch & Deployment',
    description: 'Rigorous QA testing ensures a bug-free launch. We handle the complex DevOps pipelines to deploy your application globally with zero downtime.',
  },
  {
    icon: Headset,
    title: '4. Scale & Support',
    description: 'Post-launch, we monitor analytics, optimize performance, and scale the architecture as your user base grows.',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <SectionReveal key={index} className="relative">
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-brand-violet/30 to-transparent" />
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-start/20 to-brand-end/20 border border-white/10 flex items-center justify-center mb-6 relative z-10">
                  <step.icon className="text-brand-cyan" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
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
