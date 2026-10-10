import { Project, Skill, Achievement, JourneyMilestone, StatItem } from '../types';

export const PERSONAL_INFO = {
  name: "Vanshika Prajapati",
  firstName: "Vanshika",
  lastName: "Prajapati",
  tagline: "Computer Science Engineering Student & Aspiring Software Developer",
  degree: "B.Tech, Computer Science and Engineering",
  graduationYear: "Expected 2028",
  location: "India",
  status: "Available for Opportunities: India",
  headline: "I build scalable software, intelligent systems, and interactive digital experiences.",
  aboutBrief: "Computer Science undergraduate focused on software engineering, algorithmic problem solving, modern frontend architectures, and emerging AI technologies. I continuously learn, build projects, participate in hackathons, and turn ideas into practical, reliable systems.",
  email: "vanshikaprajapati@example.com", // Editable placeholder
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  leetcode: "https://leetcode.com",
  resumePath: "/profile-raw.png", // Will trigger modal/download
};

export const HERO_STATS: StatItem[] = [
  { value: "120+", label: "Problems Solved", subtext: "DSA & Algorithms" },
  { value: "4+", label: "Projects Built", subtext: "Full-Stack & Systems" },
  { value: "Top 3", label: "Hackathon Placement", subtext: "SIH Internal" },
  { value: "2028", label: "B.Tech CSE", subtext: "Expected Graduation" }
];

export const ABOUT_METRICS = [
  { label: "Problems Solved", value: "120+", subtext: "Arrays, Trees, Graphs, DP" },
  { label: "Projects Built", value: "4+", subtext: "AI & Full-Stack Systems" },
  { label: "Hackathon Honors", value: "Top 3", subtext: "Internal SIH Hackathon" },
  { label: "Recognition", value: "Amazon Scholar", subtext: "Excellence Program" },
  { label: "Academic Focus", value: "CSE", subtext: "Graduation Batch 2028" },
];

export const SKILLS_DATA: Skill[] = [
  // Programming
  { name: "Java", category: "programming", icon: "Coffee", description: "Primary object-oriented language for robust systems & DSA", status: "Core Stack" },
  { name: "Python", category: "programming", icon: "FileCode", description: "Applied for scripting, problem-solving, and AI/ML experiments", status: "Core Stack" },
  { name: "JavaScript", category: "programming", icon: "Code2", description: "Modern ES6+ frontend interactivity and application logic", status: "Core Stack" },

  // Frontend
  { name: "React", category: "frontend", icon: "Atom", description: "Component-driven architectures, hooks, and reactive state", status: "Core Stack" },
  { name: "HTML5", category: "frontend", icon: "Layout", description: "Semantic markup, accessibility, and modern web structure", status: "Core Stack" },
  { name: "CSS3 & Tailwind", category: "frontend", icon: "Palette", description: "Responsive layouts, sleek glassmorphism, and modern styling", status: "Core Stack" },

  // Computer Science
  { name: "Data Structures & Algorithms", category: "cs", icon: "Binary", description: "Core algorithmic problem-solving with time/space complexity optimization", status: "Core Stack" },
  { name: "Object-Oriented Programming", category: "cs", icon: "Boxes", description: "Encapsulation, inheritance, polymorphism, and clean modular code", status: "Core Stack" },
  { name: "Database Systems", category: "cs", icon: "Database", description: "Relational data modeling, SQL queries, and normalization", status: "Core Stack" },

  // Tools
  { name: "Git", category: "tools", icon: "GitBranch", description: "Distributed version control, branching workflows, and tracking", status: "Core Stack" },
  { name: "GitHub", category: "tools", icon: "Github", description: "Remote repository collaboration, open source, and code reviews", status: "Core Stack" },
  { name: "VS Code", category: "tools", icon: "Terminal", description: "Primary lightweight development environment and tooling", status: "Core Stack" },
  { name: "IntelliJ IDEA", category: "tools", icon: "Layers", description: "Enterprise Java development and debugging environment", status: "Core Stack" },

  // Learning / Exploring
  { name: "Spring Boot", category: "learning", icon: "Cpu", description: "Java backend enterprise framework for RESTful microservices", status: "In Progress" },
  { name: "AWS Cloud Basics", category: "learning", icon: "Cloud", description: "Cloud computing fundamentals, deployment, and hosting", status: "Exploring" },
  { name: "AI Integration", category: "learning", icon: "Sparkles", description: "Connecting LLM APIs, prompt engineering, and intelligent features", status: "In Progress" },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "open-talk",
    title: "Open Talk",
    subtitle: "AI-Powered Communication Practice Platform",
    category: "AI & Full-Stack",
    featured: true,
    tag: "FEATURED CASE STUDY",
    description: "An intelligent platform designed to help users practice and elevate their verbal communication skills with structured, actionable AI-driven feedback.",
    longDescription: "Open Talk addresses the challenge of communication anxiety and interview preparation. The system allows users to engage in structured practice sessions, analyzing verbal flow, pacing, and response quality to generate insightful feedback summaries.",
    architectureHighlights: [
      "Speech-to-text integration with real-time feedback processing",
      "LLM-powered prompt evaluators assessing coherence, tone, and grammar",
      "Responsive analytics dashboard displaying performance improvement metrics",
      "Modular client architecture engineered with React and modern UI components"
    ],
    techStack: ["React", "JavaScript", "AI Integration", "Tailwind CSS", "REST APIs"],
    githubUrl: "https://github.com",
    metrics: "AI Performance Scoring",
  },
  {
    id: "jal-rakshak",
    title: "Jal Rakshak",
    subtitle: "Rural Water Monitoring & Pipeline Management System",
    category: "IoT & Web Engineering",
    featured: true,
    tag: "SUSTAINABLE TECH",
    description: "A technology-driven initiative tackling water distribution disparities and pipeline leakage challenges in rural communities through centralized monitoring.",
    longDescription: "Jal Rakshak is designed to provide real-time visibility into rural water supply networks. It tracks flow irregularities, flags potential pipeline blockages or leaks, and presents intuitive dashboard insights for community maintenance teams.",
    architectureHighlights: [
      "Simulated telemetry data pipeline tracking water flow thresholds",
      "Alert dispatch system for rapid identification of pipeline anomalies",
      "Lightweight, low-bandwidth dashboard optimized for rural connectivity",
      "Clean visual indicators displaying tank capacity and network health"
    ],
    techStack: ["React", "Python / Backend", "Tailwind CSS", "Data Visualization", "IoT Architecture"],
    githubUrl: "https://github.com",
    metrics: "Telemetry & Anomaly Alerts",
  },
  {
    id: "crypto-tracker",
    title: "Crypto Tracker",
    subtitle: "Live Market Intelligence & Cryptocurrency Analytics",
    category: "Web Application",
    featured: true,
    tag: "API & DATA PLATFORM",
    description: "A fast, responsive web application delivering real-time cryptocurrency price monitoring, historical trends, and dynamic market data visualization.",
    longDescription: "Crypto Tracker connects directly to market APIs to fetch real-time valuations, 24-hour volume changes, and interactive price trajectories. Engineered with a responsive dark-mode interface and instant search filtering.",
    architectureHighlights: [
      "Real-time polling and live price calculation with error-resilient fallbacks",
      "Dynamic search and sorting by market cap, 24h change, and volume",
      "Optimized DOM rendering ensuring smooth performance across mobile devices",
      "Interactive trend charts with clear financial visualization indicators"
    ],
    techStack: ["React", "JavaScript", "CoinGecko / Market APIs", "Tailwind CSS", "Chart Integration"],
    githubUrl: "https://github.com",
    metrics: "Live Market API Feeds",
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: "amazon-scholar",
    title: "Amazon Scholar",
    organization: "Amazon",
    year: "2024",
    category: "award",
    badge: "SCHOLARSHIP",
    description: "Selected for the competitive Amazon Scholar initiative, recognizing outstanding academic performance, leadership, and technical potential in computer science.",
    evidencePoints: [
      "Selected through a rigorous national evaluation process",
      "Engaged in technical mentorship and engineering masterclasses",
      "Recognized for foundational problem-solving and software engineering drive"
    ]
  },
  {
    id: "sih-hackathon",
    title: "Top 3 — Smart India Hackathon Internal",
    organization: "Smart India Hackathon (SIH)",
    year: "2024",
    category: "hackathon",
    badge: "TOP 3 FINALIST",
    description: "Achieved top 3 ranking in the college-level Smart India Hackathon internal evaluation with an innovative, socially impactful software solution.",
    evidencePoints: [
      "Rapid prototyping and collaborative full-stack development under intense deadline",
      "Architected clean solution design addressing national challenge problem statement",
      "Successfully pitched technical architecture and live demo to panel of faculty judges"
    ]
  },
  {
    id: "dsa-milestone",
    title: "120+ Algorithmic Problems Solved",
    organization: "LeetCode & Competitive Platforms",
    year: "2024–Present",
    category: "competitive",
    badge: "ALGORITHMIC MILESTONE",
    description: "Active practice on LeetCode and competitive programming platforms, consistently sharpening algorithmic efficiency and data structure proficiency.",
    evidencePoints: [
      "Mastery of Arrays, Two Pointers, Sliding Window, and Hash Maps",
      "Solid foundation in Trees, Binary Search, Recursion, and Dynamic Programming",
      "Focus on optimal time and space complexity analysis"
    ]
  },
  {
    id: "academic-excellence",
    title: "B.Tech Computer Science Engineering",
    organization: "Computer Science & Engineering Department",
    year: "2024–2028",
    category: "academic",
    badge: "ACADEMIC",
    description: "Pursuing Bachelor of Technology in CSE with dedicated focus on systems engineering, algorithm design, and modern software paradigms.",
    evidencePoints: [
      "Consistent academic engagement in core computer science subjects",
      "Strong grasp of Object-Oriented Programming and Software Lifecycle",
      "Expected Graduation: 2028"
    ]
  }
];

export const JOURNEY_DATA: JourneyMilestone[] = [
  {
    year: "2024 — Present",
    phase: "PHASE 01 • FOUNDATIONS",
    title: "Programming Fundamentals & Algorithmic Rigor",
    subtitle: "Core Computer Science, Java, and Problem Solving",
    description: "Initiated rigorous Computer Science Engineering curriculum. Mastered Java, object-oriented concepts, and computational problem-solving. Solved 120+ challenges across fundamental data structures.",
    skills: ["Java", "OOP", "Data Structures", "Algorithms", "Git"],
    status: "Completed"
  },
  {
    year: "2024 — 2025",
    phase: "PHASE 02 • WEB & SYSTEMS",
    title: "Full-Stack Development & Applied Projects",
    subtitle: "Frontend Architecture, APIs, and Real-World Applications",
    description: "Expanded into modern web development with React and JavaScript. Built and engineered practical applications including Jal Rakshak (rural water monitoring) and Crypto Tracker.",
    skills: ["React", "JavaScript", "Tailwind CSS", "REST APIs", "Python"],
    status: "Completed"
  },
  {
    year: "2025 — Present",
    phase: "PHASE 03 • INNOVATION & HONORS",
    title: "Intelligent Systems, Hackathons & Amazon Scholar",
    subtitle: "AI Exploration, Top 3 Hackathon, and Advanced Scalability",
    description: "Earned selection as Amazon Scholar and secured Top 3 in SIH Internal Hackathon. Currently developing Open Talk, exploring AI-augmented applications, and preparing for future engineering internships.",
    skills: ["AI Integration", "Amazon Scholar", "Hackathons", "Spring Boot (Learning)", "AWS (Exploring)"],
    status: "Current"
  },
  {
    year: "2026 — 2028",
    phase: "PHASE 04 • HORIZON",
    title: "Software Engineering & Industry Impact",
    subtitle: "B.Tech CSE Graduation & Professional Engineering",
    description: "Advancing toward software developer roles, high-scale distributed architectures, and creating impactful software systems.",
    skills: ["System Architecture", "B.Tech CSE '28", "Cloud Systems"],
    status: "Current"
  }
];
