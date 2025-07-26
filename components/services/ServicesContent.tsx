"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Cpu, PenTool, BarChart, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    title: 'Enterprise Web Development',
    icon: <Monitor className="h-8 w-8" />,
    subtitle: 'Modern, scalable, and secure web platforms.',
    description: 'We build high-performance websites and web apps using React, Next.js, and Node.js. Our solutions are tailored for growth, security, and seamless user experience.',
    color: 'from-sky-400 via-blue-500 to-fuchsia-500',
    image: 'https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'AI & Machine Learning',
    icon: <Cpu className="h-8 w-8" />,
    subtitle: 'Intelligent automation and predictive insights.',
    description: 'Unlock business value with custom AI models, NLP, and ML pipelines. We deliver automation, analytics, and smarter decision-making.',
    color: 'from-green-400 via-teal-500 to-blue-500',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Mobile App Engineering',
    icon: <Smartphone className="h-8 w-8" />,
    subtitle: 'Seamless mobile experiences for iOS & Android.',
    description: 'We design and develop cross-platform mobile apps with Flutter and React Native. Launch fast, scale easily, and engage users everywhere.',
    color: 'from-purple-400 via-fuchsia-500 to-pink-500',
    image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Backend & Database',
    icon: <BarChart className="h-8 w-8" />,
    subtitle: 'APIs, data, and infrastructure that scale.',
    description: 'We engineer robust backends with PostgreSQL, Redis, and MongoDB. Secure APIs, real-time data, and cloud-native integrations for mission-critical apps.',
    color: 'from-cyan-400 via-blue-500 to-purple-500',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'CMS & eCommerce',
    icon: <PenTool className="h-8 w-8" />,
    subtitle: 'Content and commerce, integrated and optimized.',
    description: 'Custom Shopify and WordPress solutions for brands. We deliver fast, flexible, and conversion-focused digital storefronts.',
    color: 'from-amber-400 via-pink-400 to-fuchsia-500',
    image: 'https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Cloud, DevOps & Architecture',
    icon: <Cpu className="h-8 w-8" />,
    subtitle: 'Deploy, automate, and scale in the cloud.',
    description: 'Cloud-native deployments, CI/CD, and infrastructure as code. We help you innovate faster and operate securely on AWS, Azure, and GCP.',
    color: 'from-pink-500 via-fuchsia-500 to-purple-600',
    image: 'https://images.pexels.com/photos/1181679/pexels-photo-1181679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export default function ServiceContent() {
  return (
    <section className="py-24 md:py-36 bg-background overflow-hidden relative">
      {/* Animated background rings and blurry dots */}
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
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-blue-400 via-fuchsia-400 to-pink-400 opacity-20"
            style={{
              width: `${32 + i * 10}px`,
              height: `${32 + i * 10}px`,
              left: `${10 + i * 13}%`,
              top: `${20 + i * 11}%`,
              filter: 'blur(10px)',
            }}
            animate={{
              y: [0, 20 + i * 5, 0],
              x: [0, -10 + i * 3, 0],
            }}
            transition={{ duration: 12 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: i }}
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
      </motion.div>
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 gap-16 items-start relative z-10">
        {/* Left: Sticky Title/Description */}
        <motion.div
          className="lg:col-span-2 flex flex-col gap-8 sticky top-32"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <span className="inline-block py-1 px-3 mb-4 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium text-sm w-fit">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-left bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
            End-to-End IT Solutions for Your Business Growth
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg">
            From web and app development to AI, cloud, and eCommerce, Vidyonix delivers the technology expertise you need to succeed in a digital-first world.
          </p>
        </motion.div>
        {/* Right: Services Grid */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.08, duration: 0.7, type: 'spring' }}
              className={cn(
                'relative flex flex-col rounded-3xl bg-white/95 dark:bg-neutral-100/95 shadow-xl hover:shadow-2xl overflow-hidden group hover:scale-[1.04] transition-transform duration-300',
              )}
              style={{ minHeight: 440 }}
            >
              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              {/* Content */}
              <div className="relative z-10 flex-1 flex flex-col p-7 gap-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className={cn('p-2 rounded-xl bg-gradient-to-br', service.color)}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{service.title}</h3>
                </div>
                <div className="text-primary/80 text-base font-medium mb-1">{service.subtitle}</div>
                <p className="text-muted-foreground text-sm mb-2">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
