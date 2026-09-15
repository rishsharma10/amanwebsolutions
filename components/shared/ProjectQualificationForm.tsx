'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, ArrowLeft, CheckCircle2, AlertCircle,
  Loader2, Sparkles, Send, ShieldCheck
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export default function ProjectQualificationForm() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    projectType: '',
    stage: '',
    budget: '',
    timeline: '',
    name: '',
    company: '',
    email: '',
    phone: '',
    details: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const projectTypes = [
    'AI / Automation',
    'SaaS Platform',
    'Web Application',
    'Mobile App',
    'Ecommerce Technology',
    'Custom Software',
    'Startup MVP',
    'Other'
  ];

  const stages = [
    'Idea & Concept',
    'Planning & Scoping',
    'Existing Product Scaling',
    'Existing Business Modernization',
    'Rebuilding Legacy System'
  ];

  const budgets = [
    '< $10,000 (Consulting / MVP Validation)',
    '$10,000 – $25,000 (Sprint Build)',
    '$25,000 – $50,000 (Full Platform)',
    '$50,000+ (Enterprise Architecture)',
    'Not sure yet'
  ];

  const timelines = [
    'ASAP (Immediate Start)',
    '1–3 Months',
    '3–6 Months',
    '6+ Months',
    'Flexible'
  ];

  const handleSelectOption = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[field];
      return copy;
    });
  };

  const validateStep = (currentStep: number): boolean => {
    const errs: Record<string, string> = {};

    if (currentStep === 1 && !formData.projectType) {
      errs.projectType = 'Please select what you are looking to build.';
    }
    if (currentStep === 2 && !formData.stage) {
      errs.stage = 'Please select your current project stage.';
    }
    if (currentStep === 3 && !formData.budget) {
      errs.budget = 'Please select an estimated budget range.';
    }
    if (currentStep === 4 && !formData.timeline) {
      errs.timeline = 'Please select your target launch timeline.';
    }
    if (currentStep === 5) {
      if (!formData.name.trim()) errs.name = 'Full name is required.';
      if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errs.email = 'A valid work email is required.';
      }
      if (!formData.details.trim() || formData.details.length < 15) {
        errs.details = 'Please describe your requirements in at least 15 characters.';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      trackEvent('form_start', { step, projectType: formData.projectType });
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(5)) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    trackEvent('form_submit', { projectType: formData.projectType, stage: formData.stage });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service: formData.projectType,
          stage: formData.stage,
          budget: formData.budget,
          timeline: formData.timeline,
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          details: formData.details,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitStatus('success');
        trackEvent('form_success', { projectType: formData.projectType });
        trackEvent('lead_generated', { category: formData.projectType });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Failed to submit qualification request. Please try again.');
        trackEvent('form_error', { error: data.error });
      }
    } catch (err: any) {
      setSubmitStatus('error');
      setErrorMessage('A network error occurred. Please check your connection and try again.');
      trackEvent('form_error', { error: 'Network Error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-brand-dark/95 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
      {/* Progress Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-2">
          <span>STEP {step} OF 5</span>
          <span className="text-brand-cyan">{Math.round((step / 5) * 100)}% COMPLETED</span>
        </div>
        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-brand-cyan to-brand-violet transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>
      </div>

      {submitStatus === 'success' ? (
        <div className="text-center py-12 space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 size={36} />
          </div>
          <div className="space-y-2 max-w-md mx-auto">
            <h3 className="text-2xl font-heading font-extrabold text-white">
              Project Assessment Request Received
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Thank you, <strong className="text-white">{formData.name}</strong>. We have sent a confirmation to <span className="text-brand-cyan">{formData.email}</span>. A senior engineering architect will review your project details and reach out within 1 business day.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-400 max-w-sm mx-auto">
            Direct Urgent Contact: <strong className="text-white">+91 8770283188</strong>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <AnimatePresence mode="wait">
            {/* Step 1: What are you looking to build? */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-1">
                    What are you looking to build?
                  </h3>
                  <p className="text-xs text-slate-400">
                    Select the category that best matches your target software system.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => handleSelectOption('projectType', type)}
                      className={`p-4 rounded-2xl border text-left text-sm font-medium transition-all ${
                        formData.projectType === type
                          ? 'bg-brand-cyan/15 border-brand-cyan text-white shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                          : 'bg-white/5 border-white/5 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                {errors.projectType && (
                  <p className="text-xs text-red-400 flex items-center gap-1.5 pt-1">
                    <AlertCircle size={13} /> {errors.projectType}
                  </p>
                )}
              </motion.div>
            )}

            {/* Step 2: What is your current stage? */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-1">
                    What is your current project stage?
                  </h3>
                  <p className="text-xs text-slate-400">
                    This helps our team prepare appropriate architectural benchmarks.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {stages.map((stg) => (
                    <button
                      key={stg}
                      type="button"
                      onClick={() => handleSelectOption('stage', stg)}
                      className={`w-full p-4 rounded-2xl border text-left text-sm font-medium transition-all ${
                        formData.stage === stg
                          ? 'bg-brand-violet/15 border-brand-violet text-white shadow-[0_0_15px_rgba(124,58,237,0.2)]'
                          : 'bg-white/5 border-white/5 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      {stg}
                    </button>
                  ))}
                </div>
                {errors.stage && (
                  <p className="text-xs text-red-400 flex items-center gap-1.5 pt-1">
                    <AlertCircle size={13} /> {errors.stage}
                  </p>
                )}
              </motion.div>
            )}

            {/* Step 3: Estimated Budget */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-1">
                    Estimated investment budget
                  </h3>
                  <p className="text-xs text-slate-400">
                    We scope milestone deliverables to match your funding boundaries.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {budgets.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => handleSelectOption('budget', b)}
                      className={`w-full p-4 rounded-2xl border text-left text-sm font-medium transition-all ${
                        formData.budget === b
                          ? 'bg-brand-cyan/15 border-brand-cyan text-white'
                          : 'bg-white/5 border-white/5 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
                {errors.budget && (
                  <p className="text-xs text-red-400 flex items-center gap-1.5 pt-1">
                    <AlertCircle size={13} /> {errors.budget}
                  </p>
                )}
              </motion.div>
            )}

            {/* Step 4: Timeline */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-1">
                    Target launch timeline
                  </h3>
                  <p className="text-xs text-slate-400">
                    How quickly do you need this operational system deployed?
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {timelines.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => handleSelectOption('timeline', time)}
                      className={`w-full p-4 rounded-2xl border text-left text-sm font-medium transition-all ${
                        formData.timeline === time
                          ? 'bg-emerald-500/15 border-emerald-500 text-white'
                          : 'bg-white/5 border-white/5 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                {errors.timeline && (
                  <p className="text-xs text-red-400 flex items-center gap-1.5 pt-1">
                    <AlertCircle size={13} /> {errors.timeline}
                  </p>
                )}
              </motion.div>
            )}

            {/* Step 5: Contact details & project description */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-1">
                    Final Step: Project & Contact Details
                  </h3>
                  <p className="text-xs text-slate-400">
                    Provide your contact details so our lead architect can prepare your assessment.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full p-3.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:border-brand-cyan focus:outline-none"
                    />
                    {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Company / Organization</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Acme Corp"
                      className="w-full p-3.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:border-brand-cyan focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Work Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@acmecorp.com"
                      className="w-full p-3.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:border-brand-cyan focus:outline-none"
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full p-3.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:border-brand-cyan focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Project Description & Requirements *</label>
                  <textarea
                    rows={4}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Briefly describe what problem this software solves, key integrations needed, or current workflow pain points..."
                    className="w-full p-3.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:border-brand-cyan focus:outline-none leading-relaxed"
                  />
                  {errors.details && <p className="text-xs text-red-400 mt-1">{errors.details}</p>}
                </div>

                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-500/15 border border-red-500/30 text-xs text-red-300 flex items-center gap-2">
                    <AlertCircle size={15} />
                    <span>{errorMessage}</span>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Controls Bottom Bar */}
          <div className="pt-6 border-t border-white/10 flex justify-between items-center">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono font-bold text-slate-300 flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft size={13} /> Back
              </button>
            ) : (
              <div />
            )}

            {step < 5 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-3 rounded-xl bg-brand-cyan hover:bg-white text-brand-dark text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              >
                <span>Continue</span>
                <ArrowRight size={14} />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-violet text-brand-dark text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-2 shadow-[0_0_25px_rgba(34,211,238,0.4)] disabled:opacity-50 transition-all"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    <span>Submitting Assessment...</span>
                  </>
                ) : (
                  <>
                    <span>Get My Project Assessment</span>
                    <Send size={14} />
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
