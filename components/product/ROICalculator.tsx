'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign, TrendingUp } from 'lucide-react';

export default function ROICalculator() {
  const [hiresPerMonth, setHiresPerMonth] = useState(5);
  
  // Assumptions based on industry averages
  const manualHoursPerHire = 35; // Hours spent sourcing, screening, interviewing
  const aiHoursPerHire = 4; // Hours spent only on final round
  const avgRecruiterHourlyRate = 45; // $45/hour
  
  const hoursSavedPerHire = manualHoursPerHire - aiHoursPerHire;
  const totalHoursSaved = hoursSavedPerHire * hiresPerMonth;
  const totalMoneySaved = totalHoursSaved * avgRecruiterHourlyRate;

  return (
    <div className="w-full max-w-4xl mx-auto p-8 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-xl relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-fuchsia/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="text-center mb-10 relative z-10">
        <h3 className="text-3xl font-heading font-extrabold text-white mb-4">Calculate Your ROI</h3>
        <p className="text-slate-400">See exactly how much time and budget SkillyTalk saves your hiring team.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 relative z-10">
        {/* Input Side */}
        <div className="space-y-8 flex flex-col justify-center">
          <div>
            <div className="flex justify-between items-end mb-4">
              <label className="text-lg font-bold text-white">Hires Per Month</label>
              <div className="text-3xl font-black text-brand-fuchsia">{hiresPerMonth}</div>
            </div>
            <input 
              type="range" 
              min="1" 
              max="50" 
              value={hiresPerMonth} 
              onChange={(e) => setHiresPerMonth(Number(e.target.value))}
              className="w-full h-3 bg-white/10 rounded-full appearance-none cursor-pointer accent-brand-fuchsia"
            />
            <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-widest mt-3">
              <span>1 Hire</span>
              <span>50 Hires</span>
            </div>
          </div>
          
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Industry Averages Used</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex justify-between"><span>Manual Time Per Hire</span> <span>35 Hours</span></li>
              <li className="flex justify-between text-brand-cyan"><span>SkillyTalk Time Per Hire</span> <span>4 Hours</span></li>
            </ul>
          </div>
        </div>

        {/* Output Side */}
        <div className="grid gap-6">
          <motion.div 
            key={`hours-${hiresPerMonth}`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-brand-cyan/20 to-transparent border border-brand-cyan/30 flex items-center gap-6 shadow-[0_0_30px_rgba(34,211,238,0.1)]"
          >
            <div className="w-14 h-14 rounded-full bg-brand-cyan/20 text-brand-cyan flex items-center justify-center shrink-0">
              <Clock size={28} />
            </div>
            <div>
              <div className="text-sm font-bold text-brand-cyan uppercase tracking-widest mb-1">Hours Saved / Month</div>
              <div className="text-4xl font-black text-white">{totalHoursSaved.toLocaleString()} <span className="text-xl text-slate-400 font-medium">hrs</span></div>
            </div>
          </motion.div>

          <motion.div 
            key={`money-${hiresPerMonth}`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-brand-fuchsia/20 to-transparent border border-brand-fuchsia/30 flex items-center gap-6 shadow-[0_0_30px_rgba(217,70,239,0.1)]"
          >
            <div className="w-14 h-14 rounded-full bg-brand-fuchsia/20 text-brand-fuchsia flex items-center justify-center shrink-0">
              <DollarSign size={28} />
            </div>
            <div>
              <div className="text-sm font-bold text-brand-fuchsia uppercase tracking-widest mb-1">Budget Saved / Month</div>
              <div className="text-4xl font-black text-white">${totalMoneySaved.toLocaleString()}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
