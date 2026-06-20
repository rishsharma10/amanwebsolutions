'use client';

import React, { useState } from 'react';
import { Download, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LeadMagnet() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      
      // Since there is no backend email provider connected (like Resend/SendGrid),
      // we trigger a direct file download in the browser instead.
      const link = document.createElement('a');
      link.href = '/2025_AI_Integration_Checklist.pdf'; // Real PDF file
      link.download = '2025_AI_Integration_Checklist.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="my-16 p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden bg-gradient-to-br from-brand-dark to-[#0a0a0a] border border-brand-cyan/20 shadow-2xl">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-fuchsia/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] bg-ai-grid bg-repeat pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
        {/* Left: Graphic */}
        <div className="w-32 h-32 shrink-0 rounded-3xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.15)]">
          <FileText size={48} className="text-brand-cyan" />
        </div>

        {/* Right: Content & Form */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-white mb-3">
            Free Download: <span className="ai-gradient-text">2025 AI Integration Checklist</span>
          </h3>
          <p className="text-slate-400 mb-6">
            Stop guessing. Download our 10-point checklist to see exactly how and where to implement AI in your business for maximum ROI.
          </p>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-cyan/50 transition-colors"
                />
                <button 
                  type="submit"
                  className="px-8 py-4 bg-brand-cyan hover:bg-cyan-400 text-black font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] flex items-center justify-center gap-2"
                >
                  Download PDF <Download size={18} />
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400"
              >
                <CheckCircle2 size={24} />
                <div className="text-left">
                  <div className="font-bold">Success!</div>
                  <div className="text-sm text-green-400/80">Your download has started automatically.</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
