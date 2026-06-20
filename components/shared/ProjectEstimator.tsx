'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Smartphone, Bot, Zap, Clock, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

type Step = 1 | 2 | 3 | 4;

export default function ProjectEstimator() {
  const [step, setStep] = useState<Step>(1);
  const [selections, setSelections] = useState({
    type: '',
    aiNeeded: false,
    timeline: ''
  });

  const handleNext = () => setStep(prev => Math.min(prev + 1, 4) as Step);
  
  const generateEstimate = () => {
    let baseTime = "4-8 Weeks";
    if (selections.type === 'Platform') baseTime = "3-4 Months";
    if (selections.type === 'Mobile App') baseTime = "2-3 Months";
    
    return {
      timeline: baseTime,
      features: [
        selections.type === 'Platform' ? "Scalable Microservices" : "Custom Architecture",
        selections.aiNeeded ? "AI/ML Integration" : "Standard Automation",
        "Enterprise Security",
        "Performance Optimization"
      ]
    };
  };

  const estimate = generateEstimate();

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden shadow-2xl relative">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
        <motion.div 
          className="h-full bg-brand-cyan"
          initial={{ width: '25%' }}
          animate={{ width: `${(step / 4) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="p-8 md:p-12 min-h-[400px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {/* STEP 1: Type of Project */}
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="text-center mb-8">
                <div className="text-brand-cyan font-bold text-sm tracking-widest uppercase mb-2">Step 1 of 3</div>
                <h3 className="text-3xl font-heading font-extrabold text-white">What are we building?</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { id: 'Web App', icon: Code, desc: "Custom web applications" },
                  { id: 'Mobile App', icon: Smartphone, desc: "iOS & Android solutions" },
                  { id: 'Platform', icon: ShieldCheck, desc: "Enterprise SaaS platforms" }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelections({ ...selections, type: item.id });
                      handleNext();
                    }}
                    className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-brand-cyan/10 hover:border-brand-cyan/30 text-left transition-all group flex flex-col gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-brand-cyan group-hover:text-black transition-colors">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white mb-1">{item.id}</div>
                      <div className="text-sm text-slate-400">{item.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 2: AI Integration */}
          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="text-center mb-8">
                <div className="text-brand-fuchsia font-bold text-sm tracking-widest uppercase mb-2">Step 2 of 3</div>
                <h3 className="text-3xl font-heading font-extrabold text-white">Need AI superpower?</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => {
                    setSelections({ ...selections, aiNeeded: true });
                    handleNext();
                  }}
                  className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-brand-fuchsia/10 hover:border-brand-fuchsia/30 text-left transition-all group flex gap-6 items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-brand-fuchsia group-hover:text-white transition-colors shrink-0">
                    <Bot size={32} />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white mb-2">Yes, add AI</div>
                    <div className="text-sm text-slate-400">Automate workflows, add smart chatbots, or predictive analytics.</div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    setSelections({ ...selections, aiNeeded: false });
                    handleNext();
                  }}
                  className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-left transition-all group flex gap-6 items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                    <Zap size={32} />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white mb-2">No, just core tech</div>
                    <div className="text-sm text-slate-400">Standard, high-performance software architecture.</div>
                  </div>
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Timeline */}
          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="text-center mb-8">
                <div className="text-brand-cyan font-bold text-sm tracking-widest uppercase mb-2">Step 3 of 3</div>
                <h3 className="text-3xl font-heading font-extrabold text-white">How fast do you need it?</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                {["ASAP (Rush)", "1-3 Months", "Flexible"].map((time) => (
                  <button
                    key={time}
                    onClick={() => {
                      setSelections({ ...selections, timeline: time });
                      handleNext();
                    }}
                    className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-brand-cyan/10 hover:border-brand-cyan/30 text-center transition-all group"
                  >
                    <Clock size={32} className="mx-auto mb-4 text-slate-400 group-hover:text-brand-cyan" />
                    <div className="text-lg font-bold text-white">{time}</div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 4: Results */}
          {step === 4 && (
            <motion.div 
              key="step4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 text-green-400 mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-4xl font-heading font-extrabold text-white mb-4">Your Custom Roadmap</h3>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto">Based on your inputs, here is a rough estimate for your {selections.type} project.</p>
              
              <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto mb-10">
                <div className="p-6 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/30">
                  <div className="text-sm font-bold text-brand-cyan uppercase tracking-widest mb-2">Estimated Timeline</div>
                  <div className="text-3xl font-black text-white">{estimate.timeline}</div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Core Architecture</div>
                  <ul className="space-y-2">
                    {estimate.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-white">
                        <CheckCircle2 size={16} className="text-brand-cyan" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/contact" 
                  onClick={(e) => { 
                    if (window.location.pathname === '/contact') {
                      e.preventDefault(); 
                      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' }); 
                    }
                  }}
                  className="w-full sm:w-auto"
                >
                  <button className="w-full px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-colors shadow-xl flex items-center justify-center gap-2">
                    Contact Us <ArrowRight size={20} />
                  </button>
                </Link>
                
                <Link 
                  href={`https://wa.me/918770283188?text=${encodeURIComponent(`Hi Vidhyonix! I used your Project Estimator. I would like to build a ${selections.type}${selections.aiNeeded ? ' with AI capabilities' : ''}. My timeline is: ${selections.timeline}.`)}`} 
                  target="_blank"
                  className="w-full sm:w-auto"
                >
                  <button className="w-full px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-xl transition-colors shadow-xl flex items-center justify-center gap-2">
                    WhatsApp Us <ArrowRight size={20} />
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
