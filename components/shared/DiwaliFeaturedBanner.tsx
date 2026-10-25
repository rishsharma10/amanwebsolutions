'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Clock } from 'lucide-react';
import { isDiwaliOfferActive } from '@/lib/promotions';

interface DiwaliFeaturedBannerProps {
  className?: string;
  targetHref?: string;
  variant?: 'compact' | 'featured';
}

export default function DiwaliFeaturedBanner({
  className = '',
  targetHref = '/contact',
  variant = 'featured'
}: DiwaliFeaturedBannerProps) {
  const [isActive, setIsActive] = useState<boolean>(true);

  useEffect(() => {
    // Check if the current time is strictly before Nov 10, 2026
    setIsActive(isDiwaliOfferActive());
  }, []);

  // Return nothing if expired
  if (!isActive) return null;

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative group rounded-3xl overflow-hidden border border-amber-500/30 bg-gradient-to-b from-[#020617] via-[#050b2e] to-[#020617] shadow-[0_0_35px_rgba(245,158,11,0.12)] hover:border-amber-400/50 hover:shadow-[0_0_45px_rgba(245,158,11,0.22)] transition-all duration-300"
      >
        {/* Festive Golden Top Bar Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2 sm:px-6 sm:py-2.5 bg-gradient-to-r from-amber-500/20 via-yellow-500/10 to-amber-500/20 border-b border-amber-500/20 text-xs font-mono">
          <div className="flex items-center gap-2 text-amber-300 font-semibold">
            <Sparkles size={14} className="text-amber-400 animate-pulse" />
            <span>HAPPY DIWALI FESTIVE OFFER</span>
          </div>
          <div className="flex items-center gap-1.5 text-amber-200/80 text-[11px]">
            <Clock size={12} className="text-amber-400" />
            <span>Limited Time • Valid till 10 Nov 2026</span>
          </div>
        </div>

        {/* Banner Clickable Image Link */}
        <Link
          href={targetHref}
          className="block relative w-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-amber-400"
          aria-label="Claim Diwali Special Offer on Mobile App and eCommerce Development"
        >
          <div className="relative w-full aspect-[1024/328] min-h-[140px] xs:min-h-[170px] sm:min-h-[220px] md:min-h-[280px] bg-[#020617] flex items-center justify-center">
            <Image
              src="/banners/diwali-special-offer.png"
              alt="Vidhyonix Happy Diwali Special Offer - Mobile App Development starting at ₹19,999, eCommerce Development starting at ₹14,999. Valid till 10 Nov 2026."
              width={1024}
              height={328}
              priority
              className="w-full h-full object-cover sm:object-contain transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
          </div>
        </Link>

        {/* Bottom Interactive Quick-Action Bar */}
        <div className="px-4 py-3 sm:px-6 sm:py-3.5 bg-black/40 backdrop-blur-md border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-slate-300">
            <span className="font-semibold text-white">Starting from ₹14,999:</span> Dedicated tech team, modern stack & full IP ownership.
          </div>
          <Link
            href={targetHref}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-bold hover:brightness-110 transition-all shadow-md active:scale-95 text-xs ml-auto"
          >
            <span>Claim Diwali Offer</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
