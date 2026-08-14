'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingDown, Clock, Banknote, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type CalcType = 'Support' | 'Automation' | 'Hiring';

export default function ROICalculator() {
  const [activeTab, setActiveTab] = useState<CalcType>('Support');
  
  // Inputs
  const [supportTickets, setSupportTickets] = useState(1000);
  const [costPerTicket, setCostPerTicket] = useState(15);
  
  const [manualHours, setManualHours] = useState(160);
  const [hourlyRate, setHourlyRate] = useState(35);
  
  const [newHires, setNewHires] = useState(3);
  const [salary, setSalary] = useState(60000);

  // Calculations
  const calculateSupportROI = () => {
    const currentMonthlyCost = supportTickets * costPerTicket;
    const aiDeflectionRate = 0.60; // AI handles 60% of tickets
    const newMonthlyCost = (supportTickets * (1 - aiDeflectionRate)) * costPerTicket;
    const monthlySavings = currentMonthlyCost - newMonthlyCost;
    const annualSavings = monthlySavings * 12;
    return { annualSavings, efficiency: '60% Ticket Deflection' };
  };

  const calculateAutomationROI = () => {
    const currentMonthlyCost = manualHours * hourlyRate;
    const aiTimeReduction = 0.80; // 80% time saved
    const newMonthlyCost = (manualHours * (1 - aiTimeReduction)) * hourlyRate;
    const monthlySavings = currentMonthlyCost - newMonthlyCost;
    const annualSavings = monthlySavings * 12;
    return { annualSavings, efficiency: '80% Time Recovered' };
  };

  const calculateHiringROI = () => {
    const totalSalaryCost = newHires * salary;
    // AI agent replaces need for 2/3 of new operational hires
    const aiCoverage = 0.66;
    const annualSavings = totalSalaryCost * aiCoverage;
    return { annualSavings, efficiency: '66% Headcount Avoidance' };
  };

  const getActiveROI = () => {
    if (activeTab === 'Support') return calculateSupportROI();
    if (activeTab === 'Automation') return calculateAutomationROI();
    return calculateHiringROI();
  };

  const { annualSavings, efficiency } = getActiveROI();

  return (
    <div className="w-full max-w-5xl mx-auto bg-brand-dark/50 border border-white/5 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md">
      <div className="grid lg:grid-cols-2">
        {/* Left Side: Inputs */}
        <div className="p-6 sm:p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/5">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-brand-cyan/20 rounded-xl text-brand-cyan">
              <Calculator size={24} />
            </div>
            <h3 className="text-2xl font-heading font-bold text-white">ROI Calculator</h3>
          </div>

          <div className="flex gap-1.5 mb-8 bg-white/5 p-1 rounded-xl w-full">
            {(['Support', 'Automation', 'Hiring'] as CalcType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "flex-1 text-center py-2 rounded-lg text-xs sm:text-sm font-bold transition-all",
                  activeTab === tab ? "bg-white text-black shadow-md" : "text-slate-400 hover:text-white"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="space-y-8">
            {activeTab === 'Support' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300 font-medium">Monthly Support Tickets</span>
                    <span className="text-brand-cyan font-bold">{supportTickets.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="10000"
                    step="100"
                    value={supportTickets}
                    aria-label="Monthly Support Tickets"
                    onChange={(e) => setSupportTickets(Number(e.target.value))}
                    className="w-full accent-brand-cyan h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300 font-medium">Avg Cost Per Ticket ($)</span>
                    <span className="text-brand-cyan font-bold">${costPerTicket}</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    step="1"
                    value={costPerTicket}
                    aria-label="Average Cost Per Ticket"
                    onChange={(e) => setCostPerTicket(Number(e.target.value))}
                    className="w-full accent-brand-cyan h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </motion.div>
            )}

            {activeTab === 'Automation' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300 font-medium">Manual Hours Per Month</span>
                    <span className="text-brand-fuchsia font-bold">{manualHours} hrs</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="1000"
                    step="10"
                    value={manualHours}
                    aria-label="Manual Hours Per Month"
                    onChange={(e) => setManualHours(Number(e.target.value))}
                    className="w-full accent-brand-fuchsia h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300 font-medium">Avg Hourly Rate ($)</span>
                    <span className="text-brand-fuchsia font-bold">${hourlyRate}</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="150"
                    step="5"
                    value={hourlyRate}
                    aria-label="Average Hourly Rate"
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full accent-brand-fuchsia h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </motion.div>
            )}

            {activeTab === 'Hiring' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300 font-medium">Planned New Hires</span>
                    <span className="text-brand-violet font-bold">{newHires}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    step="1"
                    value={newHires}
                    aria-label="Planned New Hires"
                    onChange={(e) => setNewHires(Number(e.target.value))}
                    className="w-full accent-brand-violet h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300 font-medium">Avg Annual Salary ($)</span>
                    <span className="text-brand-violet font-bold">${salary.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="30000"
                    max="150000"
                    step="5000"
                    value={salary}
                    aria-label="Average Annual Salary"
                    onChange={(e) => setSalary(Number(e.target.value))}
                    className="w-full accent-brand-violet h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Right Side: Results */}
        <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 blur-[100px] rounded-full" />
          
          <div className="relative z-10 text-center">
            <h4 className="text-slate-400 font-medium mb-4 uppercase tracking-widest text-sm">Estimated Annual Savings</h4>
            
            <div className="text-4xl sm:text-5xl md:text-7xl font-heading font-black text-white mb-8">
              ${annualSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <TrendingDown size={24} className="text-green-400 mx-auto mb-2" />
                <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Impact</div>
                <div className="text-sm font-bold text-white">{efficiency}</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <Clock size={24} className="text-brand-cyan mx-auto mb-2" />
                <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Payback Period</div>
                <div className="text-sm font-bold text-white">&lt; 3 Months</div>
              </div>
            </div>

            <Link
              href="/contact"
              className="w-full px-8 py-4 bg-white text-black rounded-xl font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] text-center text-sm md:text-base"
            >
              Claim Your Savings <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
