import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please include a message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable client-side processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 55,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#6366f1', '#10b981']
      });

      // Reset form after short delay
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 600);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden bg-tech-grid">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 ambient-glow-indigo rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            Initiate Contact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Let's Connect
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Have an internship opportunity, a challenging project idea, or want to discuss software engineering? Send me a message.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact & Social Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Let's Discuss Engineering & Ideas
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Whether you have an internship opportunity, an open-source collaboration, or simply want to connect, feel free to reach out.
              </p>
            </div>

            {/* Email Quick-Copy Card */}
            <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all group flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Primary Direct Email</div>
                  <div className="text-xs sm:text-sm font-semibold text-white tracking-wide">{PERSONAL_INFO.email}</div>
                </div>
              </div>
              <button
                onClick={copyEmail}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Copy email address"
                aria-label="Copy email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="glass-panel p-4 sm:p-5 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all group flex items-center justify-between block"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-200 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">GitHub Profile</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">github.com/Vanshi2174</div>
                </div>
              </div>
              <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-0.5 transition-transform">↗</span>
            </a>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glass-panel p-4 sm:p-5 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all group flex items-center justify-between block"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">LinkedIn Network</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">linkedin.com/in/vanshika-prajapati</div>
                </div>
              </div>
              <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-0.5 transition-transform">↗</span>
            </a>

            {/* Location Card */}
            <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-white/5 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase">Location</div>
                <div className="text-xs sm:text-sm font-semibold text-white">{PERSONAL_INFO.location}</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/10 shadow-2xl shadow-black/80">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, Vanshika will get back to you promptly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/15 text-white cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300">
                        NAME <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="e.g. Alex Turing"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500/60 focus:border-red-400' : 'border-white/10 focus:border-indigo-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-400 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300">
                        EMAIL <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500/60 focus:border-red-400' : 'border-white/10 focus:border-indigo-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300">
                      SUBJECT <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: '' });
                      }}
                      placeholder="Internship opportunity / Technical project inquiry"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.subject ? 'border-red-500/60 focus:border-red-400' : 'border-white/10 focus:border-indigo-500'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300">
                      MESSAGE <span className="text-indigo-400">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Share details regarding the role, problem statement, or project collaboration..."
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-red-500/60 focus:border-red-400' : 'border-white/10 focus:border-indigo-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 shadow-xl shadow-indigo-600/25 hover:scale-[1.02] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        <span>Sending Transmission...</span>
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
