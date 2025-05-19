'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatedHeading, SectionReveal } from '@/components/PageTransition';
import { fadeUp, staggerContainer, scaleUp } from '@/lib/animations';

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
      title: 'Quantum Finance Dashboard',
      category: 'web',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      client: 'QuantumPay',
      year: '2024',
    },
    {
      id: 2,
      title: 'EcoTrack Mobile App',
      category: 'app',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      client: 'EcoSolutions',
      year: '2024',
    },
    {
      id: 3,
      title: 'Nova Branding Identity',
      category: 'branding',
      image: 'https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      client: 'Nova Tech',
      year: '2023',
    },
    {
      id: 4,
      title: 'Pulse Marketing Campaign',
      category: 'marketing',
      image: 'https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      client: 'Pulse Fitness',
      year: '2023',
    },
    {
      id: 5,
      title: 'Horizon E-commerce Platform',
      category: 'web',
      image: 'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      client: 'Horizon Retail',
      year: '2023',
    },
    {
      id: 6,
      title: 'Zenith Health App',
      category: 'app',
      image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      client: 'Zenith Healthcare',
      year: '2022',
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
            Recent Projects
          </span>
          <AnimatedHeading Tag="h2" className="text-3xl md:text-4xl font-bold mb-6">
            Our Creative Portfolio
          </AnimatedHeading>
          <p className="text-muted-foreground text-lg">
            Explore our latest projects and discover how we help businesses transform their digital presence.
            Each project represents our commitment to excellence and innovation.
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
                className="group"
              >
                <Link href={`/portfolio/${project.id}`}>
                  <div className="relative overflow-hidden rounded-xl">
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
                    </motion.div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        <span className="inline-block py-1 px-2 rounded-md bg-white/20 text-white text-xs mb-2">
                          {categories.find(c => c.id === project.category)?.label}
                        </span>
                        <h3 className="text-white text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-white/80 text-sm">{project.client} • {project.year}</p>
                      </div>
                    </div>
                  </div>
                </Link>
                
                <div className="mt-5">
                  <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.client}</p>
                </div>
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