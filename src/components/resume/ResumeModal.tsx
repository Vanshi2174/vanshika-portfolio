import React from 'react';
import { X, Download, FileText, CheckCircle2, GraduationCap, Award, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onDownload }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl glass-panel rounded-3xl border border-white/20 p-6 sm:p-10 shadow-2xl shadow-indigo-950/90 overflow-y-auto max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-wider mb-1">
              <FileText className="w-4 h-4" />
              <span>Interactive Curriculum Vitae Preview</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-xs font-mono text-cyan-300 mt-0.5">
              {PERSONAL_INFO.degree} • {PERSONAL_INFO.graduationYear}
            </p>
          </div>

          <button
            onClick={onDownload}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-600/30 hover:scale-105 active:scale-95 transition-all cursor-pointer w-fit"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
        </div>

        {/* Curriculum Vitae Sections */}
        <div className="space-y-8 text-left">
          
          {/* Summary */}
          <div>
            <h4 className="text-xs font-mono font-bold text-indigo-300 uppercase tracking-wider mb-2">
              Professional Summary
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Computer Science Engineering undergraduate with hands-on experience in Java, Python, React, and full-stack development. Selected as an Amazon Scholar and placed in the Top 3 of the SIH Internal Hackathon. Passionate about solving complex algorithmic challenges and building intelligent, real-world software applications.
            </p>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              Education
            </h4>
            <div className="glass-panel p-4 rounded-2xl border border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-sm font-bold text-white">Bachelor of Technology (B.Tech) — Computer Science and Engineering</span>
                <span className="text-xs font-mono text-slate-400">2024 — Expected 2028</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks.
              </p>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h4 className="text-xs font-mono font-bold text-indigo-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              Highlighted Engineering Projects
            </h4>
            <div className="space-y-3">
              <div className="glass-panel p-4 rounded-2xl border border-white/5">
                <div className="flex justify-between items-start">
                  <span className="text-sm font-bold text-white">Open Talk — AI Communication Platform</span>
                  <span className="text-[11px] font-mono text-cyan-400">React, AI APIs</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Engineered an AI-powered platform providing structured feedback on speech clarity, flow, and response quality.
                </p>
              </div>

              <div className="glass-panel p-4 rounded-2xl border border-white/5">
                <div className="flex justify-between items-start">
                  <span className="text-sm font-bold text-white">Jal Rakshak — Rural Water Monitoring</span>
                  <span className="text-[11px] font-mono text-sky-400">IoT, Web Dashboard</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Built a centralized pipeline monitoring interface addressing leakage and distribution alerts in rural areas.
                </p>
              </div>

              <div className="glass-panel p-4 rounded-2xl border border-white/5">
                <div className="flex justify-between items-start">
                  <span className="text-sm font-bold text-white">Crypto Tracker — Real-Time Market Analytics</span>
                  <span className="text-[11px] font-mono text-violet-400">React, APIs</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Real-time market analytics web application with instant search, price charting, and 24h trend metrics.
                </p>
              </div>
            </div>
          </div>

          {/* Honors & Accolades */}
          <div>
            <h4 className="text-xs font-mono font-bold text-amber-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-400" />
              Honors & Certifications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="glass-panel p-3.5 rounded-xl border border-white/5 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">Amazon Scholar</div>
                  <div className="text-[11px] text-slate-400">Prestigious computer science mentorship & scholarship</div>
                </div>
              </div>
              <div className="glass-panel p-3.5 rounded-xl border border-white/5 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">SIH Hackathon Top 3</div>
                  <div className="text-[11px] text-slate-400">Top 3 team placement in internal hackathon evaluation</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer Note */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-mono">
          <span>To link your official PDF, place it in public/resume.pdf</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
