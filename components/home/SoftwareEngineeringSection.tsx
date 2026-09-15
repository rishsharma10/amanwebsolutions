'use client';

import Link from 'next/link';
import {
  Code2, Layers, Smartphone, Database,
  Terminal, ArrowRight, LayoutDashboard, Wrench
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export default function SoftwareEngineeringSection() {
  const offerings = [
    {
      title: 'SaaS Platform Engineering',
      icon: Layers,
      desc: 'Multi-tenant applications with Stripe billing, automated onboarding, team permissions, and product analytics.',
      link: '/services/saas-development'
    },
    {
      title: 'Startup MVP Development',
      icon: Code2,
      desc: 'Focused, production-ready MVPs shipped in 4–8 weeks to validate demand and attract institutional investors.',
      link: '/services/mvp-development'
    },
    {
      title: 'Next.js Web Applications',
      icon: Terminal,
      desc: 'Server-side rendered web applications optimized for speed, green Core Web Vitals, and organic SEO crawlability.',
      link: '/services/web-development'
    },
    {
      title: 'Native & Cross-Platform Mobile',
      icon: Smartphone,
      desc: 'High-performance React Native and Flutter mobile apps with offline caching and native hardware integrations.',
      link: '/services/mobile-app-development'
    },
    {
      title: 'APIs & Microservices',
      icon: Database,
      desc: 'Low-latency REST and GraphQL backends, event queues, and database architectures engineered for high throughput.',
      link: '/services/api-development'
    },
    {
      title: 'Operations Dashboards & Portals',
      icon: LayoutDashboard,
      desc: 'Data-dense operational portals consolidating disparate data sources into clear real-time executive interfaces.',
      link: '/services/custom-software-development'
    }
  ];

  return (
    <section className="py-24 relative bg-brand-dark/70 border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-brand-violet text-xs font-mono uppercase tracking-widest block font-bold">
              06. Product Engineering
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
              Software & Product Engineering
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              We design and write maintainable, typed software engineered to pass due diligence and scale to millions of users.
            </p>
          </div>
          <Link
            href="/services/custom-software-development"
            onClick={() => trackEvent('cta_click', { location: 'software_section_header', label: 'View Software Capabilities' })}
            className="inline-flex items-center gap-2 text-xs font-heading font-bold text-brand-violet hover:text-white transition-colors"
          >
            <span>Explore Engineering Services</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              onClick={() => trackEvent('cta_click', { location: 'software_engineering_card', label: item.title })}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-violet/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-violet/10 text-brand-violet flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-brand-violet transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <span className="text-xs font-heading font-bold text-slate-300 group-hover:text-brand-violet flex items-center gap-1.5 transition-colors">
                <span>View Capabilities</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
