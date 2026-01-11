'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowRight, Zap, Brain, Target } from 'lucide-react';
import Link from 'next/link';

export default function SkillyTalkModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if user has seen the modal before
        const hasSeenModal = localStorage.getItem('hasSeenSkillyTalkModal');

        if (!hasSeenModal) {
            // Show modal after a short delay for better UX
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 2000); // 2 second delay

            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem('hasSeenSkillyTalkModal', 'true');
    };

    const handleExplore = () => {
        localStorage.setItem('hasSeenSkillyTalkModal', 'true');
        window.open('https://skillytalkinterview.vidhyonix.com/', '_blank');
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 flex items-center justify-center z-[101] p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: 'spring', duration: 0.5 }}
                            className="relative w-full max-w-2xl"
                        >
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-fuchsia-600 rounded-3xl blur-2xl opacity-30" />

                            {/* Modal content */}
                            <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl border border-cyan-500/30 shadow-2xl overflow-hidden">
                                {/* Animated background particles */}
                                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                    {[...Array(10)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                                            initial={{
                                                x: `${Math.random() * 100}%`,
                                                y: `${Math.random() * 100}%`,
                                            }}
                                            animate={{
                                                y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                                                opacity: [0, 1, 0],
                                            }}
                                            transition={{
                                                duration: 3 + Math.random() * 2,
                                                repeat: Infinity,
                                                ease: 'linear',
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Close button */}
                                <button
                                    onClick={handleClose}
                                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 group"
                                >
                                    <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-300" />
                                </button>

                                {/* Content */}
                                <div className="relative p-8 md:p-12">
                                    {/* Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border border-cyan-500/30 mb-6"
                                    >
                                        <Sparkles className="w-4 h-4 text-cyan-400" />
                                        <span className="text-sm font-semibold text-cyan-400">New Product Launch</span>
                                    </motion.div>

                                    {/* Title */}
                                    <motion.h2
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-3xl md:text-4xl font-bold mb-4"
                                    >
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400">
                                            SkillyTalk Interview
                                        </span>
                                    </motion.h2>

                                    {/* Subtitle */}
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="text-xl text-white/80 mb-6 font-light"
                                    >
                                        The Engine of Verified Meritocracy
                                    </motion.p>

                                    {/* Description */}
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="text-white/60 mb-8 leading-relaxed"
                                    >
                                        AI-powered interviews that adapt in real-time. Screen global talent with high-fidelity voice agents, intelligent follow-ups, and instant analytics.
                                    </motion.p>

                                    {/* Features */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
                                    >
                                        {[
                                            { icon: Zap, text: 'Zero Latency Setup' },
                                            { icon: Brain, text: 'AI-Powered Insights' },
                                            { icon: Target, text: 'Merit Analytics' },
                                        ].map((feature, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10"
                                            >
                                                <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600">
                                                    <feature.icon className="w-4 h-4 text-white" />
                                                </div>
                                                <span className="text-sm text-white/80 font-medium">{feature.text}</span>
                                            </div>
                                        ))}
                                    </motion.div>

                                    {/* CTA Buttons */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7 }}
                                        className="flex flex-col sm:flex-row gap-4"
                                    >
                                        <button
                                            onClick={handleExplore}
                                            className="group relative flex-1 px-6 py-4 rounded-xl overflow-hidden"
                                        >
                                            {/* Animated gradient background */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-fuchsia-600 animate-gradient-move"
                                                style={{ backgroundSize: '200% 200%' }} />

                                            {/* Shimmer effect */}
                                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />

                                            {/* Button content */}
                                            <span className="relative z-10 flex items-center justify-center gap-2 text-white font-semibold">
                                                Explore Now
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                            </span>
                                        </button>

                                        <button
                                            onClick={handleClose}
                                            className="flex-1 px-6 py-4 rounded-xl border-2 border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold transition-all duration-300"
                                        >
                                            Maybe Later
                                        </button>
                                    </motion.div>

                                    {/* Footer note */}
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.8 }}
                                        className="text-center text-white/40 text-xs mt-6"
                                    >
                                        This message will only appear once
                                    </motion.p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
