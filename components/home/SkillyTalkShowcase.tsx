'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Mic, Video, BarChart3, MessageSquare, Zap, TrendingUp, Cpu } from 'lucide-react';
import Link from 'next/link';

export default function SkillyTalkShowcase() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-brand-dark">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-ai-grid bg-repeat" />

            {/* Glow Orbs */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand-fuchsia/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-sm font-medium"
                        >
                            <Cpu size={14} />
                            <span>Proprietary Ecosystem</span>
                        </motion.div>

                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
                                <span className="ai-gradient-text">SkillyTalk</span> Interview
                            </h2>
                            <p className="text-xl text-slate-400 max-w-xl">
                                The Engine of Verified Meritocracy. Deploy high-fidelity voice agents that orchestrate talent screening with zero bias.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { icon: Mic, title: 'Vocal Intelligence', desc: 'Neural STT for granular sentiment analysis.' },
                                { icon: MessageSquare, title: 'Contextual Threading', desc: 'AI follow-ups based on response depth.' },
                                { icon: Zap, title: 'Instant Analytics', desc: 'Real-time talent scorecarding.' },
                                { icon: BarChart3, title: 'Bias Mitigation', desc: 'Standardized merit evaluation.' }
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl glass-morphism border border-white/5 flex items-center justify-center text-brand-cyan group-hover:border-brand-cyan/50 transition-colors">
                                        <feature.icon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm mb-1">{feature.title}</h4>
                                        <p className="text-slate-500 text-xs leading-relaxed">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8 flex flex-wrap gap-4">
                            <Link href="https://skillytalkinterview.vidhyonix.com/" target="_blank">
                                <button className="px-8 py-4 bg-white text-black rounded-2xl font-bold tracking-wider hover:bg-slate-200 transition-all flex items-center gap-2">
                                    EXPLORE PLATFORM
                                    <ArrowRight size={18} />
                                </button>
                            </Link>
                            <Link href="/contact">
                                <button className="px-8 py-4 glass-morphism border border-white/10 text-white rounded-2xl font-bold tracking-wider hover:border-brand-cyan/50 transition-all">
                                    BOOK DEMO
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right: Visual Showcase */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative aspect-square glass-morphism rounded-[3rem] border border-white/10 p-4 md:p-8 animate-float">
                            <div className="w-full h-full rounded-[2.5rem] bg-brand-dark/40 overflow-hidden relative border border-white/10">
                                {/* Simulated Terminal / Dashboard */}
                                <div className="absolute inset-0 p-6 font-mono text-[10px] md:text-sm text-brand-cyan opacity-40">
                                    <div className="mb-4 text-white font-bold">» INITIALIZING_SKILLYTALK_PROTOCOL...</div>
                                    <div className="space-y-1">
                                        <div>[OK] NEURAL_CORE_LOADED</div>
                                        <div>[OK] VOCAL_RECOGNITION_ACTIVE</div>
                                        <div>[OK] MERIT_ENGINE_STABLE</div>
                                        <div className="text-brand-fuchsia">► RUNNING CANDIDATE ANALYSIS: ID_8829</div>
                                        <div className="pt-4 border-t border-white/5 mt-4">
                                            <div className="flex justify-between mb-1">
                                                <span>TECHNICAL_FLUIDITY</span>
                                                <span>98.4%</span>
                                            </div>
                                            <div className="w-full h-1 bg-white/5 rounded-full">
                                                <div className="w-[98%] h-full bg-brand-cyan" />
                                            </div>
                                        </div>
                                        <div className="pt-2">
                                            <div className="flex justify-between mb-1">
                                                <span>CONTEXTUAL_THREADING</span>
                                                <span>92.1%</span>
                                            </div>
                                            <div className="w-full h-1 bg-white/5 rounded-full">
                                                <div className="w-[92%] h-full bg-brand-fuchsia" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Overlay Pulse */}
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-cyan/10 to-transparent pointer-events-none animate-pulse" />
                            </div>
                        </div>

                        {/* Decorative Rings */}
                        <div className="absolute -inset-4 border border-brand-cyan/20 rounded-full animate-spin-slow opacity-20 pointer-events-none" />
                        <div className="absolute -inset-12 border border-brand-fuchsia/10 rounded-full animate-reverse-spin-slow opacity-10 pointer-events-none" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
