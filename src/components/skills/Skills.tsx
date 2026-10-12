import React, { useState } from 'react';
import { 
  Coffee, FileCode, Code2, Atom, Layout, Palette, 
  Binary, Boxes, Database, GitBranch, 
  Terminal, Layers, Cpu, Cloud, Sparkles 
} from 'lucide-react';
import { SKILLS_DATA } from '../../data/portfolioData';
import { SkillCategory, Skill } from '../../types';
import { GithubIcon } from '../common/Icons';
import { TiltCard } from '../common/TiltCard';

// Map icon strings to components
const iconMap: Record<string, React.ReactNode> = {
  Coffee: <Coffee className="w-5 h-5 text-amber-400" />,
  FileCode: <FileCode className="w-5 h-5 text-blue-400" />,
  Code2: <Code2 className="w-5 h-5 text-yellow-400" />,
  Atom: <Atom className="w-5 h-5 text-cyan-400" />,
  Layout: <Layout className="w-5 h-5 text-orange-400" />,
  Palette: <Palette className="w-5 h-5 text-sky-400" />,
  Binary: <Binary className="w-5 h-5 text-emerald-400" />,
  Boxes: <Boxes className="w-5 h-5 text-indigo-400" />,
  Database: <Database className="w-5 h-5 text-rose-400" />,
  GitBranch: <GitBranch className="w-5 h-5 text-red-400" />,
  Github: <GithubIcon className="w-5 h-5 text-slate-200" />,
  Terminal: <Terminal className="w-5 h-5 text-blue-300" />,
  Layers: <Layers className="w-5 h-5 text-purple-400" />,
  Cpu: <Cpu className="w-5 h-5 text-emerald-300" />,
  Cloud: <Cloud className="w-5 h-5 text-amber-300" />,
  Sparkles: <Sparkles className="w-5 h-5 text-violet-400" />,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('all');

  const categories: { label: string; value: SkillCategory }[] = [
    { label: 'All Technologies', value: 'all' },
    { label: 'Programming', value: 'programming' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Computer Science', value: 'cs' },
    { label: 'Tools', value: 'tools' },
    { label: 'Learning / Exploring', value: 'learning' },
  ];

  const filteredSkills = selectedCategory === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s: Skill) => s.category === selectedCategory);

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden bg-tech-grid">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 ambient-glow-cyan rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            Technical Repertoire
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Technologies & Engineering Toolkit
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            A comprehensive ecosystem of programming languages, frontend tools, core computer science pillars, and developer workflows.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-600/30 scale-105'
                    : 'glass-panel text-slate-300 hover:text-white hover:border-white/20'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid with 3D Tilt & Cursor Glow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <TiltCard
              key={index}
              maxTilt={8}
              glowColor="rgba(6, 182, 212, 0.12)"
              className="glass-panel p-5 rounded-2xl border border-white/5 hover:border-indigo-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-500/10 transition-all">
                    {iconMap[skill.icon] || <Code2 className="w-5 h-5 text-cyan-400" />}
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                    skill.status === 'Core Stack'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25'
                      : skill.status === 'Learning'
                      ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/25'
                      : skill.status === 'In Progress'
                      ? 'bg-blue-500/10 text-blue-300 border-blue-500/25'
                      : 'bg-purple-500/10 text-purple-300 border-purple-500/25'
                  }`}>
                    {skill.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Progress Indicator & Category Footer */}
              <div className="mt-4 pt-3 border-t border-white/5 space-y-2.5">
                {typeof skill.progress === 'number' && (
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-slate-400">
                        {skill.status === 'Core Stack' ? 'Proficiency' : 'Progress'}
                      </span>
                      <span className="text-cyan-400 font-semibold">{skill.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/5 border border-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(6,182,212,0.4)]"
                        style={{ width: `${skill.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="capitalize">{skill.category}</span>
                  <span className="text-slate-600">• • •</span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Integrated Skill Architecture Overview */}
        <TiltCard
          maxTilt={3}
          glowColor="rgba(99, 102, 241, 0.1)"
          className="mt-16 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-indigo-400" />
                Integrated Skill Architecture
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Layered distribution of core software capabilities and architectural layers.
              </p>
            </div>
            <div className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 w-fit">
              STRUCTURED PROFICIENCY & LEARNING ROADMAP
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="text-xs font-mono font-semibold text-indigo-300 uppercase tracking-wider">
                01. Languages
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Java', 'Python', 'JavaScript'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-xs rounded-lg bg-white/5 text-slate-300 border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono font-semibold text-cyan-300 uppercase tracking-wider">
                02. Frontend & Web
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['React', 'HTML5', 'CSS3', 'Tailwind CSS'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-xs rounded-lg bg-white/5 text-slate-300 border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono font-semibold text-emerald-300 uppercase tracking-wider">
                03. CS Fundamentals
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['DSA', 'OOPs', 'DBMS', 'Problem Solving'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-xs rounded-lg bg-white/5 text-slate-300 border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono font-semibold text-purple-300 uppercase tracking-wider">
                04. Expanding Horizon
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['AWS Cloud', 'AI Integration'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-xs rounded-lg bg-white/5 text-slate-300 border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </TiltCard>

      </div>
    </section>
  );
};
