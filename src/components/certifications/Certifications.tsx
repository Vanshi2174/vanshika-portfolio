import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="relative py-24 sm:py-32 overflow-hidden bg-tech-grid">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 ambient-glow-violet rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-mono text-xs tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
            Verified Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Certifications
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Accredited certificates from verified courses and academic milestones.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {CERTIFICATIONS_DATA.map((cert) => (
            <a
              key={cert.id}
              href={cert.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-5 sm:p-6 transition-all duration-300 hover:border-violet-500/40 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a14]"
              aria-label={`View certificate: ${cert.title}`}
            >
              {/* Icon + external link indicator */}
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0 group-hover:border-violet-400/50 transition-colors">
                  <Award className="w-5 h-5" />
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-400 transition-colors mt-1" />
              </div>

              {/* Title */}
              <h3 className="text-[15px] font-semibold leading-snug text-white group-hover:text-cyan-300 transition-colors">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="text-xs text-slate-400 leading-relaxed -mt-1">
                {cert.issuer}
              </p>

              {/* Date */}
              {cert.issueDate && (
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-mono mt-auto pt-1">
                  <Calendar className="w-3 h-3" />
                  <span>{cert.issueDate}</span>
                </div>
              )}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
