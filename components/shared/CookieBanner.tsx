'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, X } from 'lucide-react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 p-5 rounded-2xl bg-neutral-900/95 border border-white/15 shadow-2xl backdrop-blur-xl text-white">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-xl bg-brand-purple/20 border border-brand-purple/30 text-brand-cyan shrink-0 mt-0.5">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="space-y-2 text-xs text-neutral-300">
          <p className="font-semibold text-white text-sm font-heading">We Value Your Privacy</p>
          <p className="leading-relaxed">
            We use cookies to analyze site traffic and enhance your browsing experience. Read our{' '}
            <Link href="/privacy-policy" className="text-brand-cyan hover:underline">
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link href="/cookies" className="text-brand-cyan hover:underline">
              Cookie Policy
            </Link>.
          </p>
          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={acceptCookies}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-brand-purple to-brand-cyan text-white font-bold text-xs shadow hover:opacity-90 transition-all"
            >
              Accept All
            </button>
            <button
              onClick={declineCookies}
              className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-neutral-300 font-medium text-xs border border-white/10 transition-all"
            >
              Essential Only
            </button>
          </div>
        </div>
        <button
          onClick={declineCookies}
          className="text-neutral-400 hover:text-white p-1 text-xs shrink-0"
          aria-label="Close cookie banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
