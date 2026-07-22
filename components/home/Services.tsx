'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Monitor, Smartphone, BarChart, Cpu,
  ArrowRight, Check, Brain, Globe, Database, Bot, Cloud, Rocket, Code2, Blocks, Link as LinkIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { APP_NAME } from '../layout/Footer';

export const servicesArray = [
  {
    id: 'ai-development',
    title: 'AI Development',
    icon: <Brain className="h-6 w-6" />,
    image: '/images/services_ai.png',
    subtitle: 'Problem: Manual data analysis is slow and inaccurate.',
    description: 'Solution: We build custom AI models and integrations that process your business data intelligently, enabling predictive insights and smarter decisions.',
    features: ['Predictive Analytics', 'Machine Learning Models', 'Data Strategy'],
    color: 'text-brand-cyan shadow-brand-cyan/20',
    borderColor: 'group-hover:border-brand-cyan/50',
  },
  {
    id: 'custom-software-development',
    title: 'Custom Software Development',
    icon: <Monitor className="h-6 w-6" />,
    image: '/images/services_software.png',
    subtitle: 'Problem: Off-the-shelf software limits your growth.',
    description: 'Solution: We engineer bespoke software systems perfectly aligned with your business processes, ensuring complete ownership and limitless scalability.',
    features: ['Bespoke Architecture', 'Legacy Modernization', 'Workflow Automation'],
    color: 'text-brand-violet shadow-brand-violet/20',
    borderColor: 'group-hover:border-brand-violet/50',
  },
  {
    id: 'saas-development',
    title: 'SaaS Development',
    icon: <Blocks className="h-6 w-6" />,
    image: '/images/services_software.png',
    subtitle: 'Problem: Launching a scalable product is technically complex.',
    description: 'Solution: We develop robust, multi-tenant SaaS platforms from scratch, handling everything from subscription billing to secure user management.',
    features: ['Multi-Tenant Architecture', 'Subscription Management', 'High Availability'],
    color: 'text-brand-fuchsia shadow-brand-fuchsia/20',
    borderColor: 'group-hover:border-brand-fuchsia/50',
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    icon: <Cpu className="h-6 w-6" />,
    image: '/images/services_ai.png',
    subtitle: 'Problem: Repetitive tasks drain your team\'s time.',
    description: 'Solution: We deploy intelligent automation agents that handle your routine workflows 24/7, reducing operational costs and human error.',
    features: ['Workflow Automation', 'Document Processing', 'Cost Reduction'],
    color: 'text-brand-cyan shadow-brand-cyan/20',
    borderColor: 'group-hover:border-brand-cyan/50',
  },
  {
    id: 'ai-chatbot-development',
    title: 'AI Chatbot Development',
    icon: <Bot className="h-6 w-6" />,
    image: '/images/services_ai.png',
    subtitle: 'Problem: Customer support is overwhelmed and slow.',
    description: 'Solution: We build conversational AI chatbots that understand context, resolve queries instantly, and seamlessly hand off complex issues to humans.',
    features: ['24/7 Customer Support', 'Natural Language Processing', 'Human Handoff'],
    color: 'text-brand-violet shadow-brand-violet/20',
    borderColor: 'group-hover:border-brand-violet/50',
  },
  {
    id: 'ai-agent-development',
    title: 'AI Agent Development',
    icon: <Brain className="h-6 w-6" />,
    image: '/images/services_ai.png',
    subtitle: 'Problem: Complex processes require autonomous decision making.',
    description: 'Solution: We develop autonomous AI agents capable of reasoning, planning, and executing multi-step tasks across your existing tools and APIs.',
    features: ['Autonomous Execution', 'Multi-Tool Integration', 'Advanced Reasoning'],
    color: 'text-brand-fuchsia shadow-brand-fuchsia/20',
    borderColor: 'group-hover:border-brand-fuchsia/50',
  },
  {
    id: 'web-development',
    title: 'Website Development',
    icon: <Globe className="h-6 w-6" />,
    image: '/images/services_web_mobile.png',
    subtitle: 'Problem: Your website fails to convert visitors into leads.',
    description: 'Solution: We design lightning-fast, SEO-optimized web applications with modern aesthetics that establish trust and drive measurable business growth.',
    features: ['Conversion Optimization', 'SEO Architecture', 'Lightning Fast Speeds'],
    color: 'text-brand-cyan shadow-brand-cyan/20',
    borderColor: 'group-hover:border-brand-cyan/50',
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    icon: <Smartphone className="h-6 w-6" />,
    image: '/images/services_web_mobile.png',
    subtitle: 'Problem: Losing mobile users due to poor mobile experience.',
    description: 'Solution: We build native and cross-platform mobile apps that deliver premium, intuitive experiences to keep your customers engaged on the go.',
    features: ['iOS & Android', 'Native Performance', 'Push Notifications'],
    color: 'text-brand-violet shadow-brand-violet/20',
    borderColor: 'group-hover:border-brand-violet/50',
  },
  {
    id: 'mvp-development',
    title: 'MVP Development',
    icon: <Rocket className="h-6 w-6" />,
    image: '/images/services_web_mobile.png',
    subtitle: 'Problem: High risk in launching unvalidated startup ideas.',
    description: 'Solution: We rapidly develop robust Minimum Viable Products to help you validate your business model and attract investors within weeks, not months.',
    features: ['Rapid Prototyping', 'Investor-Ready Code', 'Core Feature Focus'],
    color: 'text-brand-fuchsia shadow-brand-fuchsia/20',
    borderColor: 'group-hover:border-brand-fuchsia/50',
  },
  {
    id: 'api-development',
    title: 'API Development',
    icon: <LinkIcon className="h-6 w-6" />,
    image: '/images/services_software.png',
    subtitle: 'Problem: Disconnected systems are creating data silos.',
    description: 'Solution: We engineer secure, high-performance APIs that connect your software ecosystem, enabling seamless data flow across your entire organization.',
    features: ['REST & GraphQL', 'High Performance', 'Secure Endpoints'],
    color: 'text-brand-cyan shadow-brand-cyan/20',
    borderColor: 'group-hover:border-brand-cyan/50',
  },
  {
    id: 'cloud-engineering',
    title: 'Cloud Solutions',
    icon: <Cloud className="h-6 w-6" />,
    image: '/images/services_cloud.png',
    subtitle: 'Problem: Infrastructure struggles under heavy user traffic.',
    description: 'Solution: We architect scalable, secure cloud environments on AWS and GCP that automatically adjust to your traffic demands while minimizing costs.',
    features: ['Auto-Scaling Infrastructure', 'Disaster Recovery', 'Cost Optimization'],
    color: 'text-brand-violet shadow-brand-violet/20',
    borderColor: 'group-hover:border-brand-violet/50',
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(servicesArray[0].id);
  const activeService = servicesArray.find(s => s.id === activeTab)!;

  return (
    <section className="py-24 md:py-32 bg-brand-dark/50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-ai-grid bg-repeat" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-brand-violet text-sm font-medium mb-6"
          >
            <Cpu size={14} />
            <span>Our Services</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Software Services That <span className="ai-gradient-text">Grow Your Business</span>
          </h2>
          <p className="text-slate-400 text-lg">
            We provide end-to-end technology solutions, from custom websites to AI automation, designed to increase your revenue and reduce costs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesArray.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onMouseEnter={() => setActiveTab(service.id)}
              className={cn(
                "group relative glass-morphism p-8 rounded-3xl transition-all duration-500 cursor-default",
                activeTab === service.id ? "border-white/20 shadow-[0_0_50px_-12px_rgba(124,58,237,0.3)] scale-[1.02]" : "border-white/5 opacity-80"
              )}
            >
              {/* Card Glow */}
              <div className={cn(
                "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500",
                service.id === 'ai' || service.id === 'infra' ? "bg-brand-cyan" :
                  service.id === 'web' || service.id === 'data' ? "bg-brand-violet" : "bg-brand-fuchsia"
              )} />

              <div className={cn("mb-6 p-4 w-fit rounded-2xl glass-morphism", service.color)}>
                {service.icon}
              </div>

              <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {service.subtitle}
              </p>

              <ul className="space-y-3">
                {service.features.slice(0, 3).map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs font-medium text-slate-300">
                    <Check size={14} className={service.color} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/5">
                <Link href={`/services/${service.id}`} className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:gap-3 transition-all">
                  LEARN MORE
                  <ArrowRight size={14} className={service.color} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Service Detail */}
        <motion.div
          layout
          className="mt-20 glass-morphism rounded-3xl p-8 md:p-12 overflow-hidden relative"
        >
          {/* Animated Background for detail box */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-violet rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-cyan rounded-full blur-[120px]" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className={cn("p-4 w-fit rounded-2xl glass-morphism mb-6", activeService.color)}>
                  {activeService.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                  {activeService.title}
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  {activeService.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {activeService.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                      <div className={cn("p-1 rounded-md bg-white/10", activeService.color)}>
                        <Check size={14} />
                      </div>
                      <span className="text-sm font-medium text-white">{f}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact">
                  <button className="px-8 py-3 bg-white text-black rounded-xl font-bold hover:bg-slate-200 transition-all flex items-center gap-2">
                    Consult with Experts
                    <ArrowRight size={18} />
                  </button>
                </Link>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group">
                <div className="absolute inset-0 bg-brand-dark/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20 glass-morphism px-4 py-2 rounded-lg border-white/10">
                  <span className="text-xs font-bold text-white flex items-center gap-2">
                    <Zap size={12} className="text-brand-cyan" />
                    PREMIUM SOLUTIONS
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function Zap(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.71 13.15 3a.5.5 0 0 1 .85.3v8.71L20 9.29a.5.5 0 0 1 .85.3v8.71L11.71 21a.5.5 0 0 1-.85-.3v-8.71L4 14.71a.5.5 0 0 1-.85-.3z" />
    </svg>
  );
}