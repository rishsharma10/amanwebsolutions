'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Shield, Cpu } from 'lucide-react';
import NeuralNetwork3D from '@/components/shared/NeuralNetwork3D';
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
          <div className="lg:col-span-6 space-y-8">
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
              Build AI-Powered Software That <span className="ai-gradient-text animate-pulse">Grows</span> Your Business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed"
            >
              We design and develop custom AI solutions, SaaS platforms, web applications, mobile apps, and intelligent automation that help businesses launch faster, operate smarter, and scale confidently.
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
                  <span>Book Free Consultation</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold text-lg transition-all backdrop-blur-md flex items-center gap-2">
                  <span>View Our Work</span>
                </button>
              </Link>
            </motion.div>

          </div>

          {/* Right Content - Realistic Dashboard UI Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative hidden lg:block"
          >
            <div className="relative w-full aspect-square flex items-center justify-center">
              {/* Central Glowing Backing */}
              <div className="absolute w-[80%] h-[80%] bg-brand-cyan/20 rounded-full blur-[100px] animate-pulse-slow" />
              <div className="absolute w-[60%] h-[60%] bg-brand-violet/30 rounded-full blur-[80px]" />

              {/* Main 3D Canvas Container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full h-full rounded-2xl overflow-hidden pointer-events-none"
              >
                {/* 3D Neural Nodes */}
                <NeuralNetwork3D />
                
                {/* Gradient Overlay for blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent mix-blend-overlay pointer-events-none" />
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