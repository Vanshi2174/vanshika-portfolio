import React from 'react';

/**
 * Static Name Typography Component
 * - Displays the full name exactly as "Vanshika Prajapati"
 * - Permanently visible as pure static text
 * - Zero typing, glitch, reveal, scramble, or character animations
 * - Large bold typography matching reference: first name in pure white, 
 *   surname in high-impact electric blue to cyan gradient
 */
export const HeroName: React.FC = () => {
  return (
    <div className="select-none py-1">
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.98] uppercase">
        <span className="block text-white">
          VANSHIKA
        </span>
        <span className="block bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent filter drop-shadow-[0_10px_20px_rgba(99,102,241,0.25)]">
          PRAJAPATI
        </span>
      </h1>
    </div>
  );
};
