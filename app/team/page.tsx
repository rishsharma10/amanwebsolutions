import { Metadata } from 'next';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FinalCTA from '@/components/home/FinalCTA';
import Link from 'next/link';
import { Users, Code, Cpu, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Engineering & Leadership Team | Vidhyonix',
  description: 'Meet the architects, engineers, and AI specialists behind Vidhyonix building enterprise software, SaaS platforms, and intelligent automation systems.',
  alternates: {
    canonical: 'https://vidhyonix.com/team',
  }
};

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  bio: string;
  skills: string[];
}

const team: TeamMember[] = [
  {
    name: 'Rishabh Sharma',
    role: 'Lead Architect & Technical Founder',
    specialty: 'Distributed Systems & AI Architecture',
    bio: 'Oversees systems architecture, high-concurrency microservices, and autonomous AI workflow integrations for enterprise clients.',
    skills: ['Next.js', 'Node.js', 'PostgreSQL', 'LangChain', 'AWS']
  },
  {
    name: 'Isha Patel',
    role: 'Senior Frontend Engineer',
    specialty: 'UI/UX & Web Performance',
    bio: 'Crafts performant, accessible web interfaces and design systems with sub-second response times and fluid micro-interactions.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    name: 'Rohit Kumar',
    role: 'Senior Backend Engineer',
    specialty: 'Cloud Infrastructure & Scalable APIs',
    bio: 'Architects resilient API gateways, caching tiers, and event-driven data pipelines supporting high-throughput workloads.',
    skills: ['Node.js', 'NestJS', 'PostgreSQL', 'Redis', 'Docker']
  },
  {
    name: 'Simran Kaur',
    role: 'Ecommerce Technology Lead',
    specialty: 'Storefront Optimization & Headless Commerce',
    bio: 'Engineers custom Shopify themes, private ERP integrations, and high-conversion checkout flows for global retail brands.',
    skills: ['Shopify Liquid', 'Headless Commerce', 'GraphQL', 'JavaScript']
  },
  {
    name: 'Vikas Gupta',
    role: 'Mobile & Full-Stack Engineer',
    specialty: 'Cross-Platform Applications',
    bio: 'Builds seamless cross-platform mobile apps for iOS and Android with secure offline sync and biometric authentication.',
    skills: ['React Native', 'TypeScript', 'REST/GraphQL', 'Supabase']
  },
  {
    name: 'Ananya Singh',
    role: 'Technical SEO & CRO Specialist',
    specialty: 'Organic Search Architecture',
    bio: 'Specializes in semantic schema architectures, Core Web Vitals optimization, and conversion rate engineering.',
    skills: ['Technical SEO', 'Schema.org', 'Core Web Vitals', 'Analytics']
  }
];

export default function TeamPage() {
  return (
    <main className="relative min-h-screen bg-brand-dark overflow-hidden text-white">
      {/* Background Visual System */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] bg-ai-grid bg-repeat" />
        <div className="absolute top-0 left-1/3 w-[800px] h-[800px] bg-brand-cyan/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[700px] h-[700px] bg-brand-violet/5 rounded-full blur-[160px]" />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 z-10 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono uppercase tracking-wider">
            <Users size={14} />
            <span>Engineering Leadership</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Meet the Builders Behind <span className="ai-gradient-text">Vidhyonix</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A dedicated team of senior software engineers, AI researchers, and technical architects committed to shipping production-grade digital systems.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-brand-cyan/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-cyan/20 to-brand-violet/20 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan font-bold text-lg font-heading">
                      {member.name.charAt(0)}
                    </div>
                    <span className="text-[11px] font-mono text-brand-cyan px-2.5 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20">
                      {member.specialty}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-brand-cyan transition-colors mb-1">
                    {member.name}
                  </h3>

                  <p className="text-xs font-medium text-slate-400 mb-4">
                    {member.role}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] font-mono text-slate-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Core Values Banner */}
          <div className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-brand-cyan/10 via-brand-violet/10 to-transparent border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-brand-cyan font-bold text-sm">
                <Code size={16} />
                <span>Zero Outsourcing</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                All engineering is executed directly by our in-house team with complete source code transparency and code review.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-brand-violet font-bold text-sm">
                <Cpu size={16} />
                <span>Modern Standards</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Strict TypeScript type safety, automated CI/CD pipelines, containerization, and modern cloud deployment standards.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-brand-fuchsia font-bold text-sm">
                <ShieldCheck size={16} />
                <span>Client Partnership</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct Slack/Teams communication with lead architects, weekly sprints, and transparent progress reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}