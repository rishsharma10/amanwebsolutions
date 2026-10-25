'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight, ArrowUpRight, Sparkles, Bot, Layers, ShoppingBag,
  ShieldCheck, Smartphone, Cpu, CheckCircle2, Calendar, Clock,
  ChevronRight, BookOpen, Tag, Flame
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { cn } from '@/lib/utils';
import { isDiwaliOfferActive } from '@/lib/promotions';
import DiwaliAtmosphere from './DiwaliAtmosphere';
import DiwaliInteractiveDiya from './DiwaliInteractiveDiya';
import DiwaliCelebration from './DiwaliCelebration';

export default function Hero() {
  const isPromo = isDiwaliOfferActive();

  const capabilities = [
    {
      label: 'Autonomous AI Agents & RAG Pipelines',
      icon: Bot,
      color: 'text-brand-cyan'
    },
    {
      label: 'Full-Stack SaaS Platforms & MVPs',
      icon: Layers,
      color: 'text-brand-violet'
    },
    {
      label: 'Enterprise Headless Ecommerce & Shopify',
      icon: ShoppingBag,
      color: 'text-emerald-400'
    },
    {
      label: 'Strict 100% Intellectual Property Ownership',
      icon: ShieldCheck,
      color: 'text-amber-400'
    }
  ];

  const blogHighlights = [
    {
      category: 'Technology',
      categoryColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      title: 'Top 5 Mobile App Trends in 2025–2026 to Watch',
      excerpt: 'Key technological shifts in cross-platform frameworks, offline-first architectures, and AI-driven interfaces for high-growth mobile applications.',
      date: 'May 15, 2025',
      readTime: '5 min read',
      href: '/blog/mobile-app-development-trends-business-guide',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop'
    },
    {
      category: 'Ecommerce',
      categoryColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      title: 'How to Build a High-Converting Ecommerce Store',
      excerpt: 'An objective architectural comparison between standard Shopify Plus and headless Next.js storefronts covering speed, conversion, and design freedom.',
      date: 'May 05, 2025',
      readTime: '8 min read',
      href: '/blog/shopify-vs-custom-headless-ecommerce',
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=600&auto=format&fit=crop'
    },
    {
      category: 'AI & Automation',
      categoryColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      title: 'How AI Automation Can Boost Your Business Efficiency',
      excerpt: 'Explore the fundamental architectural differences between conversational chatbots and autonomous AI agents capable of executing multi-step business workflows.',
      date: 'May 10, 2025',
      readTime: '7 min read',
      href: '/blog/ai-agents-vs-chatbots-business-guide',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop'
    }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-brand-dark">
      {/* ========================================================
          FESTIVE DIWALI ATMOSPHERE:
          - Traditional Marigold Toran garland across the top
          - Hanging Indian Akash Kandil lanterns (left & right)
          - Phuljhadi (sparkler) stardust trail
          - Fireworks, Diya embers & rotating sacred mandala
      ======================================================== */}
      {isPromo && <DiwaliAtmosphere />}

      {/* Ambient Lighting Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-br from-brand-cyan/15 via-brand-violet/10 to-transparent rounded-full blur-[140px]" />
        <div className="absolute top-10 right-10 w-[600px] h-[550px] bg-gradient-to-bl from-amber-500/15 via-fuchsia-600/10 to-transparent rounded-full blur-[150px]" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[400px] bg-gradient-to-tr from-amber-500/10 via-yellow-500/5 to-transparent rounded-full blur-[130px]" />
      </div>

      {/* ========================================================
          MAIN HERO SECTION (BALANCED FESTIVE LAYOUT)
      ======================================================== */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 lg:pb-20 z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* ----------------------------------------------------
                LEFT COLUMN: Messaging, Festive Offers & CTAs
            ---------------------------------------------------- */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
              
              {/* Badges Stack & Interactive Diwali Actions */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                {/* Primary Festive Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/25 via-yellow-500/15 to-amber-500/25 border border-amber-500/50 text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.25)]"
                >
                  <span className="text-amber-400 animate-pulse">🪔</span>
                  <span>Diwali Special Offer</span>
                  <span className="text-amber-400 animate-pulse">🪔</span>
                </motion.div>

                {/* Interactive Click-to-Light Diya */}
                <DiwaliInteractiveDiya />

                {/* Interactive Diwali Celebration & Gift Voucher Trigger */}
                <DiwaliCelebration />

                {/* Secondary Micro-Label */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.12 }}
                  className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300 backdrop-blur-md"
                >
                  <Sparkles size={13} className="text-brand-cyan" />
                  <span>Let’s Build Something Amazing</span>
                </motion.div>
              </div>

              {/* Main Headline & Supporting Text */}
              <div className="space-y-4 text-left">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.6rem] font-heading font-extrabold text-white tracking-tight leading-[1.12]"
                >
                  Build Smarter with <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-violet to-brand-fuchsia">
                    AI, Software & Product Engineering
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.16 }}
                  className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl"
                >
                  From autonomous AI agents and intelligent automation to high-performance SaaS platforms, custom software, and modern eCommerce experiences, Vidhyonix turns complex operational challenges into scalable digital products.
                </motion.p>
              </div>

              {/* ========================================================
                  FESTIVE CAMPAIGN OFFER STRIP WITH ORNATE MEDALLION BADGE
              ======================================================== */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="rounded-3xl bg-gradient-to-r from-amber-500/15 via-[#060c1d]/95 to-brand-violet/15 border border-amber-500/40 p-4 sm:p-5 backdrop-blur-xl shadow-[0_0_40px_rgba(245,158,11,0.2)] space-y-4 max-w-2xl"
              >
                {/* Header Row: Title & Expiry */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-500/20 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg animate-bounce">🪔</span>
                    <span className="font-heading font-bold text-xs uppercase tracking-wider text-amber-300">
                      Festive Campaign Offer • Valid till 10 Nov 2026
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-amber-200 bg-amber-500/20 px-2.5 py-0.5 rounded-full border border-amber-500/35 font-semibold">
                    Limited-Time Pricing
                  </span>
                </div>

                {/* Inner Content: Ornate Medallion Badge + 3 Key Offers */}
                <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4">
                  {/* Ornate Golden Medallion Badge */}
                  <div className="shrink-0 w-28 sm:w-32 rounded-2xl overflow-hidden border border-amber-400/50 shadow-[0_0_20px_rgba(245,158,11,0.4)] group relative self-center sm:self-auto">
                    <Image
                      src="/images/diwali-offer-badge-retina.png"
                      alt="Diwali Offer 50% OFF on Mobile & Web Development Services with Diya"
                      width={130}
                      height={165}
                      priority
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* 3 Service Offers Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 flex-1 w-full text-xs font-mono">
                    {/* Offer 1: Mobile App */}
                    <div className="p-3 rounded-xl bg-brand-dark/90 border border-amber-400/50 relative overflow-hidden group shadow-[0_0_15px_rgba(245,158,11,0.12)] flex flex-col justify-between">
                      <div className="absolute top-1 right-1 bg-amber-400 text-slate-950 font-bold text-[9px] px-1.5 py-0.5 rounded uppercase">
                        50% OFF
                      </div>
                      <div className="text-slate-300 font-sans font-semibold text-[11px] mb-1 flex items-center gap-1">
                        <Smartphone size={13} className="text-amber-400" />
                        Mobile App Dev
                      </div>
                      <div>
                        <div className="text-amber-300 font-bold text-base">₹19,999</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Up to 50% OFF</div>
                      </div>
                    </div>

                    {/* Offer 2: eCommerce */}
                    <div className="p-3 rounded-xl bg-brand-dark/90 border border-cyan-400/40 relative overflow-hidden group flex flex-col justify-between">
                      <div className="text-slate-300 font-sans font-semibold text-[11px] mb-1 flex items-center gap-1">
                        <ShoppingBag size={13} className="text-brand-cyan" />
                        eCommerce Dev
                      </div>
                      <div>
                        <div className="text-brand-cyan font-bold text-base">₹14,999</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">High-Converting Stores</div>
                      </div>
                    </div>

                    {/* Offer 3: AI Automation */}
                    <div className="p-3 rounded-xl bg-brand-dark/90 border border-brand-violet/40 relative overflow-hidden group flex flex-col justify-between">
                      <div className="text-slate-300 font-sans font-semibold text-[11px] mb-1 flex items-center gap-1">
                        <Bot size={13} className="text-brand-violet" />
                        AI Automation
                      </div>
                      <div>
                        <div className="text-brand-violet font-bold text-sm">Tailored Stack</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Custom Architecture</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Call-to-Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.28 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1"
              >
                <Link
                  href="/contact"
                  onClick={() => trackEvent('book_consultation_click', { location: 'diwali_hero_primary' })}
                  className="px-8 py-4 bg-gradient-to-r from-brand-cyan via-brand-violet to-brand-fuchsia text-white rounded-full font-heading font-bold text-sm uppercase tracking-wider shadow-[0_0_35px_rgba(34,211,238,0.4)] hover:shadow-[0_0_50px_rgba(245,158,11,0.5)] hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                  <span>Book a Free Consultation</span>
                  <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/case-studies"
                  onClick={() => trackEvent('cta_click', { location: 'diwali_hero_secondary', label: 'View Our Work' })}
                  className="px-7 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-heading font-bold text-sm uppercase tracking-wider hover:border-amber-400/40 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all flex items-center justify-center gap-2 group"
                >
                  <span>View Our Work</span>
                  <ArrowUpRight size={16} className="text-slate-400 group-hover:text-amber-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </motion.div>

            </div>

            {/* ----------------------------------------------------
                RIGHT COLUMN: Technology & Festive Visual Composition
            ---------------------------------------------------- */}
            <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative w-full max-w-[560px] group"
              >
                {/* Festive Ambient Halo with Golden & Cyan Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/25 via-brand-cyan/20 to-brand-violet/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-95 transition-opacity pointer-events-none" />

                {/* Main Composition Card */}
                <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 bg-brand-dark/85 backdrop-blur-2xl shadow-2xl p-2 sm:p-3 hover:border-amber-400/50 transition-colors">
                  <div className="relative w-full aspect-[848/640] rounded-2xl overflow-hidden bg-[#030718]">
                    <Image
                      src="/images/diwali-tech-hero-retina.png"
                      alt="Vidhyonix Technology Dashboard, Mobile App, 3D AI Robot Assistant, and Festive Diwali Diyas"
                      width={848}
                      height={640}
                      priority
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    />

                    {/* Edge Blending Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Interactive Floating Micro-Badges Bar */}
                  <div className="pt-2.5 px-2 flex items-center justify-between text-[11px] font-mono text-slate-300">
                    <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                      50% OFF Mobile Apps
                    </span>
                    <span className="text-slate-400">Stores from ₹14,999</span>
                    <Link
                      href="/contact"
                      className="text-brand-cyan hover:text-amber-300 flex items-center gap-0.5 font-sans font-semibold transition-colors"
                    >
                      Claim Offer <ChevronRight size={12} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          CAPABILITY & TRUST STRIP
      ======================================================== */}
      <section className="relative py-6 border-y border-amber-500/20 bg-brand-dark/70 backdrop-blur-md z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-2.5 p-2 rounded-xl text-left text-xs sm:text-sm text-slate-300 font-medium group hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-amber-400/40 transition-colors shadow-sm">
                  <cap.icon size={16} className={cap.color} />
                </div>
                <span className="line-clamp-2 leading-snug">{cap.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          DIWALI, INNOVATION & DIGITAL GROWTH (BLOG SECTION)
      ======================================================== */}
      <section className="relative py-16 lg:py-24 z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono font-medium">
                <span className="text-amber-400">🪔</span>
                <span>Diwali Innovation & Editorial Insights</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
                Diwali, Innovation & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">Digital Growth</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Explore practical insights, technology trends, and ideas to help your business grow this festive season.
              </p>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-amber-500/15 border border-white/10 hover:border-amber-500/40 text-white text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-all self-start md:self-auto shrink-0 group"
            >
              <span>View All Blogs</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform text-amber-400" />
            </Link>
          </div>

          {/* 3 Real Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {blogHighlights.map((post, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/40 hover:bg-white/[0.07] overflow-hidden transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(245,158,11,0.12)]"
              >
                {/* Thumbnail Image */}
                <Link href={post.href} className="relative w-full aspect-[16/9] overflow-hidden block">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={338}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <span className={cn(
                    "absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider border backdrop-blur-md",
                    post.categoryColor
                  )}>
                    {post.category}
                  </span>
                </Link>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 text-left space-y-3">
                  <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} className="text-slate-500" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} className="text-slate-500" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-white group-hover:text-amber-300 transition-colors leading-snug line-clamp-2">
                    <Link href={post.href}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-brand-cyan group-hover:text-amber-300 group-hover:translate-x-1 transition-all">
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}