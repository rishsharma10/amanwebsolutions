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

const projects = [
  {
    title: 'FinSight Analytics Platform',
    description: 'Real-time analytics for financial institutions.',
    image: 'https://images.pexels.com/photos/1181680/pexels-photo-1181680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
  },
  {
    title: 'ShopEase Mobile Commerce',
    description: 'Cross-platform eCommerce app for global retail.',
    image: 'https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
  },
  {
    title: 'HealthSync Cloud Portal',
    description: 'Secure patient management for healthcare.',
    image: 'https://images.pexels.com/photos/1181682/pexels-photo-1181682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
  },
  {
    title: 'BrandBoost CMS',
    description: 'Content and eCommerce for global brands.',
    image: 'https://images.pexels.com/photos/1482066/pexels-photo-1482066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
  },
  {
    title: 'CloudOps Automation Suite',
    description: 'DevOps automation for CI/CD and cloud.',
    image: 'https://images.pexels.com/photos/1181684/pexels-photo-1181684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
  },
  {
    title: 'Insightful BI Dashboard',
    description: 'Enterprise reporting and data visualization.',
    image: 'https://images.pexels.com/photos/1181685/pexels-photo-1181685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
  },
];

const milestones = [
  {
    year: '2019',
    title: 'Vidhyonix Founded',
    description: 'Our journey began with a vision to deliver world-class digital solutions.',
    icon: <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="url(#a)"/><path d="M10 22l6-12 6 12H10z" fill="#fff"/><defs><linearGradient id="a" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#38bdf8"/><stop offset="0.5" stopColor="#a21caf"/><stop offset="1" stopColor="#ec4899"/></linearGradient></defs></svg>,
  },
  {
    year: '2020',
    title: 'First 100 Clients',
    description: 'Rapid growth and trust from startups and enterprises worldwide.',
    icon: <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="url(#b)"/><path d="M16 10v12M10 16h12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><defs><linearGradient id="b" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#38bdf8"/><stop offset="0.5" stopColor="#a21caf"/><stop offset="1" stopColor="#ec4899"/></linearGradient></defs></svg>,
  },
  {
    year: '2021',
    title: 'Award-Winning Projects',
    description: 'Recognized for innovation in web, mobile, and cloud solutions.',
    icon: <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="url(#c)"/><path d="M16 10a6 6 0 016 6v2a6 6 0 01-12 0v-2a6 6 0 016-6z" fill="#fff"/><defs><linearGradient id="c" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#38bdf8"/><stop offset="0.5" stopColor="#a21caf"/><stop offset="1" stopColor="#ec4899"/></linearGradient></defs></svg>,
  },
  {
    year: '2023',
    title: 'Global Expansion',
    description: 'Delivering digital excellence for clients in 20+ countries.',
    icon: <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="url(#d)"/><path d="M16 10a6 6 0 016 6v2a6 6 0 01-12 0v-2a6 6 0 016-6z" fill="#fff"/><defs><linearGradient id="d" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#38bdf8"/><stop offset="0.5" stopColor="#a21caf"/><stop offset="1" stopColor="#ec4899"/></linearGradient></defs></svg>,
  },
];

const featured = [
  {
    title: 'Next-Gen SaaS Platform',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A scalable SaaS solution for global teams, with real-time collaboration and analytics.',
  },
  {
    title: 'Immersive eCommerce Experience',
    image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A visually rich, interactive shopping platform with 3D product views and AR try-on.',
  },
  {
    title: 'AI-Powered Health Portal',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Personalized healthcare and diagnostics with AI-driven insights and secure data.',
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
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.8, type: 'spring' }}
                  className="relative group overflow-visible"
                >
                  {/* Floating, staggered effect */}
                  <motion.div
                    className="relative rounded-3xl shadow-2xl overflow-hidden group-hover:scale-105 group-hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-white/95 via-sky-50/90 to-pink-50/90 dark:from-neutral-900/90 dark:via-blue-950/90 dark:to-fuchsia-950/90 border-2 border-primary/20"
                    style={{ top: i % 2 === 0 ? 0 : 32, zIndex: 2 }}
                    whileHover={{ y: -12, scale: 1.04, rotateX: 6, rotateY: -6 }}
                  >
                    {/* Accent orb */}
                    <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-gradient-to-br from-sky-400 via-fuchsia-400 to-pink-400 opacity-30 blur-2xl z-10 pointer-events-none" />
                    <div className="relative w-full h-64 md:h-72 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </div>
                    {/* Glassmorphism overlay for content */}
                    <div className="absolute bottom-0 left-0 w-full p-0 z-20">
                      <div className="m-4 rounded-2xl bg-white/70 dark:bg-neutral-900/80 backdrop-blur-md shadow-xl p-6 flex flex-col gap-2 border border-primary/10">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent mb-1">
                          {project.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-200 text-base mb-2 line-clamp-3">
                          {project.description}
                        </p>
                        <Link href={project.link} className="mt-2 self-end inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 text-white shadow hover:scale-105 transition-transform">
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
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-sky-50 via-fuchsia-50 to-pink-50 dark:from-neutral-950 dark:via-blue-950 dark:to-fuchsia-950">
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
        </section>
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
              {featured.map((f, i) => (
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
              {featured.map((_, idx) => (
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