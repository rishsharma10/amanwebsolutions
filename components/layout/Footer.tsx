'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Phone, Mail, MapPin, Linkedin, Instagram, Facebook,
  ArrowRight, Shield, Sparkles, Terminal
} from 'lucide-react';
import logo from "@/app/assets/logo/logobgtransparent.png";
import { trackEvent } from '@/lib/analytics';

export const APP_NAME = "Vidhyonix";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark relative overflow-hidden pt-20 pb-12 border-t border-white/10">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-violet/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Top Consultation Banner */}
        <div className="border-b border-white/10 pb-12 mb-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-cyan text-xs font-heading font-bold uppercase tracking-widest block mb-2">
              Engineering Excellence
            </span>
            <h3 className="text-2xl md:text-3xl font-bold font-heading text-white mb-2">
              Have a product idea, business challenge, or workflow to automate?
            </h3>
            <p className="text-slate-400 text-sm md:text-base">
              Let’s turn your operational requirements into a practical, scalable technology roadmap.
            </p>
          </div>
          <Link
            href="/contact"
            onClick={() => trackEvent('book_consultation_click', { location: 'footer_banner' })}
            className="px-6 py-3.5 bg-white text-brand-dark rounded-xl font-heading font-bold hover:bg-brand-cyan transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] whitespace-nowrap"
          >
            <span>Book Free Consultation</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* 5-Column Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src={logo}
                alt="Vidhyonix Logo"
                width={140}
                height={40}
                className="h-10 w-auto object-contain brightness-110"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Vidhyonix is an AI, Software & Product Engineering Partner. We design and build intelligent software products, AI systems, SaaS platforms, automation workflows, and modern ecommerce experiences.
            </p>
            <div className="space-y-2 text-xs text-slate-300">
              <a
                href="mailto:vidhyonixitsolutions@gmail.com"
                onClick={() => trackEvent('email_click', { location: 'footer' })}
                className="flex items-center gap-2 hover:text-brand-cyan transition-colors"
              >
                <Mail size={14} className="text-brand-cyan" />
                <span>vidhyonixitsolutions@gmail.com</span>
              </a>
              <a
                href="tel:+918770283188"
                onClick={() => trackEvent('phone_click', { location: 'footer' })}
                className="flex items-center gap-2 hover:text-brand-cyan transition-colors"
              >
                <Phone size={14} className="text-brand-cyan" />
                <span>+91 8770283188</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin size={14} className="text-brand-cyan" />
                <span>Mohali, Chandigarh, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/vidhyonix-it-solutions/"
                aria-label="Follow Vidhyonix on LinkedIn"
                className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-brand-cyan hover:border-brand-cyan/50 transition-all"
              >
                <Linkedin size={17} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/vidhyonix/"
                aria-label="Follow Vidhyonix on Instagram"
                className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-brand-cyan hover:border-brand-cyan/50 transition-all"
              >
                <Instagram size={17} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/people/Vidhyonix/61580259069806/"
                aria-label="Follow Vidhyonix on Facebook"
                className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-brand-cyan hover:border-brand-cyan/50 transition-all"
              >
                <Facebook size={17} />
              </a>
            </div>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-white font-heading font-bold uppercase tracking-widest text-xs">Services</p>
            <ul className="space-y-2 text-xs">
              <li><Link href="/services/ai-development" className="text-slate-400 hover:text-white transition-colors">Custom AI Development</Link></li>
              <li><Link href="/services/ai-agents" className="text-slate-400 hover:text-white transition-colors">AI Agents</Link></li>
              <li><Link href="/services/ai-automation" className="text-slate-400 hover:text-white transition-colors">AI Automation</Link></li>
              <li><Link href="/services/custom-software-development" className="text-slate-400 hover:text-white transition-colors">Custom Software</Link></li>
              <li><Link href="/services/web-development" className="text-slate-400 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/services/saas-development" className="text-slate-400 hover:text-white transition-colors">SaaS Platforms</Link></li>
              <li><Link href="/services/mvp-development" className="text-slate-400 hover:text-white transition-colors">MVP Development</Link></li>
              <li><Link href="/services/ecommerce-development" className="text-slate-400 hover:text-white transition-colors">Ecommerce Engineering</Link></li>
              <li><Link href="/services/shopify-development" className="text-slate-400 hover:text-white transition-colors">Shopify Development</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-white font-heading font-bold uppercase tracking-widest text-xs">Industries</p>
            <ul className="space-y-2 text-xs">
              <li><Link href="/industries/retail" className="text-slate-400 hover:text-white transition-colors">Retail & Commerce</Link></li>
              <li><Link href="/industries/healthcare" className="text-slate-400 hover:text-white transition-colors">Healthcare & Wellness</Link></li>
              <li><Link href="/industries/recruitment" className="text-slate-400 hover:text-white transition-colors">Recruitment & HR Tech</Link></li>
              <li><Link href="/industries/restaurants" className="text-slate-400 hover:text-white transition-colors">Restaurants & Food</Link></li>
              <li><Link href="/industries/real-estate" className="text-slate-400 hover:text-white transition-colors">Real Estate & Housing</Link></li>
              <li><Link href="/industries/manufacturing" className="text-slate-400 hover:text-white transition-colors">Manufacturing & B2B</Link></li>
              <li><Link href="/industries/education" className="text-slate-400 hover:text-white transition-colors">Education & EdTech</Link></li>
              <li><Link href="/industries/startups" className="text-slate-400 hover:text-white transition-colors">Startups & Scaleups</Link></li>
            </ul>
          </div>

          {/* Resources & Free Tools */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-white font-heading font-bold uppercase tracking-widest text-xs">Resources</p>
            <ul className="space-y-2 text-xs">
              <li><Link href="/case-studies" className="text-slate-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/technologies" className="text-slate-400 hover:text-white transition-colors">Technology Guides</Link></li>
              <li><Link href="/free-tools" className="text-slate-400 hover:text-white transition-colors">Free Assessment Tools</Link></li>
              <li><Link href="/free-tools/ai-readiness-assessment" className="text-slate-400 hover:text-white transition-colors">AI Readiness Test</Link></li>
              <li><Link href="/free-tools/ai-automation-roi-calculator" className="text-slate-400 hover:text-white transition-colors">Automation ROI Tool</Link></li>
              <li><Link href="/free-tools/saas-mvp-cost-calculator" className="text-slate-400 hover:text-white transition-colors">MVP Cost Calculator</Link></li>
              <li><Link href="/blog" className="text-slate-400 hover:text-white transition-colors">Engineering Blog</Link></li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-white font-heading font-bold uppercase tracking-widest text-xs">Company</p>
            <ul className="space-y-2 text-xs">
              <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/team" className="text-slate-400 hover:text-white transition-colors">Leadership & Team</Link></li>
              <li><Link href="/partner-with-us" className="text-slate-400 hover:text-white transition-colors">Partner With Us</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-white transition-colors">Contact Form</Link></li>
              <li><Link href="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} Vidhyonix IT Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-slate-400 transition-colors">Cookies</Link>
            <Link href="/sitemap.xml" className="hover:text-slate-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}