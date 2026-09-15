'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import logo from "@/app/assets/logo/logobgtransparent.png";
import {
  Menu, X, ChevronDown, Sparkles, Cpu, Code2, ShoppingBag, ArrowRight,
  Shield, Layers, Wrench, Briefcase, Building2
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export const APP_NAME = "Vidhyonix";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesDropdown(false);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const servicePillars = [
    {
      title: 'AI & Automation',
      icon: Sparkles,
      color: 'text-brand-cyan',
      links: [
        { label: 'Custom AI Development', href: '/services/ai-development' },
        { label: 'Autonomous AI Agents', href: '/services/ai-agents' },
        { label: 'AI Workflow Automation', href: '/services/ai-automation' },
        { label: 'Voice AI Telephony', href: '/services/voice-ai' },
      ]
    },
    {
      title: 'Software Engineering',
      icon: Code2,
      color: 'text-brand-violet',
      links: [
        { label: 'Custom Software Development', href: '/services/custom-software-development' },
        { label: 'Next.js Web Applications', href: '/services/web-development' },
        { label: 'Mobile App Development', href: '/services/mobile-app-development' },
        { label: 'APIs & Microservices', href: '/services/api-development' },
      ]
    },
    {
      title: 'SaaS & Startups',
      icon: Layers,
      color: 'text-brand-fuchsia',
      links: [
        { label: 'SaaS Platform Development', href: '/services/saas-development' },
        { label: 'Startup MVP Development', href: '/services/mvp-development' },
        { label: 'Full Product Engineering', href: '/services/product-development' },
      ]
    },
    {
      title: 'Ecommerce Technology',
      icon: ShoppingBag,
      color: 'text-emerald-400',
      links: [
        { label: 'Ecommerce Engineering', href: '/services/ecommerce-development' },
        { label: 'Custom Shopify Development', href: '/services/shopify-development' },
        { label: 'Headless Ecommerce', href: '/services/headless-ecommerce' },
        { label: 'Multi-Vendor Marketplaces', href: '/services/marketplace-development' },
      ]
    }
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrollY > 20 ? "py-3 bg-brand-dark/90 backdrop-blur-xl border-b border-white/10 shadow-2xl" : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center gap-2 group">
          <Image
            src={logo}
            alt="Vidhyonix Logo"
            width={140}
            height={40}
            className="h-9 md:h-11 w-auto object-contain brightness-110 group-hover:brightness-125 transition-all"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesDropdown(!servicesDropdown)}
              onMouseEnter={() => setServicesDropdown(true)}
              className={cn(
                "flex items-center gap-1 px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all",
                pathname?.startsWith('/services') || servicesDropdown ? "text-brand-cyan bg-white/5" : "text-slate-300 hover:text-white"
              )}
              aria-expanded={servicesDropdown}
            >
              Services <ChevronDown size={14} className={cn("transition-transform duration-200", servicesDropdown && "rotate-180")} />
            </button>

            <AnimatePresence>
              {servicesDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  onMouseLeave={() => setServicesDropdown(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[740px] bg-brand-dark/95 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-2xl grid grid-cols-2 gap-6"
                >
                  {servicePillars.map((pillar, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center gap-2 pb-1 border-b border-white/10">
                        <pillar.icon size={15} className={pillar.color} />
                        <span className="font-heading font-bold text-xs uppercase tracking-wider text-white">
                          {pillar.title}
                        </span>
                      </div>
                      <ul className="space-y-1">
                        {pillar.links.map((link, j) => (
                          <li key={j}>
                            <Link
                              href={link.href}
                              className="block text-xs text-slate-300 hover:text-brand-cyan hover:translate-x-1 transition-all py-1"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="col-span-2 pt-3 border-t border-white/10 flex justify-between items-center text-xs">
                    <span className="text-slate-400">Looking for custom architecture?</span>
                    <Link href="/services" className="text-brand-cyan hover:underline flex items-center gap-1 font-medium">
                      View All 21 Services <ArrowRight size={13} />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/industries"
            className={cn(
              "px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all",
              pathname?.startsWith('/industries') ? "text-brand-cyan bg-white/5" : "text-slate-300 hover:text-white"
            )}
          >
            Industries
          </Link>

          <Link
            href="/case-studies"
            className={cn(
              "px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all",
              pathname?.startsWith('/case-studies') ? "text-brand-cyan bg-white/5" : "text-slate-300 hover:text-white"
            )}
          >
            Case Studies
          </Link>

          <Link
            href="/technologies"
            className={cn(
              "px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all",
              pathname?.startsWith('/technologies') ? "text-brand-cyan bg-white/5" : "text-slate-300 hover:text-white"
            )}
          >
            Technologies
          </Link>

          <Link
            href="/free-tools"
            className={cn(
              "px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all flex items-center gap-1.5",
              pathname?.startsWith('/free-tools') ? "text-brand-cyan bg-white/5" : "text-slate-300 hover:text-white"
            )}
          >
            <Wrench size={13} className="text-brand-cyan" />
            <span>Free Tools</span>
          </Link>

          <Link
            href="/blog"
            className={cn(
              "px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all",
              pathname?.startsWith('/blog') ? "text-brand-cyan bg-white/5" : "text-slate-300 hover:text-white"
            )}
          >
            Blog
          </Link>

          <Link
            href="/about"
            className={cn(
              "px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all",
              pathname === '/about' ? "text-brand-cyan bg-white/5" : "text-slate-300 hover:text-white"
            )}
          >
            About
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            onClick={() => trackEvent('book_consultation_click', { location: 'header' })}
            className="px-5 py-2.5 bg-gradient-to-r from-brand-cyan to-brand-violet hover:from-cyan-400 hover:to-violet-500 text-brand-dark rounded-full font-heading font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all flex items-center gap-1.5"
          >
            <span>Book Consultation</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open navigation menu"}
          className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-dark/98 border-b border-white/10 backdrop-blur-2xl overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
              <Link href="/services" className="block text-base font-bold text-white py-2 border-b border-white/5">
                All Services
              </Link>
              <div className="pl-3 space-y-2 border-l border-brand-cyan/30 my-2">
                <Link href="/services/ai-development" className="block text-xs text-slate-300">Custom AI Development</Link>
                <Link href="/services/ai-agents" className="block text-xs text-slate-300">AI Agents</Link>
                <Link href="/services/custom-software-development" className="block text-xs text-slate-300">Custom Software</Link>
                <Link href="/services/saas-development" className="block text-xs text-slate-300">SaaS Development</Link>
                <Link href="/services/ecommerce-development" className="block text-xs text-slate-300">Ecommerce Technology</Link>
              </div>

              <Link href="/industries" className="block text-base font-bold text-white py-2 border-b border-white/5">
                Industries
              </Link>
              <Link href="/case-studies" className="block text-base font-bold text-white py-2 border-b border-white/5">
                Case Studies
              </Link>
              <Link href="/technologies" className="block text-base font-bold text-white py-2 border-b border-white/5">
                Technologies
              </Link>
              <Link href="/free-tools" className="block text-base font-bold text-white py-2 border-b border-white/5">
                Free Assessment Tools
              </Link>
              <Link href="/blog" className="block text-base font-bold text-white py-2 border-b border-white/5">
                Blog & Insights
              </Link>
              <Link href="/about" className="block text-base font-bold text-white py-2 border-b border-white/5">
                About Vidhyonix
              </Link>
              <Link href="/contact" className="block text-base font-bold text-white py-2">
                Contact Us
              </Link>

              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => trackEvent('book_consultation_click', { location: 'mobile_drawer' })}
                  className="w-full py-3 bg-brand-cyan text-brand-dark rounded-xl font-bold text-center block"
                >
                  Book Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}