'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Cpu, Sparkles, Zap, Brain, MessageSquare, Terminal, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
};

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: "Neural Architectures in Next.js 15",
    excerpt: "Exploring the integration of autonomous logic layers within the latest Next.js 15 routing protocols.",
    date: "2025-05-01",
    category: "Engineering",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "6 min read",
  },
  {
    id: '2',
    title: "High-Fidelity Voice Synthesis",
    excerpt: "The evolution of neural vocal engines and their impact on enterprise autonomous agents.",
    date: "2025-05-02",
    category: "AI Research",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "8 min read",
  },
  {
    id: '3',
    title: "Sovereign Cloud Protocols",
    excerpt: "Securing the decentralized architectural layer for the next wave of global digital ecosystems.",
    date: "2025-05-03",
    category: "Infrastructure",
    image: "https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "5 min read",
  },
  {
    id: '4',
    title: "Predictive Merit Analytics",
    excerpt: "Orchestrating business intelligence through real-time autonomous evaluation systems.",
    date: "2025-05-04",
    category: "Data Systems",
    image: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "10 min read",
  }
];

export default function Blog() {
  const [filter, setFilter] = useState('all');

  const filteredPosts = filter === 'all'
    ? blogPosts
    : blogPosts.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <main className="relative min-h-screen bg-brand-dark overflow-hidden">
      {/* Background Visual System */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] bg-ai-grid bg-repeat" />
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-brand-cyan/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-brand-fuchsia/5 rounded-full blur-[150px]" />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-brand-violet text-sm font-medium mb-8"
          >
            <Brain size={14} />
            <span>Neural Transmissions</span>
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-heading font-extrabold text-white mb-8">
            The <span className="ai-gradient-text">Insights</span> Feed
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Autonomous thought leadership, architectural blueprints, and engineering protocols for the digital-first world.
          </p>
        </div>
      </section>

      {/* Featured Transmission */}
      <section className="py-20 z-10 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative glass-morphism rounded-[2.5rem] border border-white/5 overflow-hidden flex flex-col lg:flex-row shadow-2xl"
          >
            <div className="lg:w-1/2 aspect-video lg:aspect-auto relative">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-transparent hidden lg:block" />
              <div className="absolute top-8 left-8 p-3 rounded-xl glass-morphism border border-white/10 text-white">
                <Zap size={20} className="text-brand-cyan" />
              </div>
            </div>

            <div className="flex-1 p-8 md:p-16 flex flex-col justify-center gap-6">
              <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-brand-cyan uppercase">
                <span>LATEST_NODE</span>
                <span className="w-8 h-px bg-brand-cyan/30" />
                <span>{blogPosts[0].category}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white group-hover:text-brand-cyan transition-colors">
                {blogPosts[0].title}
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  {blogPosts[0].date}
                </div>
                <div className="flex items-center gap-2">
                  <Terminal size={14} />
                  {blogPosts[0].readTime}
                </div>
              </div>
              <Link href={`/blog/${blogPosts[0].id}`} className="mt-4 flex items-center gap-3 text-white font-bold group w-fit">
                Read Transmission
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform text-brand-cyan" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 z-10 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-tighter flex items-center gap-3">
              <MessageSquare size={20} className="text-brand-fuchsia" />
              ALL_PROTOCOLS
            </h3>

            <div className="flex gap-2 p-1 rounded-2xl bg-white/5 border border-white/5">
              {['all', 'engineering', 'research', 'infra'].map((cat) => (
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
              {filteredPosts.slice(1).map((p, i) => (
                <motion.div
                  layout
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative glass-morphism p-6 rounded-[2rem] border border-white/5 hover:border-white/20 transition-all duration-500 flex flex-col"
                >
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-white/5">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" />
                  </div>

                  <div className="space-y-4 flex-1 flex flex-col">
                    <div className="text-brand-fuchsia font-bold text-[10px] tracking-widest uppercase">
                      {p.category}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white group-hover:text-brand-cyan transition-colors line-clamp-2">{p.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">{p.excerpt}</p>

                    <div className="pt-4 mt-auto flex items-center justify-between border-t border-white/5 text-[10px] font-bold text-white/40 tracking-wider">
                      <span className="flex items-center gap-1"><Calendar size={10} /> {p.date}</span>
                      <span className="flex items-center gap-1"><Terminal size={10} /> {p.readTime}</span>
                    </div>
                  </div>

                  <Link href={`/blog/${p.id}`} className="absolute inset-0" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
