'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Coffee, Star, MapPin, Clock, ExternalLink,
  QrCode, ShoppingCart, Bell, ChevronLeft, ChevronRight,
  Globe, Smartphone, CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// ── Website slides ──────────────────────────────────────────────────────────
const webSlides = [
  {
    image: '/assets/cafe/hero.png',
    tag: 'Hero Section',
    title: 'Cinematic First Impression',
    desc: 'A full-viewport hero with a real cafe interior, animated floating beans, parallax depth, and a rotating "100% ORGANIC" badge — visitors know they\'ve landed somewhere special.',
    highlights: ['Parallax scroll hero', '5-star rating badge', 'WhatsApp CTA button'],
  },
  {
    image: '/assets/cafe/banner.png',
    tag: 'About Section',
    title: '"Slow down... Sip, savor, and stay a while."',
    desc: 'The about section uses a warm cream palette, archway-framed photography, and a signature italic quote that communicates the cafe\'s entire soul in one scroll.',
    highlights: ['Animated image reveal', 'Cursive quote typography', 'Cozy brand voice'],
  },
  {
    image: '/assets/cafe/baner2.png',
    tag: 'Ambience Section',
    title: 'The Reading Nook — Find your spot',
    desc: 'Scroll-pinned dark section showcasing the cafe\'s zones — The Reading Nook, The Social Corner, and more. High-contrast design pulls the visitor in with an editorial feel.',
    highlights: ['Dark immersive design', 'Scroll-pin animation', 'Zone storytelling'],
  },
  {
    image: '/assets/cafe/cold_coffee.png',
    tag: 'Menu Showcase',
    title: 'Three Formulations — Interactive Reveal',
    desc: 'A scroll-driven product showcase reveals each signature drink (Cappuccino, Cold Coffee, Hazelnut) with ingredients table, flavor notes, and large editorial typography.',
    highlights: ['Scroll-triggered reveal', 'Ingredient breakdown', 'CAFE.01 / .02 / .03 format'],
  },
];

// ── Simulator steps ─────────────────────────────────────────────────────────
const appSteps = [
  {
    image: '/assets/cafe/simulator.png',
    step: '01',
    label: 'Scan QR & Browse',
    desc: 'Guest scans the table QR code. The menu opens instantly in the browser — no app download. Categories like Coffee & Crushers, Shakes, Pizza & Pasta are tabbed for easy navigation.',
    color: 'text-amber-400',
    borderColor: 'border-amber-400/40',
    glowColor: 'shadow-amber-500/20',
  },
  {
    image: '/assets/cafe/order_create.png',
    step: '02',
    label: 'Add to Cart',
    desc: 'Guests add items with quantity controls. A persistent cart bar at the bottom shows "3 Items · Review (₹540)" — frictionless and fast.',
    color: 'text-orange-400',
    borderColor: 'border-orange-400/40',
    glowColor: 'shadow-orange-500/20',
  },
  {
    image: '/assets/cafe/order_rev.png',
    step: '03',
    label: 'Checkout',
    desc: 'Order summary with itemized pricing, a details form (Name, Phone, Table Number auto-filled), and a single "Place Order" CTA. Clean, no clutter.',
    color: 'text-brand-cyan',
    borderColor: 'border-brand-cyan/40',
    glowColor: 'shadow-cyan-500/20',
  },
  {
    image: '/assets/cafe/order_rec.png',
    step: '04',
    label: 'Order Confirmed',
    desc: 'Instant confirmation with a unique Order ID (#ORD-7636), live status "Preparing", estimated time, and a waiter call bell — kitchen gets notified in real-time.',
    color: 'text-green-400',
    borderColor: 'border-green-400/40',
    glowColor: 'shadow-green-500/20',
  },
];

// ═══════════════════════════════════════════════════════════════════════════
export default function VidhyonixCafeShowcase() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveSlide((prev) => (prev + 1) % webSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx: number) => {
    setDirection(idx > activeSlide ? 1 : -1);
    setActiveSlide(idx);
  };
  const prev = () => {
    setDirection(-1);
    setActiveSlide((p) => (p - 1 + webSlides.length) % webSlides.length);
  };
  const next = () => {
    setDirection(1);
    setActiveSlide((p) => (p + 1) % webSlides.length);
  };

  const slide = webSlides[activeSlide];

  return (
    <section className="relative overflow-hidden bg-brand-dark">
      {/* Shared background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-ai-grid bg-repeat" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] bg-amber-700/5 rounded-full blur-[160px] pointer-events-none" />

      {/* ════════════════════════════════════════════════════════
          HEADER — shared for the whole section
      ════════════════════════════════════════════════════════ */}
      <div className="container mx-auto px-4 pt-28 pb-0 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-5"
          >
            <Coffee size={14} />
            <span>Our Own Product · Built &amp; Deployed</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white mb-5 leading-tight"
          >
            Introducing{' '}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-600 bg-clip-text text-transparent">
              Vidhyonix Cafe
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Two products in one — a stunning cafe website and a full QR-based table ordering system.
            Live at{' '}
            <a href="https://cafe.vidhyonix.com" target="_blank" rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors">
              cafe.vidhyonix.com
            </a>
          </motion.p>

          {/* Divider chips */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 glass-morphism border border-white/10 rounded-full text-xs text-slate-400 font-medium">
              <Globe size={13} className="text-amber-400" />
              Part 1 · The Website
            </div>
            <div className="w-12 h-px bg-white/10" />
            <div className="flex items-center gap-2 px-4 py-2 glass-morphism border border-white/10 rounded-full text-xs text-slate-400 font-medium">
              <Smartphone size={13} className="text-brand-cyan" />
              Part 2 · Table Ordering App
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          PART 1 — The Website (Image Slider + changing text)
      ════════════════════════════════════════════════════════ */}
      <div className="container mx-auto px-4 pb-28 relative z-10">

        {/* Part label */}
        <div className="flex items-center gap-3 mb-10">
          <div className="flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full">
            <Globe size={14} className="text-amber-400" />
            <span className="text-amber-400 text-sm font-bold">Part 1 — The Website</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-amber-500/20 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Slider */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Browser frame */}
            <div className="rounded-[1.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-amber-900/20 bg-[#0a0a0a]">
              {/* Chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-xs text-slate-400 font-mono flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                    cafe.vidhyonix.com
                  </div>
                </div>
                <ExternalLink size={12} className="text-slate-500" />
              </div>

              {/* Sliding image area */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={activeSlide}
                    custom={direction}
                    initial={{ x: direction * 60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction * -60, opacity: 0 }}
                    transition={{ duration: 0.45, ease: 'easeInOut' }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Prev/Next overlay buttons */}
                <button
                  onClick={prev}
                  aria-label="Previous slide"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-all backdrop-blur-sm z-10"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next slide"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-all backdrop-blur-sm z-10"
                >
                  <ChevronRight size={16} />
                </button>

                {/* Slide counter */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {webSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`rounded-full transition-all duration-300 ${
                        i === activeSlide
                          ? 'w-6 h-2 bg-amber-400'
                          : 'w-2 h-2 bg-white/40 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Rating chip */}
            <div className="absolute -top-4 -right-4 glass-morphism border border-amber-500/20 rounded-2xl px-4 py-3 shadow-xl backdrop-blur-md">
              <div className="flex gap-0.5 mb-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={11} className="text-amber-400 fill-amber-400" />)}
              </div>
              <div className="text-amber-400 font-bold text-lg leading-none">4.9</div>
              <div className="text-slate-500 text-[10px] mt-0.5">10k+ reviews</div>
            </div>
          </motion.div>

          {/* Right: Dynamic text content */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Tag */}
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
                  {slide.tag}
                </span>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight">
                  {slide.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-base leading-relaxed">
                  {slide.desc}
                </p>

                {/* Highlights */}
                <ul className="space-y-3">
                  {slide.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle2 size={16} className="text-amber-400 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Slide nav pills */}
                <div className="flex gap-2 flex-wrap pt-2">
                  {webSlides.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                        i === activeSlide
                          ? 'bg-amber-500/20 border-amber-500/40 text-amber-400'
                          : 'border-white/5 text-slate-600 hover:text-slate-400 hover:border-white/10'
                      }`}
                    >
                      {s.tag}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="https://cafe.vidhyonix.com/" target="_blank" rel="noopener noreferrer">
                <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black rounded-xl font-bold text-sm transition-all hover:scale-105 hover:shadow-lg hover:shadow-amber-500/30 flex items-center gap-2">
                  Visit Live Site <ExternalLink size={14} />
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-6 py-3 glass-morphism border border-white/10 text-white rounded-xl font-bold text-sm hover:border-amber-500/40 transition-all flex items-center gap-2">
                  Book a Demo <ArrowRight size={14} />
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="px-6 py-3 glass-morphism border border-white/10 text-white rounded-xl font-bold text-sm hover:border-amber-500/40 transition-all flex items-center gap-2">
                  Portfolio <ArrowRight size={14} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          PART 2 — The Table Ordering Simulator
      ════════════════════════════════════════════════════════ */}
      <div className="border-t border-white/5 bg-gradient-to-b from-brand-dark to-[#0d0d12]">
        <div className="container mx-auto px-4 py-28 relative z-10">

          {/* Part label */}
          <div className="flex items-center gap-3 mb-10">
            <div className="flex items-center gap-2 px-4 py-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full">
              <Smartphone size={14} className="text-brand-cyan" />
              <span className="text-brand-cyan text-sm font-bold">Part 2 — QR Table Ordering System</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-brand-cyan/20 to-transparent" />
          </div>

          {/* Top text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 leading-tight">
                Guests order from their table.{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-brand-fuchsia bg-clip-text text-transparent">
                  Kitchen gets it instantly.
                </span>
              </h3>
              <p className="text-slate-400 text-base leading-relaxed mb-6">
                We built a complete in-restaurant ordering flow powered by QR codes. No app download, no waiter needed for order-taking.
                Each table has a unique QR — scan it, browse the live menu, add to cart, checkout, and get a real-time confirmation with estimated prep time.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: QrCode, label: 'QR per table', color: 'text-amber-400' },
                  { icon: ShoppingCart, label: 'In-browser cart', color: 'text-orange-400' },
                  { icon: Bell, label: 'Call waiter bell', color: 'text-brand-cyan' },
                  { icon: CheckCircle2, label: 'Live order status', color: 'text-green-400' },
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-2 glass-morphism border border-white/5 rounded-xl text-xs text-slate-300 font-medium">
                    <b.icon size={13} className={b.color} />
                    {b.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-morphism border border-white/5 rounded-2xl p-5">
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-4">How it works</div>
              <div className="space-y-4">
                {[
                  { n: '01', t: 'Table QR Scanned', d: 'Unique QR on each table opens the full menu in the browser.' },
                  { n: '02', t: 'Items Added to Cart', d: 'Guests browse categories and add items with quantity controls.' },
                  { n: '03', t: 'Checkout & Confirm', d: 'Name, phone & table number captured — one-tap "Place Order".' },
                  { n: '04', t: 'Kitchen Notified', d: 'Order ID generated, status shows "Preparing" with ETA.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan text-xs font-black flex-shrink-0">
                      {item.n}
                    </div>
                    <div>
                      <div className="text-white text-sm font-bold">{item.t}</div>
                      <div className="text-slate-500 text-xs mt-0.5">{item.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4 Phone screenshots */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {appSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="flex flex-col items-center gap-4"
              >
                {/* Step badge */}
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full border ${step.borderColor} bg-white/5 text-xs font-bold ${step.color}`}>
                  <span>{step.step}</span>
                  <span>·</span>
                  <span>{step.label}</span>
                </div>

                {/* Phone mockup */}
                <div className={`relative w-full max-w-[160px] mx-auto rounded-[2.5rem] overflow-hidden border-2 ${step.borderColor} shadow-2xl ${step.glowColor} shadow-xl transition-transform duration-500 hover:-translate-y-2`}>
                  <Image
                    src={step.image}
                    alt={step.label}
                    width={400}
                    height={720}
                    className="w-full h-auto block"
                  />
                </div>

                {/* Description */}
                <p className="text-center text-xs text-slate-500 leading-relaxed max-w-[180px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom info strip */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
            <div className="flex flex-wrap items-center gap-5 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <MapPin size={11} className="text-amber-400" />
                F-452, Phase 8b, Mohali 160055
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={11} className="text-amber-400" />
                Open · Closes 11:30 PM
              </span>
              <span className="flex items-center gap-1.5">
                <Coffee size={11} className="text-amber-400" />
                ₹400–₹1,600 per person
              </span>
              <span className="flex items-center gap-1.5">
                <Star size={11} className="text-amber-400 fill-amber-400" />
                4.3 · 774 Google Reviews
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="https://cafe.vidhyonix.com/" target="_blank" rel="noopener noreferrer">
                <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black rounded-xl font-bold text-sm transition-all hover:scale-105 hover:shadow-lg hover:shadow-amber-500/30 flex items-center gap-2">
                  Visit cafe.vidhyonix.com <ExternalLink size={14} />
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-6 py-3 glass-morphism border border-white/10 text-white rounded-xl font-bold text-sm hover:border-amber-500/40 transition-all flex items-center gap-2">
                  Book a Demo <ArrowRight size={14} />
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
