'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Monitor, Smartphone, Globe, PenTool, BarChart, Cpu,
  ArrowRight, Check 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  staggerContainer, fadeUp, cardHover,
  slideInLeft, slideInRight 
} from '@/lib/animations';
import { AnimatedHeading, SectionReveal } from '@/components/PageTransition';

export default function Services() {
  const [activeTab, setActiveTab] = useState('web');

  const services = [
    {
      id: 'web',
      title: 'Web Development',
      icon: <Monitor className="h-6 w-6" />,
      description: 'Create beautiful, responsive websites that drive conversions and engage your audience.',
      features: [
        'Custom website development',
        'E-commerce solutions',
        'Progressive web applications',
        'CMS integration',
        'Web performance optimization',
      ],
      color: 'bg-blue-500/20 text-blue-700 dark:text-blue-400',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'app',
      title: 'App Development',
      icon: <Smartphone className="h-6 w-6" />,
      description: 'Build powerful, user-friendly applications for iOS, Android, and cross-platform environments.',
      features: [
        'Native app development',
        'Cross-platform solutions',
        'App UI/UX design',
        'App maintenance and support',
        'API integration',
      ],
      color: 'bg-purple-500/20 text-purple-700 dark:text-purple-400',
      image: 'https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'marketing',
      title: 'Digital Marketing',
      icon: <Globe className="h-6 w-6" />,
      description: 'Amplify your online presence and drive targeted traffic with data-driven marketing strategies.',
      features: [
        'Search engine optimization (SEO)',
        'Social media marketing',
        'Pay-per-click advertising',
        'Email marketing campaigns',
        'Content marketing',
      ],
      color: 'bg-green-500/20 text-green-700 dark:text-green-400',
      image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'branding',
      title: 'Branding & Identity',
      icon: <PenTool className="h-6 w-6" />,
      description: 'Craft a compelling brand identity that resonates with your audience and sets you apart from competitors.',
      features: [
        'Logo and visual identity design',
        'Brand strategy development',
        'Brand guidelines creation',
        'Rebranding services',
        'Brand voice development',
      ],
      color: 'bg-amber-500/20 text-amber-700 dark:text-amber-400',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'analytics',
      title: 'Analytics & Insights',
      icon: <BarChart className="h-6 w-6" />,
      description: 'Gain valuable insights from your data to make informed business decisions and optimize performance.',
      features: [
        'Data tracking implementation',
        'Custom dashboard creation',
        'Performance monitoring',
        'Conversion optimization',
        'User behavior analysis',
      ],
      color: 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-400',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'ai',
      title: 'AI Solutions',
      icon: <Cpu className="h-6 w-6" />,
      description: 'Leverage artificial intelligence to automate processes, gain insights, and enhance user experiences.',
      features: [
        'AI-powered chatbots',
        'Predictive analytics',
        'Machine learning integration',
        'Natural language processing',
        'Computer vision solutions',
      ],
      color: 'bg-red-500/20 text-red-700 dark:text-red-400',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  const activeService = services.find(service => service.id === activeTab) || services[0];

  return (
    <section className="py-20 md:py-32 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionReveal className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 mb-6 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium text-sm">
            Our Services
          </span>
          <AnimatedHeading Tag="h2" className="text-3xl md:text-4xl font-bold mb-6">
            Comprehensive Digital Solutions for Modern Businesses
          </AnimatedHeading>
          <p className="text-muted-foreground text-lg">
            We offer a full suite of services to help your business thrive in the digital landscape.
            From web development to branding, we've got you covered.
          </p>
        </SectionReveal>

        {/* Services Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              whileHover="hover"
              initial="rest"
              animate="rest"
              onClick={() => setActiveTab(service.id)}
              className={cn(
                "relative overflow-hidden rounded-xl bg-card border border-border/50 p-6 cursor-pointer transition-all",
                activeTab === service.id && "ring-1 ring-primary border-primary/50"
              )}
            >
              <motion.div variants={cardHover} className="h-full p-5">
                <div className={cn("p-3 rounded-lg w-fit mb-4", service.color)}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                <div className="flex justify-between items-center mt-4">
                  <button 
                    className={cn(
                      "text-foreground/80 hover:text-foreground flex items-center gap-1.5 font-medium transition-colors",
                      activeTab === service.id && "text-primary"
                    )}
                  >
                    Learn more <ArrowRight size={16} />
                  </button>
                </div>
                
                {activeTab === service.id && (
                  <motion.div 
                    className="absolute bottom-0 right-0 w-3 h-3 bg-primary m-2"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Service View */}
        <div className="mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              key={activeService.id + "-content"}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <SectionReveal>
                <div className={cn("p-3 rounded-lg w-fit mb-4", activeService.color)}>
                  {activeService.icon}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{activeService.title}</h3>
                <p className="text-muted-foreground text-lg mb-6">{activeService.description}</p>
                
                <div className="space-y-3 mb-8">
                  {activeService.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="mt-1 p-0.5 rounded-full bg-primary/10 text-primary">
                        <Check size={16} />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link href={`/services/${activeService.id}`}>
                  <motion.button
                    className="bg-primary text-primary-foreground rounded-full px-6 py-2.5 font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Explore {activeService.title}</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </SectionReveal>
            </motion.div>
            
            <motion.div
              key={activeService.id + "-image"}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video overflow-hidden rounded-xl"
            >
              <img 
                src={activeService.image} 
                alt={activeService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6">
                  <h4 className="text-white text-lg font-medium">{activeService.title}</h4>
                  <p className="text-white/80 text-sm">Expert solutions tailored to your needs</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}