import React, { useState, useEffect } from 'react';

interface BootLoaderProps {
  onComplete: () => void;
}

export const BootLoader: React.FC<BootLoaderProps> = ({ onComplete }) => {
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Natural brief display then smooth fade out
    const fadeTimer = setTimeout(() => {
      setFadingOut(true);
    }, 700);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 1100);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#050508] flex items-center justify-center transition-opacity duration-400 ease-out ${
        fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <span className="text-white text-sm sm:text-base font-light tracking-[0.25em] uppercase select-none animate-pulse">
        Loading...
      </span>
    </div>
  );
};

