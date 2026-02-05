'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Monitor, Smartphone, BarChart, Cpu,
  ArrowRight, Check, Brain, Globe, Database
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { APP_NAME } from '../layout/Footer';

export const servicesArray = [
  {
    id: 'ai',
    title: 'AI Engineering',
    icon: <Brain className="h-6 w-6" />,
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    subtitle: 'Autonomous agents & neural ecosystems.',
    description: 'We build high-fidelity voice agents, intelligent follow-up systems, and predictive engines that orchestrate your business workflows with zero human intervention.',
    features: [
      'Custom LLM Fine-tuning',
      'Autonomous Voice Agents',
      'Real-time Merit Analytics',
      'Contextual Threading',
    ],
    color: 'text-brand-cyan shadow-brand-cyan/20',
    borderColor: 'group-hover:border-brand-cyan/50',
  },
  {
    id: 'web',
    title: 'Web Platforms',
    icon: <Globe className="h-6 w-6" />,
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    subtitle: 'Scalable, high-performance web systems.',
    description: 'Digital interfaces engineered for speed and conversion. We use Next.js, React, and NestJS to build platforms that handle millions of requests with ease.',
    features: [
      'Next.js 15 Architectures',
      'Micro-frontend Scalability',
      'Edge Computing Integration',
      'Real-time Dashboards',
    ],
    color: 'text-brand-violet shadow-brand-violet/20',
    borderColor: 'group-hover:border-brand-violet/50',
  },
  {
    id: 'mobile',
    title: 'Mobile Apps',
    icon: <Smartphone className="h-6 w-6" />,
    image: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    subtitle: 'Native feel, cross-platform speed.',
    description: 'High-performance mobile applications built with Flutter and React Native. We focus on seamless UX and robust offline capabilities.',
    features: [
      'React Native / Flutter',
      'Native Module Development',
      'Biometric Security',
      'Offline-first Architecture',
    ],
    color: 'text-brand-fuchsia shadow-brand-fuchsia/20',
    borderColor: 'group-hover:border-brand-fuchsia/50',
  },
  {
    id: 'infra',
    title: 'Cloud & DevOps',
    icon: <Cpu className="h-6 w-6" />,
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    subtitle: 'Infrastructure as Code & Automation.',
    description: 'Secure, automated cloud deployments on AWS/Azure. We implement CI/CD pipelines that ensure zero-downtime releases and maximum security.',
    features: [
      'Kubernetes Orchestration',
      'Terraform / Pulumi',
      'SOC2 Compliance Prep',
      'Zero-Trust Networking',
    ],
    color: 'text-brand-cyan shadow-brand-cyan/20',
    borderColor: 'group-hover:border-brand-cyan/50',
  },
  {
    id: 'data',
    title: 'Data Systems',
    icon: <Database className="h-6 w-6" />,
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    subtitle: 'ETL Pipelines & Big Data.',
    description: 'Robust data architectures using PostgreSQL, Redis, and MongoDB. We engineer real-time data processing pipelines for instant business insights.',
    features: [
      'Vector Databases (Pinecone)',
      'Real-time Stream Processing',
      'Graph Data Modelling',
      'Automated Backups',
    ],
    color: 'text-brand-violet shadow-brand-violet/20',
    borderColor: 'group-hover:border-brand-violet/50',
  },
  {
    id: 'consulting',
    title: 'Digital Strategy',
    icon: <BarChart className="h-6 w-6" />,
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    subtitle: 'Strategic roadmap for scale.',
    description: 'CTO-as-a-Service and technical auditing. We help you define your tech stack and hiring roadmap to ensure long-term architectural success.',
    features: [
      'Technical Due Diligence',
      'Architectural Audits',
      'Hiring Roadmap Strategy',
      'Scaling Bottleneck Fixes',
    ],
    color: 'text-brand-fuchsia shadow-brand-fuchsia/20',
    borderColor: 'group-hover:border-brand-fuchsia/50',
  },
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
            <span>Core Competencies</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Engineering the <span className="ai-gradient-text">Next Evolution</span> of Business
          </h2>
          <p className="text-slate-400 text-lg">
            We deliver the full spectrum of IT solutions, from autonomous agents to enterprise-grade cloud architectures.
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