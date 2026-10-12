import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { useSmoothScroll } from './SmoothScrollProvider';

export const Footer: React.FC = () => {
  const { scrollTo } = useSmoothScroll();

  const scrollToTop = () => {
    scrollTo(0, { offset: 0 });
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#030407] py-16 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/10 border border-indigo-500/40 flex items-center justify-center text-white font-mono font-bold text-xs">
                VP
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs font-mono text-cyan-400">
              B.Tech CSE | Software Developer | Problem Solver
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Building reliable software, solving algorithmic problems, and continuously engineering modern digital experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              NAVIGATION
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
              <li><a href="#achievements" className="hover:text-cyan-400 transition-colors">Achievements</a></li>
              <li><a href="#journey" className="hover:text-cyan-400 transition-colors">Journey</a></li>
              <li><a href="#resume" className="hover:text-cyan-400 transition-colors">Resume</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Connect Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              CONNECT
            </div>
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="LeetCode"
              >
                <LeetCodeIcon className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-slate-500 pt-2">
              Open to internships and engineering collaborations.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 {PERSONAL_INFO.name}. Built with passion, React, and code.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
