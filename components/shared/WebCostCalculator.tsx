'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, RefreshCw, Calculator, Wrench } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export default function WebCostCalculator() {
  const [platformType, setPlatformType] = useState<'marketing' | 'webapp' | 'ecommerce' | 'marketplace'>('webapp');
  const [pagesScale, setPagesScale] = useState<number>(10);
  const [designTier, setDesignTier] = useState<'standard' | 'custom' | 'bespoke'>('custom');
  const [cmsNeeded, setCmsNeeded] = useState<boolean>(true);
  const [integrationsCount, setIntegrationsCount] = useState<number>(2);
  const [internationalization, setInternationalization] = useState<boolean>(false);

  // Calculate scope estimate
  const calculateScope = () => {
    let baseHours = 80;
    let baseCost = 4000;

    if (platformType === 'marketing') {
      baseHours = 60 + pagesScale * 4;
      baseCost = 3500 + pagesScale * 250;
    } else if (platformType === 'webapp') {
      baseHours = 120 + pagesScale * 6;
      baseCost = 7500 + pagesScale * 400;
    } else if (platformType === 'ecommerce') {
      baseHours = 140 + pagesScale * 8;
      baseCost = 9000 + pagesScale * 500;
    } else {
      // marketplace
      baseHours = 200 + pagesScale * 10;
      baseCost = 14000 + pagesScale * 600;
    }

    if (designTier === 'custom') {
      baseHours += 30;
      baseCost += 2000;
    } else if (designTier === 'bespoke') {
      baseHours += 60;
      baseCost += 4500;
    }

    if (cmsNeeded) {
      baseHours += 20;
      baseCost += 1200;
    }

    baseHours += integrationsCount * 15;
    baseCost += integrationsCount * 900;

    if (internationalization) {
      baseHours += 25;
      baseCost += 1800;
    }

    const sprintWeeks = Math.ceil(baseHours / 35);
    return {
      hours: baseHours,
      minCost: Math.round(baseCost * 0.9 / 100) * 100,
      maxCost: Math.round(baseCost * 1.2 / 100) * 100,
      weeks: Math.max(3, sprintWeeks),
    };
  };

  const scope = calculateScope();

  return (
    <div className="bg-brand-dark/90 border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl backdrop-blur-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <label className="text-xs font-mono uppercase text-brand-cyan font-bold tracking-wider block mb-2">
              1. Platform Architecture Type
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'marketing', label: 'Commercial Marketing' },
                { id: 'webapp', label: 'Full-Stack Web App' },
                { id: 'ecommerce', label: 'Shopify / Next.js Store' },
                { id: 'marketplace', label: 'Multi-Vendor Marketplace' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setPlatformType(item.id as any)}
                  className={`p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                    platformType === item.id
                      ? 'bg-brand-cyan/10 border-brand-cyan text-white'
                      : 'bg-white/5 border-white/5 text-slate-300 hover:border-white/20'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-mono uppercase text-brand-cyan font-bold tracking-wider">
                2. Key Unique Views / Templates
              </label>
              <span className="text-xs font-mono text-white font-bold">{pagesScale} views</span>
            </div>
            <input
              type="range"
              min="5"
              max="40"
              step="5"
              value={pagesScale}
              onChange={(e) => setPagesScale(parseInt(e.target.value, 10))}
              className="w-full accent-brand-cyan cursor-pointer"
            />
          </div>

          <div>
            <label className="text-xs font-mono uppercase text-brand-cyan font-bold tracking-wider block mb-2">
              3. Visual Design System Tier
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'standard', label: 'Clean Design System' },
                { id: 'custom', label: 'Custom Illustrated / Micro-Animations' },
                { id: 'bespoke', label: 'Luxury / 3D WebGL Bespoke' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setDesignTier(item.id as any)}
                  className={`p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                    designTier === item.id
                      ? 'bg-brand-violet/10 border-brand-violet text-white'
                      : 'bg-white/5 border-white/5 text-slate-300 hover:border-white/20'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-white/5 grid grid-cols-2 gap-4">
            <label className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5 cursor-pointer text-xs text-slate-300">
              <input
                type="checkbox"
                checked={cmsNeeded}
                onChange={(e) => setCmsNeeded(e.target.checked)}
                className="rounded accent-brand-cyan"
              />
              <span>Headless CMS Integration</span>
            </label>

            <label className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5 cursor-pointer text-xs text-slate-300">
              <input
                type="checkbox"
                checked={internationalization}
                onChange={(e) => setInternationalization(e.target.checked)}
                className="rounded accent-brand-cyan"
              />
              <span>Multi-Language (i18n)</span>
            </label>
          </div>
        </div>

        {/* Output Projection Column */}
        <div className="lg:col-span-5 bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold block">
              Estimated Engineering Scope
            </span>

            <div>
              <span className="text-3xl md:text-4xl font-heading font-extrabold text-white">
                ${scope.minCost.toLocaleString()} – ${scope.maxCost.toLocaleString()}
              </span>
              <span className="text-xs text-slate-400 block mt-1">
                Estimated fixed-milestone investment range
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase">Timeline</span>
                <span className="text-lg font-heading font-bold text-brand-cyan">
                  {scope.weeks}–{scope.weeks + 2} Weeks
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase">Est. Sprints</span>
                <span className="text-lg font-heading font-bold text-white">
                  {Math.ceil(scope.weeks / 2)} Sprints
                </span>
              </div>
            </div>

            <ul className="space-y-2 pt-4 border-t border-white/10 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-brand-cyan" />
                <span>Next.js App Router with Server-Side Rendering</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-brand-cyan" />
                <span>100% Full Source Code & IP Ownership</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-brand-cyan" />
                <span>Automated CI/CD & Production Cloud Deployment</span>
              </li>
            </ul>
          </div>

          <Link
            href="/contact"
            onClick={() => trackEvent('estimate_click', { location: 'web_cost_calculator' })}
            className="w-full py-4 bg-gradient-to-r from-brand-cyan to-brand-violet text-brand-dark rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:brightness-110 transition-all"
          >
            <span>Request Detailed Technical Proposal</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
