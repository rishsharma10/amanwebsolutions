'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
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
import vidhyonixCafe from '@/app/assets/projects/vidhyonixcafe.png';
import goodCitizen from '@/app/assets/app/logo.jpg';
import cyphr from '@/app/assets/3d/cyphr.png';
import trionn from '@/app/assets/3d/trionn.png';
import compsych from '@/app/assets/3d/compsych.png';
import aether from '@/app/assets/3d/aether.png';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Work', icon: Globe },
    { id: 'ai', label: 'AI & Agents', icon: Cpu },
    { id: 'saas', label: 'SaaS Platforms', icon: Box },
    { id: 'web', label: 'Web & Mobile', icon: Smartphone },
  ];

  const projects = [
    {
      id: 1,
      title: 'SkillyTalk Interview',
      problem: 'Manual candidate screening is biased, slow, and expensive.',
      solution: 'An AI-powered voice agent that conducts technical interviews autonomously.',
      impact: 'Reduced candidate screening times by 80% and eliminated scoring bias.',
      metric: '80% Time Saved',
      tech: ['Next.js', 'OpenAI', 'WebRTC', 'NestJS'],
      category: 'ai',
      image: '/assets/dashboard.jpg',
      link: 'https://aiinterview.skillytalk.com/',
      color: 'bg-brand-cyan/20 text-brand-cyan'
    },
    {
      id: 2,
      title: 'AI Hiring Platform',
      problem: 'HR teams struggle to manage thousands of resumes efficiently.',
      solution: 'An intelligent ATS that parses, ranks, and shortlists candidates using NLP.',
      impact: 'Boosted recruiter hiring throughput by 3x and reduced pipeline leaks.',
      metric: '3x Recruiter Speed',
      tech: ['React', 'Python', 'Vector DB', 'AWS'],
      category: 'saas',
      image: '/assets/hiring.png',
      link: '#',
      color: 'bg-brand-violet/20 text-brand-violet'
    },
    {
      id: 3,
      title: 'Enterprise Analytics Dashboard',
      problem: 'Disjointed data sources lead to poor decision making.',
      solution: 'A unified dashboard aggregating data from 10+ sources with predictive insights.',
      impact: 'Saved executives 15 hours a week in reporting with 99.9% accuracy.',
      metric: '15 Hours Saved/Wk',
      tech: ['Vue.js', 'Node.js', 'PostgreSQL', 'Redis'],
      category: 'saas',
      image: '/assets/analytics.png',
      link: '#',
      color: 'bg-brand-fuchsia/20 text-brand-fuchsia'
    },
    {
      id: 4,
      title: 'Good Citizen App',
      problem: 'Citizens lack a quick way to report local emergencies.',
      solution: 'A fast, reliable mobile app with geolocation and real-time alerts.',
      impact: 'Over 50,000 active users reporting issues daily, cutting response lag by 35%.',
      metric: '50k+ Daily Reports',
      tech: ['Flutter', 'Firebase', 'GCP'],
      category: 'web',
      image: goodCitizen.src,
      link: 'https://app.agoodcitizen.in/',
      color: 'bg-brand-cyan/20 text-brand-cyan'
    },
    {
      id: 5,
      title: 'AI Tools Directory',
      problem: 'Users cannot find reliable AI tools easily.',
      solution: 'A high-performance directory with intelligent search and categorization.',
      impact: 'Reached 100k+ monthly unique visitors within 3 months of launch.',
      metric: '100k+ Monthly Users',
      tech: ['Next.js', 'Tailwind', 'Algolia'],
      category: 'web',
      image: marketReach.src,
      link: 'https://aitoolsone.com/',
      color: 'bg-brand-violet/20 text-brand-violet'
    },
    {
      id: 6,
      title: 'Automated Support Agent',
      problem: 'High customer support ticket volume causes slow response times.',
      solution: 'A context-aware LLM chatbot integrated directly into the helpdesk.',
      impact: 'Resolved 65% of level-1 tickets automatically with 4.8 CSAT.',
      metric: '65% Resolution Rate',
      tech: ['LangChain', 'OpenAI', 'React'],
      category: 'ai',
      image: '/assets/agent.png',
      link: '#',
      color: 'bg-brand-fuchsia/20 text-brand-fuchsia'
    },
    {
      id: 7,
      title: 'OrderGenie App',
      problem: 'Restaurants miss incoming phone and online orders during busy peak hours, losing revenue.',
      solution: 'An automated, voice-enabled AI ordering agent that answers calls and handles orders autonomously.',
      impact: 'Zero missed orders during peak hours, increasing food sales by 24%.',
      metric: '+24% Sales Growth',
      tech: ['Flutter', 'Firebase', 'GCP', 'OpenAI'],
      category: 'web',
      image: '/assets/ogslo.png',
      link: 'https://app.ordergenie.in/',
      color: 'bg-brand-cyan/20 text-brand-cyan'
    },
    {
      id: 9,
      title: 'Vidhyonix Cafe',
      problem: 'A real cafe needed both a stunning brand website and a frictionless in-table ordering experience.',
      solution: 'Built a full-stack cafe platform — immersive scroll website + QR-based table ordering system with live kitchen notifications.',
      impact: 'Live at cafe.vidhyonix.com · 4.3★ on Google · 774+ reviews · QR ordering adopted across all tables.',
      metric: '4.3★ · 774 Reviews',
      tech: ['Next.js', 'GSAP', 'Tailwind', 'QR Ordering'],
      category: 'web',
      image: vidhyonixCafe.src,
      link: 'https://cafe.vidhyonix.com/',
      color: 'bg-amber-500/20 text-amber-400'
    },
    {
      id: 8,
      title: 'InterviewEasy AI',
      problem: 'Job seekers lack a realistic, stress-free environment to prepare for high-stakes technical interviews.',
      solution: 'A conversational AI interview platform that conducts voice-based mock interviews and provides detailed scoring rubrics.',
      impact: 'Boosted candidate hiring rates by 42% and reduced interview anxiety.',
      metric: '+42% Hiring Rate',
      tech: ['Next.js', 'OpenAI API', 'WebRTC', 'Tailwind CSS'],
      category: 'ai',
      image: '/assets/intervieweasy.png',
      link: 'https://intervieweasy.ai/',
      color: 'bg-brand-violet/20 text-brand-violet'
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
            <span>Our Work</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Featured <span className="ai-gradient-text">Case Studies</span>
          </h2>
          <p className="text-slate-400 text-lg">
            See how we have helped ambitious brands scale their operations and create stunning digital experiences.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex justify-start md:justify-center mb-16 overflow-x-auto pb-4 scrollbar-hide w-full max-w-full px-4">
          <div className="flex gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md shrink-0">
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
                className="group relative flex flex-col h-full bg-[#0d0d12]/60 rounded-3xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
              >
                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden bg-brand-dark flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-transparent to-transparent pointer-events-none" />

                  {/* Category Badge on top of image */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={cn("px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest block", project.color)}>
                      {project.category}
                    </span>
                  </div>

                  {/* Bold Metric Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1.5 rounded-xl text-[10px] font-extrabold bg-brand-cyan text-brand-dark shadow-lg shadow-brand-cyan/20 uppercase tracking-widest block">
                      {project.metric}
                    </span>
                  </div>

                  {/* External Arrow link button */}
                  {project.link !== '#' && (
                    <div className="absolute bottom-4 right-4 z-10 p-2.5 rounded-xl bg-[#0d0d12]/85 border border-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg">
                      <ArrowRight size={16} className="text-white" />
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-6">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors">
                      {project.title}
                    </h3>

                    {/* Outcome / Case Study parameters */}
                    <div className="space-y-3 bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                      <div className="text-xs leading-relaxed">
                        <span className="text-red-400 font-bold block mb-0.5">THE CHALLENGE</span>
                        <p className="text-slate-400 font-medium">{project.problem}</p>
                      </div>
                      <div className="w-full h-px bg-white/5" />
                      <div className="text-xs leading-relaxed">
                        <span className="text-green-400 font-bold block mb-0.5">THE SOLUTION</span>
                        <p className="text-slate-300 font-medium">{project.solution}</p>
                      </div>
                      <div className="w-full h-px bg-white/5" />
                      <div className="text-xs leading-relaxed">
                        <span className="text-brand-cyan font-bold block mb-0.5">BUSINESS IMPACT</span>
                        <p className="text-white font-semibold">{project.impact}</p>
                      </div>
                    </div>
                  </div>

                  {/* Tech Tags & CTA */}
                  <div className="space-y-4 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-[10px] font-bold text-slate-400 px-2.5 py-1 bg-white/5 rounded-lg border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="border-t border-white/5 pt-4">
                      {project.link !== '#' ? (
                        <Link href={project.link} target="_blank" className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-brand-cyan transition-colors">
                          VIEW CASE STUDY <ArrowRight size={14} />
                        </Link>
                      ) : (
                        <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-brand-cyan transition-colors">
                          DISCUSS PROJECT <ArrowRight size={14} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {/* Underlay glow */}
                <div className={cn(
                  "absolute -inset-2 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-[2.5rem] blur-2xl z-[-1] pointer-events-none",
                  project.id % 3 === 0 ? "bg-brand-cyan" : project.id % 2 === 0 ? "bg-brand-violet" : "bg-brand-fuchsia"
                )} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All */}
        <div className="mt-20 text-center">
          <Link
            href="/portfolio"
            className="px-10 py-4 border border-white/10 rounded-2xl text-white font-bold tracking-wider hover:bg-white/5 hover:border-brand-cyan/50 transition-all flex items-center gap-3 mx-auto group w-fit text-center"
          >
            VIEW ARCHIVE
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}