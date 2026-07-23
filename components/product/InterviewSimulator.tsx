'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Sparkles, Zap, CheckCircle2, ChevronRight, FileSpreadsheet, Eye, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';

const tourScreens = [
  {
    id: 'dashboard',
    label: 'Recruiter Dashboard',
    title: 'Centralized Recruiter Dashboard',
    subtitle: 'Track applicant ratings, read automated transcripts, and analyze deep behavioral insights in a unified workspace.',
    image: '/assets/dashboard.jpg',
    stat: '85%',
    statLabel: 'Hiring Time Saved',
    colorClass: 'text-brand-fuchsia',
    glowClass: 'shadow-brand-fuchsia/20 border-brand-fuchsia/30 bg-brand-fuchsia/10',
    features: [
      'Comprehensive candidate scorecard reports generated instantly.',
      'Voice assessment evaluation across technical and communication vectors.',
      'Direct playback of candidate voice logs with searchable transcripts.'
    ]
  },
  {
    id: 'candidate',
    label: 'Candidate Portal',
    title: 'Voice Assessment Interface',
    subtitle: 'A smooth, natural, and distraction-free voice-to-voice interview interface designed for high user comfort.',
    image: '/assets/cand_dashboard.png',
    stat: '4.8★',
    statLabel: 'Candidate CSAT Rating',
    colorClass: 'text-brand-cyan',
    glowClass: 'shadow-brand-cyan/20 border-brand-cyan/30 bg-brand-cyan/10',
    features: [
      'Zero-latency natural language processing and context-aware follow-ups.',
      'Optimized anti-cheat mechanisms and focus loss monitoring.',
      'Simple, accessible, microphone-only practice round simulations.'
    ]
  },
  {
    id: 'pipeline',
    label: 'Applicant Pipeline',
    title: 'AI Sourcing Pipeline & ATS',
    subtitle: 'Scan, parse, and filter thousands of resumes dynamically. Candidates are automatically scored and ranked by relevance.',
    image: '/assets/active_pipe.png',
    stat: '3x',
    statLabel: 'Sourcing Velocity',
    colorClass: 'text-brand-violet',
    glowClass: 'shadow-brand-violet/20 border-brand-violet/30 bg-brand-violet/10',
    features: [
      'Automated resume keyword matching using vector databases.',
      'Drag-and-drop recruitment pipeline stages synced with CRM metrics.',
      'Unbiased ranking algorithms that filter top 10% talent instantly.'
    ]
  }
];

export default function InterviewSimulator() {
  const [activeTab, setActiveTab] = useState<string>('dashboard');

  const current = tourScreens.find(t => t.id === activeTab)!;

  return (
    <div className="w-full max-w-6xl mx-auto space-y-12">
      {/* Visual Header & Tab Switcher */}
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md gap-1">
          {tourScreens.map((screen) => (
            <button
              key={screen.id}
              onClick={() => setActiveTab(screen.id)}
              className={cn(
                "px-6 py-3 rounded-xl text-sm font-bold tracking-wider transition-all uppercase flex items-center gap-2",
                activeTab === screen.id
                  ? "bg-white text-black shadow-lg shadow-white/5"
                  : "text-slate-400 hover:text-white"
              )}
            >
              <span>{screen.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#0d0d12]/40 rounded-[2.5rem] border border-white/5 p-8 md:p-12 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className={cn("absolute inset-0 opacity-5 bg-gradient-to-tr transition-all duration-700 pointer-events-none",
          activeTab === 'dashboard' ? 'from-brand-fuchsia' : activeTab === 'candidate' ? 'from-brand-cyan' : 'from-brand-violet',
          'to-transparent'
        )} />

        {/* Left: Text & Features Content */}
        <div className="lg:col-span-5 space-y-8 relative z-10 flex flex-col justify-between h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Feature Title */}
              <div className="space-y-3">
                <span className={cn("text-xs font-extrabold tracking-widest uppercase block", current.colorClass)}>
                  Explore SkillyTalk App
                </span>
                <h3 className="text-3xl font-heading font-extrabold text-white">
                  {current.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {current.subtitle}
                </p>
              </div>

              {/* Bullet Features list */}
              <ul className="space-y-4 pt-2">
                {current.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={cn("p-1 rounded-md shrink-0 mt-0.5", current.glowClass)}>
                      <CheckCircle2 size={14} className={current.colorClass} />
                    </div>
                    <span className="text-slate-300 text-sm font-medium leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Metric Card */}
              <div className="pt-4 flex items-center gap-6">
                <div className="glass-morphism rounded-2xl border border-white/5 px-6 py-4 flex flex-col justify-center min-w-[140px] shadow-lg">
                  <span className={cn("text-4xl font-black font-heading leading-none", current.colorClass)}>
                    {current.stat}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-slate-500 mt-2 tracking-wider">
                    {current.statLabel}
                  </span>
                </div>

                <div className="text-slate-400 text-xs leading-relaxed max-w-[200px]">
                  Real verified outcomes measured across active startup and enterprise hiring pipelines.
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Premium Browser Mockup Wrapper */}
        <div className="lg:col-span-7 relative z-10">
          <div className="absolute -inset-4 bg-white/5 rounded-[2rem] blur-2xl opacity-10 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 bg-[#07070a] shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
            >
              {/* Browser Header Bar */}
              <div className="bg-[#0f0f13] border-b border-white/10 px-4 py-3 flex items-center justify-between gap-4 select-none">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 max-w-md mx-auto">
                  <div className="bg-black/50 border border-white/5 rounded-lg px-4 py-1 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                    <span className="truncate">https://aiinterview.skillytalk.com</span>
                    <a
                      href="https://aiinterview.skillytalk.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn("hover:text-white transition-colors flex items-center gap-1 ml-2", current.colorClass)}
                    >
                      <Eye size={10} />
                    </a>
                  </div>
                </div>
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              </div>

              {/* Actual Screenshot Content */}
              <div className="relative w-full h-[calc(100%-43px)] overflow-hidden">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Visual Glassmorphic Action Layer overlay on Hover */}
                <div className="absolute inset-0 bg-brand-dark/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href="https://aiinterview.skillytalk.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "px-6 py-3 rounded-xl bg-white text-black font-bold text-sm tracking-wider shadow-lg flex items-center gap-2 active:scale-95 transition-all"
                    )}
                  >
                    <span>Test App Live</span>
                    <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
