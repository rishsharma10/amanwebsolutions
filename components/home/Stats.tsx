'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Cpu, Activity, BarChart3, Users } from 'lucide-react';

export default function Stats() {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, margin: '-100px' });

  const stats = [
    {
      id: 1,
      value: 25,
      label: 'Systems Deployed',
      prefix: '+',
      suffix: '',
      icon: Cpu,
      color: 'text-brand-cyan',
      glow: 'shadow-brand-cyan/20'
    },
    {
      id: 2,
      value: 6,
      label: 'Years of Stability',
      prefix: '',
      suffix: '+',
      icon: Activity,
      color: 'text-brand-violet',
      glow: 'shadow-brand-violet/20'
    },
    {
      id: 3,
      value: 99,
      label: 'Uptime Reliability',
      prefix: '',
      suffix: '%',
      icon: BarChart3,
      color: 'text-brand-fuchsia',
      glow: 'shadow-brand-fuchsia/20'
    },
    {
      id: 4,
      value: 10,
      label: 'Neural Engineers',
      prefix: '',
      suffix: '+',
      icon: Users,
      color: 'text-brand-cyan',
      glow: 'shadow-brand-cyan/20'
    },
  ];

  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Subtle scan-line overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative glass-morphism p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Icon size={80} />
                </div>

                <div className={cn("p-3 rounded-2xl w-fit mb-6 bg-white/5 border border-white/5", stat.color)}>
                  <Icon size={24} />
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <CountUp
                      value={stat.value}
                      isInView={isInView}
                      className="text-5xl font-heading font-bold text-white tracking-tighter"
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                  <p className="text-slate-400 font-medium uppercase tracking-widest text-[10px]">
                    {stat.label}
                  </p>
                </div>

                {/* Cyber Bar */}
                <div className="mt-8 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : {}}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    className={cn(
                      "h-full rounded-full bg-gradient-to-r",
                      stat.id % 3 === 0 ? "from-brand-cyan to-brand-violet" :
                        stat.id % 2 === 0 ? "from-brand-violet to-brand-fuchsia" : "from-brand-fuchsia to-brand-cyan"
                    )}
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-brand-cyan/50 transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

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
    const duration = 2000;

    const countUpAnimation = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuad = (t: number) => t * (2 - t);
      const currentCount = Math.floor(easeOutQuad(progress) * value);

      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(countUpAnimation);
      } else {
        setCount(value);
      }
    };

    animationFrameId = requestAnimationFrame(countUpAnimation);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value]);

  return (
    <span className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}