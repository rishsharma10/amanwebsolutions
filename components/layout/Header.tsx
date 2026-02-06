'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import logo from "@/app/assets/logo/logobgtransparent.png"
import {
  Menu, X, ChevronDown, Sparkles, Cpu, Zap
} from 'lucide-react';
import { APP_NAME } from './Footer';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Impact' },
    { href: '/blog', label: 'Insights' },
    { href: '/about', label: 'Mission' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrollY > 20 ? "py-3 bg-brand-dark/85 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]" : "py-6 bg-transparent"
      )}
    >
      {/* Gradient Bottom Glow */}
      <div
        className={cn(
          "absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent transition-opacity duration-500",
          scrollY > 20 ? "opacity-100" : "opacity-0"
        )}
      />
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <img
                src={logo.src}
                alt={APP_NAME}
                className="h-10 md:h-12 w-auto object-contain brightness-110 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all"
              />
            </div>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 bg-white/5 border border-white/10 px-6 py-2 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "relative text-sm font-medium uppercase tracking-wider transition-all hover:text-brand-cyan",
                pathname === link.href ? "text-brand-cyan" : "text-slate-300"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 w-full h-px bg-brand-cyan"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="https://skillytalkinterview.vidhyonix.com/" target="_blank">
            <button className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white transition-colors px-4 py-2 border border-white/10 hover:border-brand-cyan/50 rounded-xl">
              <Zap size={14} className="text-brand-cyan" />
              SKILLYTALK
            </button>
          </Link>
          <Link href="/contact">
            <button className="group relative px-6 py-2 bg-white text-black rounded-xl font-bold text-sm transition-all overflow-hidden flex items-center gap-2">
              <div className="absolute inset-0 bg-brand-cyan translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 opacity-20" />
              <span>Innovate With Us</span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative z-50 p-2 text-white bg-white/10 rounded-xl border border-white/10"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden bg-brand-dark flex flex-col pt-24 px-6 gap-6"
          >
            <div className="absolute inset-0 opacity-10 bg-ai-grid bg-cover pointer-events-none" />

            {navLinks.map((link, idx) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "text-3xl font-heading font-bold uppercase",
                    pathname === link.href ? "ai-gradient-text" : "text-white"
                  )}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <div className="mt-auto pb-12 space-y-4">
              <Link href="/contact" className="block">
                <button className="w-full py-4 bg-white text-black rounded-2xl font-bold text-xl">
                  Get Started
                </button>
              </Link>
              <Link href="https://skillytalkinterview.vidhyonix.com/" className="block">
                <button className="w-full py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-xl flex items-center justify-center gap-3">
                  <Sparkles className="text-brand-cyan" />
                  SkillyTalk AI
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}