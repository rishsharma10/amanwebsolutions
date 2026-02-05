'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Code, Layout, Smartphone, Box, Globe, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';
import madamJan from '@/app/assets/projects/madamjan.png';
import evitavonni from '@/app/assets/projects/evitavoni.png';
import paliYoga from '@/app/assets/projects/paliyoga.png';
import sascoStudentLiving from '@/app/assets/projects/sasco.png';
import designLiving from '@/app/assets/projects/designliving.png';
import watchHouse from '@/app/assets/projects/watchhouse.png';
import cryptoMLM from '@/app/assets/projects/phase2crypto.png';
import marketReach from '@/app/assets/projects/aitools.png';
import abundish from '@/app/assets/projects/abundish.png';
import goodCitizen from '@/app/assets/app/logo.jpg';
import cyphr from '@/app/assets/3d/cyphr.png';
import trionn from '@/app/assets/3d/trionn.png';
import compsych from '@/app/assets/3d/compsych.png';
import aether from '@/app/assets/3d/aether.png';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Systems', icon: Globe },
    { id: 'web', label: 'Ecosystems', icon: Layout },
    { id: 'app', label: 'Neural Apps', icon: Smartphone },
    { id: '3d', label: 'Synthetic 3D', icon: Box },
  ];

  const projects = [
    {
      id: 1,
      title: 'Aether 1',
      description: 'Studio-grade audio systems powered by Sub-Alphatonic Core technology.',
      tech: ['Three.js', 'Blender', 'Framer Motion'],
      category: '3d',
      image: aether.src,
      link: 'https://www.aether1.ai/',
      color: 'bg-brand-cyan/20 text-brand-cyan'
    },
    {
      id: 2,
      title: 'Abundish',
      description: 'Hyper-local logistics platform with real-time neural routing.',
      tech: ['Next.js', 'Nest.js', 'Redis'],
      category: 'web',
      image: abundish.src,
      link: 'https://staging.abundish.com/',
      color: 'bg-brand-violet/20 text-brand-violet'
    },
    {
      id: 3,
      title: 'Cyphr Studio',
      description: 'Strategic creative hub for high-fidelity fan engagement experiences.',
      tech: ['Three.js', 'GSAP', 'WebGL'],
      category: '3d',
      image: cyphr.src,
      link: 'https://www.cyphr.studio/',
      color: 'bg-brand-fuchsia/20 text-brand-fuchsia'
    },
    {
      id: 4,
      title: 'Good Citizen',
      description: 'Autonomous emergency orchestration & notification network.',
      tech: ['Flutter', 'Firebase', 'Real-time'],
      category: 'app',
      image: goodCitizen.src,
      link: 'https://app.agoodcitizen.in/',
      color: 'bg-brand-cyan/20 text-brand-cyan'
    },
    {
      id: 5,
      title: 'Trionn',
      description: 'Full-spectrum digital agency platform for modern corporate entities.',
      tech: ['Three.js', 'React.js', 'Design'],
      category: '3d',
      image: trionn.src,
      link: 'https://trionn.com/',
      color: 'bg-brand-violet/20 text-brand-violet'
    },
    {
      id: 6,
      title: 'AI Tools One',
      description: 'Comprehensive directory of autonomous systems and neural assets.',
      tech: ['WordPress', 'AI Integrations'],
      category: 'web',
      image: marketReach.src,
      link: 'https://aitoolsone.com/',
      color: 'bg-brand-fuchsia/20 text-brand-fuchsia'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="py-24 md:py-32 bg-brand-dark/30 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-ai-grid bg-repeat" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-sm font-medium mb-6"
          >
            <Cpu size={14} />
            <span>Deployment History</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Pioneering <span className="ai-gradient-text">High-Fidelity</span> Solutions
          </h2>
          <p className="text-slate-400 text-lg">
            We don't just build products; we architect digital legacies for the world's most ambitious brands.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex justify-center mb-16 overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={cn(
                    "px-6 py-2.5 rounded-xl text-sm font-bold tracking-wider transition-all flex items-center gap-2",
                    activeFilter === category.id
                      ? "bg-white text-black shadow-lg shadow-white/10"
                      : "text-slate-400 hover:text-white"
                  )}
                >
                  <Icon size={16} />
                  <span className="uppercase">{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative"
              >
                <Link href={project.link} target="_blank" className="block">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-morphism border border-white/10">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-brand-dark/60 group-hover:bg-brand-dark/20 transition-colors duration-500" />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className={cn("px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest w-fit mb-4", project.color)}>
                          {project.category}
                        </div>
                        <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Tags */}
                      <div className="mt-6 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {project.tech.map((t, i) => (
                          <span key={i} className="text-[10px] font-medium text-white/50 px-2 py-1 bg-white/5 rounded-md border border-white/5">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Arrow Icon */}
                    <div className="absolute top-6 right-6 p-3 rounded-xl glass-morphism border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0">
                      <ArrowRight size={20} className="text-white" />
                    </div>
                  </div>
                </Link>

                {/* Underlay glow */}
                <div className={cn(
                  "absolute -inset-2 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-[2.5rem] blur-xl z-[-1]",
                  project.id % 3 === 0 ? "bg-brand-cyan" : project.id % 2 === 0 ? "bg-brand-violet" : "bg-brand-fuchsia"
                )} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All */}
        <div className="mt-20 text-center">
          <Link href="/portfolio">
            <button className="px-10 py-4 border border-white/10 rounded-2xl text-white font-bold tracking-wider hover:bg-white/5 hover:border-brand-cyan/50 transition-all flex items-center gap-3 mx-auto group">
              VIEW ARCHIVE
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}