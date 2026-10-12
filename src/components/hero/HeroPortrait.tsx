import React, { useEffect, useRef, useState } from 'react';

/**
 * Authentic Hero Portrait Component
 * - Large, commanding scale matching the reference design.
 * - Displays authentic portrait with glowing cyan hexagon, subtle orbit lines, and deep space nebula.
 * - Preserves real face, smile, glasses, hairstyle, and blue collar + dark vest outfit.
 * - Melts seamlessly into the #050814 dark navy background with smooth edge masking and gradient scrims.
 * - Stacking context isolated with positive z-indices so no elements slip behind section background.
 */
export const HeroPortrait: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Subtle, graceful mouse parallax
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const normX = (e.clientX / innerWidth) * 2 - 1;
      const normY = (e.clientY / innerHeight) * 2 - 1;
      setMouseOffset({
        x: normX * 8, // gentle 8px shift
        y: normY * 6,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative isolate w-full max-w-[520px] sm:max-w-[560px] lg:max-w-[600px] xl:max-w-[640px] aspect-[554/598] mx-auto flex items-center justify-center select-none"
    >
      {/* ========================================================
          1. Ambient Volumetric Glow (Contained within isolated stacking context)
          ======================================================== */}
      {/* Core Cyan & Royal Blue Backlight Glow */}
      <div 
        className="absolute inset-4 rounded-full bg-gradient-to-tr from-blue-600/30 via-cyan-400/25 to-blue-500/15 blur-3xl pointer-events-none z-0 transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${-mouseOffset.x * 0.5}px, ${-mouseOffset.y * 0.5}px, 0)`,
        }}
      />

      {/* Top-Right Ambient Nebula Light */}
      <div 
        className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-cyan-400/15 blur-3xl pointer-events-none z-0"
      />

      {/* ========================================================
          2. High-Resolution Authentic Portrait with Hexagon
          ======================================================== */}
      <div
        className="relative w-full h-full flex items-center justify-center will-change-transform transition-transform duration-200 ease-out z-10"
        style={{
          transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
        }}
      >
        {/* Portrait Container with Feathered Edge Masking */}
        <div 
          className="relative w-full h-full overflow-hidden"
          style={{
            // Smoothly feather all outer edges into the navy background
            maskImage: 'radial-gradient(ellipse 92% 92% at 50% 48%, black 72%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 92% 92% at 50% 48%, black 72%, transparent 100%)',
          }}
        >
          <img
            src="/portrait-hero.png"
            alt="Vanshika Prajapati"
            className="w-full h-full object-contain object-center filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.8)] contrast-[1.03] brightness-[1.01]"
            loading="eager"
            onError={(e) => {
              // Fallback to portrait-cinematic if portrait-hero is cached
              const target = e.currentTarget;
              if (!target.src.includes('portrait-cinematic.png')) {
                target.src = '/portrait-cinematic.png';
              }
            }}
          />
        </div>

        {/* Seamless Edge Scrims to prevent rectangular boundaries */}
        {/* Bottom Scrim: Melts naturally into #050814 */}
        <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-[#050814] via-[#050814]/80 to-transparent pointer-events-none z-20" />

        {/* Left Side Scrim */}
        <div className="absolute inset-y-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-[#050814] via-[#050814]/50 to-transparent pointer-events-none z-20" />

        {/* Right Side Scrim */}
        <div className="absolute inset-y-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-[#050814] via-[#050814]/50 to-transparent pointer-events-none z-20" />

        {/* Top Scrim */}
        <div className="absolute inset-x-0 top-0 h-8 sm:h-12 bg-gradient-to-b from-[#050814]/80 to-transparent pointer-events-none z-20" />
      </div>

      {/* ========================================================
          3. Subtle Interactive Pulsing Cyan Nodes along Orbit
          ======================================================== */}
      {/* Lower Right Interactive Node (along the sweeping orbit curve) */}
      <div 
        className="absolute bottom-[28%] right-[8%] z-30 pointer-events-none"
        style={{
          transform: `translate3d(${mouseOffset.x * 0.3}px, ${mouseOffset.y * 0.3}px, 0)`,
        }}
      >
        <div className="relative flex items-center justify-center">
          <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-cyan-400 opacity-60"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300 shadow-[0_0_8px_#22d3ee]"></span>
        </div>
      </div>

      {/* Top Left Orbit Accent Node */}
      <div 
        className="absolute top-[18%] left-[12%] z-30 pointer-events-none"
        style={{
          transform: `translate3d(${-mouseOffset.x * 0.2}px, ${-mouseOffset.y * 0.2}px, 0)`,
        }}
      >
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-300 shadow-[0_0_6px_#22d3ee] opacity-80"></span>
      </div>
    </div>
  );
};
