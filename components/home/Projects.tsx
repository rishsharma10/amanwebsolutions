'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatedHeading, SectionReveal } from '@/components/PageTransition';
import { fadeUp, staggerContainer, scaleUp } from '@/lib/animations';
import { APP_NAME } from '../layout/Footer';
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
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web' },
    { id: 'app', label: 'Mobile' },
    { id: '3d', label: '3D Design' },
  ];

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
      category: 'web',
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
      id: 9,
      title: 'Good Citizen',
      description: 'Get notified when emergency vehicles are nearby. Clear the road, save precious minutes, and help ambulances reach those in need faster.',
      tech: ['Flutter', 'Firebase', 'Nestjs', 'Redis', 'PostgreSQL', 'Docker', 'AWS'],
      category: 'app',
      image: goodCitizen.src,
      client: 'Good Citizen',
      year: '2023',
      link: 'https://app.agoodcitizen.in/',
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

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionReveal className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 mb-6 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium text-sm">
            Our Creative Portfolio
          </span>
          <AnimatedHeading Tag="h2" className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Transforming Vision into Digital Excellence
          </AnimatedHeading>
          <p className="text-muted-foreground text-lg">
            {`Explore a selection of ${APP_NAME}’s recent projects—delivering scalable, secure, and innovative IT solutions for leading businesses worldwide.`}
          </p>
        </SectionReveal>

        {/* Filter Categories */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-4">
          <div className="flex gap-2 p-1 rounded-full bg-muted">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap",
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 text-white shadow-lg scale-105"
                    : "text-foreground/70 hover:text-foreground hover:bg-gradient-to-r hover:from-sky-100 hover:via-fuchsia-100 hover:to-pink-100 dark:hover:from-sky-950 dark:hover:via-fuchsia-950 dark:hover:to-pink-950"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects?.slice(0, 6)?.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.8 }}
                className="group bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.05] hover:border-fuchsia-400/50 hover:ring-2 hover:ring-fuchsia-400/30 transition-all overflow-hidden flex flex-col relative"
              >
                <Link target='_blank' href={project.link} className="flex-1 flex flex-col">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="aspect-[4/3] overflow-hidden"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform"
                      />
                      {/* Gradient overlay for depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none group-hover:from-primary/10 group-hover:via-transparent group-hover:to-transparent transition-all" />
                    </motion.div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-primary">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{project.description}</p>
                      {project.tech.map((tech) => (
                        <span key={tech} className="text-xs text-gray-500 bg-primary/10 rounded-full px-2 py-1 mr-2">{tech}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {/* View All Projects Button */}
        <div className="mt-16 text-center">
          <Link href="/portfolio">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 group border border-border hover:border-primary rounded-full px-6 py-3 font-medium transition-all"
            >
              <span>View All Projects</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}