'use client';

import React from 'react';
import { motion } from 'framer-motion';
import DiwaliToran from './DiwaliToran';
import DiwaliSparklerCursor from './DiwaliSparklerCursor';

/**
 * Enhanced Diwali Festive Atmosphere:
 * - Traditional Marigold Toran garland along the top
 * - Hanging Indian Akash Kandil lanterns (left & right) with swinging animation
 * - Interactive Phuljhadi (sparkler) stardust trail
 * - Firework starbursts in the night sky
 * - Rising golden ember particles
 * - Sacred rotating mandala geometry
 */
export default function DiwaliAtmosphere() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* 1. Traditional Indian Marigold Toran Garland across top */}
      <DiwaliToran />

      {/* 2. Interactive Sparkler Cursor Trail */}
      <DiwaliSparklerCursor />

      {/* 3. Left Hanging Akash Kandil Lantern */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
          rotate: [-2, 2, -2]
        }}
        transition={{
          opacity: { duration: 0.8 },
          y: { duration: 0.8 },
          rotate: { repeat: Infinity, duration: 6, ease: 'easeInOut' }
        }}
        style={{ transformOrigin: 'top center' }}
        className="absolute top-0 left-2 sm:left-4 lg:left-8 z-10 w-16 sm:w-20 lg:w-24 pointer-events-none"
      >
        <svg viewBox="0 0 100 220" className="w-full h-auto drop-shadow-[0_15px_30px_rgba(245,158,11,0.6)]">
          {/* Hanging Cord */}
          <line x1="50" y1="0" x2="50" y2="40" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />
          
          {/* Top Hanging Ring */}
          <circle cx="50" cy="42" r="4" fill="none" stroke="#fbbf24" strokeWidth="2" />

          {/* Top Pyramid Cap */}
          <polygon points="50,45 20,80 80,80" fill="url(#lanternGold)" stroke="#f59e0b" strokeWidth="1" />

          {/* Central Prismatic Lantern Body */}
          <polygon points="20,80 10,120 50,140 50,80" fill="#ea580c" opacity="0.9" />
          <polygon points="80,80 90,120 50,140 50,80" fill="#f97316" opacity="0.9" />
          <polygon points="50,80 20,80 50,140" fill="#facc15" opacity="0.8" />
          <polygon points="50,80 80,80 50,140" fill="#fbbf24" opacity="0.85" />

          {/* Central Diya Glow Core */}
          <circle cx="50" cy="105" r="14" fill="#fef08a" className="animate-pulse" opacity="0.9" />
          <circle cx="50" cy="105" r="28" fill="#f59e0b" opacity="0.25" />

          {/* Dangling Golden Tassels */}
          <path d="M 25,130 Q 22,170 18,210" stroke="#fbbf24" strokeWidth="1.5" fill="none" />
          <path d="M 38,136 Q 36,175 35,215" stroke="#f59e0b" strokeWidth="1.5" fill="none" />
          <path d="M 50,140 L 50,220" stroke="#fde047" strokeWidth="2" fill="none" />
          <path d="M 62,136 Q 64,175 65,215" stroke="#f59e0b" strokeWidth="1.5" fill="none" />
          <path d="M 75,130 Q 78,170 82,210" stroke="#fbbf24" strokeWidth="1.5" fill="none" />

          {/* Definitions */}
          <defs>
            <linearGradient id="lanternGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
          </defs>
        </svg>

        {/* Ambient warm light halo */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-28 h-28 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />
      </motion.div>

      {/* 4. Right Hanging Akash Kandil Lantern (Hidden on small mobile) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
          rotate: [2, -2, 2]
        }}
        transition={{
          opacity: { duration: 0.8 },
          y: { duration: 0.8 },
          rotate: { repeat: Infinity, duration: 6.5, ease: 'easeInOut' }
        }}
        style={{ transformOrigin: 'top center' }}
        className="absolute top-0 right-4 sm:right-6 lg:right-12 z-10 w-14 sm:w-16 lg:w-20 pointer-events-none hidden md:block"
      >
        <svg viewBox="0 0 100 220" className="w-full h-auto drop-shadow-[0_15px_30px_rgba(245,158,11,0.55)]">
          <line x1="50" y1="0" x2="50" y2="40" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="50" cy="42" r="4" fill="none" stroke="#fbbf24" strokeWidth="2" />
          <polygon points="50,45 20,80 80,80" fill="url(#lanternGold2)" stroke="#f59e0b" strokeWidth="1" />
          <polygon points="20,80 10,120 50,140 50,80" fill="#db2777" opacity="0.9" />
          <polygon points="80,80 90,120 50,140 50,80" fill="#f43f5e" opacity="0.9" />
          <polygon points="50,80 20,80 50,140" fill="#facc15" opacity="0.8" />
          <polygon points="50,80 80,80 50,140" fill="#fbbf24" opacity="0.85" />
          <circle cx="50" cy="105" r="14" fill="#fef08a" className="animate-pulse" opacity="0.9" />
          <path d="M 25,130 Q 22,170 18,210" stroke="#fbbf24" strokeWidth="1.5" fill="none" />
          <path d="M 50,140 L 50,220" stroke="#fde047" strokeWidth="2" fill="none" />
          <path d="M 75,130 Q 78,170 82,210" stroke="#fbbf24" strokeWidth="1.5" fill="none" />
          <defs>
            <linearGradient id="lanternGold2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-24 h-24 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />
      </motion.div>

      {/* 5. Firework Starbursts in Night Sky */}
      {/* Golden Starburst */}
      <div className="absolute top-16 right-[22%] w-24 h-24 pointer-events-none">
        <motion.div
          animate={{
            scale: [0, 1.4, 1.5],
            opacity: [0, 0.85, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 4.2,
            delay: 0.5,
            ease: 'easeOut'
          }}
          className="w-full h-full rounded-full bg-gradient-to-r from-amber-400/40 via-yellow-300/30 to-transparent blur-md"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-yellow-200 animate-ping duration-1000" />
        </div>
      </div>

      {/* Magenta/Violet Starburst */}
      <div className="absolute top-28 left-[45%] w-20 h-20 pointer-events-none">
        <motion.div
          animate={{
            scale: [0, 1.3, 1.4],
            opacity: [0, 0.75, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 5.2,
            delay: 2.1,
            ease: 'easeOut'
          }}
          className="w-full h-full rounded-full bg-gradient-to-r from-fuchsia-500/40 via-brand-violet/30 to-transparent blur-md"
        />
      </div>

      {/* Cyan Starburst */}
      <div className="absolute top-44 left-[18%] w-16 h-16 pointer-events-none hidden sm:block">
        <motion.div
          animate={{
            scale: [0, 1.25, 1.35],
            opacity: [0, 0.65, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 5.8,
            delay: 3.5,
            ease: 'easeOut'
          }}
          className="w-full h-full rounded-full bg-gradient-to-r from-cyan-400/35 via-blue-400/20 to-transparent blur-md"
        />
      </div>

      {/* 6. Floating Golden Diya Ember Particles */}
      {[
        { left: '10%', top: '35%', delay: 0, size: 'w-2 h-2', color: 'bg-amber-400' },
        { left: '24%', top: '65%', delay: 1.2, size: 'w-1.5 h-1.5', color: 'bg-yellow-300' },
        { left: '40%', top: '25%', delay: 2.5, size: 'w-2 h-2', color: 'bg-amber-300' },
        { left: '55%', top: '75%', delay: 0.8, size: 'w-1 h-1', color: 'bg-yellow-200' },
        { left: '68%', top: '20%', delay: 1.9, size: 'w-2 h-2', color: 'bg-amber-400' },
        { left: '84%', top: '45%', delay: 3.1, size: 'w-1.5 h-1.5', color: 'bg-amber-300' },
        { left: '94%', top: '70%', delay: 2.0, size: 'w-2 h-2', color: 'bg-yellow-400' },
        { left: '32%', top: '85%', delay: 3.7, size: 'w-1.5 h-1.5', color: 'bg-amber-400' },
        { left: '78%', top: '88%', delay: 1.5, size: 'w-2 h-2', color: 'bg-yellow-300' }
      ].map((ember, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -35, 0],
            opacity: [0.3, 0.95, 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            repeat: Infinity,
            duration: 4 + (i % 3),
            delay: ember.delay,
            ease: 'easeInOut'
          }}
          style={{ left: ember.left, top: ember.top }}
          className={`absolute rounded-full ${ember.size} ${ember.color} blur-[0.5px] shadow-[0_0_10px_rgba(245,158,11,0.9)]`}
        />
      ))}

      {/* 7. Rotating Sacred Rangoli / Mandala Geometry */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 100, ease: 'linear' }}
        className="absolute -bottom-44 -right-44 w-[600px] h-[600px] opacity-[0.05] pointer-events-none"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full fill-none stroke-amber-400 stroke-[0.75]">
          <circle cx="100" cy="100" r="95" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="80" />
          <circle cx="100" cy="100" r="65" strokeDasharray="4 2" />
          <circle cx="100" cy="100" r="50" />
          <circle cx="100" cy="100" r="30" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <ellipse
              key={deg}
              cx="100"
              cy="100"
              rx="18"
              ry="45"
              transform={`rotate(${deg} 100 100)`}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
}
