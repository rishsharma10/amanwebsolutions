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
import { APP_NAME } from '../layout/Footer';

export const servicesArray = [
  {
    id: 'web',
    title: 'Frontend Web Development',
    icon: <Monitor className="h-6 w-6" />,
    subtitle: 'Build robust, scalable web platforms for business growth.',
    description: 'Robust, scalable web solutions built with React.js, Next.js, Node.js, and NestJS for high-growth businesses. Elevate your digital presence with secure, high-performance platforms.',
    features: [
      'Custom web applications',
      'eCommerce & CMS solutions',
      'Performance optimization',
      'Responsive UI/UX',
      'API integrations',
    ],
    color: 'bg-blue-500/20 text-blue-700 dark:text-blue-400',
    image: 'https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'ai',
    title: 'AI Process Management',
    icon: <Cpu className="h-6 w-6" />,
    subtitle: 'Streamline and orchestrate business processes with AI-driven automation.',
    description: 'Optimize your business workflows with advanced AI process management solutions. We design and implement intelligent automation systems that coordinate tasks, monitor process health, and adapt dynamically to changing business needs—boosting efficiency and reducing manual overhead.',
    features: [
      'End-to-end process automation',
      'AI-driven workflow orchestration',
      'Real-time process monitoring',
      'Dynamic task allocation',
      'Intelligent exception handling',
    ],
    color: 'bg-green-500/20 text-green-700 dark:text-green-400',
    image: 'https://images.pexels.com/photos/1181679/pexels-photo-1181679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // AI process management/automation themed image
  },
  {
    id: 'app',
    title: 'Mobile App Development',
    icon: <Smartphone className="h-6 w-6" />,
    subtitle: 'Deliver seamless mobile experiences on every device.',
    description: 'Cross-platform mobile apps using Flutter and React Native, engineered for seamless performance and user engagement. Launch on iOS and Android with confidence.',
    features: [
      'Native & cross-platform apps',
      'UI/UX design',
      'API & backend integration',
      'App maintenance & support',
      'App store deployment',
    ],
    color: 'bg-purple-500/20 text-purple-700 dark:text-purple-400',
    image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'backend',
    title: 'Backend & Database Solutions',
    icon: <BarChart className="h-6 w-6" />,
    subtitle: 'Empower your business with secure, scalable infrastructure.',
    description: `${APP_NAME} engineers robust backend systems and data architectures using PostgreSQL, Redis, and MongoDB. We deliver secure APIs, real-time data processing, and cloud-native integrations to power your mission-critical applications.'`,
    features: [
      'RESTful & GraphQL API development',
      'Real-time data processing',
      'Authentication & authorization',
      'Database design & optimization',
      'Cloud-native integrations',
    ],
    color: 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-400',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // You can update this to a more backend/data/cloud image if desired
  },
  {
    id: 'cms',
    title: 'CMS & eCommerce Platforms',
    icon: <PenTool className="h-6 w-6" />,
    subtitle: 'Launch and scale content and commerce with confidence.',
    description: 'Custom Shopify and WordPress solutions for content-driven and commerce-focused brands. Integrate, optimize, and scale your digital storefront with ease.',
    features: [
      'Custom themes & plugins',
      'Payment gateway integration',
      'Headless CMS',
      'SEO optimization',
      'Third-party integrations',
    ],
    color: 'bg-amber-500/20 text-amber-700 dark:text-amber-400',
    image: 'https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'cloud',
    title: 'Cloud, DevOps & Architecture',
    icon: <Cpu className="h-6 w-6" />,
    subtitle: 'Accelerate innovation with secure, automated cloud solutions.',
    description: 'Cloud-native deployments, CI/CD automation, and scalable infrastructure on AWS, Azure, and GCP. Accelerate innovation with secure, cost-effective cloud solutions.',
    features: [
      'Cloud migration',
      'CI/CD automation',
      'Infrastructure as Code',
      'Monitoring & security',
      'Cost optimization',
    ],
    color: 'bg-red-500/20 text-red-700 dark:text-red-400',
    image: 'https://images.pexels.com/photos/1181679/pexels-photo-1181679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];
export default function Services() {
  const [activeTab, setActiveTab] = useState('web');


  const activeService = servicesArray.find(service => service.id === activeTab) || servicesArray[0];

  return (
    <section className="py-20 md:py-32 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionReveal className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 mb-6 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium text-sm">
            What We Do
          </span>
          <AnimatedHeading
            Tag="h2"
            className="text-3xl md:text-4xl font-bold mb-6 text-center mx-auto w-full flex justify-center"
          >
            End-to-End IT Solutions for Your Business Growth
          </AnimatedHeading>
          <p className="text-muted-foreground text-lg">
            {`From web and app development to cloud, DevOps, and eCommerce, ${APP_NAME} delivers the technology expertise you need to succeed.`}
          </p>
        </SectionReveal>

        {/* Services Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {servicesArray.map((service, index) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.12, duration: 0.6, type: 'spring' }}
              onClick={() => setActiveTab(service.id)}
              className={cn(
                "relative flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 p-8 cursor-pointer transition-all duration-300 group shadow-md hover:shadow-2xl hover:scale-[1.05] hover:border-transparent hover:ring-2 hover:ring-fuchsia-400/50",
                activeTab === service.id && "ring-2 ring-fuchsia-500 border-fuchsia-500/80 scale-105 bg-gradient-to-br from-fuchsia-50/50 to-pink-50/50 dark:from-fuchsia-950/30 dark:to-pink-950/30 shadow-2xl z-10 backdrop-blur-md"
              )}
              style={{ minHeight: 340 }}
            >
              <div className={cn("p-4 rounded-xl w-fit mb-4 text-3xl shadow-lg", service.color, "bg-gradient-to-br")}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-1 text-center">{service.title}</h3>
              <div className="text-primary/80 text-sm font-medium mb-3 text-center">{service.subtitle}</div>
              <ul className="space-y-2 w-full max-w-xs mx-auto mb-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {activeTab === service.id && (
                <motion.div
                  className="absolute bottom-0 right-0 w-5 h-5 bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 m-3 rounded-full shadow-xl"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
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
                    className="bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 text-white rounded-full px-8 py-3 font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 mt-2 text-primary-foreground rounded-full px-6 py-2.5 font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
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