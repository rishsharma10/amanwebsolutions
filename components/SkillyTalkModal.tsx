'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowRight, Brain } from 'lucide-react';
import Link from 'next/link';

const skillyTalkImages = [
    '/assets/dashboard.png',
    '/assets/agent.png',
    '/assets/active_pipe.png',
    '/assets/analytics.png'
];

const cafeImages = [
    '/assets/cafe/hero.png',
    '/assets/cafe/order_create.png',
    '/assets/cafe/cold_coffee.png',
    '/assets/cafe/simulator.png'
];

const AutoCarousel = ({ images }: { images: string[] }) => {
    const duplicatedImages = [...images, ...images];
    return (
        <div className="relative w-full h-24 sm:h-32 md:h-40 mt-2 mb-6 overflow-hidden rounded-xl border border-white/5 bg-black/10">
            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                    },
                }}
                className="flex h-full w-max"
            >
                {duplicatedImages.map((src, i) => (
                    <div key={i} className="h-full w-48 md:w-56 flex-shrink-0 p-2">
                        <div className="w-full h-full relative rounded-lg overflow-hidden border border-white/10 shadow-lg">
                            <img 
                                src={src} 
                                alt="Product Screenshot" 
                                className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-100 transition-opacity duration-500" 
                            />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default function SkillyTalkModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0); // 0 for SkillyTalk, 1 for Cafe
    const [isMobile, setIsMobile] = useState(false);

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

    // Detect screen size to toggle sliding logic
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768); // 768px matches md breakpoint
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem('hasSeenSkillyTalkModal', 'true');
    };

    const handleExplore = () => {
        localStorage.setItem('hasSeenSkillyTalkModal', 'true');
        window.open('https://aiinterview.skillytalk.com/', '_blank');
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] overflow-y-auto flex items-center justify-center">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
                    />

                    {/* Modal container wrapper */}
                    <div className="relative w-full max-w-5xl mx-auto my-12 p-4 md:p-6 pointer-events-none z-[101]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: 'spring', duration: 0.5 }}
                            className="relative w-full pointer-events-auto"
                        >
                            {/* Close button */}
                            <button
                                onClick={handleClose}
                                className="absolute -top-12 right-4 md:top-4 md:right-4 z-50 p-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-white/20 transition-all duration-300 group backdrop-blur-sm shadow-xl"
                            >
                                <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-300" />
                            </button>

                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-fuchsia-600 rounded-3xl blur-2xl opacity-30 pointer-events-none" />

                            {/* Modal content */}
                            <div className="relative bg-slate-900 rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">
                                
                                {/* Mobile Segmented Tab Control */}
                                {isMobile && (
                                    <div className="flex border-b border-white/10 p-2 gap-2 bg-slate-950/60 backdrop-blur-sm z-20 relative">
                                        <button
                                            onClick={() => setActiveSlide(0)}
                                            className={`flex-1 py-2 text-center text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 ${activeSlide === 0 ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30' : 'text-white/60 border border-transparent'}`}
                                        >
                                            SkillyTalk AI
                                        </button>
                                        <button
                                            onClick={() => setActiveSlide(1)}
                                            className={`flex-1 py-2 text-center text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 ${activeSlide === 1 ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 border border-amber-500/30' : 'text-white/60 border border-transparent'}`}
                                        >
                                            Vidhyonix Cafe
                                        </button>
                                    </div>
                                )}

                                {/* Inner sliding container */}
                                <motion.div 
                                    animate={{ x: isMobile ? (activeSlide === 0 ? "0%" : "-50%") : "0%" }}
                                    transition={{ type: "spring", stiffness: 260, damping: 26 }}
                                    className="flex w-[200%] md:w-full"
                                >
                                    {/* SkillyTalk Section */}
                                    <div className="w-1/2 md:w-1/2 flex-shrink-0 relative p-6 sm:p-8 md:p-12 border-r-0 md:border-r border-white/10 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden group">
                                        {/* Animated background particles */}
                                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                            {[...Array(5)].map((_, i) => (
                                                <motion.div
                                                    key={`skilly-${i}`}
                                                    className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                                                    initial={{ x: `${Math.random() * 100}%`, y: `${Math.random() * 100}%` }}
                                                    animate={{ y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`], opacity: [0, 1, 0] }}
                                                    transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: 'linear' }}
                                                />
                                            ))}
                                        </div>
                                        
                                        <div className="relative z-10 flex flex-col h-full">
                                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-4 md:mb-6 w-fit">
                                                <Brain className="w-4 h-4 text-cyan-400" />
                                                <span className="text-xs sm:text-sm font-semibold text-cyan-400">AI Recruitment</span>
                                            </div>
                                            
                                            <h2 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4">
                                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                                                    SkillyTalk AI
                                                </span>
                                            </h2>
                                            
                                            <p className="text-white/60 text-sm sm:text-base mb-4 leading-relaxed">
                                                The Engine of Verified Meritocracy. AI-powered interviews that adapt in real-time. Screen global talent with high-fidelity voice agents.
                                            </p>
                                            
                                            <div className="flex-grow">
                                                <AutoCarousel images={skillyTalkImages} />
                                            </div>
                                            
                                            <button
                                                onClick={() => {
                                                    localStorage.setItem('hasSeenSkillyTalkModal', 'true');
                                                    window.open('https://aiinterview.skillytalk.com/', '_blank');
                                                    setIsOpen(false);
                                                }}
                                                className="group/btn relative w-full px-5 py-3 sm:px-6 sm:py-4 rounded-xl overflow-hidden mt-2"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 group-hover/btn:scale-105 transition-transform duration-300" />
                                                <span className="relative z-10 flex items-center justify-center gap-2 text-white font-semibold text-sm sm:text-base">
                                                    Explore SkillyTalk
                                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                                </span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Vidhyonix Cafe Section */}
                                    <div className="w-1/2 md:w-1/2 flex-shrink-0 relative p-6 sm:p-8 md:p-12 bg-gradient-to-br from-amber-950 via-orange-950/40 to-slate-900 overflow-hidden group">
                                        <div className="absolute inset-0 bg-[url('/assets/cafe/hero.png')] bg-cover bg-center opacity-10 mix-blend-overlay group-hover:scale-110 group-hover:opacity-20 transition-all duration-700" />
                                        
                                        <div className="relative z-10 flex flex-col h-full">
                                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-4 md:mb-6 w-fit">
                                                <Sparkles className="w-4 h-4 text-amber-400" />
                                                <span className="text-xs sm:text-sm font-semibold text-amber-400">Digital Cafe Experience</span>
                                            </div>
                                            
                                            <h2 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4">
                                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                                                    Vidhyonix Cafe
                                                </span>
                                            </h2>
                                            
                                            <p className="text-white/60 text-sm sm:text-base mb-4 leading-relaxed">
                                                A stunning cafe website with an immersive digital menu and a frictionless QR-based table ordering experience.
                                            </p>
                                            
                                            <div className="flex-grow">
                                                <AutoCarousel images={cafeImages} />
                                            </div>
                                            
                                            <button
                                                onClick={() => {
                                                    localStorage.setItem('hasSeenSkillyTalkModal', 'true');
                                                    window.open('https://cafe.vidhyonix.com/', '_blank');
                                                    setIsOpen(false);
                                                }}
                                                className="group/btn relative w-full px-5 py-3 sm:px-6 sm:py-4 rounded-xl overflow-hidden mt-2"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 group-hover/btn:scale-105 transition-transform duration-300" />
                                                <span className="relative z-10 flex items-center justify-center gap-2 text-white font-semibold text-sm sm:text-base">
                                                    Explore Cafe
                                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
}
