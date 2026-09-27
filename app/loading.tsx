import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 bg-brand-dark flex flex-col items-center justify-center space-y-4">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-brand-purple/20 animate-ping" />
        <div className="absolute inset-0 rounded-full border-4 border-t-brand-cyan border-r-transparent border-b-brand-purple border-l-transparent animate-spin" />
      </div>
      <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest animate-pulse">
        Loading Vidhyonix...
      </p>
    </div>
  );
}
