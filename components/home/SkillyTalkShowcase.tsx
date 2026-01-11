'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Mic, Video, BarChart3, MessageSquare, Zap, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function SkillyTalkShowcase() {
    const [particles, setParticles] = useState<Array<{ x: string; y: string; scale: number; duration: number }>>([]);

    useEffect(() => {
        // Generate particles only on client side to avoid hydration mismatch
        setParticles(
            Array.from({ length: 20 }, () => ({
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                scale: Math.random() * 0.5 + 0.5,
                duration: Math.random() * 10 + 10
            }))
        );
    }, []);

    const features = [
        {
            icon: Mic,
            title: 'Vocal Intelligence',
            description: 'Screen global talent pools with high-fidelity AI voice agents',
            gradient: 'from-cyan-500 to-blue-600'
        },
        {
            icon: Video,
            title: 'Visual Veracity',
            description: 'Immutable replays and transcripts preserving every nuance',
            gradient: 'from-fuchsia-500 to-pink-600'
        },
        {
            icon: BarChart3,
            title: 'Merit Analytics',
            description: 'Standardized scoring that eliminates bias and surfaces talent',
            gradient: 'from-sky-500 to-cyan-600'
        },
        {
            icon: MessageSquare,
            title: 'Contextual Threading',
            description: 'AI follow-ups that probe the "why" behind the technical "what"',
            gradient: 'from-purple-500 to-fuchsia-600'
        },
        {
            icon: Zap,
            title: 'Zero Latency Setup',
            description: 'Deploy sophisticated assessment pipelines in under 120 seconds',
            gradient: 'from-amber-500 to-orange-600'
        },
        {
            icon: TrendingUp,
            title: 'Talent Scorecarding',
            description: 'Instant granular analysis of technical and behavioral vectors',
            gradient: 'from-emerald-500 to-teal-600'
        }
    ];

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-fuchsia-950" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(217,70,239,0.1),transparent_50%)]" />

            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {particles.map((particle, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                        initial={{
                            x: particle.x,
                            y: particle.y,
                            scale: particle.scale
                        }}
                        animate={{
                            y: [particle.y, `${(parseFloat(particle.y) + 50) % 100}%`],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            ease: 'linear'
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 border border-cyan-500/20 mb-6">
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm font-medium text-cyan-400">Featured Product</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400">
                            SkillyTalk Interview
                        </span>
                    </h2>

                    <p className="text-xl md:text-2xl text-white/80 font-light mb-4">
                        The Engine of Verified Meritocracy
                    </p>

                    <p className="text-lg text-white/60 max-w-3xl mx-auto">
                        AI Interviews That Adapt & Learn. Smart conversations that understand context,
                        ask follow-up questions, and provide instant insights.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative"
                        >
                            {/* Card background with glassmorphism */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl backdrop-blur-sm border border-white/10 group-hover:border-cyan-500/30 transition-all duration-300" />

                            {/* Glow effect on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-300`} />

                            {/* Content */}
                            <div className="relative p-6">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                                    {feature.title}
                                </h3>

                                <p className="text-white/60 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center"
                >
                    <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <Link href="https://skillytalkinterview.vidhyonix.com/" target="_blank" rel="noopener noreferrer">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative px-8 py-4 rounded-full overflow-hidden"
                            >
                                {/* Animated gradient background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-fuchsia-600 animate-gradient-move"
                                    style={{ backgroundSize: '200% 200%' }} />

                                {/* Shimmer effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />

                                {/* Button content */}
                                <span className="relative z-10 flex items-center gap-2 text-white font-semibold text-lg">
                                    Explore SkillyTalk Interview
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </motion.button>
                        </Link>

                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 rounded-full border-2 border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/10 text-cyan-400 font-semibold text-lg backdrop-blur-sm transition-all duration-300"
                            >
                                Request Demo
                            </motion.button>
                        </Link>
                    </div>

                    <p className="text-white/40 text-sm mt-6">
                        Transform qualitative dialogue into quantitative talent data
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
