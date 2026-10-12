import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { useSmoothScroll } from './SmoothScrollProvider';
import { MagneticButton } from './MagneticButton';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Achievements', href: '#achievements', id: 'achievements' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'Resume', href: '#resume', id: 'resume' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollTo(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <div 
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#060b1e]/90 backdrop-blur-xl shadow-2xl shadow-black/80 border border-blue-500/30 px-4 sm:px-6 py-3' 
            : 'bg-[#060b1e]/75 backdrop-blur-xl border border-blue-500/20 px-4 sm:px-6 py-3.5 shadow-xl shadow-black/50'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Circular Monogram Avatar & Name */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600/30 to-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-white font-mono font-bold text-sm tracking-wider shadow-[0_0_12px_rgba(6,182,212,0.3)] group-hover:border-cyan-300 group-hover:scale-105 transition-all">
              <span className="bg-gradient-to-r from-blue-200 to-cyan-300 bg-clip-text text-transparent font-extrabold">VP</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold tracking-wide text-white group-hover:text-cyan-300 transition-colors">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-[10px] font-mono text-slate-400 tracking-wider uppercase">
                B.TECH CSE '28
              </div>
            </div>
          </a>

          {/* Desktop Nav Links with Active Indicator matching Reference */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-full">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.6)] font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#06b6d4]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Hire Me CTA matching Reference */}
          <div className="hidden sm:flex items-center gap-3">
            <MagneticButton strength={0.3}>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="relative group inline-flex items-center gap-1.5 px-4.5 py-2 text-xs font-semibold text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.45)] border border-cyan-400/30"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative flex items-center gap-1.5 z-10">
                  <span>Hire Me</span>
                  <span className="text-xs">🚀</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </a>
            </MagneticButton>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-white/10 flex flex-col gap-1 pb-2 max-h-[calc(100vh-6rem)] overflow-y-auto">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-indigo-600/30 text-cyan-300 border border-indigo-500/40'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full text-center block py-2.5 px-4 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-600/20"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
