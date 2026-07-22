'use client';

import { motion } from 'framer-motion';
import { Target, Zap, Users, Star, Shield, TrendingUp, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Values() {
  const values = [
    {
      title: 'Uncompromising Quality',
      description: 'We do not ship mediocre code. Every product we build undergoes rigorous architecture planning and QA to ensure enterprise-grade stability.',
      icon: Star,
      color: 'text-brand-cyan',
      glow: 'bg-brand-cyan/20',
    },
    {
      title: 'Radical Transparency',
      description: 'No hidden fees, no black-box development. You have full visibility into our sprints, codebases, and progress at every step.',
      icon: Shield,
      color: 'text-brand-fuchsia',
      glow: 'bg-brand-fuchsia/20',
    },
    {
      title: 'Speed of Execution',
      description: 'We understand that time-to-market is everything. Our agile frameworks allow us to deliver robust MVPs and full products faster than industry standards.',
      icon: Zap,
      color: 'text-brand-violet',
      glow: 'bg-brand-violet/20',
    },
    {
      title: 'AI-First Mindset',
      description: 'We integrate automation and machine learning intelligently, focusing on real ROI rather than chasing the latest hype.',
      icon: Sparkles,
      color: 'text-brand-cyan',
      glow: 'bg-brand-cyan/20',
    },
    {
      title: 'Reliability',
      description: 'Our systems are built to scale. We architect infrastructure designed to handle immense traffic without breaking a sweat.',
      icon: Target,
      color: 'text-brand-fuchsia',
      glow: 'bg-brand-fuchsia/20',
    },
    {
      title: 'True Partnership',
      description: 'We operate as an extension of your team, providing strategic insights and long-term support well past the launch date.',
      icon: Users,
      color: 'text-brand-violet',
      glow: 'bg-brand-violet/20',
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-fuchsia/10 border border-brand-fuchsia/20 text-brand-fuchsia text-sm font-medium mb-6"
          >
            <Target size={14} />
            <span>Our Core Values</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            What Drives <span className="ai-gradient-text">Our Team</span>
          </h2>
          <p className="text-slate-400 text-lg">
            These are the principles that guide every line of code we write and every decision we make.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative"
              >
                <div className="absolute -inset-2 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-[2.5rem] blur-xl z-0" style={{ backgroundColor: `var(--${v.color.split('-')[2]})` }} />

                <div className="relative glass-morphism p-10 rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all duration-500 h-full flex flex-col">
                  <div className={cn("p-4 rounded-2xl w-fit mb-8 bg-white/5 border border-white/5", v.color)}>
                    <Icon size={28} />
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors">
                    {v.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {v.description}
                  </p>

                  <div className="mt-auto pt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className={cn("w-2 h-2 rounded-full animate-pulse", v.color.replace('text', 'bg'))} />
                    <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase">active_protocol</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}