'use client';

import React from 'react';
import { isDiwaliOfferActive } from '@/lib/promotions';

interface DiwaliSectionDividerProps {
  variant?: 'diya' | 'firecracker' | 'rangoli';
  label?: string;
  className?: string;
}

/**
 * Ultra-Smooth Performance-Optimized Diwali Section Divider.
 * Uses GPU-accelerated CSS transforms and lightweight layers to ensure 60fps/120fps scrolling.
 */
export default function DiwaliSectionDivider({
  variant = 'diya',
  label,
  className = '',
}: DiwaliSectionDividerProps) {
  if (!isDiwaliOfferActive()) {
    return <div className="w-full h-px bg-white/5 my-12" />;
  }

  return (
    <div className={`relative w-full py-6 sm:py-10 flex items-center justify-center overflow-hidden pointer-events-none select-none z-10 transform-gpu ${className}`}>
      {/* Background Soft Glow (Pre-calculated gradient, no blur filter) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-12 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl flex items-center justify-center gap-3 sm:gap-6">
        {/* Left Golden Gradient Beam */}
        <div className="relative flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-amber-400/80 flex items-center justify-end">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b] -mr-1" />
        </div>

        {/* ========================================================
            CENTER MOTIF: DIYA, FIRECRACKER, OR RANGOLI
        ======================================================== */}
        {variant === 'diya' && (
          <div className="flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-[#0a1128]/95 border border-amber-400/40 shadow-[0_0_20px_rgba(245,158,11,0.25)] shrink-0">
            {/* Diya with Flickering Flame */}
            <div className="relative flex items-center justify-center w-6 h-6">
              <span className="text-lg filter drop-shadow-[0_0_6px_rgba(245,158,11,0.8)]">🪔</span>
              <span className="absolute -top-1 w-2 h-2 rounded-full bg-yellow-300 blur-[1px] animate-pulse" />
            </div>

            {/* Festive Label */}
            <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-wider text-amber-200">
              {label || 'Shubh Deepavali'}
            </span>

            <span className="text-amber-400 text-xs animate-pulse">✨</span>
          </div>
        )}

        {variant === 'firecracker' && (
          <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-[#091026]/95 border border-yellow-400/45 shadow-[0_0_20px_rgba(250,204,21,0.2)] shrink-0">
            <span className="text-sm text-amber-400 opacity-90">✨</span>

            <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-amber-200 uppercase tracking-widest">
              <span>🎆</span>
              <span>{label || 'Innovate & Celebrate'}</span>
              <span>🎆</span>
            </div>

            <span className="text-sm text-yellow-300 opacity-90">✨</span>
          </div>
        )}

        {variant === 'rangoli' && (
          <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 rounded-full bg-[#080e22]/95 border border-amber-400/45 shadow-[0_0_20px_rgba(245,158,11,0.2)] shrink-0">
            <span className="text-xs sm:text-sm transform -scale-x-100 filter drop-shadow-[0_0_4px_rgba(245,158,11,0.8)]">
              🪔
            </span>

            <div className="flex items-center gap-2">
              <span className="text-amber-400 text-xs">
                ✦
              </span>
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-amber-200 uppercase">
                {label || 'Festival of Innovation & Light'}
              </span>
              <span className="text-amber-400 text-xs">
                ✦
              </span>
            </div>

            <span className="text-xs sm:text-sm filter drop-shadow-[0_0_4px_rgba(245,158,11,0.8)]">
              🪔
            </span>
          </div>
        )}

        {/* Right Golden Gradient Beam */}
        <div className="relative flex-1 h-px bg-gradient-to-l from-transparent via-amber-500/30 to-amber-400/80 flex items-center justify-start">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b] -ml-1" />
        </div>
      </div>
    </div>
  );
}
