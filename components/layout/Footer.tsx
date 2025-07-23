'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, 
  Youtube, ArrowRight, Send 
} from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';

export const APP_NAME = 'Wlopper'

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
    <footer className="bg-card border-t border-border/50 relative overflow-hidden">
      {/* Subtle, soft gradient background for premium look */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-tr from-white via-blue-50 to-fuchsia-100 dark:from-neutral-900 dark:via-blue-950 dark:to-fuchsia-950 opacity-90" />
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
              <span className="text-primary">Wlopper</span>
              {/* <span className="text-blue-500">X</span> */}
            </Link>
            <p className="mt-4 text-muted-foreground">
              We help businesses grow through cutting-edge digital solutions and strategic marketing. 
              Our expertise helps brands stand out in today's digital landscape.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={16} />
                <span>hello@cvb.com</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>123 Innovation Drive, Tech Park, San Francisco, CA 94107</span>
              </div>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div 
            variants={fadeUp} 
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
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
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
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
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
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
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest news and insights.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-background border border-border rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground px-3 rounded-r-md hover:bg-primary/90 transition-colors">
                <Send size={18} />
              </button>
            </div>
            
            {/* Social Icons */}
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3">Follow Us</h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => (
                  <Link 
                    key={link.label}
                    href={link.href}
                    className="p-2 bg-muted hover:bg-muted/80 rounded-full transition-colors text-muted-foreground hover:text-foreground"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Copyright */}
      <div className="border-t border-border/50 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {APP_NAME}. All rights reserved.
          </p>
          <div className="mt-3 md:mt-0 flex gap-6 text-sm text-muted-foreground">
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}