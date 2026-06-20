'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Cpu, Sparkles, Zap, Brain, MessageSquare, Terminal, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

import { BlogPost, blogPosts } from "@/lib/blogData";


// Animation variants for smooth, staggered loads
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

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
            <span>Our Latest Thoughts</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-6"
          >
            The <span className="ai-gradient-text">Insights</span> Blog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Clear, actionable advice on web development, artificial intelligence, and growing your business through technology.
          </motion.p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 z-10 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative glass-morphism rounded-[2.5rem] border border-white/5 overflow-hidden flex flex-col lg:flex-row shadow-2xl hover:border-brand-cyan/30 transition-colors duration-500"
          >
            <div className="lg:w-1/2 aspect-video lg:aspect-auto relative overflow-hidden">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-transparent hidden lg:block" />
              <div className="absolute top-8 left-8 p-3 rounded-xl glass-morphism border border-white/10 text-white shadow-lg">
                <Zap size={20} className="text-brand-cyan" />
              </div>
            </div>

            <div className="flex-1 p-8 md:p-16 flex flex-col justify-center gap-6">
              <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-brand-cyan uppercase">
                <span>Featured Post</span>
                <span className="w-8 h-px bg-brand-cyan/30" />
                <span>{blogPosts[0].category}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white hover:text-brand-cyan transition-colors">
                <Link href={`/blog/${blogPosts[0].id}`}>{blogPosts[0].title}</Link>
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
              <Link href={`/blog/${blogPosts[0].id}`} className="mt-4 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center gap-3 text-white font-bold group w-fit transition-all">
                Read Article
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-brand-cyan" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 z-10 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <h3 className="text-2xl font-heading font-bold text-white flex items-center gap-3">
              <MessageSquare size={20} className="text-brand-fuchsia" />
              All Articles
            </h3>

            <div className="flex flex-wrap gap-2 p-1 rounded-2xl bg-white/5 border border-white/5">
              {['all', 'artificial intelligence', 'web development', 'business growth', 'cloud & security'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all capitalize tracking-wide",
                    filter === cat ? "bg-white text-black shadow-md" : "text-white/60 hover:text-white"
                  )}
                >
                  {cat === 'all' ? 'All Topics' : cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredPosts.slice(1).map((p) => (
                <motion.div
                  layout
                  variants={itemVariants}
                  key={p.id}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group relative glass-morphism p-6 rounded-[2rem] border border-white/5 hover:border-brand-cyan/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col bg-white/[0.02]"
                >
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-inner">
                    <Image src={p.image} alt={p.title} fill className="object-cover transform group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-brand-fuchsia font-bold text-[10px] tracking-widest uppercase">
                      {p.category}
                    </div>
                  </div>

                  <div className="space-y-4 flex-1 flex flex-col">
                    <h3 className="text-xl font-heading font-bold text-white group-hover:text-brand-cyan transition-colors line-clamp-2 leading-snug">{p.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{p.excerpt}</p>

                    <div className="pt-6 mt-auto flex items-center justify-between border-t border-white/5 text-xs font-medium text-slate-500">
                      <span className="flex items-center gap-1.5"><Calendar size={14} /> {p.date}</span>
                      <span className="flex items-center gap-1.5 text-brand-cyan"><Terminal size={14} /> {p.readTime}</span>
                    </div>
                  </div>

                  <Link href={`/blog/${p.id}`} className="absolute inset-0" aria-label={`Read ${p.title}`} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
