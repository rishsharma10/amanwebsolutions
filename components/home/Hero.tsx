'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Shield, Cpu } from 'lucide-react';
import { APP_NAME } from '../layout/Footer';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark pt-20"
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300 opacity-50"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(124, 58, 237, 0.15), transparent 80%)`,
        }}
      />

      {/* AI Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-ai-grid bg-cover bg-center mix-blend-overlay" />

      {/* Background Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-violet/20 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-cyan/20 blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container relative mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-brand-cyan text-sm font-medium"
            >
              <Sparkles size={14} className="animate-pulse" />
              <span>Accelerate Your Business Growth</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] text-white"
            >
              Intelligent IT Solutions to <span className="ai-gradient-text animate-pulse">Scale</span> Your Business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed"
            >
              From custom web platforms and mobile applications to autonomous AI agents, {APP_NAME} engineers technology that drives tangible revenue and operational efficiency.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link href="/contact">
                <button className="group relative px-8 py-4 bg-brand-violet hover:bg-brand-violet/90 text-white rounded-xl font-bold text-lg transition-all flex items-center gap-2 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span>Explore Solutions</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold text-lg transition-all backdrop-blur-md flex items-center gap-2">
                  <span>View Our Impact</span>
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-center gap-8 pt-8 border-t border-white/5"
            >
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">20+</span>
                <span className="text-sm text-slate-400">Global Partners</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">99%</span>
                <span className="text-sm text-slate-400">Uptime Reliability</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <img key={i} src={`https://randomuser.me/api/portraits/women/${i + 20}.jpg`} className="w-8 h-8 rounded-full border-2 border-brand-dark" alt="User" />
                  ))}
                </div>
                <span className="text-sm text-slate-400">Trusted by Experts</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Realistic Dashboard UI Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative w-full aspect-square flex items-center justify-center">
              {/* Central Glowing Backing */}
              <div className="absolute w-[80%] h-[80%] bg-brand-violet/20 rounded-full blur-[80px] animate-pulse-slow" />

              {/* Main Dashboard Card Mockup */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-[90%] bg-[#0a0a0f]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
              >
                {/* Mac OS Header */}
                <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                {/* Content Area */}
                <div className="p-6 grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="h-4 w-24 bg-white/20 rounded" />
                      <div className="h-3 w-16 bg-white/10 rounded" />
                    </div>
                    <div className="h-8 w-8 rounded-full bg-brand-cyan/20 flex items-center justify-center">
                      <Sparkles size={14} className="text-brand-cyan" />
                    </div>
                  </div>
                  {/* Chart lines */}
                  <div className="flex items-end gap-2 h-28 mt-4">
                    {[40, 70, 45, 90, 65, 100, 80].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="flex-1 bg-gradient-to-t from-brand-violet/50 to-brand-cyan rounded-t-sm opacity-80"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating Element 1 - Realtime Call/Agent */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-4 top-[20%] z-20 glass-morphism p-4 rounded-2xl flex items-center gap-4 w-48 shadow-2xl"
              >
                <div className="w-10 h-10 rounded-full bg-brand-cyan/20 flex items-center justify-center">
                  <Zap className="text-brand-cyan" size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">AI Agent Active</div>
                  <div className="text-[10px] text-brand-cyan mt-0.5">Handling queries</div>
                </div>
              </motion.div>

              {/* Floating Element 2 - Security/DevOps */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -left-8 bottom-[20%] z-20 glass-morphism p-4 rounded-2xl flex items-center gap-4 w-52 shadow-2xl"
              >
                <div className="w-10 h-10 rounded-full bg-brand-fuchsia/20 flex items-center justify-center">
                  <Shield className="text-brand-fuchsia" size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Scale & Support</div>
                  <div className="text-[10px] text-brand-fuchsia mt-0.5">99.9% Uptime</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-dark to-transparent z-20" />

      {/* Animated Particles/Dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: Math.random()
            }}
            animate={{
              y: [null, "-20px"],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
    </div>
  );
}