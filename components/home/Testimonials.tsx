'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { APP_NAME } from '../layout/Footer';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      id: 1,
      name: 'Emily Carter',
      role: 'CTO, FinSight',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      quote: `${APP_NAME}’s neural architectures enabled us to launch a secure, autonomous ecosystem ahead of schedule. Their engineering precision is unmatched.`,
      rating: 5,
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Head of Engineering, ShopEase',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      quote: `The integration of high-fidelity voice agents transformed our customer journey. We saw a 40% reduction in manual oversight within standard operating hours.`,
      rating: 5,
    },
    {
      id: 3,
      name: 'Linda Zhang',
      role: 'Dir. Innovation, HealthSync',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      quote: `Their predictive engines and data orchestration reduced our operational latency by 60%. ${APP_NAME} is the definitive choice for scale.`,
      rating: 5,
    },
  ];

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    intervalRef.current = setInterval(handleNext, 8000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeIndex]);

  return (
    <section className="py-24 md:py-32 bg-brand-dark/50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-ai-grid bg-repeat" />

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

        <div className="relative max-w-5xl mx-auto">
          {/* Main Card */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 50 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 md:p-12 glass-morphism rounded-[2.5rem] border border-white/5"
              >
                {/* Image Section */}
                <div className="relative group">
                  <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 relative">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
                  </div>

                  {/* Floating Info tag */}
                  <div className="absolute -bottom-6 -right-6 glass-morphism p-6 rounded-2xl border border-white/10 shadow-2xl">
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="fill-brand-cyan text-brand-cyan" />
                      ))}
                    </div>
                    <p className="text-white font-bold text-sm tracking-wider">VERIFIED SUCCESS</p>
                  </div>

                  {/* Aesthetic quote mark */}
                  <div className="absolute -top-4 -left-4 p-4 rounded-xl bg-white text-black shadow-xl">
                    <Quote size={24} fill="currentColor" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <p className="text-2xl md:text-3xl text-slate-100 font-medium leading-tight italic">
                      "{testimonials[activeIndex].quote}"
                    </p>
                  </div>

                  <div className="pt-8 border-t border-white/10">
                    <h4 className="text-xl font-heading font-bold text-white">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-brand-cyan font-bold text-xs uppercase tracking-widest mt-1">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-12 px-4">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > activeIndex ? 1 : -1);
                    setActiveIndex(i);
                  }}
                  className={cn(
                    "h-1.5 transition-all duration-500 rounded-full",
                    i === activeIndex ? "w-12 bg-brand-cyan" : "w-4 bg-white/10 hover:bg-white/20"
                  )}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                className="p-4 rounded-xl glass-morphism border border-white/10 hover:border-brand-cyan/50 text-white transition-all group"
              >
                <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleNext}
                className="p-4 rounded-xl glass-morphism border border-white/10 hover:border-brand-cyan/50 text-white transition-all group"
              >
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}