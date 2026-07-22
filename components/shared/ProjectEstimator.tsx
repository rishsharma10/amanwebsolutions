'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Smartphone, Bot, Zap, Clock, ShieldCheck, ArrowRight, CheckCircle2, Users, LayoutTemplate, Link as LinkIcon, Database, DollarSign } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export default function ProjectEstimator() {
  const [step, setStep] = useState<Step>(1);
  const [selections, setSelections] = useState({
    platform: '',
    type: '',
    features: [] as string[],
    aiNeeded: '',
    users: '',
    integrations: [] as string[],
    timeline: ''
  });

  const nextStep = () => setStep(prev => Math.min(prev + 1, 8) as Step);
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1) as Step);

  const toggleArraySelection = (key: 'features' | 'integrations', value: string) => {
    setSelections(prev => {
      const current = prev[key];
      if (current.includes(value)) {
        return { ...prev, [key]: current.filter(item => item !== value) };
      } else {
        return { ...prev, [key]: [...current, value] };
      }
    });
  };

  const generateEstimate = () => {
    let minBudget = 10;
    let maxBudget = 25;
    let baseTime = "4-8 Weeks";
    let teamSize = "2-3 Experts";

    // Adjust logic based on selections
    if (selections.platform === 'Mobile App' || selections.platform === 'Enterprise System') {
      minBudget += 15;
      maxBudget += 25;
      baseTime = "3-5 Months";
      teamSize = "4-6 Experts";
    }

    if (selections.aiNeeded.includes('Yes')) {
      minBudget += 10;
      maxBudget += 20;
    }

    if (selections.users === '10,000+' || selections.users === '100,000+') {
      minBudget += 20;
      maxBudget += 40;
      teamSize = "5-8 Experts";
    }

    return {
      budget: `$${minBudget}k - $${maxBudget}k+`,
      timeline: baseTime,
      teamSize,
      features: [
        selections.platform,
        selections.aiNeeded.includes('Yes') ? "AI/ML Integration" : "Core Automation",
        `${selections.features.length} Premium Features`,
        "Scalable Infrastructure"
      ]
    };
  };

  const estimate = generateEstimate();

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl bg-brand-dark/80 border border-white/10 backdrop-blur-xl overflow-hidden shadow-2xl relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
        <motion.div 
          className="h-full bg-brand-cyan"
          initial={{ width: '12.5%' }}
          animate={{ width: `${(step / 8) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="p-8 md:p-12 min-h-[500px] flex flex-col justify-center">
        {step > 1 && step < 8 && (
          <button 
            onClick={prevStep}
            className="absolute top-8 left-8 text-slate-400 hover:text-white flex items-center gap-2 transition-colors text-sm font-medium"
          >
            <ArrowRight size={16} className="rotate-180" /> Back
          </button>
        )}

        <AnimatePresence mode="wait">
          {/* STEP 1: Platform */}
          {step === 1 && (
            <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
              <div className="text-center mb-8">
                <div className="text-brand-cyan font-bold text-sm tracking-widest uppercase mb-2">Step 1 of 7</div>
                <h3 className="text-3xl font-heading font-extrabold text-white">Target Platform</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { id: 'Web App', icon: LayoutTemplate, desc: "Accessible via browser" },
                  { id: 'Mobile App', icon: Smartphone, desc: "iOS & Android native" },
                  { id: 'Enterprise System', icon: Database, desc: "Internal software/SaaS" }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => { setSelections({ ...selections, platform: item.id }); nextStep(); }}
                    className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-brand-cyan/10 hover:border-brand-cyan/30 text-left transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-brand-cyan group-hover:text-black mb-4">
                      <item.icon size={24} />
                    </div>
                    <div className="text-lg font-bold text-white mb-1">{item.id}</div>
                    <div className="text-sm text-slate-400">{item.desc}</div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 2: Project Type */}
          {step === 2 && (
            <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
              <div className="text-center mb-8">
                <div className="text-brand-cyan font-bold text-sm tracking-widest uppercase mb-2">Step 2 of 7</div>
                <h3 className="text-3xl font-heading font-extrabold text-white">Project Type</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {['Build from scratch (MVP)', 'Redesign existing product', 'Add features to existing product', 'Complete digital transformation'].map((type) => (
                  <button
                    key={type}
                    onClick={() => { setSelections({ ...selections, type }); nextStep(); }}
                    className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-brand-fuchsia/10 hover:border-brand-fuchsia/30 text-left transition-all group"
                  >
                    <div className="text-lg font-bold text-white">{type}</div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 3: Features */}
          {step === 3 && (
            <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
              <div className="text-center mb-8">
                <div className="text-brand-cyan font-bold text-sm tracking-widest uppercase mb-2">Step 3 of 7</div>
                <h3 className="text-3xl font-heading font-extrabold text-white">Select Key Features</h3>
                <p className="text-slate-400 text-sm mt-2">Select all that apply</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {['User Authentication', 'Payment Gateway', 'Dashboards/Analytics', 'Chat/Messaging', 'Maps/Geolocation', 'Push Notifications', 'File Uploads', 'Multi-Language'].map((feature) => (
                  <button
                    key={feature}
                    onClick={() => toggleArraySelection('features', feature)}
                    className={cn(
                      "p-4 rounded-xl border text-sm font-bold transition-all",
                      selections.features.includes(feature) 
                        ? "bg-brand-violet text-white border-brand-violet shadow-[0_0_15px_rgba(139,92,246,0.3)]" 
                        : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    {feature}
                  </button>
                ))}
              </div>
              <div className="text-center">
                <button onClick={nextStep} className="px-8 py-3 bg-brand-cyan text-brand-dark rounded-xl font-bold hover:bg-white transition-colors">
                  Continue
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 4: AI Capabilities */}
          {step === 4 && (
            <motion.div key="s4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
              <div className="text-center mb-8">
                <div className="text-brand-cyan font-bold text-sm tracking-widest uppercase mb-2">Step 4 of 7</div>
                <h3 className="text-3xl font-heading font-extrabold text-white">AI Capabilities</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => { setSelections({ ...selections, aiNeeded: 'Yes, heavy AI integration' }); nextStep(); }}
                  className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-brand-cyan/20 hover:border-brand-cyan/50 text-left transition-all flex items-center gap-4"
                >
                  <Bot size={32} className="text-brand-cyan" />
                  <div>
                    <div className="text-lg font-bold text-white mb-1">Yes, integrate AI</div>
                    <div className="text-sm text-slate-400">Chatbots, automation, predictive analytics.</div>
                  </div>
                </button>
                <button
                  onClick={() => { setSelections({ ...selections, aiNeeded: 'No AI needed right now' }); nextStep(); }}
                  className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-left transition-all flex items-center gap-4"
                >
                  <Zap size={32} className="text-slate-400" />
                  <div>
                    <div className="text-lg font-bold text-white mb-1">No AI required</div>
                    <div className="text-sm text-slate-400">Standard software functionality only.</div>
                  </div>
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 5: Number of Users */}
          {step === 5 && (
            <motion.div key="s5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
              <div className="text-center mb-8">
                <div className="text-brand-cyan font-bold text-sm tracking-widest uppercase mb-2">Step 5 of 7</div>
                <h3 className="text-3xl font-heading font-extrabold text-white">Expected User Base</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['< 1,000', '1,000 - 10,000', '10,000+', '100,000+ (Enterprise)'].map((size) => (
                  <button
                    key={size}
                    onClick={() => { setSelections({ ...selections, users: size }); nextStep(); }}
                    className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-brand-fuchsia/20 hover:border-brand-fuchsia/50 text-center transition-all"
                  >
                    <Users size={24} className="mx-auto mb-3 text-brand-fuchsia" />
                    <div className="text-sm font-bold text-white">{size}</div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 6: Integrations */}
          {step === 6 && (
            <motion.div key="s6" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
              <div className="text-center mb-8">
                <div className="text-brand-cyan font-bold text-sm tracking-widest uppercase mb-2">Step 6 of 7</div>
                <h3 className="text-3xl font-heading font-extrabold text-white">Third-Party Integrations</h3>
                <p className="text-slate-400 text-sm mt-2">Select all that apply</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {['CRM (Salesforce/HubSpot)', 'ERP Systems', 'Payment Gateways (Stripe)', 'Marketing Tools', 'Social Media APIs', 'Custom Legacy APIs'].map((integration) => (
                  <button
                    key={integration}
                    onClick={() => toggleArraySelection('integrations', integration)}
                    className={cn(
                      "p-4 rounded-xl border text-sm font-bold transition-all flex items-center gap-2",
                      selections.integrations.includes(integration) 
                        ? "bg-brand-cyan/20 text-white border-brand-cyan shadow-[0_0_15px_rgba(34,211,238,0.2)]" 
                        : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    <LinkIcon size={14} className={selections.integrations.includes(integration) ? "text-brand-cyan" : "text-slate-500"} />
                    {integration}
                  </button>
                ))}
              </div>
              <div className="text-center">
                <button onClick={nextStep} className="px-8 py-3 bg-brand-cyan text-brand-dark rounded-xl font-bold hover:bg-white transition-colors">
                  Continue
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 7: Timeline */}
          {step === 7 && (
            <motion.div key="s7" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
              <div className="text-center mb-8">
                <div className="text-brand-cyan font-bold text-sm tracking-widest uppercase mb-2">Step 7 of 7</div>
                <h3 className="text-3xl font-heading font-extrabold text-white">Expected Timeline</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {["ASAP (Rush)", "1-3 Months", "Flexible"].map((time) => (
                  <button
                    key={time}
                    onClick={() => { setSelections({ ...selections, timeline: time }); nextStep(); }}
                    className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-brand-violet/20 hover:border-brand-violet/50 text-center transition-all group"
                  >
                    <Clock size={32} className="mx-auto mb-4 text-slate-400 group-hover:text-brand-violet" />
                    <div className="text-lg font-bold text-white">{time}</div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 8: Results */}
          {step === 8 && (
            <motion.div key="s8" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-cyan/20 text-brand-cyan mb-6 border border-brand-cyan/30">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-4xl font-heading font-extrabold text-white mb-4">Your Custom Estimate</h3>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto">Based on your requirement for a {selections.platform}, here is your preliminary projection.</p>
              
              <div className="grid md:grid-cols-3 gap-4 text-left max-w-4xl mx-auto mb-10">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-cyan/50 transition-colors">
                  <div className="text-xs font-bold text-brand-cyan uppercase tracking-widest mb-2 flex items-center gap-2"><DollarSign size={14}/> Budget Range</div>
                  <div className="text-2xl font-black text-white">{estimate.budget}</div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-fuchsia/50 transition-colors">
                  <div className="text-xs font-bold text-brand-fuchsia uppercase tracking-widest mb-2 flex items-center gap-2"><Clock size={14}/> Est. Timeline</div>
                  <div className="text-2xl font-black text-white">{estimate.timeline}</div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-violet/50 transition-colors">
                  <div className="text-xs font-bold text-brand-violet uppercase tracking-widest mb-2 flex items-center gap-2"><Users size={14}/> Team Size</div>
                  <div className="text-2xl font-black text-white">{estimate.teamSize}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact" onClick={(e) => { if (window.location.pathname === '/contact') { e.preventDefault(); document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' }); } }} className="w-full sm:w-auto">
                  <button className="w-full px-8 py-4 bg-brand-cyan text-brand-dark font-bold rounded-xl hover:bg-white transition-colors shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center justify-center gap-2">
                    Book Detailed Consultation <ArrowRight size={20} />
                  </button>
                </Link>
                
                <Link href={`https://wa.me/918770283188?text=${encodeURIComponent(`Hi Vidhyonix! I used your Cost Estimator. I'm looking for a ${selections.platform} with a budget around ${estimate.budget}.`)}`} target="_blank" className="w-full sm:w-auto">
                  <button className="w-full px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2">
                    Discuss on WhatsApp
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
