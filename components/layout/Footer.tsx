'use client';

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
    solutions: [
      { href: '/services', label: 'AI Engineering' },
      { href: '/services', label: 'Web Platforms' },
      { href: '/services', label: 'Mobile Apps' },
      { href: '/services', label: 'Cloud & DevOps' },
    ],
    ecosystem: [
      { href: '/about', label: 'Our Mission' },
      { href: '/portfolio', label: 'Impact' },
      { href: '/blog', label: 'Insights' },
      { href: '/contact', label: 'Join Us' },
    ],
    legal: [
      { href: '/privacy-policy', label: 'Privacy Protocol' },
      { href: '/terms', label: 'Terms of Service' },
      { href: '/cookies', label: 'Cookie Architecture' },
    ]
  };

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/rishabh-sharma-b141b0383/', Icon: Linkedin, label: 'LinkedIn' },
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

          {/* Brand Column */}
          <div className="md:col-span-4 space-y-8">
            <Link href="/" className="inline-block group">
              <img
                src={logo.src}
                alt={APP_NAME}
                className="h-12 w-auto object-contain brightness-110 group-hover:drop-shadow-[0_0_10px_rgba(124,58,237,0.3)] transition-all"
              />
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed">
              Architecting the next generation of digital excellence. Powered by AI, engineered for scale, and designed for global impact.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, i) => (
                <Link key={i} target="_blank" rel="noopener noreferrer" href={link.href} className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-brand-cyan hover:border-brand-cyan/50 transition-all backdrop-blur-md">
                  <link.Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="text-white font-heading font-bold uppercase tracking-widest text-xs">Solutions</h4>
            <ul className="space-y-4">
              {footerLinks.solutions.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 space-y-6">
            <h4 className="text-white font-heading font-bold uppercase tracking-widest text-xs">Ecosystem</h4>
            <ul className="space-y-4">
              {footerLinks.ecosystem.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact Column */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-white font-heading font-bold uppercase tracking-widest text-xs">Join the Evolution</h4>
            <p className="text-slate-400 text-sm">
              Subscribe to our neural-insights and stay ahead of the digital curve.
            </p>
            <form className="relative group">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-cyan/50 backdrop-blur-md transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-white text-black px-6 rounded-xl font-bold hover:bg-slate-200 transition-all flex items-center gap-2">
                <Send size={16} />
              </button>
            </form>
            <div className="pt-4 space-y-2">
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail size={16} className="text-brand-cyan" />
                <span>vidhyonixitsolutions@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin size={16} className="text-brand-fuchsia" />
                <span>Global HQ • Remote-First</span>
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