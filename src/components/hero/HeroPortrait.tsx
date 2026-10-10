import React from 'react';
import { Award, Sparkles, Terminal } from 'lucide-react';

/**
 * HeroPortrait Component
 * - Replaces the rotating universe / orbital 3D element with Vanshika's authentic professional photo
 * - Preserves 100% natural facial identity, features, smile, glasses, and skin tone
 * - Incorporates subtle blue-violet ambient rim lighting that integrates seamlessly with the dark theme
 * - Zero orbital rings and zero universe animations as requested
 * - Includes futuristic metadata chips matching the high-tech aesthetic
 */
export const HeroPortrait: React.FC = () => {
  return (
    <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[480px] mx-auto aspect-square flex items-center justify-center">
      {/* 1. Multi-layered Ambient Backlighting (Subtle Blue-Violet & Cyan aura) */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-600/25 via-blue-500/15 to-cyan-400/20 blur-3xl -z-10 transform scale-110 pointer-events-none" />
      <div className="absolute -inset-4 rounded-full bg-purple-600/15 blur-2xl -z-10 pointer-events-none" />

      {/* 2. Futuristic Geometric Framing Outer Glow Ring (Static/Refined, NO orbital animation) */}
      <div className="relative w-[340px] sm:w-[390px] md:w-[420px] h-[340px] sm:h-[390px] md:h-[420px] rounded-full p-2 bg-gradient-to-b from-indigo-500/40 via-white/5 to-cyan-400/30 border border-white/10 shadow-2xl shadow-indigo-950/60 flex items-center justify-center group">
        
        {/* Subtle Decorative Precision Corner Markers */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent rounded-full" />
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent rounded-full" />
        
        {/* Inner Glass Bezel */}
        <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-[#0a0d17] to-[#04060c] p-2 flex items-center justify-center border border-white/10">
          
          {/* Subtle Inner Ambient Rim Light */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/10 via-transparent to-cyan-400/15 pointer-events-none z-10" />

          {/* Genuine High-Resolution Portrait of Vanshika Prajapati */}
          <img
            src="/profile.png"
            alt="Vanshika Prajapati"
            className="w-full h-full object-cover object-center rounded-full transition-transform duration-500 group-hover:scale-105 filter contrast-[1.03] brightness-[1.01]"
            loading="eager"
          />

          {/* Subtle Specular Vignette Overlay */}
          <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 pointer-events-none" />
        </div>

        {/* 3. Floating High-Tech Metadata Pill — Top Left */}
        <div className="absolute -top-3 -left-2 sm:left-2 z-20 glass-panel px-3.5 py-1.5 rounded-full border border-indigo-500/30 flex items-center gap-2 shadow-xl shadow-black/80 hover:border-cyan-400/50 transition-colors">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-[11px] font-mono font-medium text-slate-200 tracking-wider">
            B.Tech CSE '28
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        </div>

        {/* 4. Floating High-Tech Achievement Pill — Bottom Right */}
        <div className="absolute -bottom-3 -right-2 sm:right-2 z-20 glass-panel px-3.5 py-1.5 rounded-full border border-indigo-500/30 flex items-center gap-2 shadow-xl shadow-black/80 hover:border-indigo-400/50 transition-colors">
          <Award className="w-3.5 h-3.5 text-indigo-400" />
          <span className="text-[11px] font-mono font-medium text-slate-200 tracking-wider">
            Amazon Scholar
          </span>
          <Sparkles className="w-3 h-3 text-amber-300" />
        </div>
      </div>
    </div>
  );
};
