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
              <span>Next-Gen IT Solutions Powered by AI</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] text-white"
            >
              Architecting the <span className="ai-gradient-text animate-pulse">Future</span> of Digital Meritocracy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed"
            >
              {APP_NAME} engineers high-fidelity voice agents, intelligent follow-ups, and instant analytics. We don't just build apps; we create autonomous ecosystems for modern businesses.
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

          {/* Right Content - Abstract AI Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative aspect-square w-full">
              {/* Central Glowing AI Core */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-violet/30 rounded-full blur-[60px] animate-pulse-slow" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-white/10 rounded-full"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-12 border border-white/5 rounded-full"
              />

              {/* Decorative AI Floating Modules */}
              {[
                { icon: Cpu, label: "Neural Engine", top: "10%", right: "10%", color: "text-brand-cyan" },
                { icon: Zap, label: "Edge Computing", bottom: "15%", left: "5%", color: "text-brand-fuchsia" },
                { icon: Shield, label: "Quantum Security", top: "60%", right: "-5%", color: "text-brand-violet" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  style={{ top: item.top, bottom: item.bottom, left: item.left, right: item.right }}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4 + idx, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute z-20 glass-morphism p-4 rounded-2xl flex flex-col items-center gap-2 min-w-[120px]"
                >
                  <item.icon className={item.color} size={28} />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">{item.label}</span>
                </motion.div>
              ))}

              {/* Hero PNG integration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/images/ai-hero.png"
                  alt="AI Core"
                  className="w-[80%] h-[80%] object-contain opacity-80 mix-blend-screen brightness-125"
                />
              </div>
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