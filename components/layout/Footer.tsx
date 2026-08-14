'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Phone, Mail, MapPin, Facebook, Instagram, Linkedin,
  ArrowRight, Send, Cpu, Shield, Globe
} from 'lucide-react';
import logo from "@/app/assets/logo/logobgtransparent.png"

export const APP_NAME = "Vidhyonix";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { href: '/services/ai-development', label: 'AI Development' },
      { href: '/services/custom-software-development', label: 'Custom Software' },
      { href: '/services/saas-development', label: 'SaaS Development' },
      { href: '/services/web-development', label: 'Web Development' },
      { href: '/services/mobile-app-development', label: 'Mobile Apps' },
    ],
    company: [
      { href: '/about', label: 'About Us' },
      { href: '/portfolio', label: 'Portfolio' },
      { href: '/blog', label: 'Blog' },
      { href: '/partner-with-us', label: 'Partner With Us' },
      { href: '/contact', label: 'Contact' },
    ],
    products: [
      { href: 'https://aiinterview.skillytalk.com/', label: 'SkillyTalk AI' },
    ],
    legal: [
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
    ],
    contacts: [
      { href: 'https://wa.me/918770283188', label: 'WhatsApp Chat', target: '_blank' },
      { href: 'tel:+918770283188', label: 'Call Support' },
      { href: 'mailto:vidhyonixitsolutions@gmail.com', label: 'Email Support' },
      { href: '/contact', label: 'Contact Form' }
    ]
  };

  const socialLinks = [
    { href: 'https://www.linkedin.com/company/vidhyonix-it-solutions/', Icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://www.instagram.com/vidhyonix/', Icon: Instagram, label: 'Instagram' },
    { href: 'https://www.facebook.com/people/Vidhyonix/61580259069806/', Icon: Facebook, label: 'Facebook' },
  ];

  return (
    <footer className="bg-brand-dark relative overflow-hidden pt-24 pb-12 border-t border-white/5">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-ai-grid bg-repeat" />

      {/* Glow orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-violet/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Footer Partner CTA Banner */}
        <div className="border-b border-white/5 pb-12 mb-16 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold font-heading text-white mb-2">Looking for a Technology Partner?</h3>
            <p className="text-slate-400 text-sm md:text-base">Let's build reliable AI and software solutions together.</p>
          </div>
          <Link 
            href="/partner-with-us" 
            className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white hover:text-black transition-all flex items-center gap-2 group/btn"
          >
            Partner With Us <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

          {/* Brand Column */}
          <div className="md:col-span-3 space-y-8">
            <Link href="/" className="inline-block group">
              <Image
                src={logo}
                alt={APP_NAME}
                width={140}
                height={40}
                className="h-12 w-auto object-contain brightness-110 group-hover:drop-shadow-[0_0_10px_rgba(124,58,237,0.3)] transition-all"
              />
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed">
              Architecting the next generation of digital excellence. Powered by AI, engineered for scale, and designed for global impact.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, i) => (
                <Link
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link.href}
                  aria-label={`Follow us on ${link.label}`}
                  className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-brand-cyan hover:border-brand-cyan/50 transition-all backdrop-blur-md"
                >
                  <link.Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-2 space-y-6">
            <p className="text-white font-heading font-bold uppercase tracking-widest text-xs">Services</p>
            <ul className="space-y-4">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 space-y-6">
            <p className="text-white font-heading font-bold uppercase tracking-widest text-xs">Company</p>
            <ul className="space-y-4">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-white font-heading font-bold uppercase tracking-widest text-xs mt-8">Products</p>
            <ul className="space-y-4">
              {footerLinks.products.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} target="_blank" className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 space-y-6">
            <p className="text-white font-heading font-bold uppercase tracking-widest text-xs">Direct Support</p>
            <ul className="space-y-4">
              {footerLinks.contacts.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} target={link.target} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact Column */}
          <div className="md:col-span-3 space-y-6">
            <p className="text-white font-heading font-bold uppercase tracking-widest text-xs">Join the Evolution</p>
            <p className="text-slate-400 text-sm">
              Subscribe to our neural-insights and stay ahead of the digital curve.
            </p>
            <form className="relative group">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address for newsletter subscription"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-cyan/50 backdrop-blur-md transition-all"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="absolute right-2 top-2 bottom-2 bg-white text-black px-6 rounded-xl font-bold hover:bg-slate-200 transition-all flex items-center gap-2"
              >
                <Send size={16} />
              </button>
            </form>
            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail size={16} className="text-brand-cyan" />
                <span>vidhyonixitsolutions@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone size={16} className="text-brand-cyan" />
                <span>+91 8770283188</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin size={16} className="text-brand-fuchsia" />
                <span>Mohali, Chandigarh, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">
            © {currentYear} {APP_NAME} IT SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            {footerLinks.legal.map((link, i) => (
              <Link key={i} href={link.href} className="text-slate-500 hover:text-white transition-colors text-xs uppercase tracking-widest">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-xs">
            <Shield size={12} className="text-brand-cyan" />
            <span>ENCRYPTED CONNECTION</span>
          </div>
        </div>
      </div>
    </footer>
  );
}