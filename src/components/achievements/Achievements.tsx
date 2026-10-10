import React, { useState } from 'react';
import { Award, Trophy, Code2, GraduationCap, CheckCircle2, X } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../../data/portfolioData';
import { AchievementCategory, Achievement } from '../../types';

export const Achievements: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<AchievementCategory>('all');
  const [activeModalItem, setActiveModalItem] = useState<Achievement | null>(null);

  const categories: { label: string; value: AchievementCategory }[] = [
    { label: 'ALL', value: 'all' },
    { label: 'HACKATHON', value: 'hackathon' },
    { label: 'COMPETITIVE PROGRAMMING', value: 'competitive' },
    { label: 'ACADEMIC', value: 'academic' },
    { label: 'AWARD', value: 'award' },
  ];

  const filteredAchievements = selectedCategory === 'all'
    ? ACHIEVEMENTS_DATA
    : ACHIEVEMENTS_DATA.filter((a) => a.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'award':
        return <Award className="w-5 h-5 text-amber-400" />;
      case 'hackathon':
        return <Trophy className="w-5 h-5 text-cyan-400" />;
      case 'competitive':
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'academic':
        return <GraduationCap className="w-5 h-5 text-indigo-400" />;
      default:
        return <Award className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="achievements" className="relative py-24 sm:py-32 overflow-hidden bg-tech-grid">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 ambient-glow-violet rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-mono text-xs tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
            Milestones & Validation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Achievements & Evidence Gallery
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Documented participation, hackathon selections, and competitive programming highlights.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/30 scale-105'
                    : 'glass-panel text-slate-300 hover:text-white hover:border-white/20'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAchievements.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between shadow-xl shadow-black/60"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getCategoryIcon(item.category)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/25 uppercase font-bold tracking-wider">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {item.year}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-indigo-400 mt-1 mb-3">
                  {item.organization}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Evidence Bullet Points */}
                <ul className="space-y-2 mb-6">
                  {item.evidencePoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalItem(item)}
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Inspect Evidence & Details ➔</span>
                </button>
                <span className="text-[11px] font-mono text-slate-500 uppercase">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {activeModalItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setActiveModalItem(null)}
        >
          <div 
            className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/20 max-w-lg w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center mb-4">
              {getCategoryIcon(activeModalItem.category)}
            </div>

            <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/25 uppercase font-bold tracking-wider">
              {activeModalItem.badge}
            </span>

            <h3 className="text-2xl font-bold text-white mt-3 mb-1">
              {activeModalItem.title}
            </h3>
            <p className="text-xs font-mono text-cyan-400 mb-4">
              {activeModalItem.organization} • {activeModalItem.year}
            </p>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {activeModalItem.description}
            </p>

            <div className="glass-panel p-4 rounded-2xl border border-white/5 space-y-2 mb-6">
              <div className="text-xs font-mono text-slate-400 uppercase font-semibold">
                Milestone Highlights
              </div>
              {activeModalItem.evidencePoints.map((pt, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setActiveModalItem(null)}
              className="w-full py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-semibold font-mono"
            >
              Close Record
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
