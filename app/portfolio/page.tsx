'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Cpu, Sparkles, Globe, Rocket, Zap, Target, History, ExternalLink } from 'lucide-react';
// @ts-ignore
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { cn } from '@/lib/utils';

// Import assets (assuming they exist as per previous context)
import madamJan from '@/app/assets/projects/madamjan.png';
import evitavonni from '@/app/assets/projects/evitavoni.png';
import paliYoga from '@/app/assets/projects/paliyoga.png';
import sascoStudentLiving from '@/app/assets/projects/sasco.png';
import designLiving from '@/app/assets/projects/designliving.png';
import watchHouse from '@/app/assets/projects/watchhouse.png';
import cryptoMLM from '@/app/assets/projects/phase2crypto.png';
import marketReach from '@/app/assets/projects/aitools.png';
import abundish from '@/app/assets/projects/abundish.png';
import cyphr from '@/app/assets/3d/cyphr.png';
import trionn from '@/app/assets/3d/trionn.png';
import compsych from '@/app/assets/3d/compsych.png';
import aether from '@/app/assets/3d/aether.png';

const projects = [
  {
    id: 1,
    title: 'Madam Jan',
    description: 'A design-forward homeware brand focused on beauty and function.',
    tech: ['Shopify', 'Three.js'],
    category: 'web',
    image: madamJan.src,
    link: 'https://madamjanindia.com/',
  },
  {
    id: 2,
    title: 'Evitavonni',
    description: 'Timeless luxury couture and artisanal craftsmanship showcase.',
    tech: ['WordPress', 'GSAP'],
    category: 'web',
    image: evitavonni.src,
    link: 'https://www.evitavonni.com/',
  },
  {
    id: 3,
    title: 'Pali Yoga',
    description: 'Transformative digital space for mindfulness and stretch.',
    tech: ['WordPress'],
    category: 'web',
    image: paliYoga.src,
    link: 'https://www.pali.yoga/',
  },
  {
    id: 9,
    title: 'Abundish',
    description: 'Next-gen delivery ecosystem with real-time logistics tracking.',
    tech: ['Next.js', 'Nest.js', 'Redis'],
    category: 'web',
    image: abundish.src,
    link: 'https://staging.abundish.com/',
  },
  {
    id: 10,
    title: 'Aether 1',
    description: 'High-fidelity audio systems with neural core integration.',
    tech: ['Three.js', 'Blender', 'Framer'],
    category: '3d',
    image: aether.src,
    link: 'https://www.aether1.ai/',
  },
  {
    id: 13,
    title: 'Cyphr Studio',
    description: 'Strategic creative hub for fan engagement and data-driven growth.',
    tech: ['Three.js', 'React'],
    category: '3d',
    image: cyphr.src,
    link: 'https://www.cyphr.studio/',
  },
];

const milestones = [
  {
    year: '2024',
    title: 'Singularity Initialized',
    description: 'Foundational architecture of our neural engineering core.',
    icon: Rocket,
    color: 'text-brand-cyan',
  },
  {
    year: '2025',
    title: 'Ecosystem Alpha',
    description: 'Deployment of autonomous enterprise-grade frameworks.',
    icon: Globe,
    color: 'text-brand-fuchsia',
  },
  {
    year: '2025',
    title: 'Neural Expansion',
    description: 'Integration of real-time vocal intelligence protocols.',
    icon: Zap,
    color: 'text-brand-violet',
  },
  {
    year: '2026',
    title: 'Global Supremacy',
    description: 'The primary architectural layer for autonomous evolution.',
    icon: Target,
    color: 'text-brand-cyan',
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 32 },
    breakpoints: {
      '(min-width: 1024px)': { slides: { perView: 3, spacing: 32 } },
    },
  });

  return (
    <main className="relative min-h-screen bg-brand-dark overflow-hidden">
      {/* Background Visual System */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] bg-ai-grid bg-repeat" />
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-brand-cyan/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-brand-fuchsia/5 rounded-full blur-[150px]" />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-sm font-medium mb-8"
          >
            <Sparkles size={14} />
            <span>Digital Supremacy</span>
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-heading font-extrabold text-white mb-8">
            The <span className="ai-gradient-text">Neural</span> Archive
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Exploring the boundary between autonomous logic and high-fidelity design. Every project is a node in our expanding digital ecosystem.
          </p>
        </div>
      </section>

      {/* Featured Slider */}
      <section className="py-20 z-10 relative">
        <div className="container mx-auto px-4 mb-12 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white uppercase tracking-tighter flex items-center gap-3">
            <Zap size={20} className="text-brand-fuchsia" />
            FEATURED_DEPLOYMENTS
          </h2>
          <div className="flex gap-2">
            <button onClick={() => slider.current?.prev()} className="p-2 rounded-full border border-white/10 hover:bg-white/5 text-white transition-all">
              <ArrowRight className="rotate-180" size={20} />
            </button>
            <button onClick={() => slider.current?.next()} className="p-2 rounded-full border border-white/10 hover:bg-white/5 text-white transition-all">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div ref={sliderRef} className="keen-slider px-4">
          {projects.map((p) => (
            <div key={p.id} className="keen-slider__slide">
              <motion.div
                className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/5 group"
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.5 }}
              >
                <img src={p.image} alt={p.title} className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-brand-cyan font-bold text-xs tracking-widest uppercase mb-2">ARCHIVE_NODE_{p.id}</div>
                  <h3 className="text-3xl font-heading font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-slate-300 text-sm line-clamp-1">{p.description}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Grid with Filter */}
      <section className="py-32 z-10 relative bg-brand-dark/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <h2 className="text-4xl font-heading font-bold text-white">Project <span className="text-brand-cyan">Nexus</span></h2>

            <div className="flex gap-2 p-1 rounded-2xl bg-white/5 border border-white/5">
              {['all', 'web', '3d', 'marketing'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={cn(
                    "px-6 py-2 rounded-xl text-sm font-bold transition-all uppercase tracking-widest",
                    filter === cat ? "bg-white text-black" : "text-white/40 hover:text-white"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p, i) => (
                <motion.div
                  layout
                  key={p.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative glass-morphism p-8 rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all duration-500"
                >
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 border border-white/5">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" />
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-heading font-bold text-white group-hover:text-brand-cyan transition-colors">{p.title}</h3>
                      <Link href={p.link} target="_blank">
                        <ExternalLink size={20} className="text-white/20 hover:text-brand-cyan transition-colors" />
                      </Link>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed">{p.description}</p>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {p.tech.map(t => (
                        <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] font-bold text-white/50 tracking-wider">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* History/Milestones Section */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-fuchsia/10 border border-brand-fuchsia/20 text-brand-fuchsia text-sm font-medium mb-6">
              <History size={14} />
              <span>Lineage</span>
            </div>
            <h2 className="text-4xl font-heading font-bold text-white">The <span className="ai-gradient-text">Ecdysis</span> Timeline</h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />

            <div className="space-y-24">
              {milestones.map((m, i) => {
                const Icon = m.icon;
                return (
                  <motion.div
                    key={m.title}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={cn(
                      "relative flex flex-col md:flex-row gap-8 items-center",
                      i % 2 === 1 && "md:flex-row-reverse"
                    )}
                  >
                    <div className="flex-1 text-center md:text-left">
                      <div className={cn("text-5xl font-heading font-bold mb-4 opacity-20", m.color.replace('text', 'text-shadow'))}>
                        {m.year}
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-white mb-2">{m.title}</h3>
                      <p className="text-slate-500 max-w-sm mx-auto md:mx-0">{m.description}</p>
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 bg-brand-cyan/20 blur-xl scale-150 rotate-45" />
                      <div className={cn("relative w-24 h-24 rounded-3xl glass-morphism border border-white/10 flex items-center justify-center", m.color)}>
                        <Icon size={40} />
                      </div>
                    </div>

                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}