'use client';

import { motion } from 'framer-motion';
import { SectionReveal } from '@/components/PageTransition';
import { Activity, Landmark, ShoppingBag, Truck, BookOpen, Users, Building, Factory, ShoppingCart, Cloud } from 'lucide-react';
import Link from 'next/link';

const industries = [
  {
    icon: Activity,
    title: 'Healthcare',
    slug: 'healthcare',
    description: 'HIPAA-compliant platforms and telemedicine portals for better patient care.',
    color: 'text-brand-cyan',
    bg: 'bg-brand-cyan/10'
  },
  {
    icon: BookOpen,
    title: 'Education',
    slug: 'education',
    description: 'Scalable EdTech platforms, LMS, and virtual classrooms for modern learning.',
    color: 'text-brand-violet',
    bg: 'bg-brand-violet/10'
  },
  {
    icon: Landmark,
    title: 'Finance',
    slug: 'finance',
    description: 'Secure payment gateways and automated compliance for financial institutions.',
    color: 'text-brand-fuchsia',
    bg: 'bg-brand-fuchsia/10'
  },
  {
    icon: Users,
    title: 'HR',
    slug: 'hr',
    description: 'AI-driven ATS and unbiased recruitment platforms like SkillyTalk.',
    color: 'text-brand-cyan',
    bg: 'bg-brand-cyan/10'
  },
  {
    icon: Building,
    title: 'Real Estate',
    slug: 'real-estate',
    description: 'Property management systems and virtual tour integrations for faster sales.',
    color: 'text-brand-violet',
    bg: 'bg-brand-violet/10'
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    slug: 'manufacturing',
    description: 'IoT dashboards and ERP integrations for optimized supply chain monitoring.',
    color: 'text-brand-fuchsia',
    bg: 'bg-brand-fuchsia/10'
  },
  {
    icon: ShoppingBag,
    title: 'Retail',
    slug: 'retail',
    description: 'Omnichannel retail solutions bridging in-store and online customer experiences.',
    color: 'text-brand-cyan',
    bg: 'bg-brand-cyan/10'
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    slug: 'e-commerce',
    description: 'High-conversion online storefronts with advanced inventory management.',
    color: 'text-brand-violet',
    bg: 'bg-brand-violet/10'
  },
  {
    icon: Truck,
    title: 'Logistics',
    slug: 'logistics',
    description: 'Real-time fleet tracking and predictive analytics for operational efficiency.',
    color: 'text-brand-fuchsia',
    bg: 'bg-brand-fuchsia/10'
  },
  {
    icon: Cloud,
    title: 'SaaS',
    slug: 'saas',
    description: 'Robust, multi-tenant architectures built for rapid scaling and high availability.',
    color: 'text-brand-cyan',
    bg: 'bg-brand-cyan/10'
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((industry, index) => (
            <SectionReveal key={index} className="h-full">
              <Link href={`/industries/${industry.slug}`} className="block h-full">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 glass-morphism flex flex-col items-start gap-4 transition-all hover:bg-white/10 group cursor-pointer"
                >
                  <div className={`w-14 h-14 rounded-2xl ${industry.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <industry.icon className={industry.color} size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-white mt-2 group-hover:text-brand-cyan transition-colors">{industry.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed flex-1">
                    {industry.description}
                  </p>
                </motion.div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
