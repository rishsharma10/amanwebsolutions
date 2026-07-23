'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "Vidhyonix built our interactive booking system and automated membership management from scratch. The seamless user flow and lightning speed increased our member signups by 40% in just 60 days.",
    author: "Elena Rostova",
    role: "Founder & Chief Instructor",
    company: "Pali Yoga",
    stars: 5,
    avatar: "E"
  },
  {
    quote: "Building a reliable, geolocation-enabled emergency response application for citizens is highly complex. Vidhyonix delivered a premium mobile app that handles 50,000+ daily actions without a single crash.",
    author: "Arjun Mehta",
    role: "Director of Public Safety Systems",
    company: "Good Citizen App",
    stars: 5,
    avatar: "A"
  },
  {
    quote: "We were losing 20%+ of offline orders during busy dining hours. The automated voice agent engineered by Vidhyonix answers calls synchronously and logs orders into our POS, driving a 24% revenue surge.",
    author: "Sarah Jenkins",
    role: "Co-Founder & Operations Head",
    company: "OrderGenie",
    stars: 5,
    avatar: "S"
  },
  {
    quote: "The LLM-based voice screening agent developed by Vidhyonix conducts our technical interviews autonomously. Our recruitment throughput is up 3x, and candidate screening time decreased by 80%.",
    author: "David Vance",
    role: "Head of Talent Acquisition",
    company: "SkillyTalk AI",
    stars: 5,
    avatar: "D"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[activeIndex];

  return (
    <section className="py-24 md:py-32 bg-brand-dark/50 relative overflow-hidden border-t border-white/5">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-ai-grid bg-repeat" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-brand-violet/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-fuchsia/10 border border-brand-fuchsia/20 text-brand-fuchsia text-sm font-medium mb-6"
          >
            <Sparkles size={14} />
            <span>Success Protocols</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Verified by <span className="ai-gradient-text">Global Leaders</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Our deployment success is measured by the exponential growth of our partners.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Card with AnimatePresence */}
          <div className="relative overflow-hidden min-h-[380px] md:min-h-[340px] flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={{
                  enter: (dir: number) => ({
                    x: dir > 0 ? 100 : -100,
                    opacity: 0
                  }),
                  center: {
                    x: 0,
                    opacity: 1
                  },
                  exit: (dir: number) => ({
                    x: dir < 0 ? 100 : -100,
                    opacity: 0
                  })
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="w-full"
              >
                <div className="glass-morphism rounded-[2.5rem] border border-white/5 p-8 md:p-16 relative flex flex-col md:flex-row gap-8 items-start md:items-center">
                  <div className="absolute top-8 right-8 text-white/5 pointer-events-none hidden md:block">
                    <Quote size={120} />
                  </div>
                  
                  {/* Left: Avatar Details */}
                  <div className="flex-shrink-0 flex flex-col items-center gap-4 w-full md:w-auto">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-brand-cyan via-brand-violet to-brand-fuchsia p-[2px] shadow-lg shadow-black/40">
                      <div className="w-full h-full rounded-full bg-brand-dark flex items-center justify-center text-white font-extrabold text-2xl">
                        {current.avatar}
                      </div>
                    </div>
                    <div className="text-center">
                      <h4 className="text-white font-bold text-lg">{current.author}</h4>
                      <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">{current.role}</p>
                      <span className="inline-block mt-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-cyan text-[10px] font-extrabold tracking-widest uppercase">
                        {current.company}
                      </span>
                    </div>
                  </div>

                  {/* Divider for desktop */}
                  <div className="hidden md:block w-px h-32 bg-white/10 flex-shrink-0" />

                  {/* Right: Quote */}
                  <div className="flex-1 space-y-4">
                    {/* Stars */}
                    <div className="flex gap-1">
                      {[...Array(current.stars)].map((_, i) => (
                        <Star key={i} size={16} className="fill-brand-cyan text-brand-cyan" />
                      ))}
                    </div>

                    <p className="text-slate-300 font-medium italic text-lg leading-relaxed relative">
                      "{current.quote}"
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8 px-4">
            {/* Slide Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > activeIndex ? 1 : -1);
                    setActiveIndex(i);
                  }}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    activeIndex === i ? "w-8 bg-brand-cyan" : "w-2 bg-white/20 hover:bg-white/40"
                  )}
                />
              ))}
            </div>

            {/* Slide Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="p-3.5 rounded-full border border-white/5 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 transition-all shadow-md active:scale-95"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="p-3.5 rounded-full border border-white/5 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 transition-all shadow-md active:scale-95"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}