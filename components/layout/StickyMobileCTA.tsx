'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, ArrowRight, MessageSquare } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export default function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-neutral-950/95 border-t border-white/10 backdrop-blur-xl flex items-center gap-2 shadow-2xl">
      <a
        href="tel:+918770283188"
        onClick={() => trackEvent('phone_click', { location: 'sticky_mobile_cta' })}
        className="flex-1 py-3 px-3 rounded-xl bg-white/10 border border-white/10 text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
      >
        <Phone className="w-4 h-4 text-brand-cyan" />
        <span>Call Now</span>
      </a>
      <Link
        href="/contact"
        onClick={() => trackEvent('book_consultation_click', { location: 'sticky_mobile_cta' })}
        className="flex-[2] py-3 px-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-cyan text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-brand-purple/20 hover:opacity-95 transition-all"
      >
        <span>Book Strategy Call</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
