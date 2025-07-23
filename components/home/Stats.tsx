'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeUp } from '@/lib/animations';
import { SectionReveal } from '@/components/PageTransition';


export default function Stats() {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, margin: '-100px' });
  
  const stats = [
    { id: 1, value: 25, label: 'Projects Completed', prefix: '+', suffix: '', color: 'from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600' },
    { id: 2, value: 6, label: 'Years of Experience', prefix: '', suffix: '+', color: 'from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600' },
    { id: 3, value: 99, label: 'Client Satisfaction', prefix: '', suffix: '%', color: 'from-green-500 to-green-700 dark:from-green-400 dark:to-green-600' },
    { id: 4, value: 10, label: 'Team Members', prefix: '', suffix: '+', color: 'from-amber-500 to-amber-700 dark:from-amber-400 dark:to-amber-600' },
  ];

  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <div 
            ref={statsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.12, duration: 0.6, type: 'spring' }}
                className="bg-card border border-border/50 rounded-xl p-6 text-center relative overflow-hidden shadow-sm transition-all flex flex-col items-center group hover:scale-105 hover:shadow-xl"
              >
                <div className="relative z-10 mb-2">
                  <CountUp
                    value={stat.value}
                    isInView={isInView}
                    className="text-4xl md:text-5xl font-bold transition-colors duration-300 group-hover:text-gradient group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent"
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                  <p className="text-muted-foreground font-medium mt-2 text-base md:text-lg">{stat.label}</p>
                </div>
                {/* Animated Progress Bar */}
                <div className="w-full mt-4">
                  <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: isInView ? `${getStatPercent(stat)}%` : 0 }}
                      transition={{ duration: 1.2, delay: 0.2 + index * 0.1, type: 'spring' }}
                      className="h-2 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 group-hover:animate-gradient-move"
                    />
                  </div>
                </div>
                <div className={cn(
                  "absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r",
                  stat.color
                )}/>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

// Counter animation component
function CountUp({ 
  value, 
  isInView, 
  className,
  prefix = '',
  suffix = ''
}: { 
  value: number; 
  isInView: boolean; 
  className?: string;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrameId: number;
    const duration = 2000; // ms
    
    const countUpAnimation = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * value);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(countUpAnimation);
      } else {
        setCount(value);
      }
    };
    
    animationFrameId = requestAnimationFrame(countUpAnimation);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, value]);
  
  return (
    <span className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}

// Helper to get progress percent for each stat
type StatType = { id: number; value: number; label: string; prefix: string; suffix: string; color: string };
function getStatPercent(stat: StatType) {
  // Custom logic for each stat type
  if (stat.label.toLowerCase().includes('satisfaction')) return stat.value;
  if (stat.label.toLowerCase().includes('projects')) return 100;
  if (stat.label.toLowerCase().includes('team')) return 100;
  if (stat.label.toLowerCase().includes('experience')) return 100;
  return stat.value;
}

// Add keyframes for moving gradient
// Add this to the bottom of the file or in a global CSS file if preferred

// In your globals.css, add:
// @keyframes gradient-move {
//   0% { background-position: 0% 50%; }
//   100% { background-position: 100% 50%; }
// }
// .animate-gradient-move {
//   background-size: 200% 200%;
//   animation: gradient-move 2s linear infinite;
// }