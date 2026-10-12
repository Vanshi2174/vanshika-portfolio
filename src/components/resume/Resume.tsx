import React, { useState } from 'react';
import { Download, Maximize2, GraduationCap, Cpu, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ResumeModal } from './ResumeModal';

export const Resume: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleDownload = () => {
    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#6366f1', '#06b6d4', '#a855f7']
    });

    // Create download link for resume
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Vanshika_Prajapati_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="relative py-24 sm:py-32 overflow-hidden bg-tech-grid">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 ambient-glow-cyan rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            Credentials & CV
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Curriculum Vitae & Professional Resume
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Comprehensive overview of academic achievements, technical competencies, and software engineering capabilities.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white shadow-xl shadow-indigo-600/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-cyan-200" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold glass-panel text-slate-200 hover:text-white hover:border-white/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Maximize2 className="w-4 h-4 text-indigo-400" />
              <span>View Fullscreen</span>
            </button>
          </div>
        </div>

        {/* Credentials Overview Card */}
        <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl shadow-black/80">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-white/5 gap-4">
            <div>
              <h3 className="text-2xl font-black text-white">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-sm font-mono text-cyan-400 mt-0.5">
                {PERSONAL_INFO.degree} • {PERSONAL_INFO.graduationYear}
              </p>
            </div>
            <div className="text-[11px] font-mono text-slate-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 w-fit">
              Updated for 2026 Opportunities
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
            {/* Education Pillar */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase font-bold tracking-wider">
                <GraduationCap className="w-4 h-4" />
                Education
              </div>
              <div className="glass-panel p-4 rounded-2xl border border-white/5 space-y-1">
                <div className="text-sm font-bold text-white">
                  B.Tech in Computer Science & Engineering
                </div>
                <div className="text-xs text-slate-400">
                  Focus: Data Structures, Algorithms, Software Lifecycle, DBMS
                </div>
                <div className="text-xs font-mono text-cyan-400 pt-1">
                  Expected Graduation: 2028
                </div>
              </div>
            </div>

            {/* Core Technical Pillars */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase font-bold tracking-wider">
                <Cpu className="w-4 h-4" />
                Core Technical Pillars
              </div>
              <div className="glass-panel p-4 rounded-2xl border border-white/5 space-y-1">
                <div className="text-sm font-bold text-white">
                  Frontend Engineering & Systems
                </div>
                <div className="text-xs text-slate-400">
                  React, JavaScript, Java, DSA, REST APIs, Tailwind CSS
                </div>
                <div className="text-xs font-mono text-indigo-300 pt-1">
                  Verified Problem Solver & Project Builder
                </div>
              </div>
            </div>
          </div>

          {/* Key Recognitions */}
          <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Amazon Scholar • SIH Internal Hackathon Top 3</span>
            </div>
            <div className="flex items-center gap-1.5 text-cyan-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Open to Software Engineering Internships</span>
            </div>
          </div>

        </div>

      </div>

      {/* Fullscreen CV Modal */}
      <ResumeModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onDownload={handleDownload}
      />
    </section>
  );
};
