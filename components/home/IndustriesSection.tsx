'use client';

import Link from 'next/link';
import {
  Building2, ShoppingCart, HeartPulse, Users, Utensils,
  Home, Factory, GraduationCap, Rocket, ArrowRight
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export default function IndustriesSection() {
  const industries = [
    { title: 'Retail & Commerce', slug: 'retail', icon: ShoppingCart, desc: 'Omnichannel inventory sync, headless storefronts, and AI recommendations.' },
    { title: 'Healthcare & Wellness', slug: 'healthcare', icon: HeartPulse, desc: 'Patient booking portals, automated intake forms, and practice management.' },
    { title: 'Recruitment & HR Tech', slug: 'recruitment', icon: Users, desc: 'Candidate screening pipelines, AI interview simulators, and team dashboards.' },
    { title: 'Restaurants & Hospitality', slug: 'restaurants', icon: Utensils, desc: 'Direct online ordering engines, voice reservation telephony, and dispatch.' },
    { title: 'Real Estate & Housing', slug: 'real-estate', icon: Home, desc: 'Property listing portals, virtual tours, and automated tenant leasing intake.' },
    { title: 'Manufacturing & B2B', slug: 'manufacturing', icon: Factory, desc: 'Custom B2B wholesale portals, product configurators, and ERP connectors.' },
    { title: 'Education & EdTech', slug: 'education', icon: GraduationCap, desc: 'Interactive learning management, automated coding tests, and analytics.' },
    { title: 'Startups & Scaleups', slug: 'startups', icon: Rocket, desc: 'Rapid 4–8 week MVP engineering and investor-ready SaaS architectures.' },
  ];

  return (
    <section className="py-24 relative bg-brand-dark/80 border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-brand-cyan text-xs font-mono uppercase tracking-widest block font-bold">
              08. Industry Solutions
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
              Software Engineered for Your Specific Industry
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Generic software forces bad compromises. We tailor AI, automation, and web applications around your sector’s operational realities.
            </p>
          </div>
          <Link
            href="/industries"
            onClick={() => trackEvent('cta_click', { location: 'industries_header', label: 'View All Industries' })}
            className="inline-flex items-center gap-2 text-xs font-heading font-bold text-brand-cyan hover:text-white transition-colors"
          >
            <span>Explore All 8 Sectors</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((ind, i) => (
            <Link
              key={i}
              href={`/industries/${ind.slug}`}
              onClick={() => trackEvent('cta_click', { location: 'industry_card', industry_name: ind.title })}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-cyan/40 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <ind.icon size={20} />
                </div>
                <h3 className="text-base font-heading font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                  {ind.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  {ind.desc}
                </p>
              </div>

              <span className="text-xs font-heading font-bold text-slate-400 group-hover:text-brand-cyan flex items-center gap-1 transition-colors">
                <span>View Solutions</span>
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
