import React, { useState } from 'react';
import { Navbar } from './components/common/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { Achievements } from './components/achievements/Achievements';
import { Journey } from './components/journey/Journey';
import { Resume } from './components/resume/Resume';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/common/Footer';
import { BootLoader } from './components/boot/BootLoader';
import { ResumeModal } from './components/resume/ResumeModal';
import { useActiveSection } from './hooks/useActiveSection';
import confetti from 'canvas-confetti';

export function App() {
  const [bootComplete, setBootComplete] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const sectionIds = ['home', 'about', 'skills', 'projects', 'achievements', 'journey', 'resume', 'contact'];
  const activeSection = useActiveSection(sectionIds);

  const handleDownloadResume = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#6366f1', '#06b6d4', '#a855f7']
    });

    const link = document.createElement('a');
    link.href = '/profile.png';
    link.download = 'Vanshika_Prajapati_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#050508] text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* High-Tech Terminal Boot Sequence */}
      {!bootComplete && (
        <BootLoader onComplete={() => setBootComplete(true)} />
      )}

      {/* Primary Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Journey />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Resume Modal (triggered from Hero 'View Resume' button) */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        onDownload={handleDownloadResume}
      />
    </div>
  );
}

export default App;
