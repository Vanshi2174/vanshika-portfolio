import React from 'react';

export const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const LeetCodeIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.964 3.385c.309.012.62.012.93 0h.036c.287-.012.573-.047.854-.105a5.972 5.972 0 0 0 2.21-.926l3.85-4.125 1.838-1.968a1.37 1.37 0 0 0-.007-1.937 1.373 1.373 0 0 0-1.936-.006l-1.838 1.969-3.85 4.125a3.25 3.25 0 0 1-1.204.505c-.152.03-.307.049-.462.055h-.02c-.168-.006-.335-.006-.502 0a3.21 3.21 0 0 1-2.69-1.834 3.01 3.01 0 0 1-.19-.553 2.97 2.97 0 0 1-.034-1.282 2.87 2.87 0 0 1 .655-1.144l3.854-4.126 5.406-5.788a1.375 1.375 0 0 0-.968-2.35z" />
    <path d="M9.864 12.658a1.37 1.37 0 0 0 0 1.942l4.896 5.244a1.37 1.37 0 1 0 1.942-1.942l-4.896-5.244a1.37 1.37 0 0 0-1.942 0z" />
  </svg>
);
