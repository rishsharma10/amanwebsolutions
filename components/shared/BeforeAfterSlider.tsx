'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Wand2 } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeLabel?: string;
  afterLabel?: string;
  beforeImage?: string; // Using colors/gradients as placeholders for actual images
  afterImage?: string;
}

export default function BeforeAfterSlider({
  beforeLabel = "Manual Process",
  afterLabel = "AI Automated Process",
  beforeImage,
  afterImage
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group select-none">
      <div 
        ref={containerRef}
        className="relative h-[400px] md:h-[600px] w-full cursor-ew-resize"
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={onMouseMove}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={onTouchMove}
      >
        {/* BEFORE IMAGE (Background) */}
        <div className="absolute inset-0 w-full h-full bg-slate-900 flex flex-col items-center justify-center overflow-hidden z-0">
          {/* Abstract representation of "Before" */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,#333_25%,transparent_25%,transparent_75%,#333_75%,#333),linear-gradient(45deg,#333_25%,transparent_25%,transparent_75%,#333_75%,#333)]" style={{ backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}></div>
          <Code2 size={64} className="text-slate-600 mb-6 relative z-10" />
          <div className="text-slate-500 font-mono text-sm relative z-10 text-center max-w-sm px-6">
            Spaghetti code, slow deployment cycles, and manual quality assurance leading to bottlenecks.
          </div>
        </div>

        {/* AFTER IMAGE (Foreground clipping) */}
        <div 
          className="absolute inset-0 w-full h-full bg-brand-dark flex flex-col items-center justify-center overflow-hidden pointer-events-none z-10"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          {/* Abstract representation of "After" */}
          <div className="absolute inset-0 opacity-10 bg-ai-grid bg-repeat" />
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-cyan/20 rounded-full blur-[100px] -translate-y-1/2" />
          
          <div className="w-20 h-20 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_50px_rgba(34,211,238,0.2)]">
            <Wand2 size={40} className="text-brand-cyan" />
          </div>
          <div className="text-white font-heading font-bold text-xl relative z-10 text-center max-w-sm px-6 leading-relaxed">
            Sleek architecture, automated CI/CD pipelines, and AI-driven testing.
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-6 left-6 px-4 py-2 bg-black/50 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded-lg border border-white/10 z-20 pointer-events-none">
          {beforeLabel}
        </div>
        <div className="absolute top-6 right-6 px-4 py-2 bg-brand-cyan/20 backdrop-blur-md text-brand-cyan text-xs font-bold uppercase tracking-widest rounded-lg border border-brand-cyan/30 z-20 pointer-events-none">
          {afterLabel}
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-30"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] border-4 border-brand-dark">
            <div className="flex gap-1">
              <div className="w-1 h-3 bg-slate-400 rounded-full"></div>
              <div className="w-1 h-3 bg-slate-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
