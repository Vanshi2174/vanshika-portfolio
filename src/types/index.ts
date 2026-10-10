export type SkillCategory = 'all' | 'programming' | 'frontend' | 'cs' | 'tools' | 'learning';

export interface Skill {
  name: string;
  category: 'programming' | 'frontend' | 'cs' | 'tools' | 'learning';
  icon: string;
  description: string;
  status: 'Core Stack' | 'In Progress' | 'Exploring';
  tag?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  featured: boolean;
  tag: string;
  description: string;
  longDescription: string;
  architectureHighlights: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  metrics?: string;
}

export type AchievementCategory = 'all' | 'hackathon' | 'competitive' | 'academic' | 'award' | 'certification';

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  year: string;
  category: 'hackathon' | 'competitive' | 'academic' | 'award' | 'certification';
  badge: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
  evidencePoints: string[];
}

export interface JourneyMilestone {
  year: string;
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  status: 'Current' | 'Completed';
}

export interface StatItem {
  label: string;
  value: string;
  subtext: string;
}
