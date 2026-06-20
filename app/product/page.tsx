'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Target, Users, Zap, Briefcase, FileCheck, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import InterviewSimulator from '@/components/product/InterviewSimulator';
import ROICalculator from '@/components/product/ROICalculator';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function ProductPage() {
  return (
    <>
      <main className="relative min-h-screen bg-brand-dark overflow-hidden">
        {/* Background Visual System */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.03] bg-ai-grid bg-repeat" />
          <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-brand-fuchsia/5 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-brand-cyan/5 rounded-full blur-[150px] animate-pulse" />
        </div>

        <Header />

        {/* Hero Section */}
        <section className="relative pt-40 pb-20 z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-fuchsia/10 border border-brand-fuchsia/20 text-brand-fuchsia text-sm font-medium mb-8"
              >
                <Bot size={14} />
                <span>Vidhyonix Flagship Product</span>
              </motion.div>

              <motion.h1 
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-6xl md:text-8xl font-heading font-extrabold text-white mb-8 leading-tight tracking-tight"
              >
                Meet <span className="ai-gradient-text">SkillyTalk</span>
              </motion.h1>

              <motion.p 
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed"
              >
                The intelligent engine powering modern hiring. We orchestrate autonomous AI evaluations that uncover professional merit through smart, conversational interviews.
              </motion.p>

              <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <Link href="https://hire.skillytalk.com" target="_blank">
                  <button className="px-8 py-4 bg-brand-fuchsia hover:bg-fuchsia-600 text-white rounded-full font-bold text-lg flex items-center gap-2 shadow-lg shadow-brand-fuchsia/20 transition-all hover:scale-105 hover:shadow-brand-fuchsia/40">
                    Start Free Trial <ArrowRight size={20} />
                  </button>
                </Link>
                <Link href="https://www.skillytalk.com/" target="_blank">
                  <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-bold text-lg transition-all hover:scale-105">
                    Explore SkillyTalk
                  </button>
                </Link>
              </motion.div>
            </div>
            
            {/* Interactive Simulator embedded in Hero */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="mt-20 relative z-20"
            >
              <InterviewSimulator />
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 border-y border-white/5 bg-white/[0.02] relative z-10">
          <div className="container mx-auto px-4">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
            >
              {[
                { label: "AI Assessments", value: "250+" },
                { label: "Hours Saved", value: "400+" },
                { label: "Companies", value: "20+" },
                { label: "Candidate CSAT", value: "75%" }
              ].map((stat, i) => (
                <motion.div key={i} variants={fadeInUp} className="space-y-2">
                  <div className="text-4xl md:text-5xl font-black text-white">{stat.value}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Core Features for HR */}
        <section className="py-32 relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6">
                Architected for <span className="text-brand-fuchsia">Talent Confidence</span>
              </h2>
              <p className="text-lg text-slate-400">
                A decentralized intelligence layer that empowers recruitment teams to make high-conviction decisions faster than ever.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-brand-fuchsia/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-fuchsia/10 text-brand-fuchsia flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Vocal Intelligence</h3>
                <p className="text-slate-400 leading-relaxed">
                  Screen global talent pools simultaneously with consistent, high-fidelity AI voice agents. Natural speech processing evaluates candidates in real-time.
                </p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-brand-cyan/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Merit Analytics</h3>
                <p className="text-slate-400 leading-relaxed">
                  Standardized vector scoring eliminates bias and surfaces latent technical talent. View instant, granular analysis of behavioral and technical vectors.
                </p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-brand-violet/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-violet/10 text-brand-violet flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Smart Pipeline</h3>
                <p className="text-slate-400 leading-relaxed">
                  Visual stages from New to Hired. Drag, drop, and automate movement using our integrated CRM. Focus mode instantly filters out 90% of the noise.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Candidate & Automation Section */}
        <section className="py-32 bg-white/[0.02] border-t border-white/5 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white leading-tight">
                  More Than Just <br/> <span className="ai-gradient-text">Interviews</span>
                </h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                    <div className="p-3 bg-brand-dark rounded-xl text-brand-cyan shrink-0">
                      <FileCheck size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1">ATS Score Checker</h4>
                      <p className="text-slate-400">Candidates can upload resumes to get a detailed score against target roles and generate ATS-optimized versions in seconds.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                    <div className="p-3 bg-brand-dark rounded-xl text-brand-fuchsia shrink-0">
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1">N8N Workflows</h4>
                      <p className="text-slate-400">We build pipelines that make AI work. Custom n8n workflows connect your favorite tools into one autonomous powerhouse.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-brand-fuchsia/20 to-brand-cyan/20 p-2">
                  <div className="w-full h-full rounded-[2.8rem] bg-brand-dark border border-white/10 p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-white mb-6 text-center">Ready to upgrade your hiring?</h3>
                    <ul className="space-y-4 mb-8">
                      {[
                        "Zero Latency Setup",
                        "Contextual Threading",
                        "Talent Scorecarding",
                        "No Credit Card Required"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-300">
                          <CheckCircle2 size={20} className="text-brand-cyan" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link href="https://hire.skillytalk.com" target="_blank" className="w-full">
                      <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        Get Started for Free
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ROI Calculator embedded near the bottom CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-32"
            >
              <ROICalculator />
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
