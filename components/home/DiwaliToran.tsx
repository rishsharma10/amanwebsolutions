'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * Traditional Indian Diwali Toran (Marigold & Mango Leaves Garland)
 * Drapes across the top border of the hero section to bring authentic festive warmth.
 */
export default function DiwaliToran() {
  // Repeating scallops across the garland
  const scallops = Array.from({ length: 12 });

  return (
    <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none overflow-hidden select-none">
      <div className="relative w-full flex items-start justify-around">
        {scallops.map((_, i) => (
          <div key={i} className="relative flex flex-col items-center flex-1 max-w-[120px]">
            {/* Garland String Swag */}
            <svg
              viewBox="0 0 100 35"
              className="w-full h-auto text-amber-500/80 stroke-current fill-none stroke-[2] drop-shadow-[0_2px_8px_rgba(245,158,11,0.5)]"
              preserveAspectRatio="none"
            >
              <path d="M 0,0 Q 50,32 100,0" />
            </svg>

            {/* Mango Leaf at Center of Scallop */}
            <motion.div
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 4 + (i % 3), ease: 'easeInOut' }}
              className="absolute top-3 w-3 h-5 sm:w-3.5 sm:h-6 bg-gradient-to-b from-emerald-600 via-green-700 to-emerald-900 rounded-[50%_50%_50%_50%/80%_80%_20%_20%] shadow-sm transform -translate-x-1/2 left-1/2"
            />

            {/* Alternating Orange & Yellow Marigold Flowers (Genda Phool) */}
            <div className="absolute top-4 sm:top-5 left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ repeat: Infinity, duration: 3 + (i % 2), ease: 'easeInOut' }}
                className={`w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 rounded-full ${
                  i % 2 === 0
                    ? 'bg-gradient-to-tr from-amber-600 via-yellow-500 to-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.7)]'
                    : 'bg-gradient-to-tr from-yellow-500 via-yellow-400 to-amber-300 shadow-[0_0_10px_rgba(234,179,8,0.7)]'
                } border border-yellow-200/40`}
              />
            </div>

            {/* Occasional Hanging Golden Diya/Bell on every 3rd scallop */}
            {i % 3 === 1 && (
              <motion.div
                animate={{ rotate: [-3, 3, -3] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                style={{ transformOrigin: 'top center' }}
                className="absolute top-7 left-1/2 -translate-x-1/2 flex flex-col items-center"
              >
                <div className="w-0.5 h-3 sm:h-4 bg-gradient-to-b from-amber-400 to-yellow-600" />
                <span className="text-[10px] sm:text-xs transform -translate-y-1 filter drop-shadow-[0_0_6px_rgba(245,158,11,0.9)]">
                  🪔
                </span>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
