'use client'

import React, { useEffect, useRef } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
// @ts-ignore
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import madamJan from '@/app/assets/projects/madamjan.png';
import evitavonni from '@/app/assets/projects/evitavoni.png';
import paliYoga from '@/app/assets/projects/paliyoga.png';
import sascoStudentLiving from '@/app/assets/projects/sasco.png';
import designLiving from '@/app/assets/projects/designliving.png';
import watchHouse from '@/app/assets/projects/watchhouse.png';
import cryptoMLM from '@/app/assets/projects/phase2crypto.png';
import marketReach from '@/app/assets/projects/aitools.png';
import abundish from '@/app/assets/projects/abundish.png';
import cyphr from '@/app/assets/3d/cyphr.png';
import trionn from '@/app/assets/3d/trionn.png';
import compsych from '@/app/assets/3d/compsych.png';
import aether from '@/app/assets/3d/aether.png';

const projects = [
  {
    id: 1,
    title: 'Madam jan',
    description: 'Madam Jan is a design-forward, playful, and utility-driven homeware brand for those who find joy in the details. We believe that beauty and function can and should coexist. Every product we design and curate is meant to delight the senses, elevate the everyday, and serve a purpose in your space.',
    tech: ['Shopify', 'HTML', 'CSS', 'JavaScript'],
    category: 'web',
    image: madamJan.src,
    client: 'Madam Jan',
    year: '2024',
    link: 'https://madamjanindia.com/',
  },
  {
    id: 2,
    title: 'Evitavonni',
    description: 'Looking past trends and focusing on a timeless style that transcends fashion, the inherent beauty and unmatched quality is born from Creative Director Kate Erwich’s passion for classic couture and artisanal craftsmanship.',
    tech: ['WordPress'],
    category: 'web',
    image: evitavonni.src,
    client: 'Evitavonni',
    year: '2024',
    link: 'https://www.evitavonni.com/',
  },
  {
    id: 3,
    title: 'Pali Yoga',
    description: 'A space where every stretch, every breath, and every smile holds the promise of growth and transformation.',
    tech: ['WordPress'],
    category: 'web',
    image: paliYoga.src,
    client: 'Pali Yoga',
    year: '2023',
    link: 'https://www.pali.yoga/',
  },
  {
    id: 4,
    title: 'Sasco Student Living',
    description: 'Sasco Student Living is a student housing provider in the United States.',
    tech: ['WordPress'],
    category: 'web',
    image: sascoStudentLiving.src,
    client: 'Sasco Student Living',
    year: '2023',
    link: 'https://www.sascostudentliving.com/',
  },
  {
    id: 5,
    title: 'Design Living 365',
    description: 'Designliving365.com is an online store created by two Danes residing in Prague, with the purpose to deliver design products for home in a good quality for reasonable price.',
    tech: ['WordPress'],
    category: 'web',
    image: designLiving.src,
    client: 'Design Living 365',
    year: '2023',
    link: 'https://www.designliving365.com',
  },
  {
    id: 6,
    title: 'Watch House',
    description: 'Watch House is a specialty coffee brand dedicated to sourcing and roasting the finest beans for coffee enthusiasts.',
    tech: ['React'],
    category: 'web',
    image: watchHouse.src,
    client: 'Watch House',
    year: '2022',
    link: '#',
  },
  { 
    id: 7,
    title: 'Crypto MLM',
    description: 'A comprehensive MLM platform for startups, delivering logo design, brand guidelines, and digital assets in one place.',
    tech: ['React'],
    category: 'web',
    image: cryptoMLM.src,
    client: 'Crypto MLM',
    year: '2023',
    link: 'https://www.phase2growth.com/',
  },
  {
    id: 8,
    title: 'Ai Tools',
    description: 'We’re a small team that started this site because we understand how daunting it can be to learn about the many different AI technologies and tools available today. There is a lot of hype and buzzwords out there, and it’s not always clear what tools are right for your specific needs and use cases',
    tech: ['WordPress'],
    category: 'marketing',
    image: marketReach.src,
    client: 'MarketReach',
    year: '2023',
    link: 'https://aitoolsone.com/',
  },
  {
    id: 9,
    title: 'Abundish store',
    description: 'Your favorite stores and restaurants delivered right to your door. Enjoy a seamless ordering experience as you explore local favorites and discover new delights. Fast and reliable service, just where you need it. Track your delivery with real-time updates, from preparation to doorstep.',
    tech: ['Next.js', 'Nest.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    category: 'web',
    image: abundish.src,
    client: 'Abundish',
    year: '2023',
    link: 'https://staging.abundish.com/',
  },
  {
    id: 10,
    title: 'Aether',
    description: 'The Aether 1 Earbuds deliver crystal-clear, studio-grade sound with timeless craftsmanship and intuitive controls. Built for effortless listening, they combine elegant design with durability, offering comfort and precision in every detail. Powered by the Sub-Alphatonic Core, they provide unmatched performance and endurance, redefining what wireless audio can truly be.',
    tech: ['Three.js', 'Blender', 'GSAP', 'React.js', 'Framer Motion'],
    category: '3d',
    image: aether.src,
    client: 'Aether',
    year: '2023',
    link: 'https://www.aether1.ai/',
  },
  {
    id: 11,
    title: 'compsych',
    description: 'ComPsych’s Brand Guidelines define a clear and compassionate identity rooted in human resilience. With a calm, confident, caring voice, the guide outlines our purpose, visual language, and values — from logo, typography, and color to photography. Designed for organizations that believe supporting people drives success. A new dawn for elevating human potential.',
    tech: ['Three.js', 'Blender', 'GSAP', 'React.js', 'Framer Motion'],
    category: '3d',
    image: compsych.src,
    client: 'compsych',
    year: '2023',
    link: 'https://compsych.konpo.co/',
  },
  {
    id: 12,
    title: 'Trionn',
    description: 'Trionn is a bold, full-spectrum digital agency with over 20 years of experience helping brands roar in the corporate jungle. Experts in design, branding, UX research, web & app development, ecommerce, and content management, they pride themselves on powerful collaboration, award-winning creative work, and turning ambitious visions into polished digital reality.',
    tech: ['Three.js', 'Blender', 'GSAP', 'React.js', 'Framer Motion'],
    category: '3d',
    image: trionn.src,
    client: 'Trionn',
    year: '2023',
    link: 'https://trionn.com/',
  },
  {
    id: 13,
    title: 'Cyphr',
    description: 'Cyphr is a strategic creative studio focused on fan engagement, crafting culturally resonant experiences that build community, loyalty, and commercial value. By blending insight, tech, and bold design, they offer end-to-end solutions—from product building and IP ventures to marketing activation and data-driven fan growth.',
    tech: ['Three.js', 'Blender', 'GSAP', 'React.js', 'Framer Motion'],
    category: '3d',
    image: cyphr.src,
    client: 'Cyphr',
    year: '2023',
    link: 'https://www.cyphr.studio/',
  },
];

const milestones = [
  {
    year: '2025',
    title: 'Agency Founded',
    description: 'Launched as a next-gen digital agency with a passion for creative technology and client success.',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="16" fill="url(#a)" />
        <path d="M10 22l6-12 6 12H10z" fill="#fff" />
        <defs>
          <linearGradient id="a" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" />
            <stop offset="0.5" stopColor="#a21caf" />
            <stop offset="1" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    year: '2025',
    title: 'First 5 Clients',
    description: 'Secured our first 5 clients, delivering impactful digital solutions and building strong partnerships.',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="16" fill="url(#b)" />
        <path d="M16 10v12M10 16h12" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="b" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" />
            <stop offset="0.5" stopColor="#a21caf" />
            <stop offset="1" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    year: '2026',
    title: '20+ Clients Worldwide',
    description: 'Expanded our portfolio to over 20 clients, serving startups and established brands across multiple industries.',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="16" fill="url(#c)" />
        <path d="M16 10a6 6 0 016 6v2a6 6 0 01-12 0v-2a6 6 0 016-6z" fill="#fff" />
        <defs>
          <linearGradient id="c" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" />
            <stop offset="0.5" stopColor="#a21caf" />
            <stop offset="1" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    year: '2027',
    title: 'Award-Winning Campaigns',
    description: 'Recognized for creative excellence and innovation in digital marketing and web development.',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="16" fill="url(#d)" />
        <path d="M10 22l6-12 6 12H10z" fill="#fff" />
        <defs>
          <linearGradient id="d" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" />
            <stop offset="0.5" stopColor="#a21caf" />
            <stop offset="1" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    year: '2028',
    title: 'Global Team & Innovation',
    description: 'Grew to a global team, launching AI-driven solutions and expanding our digital service offerings.',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="16" fill="url(#e)" />
        <path d="M16 10v12M10 16h12" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="e" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" />
            <stop offset="0.5" stopColor="#a21caf" />
            <stop offset="1" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];




export default function Portfolio() {
  // GSAP Timeline Animation
  const timelineRef = useRef(null);
  useEffect(() => {
    if (timelineRef.current) {
      (gsap.utils.toArray('.milestone') as HTMLElement[]).forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: i % 2 === 0 ? -60 : 60 },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              end: 'bottom 60%',
              toggleActions: 'play none none reverse',
            },
            duration: 1,
            delay: i * 0.1,
            ease: 'power3.out',
          }
        );
      });
    }
  }, []);

  // Keen Slider for Featured Projects
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 32 },
    breakpoints: {
      '(min-width: 768px)': { slides: { perView: 1, spacing: 32 } },
      '(min-width: 1024px)': { slides: { perView: 3, spacing: 32 } },
    },
  });

  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-fuchsia-50 to-pink-50 dark:from-neutral-900 dark:via-blue-950 dark:to-fuchsia-950">
        <Header />
        {/* Hero/Intro Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-transparent">
          {/* Animated background rings and blurry dots (like service hero) */}
          <motion.div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
            <motion.div
              className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-sky-400/20 blur-[100px]"
              animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
              transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-fuchsia-400/20 blur-[120px]"
              animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gradient-to-br from-blue-400 via-fuchsia-400 to-pink-400 opacity-20"
                style={{
                  width: `${32 + i * 10}px`,
                  height: `${32 + i * 10}px`,
                  left: `${10 + i * 15}%`,
                  top: `${20 + i * 12}%`,
                  filter: 'blur(8px)',
                }}
                animate={{
                  y: [0, 20 + i * 5, 0],
                  x: [0, -10 + i * 3, 0],
                }}
                transition={{ duration: 10 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: i }}
              />
            ))}
          </motion.div>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block py-1 px-3 mb-6 rounded-full bg-gradient-to-r from-sky-100 via-fuchsia-100 to-pink-100 text-primary border border-primary/20 font-medium text-sm backdrop-blur">
                Our Portfolio
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                Digital Excellence, Delivered
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto font-medium">
                Explore our portfolio of innovative web, mobile, and cloud solutions. Vidhyonix partners with ambitious brands to create future-ready digital products that drive business growth and customer success.
              </p>
            </div>
          </div>
        </section>
        {/* Unique Project Grid */}
        <section className="relative py-24 md:py-32">
          {/* 3D Dots/Rings Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Animated 3D Dots */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gradient-to-br from-sky-400 via-fuchsia-400 to-pink-400 opacity-30"
                style={{
                  width: `${80 + i * 40}px`,
                  height: `${80 + i * 40}px`,
                  left: `${10 + i * 15}%`,
                  top: `${15 + i * 12}%`,
                  filter: 'blur(12px)',
                  zIndex: 0,
                }}
                animate={{
                  scale: [1, 1.15, 1],
                  rotate: [0, 360, 0],
                }}
                transition={{ duration: 18 + i * 2, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
              />
            ))}
            {/* Animated 3D Rings (SVG) */}
            {[...Array(2)].map((_, i) => (
              <motion.svg
                key={i}
                width={320 + i * 120}
                height={320 + i * 120}
                viewBox="0 0 320 320"
                fill="none"
                className="absolute opacity-20"
                style={{
                  left: i === 0 ? '-80px' : '70%',
                  top: i === 0 ? '60%' : '-60px',
                  zIndex: 0,
                }}
                animate={{ rotate: [0, 360, 0] }}
                transition={{ duration: 40 + i * 10, repeat: Infinity, ease: 'linear', delay: i }}
              >
                <ellipse cx="160" cy="160" rx="150" ry="80" stroke="url(#ring-gradient)" strokeWidth="8" />
                <defs>
                  <linearGradient id="ring-gradient" x1="0" y1="0" x2="320" y2="320" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#38bdf8" />
                    <stop offset="0.5" stopColor="#a21caf" />
                    <stop offset="1" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </motion.svg>
            ))}
          </div>
          <div className="container mx-auto px-4">
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.8, type: 'spring' }}
                  className="relative group flex flex-col h-full"
                >
                  <motion.div
                    className="relative rounded-2xl shadow-xl overflow-hidden bg-white/90 dark:bg-neutral-900/90 border border-primary/10 flex flex-col h-full transition-all duration-500 group-hover:shadow-2xl"
                    style={{ zIndex: 2 }}
                    whileHover={{ y: -8, scale: 1.03 }}
                  >
                    {/* Project Image */}
                    <div className="relative w-full h-56 md:h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                      {/* Subtle orb accent */}
                      <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-gradient-to-br from-sky-400 via-fuchsia-400 to-pink-400 opacity-20 blur-2xl z-10 pointer-events-none" />
                    </div>
                    {/* Card Content */}
                    <div className="flex flex-col flex-1 justify-between p-6 gap-3">
                      <div>
                        <h3 className="text-xl font-bold bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-200 text-base mb-3 whitespace-pre-line">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {project.tech && project.tech.map((tech, idx) => (
                            <span
                              key={tech + idx}
                              className="inline-block px-2 py-1 text-xs rounded bg-primary/10 text-primary border border-primary/10 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-1">
                          <span className="font-semibold">{project.client}</span>
                          <span className="mx-1">•</span>
                          <span>{project.year}</span>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Link
                          href={project.link}
                          target={project.link && project.link.startsWith('http') ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 text-white shadow hover:scale-105 transition-transform"
                        >
                          View Project <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Case Studies Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-sky-50 via-fuchsia-50 to-pink-50 dark:from-neutral-900 dark:via-blue-950 dark:to-fuchsia-950 overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: 'spring' }}
              className="text-3xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent"
            >
              Case Studies
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[{
                title: 'Scaling FinSight for 1M+ Users',
                summary: 'How Vidhyonix architected a cloud-native analytics platform to handle millions of transactions per day with zero downtime.',
                icon: <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="url(#a)"/><path d="M10 22l6-12 6 12H10z" fill="#fff"/><defs><linearGradient id="a" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#38bdf8"/><stop offset="0.5" stopColor="#a21caf"/><stop offset="1" stopColor="#ec4899"/></linearGradient></defs></svg>,
              }, {
                title: 'ShopEase: Mobile Commerce at Scale',
                summary: 'Delivering a seamless shopping experience for global users with robust security and blazing-fast performance.',
                icon: <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="url(#b)"/><path d="M16 10v12M10 16h12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><defs><linearGradient id="b" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#38bdf8"/><stop offset="0.5" stopColor="#a21caf"/><stop offset="1" stopColor="#ec4899"/></linearGradient></defs></svg>,
              }, {
                title: 'HealthSync: Secure Healthcare Data',
                summary: 'Implementing HIPAA-compliant cloud solutions for sensitive patient data and real-time collaboration.',
                icon: <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="url(#c)"/><path d="M16 10a6 6 0 016 6v2a6 6 0 01-12 0v-2a6 6 0 016-6z" fill="#fff"/><defs><linearGradient id="c" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#38bdf8"/><stop offset="0.5" stopColor="#a21caf"/><stop offset="1" stopColor="#ec4899"/></linearGradient></defs></svg>,
              }].map((cs, i) => (
                <motion.div
                  key={cs.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.7, type: 'spring' }}
                  className="relative group overflow-visible"
                  whileHover={{ y: -8, scale: 1.04, rotateX: 4, rotateY: -4 }}
                >
                  {/* Accent orb */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-gradient-to-br from-sky-400 via-fuchsia-400 to-pink-400 opacity-30 blur-2xl z-10 pointer-events-none" />
                  {/* Glassmorphism card */}
                  <div className="rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-xl border-2 border-primary/20 p-8 flex flex-col gap-4 relative z-20">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="shrink-0 rounded-xl p-2 bg-gradient-to-br from-sky-400 via-fuchsia-400 to-pink-400 shadow-lg">{cs.icon}</span>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">{cs.title}</h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-200 text-base mb-2 line-clamp-3">{cs.summary}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Client Logos Section */}
        {/* <section className="relative py-16 md:py-24 bg-gradient-to-br from-sky-50 via-fuchsia-50 to-pink-50 dark:from-neutral-950 dark:via-blue-950 dark:to-fuchsia-950">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-8 text-muted-foreground">Trusted by Leading Brands</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {[
                'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
                'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
                'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
                'https://upload.wikimedia.org/wikipedia/commons/9/96/SVG_Logo.svg',
                'https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Cloud_Logo.svg',
                'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tailwind_CSS_Logo.svg',
              ].map((logo, i) => (
                <motion.div
                  key={logo}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.6, type: 'spring' }}
                  className="w-32 h-16 flex items-center justify-center transition-all duration-300 rounded-xl shadow-lg bg-transparent hover:scale-110"
                  style={{ boxShadow: '0 4px 24px 0 rgba(80,80,180,0.08)' }}
                >
                  <img src={logo} alt="Client Logo" className="max-h-10 max-w-full object-contain" />
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}
        {/* Contact/CTA Section */}
        <section className="relative py-20 md:py-32 text-white text-center overflow-hidden">
          {/* Background Image with dark overlay */}
          <div className="absolute inset-0 z-0">
            <img src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="CTA Background" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/90" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: 'spring' }}
            className="container mx-auto px-4 flex flex-col items-center justify-center gap-8 relative z-10"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">Let's Build Your Next Big Thing Together</h2>
            <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">Partner with Vidhyonix for world-class digital solutions, innovation, and growth. Your vision, our expertise.</p>
            <Link href="/contact" className="inline-block px-8 py-4 rounded-full bg-white text-primary font-bold text-lg shadow-lg hover:bg-pink-100 hover:text-pink-600 transition-all duration-300">
              Start Your Project
            </Link>
          </motion.div>
        </section>
        {/* Animated Timeline Section */}
        <section className="relative py-24 md:py-32 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">Our Journey</h2>
            <div ref={timelineRef} className="relative flex flex-col gap-12 max-w-3xl mx-auto">
              {milestones.map((m, i) => (
                <div key={m.title} className="milestone flex items-center gap-6 relative">
                  <div className="shrink-0 flex flex-col items-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-sky-400 via-fuchsia-400 to-pink-400 shadow-lg mb-2">
                      {m.icon}
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-1 h-24 bg-gradient-to-b from-sky-400 via-fuchsia-400 to-pink-400" />
                    )}
                  </div>
                  <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6 flex-1">
                    <div className="text-sm text-muted-foreground mb-1">{m.year}</div>
                    <div className="text-lg font-bold mb-1 text-gradient bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">{m.title}</div>
                    <div className="text-base text-gray-700 dark:text-gray-200">{m.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Interactive Featured Projects Slider */}
        <section className="relative py-32 px-2 md:px-8 bg-gradient-to-br from-sky-50 via-fuchsia-50 to-pink-50 dark:from-neutral-900 dark:via-blue-950 dark:to-fuchsia-950">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">Featured Projects</h2>
          </div>
          <div className="relative w-full mx-auto">
            <div ref={sliderRef} className="keen-slider w-full">
              {projects.map((f, i) => (
                <div key={f.title} className="keen-slider__slide flex items-center justify-center px-2">
                  <motion.div
                    className="relative w-full h-[60vh] rounded-3xl overflow-hidden  flex flex-col justify-end group bg-transparent border-0"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.8, type: 'spring' }}
                  >
                    <img src={f.image} alt={f.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 z-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                    <div className="relative z-20 p-10">
                      <h3 className="text-3xl font-bold text-white drop-shadow mb-2">{f.title}</h3>
                      <p className="text-white/90 text-lg mb-2 drop-shadow">{f.description}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
            {/* Navigation Arrows */}
            <div className="flex justify-between items-center mt-6 px-4">
              <button
                onClick={() => slider.current?.prev()}
                className="rounded-full bg-white/80 hover:bg-pink-200 text-primary shadow p-2 transition-all"
                aria-label="Previous Slide"
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button
                onClick={() => slider.current?.next()}
                className="rounded-full bg-white/80 hover:bg-pink-200 text-primary shadow p-2 transition-all"
                aria-label="Next Slide"
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => slider.current?.moveToIdx(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${slider.current?.track.details.rel === idx ? 'bg-primary' : 'bg-border'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}