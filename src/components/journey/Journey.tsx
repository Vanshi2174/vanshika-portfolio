import React from 'react';
import { Milestone, Calendar } from 'lucide-react';
import { JOURNEY_DATA } from '../../data/portfolioData';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 ambient-glow-indigo rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            My Journey
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Evolution of a Software Engineer
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            From fundamental algorithmic logic to scalable full-stack applications and intelligent software systems.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Glowing Line */}
          <div className="absolute top-0 bottom-0 left-3 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-400 to-purple-600/30 opacity-70" />

          {/* Timeline Nodes */}
          <div className="space-y-12 sm:space-y-16">
            {JOURNEY_DATA.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Badge */}
                  <div className="absolute left-3 sm:left-1/2 -translate-x-1/2 w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-[#050508] border-2 border-cyan-400 flex items-center justify-center z-10 shadow-lg shadow-cyan-400/30">
                    <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  </div>

                  {/* Spacer for 2-column alternating layout */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card */}
                  <div className={`w-full sm:w-1/2 pl-9 sm:pl-0 ${isEven ? 'sm:pr-10 text-left sm:text-right' : 'sm:pl-10 text-left'}`}>
                    <div className="glass-panel p-5 sm:p-7 rounded-3xl border border-white/10 hover:border-indigo-500/40 transition-all duration-300 group shadow-xl shadow-black/70">
                      
                      <div className={`flex flex-wrap items-center gap-2 mb-2 ${isEven ? 'sm:justify-end' : ''}`}>
                        <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2 sm:px-2.5 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/25 text-indigo-300">
                          {milestone.phase}
                        </span>
                        <div className="flex items-center gap-1 text-xs font-mono text-cyan-400">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{milestone.year}</span>
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {milestone.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-400 mt-0.5 mb-3">
                        {milestone.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {milestone.description}
                      </p>

                      {/* Skills Tags */}
                      <div className={`flex flex-wrap gap-1.5 ${isEven ? 'sm:justify-end' : ''}`}>
                        {milestone.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
