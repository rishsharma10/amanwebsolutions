'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { APP_NAME } from '../layout/Footer';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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
          {/* Main Card - Empty State for now */}
          <div className="relative overflow-hidden">
             <div className="grid grid-cols-1 items-center p-12 md:p-24 glass-morphism rounded-[2.5rem] border border-white/5 text-center">
                <Quote size={48} className="mx-auto mb-6 text-white/20" />
                <h3 className="text-2xl font-bold text-white mb-2">Compiling Success Stories</h3>
                <p className="text-slate-400 max-w-md mx-auto">
                  We are currently gathering verified testimonials from our recent enterprise and startup deployments. Check back soon for detailed client success stories.
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}