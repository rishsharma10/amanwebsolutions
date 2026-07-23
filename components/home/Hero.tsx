'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight, Sparkles, Zap, Shield, Cpu, Play,
  CheckCircle2, RefreshCw, Terminal, Loader2, Globe, Search, AlertTriangle
} from 'lucide-react';
import NeuralNetwork3D from '@/components/shared/NeuralNetwork3D';
import { APP_NAME } from '../layout/Footer';

// Helper to parse domain name from input URL
const getDomainName = (urlStr: string) => {
  let cleaned = urlStr.trim().toLowerCase();
  if (!cleaned) return 'yourwebsite.com';
  if (!cleaned.startsWith('http://') && !cleaned.startsWith('https://')) {
    cleaned = 'https://' + cleaned;
  }
  try {
    const parsed = new URL(cleaned);
    return parsed.hostname.replace('www.', '') || urlStr;
  } catch (e) {
    return urlStr;
  }
};

function ScoreCircle({ value, label }: { value: number; label: string }) {
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  let colorClass = 'text-red-500';
  let strokeColor = '#ef4444';
  if (value >= 90) {
    colorClass = 'text-green-500';
    strokeColor = '#22c55e';
  } else if (value >= 50) {
    colorClass = 'text-amber-500';
    strokeColor = '#f59e0b';
  }

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative w-12 h-12">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="24"
            cy="24"
            r={radius}
            className="stroke-white/10"
            strokeWidth="3"
            fill="transparent"
          />
          <circle
            cx="24"
            cy="24"
            r={radius}
            stroke={strokeColor}
            strokeWidth="3"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <span className={`absolute inset-0 flex items-center justify-center text-[11px] font-mono font-bold ${colorClass}`}>
          {value}
        </span>
      </div>
      <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{label}</span>
    </div>
  );
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  // Auditor console state
  const [websiteUrl, setWebsiteUrl] = useState<string>('');
  const [auditStatus, setAuditStatus] = useState<'idle' | 'running' | 'success'>('idle');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState<number>(0);
  const [auditScores, setAuditScores] = useState({ performance: 90, seo: 90, bestPractice: 90 });
  const [auditIssues, setAuditIssues] = useState<string[]>([]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Scroll terminal to bottom
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalLogs]);

  // Run website audit using backend API
  const runWebsiteAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!websiteUrl.trim()) return;

    setAuditStatus('running');
    setTerminalLogs([`🌐 Ingesting target: ${getDomainName(websiteUrl)}...`]);
    setProgress(10);

    try {
      const res = await fetch(`/api/audit?url=${encodeURIComponent(websiteUrl)}`);
      const data = await res.json();
      
      const domain = data.domain || getDomainName(websiteUrl);

      // Create sequence of real terminal crawl logs
      const steps = [
        `🌐 Resolved target IP & Domain: ${domain}`,
        `🕷️ Crawled public routes: ${data.routes.slice(0, 4).join(', ')}`,
        `⚡ Server latency response: ${data.success ? `${data.latency}ms` : 'FAIL (Server Offline)'}`,
        `🔍 HTML Tags: Description [${data.hasMetaDescription ? 'FOUND' : 'MISSING'}], OG Image [${data.hasOGImage ? 'FOUND' : 'MISSING'}], JSON-LD Schema [${data.hasSchema ? 'FOUND' : 'MISSING'}]`,
        `🛡️ Security headers: SSL connection [${data.isHttps ? 'HTTPS Secure' : 'HTTP INSECURE'}]`,
        `⚠️ Audit complete. Dynamic optimization suggestions generated.`
      ];

      // Calculate scores dynamically
      let perfScore = 95;
      if (!data.success) {
        perfScore = 32;
      } else if (data.latency > 1000) {
        perfScore = 55;
      } else if (data.latency > 500) {
        perfScore = 74;
      } else if (data.latency > 250) {
        perfScore = 88;
      }

      let seoScore = 100;
      if (!data.hasMetaDescription) seoScore -= 25;
      if (!data.hasOGImage) seoScore -= 15;
      if (!data.hasSchema) seoScore -= 15;
      if (seoScore < 45) seoScore = 45;

      let bpScore = 100;
      if (!data.isHttps) bpScore -= 25;
      if (!data.success) bpScore -= 30;
      if (bpScore < 45) bpScore = 45;

      setAuditScores({ performance: perfScore, seo: seoScore, bestPractice: bpScore });

      // Generate issues checklist
      const issues: string[] = [];
      if (!data.success) {
        issues.push('Target site failed to respond. Verify connection or check if domain blocks bots.');
      }
      if (data.success && data.latency > 400) {
        issues.push(`Server response latency is high (${data.latency}ms). Optimize TTFB & load paths.`);
      }
      if (!data.hasMetaDescription) {
        issues.push('Missing search meta description tag on homepage.');
      }
      if (!data.hasOGImage) {
        issues.push('Missing Open-Graph (OG) image sharing parameters on index.');
      }
      if (!data.hasSchema) {
        issues.push('JSON-LD structured schema metadata missing.');
      }
      if (!data.isHttps) {
        issues.push('Unencrypted connection (HTTPS certificate verification failed).');
      }
      if (issues.length === 0) {
        issues.push('Excellent! All core speed and SEO markers are clean. Focus on custom automation scaling.');
      }
      setAuditIssues(issues);

      // Play log printing animation incrementally
      let stepIndex = 0;
      const interval = setInterval(() => {
        if (stepIndex < steps.length) {
          setTerminalLogs(prev => [...prev, steps[stepIndex]]);
          stepIndex++;
          setProgress(Math.floor((stepIndex / steps.length) * 100));
        } else {
          clearInterval(interval);
          setAuditStatus('success');
          setProgress(100);
        }
      }, 700);

    } catch (err) {
      setTerminalLogs(prev => [...prev, '❌ Audit engine error. Server failed to route audit request.']);
      setAuditScores({ performance: 35, seo: 45, bestPractice: 45 });
      setAuditIssues(['Audit server experienced an error. Please try again later.']);
      setAuditStatus('success');
      setProgress(100);
    }
  };

  const resetAudit = () => {
    setAuditStatus('idle');
    setTerminalLogs([]);
    setProgress(0);
    setWebsiteUrl('');
  };

  return (
    <div
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark pt-20"
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300 opacity-50"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(124, 58, 237, 0.15), transparent 80%)`,
        }}
      />

      {/* AI Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-ai-grid bg-cover bg-center mix-blend-overlay" />

      {/* Background Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-violet/20 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-cyan/20 blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container relative mx-auto px-4 z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Content */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-brand-cyan text-sm font-medium"
            >
              <Sparkles size={14} className="animate-pulse" />
              <span>Free Instant Website SEO & Speed Audit</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] text-white"
            >
              Build Custom AI & Software That Drives Real <span className="ai-gradient-text animate-pulse">Business Outcomes</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed"
            >
              We engineer high-performance AI agents, custom SaaS platforms, and enterprise-grade software that reduce operational costs by up to 40% and accelerate product launches by weeks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link
                href="/contact"
                className="group relative px-8 py-4 bg-brand-violet hover:bg-brand-violet/90 text-white rounded-xl font-bold text-lg transition-all flex items-center gap-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span>Book Free Demo</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold text-lg transition-all backdrop-blur-md flex items-center gap-2"
              >
                <span>View Our Work</span>
              </Link>
            </motion.div>

          </div>

          {/* Right Content - Interactive Website Auditor Console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative z-10 w-full"
          >
            <div className="relative w-full flex items-center justify-center">
              {/* Central Glowing Backing */}
              <div className="absolute w-[80%] h-[80%] bg-brand-cyan/20 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute w-[60%] h-[60%] bg-brand-violet/30 rounded-full blur-[80px] pointer-events-none" />

              {/* Main Interactive Auditor Console */}
              <div className="relative w-full z-10 rounded-3xl overflow-hidden glass-morphism border border-white/10 shadow-2xl bg-brand-dark/85 backdrop-blur-xl p-6 space-y-5">

                {/* Console Header Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 tracking-wider flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    Website Audit & Analysis Tool
                  </div>
                </div>

                {/* Input Panel Form */}
                <form onSubmit={runWebsiteAudit} className="space-y-3">
                  <label htmlFor="website-audit-input" className="text-xs font-bold text-slate-400 block tracking-wider uppercase">Analyze Your Website SEO & Performance:</label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
                      <input
                        type="text"
                        required
                        id="website-audit-input"
                        placeholder="Enter domain (e.g. example.com)"
                        value={websiteUrl}
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                        disabled={auditStatus === 'running'}
                        className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3 pl-10 pr-4 text-xs font-medium focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/20 placeholder-slate-500 font-mono"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={auditStatus === 'running' || !websiteUrl.trim()}
                      className="px-5 bg-brand-violet hover:bg-brand-violet/90 text-white font-bold text-xs rounded-xl transition-all flex items-center gap-1.5 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                    >
                      <Search size={14} />
                      Analyze
                    </button>
                  </div>
                </form>

                {/* Terminal / Live Auditor Status Screen */}
                <div className="relative min-h-[160px] rounded-2xl bg-[#080a13] border border-white/5 overflow-hidden flex flex-col justify-between p-4 font-mono">

                  {auditStatus === 'idle' && (
                    <div className="flex-1 flex flex-col items-center justify-center text-center space-y-3 py-4">
                      <Terminal className="text-slate-600 animate-pulse" size={24} />
                      <div className="space-y-1">
                        <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Auditor System Offline</p>
                        <p className="text-[9px] text-slate-500 max-w-[280px]">Input your web link above and click Analyze to scan metrics and audit routes.</p>
                      </div>
                    </div>
                  )}

                  {(auditStatus === 'running' || auditStatus === 'success') && (
                    <div className="flex-1 flex flex-col justify-between">
                      {/* Terminal crawler log entries */}
                      <div className="space-y-1.5 overflow-y-auto max-h-[105px] pr-2 scrollbar-thin scrollbar-thumb-white/10">
                        {terminalLogs.map((log, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2 }}
                            className={`text-[10px] sm:text-[11px] leading-relaxed ${log.startsWith('⚠️') ? 'text-amber-400 font-bold' :
                                log.startsWith('🌐') ? 'text-brand-cyan' :
                                  log.startsWith('🛡️') ? 'text-blue-400' : 'text-slate-300'
                              }`}
                          >
                            {log}
                          </motion.div>
                        ))}
                        <div ref={terminalEndRef} />
                      </div>

                      {/* Loading status bar */}
                      <div className="mt-3 border-t border-white/5 pt-2.5 flex items-center justify-between gap-4">
                        {auditStatus === 'running' ? (
                          <>
                            <div className="flex items-center gap-1.5 text-slate-400 text-[9px]">
                              <Loader2 className="animate-spin text-brand-cyan" size={10} />
                              <span>Crawling pages & measuring speed...</span>
                            </div>
                            <span className="text-[9px] font-bold text-brand-cyan">{progress}%</span>
                          </>
                        ) : (
                          <>
                            <div className="flex items-center gap-1.5 text-amber-400 text-[9px] font-bold">
                              <AlertTriangle size={11} />
                              <span>Fixable improvements detected</span>
                            </div>
                            <button
                              onClick={resetAudit}
                              className="text-[9px] text-slate-400 hover:text-white flex items-center gap-0.5 transition-colors"
                            >
                              <RefreshCw size={9} />
                              Re-audit
                            </button>
                          </>
                        )}
                      </div>

                      {/* Progress bar line animation */}
                      {auditStatus === 'running' && (
                        <div className="w-full h-0.5 bg-white/5 rounded-full overflow-hidden mt-2">
                          <motion.div
                            className="h-full bg-gradient-to-r from-brand-cyan via-brand-violet to-brand-fuchsia"
                            style={{ width: `${progress}%` }}
                            transition={{ duration: 0.2 }}
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Score Circles & Issues List Panel (shows on success) */}
                <AnimatePresence>
                  {auditStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-4 pt-1"
                    >
                      {/* Lighthouse Scores */}
                      <div className="flex justify-around bg-white/5 border border-white/10 rounded-2xl py-3 px-2">
                        <ScoreCircle value={auditScores.performance} label="Performance" />
                        <ScoreCircle value={auditScores.seo} label="SEO Status" />
                        <ScoreCircle value={auditScores.bestPractice} label="Best Practice" />
                      </div>

                      {/* Specific Improvement List */}
                      <div className="space-y-2 bg-[#0c0d1b] border border-white/5 rounded-2xl p-4">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Required Fixes & Optimization Points:</span>
                        <ul className="space-y-1.5 text-[10px] sm:text-xs text-slate-300">
                          {auditIssues.map((issue, idx) => {
                            const isSuccess = issue.startsWith('Excellent!');
                            const isSevere = issue.includes('failed') || issue.includes('Unencrypted');
                            return (
                              <li key={idx} className="flex items-start gap-1.5">
                                <span className={isSuccess ? "text-green-500 font-bold" : isSevere ? "text-red-500 font-bold" : "text-amber-500 font-bold"}>
                                  {isSuccess ? '✓' : '•'}
                                </span>
                                <span>{issue}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      {/* Action CTA offering to fix issues */}
                      <Link
                        href="/contact"
                        className="block w-full py-3 bg-gradient-to-r from-brand-violet to-brand-fuchsia text-white rounded-xl font-bold text-xs hover:opacity-90 transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-brand-violet/20 text-center"
                      >
                        <Zap size={13} className="animate-pulse" />
                        Book Free Demo To Automate These Fixes
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-dark to-transparent z-20 pointer-events-none" />

      {/* Animated Particles/Dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: Math.random()
            }}
            animate={{
              y: [null, "-20px"],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
    </div>
  );
}