'use client';

import { motion } from 'framer-motion';
import { SectionReveal } from '@/components/PageTransition';
import { Activity, Landmark, ShoppingBag, Truck } from 'lucide-react';

const industries = [
  {
    icon: Activity,
    title: 'Healthcare & MedTech',
    description: 'HIPAA-compliant platforms, telemedicine portals, and AI-driven patient management systems.',
    color: 'text-brand-cyan',
    bg: 'bg-brand-cyan/10'
  },
  {
    icon: Landmark,
    title: 'Finance & Fintech',
    description: 'Secure payment gateways, blockchain integration, and robust trading algorithms.',
    color: 'text-brand-violet',
    bg: 'bg-brand-violet/10'
  },
  {
    icon: ShoppingBag,
    title: 'Retail & eCommerce',
    description: 'Scalable Shopify/custom storefronts, inventory management, and omnichannel retail solutions.',
    color: 'text-brand-fuchsia',
    bg: 'bg-brand-fuchsia/10'
  },
  {
    icon: Truck,
    title: 'Logistics & Supply Chain',
    description: 'Real-time tracking, fleet management software, and predictive analytics for logistics.',
    color: 'text-brand-start',
    bg: 'bg-brand-start/10'
  }
];

export default function Industries() {
  return (
    <section className="py-24 bg-brand-dark border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-dark via-brand-dark/95 to-brand-dark pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-brand-violet/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 mb-6 rounded-full bg-white/5 text-brand-cyan border border-brand-cyan/20 font-medium text-sm">
              Industries We Serve
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">
              Tailored Solutions for <span className="ai-gradient-text">Every Sector</span>
            </h2>
            <p className="text-gray-400 text-lg">
              We understand that every industry has unique challenges. Our specialized teams build scalable, secure, and compliant technology tailored precisely to your market's demands.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <SectionReveal key={index} className="h-full">
              <motion.div
                whileHover={{ y: -5 }}
                className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 glass-morphism flex flex-col items-start gap-4 transition-all hover:bg-white/10"
              >
                <div className={`w-14 h-14 rounded-2xl ${industry.bg} flex items-center justify-center`}>
                  <industry.icon className={industry.color} size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mt-2">{industry.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {industry.description}
                </p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
