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
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[6rem] font-black tracking-tight leading-[0.95] uppercase">
        <span className="block text-white">
          VANSHIKA
        </span>
        <span className="block bg-gradient-to-r from-[#4f75ff] via-[#38bdf8] to-[#22d3ee] bg-clip-text text-transparent filter drop-shadow-[0_8px_24px_rgba(56,189,248,0.3)]">
          PRAJAPATI
        </span>
      </h1>
    </div>
  );
};
