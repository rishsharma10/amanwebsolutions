'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2, ChevronRight, Bot, Cpu, Sparkles, Building2, Calendar, DollarSign, Users } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type Step = 1 | 2 | 3 | 4 | 5 | 6;

const projectTypes = [
  { id: 'AI Chatbot', icon: Bot },
  { id: 'AI Agent', icon: Cpu },
  { id: 'SaaS Platform', icon: Sparkles },
  { id: 'Mobile App', icon: Sparkles },
  { id: 'Web Application', icon: Sparkles },
  { id: 'AI Automation', icon: Cpu },
  { id: 'Internal Software', icon: Sparkles },
  { id: 'MVP', icon: Sparkles },
];

const industries = [
  'Healthcare', 'Finance', 'Retail', 'Logistics', 'SaaS', 
  'Education', 'Real Estate', 'E-Commerce', 'Manufacturing', 'HR'
];

const companySizes = ['1-10', '11-50', '51-200', '201-500', '500+'];
const timelines = ['ASAP (Rush)', '1-3 Months', '3-6 Months', 'Flexible'];
const budgets = ['< $10k', '$10k - $25k', '$25k - $50k', '$50k - $100k', '$100k+'];

export default function SolutionFinder() {
  const [step, setStep] = useState<Step>(1);
  const [answers, setAnswers] = useState({
    projectType: '',
    industry: '',
    companySize: '',
    timeline: '',
    budget: '',
  });

  const nextStep = () => setStep(prev => Math.min(prev + 1, 6) as Step);
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1) as Step);

  const handleSelect = (key: keyof typeof answers, value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    setTimeout(nextStep, 300);
  };

  const getRecommendation = () => {
    let service = "Custom Software Engineering";
    let nextStepMsg = "Architecture & Discovery Workshop";
    let estTimeline = answers.timeline === 'Flexible' ? '3-4 Months' : answers.timeline;

    if (answers.projectType.includes('AI')) {
      service = "AI Integration & Development";
      nextStepMsg = "AI Data Readiness Assessment";
    } else if (answers.projectType === 'MVP') {
      service = "MVP Rapid Prototyping";
      nextStepMsg = "Product Strategy Session";
      estTimeline = '6-10 Weeks';
    } else if (answers.projectType === 'SaaS Platform') {
      service = "Scalable SaaS Development";
      nextStepMsg = "System Architecture Planning";
    }

    return { service, nextStepMsg, estTimeline };
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl bg-brand-dark/80 border border-white/10 backdrop-blur-xl overflow-hidden shadow-2xl relative">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
        <motion.div 
          className="h-full bg-brand-cyan"
          initial={{ width: '16%' }}
          animate={{ width: `${(step / 6) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="p-8 md:p-12 min-h-[500px] flex flex-col justify-center">
        {step > 1 && step < 6 && (
          <button 
            onClick={prevStep}
            className="absolute top-8 left-8 text-slate-400 hover:text-white flex items-center gap-2 transition-colors text-sm font-medium"
          >
            <ArrowLeft size={16} /> Back
          </button>
        )}

        <AnimatePresence mode="wait">
          {/* STEP 1: Project Type */}
          {step === 1 && (
            <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
              <div className="text-center mb-10">
                <div className="text-brand-cyan font-bold text-sm tracking-widest uppercase mb-3">AI Solution Finder</div>
                <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-white">What do you want to build?</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleSelect('projectType', type.id)}
                    className={cn(
                      "p-6 rounded-2xl border transition-all flex flex-col items-center gap-4 text-center group",
                      answers.projectType === type.id 
                        ? "bg-brand-cyan/20 border-brand-cyan shadow-[0_0_15px_rgba(34,211,238,0.2)]" 
                        : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                    )}
                  >
                    <type.icon size={28} className={answers.projectType === type.id ? "text-brand-cyan" : "text-slate-400 group-hover:text-white transition-colors"} />
                    <span className="font-bold text-white text-sm">{type.id}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 2: Industry */}
          {step === 2 && (
            <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
              <div className="text-center mb-10">
                <div className="text-brand-cyan font-bold text-sm tracking-widest uppercase mb-3">Industry Alignment</div>
                <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-white">Which industry are you in?</h3>
              </div>
              <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
                {industries.map((ind) => (
                  <button
                    key={ind}
                    onClick={() => handleSelect('industry', ind)}
                    className={cn(
                      "px-6 py-3 rounded-full border transition-all font-medium flex items-center gap-2",
                      answers.industry === ind 
                        ? "bg-brand-fuchsia text-white border-brand-fuchsia shadow-[0_0_15px_rgba(217,70,239,0.3)]" 
                        : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    {ind}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 3: Company Size */}
          {step === 3 && (
            <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
              <div className="text-center mb-10">
                <div className="text-brand-cyan font-bold text-sm tracking-widest uppercase mb-3">Scale & Complexity</div>
                <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-white">What is your company size?</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {companySizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSelect('companySize', size)}
                    className={cn(
                      "p-6 rounded-2xl border transition-all flex flex-col items-center gap-3",
                      answers.companySize === size 
                        ? "bg-brand-violet text-white border-brand-violet shadow-[0_0_15px_rgba(139,92,246,0.3)]" 
                        : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white hover:border-white/20"
                    )}
                  >
                    <Users size={24} className={answers.companySize === size ? "text-white" : "text-slate-400"} />
                    <span className="font-bold">{size} Employees</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 4: Timeline */}
          {step === 4 && (
            <motion.div key="s4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
              <div className="text-center mb-10">
                <div className="text-brand-cyan font-bold text-sm tracking-widest uppercase mb-3">Delivery Expectation</div>
                <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-white">When do you need to launch?</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {timelines.map((time) => (
                  <button
                    key={time}
                    onClick={() => handleSelect('timeline', time)}
                    className={cn(
                      "p-6 rounded-2xl border transition-all flex flex-col items-center gap-3",
                      answers.timeline === time 
                        ? "bg-brand-cyan text-brand-dark border-brand-cyan shadow-[0_0_15px_rgba(34,211,238,0.3)]" 
                        : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white hover:border-white/20"
                    )}
                  >
                    <Calendar size={24} className={answers.timeline === time ? "text-brand-dark" : "text-slate-400"} />
                    <span className="font-bold">{time}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 5: Budget */}
          {step === 5 && (
            <motion.div key="s5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
              <div className="text-center mb-10">
                <div className="text-brand-cyan font-bold text-sm tracking-widest uppercase mb-3">Investment Range</div>
                <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-white">What is your estimated budget?</h3>
              </div>
              <div className="flex flex-col gap-3 max-w-lg mx-auto">
                {budgets.map((bud) => (
                  <button
                    key={bud}
                    onClick={() => handleSelect('budget', bud)}
                    className={cn(
                      "p-5 rounded-xl border transition-all flex justify-between items-center",
                      answers.budget === bud 
                        ? "bg-brand-fuchsia text-white border-brand-fuchsia shadow-[0_0_15px_rgba(217,70,239,0.3)]" 
                        : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    <span className="font-bold flex items-center gap-3">
                      <DollarSign size={20} className={answers.budget === bud ? "text-white" : "text-brand-cyan"} />
                      {bud}
                    </span>
                    <ChevronRight size={20} className={answers.budget === bud ? "text-white" : "text-slate-500"} />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 6: Result */}
          {step === 6 && (
            <motion.div key="s6" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-cyan/20 text-brand-cyan mb-8 border border-brand-cyan/30">
                <Cpu size={40} />
              </div>
              <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6">Your Personalized Strategy</h3>
              <p className="text-slate-400 mb-12 text-lg">Based on your requirement for a {answers.projectType} in the {answers.industry} sector, we recommend the following approach:</p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-12 text-left">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-cyan/30 transition-colors">
                  <div className="text-brand-cyan text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2"><Sparkles size={14}/> Recommended Service</div>
                  <div className="text-xl font-bold text-white">{getRecommendation().service}</div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-fuchsia/30 transition-colors">
                  <div className="text-brand-fuchsia text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2"><CheckCircle2 size={14}/> Suggested Next Step</div>
                  <div className="text-xl font-bold text-white">{getRecommendation().nextStepMsg}</div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-violet/30 transition-colors">
                  <div className="text-brand-violet text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2"><Calendar size={14}/> Estimated Timeline</div>
                  <div className="text-xl font-bold text-white">{getRecommendation().estTimeline}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-brand-cyan text-brand-dark rounded-xl font-bold hover:bg-white transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                    Book Free Consultation <ArrowRight size={18} />
                  </button>
                </Link>
                <button onClick={() => setStep(1)} className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-xl font-bold hover:bg-white/5 transition-colors">
                  Restart Questionnaire
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
