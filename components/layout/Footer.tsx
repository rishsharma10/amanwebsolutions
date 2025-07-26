'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, 
  Youtube, ArrowRight, Send 
} from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';

export const APP_NAME = "VidyoNix";

export default function Footer() {
  const footerLinks = {
    services: [
      { href: '/services/web-development', label: 'Web Development' },
      { href: '/services/app-development', label: 'App Development' },
      { href: '/services/digital-marketing', label: 'Digital Marketing' },
      { href: '/services/branding', label: 'Branding & Identity' },
      { href: '/services/ui-ux', label: 'UI/UX Design' },
    ],
    company: [
      { href: '/about', label: 'About Us' },
      { href: '/team', label: 'Our Team' },
      { href: '/careers', label: 'Careers' },
      { href: '/blog', label: 'Blog' },
      { href: '/contact', label: 'Contact' },
    ],
    resources: [
      { href: '/case-studies', label: 'Case Studies' },
      { href: '/portfolio', label: 'Portfolio' },
      { href: '/resources/guides', label: 'Guides' },
      { href: '/faq', label: 'FAQ' },
      { href: '/privacy-policy', label: 'Privacy Policy' },
    ],
  };

  const socialLinks = [
    { href: '#', icon: <Facebook size={18} />, label: 'Facebook' },
    { href: '#', icon: <Twitter size={18} />, label: 'Twitter' },
    { href: '#', icon: <Instagram size={18} />, label: 'Instagram' },
    { href: '#', icon: <Linkedin size={18} />, label: 'LinkedIn' },
    { href: '#', icon: <Youtube size={18} />, label: 'YouTube' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-border/50 relative overflow-hidden">
      {/* Animated blurry dots and rings for premium look */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-tr from-neutral-900 via-blue-950 to-fuchsia-950 opacity-95" />
      </div>
      {/* Tagline for business growth */}
      <div className="w-full flex justify-center mb-14 mt-6">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-center bg-gradient-to-r from-sky-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg leading-tight max-w-4xl mx-auto">
          End-to-End IT Solutions for Your Business Growth
        </h2>
      </div>
      {/* Main Footer */}
      <motion.div 
        className="container mx-auto px-4 py-12 md:py-16 relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Company Info */}
          <motion.div 
            className="lg:col-span-2"
            variants={fadeUp}
          >
            <Link href="/" className="text-primary font-bold text-2xl inline-flex items-center">
              <span className="font-extrabold text-2xl inline-flex items-center">
                <span className="bg-gradient-to-r from-sky-500 via-fuchsia-500 to-fuchsia-500 bg-clip-text text-transparent">Vidyo</span>
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">nix</span>
              </span>
              {/* <span className="text-blue-500">X</span> */}
            </Link>
            <p className="mt-4 text-white/80">
              Vidyonix delivers end-to-end IT, web, and mobile solutions for ambitious brands. We help you innovate, scale, and thrive in a digital-first world.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-3 text-white/90 hover:text-pink-400 transition-colors font-semibold">
                <Phone size={16} className="text-pink-400" />
                <span className="bg-gradient-to-r from-sky-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent font-bold">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-white/90 hover:text-pink-400 transition-colors font-semibold">
                <Mail size={16} className="text-pink-400" />
                <span className="bg-gradient-to-r from-sky-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent font-bold">hello@vidyonix.com</span>
              </div>
              <div className="flex items-start gap-3 text-white/80 hover:text-pink-400 transition-colors">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-pink-400" />
                <span>123 Innovation Drive, Tech Park, San Francisco, CA 94107</span>
              </div>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div 
            variants={fadeUp} 
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-extrabold mb-4 bg-gradient-to-r from-sky-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent tracking-wide uppercase">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-white hover:text-pink-400 transition-colors inline-flex items-center gap-1 group font-medium"
                  >
                    <span>{link.label}</span>
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            variants={fadeUp}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-extrabold mb-4 bg-gradient-to-r from-sky-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent tracking-wide uppercase">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-white hover:text-pink-400 transition-colors inline-flex items-center gap-1 group font-medium"
                  >
                    <span>{link.label}</span>
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            variants={fadeUp}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-extrabold mb-4 bg-gradient-to-r from-sky-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent tracking-wide uppercase">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-white hover:text-pink-400 transition-colors inline-flex items-center gap-1 group font-medium"
                  >
                    <span>{link.label}</span>
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Newsletter */}
          <motion.div 
            variants={fadeUp}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-extrabold mb-4 bg-gradient-to-r from-sky-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent tracking-wide uppercase">Stay Updated</h3>
            <p className="text-white/70 mb-4">
              Get the latest insights, tech trends, and exclusive updates from Vidyonix—straight to your inbox.
            </p>
            <div className="flex bg-white/80 dark:bg-neutral-900/80 rounded-lg shadow-inner overflow-hidden">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-transparent border-0 w-full focus:outline-none focus:ring-1 focus:ring-primary text-gray-900 dark:text-white"
              />
              <button className="bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 text-white px-4 rounded-none font-bold hover:scale-105 transition-transform">
                <Send size={18} />
              </button>
            </div>
            
            {/* Social Icons */}
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3 text-white/80">Follow Us</h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => (
                  <Link 
                    key={link.label}
                    href={link.href}
                    className="p-2 bg-gradient-to-br from-sky-100 via-fuchsia-100 to-pink-100 hover:bg-gradient-to-br hover:from-sky-200 hover:via-fuchsia-200 hover:to-pink-200 rounded-full transition-colors text-pink-400 hover:text-white shadow"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      <div className="mt-10 border-border/50 py-6 bg-white/5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm font-medium">
            © {currentYear} {APP_NAME}. Crafted with passion & precision. All rights reserved.
          </p>
          <div className="mt-3 md:mt-0 flex gap-6 text-sm">
            <Link
              href="/terms"
              className="text-white hover:text-pink-400 transition-colors inline-flex items-center gap-1 group font-medium"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-white hover:text-pink-400 transition-colors inline-flex items-center gap-1 group font-medium"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookies"
              className="text-white hover:text-pink-400 transition-colors inline-flex items-center gap-1 group font-medium"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
      </motion.div>
      
      {/* Copyright */}
     
    </footer>
  );
}