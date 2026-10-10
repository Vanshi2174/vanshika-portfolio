import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface BootLoaderProps {
  onComplete: () => void;
}

export const BootLoader: React.FC<BootLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [stepText, setStepText] = useState('LINKING NEURAL ARCHITECTURE & BOOT SERVICES...');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStepText('PORTFOLIO SYSTEM ONLINE — WELCOME');
          setTimeout(() => {
            onComplete();
          }, 450);
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 12) + 6;
        if (next > 40 && next < 70) {
          setStepText('MOUNTING INTERACTIVE ASSETS & METRICS...');
        } else if (next >= 70 && next < 95) {
          setStepText('CALIBRATING HIGH-PRECISION PORTFOLIO INTERFACE...');
        }
        return next > 100 ? 100 : next;
      });
    }, 90);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#050508] flex items-center justify-center p-4">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      {/* Cyberpunk Terminal Window */}
      <div className="relative w-full max-w-lg glass-panel p-6 sm:p-8 rounded-3xl border border-indigo-500/30 shadow-2xl shadow-indigo-950/80 font-mono text-xs">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="font-bold text-white tracking-wider uppercase">
              {PERSONAL_INFO.name.toUpperCase()} v2.0
            </span>
          </div>
          <span className="text-[10px] text-slate-500 tracking-widest uppercase">
            GLOBAL BOOT SEQUENCE
          </span>
        </div>

        {/* Status Line */}
        <div className="flex items-center gap-2 text-cyan-300 mb-4 h-6">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping shrink-0" />
          <span className="truncate">{stepText}</span>
        </div>

        {/* High-Tech Progress Bar */}
        <div className="space-y-2 mb-6">
          <div className="w-full h-2 rounded-full bg-white/5 border border-white/10 overflow-hidden p-0.5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-400 transition-all duration-100 shadow-sm shadow-cyan-400"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-[11px] text-slate-400">
            <span>INITIALIZING</span>
            <span className="font-bold text-cyan-300">{progress}%</span>
          </div>
        </div>

        {/* Micro Details Footer */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-500">
          <div className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span>CORE: ACTIVE</span>
          </div>
          <button
            onClick={onComplete}
            className="hover:text-cyan-400 transition-colors uppercase tracking-widest cursor-pointer"
          >
            [SKIP BOOT (ESC)]
          </button>
        </div>

      </div>
    </div>
  );
};
