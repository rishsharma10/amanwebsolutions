'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Gift, ArrowRight, Check, Copy } from 'lucide-react';
import Link from 'next/link';
import DiwaliCelebration from './DiwaliCelebration';
import { trackEvent } from '@/lib/analytics';

/**
 * Unique Diwali Festive Footer Card:
 * "The 5 Diyas of Digital Prosperity"
 * - Interactive earthen diyas representing AI, Cloud, eCommerce, Mobile & Trust
 * - Users can click any diya to light it with personalized prosperity blessings
 * - Direct Diwali50 voucher redemption
 */
export default function DiwaliFooterCard() {
  const [litDiyas, setLitDiyas] = useState<number[]>([0, 2]); // First and third lit by default
  const [activeWish, setActiveWish] = useState<string | null>(null);

  const diyas = [
    {
      id: 0,
      title: 'AI Innovation',
      desc: 'Autonomous AI agents & intelligent workflows that reduce manual overhead.',
      blessing: 'May autonomous intelligence illuminate your business operations!'
    },
    {
      id: 1,
      title: 'Mobile Agility',
      desc: 'Smooth native iOS & Android apps built for exponential user adoption.',
      blessing: 'May your mobile products connect with millions of engaged customers!'
    },
    {
      id: 2,
      title: 'eCommerce Scale',
      desc: 'High-converting headless storefronts with zero checkout friction.',
      blessing: 'May this festive season bring record-breaking sales and revenue!'
    },
    {
      id: 3,
      title: 'Cloud Resilience',
      desc: 'Enterprise-grade SaaS architectures with 99.99% operational uptime.',
      blessing: 'May your infrastructure remain bulletproof and effortlessly scalable!'
    },
    {
      id: 4,
      title: '100% IP Trust',
      desc: 'Complete intellectual property ownership with strict NDA protection.',
      blessing: 'May transparency, trust, and lasting partnerships guide your success!'
    }
  ];

  const toggleDiya = (id: number, blessing: string) => {
    if (!litDiyas.includes(id)) {
      setLitDiyas((prev) => [...prev, id]);
    }
    setActiveWish(blessing);
    trackEvent('cta_click', { location: 'footer_diwali_diyas', label: `diya_${id}` });
  };

  return (
    <div className="relative mb-16 rounded-3xl overflow-hidden border border-amber-500/40 bg-gradient-to-b from-[#0e1736] via-[#070d22] to-[#040816] p-6 sm:p-10 shadow-[0_0_50px_rgba(245,158,11,0.2)]">
      {/* Ambient Corner Golden Halos */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-yellow-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Row */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-amber-500/20 pb-6 mb-8">
        <div className="space-y-1.5 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-mono font-semibold">
            <span className="text-amber-400 animate-pulse">🪔</span>
            <span>Diwali Special • Festival of Lights & Innovation</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
            Light the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">5 Diyas of Digital Prosperity</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Click each diya below to ignite prosperity for your enterprise. Celebrate Diwali with Vidhyonix and unlock exclusive festive engineering rates.
          </p>
        </div>

        {/* Claim Coupon Trigger */}
        <div className="shrink-0">
          <DiwaliCelebration
            trigger={
              <div className="px-5 py-3 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(245,158,11,0.5)] hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 cursor-pointer">
                <span>Claim 50% OFF Voucher</span>
                <Gift size={15} />
              </div>
            }
          />
        </div>
      </div>

      {/* The 5 Interactive Diyas Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 mb-6">
        {diyas.map((item) => {
          const isLit = litDiyas.includes(item.id);

          return (
            <motion.button
              key={item.id}
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => toggleDiya(item.id, item.blessing)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between group relative overflow-hidden cursor-pointer ${
                isLit
                  ? 'bg-gradient-to-b from-amber-500/20 to-[#0b132e] border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.35)]'
                  : 'bg-white/5 border-white/10 hover:border-amber-400/50 hover:bg-white/[0.08]'
              }`}
            >
              {/* Diya Icon with Flickering Flame */}
              <div className="flex items-center justify-between mb-3">
                <div className="relative flex items-center justify-center w-8 h-8">
                  <span className={`text-2xl transition-transform ${isLit ? 'scale-110' : 'opacity-60'}`}>
                    🪔
                  </span>
                  {isLit && (
                    <motion.span
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.75, 1, 0.75]
                      }}
                      transition={{ repeat: Infinity, duration: 1.1 + item.id * 0.1 }}
                      className="absolute -top-1 w-3 h-3 rounded-full bg-yellow-300 blur-[2px]"
                    />
                  )}
                </div>

                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                  isLit
                    ? 'bg-amber-400 text-slate-950 border-amber-300'
                    : 'bg-white/10 text-slate-400 border-white/15'
                }`}>
                  {isLit ? 'LIT ✨' : 'Click'}
                </span>
              </div>

              <div>
                <h4 className={`font-heading font-bold text-xs mb-1 transition-colors ${
                  isLit ? 'text-amber-200' : 'text-slate-300 group-hover:text-white'
                }`}>
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-400 leading-snug line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Dynamic Prosperity Toast Message */}
      <AnimatePresence mode="wait">
        {activeWish && (
          <motion.div
            key={activeWish}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-3.5 rounded-xl bg-amber-500/15 border border-amber-400/40 text-amber-200 text-xs font-mono flex items-center justify-between gap-3 text-left"
          >
            <div className="flex items-center gap-2">
              <span className="text-amber-400 text-base animate-bounce">🪔</span>
              <span className="font-semibold">{activeWish}</span>
            </div>
            <button
              type="button"
              onClick={() => setActiveWish(null)}
              className="text-amber-300 hover:text-white text-xs underline shrink-0 cursor-pointer"
            >
              Dismiss
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Festive Counter & Code Bar */}
      <div className="mt-6 pt-4 border-t border-amber-500/20 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-300">
        <div className="flex items-center gap-2">
          <span className="text-amber-400">✨</span>
          <span>
            {litDiyas.length} of 5 Diyas Illuminated by You
          </span>
          {litDiyas.length === 5 && (
            <span className="text-emerald-400 font-bold bg-emerald-500/15 px-2 py-0.5 rounded-full border border-emerald-500/30">
              All Diyas Lit! Extra Prosperity Unlocked 🪔
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-slate-400">Festive Code:</span>
          <span className="px-2.5 py-0.5 rounded bg-black/60 border border-amber-400/50 text-amber-300 font-bold tracking-wider">
            DIWALI50
          </span>
          <span className="text-amber-200 font-semibold">• Up to 50% OFF</span>
        </div>
      </div>
    </div>
  );
}
