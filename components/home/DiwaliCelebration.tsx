'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Copy, Check, X, ArrowRight, Gift, Clock } from 'lucide-react';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';
import { getDiwaliOfferExpiryDate } from '@/lib/promotions';

/**
 * Diwali Celebration Engine & Festive Gift Voucher Modal.
 * Includes interactive firecracker sparkles, countdown timer, and festive code DIWALI50.
 * Rendered via createPortal to document.body for top-level viewport display.
 */
interface DiwaliCelebrationProps {
  trigger?: React.ReactNode;
}

export default function DiwaliCelebration({ trigger }: DiwaliCelebrationProps = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 16, hours: 12, minutes: 3, seconds: 28 });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Countdown timer to 10 Nov 2026
  useEffect(() => {
    const targetDate = getDiwaliOfferExpiryDate().getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  // Web Audio Festive Chime Synthesizer
  const playFestiveChime = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      // Pentatonic celebratory chime scale (E5, G#5, B5, E6)
      const notes = [659.25, 830.61, 987.77, 1318.51];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.12);

        gain.gain.setValueAtTime(0.12, ctx.currentTime + idx * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.12 + 0.6);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.12);
        osc.stop(ctx.currentTime + idx * 0.12 + 0.7);
      });
    } catch {
      // Audio autoplay gracefully ignored
    }
  };

  const handleOpenModal = () => {
    setIsOpen(true);
    playFestiveChime();
    trackEvent('diwali_celebration_open', { location: 'hero_celebrate_button' });
  };

  const handleCopyCode = () => {
    try {
      navigator.clipboard.writeText('DIWALI50');
    } catch {
      // Fallback
    }
    setCopied(true);
    trackEvent('diwali_coupon_copied', { code: 'DIWALI50' });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      {/* ========================================================
          TRIGGER: Custom or Default Button ("🎁 Claim Festive Offer")
      ======================================================== */}
      {trigger ? (
        <div
          role="button"
          tabIndex={0}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleOpenModal();
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleOpenModal();
            }
          }}
          className="cursor-pointer"
        >
          {trigger}
        </div>
      ) : (
        <motion.button
          type="button"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleOpenModal();
          }}
          className="relative group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/25 via-yellow-400/30 to-amber-500/25 border border-amber-400/70 text-amber-200 hover:text-white text-xs font-mono font-semibold tracking-wider backdrop-blur-xl shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.7)] transition-all cursor-pointer z-10"
          aria-label="Open Diwali Festive Gift Voucher and Celebration"
        >
          <span className="text-sm animate-bounce">🎁</span>
          <span>Claim Festive Offer</span>
          <span className="text-[10px] bg-amber-400 text-slate-950 px-1.5 py-0.5 rounded font-bold uppercase tracking-tight">
            50% OFF
          </span>
        </motion.button>
      )}

      {/* ========================================================
          PORTAL-RENDERED CELEBRATION & FESTIVE GIFT MODAL
      ======================================================== */}
      {mounted && createPortal(
        <AnimatePresence>
          {isOpen && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="absolute inset-0 bg-black/85 backdrop-blur-md"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-[#0e1630] via-[#080e22] to-[#030614] border-2 border-amber-400/70 p-6 sm:p-8 shadow-[0_0_90px_rgba(245,158,11,0.5)] overflow-hidden text-center z-10"
              >
                {/* Golden Ambient Halo */}
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-amber-400/25 rounded-full blur-3xl pointer-events-none" />

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close Festive Modal"
                >
                  <X size={18} />
                </button>

                {/* Lit Diya Icon */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-400/50 mb-3 shadow-[0_0_30px_rgba(245,158,11,0.6)]">
                  <span className="text-3xl animate-pulse">🪔</span>
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500" />
                  </span>
                </div>

                {/* Headline */}
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
                  Shubh Deepavali from <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">Vidhyonix!</span>
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                  May the divine lights of Diwali illuminate your enterprise with exponential revenue, cutting-edge software architecture, and AI-powered scalability.
                </p>

                {/* Festive Coupon Box */}
                <div className="mt-5 p-4 rounded-2xl bg-brand-dark/95 border border-amber-400/50 shadow-inner relative overflow-hidden text-left space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 font-bold flex items-center gap-1.5">
                      <Gift size={13} className="text-amber-400" />
                      Festive Coupon Code
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/30 font-bold">
                      Flat 50% OFF
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3 bg-black/60 p-2.5 rounded-xl border border-white/10">
                    <div className="font-mono font-bold text-lg text-amber-300 tracking-widest pl-2">
                      DIWALI50
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyCode}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-sans font-bold text-xs transition-colors shadow-md active:scale-95 cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check size={14} className="text-slate-950" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} className="text-slate-950" />
                          <span>Copy Code</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Offer Highlights */}
                  <ul className="text-[11px] text-slate-300 space-y-1 font-mono pt-1">
                    <li className="flex items-center gap-2">
                      <span className="text-amber-400 font-bold">✓</span> Flat 50% OFF on Mobile Apps (Starts @ ₹19,999)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-amber-400 font-bold">✓</span> eCommerce & SaaS Development (Starts @ ₹14,999)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-amber-400 font-bold">✓</span> Free Technical Strategy & Architecture Blueprint
                    </li>
                  </ul>
                </div>

                {/* Countdown Ticker in Modal */}
                <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
                  <Clock size={13} className="text-amber-400" />
                  <span>Diwali Offer Ends In:</span>
                  <span className="text-amber-300 font-bold">
                    {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
                  </span>
                </div>

                {/* Direct CTAs */}
                <div className="mt-5 flex flex-col sm:flex-row items-center gap-3">
                  <Link
                    href="/contact"
                    onClick={() => {
                      setIsOpen(false);
                      trackEvent('diwali_claim_click', { code: 'DIWALI50' });
                    }}
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Redeem Offer & Book Call</span>
                    <ArrowRight size={15} />
                  </Link>

                  <a
                    href="https://wa.me/919999999999?text=Hi%20Vidhyonix%2C%20I%20would%20like%20to%20claim%20the%20Diwali%2050%25%20Offer%20(Code%3A%20DIWALI50)%20for%20my%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-3.5 px-5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-heading font-semibold text-xs tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <span>WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
