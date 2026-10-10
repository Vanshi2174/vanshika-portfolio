import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu } from 'lucide-react';
import { Project } from '../../types';
import { GithubIcon } from '../common/Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl glass-panel rounded-3xl border border-white/15 p-6 sm:p-8 shadow-2xl shadow-indigo-950/80 overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs uppercase tracking-wider mb-2">
            {project.category}
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-cyan-300 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Narrative Description */}
        <div className="space-y-4 mb-6 text-slate-300 text-sm leading-relaxed">
          <p>{project.longDescription}</p>
        </div>

        {/* Architectural Highlights */}
        <div className="glass-panel p-5 rounded-2xl border border-white/5 mb-6">
          <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2 mb-3">
            <Cpu className="w-4 h-4 text-cyan-400" />
            Architectural Highlights & Engineering Solutions
          </h4>
          <ul className="space-y-2.5">
            {project.architectureHighlights.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Badges */}
        <div className="mb-6">
          <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-indigo-400" />
            Verified Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span 
                key={tech} 
                className="px-3 py-1 text-xs rounded-lg bg-indigo-500/10 text-indigo-200 border border-indigo-500/20 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View Source Repository</span>
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-600 to-cyan-500 text-white transition-transform hover:scale-105"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Live Application</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
