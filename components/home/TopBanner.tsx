'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { isDiwaliOfferActive } from '@/lib/promotions';

interface BannerSlide {
  id: string;
  image: string;
  alt: string;
  href: string;
  title: string;
  offerBadge: string;
}

const BANNERS: BannerSlide[] = [
  {
    id: 'ecommerce',
    image: '/banners/diwali-ecommerce.png',
    alt: 'Happy Diwali Special Offer - eCommerce Development Starting at ₹14,999',
    href: '/services/ecommerce-development',
    title: 'eCommerce Development',
    offerBadge: 'Starting at ₹14,999'
  },
  {
    id: 'mobile-app',
    image: '/banners/diwali-mobile-app.png',
    alt: 'Happy Diwali Special Offer - Mobile App Development Starting at ₹19,999 (50% OFF)',
    href: '/services/product-development',
    title: 'Mobile App Development',
    offerBadge: 'Starting at ₹19,999 • 50% OFF'
  },
  {
    id: 'ai-automation',
    image: '/banners/diwali-ai-automation.png',
    alt: 'Happy Diwali Special Offer - AI Automation Starting at ₹14,999',
    href: '/services/ai-automation',
    title: 'AI Automation',
    offerBadge: 'Starting at ₹14,999'
  }
];

export default function TopBanner() {
  const [isActive, setIsActive] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsActive(isDiwaliOfferActive());
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % BANNERS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);
  }, []);

  // Autoplay timer
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 40;
    const isRightSwipe = distance < -40;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  if (!isActive) return null;

  return (
    <div
      className="relative w-full bg-[#020617] border-b border-amber-500/20 shadow-[0_4px_25px_rgba(245,158,11,0.08)] z-40 group select-none overflow-hidden block md:hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Diwali Promotional Banners"
    >
      {/* Decorative Diwali Ambient Glows */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-amber-500/10 to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-amber-500/10 to-transparent pointer-events-none z-10" />

      {/* Main Banner Slides Track */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out will-change-transform"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {BANNERS.map((banner, index) => (
            <div key={banner.id} className="w-full flex-shrink-0">
              <Link
                href={banner.href}
                className="block relative w-full group/slide focus:outline-none focus:ring-1 focus:ring-amber-400"
                aria-label={banner.alt}
              >
                {/* Responsive Banner Image Container */}
                <div className="relative w-full h-[46px] xs:h-[56px] sm:h-[75px] md:h-[95px] lg:h-[110px] xl:h-[125px] bg-[#020617] flex items-center justify-center overflow-hidden">
                  <Image
                    src={banner.image}
                    alt={banner.alt}
                    width={1024}
                    height={115}
                    priority={index === 0}
                    className="w-full h-full object-contain md:object-cover transition-transform duration-500 group-hover/slide:scale-[1.01]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows: Hidden on tiny mobile screens to avoid obscuring text, visible from sm up */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          prevSlide();
        }}
        aria-label="Previous Slide"
        className="hidden sm:flex absolute left-2 md:left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-amber-500 text-white hover:text-black items-center justify-center backdrop-blur-md border border-white/10 shadow-lg transition-all duration-200 opacity-60 hover:opacity-100 hover:scale-110 active:scale-95"
      >
        <ChevronLeft size={16} />
      </button>

      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          nextSlide();
        }}
        aria-label="Next Slide"
        className="hidden sm:flex absolute right-2 md:right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-amber-500 text-white hover:text-black items-center justify-center backdrop-blur-md border border-white/10 shadow-lg transition-all duration-200 opacity-60 hover:opacity-100 hover:scale-110 active:scale-95"
      >
        <ChevronRight size={16} />
      </button>

      {/* Bottom Indicator Dots & Progress Bar: Sleek, non-intrusive */}
      <div className="absolute bottom-0.5 sm:bottom-1.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 sm:gap-1.5 pointer-events-auto bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-xs">
        {BANNERS.map((banner, index) => (
          <button
            key={banner.id}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            aria-label={`Go to slide ${index + 1}: ${banner.title}`}
            className={`transition-all duration-300 rounded-full ${
              currentIndex === index
                ? 'w-4 sm:w-6 h-1 sm:h-1.5 bg-gradient-to-r from-amber-400 to-yellow-300 shadow-[0_0_8px_rgba(251,191,36,0.9)]'
                : 'w-1 sm:w-1.5 h-1 sm:h-1.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
