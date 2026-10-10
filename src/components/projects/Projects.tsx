import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Activity, Droplets, TrendingUp, Sparkles, Code2 } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/portfolioData';
import { Project } from '../../types';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from '../common/Icons';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectPreviewVisual = (id: string) => {
    switch (id) {
      case 'open-talk':
        return (
          <div className="w-full h-48 sm:h-56 rounded-2xl bg-gradient-to-br from-indigo-950/70 via-slate-900/90 to-[#070913] border border-indigo-500/30 p-5 flex flex-col justify-between relative overflow-hidden group-hover:border-cyan-400/50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-[11px] font-mono text-cyan-300">Speech Flow & NLP Engine</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                AI Feedback
              </span>
            </div>
            {/* Visual Waveform Mockup */}
            <div className="space-y-2 py-3">
              <div className="flex items-end gap-1.5 h-16 justify-center">
                {[35, 60, 45, 80, 95, 65, 40, 85, 70, 50, 90, 75, 45, 60, 30].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="w-1.5 rounded-full bg-gradient-to-t from-indigo-500 to-cyan-400 opacity-80"
                  />
                ))}
              </div>
              <div className="flex justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-white/5">
                <span>Coherence: 94%</span>
                <span>Pacing: Optimal</span>
                <span>Vocabulary: Rich</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-indigo-300 font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Communication Practice</span>
            </div>
          </div>
        );

      case 'jal-rakshak':
        return (
          <div className="w-full h-48 sm:h-56 rounded-2xl bg-gradient-to-br from-sky-950/60 via-slate-900/90 to-[#070913] border border-sky-500/30 p-5 flex flex-col justify-between relative overflow-hidden group-hover:border-sky-400/50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Droplets className="w-4 h-4 text-sky-400" />
                <span className="text-[11px] font-mono text-sky-300">Telemetry Sensor Grid</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Network Normal
              </span>
            </div>
            {/* Pipeline Status Mockup */}
            <div className="grid grid-cols-3 gap-2 py-2">
              <div className="glass-panel p-2 rounded-xl text-center">
                <div className="text-[10px] text-slate-400 font-mono">Flow Rate</div>
                <div className="text-sm font-bold text-sky-300 font-mono">42 L/m</div>
              </div>
              <div className="glass-panel p-2 rounded-xl text-center">
                <div className="text-[10px] text-slate-400 font-mono">Pressure</div>
                <div className="text-sm font-bold text-white font-mono">2.4 bar</div>
              </div>
              <div className="glass-panel p-2 rounded-xl text-center">
                <div className="text-[10px] text-slate-400 font-mono">Reservoir</div>
                <div className="text-sm font-bold text-emerald-300 font-mono">88%</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-sky-300 font-mono">
              <Activity className="w-3.5 h-3.5" />
              <span>Rural Water Management & Leak Alerts</span>
            </div>
          </div>
        );

      case 'crypto-tracker':
        return (
          <div className="w-full h-48 sm:h-56 rounded-2xl bg-gradient-to-br from-violet-950/60 via-slate-900/90 to-[#070913] border border-violet-500/30 p-5 flex flex-col justify-between relative overflow-hidden group-hover:border-violet-400/50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span className="text-[11px] font-mono text-violet-300">Live CoinGecko Feeds</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                +4.82% 24h
              </span>
            </div>
            {/* Mini Market Rows */}
            <div className="space-y-1.5 py-1">
              <div className="flex items-center justify-between text-xs font-mono glass-panel px-2.5 py-1.5 rounded-lg">
                <span className="text-white font-bold">BTC / USD</span>
                <span className="text-emerald-400">$64,820.00</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono glass-panel px-2.5 py-1.5 rounded-lg">
                <span className="text-white font-bold">ETH / USD</span>
                <span className="text-emerald-400">$3,420.50</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-violet-300 font-mono">
              <Code2 className="w-3.5 h-3.5" />
              <span>REST API Aggregation & Live Charts</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 ambient-glow-indigo rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            Portfolio Highlights
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Things I've Built & Engineered
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Real systems focused on practical utility, clean architecture, and responsive user experiences.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="space-y-12">
          {PROJECTS_DATA.map((project, index) => (
            <div
              key={project.id}
              className="glass-panel p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/10 hover:border-indigo-500/30 transition-all duration-300 group shadow-2xl shadow-black/80"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Column: Project Details */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[11px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/25 text-indigo-300">
                        {project.tag}
                      </span>
                      <span className="text-xs font-mono text-slate-500">
                        0{index + 1} // 03
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-cyan-400/90 mt-1">
                      {project.subtitle}
                    </p>

                    <p className="text-slate-300 text-sm leading-relaxed mt-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Core Technologies Badges */}
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Core Technologies:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 text-slate-300 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-600/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold glass-panel text-slate-300 hover:text-white hover:border-white/20 transition-all hover:scale-105"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>

                {/* Right Column: Interactive Mockup Visual */}
                <div className="lg:col-span-5">
                  <div 
                    onClick={() => setSelectedProject(project)}
                    className="cursor-pointer"
                  >
                    {getProjectPreviewVisual(project.id)}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
