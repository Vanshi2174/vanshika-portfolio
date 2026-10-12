import React from 'react';
import { Code, Terminal, Sparkles, CheckCircle2, ShieldCheck, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO, ABOUT_METRICS } from '../../data/portfolioData';
import { TiltCard } from '../common/TiltCard';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 ambient-glow-indigo rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            Who I Am
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Engineering Software with Purpose and Precision
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            A dedicated Computer Science student turning fundamental engineering principles into reliable, user-centric software.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Narrative & Focus Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I am a Computer Science and Engineering undergraduate pursuing my B.Tech degree with an expected graduation in <span className="text-cyan-400 font-semibold">{PERSONAL_INFO.graduationYear}</span>. My focus centers on building reliable software systems, writing clean and maintainable code, and mastering data structures and algorithms.
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                From developing full-stack web applications like <span className="text-indigo-300 font-semibold">Jal Rakshak</span> and <span className="text-indigo-300 font-semibold">Crypto Tracker</span> to engineering intelligent communication tools like <span className="text-cyan-300 font-semibold">Open Talk</span>, I thrive on translating theoretical logic into practical digital solutions.
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Being recognized as an <span className="text-white font-medium">Amazon Scholar</span> and securing a <span className="text-white font-medium">Top 3 placement in the SIH internal hackathon</span> has fueled my commitment to continuous learning, collaborative development, and technical growth.
              </p>
            </div>

            {/* Focus Area Cards with 3D Tilt */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <TiltCard
                maxTilt={8}
                glowColor="rgba(99, 102, 241, 0.15)"
                className="glass-panel p-4 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all group"
              >
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-3 group-hover:scale-110 transition-transform">
                  <Code className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Frontend & Web</h4>
                <p className="text-[12px] text-slate-400 leading-snug">
                  Responsive React apps with modern state and glassmorphic UI.
                </p>
              </TiltCard>

              <TiltCard
                maxTilt={8}
                glowColor="rgba(6, 182, 212, 0.15)"
                className="glass-panel p-4 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all group"
              >
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
                  <Terminal className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">DSA & Problem Solving</h4>
                <p className="text-[12px] text-slate-400 leading-snug">
                  20+ LeetCode problems solved with complexity optimization.
                </p>
              </TiltCard>

              <TiltCard
                maxTilt={8}
                glowColor="rgba(168, 85, 247, 0.15)"
                className="glass-panel p-4 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all group"
              >
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-3 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">AI Applications</h4>
                <p className="text-[12px] text-slate-400 leading-snug">
                  Practical integrations for speech scoring and real-world feedback.
                </p>
              </TiltCard>
            </div>
          </div>

          {/* Right Column: Key Metrics Glass Card with 3D Tilt */}
          <div className="lg:col-span-5 flex flex-col">
            <TiltCard
              maxTilt={5}
              glowColor="rgba(99, 102, 241, 0.18)"
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex-1 flex flex-col justify-between shadow-2xl shadow-black/80 relative overflow-hidden"
            >
              <div className="flex items-center justify-between pb-6 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-indigo-400" />
                  <span className="font-mono text-xs uppercase tracking-widest text-slate-300">
                    KEY METRICS
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Real Track Record</span>
                </div>
              </div>

              {/* Metrics Rows */}
              <div className="divide-y divide-white/5 py-4 space-y-4">
                {ABOUT_METRICS.map((metric, i) => (
                  <div key={i} className="pt-4 first:pt-0 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-slate-200">
                        {metric.label}
                      </div>
                      <div className="text-xs text-slate-500 font-mono">
                        {metric.subtext}
                      </div>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold font-mono text-white bg-gradient-to-r from-indigo-200 via-white to-cyan-300 bg-clip-text text-transparent">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Note */}
              <div className="pt-6 border-t border-white/5 flex items-center gap-2 text-xs text-slate-400 font-mono">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Verified student milestones. Consistent daily commitment.</span>
              </div>
            </TiltCard>
          </div>

        </div>
      </div>
    </section>
  );
};
