'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Brain, Sparkles, Layers, Link2, Users, CheckCircle2,
  HelpCircle, Download, Mail, Phone, MapPin, ChevronDown, ChevronUp,
  Loader2, Briefcase, Award, Zap, Code, ShieldCheck, HeartHandshake,
  Clock, Landmark, MessageSquare, Compass, Send, Rocket, Target
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Accordion for FAQs
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 pb-4 transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-4 font-heading font-semibold text-lg text-white hover:text-brand-cyan transition-colors"
      >
        <span>{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-brand-cyan shrink-0 ml-4" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 ml-4" />
        )}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-slate-400 text-sm md:text-base leading-relaxed pb-4 pr-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PartnerPageClient() {
  const formSectionRef = useRef<HTMLDivElement>(null);
  const modelsSectionRef = useRef<HTMLDivElement>(null);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    website: '',
    linkedin: '',
    partnershipType: '',
    companyType: '',
    details: '',
    projectVolume: '',
    timeline: '',
    budget: '',
    howHeard: '',
    // Conditional Referral Partnership fields
    howGenerate: '',
    clientType: '',
    expectedReferrals: '',
    // Conditional White-Label fields
    currentServices: '',
    typicalProjectSize: '',
    expectedVolume: '',
    clientComm: '',
    // Conditional Product Partnership fields
    whatBuilding: '',
    productStage: '',
    usersCount: '',
    techTeam: '',
    // Conditional Technology Integration fields
    whatTech: '',
    apiAvailability: '',
    integrationRequirements: '',
    partnershipObjective: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isMobile, setIsMobile] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/partner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          companyName: '',
          email: '',
          phone: '',
          website: '',
          linkedin: '',
          partnershipType: '',
          companyType: '',
          details: '',
          projectVolume: '',
          timeline: '',
          budget: '',
          howHeard: '',
          howGenerate: '',
          clientType: '',
          expectedReferrals: '',
          currentServices: '',
          typicalProjectSize: '',
          expectedVolume: '',
          clientComm: '',
          whatBuilding: '',
          productStage: '',
          usersCount: '',
          techTeam: '',
          whatTech: '',
          apiAvailability: '',
          integrationRequirements: '',
          partnershipObjective: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Detect screen size to toggle sliding logic
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px matches md breakpoint
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const partnersList = [
    {
      title: "Software Development Agencies",
      desc: "Extend your developer capacity with our dedicated AI and engineering experts. We plug directly into your workflows to accelerate projects.",
      Icon: Code
    },
    {
      title: "Digital Agencies",
      desc: "Offer advanced AI models, complex web/mobile platforms, and custom software systems without building an internal engineering team.",
      Icon: Layers
    },
    {
      title: "Freelancers",
      desc: "Refer clients with complex technology needs to us, or join forces on projects that require an established agency's scale and engineering depth.",
      Icon: Users
    },
    {
      title: "AI Companies",
      desc: "Integrate your niche algorithms, LLMs, or APIs into our enterprise client projects. Create custom-fit solutions as unified architectures.",
      Icon: Brain
    },
    {
      title: "SaaS Companies",
      desc: "Accelerate your feature roadmap, build integrations, or design complex dashboard architectures using our expert engineering pods.",
      Icon: Zap
    },
    {
      title: "Technology Companies",
      desc: "Integrate products or swap skills on cross-platform developments to provide robust, scaling enterprise systems.",
      Icon: Briefcase
    },
    {
      title: "Startups",
      desc: "Form a long-term strategic technology alliance to design MVPs, manage product iterations, and lay down core architecture for scale.",
      Icon: Rocket
    },
    {
      title: "Consultants",
      desc: "Provide client opportunities with end-to-end engineering execution, backing your strategic advice with high-quality deliverables.",
      Icon: Compass
    },
    {
      title: "Product Companies",
      desc: "Build next-gen feature blocks, cloud scaling solutions, or machine learning pipelines without altering your core developers' focus.",
      Icon: Target
    },
    {
      title: "Entrepreneurs",
      desc: "Leverage us as your technical co-founder. We design, build, and deploy your digital product, allowing you to focus on growth.",
      Icon: HeartHandshake
    }
  ];

  const modelsList = [
    {
      title: "Technology Partnership",
      tagline: "For companies needing additional custom engineering or AI capabilities.",
      features: ["AI Model Development", "SaaS Platform Building", "Web & Mobile Engineering", "Cloud Architecture & Integration", "Operational Automation Tools"]
    },
    {
      title: "White-Label Development",
      tagline: "Handle development behind the scenes. We build it, you deliver it.",
      features: ["You own the client relationship", "We manage technical execution", "Strict NDAs & confidentiality", "Code delivered under your brand name", "Experienced developer oversight"]
    },
    {
      title: "Referral Partnership",
      tagline: "Earn reliable terms by introducing qualified software leads to Vidhyonix.",
      features: ["Transparent communication", "Quick preliminary screening", "Custom referral agreements", "Client-first software consultation", "Flexible terms tailored per project"]
    },
    {
      title: "Product Partnership",
      tagline: "Partner with our engineers to turn your vision into a scaling software product.",
      features: ["Technical co-founder alignment", "Rapid MVP design & rollout", "SaaS infrastructure planning", "Enterprise scaling protocols", "Continuous technical iterations"]
    },
    {
      title: "AI & Technology Integration",
      tagline: "Promote your AI tools, custom APIs, or platforms through our client projects.",
      features: ["API compatibility testing", "Pre-built integration adapters", "Value-add software solutions", "Co-marketing opportunities", "Joint customer pitches"]
    },
    {
      title: "Dedicated Engineering Partnership",
      tagline: "Add long-term technical resources and custom talent blocks to your business.",
      features: ["Dedicated Full-Stack Developers", "Dedicated AI Specialists", "Structured product teams", "Sprint-based management support", "Flexible scaling options"]
    }
  ];

  const trustPoints = [
    { title: "AI-First Engineering", desc: "We develop with a focus on modern AI implementations, cognitive workflows, and scalable models." },
    { title: "Experienced Development Team", desc: "Our engineers are experts in Next.js, Cloud architectures, and robust API development." },
    { title: "Startup-Friendly Approach", desc: "We build lean, prioritize MVPs, and focus on fast iterations to secure early market validation." },
    { title: "Flexible Engagement Models", desc: "Choose white-label support, sprint-based engineering, or dedicated developer placements." },
    { title: "Transparent Communication", desc: "No jargon, regular check-ins, and direct developer communication channels on Slack." },
    { title: "Confidentiality & NDAs Available", desc: "We protect intellectual property strictly. All codes and project terms stay confidential." },
    { title: "Modern Technology Stack", desc: "We engineer systems using fast, optimized frameworks that minimize maintenance overhead." },
    { title: "Business-Focused Development", desc: "We focus on solving business goals, not just writing code, guaranteeing real usability." }
  ];

  const faqList = [
    {
      question: "What types of companies can partner with Vidhyonix?",
      answer: "We partner with software development agencies, digital marketing agencies, freelancers, startups, product companies, technology integrators, and independent business consultants. If you deal with digital product creation or software advice, we have models to collaborate."
    },
    {
      question: "Do you work with software agencies?",
      answer: "Yes, we regularly collaborate with software agencies that either need specialized AI expertise or require extra developer bandwidth to hit project deadlines. We can work directly under your management structure."
    },
    {
      question: "Do you offer white-label development?",
      answer: "Yes. In white-label partnerships, we operate completely behind the scenes as your engineering back-end. You manage all communication with the client, and we deliver high-quality, fully documented code that you hand over under your brand."
    },
    {
      question: "Can you work as an extended engineering team?",
      answer: "Absolutely. We offer dedicated engineering resources (Developers, AI Engineers, UI Designers, or full Scrum teams) that operate as a natural extension of your own tech stack for long-term project terms."
    },
    {
      question: "Can I refer a project to Vidhyonix?",
      answer: "Yes, we run a professional referral system. If you introduce a business that has custom software or AI engineering needs, we can discuss referral terms based on the project opportunity and scope."
    },
    {
      question: "Can Vidhyonix help build our SaaS product?",
      answer: "Yes. We work closely with founders and SaaS teams, providing technical architecture, database scaling setups, subscription integration, dashboard designs, and feature engineering to bring SaaS products to market."
    },
    {
      question: "Can you integrate our AI technology?",
      answer: "Yes, if you offer a custom API, AI framework, or database technology, we can evaluate integration adapters to introduce your system to our enterprise clients where applicable."
    },
    {
      question: "Do you sign NDAs?",
      answer: "Yes, we sign standard Non-Disclosure Agreements (NDAs) before we discuss details, project scopes, or client business data. Your intellectual property is fully protected."
    },
    {
      question: "Do you work with international companies?",
      answer: "Yes, we collaborate with agencies, startups, and companies globally. We align communication via standard Slack, WhatsApp, and Google Meet schedules."
    },
    {
      question: "How does the partnership process work?",
      answer: "It starts when you submit your collaboration inquiry. We review your profile, setup a brief discovery call to select the partnership model, define terms and boundaries, and align on initial deliverables."
    }
  ];

  return (
    <div className="relative min-h-screen bg-brand-dark overflow-hidden">
      {/* Structured SEO JSON-LD Scripts (rendered safely inside body) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://vidhyonix.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Partner With Us",
                "item": "https://vidhyonix.com/partner-with-us"
              }
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqList.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Vidhyonix",
            "url": "https://vidhyonix.com",
            "logo": "https://vidhyonix.com/favicon.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-8770283188",
              "contactType": "customer service",
              "email": "vidhyonixitsolutions@gmail.com"
            }
          })
        }}
      />

      <Header />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-sm font-semibold tracking-wide">
              <Sparkles size={14} className="animate-pulse" />
              <span>VIDHYONIX PARTNERSHIP NETWORK</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-tight">
              Let's Build <span className="ai-gradient-text">Something Together</span>
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              We partner with agencies, technology companies, freelancers, startups, SaaS companies, and entrepreneurs to build and scale AI-powered digital products.
            </p>

            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection(formSectionRef)}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-cyan to-brand-violet text-brand-dark hover:text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                Start a Partnership <ArrowRight size={18} />
              </button>
              <button
                onClick={() => scrollToSection(modelsSectionRef)}
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold transition-all backdrop-blur-md"
              >
                Explore Partnership Models
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Partner With Section */}
      <section className="py-20 bg-brand-dark/20 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/15 border border-brand-violet/20 text-brand-violet text-xs font-semibold uppercase tracking-wider">
              <Users size={12} />
              <span>Target Partners</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Who We Partner With</h2>
            <p className="text-slate-400">Discover how Vidhyonix collaborates with various businesses to launch products.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnersList.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-morphism p-6 rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-300 flex gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-cyan shrink-0">
                  <partner.Icon size={22} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white font-heading">{partner.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{partner.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Models Section */}
      <section ref={modelsSectionRef} className="py-20 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-fuchsia/15 border border-brand-fuchsia/20 text-brand-fuchsia text-xs font-semibold uppercase tracking-wider">
              <Layers size={12} />
              <span>Collaboration Channels</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">How We Can Work Together</h2>
            <p className="text-slate-400">Choose the ideal collaboration model that fits your operational needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modelsList.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-morphism p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold font-heading text-white mb-2">{model.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{model.tagline}</p>
                  </div>
                  
                  <ul className="space-y-3">
                    {model.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <CheckCircle2 size={16} className="text-brand-cyan shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => {
                      setFormData(prev => ({ ...prev, partnershipType: model.title }));
                      scrollToSection(formSectionRef);
                    }}
                    className="w-full py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold border border-white/10 text-sm transition-all"
                  >
                    Choose Model
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us Section */}
      <section className="py-20 bg-brand-dark/20 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/15 border border-brand-cyan/20 text-brand-cyan text-xs font-semibold uppercase tracking-wider">
              <Award size={12} />
              <span>Core Advantages</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Why Partner With Vidhyonix?</h2>
            <p className="text-slate-400">Our values center around secure execution, transparent communication, and business utility.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-6 bg-white/5 border border-white/5 rounded-2xl flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white font-heading flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" />
                    {point.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Process */}
      <section className="py-20 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/15 border border-brand-violet/20 text-brand-violet text-xs font-semibold uppercase tracking-wider">
              <Clock size={12} />
              <span>The Timeline</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Collaboration Process</h2>
            <p className="text-slate-400">Five clean checkpoints to align, scope, and kick-off our collaboration.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Connector Line */}
            <div className="absolute left-[31px] md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-px bg-white/10 hidden sm:block" />

            <div className="space-y-12">
              {[
                { step: "Step 1", title: "Tell Us About Your Opportunity", desc: "Submit your details using our form. Describe your business type, objective, and what scope you are eyeing." },
                { step: "Step 2", title: "We Review Your Requirements", desc: "Our tech leads review the details to see if your technical requests or integration goals align with our capabilities." },
                { step: "Step 3", title: "We Discuss the Partnership Model", desc: "We schedule a brief discovery call to select White-Label details, Referral rates, or integration requirements." },
                { step: "Step 4", title: "We Define Scope & Responsibilities", desc: "Draft a clear, transparent scope of work (SOW) or SLA outlining delivery timelines, NDA conditions, and costs." },
                { step: "Step 5", title: "We Start Working Together", desc: "Align communication tools (Slack channels, Jira boards) and begin engineering custom software or executing integration pipelines." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col sm:flex-row gap-8 items-start ${index % 2 === 1 ? 'sm:flex-row-reverse' : ''}`}
                >
                  {/* Circle Indicator */}
                  <div className="absolute left-[20px] sm:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-slate-900 border-2 border-brand-cyan z-20 flex items-center justify-center hidden sm:flex">
                    <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                  </div>

                  <div className="flex-1 pl-12 sm:pl-0 sm:text-right">
                    <div className={`space-y-2 ${index % 2 === 1 ? 'sm:text-left' : 'sm:text-right'}`}>
                      <span className="text-xs font-bold text-brand-cyan tracking-widest uppercase">{item.step}</span>
                      <h3 className="text-xl font-bold font-heading text-white">{item.title}</h3>
                      <p className="text-slate-400 text-sm max-w-md ml-auto mr-auto md:ml-0 md:mr-0 inline-block">{item.desc}</p>
                    </div>
                  </div>

                  <div className="flex-1 hidden sm:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Form Section */}
      <section ref={formSectionRef} className="py-20 bg-brand-dark/20 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Start a Partnership</h2>
            <p className="text-slate-400">Tell us about your company and what you'd like to build together.</p>
          </div>

          <div className="glass-morphism p-8 md:p-12 rounded-[2.5rem] border border-white/10 relative overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-300">Full Name *</label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-all text-sm"
                  />
                </div>

                {/* Company Name */}
                <div className="space-y-2">
                  <label htmlFor="companyName" className="text-sm font-semibold text-slate-300">Company Name *</label>
                  <input
                    required
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="e.g. Agency Inc."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-all text-sm"
                  />
                </div>

                {/* Work Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-300">Work Email *</label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-all text-sm"
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-slate-300">Phone / WhatsApp</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-all text-sm"
                  />
                </div>

                {/* Website */}
                <div className="space-y-2">
                  <label htmlFor="website" className="text-sm font-semibold text-slate-300">Company Website</label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="https://yourwebsite.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-all text-sm"
                  />
                </div>

                {/* LinkedIn Profile */}
                <div className="space-y-2">
                  <label htmlFor="linkedin" className="text-sm font-semibold text-slate-300">LinkedIn Profile</label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-all text-sm"
                  />
                </div>

                {/* Partnership Type */}
                <div className="space-y-2">
                  <label htmlFor="partnershipType" className="text-sm font-semibold text-slate-300">Partnership Type *</label>
                  <select
                    required
                    id="partnershipType"
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-all text-sm cursor-pointer"
                  >
                    <option value="" disabled>Select partnership type</option>
                    <option value="Technology Partnership">Technology Partnership</option>
                    <option value="White-Label Development">White-Label Development</option>
                    <option value="Referral Partnership">Referral Partnership</option>
                    <option value="Product Partnership">Product Partnership</option>
                    <option value="AI Integration">AI Integration</option>
                    <option value="Dedicated Engineering Team">Dedicated Engineering Team</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Company Type */}
                <div className="space-y-2">
                  <label htmlFor="companyType" className="text-sm font-semibold text-slate-300">Company Type *</label>
                  <select
                    required
                    id="companyType"
                    name="companyType"
                    value={formData.companyType}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-all text-sm cursor-pointer"
                  >
                    <option value="" disabled>Select company type</option>
                    <option value="Agency">Agency</option>
                    <option value="Freelancer">Freelancer</option>
                    <option value="Startup">Startup</option>
                    <option value="SaaS Company">SaaS Company</option>
                    <option value="Technology Company">Technology Company</option>
                    <option value="Consultant">Consultant</option>
                    <option value="Enterprise">Enterprise</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Conditional Fields: Referral Partnership */}
              {formData.partnershipType === 'Referral Partnership' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-6 pt-4 border-t border-white/5"
                >
                  <h3 className="text-base font-bold text-brand-cyan">Referral Qualifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="howGenerate" className="text-sm font-semibold text-slate-300">How do you generate opportunities?</label>
                      <input
                        type="text"
                        id="howGenerate"
                        name="howGenerate"
                        value={formData.howGenerate}
                        onChange={handleInputChange}
                        placeholder="e.g. Inbound consulting, local network"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-all text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="clientType" className="text-sm font-semibold text-slate-300">What type of clients do you work with?</label>
                      <input
                        type="text"
                        id="clientType"
                        name="clientType"
                        value={formData.clientType}
                        onChange={handleInputChange}
                        placeholder="e.g. E-commerce brands, local SMEs"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-all text-sm"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label htmlFor="expectedReferrals" className="text-sm font-semibold text-slate-300">Expected referrals per month</label>
                      <input
                        type="text"
                        id="expectedReferrals"
                        name="expectedReferrals"
                        value={formData.expectedReferrals}
                        onChange={handleInputChange}
                        placeholder="e.g. 1-2 per quarter, 3+ per month"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-all text-sm"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Conditional Fields: White-Label Development */}
              {formData.partnershipType === 'White-Label Development' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-6 pt-4 border-t border-white/5"
                >
                  <h3 className="text-base font-bold text-brand-cyan">White-Label Alignment</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="currentServices" className="text-sm font-semibold text-slate-300">What services do you currently offer?</label>
                      <input
                        type="text"
                        id="currentServices"
                        name="currentServices"
                        value={formData.currentServices}
                        onChange={handleInputChange}
                        placeholder="e.g. SEO, Design, Branding"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-all text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="typicalProjectSize" className="text-sm font-semibold text-slate-300">Typical project size</label>
                      <input
                        type="text"
                        id="typicalProjectSize"
                        name="typicalProjectSize"
                        value={formData.typicalProjectSize}
                        onChange={handleInputChange}
                        placeholder="e.g. $5k - $10k, $25k+"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-all text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="expectedVolume" className="text-sm font-semibold text-slate-300">Expected monthly project volume</label>
                      <input
                        type="text"
                        id="expectedVolume"
                        name="expectedVolume"
                        value={formData.expectedVolume}
                        onChange={handleInputChange}
                        placeholder="e.g. 1 per month, 3+ ongoing"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-all text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="clientComm" className="text-sm font-semibold text-slate-300">Do you manage client communication? *</label>
                      <select
                        required
                        id="clientComm"
                        name="clientComm"
                        value={formData.clientComm}
                        onChange={handleInputChange}
                        className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-all text-sm cursor-pointer"
                      >
                        <option value="" disabled>Select choice</option>
                        <option value="Yes, completely client-facing">Yes, completely client-facing</option>
                        <option value="No, we need developers to talk to client">No, we need developers to talk to client</option>
                        <option value="Mixed model">Mixed model</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Conditional Fields: Product Partnership */}
              {formData.partnershipType === 'Product Partnership' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-6 pt-4 border-t border-white/5"
                >
                  <h3 className="text-base font-bold text-brand-cyan">Product Specs</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="whatBuilding" className="text-sm font-semibold text-slate-300">What are you building?</label>
                      <input
                        type="text"
                        id="whatBuilding"
                        name="whatBuilding"
                        value={formData.whatBuilding}
                        onChange={handleInputChange}
                        placeholder="e.g. AI-powered analytics dashboard"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-all text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="productStage" className="text-sm font-semibold text-slate-300">Current product stage</label>
                      <input
                        type="text"
                        id="productStage"
                        name="productStage"
                        value={formData.productStage}
                        onChange={handleInputChange}
                        placeholder="e.g. Idea phase, Wireframes, MVP live"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-all text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="usersCount" className="text-sm font-semibold text-slate-300">Existing users (if any)</label>
                      <input
                        type="text"
                        id="usersCount"
                        name="usersCount"
                        value={formData.usersCount}
                        onChange={handleInputChange}
                        placeholder="e.g. None, 100+ beta, 5000+ MAU"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-all text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="techTeam" className="text-sm font-semibold text-slate-300">Current technical team</label>
                      <input
                        type="text"
                        id="techTeam"
                        name="techTeam"
                        value={formData.techTeam}
                        onChange={handleInputChange}
                        placeholder="e.g. Solo founder, 1 designer, 2 developers"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-all text-sm"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Conditional Fields: Technology Integration / Partnership */}
              {formData.partnershipType === 'Technology Partnership' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-6 pt-4 border-t border-white/5"
                >
                  <h3 className="text-base font-bold text-brand-cyan">Technology Integration Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="whatTech" className="text-sm font-semibold text-slate-300">What technology/product do you offer?</label>
                      <input
                        type="text"
                        id="whatTech"
                        name="whatTech"
                        value={formData.whatTech}
                        onChange={handleInputChange}
                        placeholder="e.g. Proprietary voice cloning engine"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-all text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="apiAvailability" className="text-sm font-semibold text-slate-300">API availability? *</label>
                      <select
                        required
                        id="apiAvailability"
                        name="apiAvailability"
                        value={formData.apiAvailability}
                        onChange={handleInputChange}
                        className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-all text-sm cursor-pointer"
                      >
                        <option value="" disabled>Select API choice</option>
                        <option value="Yes, REST API fully documented">Yes, REST API fully documented</option>
                        <option value="Yes, GraphQL API">Yes, GraphQL API</option>
                        <option value="Under development">Under development</option>
                        <option value="No API available">No API available</option>
                      </select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label htmlFor="integrationRequirements" className="text-sm font-semibold text-slate-300">Integration requirements</label>
                      <input
                        type="text"
                        id="integrationRequirements"
                        name="integrationRequirements"
                        value={formData.integrationRequirements}
                        onChange={handleInputChange}
                        placeholder="e.g. Node.js SDK, Python client wrapper"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-all text-sm"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label htmlFor="partnershipObjective" className="text-sm font-semibold text-slate-300">Partnership objective</label>
                      <input
                        type="text"
                        id="partnershipObjective"
                        name="partnershipObjective"
                        value={formData.partnershipObjective}
                        onChange={handleInputChange}
                        placeholder="e.g. Joint sales, technical integration into client portals"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-all text-sm"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/5">
                {/* Project Volume */}
                <div className="space-y-2">
                  <label htmlFor="projectVolume" className="text-sm font-semibold text-slate-300">Expected Project Volume</label>
                  <input
                    type="text"
                    id="projectVolume"
                    name="projectVolume"
                    value={formData.projectVolume}
                    onChange={handleInputChange}
                    placeholder="e.g. 1-2 per year, 5+ ongoing"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-all text-sm"
                  />
                </div>

                {/* Timeline */}
                <div className="space-y-2">
                  <label htmlFor="timeline" className="text-sm font-semibold text-slate-300">Expected Timeline</label>
                  <input
                    type="text"
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    placeholder="e.g. Immediate, 1-3 months"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-all text-sm"
                  />
                </div>

                {/* Budget */}
                <div className="space-y-2">
                  <label htmlFor="budget" className="text-sm font-semibold text-slate-300">Budget Range (Optional)</label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    placeholder="e.g. $10k - $25k, $50k+"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-all text-sm"
                  />
                </div>
              </div>

              {/* Collaboration details */}
              <div className="space-y-2">
                <label htmlFor="details" className="text-sm font-semibold text-slate-300">Project or Collaboration Details *</label>
                <textarea
                  required
                  id="details"
                  name="details"
                  rows={4}
                  value={formData.details}
                  onChange={handleInputChange}
                  placeholder="Tell us about the project, customer requirements, or what you'd like to build together..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-all text-sm font-sans"
                />
              </div>

              {/* How Did You Hear */}
              <div className="space-y-2">
                <label htmlFor="howHeard" className="text-sm font-semibold text-slate-300">How Did You Hear About Vidhyonix?</label>
                <input
                  type="text"
                  id="howHeard"
                  name="howHeard"
                  value={formData.howHeard}
                  onChange={handleInputChange}
                  placeholder="e.g. Search engine, LinkedIn, Word of mouth"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-all text-sm"
                />
              </div>

              {/* Submit Feedback messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl text-sm"
                >
                  Thanks for reaching out. Our team will review your partnership request and get back to you shortly.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm"
                >
                  Failed to submit request. Please verify your fields and try again.
                </motion.div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-brand-cyan to-brand-violet text-brand-dark hover:text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:scale-[1.01] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending Request...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Start Partnership Discussion</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Partnership Case Studies Section */}
      <section className="py-20 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/15 border border-brand-cyan/20 text-brand-cyan text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck size={12} />
              <span>Success Stories</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Recent Partnerships</h2>
            <p className="text-slate-400">See how we collaborate with leading agencies and startups to build premium custom software solutions.</p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Case Study: Wloper */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="glass-morphism p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <a 
                    href="https://wloper.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center group/logo"
                  >
                    <img 
                      src="https://wloper.com/images/loper__3_-removebg-preview-e1748296489675-r6eacdc8yg79qwd174wcap96495w22bgh5a75gm6tc.png" 
                      alt="Wloper Logo" 
                      className="h-9 w-auto object-contain"
                    />
                  </a>
                  <span className="px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-semibold uppercase tracking-wider">
                    White-Label Partner
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed pt-2">
                  We serve as the core technology backend for Wloper, scaling their developer resources and executing advanced AI products under strict NDA. Our engineering team designed, developed, and deployed their custom SaaS dashboards and client portals on a sprint-by-sprint schedule, accelerating their delivery cycle by 70%.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6 flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-widest">
                <span>Speed Boost: +70%</span>
                <span className="text-brand-cyan">Active Collaboration</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-brand-dark/20 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/15 border border-brand-violet/20 text-brand-violet text-xs font-semibold uppercase tracking-wider">
              <HelpCircle size={12} />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Partner FAQ</h2>
            <p className="text-slate-400">Get quick answers regarding NDAs, collaboration pipelines, and white-label arrangements.</p>
          </div>

          <div className="space-y-2">
            {faqList.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Overview Download Section */}
      <section className="py-20 relative z-10 border-t border-white/5 bg-brand-dark/40">
        <div className="container mx-auto px-4 text-center max-w-xl space-y-6">
          <div className="w-14 h-14 bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan rounded-full flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            <Download size={22} />
          </div>
          <h2 className="text-3xl font-heading font-bold text-white">Vidhyonix Partnership Overview</h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Download our overview document to review services, development pipelines, technology stacks, collaboration processes, and project capabilities in detail.
          </p>
          <div className="pt-4">
            <button
              onClick={() => alert("Vidhyonix Partnership Overview PDF download will be configured shortly.")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-semibold transition-all backdrop-blur-md text-sm cursor-pointer"
            >
              Download Partnership Overview
            </button>
          </div>
        </div>
      </section>

      {/* Bottom Socials Section */}
      <section className="py-20 bg-brand-dark/20 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-4 text-center max-w-xl space-y-8">
          <h2 className="text-3xl font-heading font-bold text-white">Have an idea for a partnership?</h2>
          <p className="text-slate-400">Reach out directly via our official communication nodes below.</p>
          
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <a
              href="mailto:vidhyonixitsolutions@gmail.com"
              className="flex items-center gap-2 text-sm text-slate-300 hover:text-brand-cyan transition-colors"
            >
              <Mail size={16} className="text-brand-cyan" />
              <span>Email Support</span>
            </a>
            <a
              href="https://wa.me/918770283188"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-300 hover:text-brand-cyan transition-colors"
            >
              <Phone size={16} className="text-brand-cyan" />
              <span>WhatsApp Chat</span>
            </a>
            <a
              href="https://www.linkedin.com/company/vidhyonix-it-solutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-300 hover:text-brand-cyan transition-colors"
            >
              <Briefcase size={16} className="text-brand-cyan" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/vidhyonix/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-300 hover:text-brand-cyan transition-colors"
            >
              <MapPin size={16} className="text-brand-fuchsia" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
