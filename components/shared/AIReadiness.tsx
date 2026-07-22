'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, ArrowRight, Activity, BrainCircuit } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type Step = 1 | 2 | 3 | 4 | 5 | 6;

const questions = [
  {
    id: 1,
    title: "How is your company data currently stored?",
    options: [
      { text: "Centralized cloud database (AWS/GCP/Azure)", score: 10 },
      { text: "Mix of cloud and local servers", score: 5 },
      { text: "Spreadsheets and scattered files", score: 0 },
    ]
  },
  {
    id: 2,
    title: "How many repetitive manual tasks does your team handle daily?",
    options: [
      { text: "Very few, most workflows are automated", score: 10 },
      { text: "Some, but we use basic tools like Zapier", score: 5 },
      { text: "A lot, our team is overwhelmed with manual data entry", score: 0 },
    ]
  },
  {
    id: 3,
    title: "Do you have clear APIs for your core software systems?",
    options: [
      { text: "Yes, fully documented REST/GraphQL APIs", score: 10 },
      { text: "Some systems have APIs, some don't", score: 5 },
      { text: "No, or I'm not sure", score: 0 },
    ]
  },
  {
    id: 4,
    title: "What is your primary goal for AI adoption?",
    options: [
      { text: "Create new revenue streams / products", score: 10 },
      { text: "Reduce operational costs and save time", score: 8 },
      { text: "Improve customer experience", score: 8 },
    ]
  },
  {
    id: 5,
    title: "What is your allocated budget for digital transformation this year?",
    options: [
      { text: "$50,000+", score: 10 },
      { text: "$10,000 - $50,000", score: 5 },
      { text: "Under $10,000", score: 0 },
    ]
  }
];

export default function AIReadiness() {
  const [step, setStep] = useState<Step>(1);
  const [score, setScore] = useState(0);

  const handleAnswer = (points: number) => {
    setScore(prev => prev + points);
    setStep(prev => Math.min(prev + 1, 6) as Step);
  };

  const getResult = () => {
    if (score >= 40) {
      return {
        level: "Highly Ready",
        color: "text-green-400",
        bg: "bg-green-500/20",
        desc: "Your infrastructure is primed for advanced AI integration. We can immediately start building custom LLM agents or predictive models.",
        action: "Book Strategy Session"
      };
    }
    if (score >= 20) {
      return {
        level: "Moderately Ready",
        color: "text-brand-cyan",
        bg: "bg-brand-cyan/20",
        desc: "You have a good foundation, but we need to centralize your data first. We recommend starting with workflow automation before advanced AI.",
        action: "Book Free Consultation"
      };
    }
    return {
      level: "Early Stage",
      color: "text-brand-fuchsia",
      bg: "bg-brand-fuchsia/20",
      desc: "Your business needs digital transformation before AI can be effective. We recommend starting with custom software development to digitize your operations.",
      action: "Request Digital Audit"
    };
  };

  const result = getResult();

  return (
    <div className="w-full max-w-3xl mx-auto bg-brand-dark/50 border border-white/5 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
        <motion.div 
          className="h-full bg-brand-cyan"
          initial={{ width: '0%' }}
          animate={{ width: `${((step - 1) / 5) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="p-8 md:p-12 min-h-[450px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {step < 6 ? (
            <motion.div 
              key={`q-${step}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-2 text-brand-cyan font-bold text-sm tracking-widest uppercase mb-4">
                <Activity size={16} /> Question {step} of 5
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-white leading-tight">
                {questions[step - 1].title}
              </h3>
              
              <div className="space-y-3">
                {questions[step - 1].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(opt.score)}
                    className="w-full text-left p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all font-medium text-slate-300 hover:text-white"
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className={cn("inline-flex items-center justify-center w-20 h-20 rounded-full mb-6", result.bg, result.color)}>
                <BrainCircuit size={40} />
              </div>
              
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">AI Readiness Score: {score}/50</div>
              <h3 className={cn("text-4xl font-heading font-extrabold mb-4", result.color)}>
                {result.level}
              </h3>
              
              <p className="text-slate-300 mb-8 max-w-lg mx-auto text-lg leading-relaxed">
                {result.desc}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-white text-black rounded-xl font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    {result.action} <ArrowRight size={18} />
                  </button>
                </Link>
                <button onClick={() => { setStep(1); setScore(0); }} className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-xl font-bold hover:bg-white/5 transition-colors">
                  Retake Assessment
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
