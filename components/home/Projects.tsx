'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatedHeading, SectionReveal } from '@/components/PageTransition';
import { fadeUp, staggerContainer, scaleUp } from '@/lib/animations';
import { APP_NAME } from '../layout/Footer';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web' },
    { id: 'app', label: 'Mobile' },
    { id: 'branding', label: 'Branding' },
    { id: 'marketing', label: 'Marketing' },
  ];
  
  const projects = [
    {
      id: 1,
      title: 'FinSight Analytics Platform',
      description: 'A real-time analytics dashboard for financial institutions, enabling data-driven decisions with secure cloud infrastructure.',
      tech: 'React, Node.js, PostgreSQL, AWS',
      category: 'web',
      image: 'https://images.pexels.com/photos/1181680/pexels-photo-1181680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      client: 'FinSight',
      year: '2024',
    },
    {
      id: 2,
      title: 'ShopEase Mobile Commerce',
      description: 'A cross-platform eCommerce app with seamless user experience and secure payments for a global retail brand.',
      tech: 'Flutter, Shopify, Firebase',
      category: 'app',
      image: 'https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      client: 'ShopEase',
      year: '2024',
    },
    {
      id: 3,
      title: 'HealthSync Cloud Portal',
      description: 'A secure patient management system with real-time data and HIPAA-compliant cloud storage for healthcare providers.',
      tech: 'Next.js, MongoDB, Azure',
      category: 'web',
      image: 'https://images.pexels.com/photos/1181682/pexels-photo-1181682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      client: 'HealthSync',
      year: '2023',
    },
    {
      id: 4,
      title: 'BrandBoost CMS',
      description: 'A custom WordPress and Shopify solution for a global marketing agency, enabling rapid content publishing and eCommerce integration.',
      tech: 'WordPress, Shopify, PHP',
      category: 'cms',
      image: 'https://images.pexels.com/photos/1482066/pexels-photo-1482066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // New branding/creative image
      client: 'BrandBoost',
      year: '2023',
    },
    {
      id: 5,
      title: 'CloudOps Automation Suite',
      description: 'A DevOps automation platform for managing CI/CD pipelines and cloud deployments at scale.',
      tech: 'Node.js, Docker, AWS',
      category: 'cloud',
      image: 'https://images.pexels.com/photos/1181684/pexels-photo-1181684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      client: 'CloudOps',
      year: '2023',
    },
    {
      id: 6,
      title: 'Insightful BI Dashboard',
      description: 'A business intelligence dashboard for enterprise reporting and data visualization.',
      tech: 'React, D3.js, PostgreSQL',
      category: 'web',
      image: 'https://images.pexels.com/photos/1181685/pexels-photo-1181685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      client: 'Insightful',
      year: '2022',
    },
    {
      id: 7,
      title: 'VividBrand Identity Suite',
      description: 'A comprehensive branding platform for startups, delivering logo design, brand guidelines, and digital assets in one place.',
      tech: 'Figma, Illustrator, Webflow',
      category: 'branding',
      image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      client: 'VividBrand',
      year: '2023',
    },
    {
      id: 8,
      title: 'MarketReach Campaign Engine',
      description: 'A digital marketing automation platform for managing multi-channel campaigns, analytics, and lead generation.',
      tech: 'React, Node.js, HubSpot API',
      category: 'marketing',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      client: 'MarketReach',
      year: '2023',
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
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted-foreground/10"
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
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.8 }}
                className="group bg-card border border-border/50 rounded-xl shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all overflow-hidden flex flex-col relative"
              >
                <Link href={`/portfolio/${project.id}`} className="flex-1 flex flex-col">
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
                      <p className="text-xs text-gray-500">{project.tech}</p>
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