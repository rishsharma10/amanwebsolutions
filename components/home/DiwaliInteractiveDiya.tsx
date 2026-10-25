'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

export default function DiwaliInteractiveDiya() {
  const [litCount, setLitCount] = useState(3482);
  const [hasLit, setHasLit] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);

  const handleLightDiya = () => {
    if (!hasLit) {
      setLitCount((prev) => prev + 1);
      setHasLit(true);
      setShowGreeting(true);
      setTimeout(() => setShowGreeting(false), 5500);
    }
  };

  return (
    <div className="relative inline-flex flex-col items-start gap-2">
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={handleLightDiya}
        className={`group relative flex items-center gap-2.5 px-4 py-2 rounded-full border transition-all duration-300 backdrop-blur-xl ${
          hasLit
            ? 'bg-gradient-to-r from-amber-500/25 via-yellow-500/20 to-amber-500/25 border-amber-400 shadow-[0_0_25px_rgba(251,191,36,0.5)] text-amber-200'
            : 'bg-black/40 hover:bg-amber-500/15 border-amber-500/30 hover:border-amber-400 text-slate-300 hover:text-white shadow-lg'
        }`}
        aria-label="Light a Festive Diwali Diya for Good Fortune"
      >
        {/* Animated Diya Flame */}
        <div className="relative flex items-center justify-center w-5 h-5">
          <span className="text-base transform group-hover:scale-110 transition-transform">🪔</span>
          {hasLit && (
            <motion.span
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="absolute -top-1 w-2.5 h-2.5 rounded-full bg-yellow-300 blur-[2px]"
            />
          )}
        </div>

        {/* Action Label */}
        <span className="text-xs font-mono font-semibold tracking-wider">
          {hasLit ? '✨ Diya Lit for Your Growth!' : 'Click to Light a Diya'}
        </span>

        {/* Counter Pill */}
        <span className="text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/30">
          {litCount.toLocaleString()}
        </span>
      </motion.button>

      {/* Floating Prosperity Greeting Toast */}
      <AnimatePresence>
        {showGreeting && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            className="absolute top-full left-0 mt-2 z-30 p-3 rounded-2xl bg-brand-dark/95 border border-amber-400/50 shadow-[0_10px_35px_rgba(245,158,11,0.3)] backdrop-blur-2xl text-xs text-amber-200 w-72 space-y-1"
          >
            <div className="flex items-center gap-1.5 font-bold text-amber-300 font-heading">
              <Sparkles size={13} className="text-amber-400" />
              <span>Shubh Deepavali from Vidhyonix!</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-snug">
              May the festive season illuminate your business with exponential growth, breakthrough innovation, and scalable digital success!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
