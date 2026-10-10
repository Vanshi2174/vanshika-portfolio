import React from 'react';
import { ArrowRight, FileText, Mail, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO, HERO_STATS } from '../../data/portfolioData';
import { HeroName } from './HeroName';
import { HeroPortrait } from './HeroPortrait';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from '../common/Icons';

interface HeroProps {
  onOpenResumeModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-tech-grid"
    >
      {/* Ambient Radial Lights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 ambient-glow-indigo rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 ambient-glow-cyan rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-8">
          
          {/* Left Column: Hero Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left z-10">
            
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-emerald-300 tracking-wide">
                {PERSONAL_INFO.status}
              </span>
            </div>

            {/* Static Name Typography (100% static, no animations) */}
            <HeroName />

            {/* Degree & Track Info */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider text-slate-400 uppercase">
              <span className="text-indigo-400 font-semibold">{PERSONAL_INFO.degree}</span>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-400">{PERSONAL_INFO.graduationYear}</span>
            </div>

            {/* Impact Headline */}
            <p className="text-xl sm:text-2xl font-medium text-slate-200 tracking-tight leading-snug">
              {PERSONAL_INFO.headline}
            </p>

            {/* Authentic Bio Paragraph */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              {PERSONAL_INFO.aboutBrief}
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => handleScrollTo('projects')}
                className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-full font-medium text-sm text-white overflow-hidden shadow-xl shadow-indigo-600/25 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative z-10 flex items-center gap-2">
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={() => {
                  if (onOpenResumeModal) {
                    onOpenResumeModal();
                  } else {
                    handleScrollTo('resume');
                  }
                }}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-medium text-sm text-slate-200 glass-panel border border-white/10 hover:border-indigo-400/50 hover:bg-white/5 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl glass-panel-subtle hover:bg-white/10 text-slate-400 hover:text-white transition-all hover:scale-110"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl glass-panel-subtle hover:bg-white/10 text-slate-400 hover:text-white transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl glass-panel-subtle hover:bg-white/10 text-slate-400 hover:text-white transition-all hover:scale-110"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl glass-panel-subtle hover:bg-white/10 text-slate-400 hover:text-white transition-all hover:scale-110"
                aria-label="LeetCode Profile"
              >
                <LeetCodeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Vanshika's Professional Portrait Container */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <HeroPortrait />
          </div>
        </div>

        {/* Quick Stats Bar */}
        <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {HERO_STATS.map((stat, idx) => (
            <div 
              key={idx}
              className="glass-panel p-4 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-white bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-300 mt-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] font-mono text-slate-500 mt-0.5">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="w-full flex justify-center mt-6">
        <button
          onClick={() => handleScrollTo('about')}
          className="flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors group cursor-pointer"
          aria-label="Scroll to next section"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">SCROLL</span>
          <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-cyan-400" />
        </button>
      </div>
    </section>
  );
};
