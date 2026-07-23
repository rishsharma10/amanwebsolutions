'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Globe, Building2, Code2, Briefcase, Award, ShieldCheck, Cloud, CheckSquare, Activity } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Trust() {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, margin: '-50px' });

  const stats = [
    {
      id: 1,
      value: 5,
      label: 'Years Experience',
      suffix: '+',
      icon: Award,
    },
    {
      id: 2,
      value: 20,
      label: 'Projects Delivered',
      suffix: '+',
      icon: Briefcase,
    },
    {
      id: 3,
      value: 10,
      label: 'Industries Served',
      suffix: '+',
      icon: Building2,
    },
    {
      id: 4,
      value: 5,
      label: 'Countries Served',
      suffix: '+',
      icon: Globe,
    },
  ];

  return (
    <section className="py-20 relative bg-brand-dark/50 border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">

        {/* Trusted Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center justify-center p-6 rounded-2xl glass-morphism border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="text-brand-cyan mb-3">
                  <Icon size={24} />
                </div>
                <div className="flex items-baseline gap-1">
                  <CountUp
                    value={stat.value}
                    isInView={isInView}
                    className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight"
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-slate-400 font-medium text-sm mt-2 text-center">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Trust & Compliance Badges Strip */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold">Compliance, Infrastructure & Security</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: ShieldCheck,
                title: "SOC 2 & ISO 27001 Ready",
                desc: "Enterprise-grade data encryption and secure key management."
              },
              {
                icon: Cloud,
                title: "AWS & GCP Cloud Partners",
                desc: "Certified solution architects building cost-optimized infrastructure."
              },
              {
                icon: CheckSquare,
                title: "GDPR & HIPAA Compliant",
                desc: "Strict user privacy protection and healthcare-ready security protocols."
              },
              {
                icon: Activity,
                title: "99.99% Uptime Guarantee",
                desc: "Continuous load balancing, health monitoring, and active backup systems."
              }
            ].map((badge, idx) => {
              const BadgeIcon = badge.icon;
              return (
                <div key={idx} className="flex gap-4 p-5 rounded-2xl glass-morphism border border-white/5 items-center hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan flex-shrink-0">
                    <BadgeIcon size={20} />
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-sm">{badge.title}</h5>
                    <p className="text-slate-400 text-xs mt-1 leading-relaxed">{badge.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Proof of Execution - SkillyTalk Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl glass-morphism border border-white/10 p-8 md:p-12"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-violet/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan text-sm font-medium">
                Proof of Execution
              </div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">
                We don't just build for clients. <br />
                <span className="text-slate-400">We build our own successful SaaS.</span>
              </h3>
              <p className="text-lg text-slate-300">
                Meet <strong className="text-white">SkillyTalk</strong>, our proprietary AI-powered interviewing platform. It handles thousands of candidate evaluations with zero bias using advanced LLMs and speech recognition. We bring this same level of product engineering expertise to your business.
              </p>
              <div className="pt-4">
                <Link href="https://aiinterview.skillytalk.com/" target="_blank">
                  <button className="flex items-center gap-2 text-brand-cyan font-bold hover:text-white transition-colors">
                    View SkillyTalk in Action <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
            </div>

            {/* Minimal Mockup with Real Product Screenshot */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0f] shadow-2xl">
              <img
                src="/assets/dashboard.png"
                alt="SkillyTalk AI Recruiter Dashboard Screenshot"
                className="absolute inset-0 w-full h-full object-cover opacity-75 object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="glass-morphism rounded-xl p-4 border border-white/5 backdrop-blur-md">
                  <div className="flex justify-between items-center mb-2">
                    <div className="h-2 w-24 bg-white/20 rounded" />
                    <div className="text-xs text-brand-cyan font-mono flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse" />
                      LIVE DASHBOARD
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-8 flex-1 bg-white/10 rounded animate-pulse" />
                    <div className="h-8 w-12 bg-brand-violet/20 rounded border border-brand-violet/30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

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
