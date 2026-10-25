'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { isDiwaliOfferActive } from '@/lib/promotions';
import DiwaliCelebration from '@/components/home/DiwaliCelebration';

/**
 * High-Performance Global Layout Diwali Atmosphere.
 * - Hardware-accelerated GPU scroll progress bar with zero spring lag
 * - CSS-animated floating golden embers running on compositor thread (no JS scroll jank)
 * - Lightweight floating Diya dock
 */
export default function DiwaliGlobalAtmosphere() {
  const [mounted, setMounted] = useState(false);
  const isPromo = isDiwaliOfferActive();

  // Direct GPU Scroll Progress (No spring lag, instantaneous response)
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isPromo || !mounted) {
    return null;
  }

  return (
    <>
      {/* ========================================================
          1. GPU-ACCELERATED SCROLL PROGRESS BAR (INSTANTANEOUS)
      ======================================================== */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-black/40 pointer-events-none transform-gpu">
        <motion.div
          className="relative h-full bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-300 origin-left shadow-[0_0_10px_rgba(245,158,11,0.8)] will-change-transform"
          style={{ scaleX: scrollYProgress }}
        >
          {/* Leading Spark Tip */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-yellow-200 blur-[0.5px] shadow-[0_0_6px_#fde047]" />
        </motion.div>
      </div>

      {/* ========================================================
          2. COMPOSITOR-THREAD FLOATING GOLDEN EMBERS (PURE CSS)
      ======================================================== */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-20 select-none">
        <style jsx>{`
          @keyframes riseEmber {
            0% {
              transform: translate3d(0, 105vh, 0);
              opacity: 0;
            }
            15% {
              opacity: 0.8;
            }
            85% {
              opacity: 0.8;
            }
            100% {
              transform: translate3d(20px, -5vh, 0);
              opacity: 0;
            }
          }
          .diwali-ember {
            position: absolute;
            width: 5px;
            height: 5px;
            border-radius: 9999px;
            background-color: #f59e0b;
            box-shadow: 0 0 8px rgba(245, 158, 11, 0.85);
            animation: riseEmber linear infinite;
            will-change: transform, opacity;
          }
        `}</style>
        <div className="diwali-ember" style={{ left: '8%', animationDuration: '10s', animationDelay: '0s' }} />
        <div className="diwali-ember" style={{ left: '26%', animationDuration: '12s', animationDelay: '3s' }} />
        <div className="diwali-ember" style={{ left: '50%', animationDuration: '9s', animationDelay: '1.5s' }} />
        <div className="diwali-ember" style={{ left: '72%', animationDuration: '13s', animationDelay: '5s' }} />
        <div className="diwali-ember" style={{ left: '88%', animationDuration: '11s', animationDelay: '2s' }} />
      </div>

      {/* ========================================================
          3. FLOATING FESTIVE DIYA DOCK (BOTTOM-LEFT ON ALL PAGES)
      ======================================================== */}
      <div className="fixed bottom-20 md:bottom-6 left-3 sm:left-6 z-40 transform-gpu">
        <DiwaliCelebration
          trigger={
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative group flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#080f24]/95 border border-amber-400/60 shadow-[0_4px_20px_rgba(245,158,11,0.3)] hover:border-amber-400 hover:shadow-[0_4px_30px_rgba(245,158,11,0.5)] transition-all cursor-pointer"
            >
              {/* Animated Diya */}
              <div className="relative flex items-center justify-center">
                <span className="text-lg filter drop-shadow-[0_0_6px_rgba(245,158,11,0.8)]">
                  🪔
                </span>
                <span className="absolute -top-1 w-2 h-2 rounded-full bg-yellow-300 blur-[1px] animate-pulse" />
              </div>

              {/* Micro Festive Text */}
              <div className="flex flex-col text-left">
                <div className="text-[11px] font-mono font-bold text-amber-300 leading-tight flex items-center gap-1">
                  <span>Shubh Deepavali</span>
                  <span className="text-amber-400 text-[10px]">✨</span>
                </div>
                <div className="text-[10px] font-mono text-emerald-400 font-semibold leading-tight flex items-center gap-1">
                  <span>50% OFF Code</span>
                  <span className="text-amber-300 font-bold">DIWALI50</span>
                </div>
              </div>

              {/* Gift Badge */}
              <span className="text-xs bg-amber-400 text-slate-950 font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">
                Gift 🎁
              </span>
            </motion.div>
          }
        />
      </div>
    </>
  );
}
