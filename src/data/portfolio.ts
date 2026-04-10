export type NavItem = {
  label: string;
  href: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
  stack: string[];
};

export type ProjectItem = {
  title: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
  liveUrl?: string;
  codeUrl?: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Full-Stack Developer",
  heading: "I build fast, scalable web products that users trust and teams can grow.",
  subheading:
    "I am Mayank, a developer with 3+ years of production experience delivering React, Next.js, and API-driven applications, with deep expertise in WordPress engineering, performance optimization, and secure architecture.",
  stats: ["20+ Production Websites", "3+ Years Experience", "Performance + Security First"],
  primaryCta: { label: "View Projects", href: "#projects" },
  secondaryCta: { label: "Get Resume", href: "#contact" },
};

export const about = {
  title: "About Me",
  summary: [
    "I specialize in building modern, business-focused web applications that combine clean user experience with reliable engineering. My core stack includes JavaScript, React, Next.js, and REST APIs, with strong backend awareness across authentication and data workflows.",
    "Across recent roles, I have led WordPress and frontend initiatives for production websites, improving speed, uptime, and security while collaborating with SEO, content, and design teams. I focus on measurable outcomes: better Core Web Vitals, stronger protection, and maintainable codebases that scale.",
  ],
  highlights: [
    "20+ production websites delivered and maintained",
    "16+ websites optimized for security, performance, and uptime",
    "50+ landing pages built for conversion and speed",
    "DDoS mitigation across 15 domains with practical firewall strategy",
  ],
};

export const  skillGroups: SkillGroup[] = [
  {
    title: "Frontend Engineering",
    items: [
      "JavaScript (ES6+)",
      "React",
      "Next.js",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Performance Optimization",
      "Core Web Vitals",
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JSON",
      "Authentication (JWT, Nonce)",
    ],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "CMS & Headless Platforms",
    items: ["Wordpress", "Drupal", "Shopify"],
  },
  {
    title: "UI Builders & Content Tools",
    items: ["Elementor", "Divi", "WPBakery", "Beaver Builder", "Cornerstone Builder", "ACF", "Meta Box", "Pods"],
  },
  {
    title: "Performance, Security & Compliance",
    items: [
      "Caching",
      "CDN",
      "Minification",
      "Secure Authentication",
      "Access Control",
      "ADA Compliance",
      "GDPR Compliance",
    ],
  },
  {
    title: "Developer Tools",
    items: ["Git", "GitHub", "Chrome DevTools", "Figma"],
  },
  {
    title: "SEO & Web Optimization",
    items: ["On-Page SEO", "Semantic HTML", "Image Optimization", "Schema Markup", "Sitemap & Robots", "SEO Plugins (Yoast, RankMath)"],
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: "Sr. web Developer",
    company: "Savit",
    period: "Aug 2025 - Present",
    location: "Malad, Mumbai, India",
    achievements: [
      "Designed and maintained backend logic for scalable web applications.",
      "Developed and integrated RESTful APIs using JavaScript and server-side technologies.",
      "Implemented authentication and authorization mechanisms (JWT-based systems).",
      "Handled production support including debugging, issue resolution, and performance tuning.",
      "Optimized backend services for better response time and scalability.",
      "Collaborated with frontend developers to integrate user-facing elements with server-side logic.",
      "Conducted code reviews and ensured adherence to clean coding standards."
    ],
    stack: ["JavaScript", "REST APIs", "Node.js", "JWT"],
  },
  {
    role: "Sr. WordPress developer",
    company: "Nexsales",
    period: "Oct 2024 - July 2025",
    location: "Wadala, Mumbai, India",
    achievements: [
      "Developed backend logic and custom API endpoints for multiple web platforms.",
      "Managed and optimized databases for performance and reliability.",
      "Implemented security best practices to protect applications from vulnerabilities and attacks.",
      "Resolved production issues and improved system stability.",
      "Worked closely with cross-functional teams in an Agile environment."
    ],
    stack: ["WordPress", "PHP", "Databases", "Security"],
  },
  {
    role: "Web Developer",
    company: "Codeworkss",
    period: "Jan 2021 - Sep 2024",
    location: "Dombivli, India",
    achievements: [
      "Developed custom REST API endpoints and secured them using authentication mechanisms.",
      "Implemented role-based access control and data validation.",
      "Improved application performance and reduced load times by 20%.",
      "Handled backend troubleshooting and debugging tasks.",
      "Maintained structured and modular backend code for long-term scalability."
    ],
    stack: ["REST APIs", "Authentication", "RBAC", "Performance Optimization"],
  }
];

export const projects: ProjectItem[] = [
  {
    title: "Team Dashboard - Full-Stack Task Manager",
    summary: "A role-based task management dashboard for internal team execution.",
    problem: "Teams lacked a single workflow for ownership, visibility, and delivery status.",
    solution:
      "Built a React and Next.js frontend with WordPress REST API integration, role-based access, and clear task states.",
    impact: "Improved task clarity, reduced status friction, and enabled faster coordination.",
    stack: ["React", "Next.js", "JavaScript", "WordPress REST API", "JWT"],
    liveUrl: "https://mayank-padhi.vercel.app/",
    codeUrl: "https://github.com/Mpadhi2000",
  },
  {
    title: "Team Dashboard - WordPress Plugin",
    summary: "Custom plugin that brings secure team-task management into WP Admin.",
    problem: "Operations needed native WordPress control without external tool overhead.",
    solution:
      "Developed plugin modules with secure REST routes, permission checks, and extensible architecture.",
    impact: "Reduced manual coordination overhead and improved workflow consistency.",
    stack: ["PHP", "WordPress", "REST API", "Secure Authentication"],
    codeUrl: "https://github.com/Mpadhi2000",
  },
  {
    title: "Headless WordPress Portfolio Platform",
    summary: "A decoupled CMS setup for fast frontend delivery and flexible content workflows.",
    problem: "Theme-coupled workflows slowed UI iteration and content flexibility.",
    solution: "Used WordPress as a headless CMS with a modern frontend and structured content models.",
    impact: "Faster content updates, better maintainability, and cleaner separation of concerns.",
    stack: ["WordPress", "Next.js", "GraphQL", "Headless CMS"],
    liveUrl: "https://mayank-padhi.vercel.app/",
    codeUrl: "https://github.com/Mpadhi2000",
  },
  {
    title: "Enterprise Manufacturing Website",
    summary: "Custom WordPress solution for a major packaging manufacturer.",
    problem: "The platform needed reliable performance and maintainable long-term structure.",
    solution: "Built custom templates and optimized the delivery pipeline for production reliability.",
    impact: "Improved publishing workflows and platform stability.",
    stack: ["WordPress", "Custom PHP", "MySQL"],
    liveUrl: "https://www.anchorpackaging.com/",
  },
];

export const capabilities = [
  {
    title: "Frontend Engineering",
    points: [
      "Build responsive interfaces with React and Next.js",
      "Design reusable component architecture for scale",
      "Optimize Core Web Vitals across devices",
    ],
  },
  {
    title: "API and Backend Integration",
    points: [
      "Integrate REST APIs with resilient state handling",
      "Implement secure token-based authentication",
      "Handle edge cases and failure states predictably",
    ],
  },
  {
    title: "CMS and Platform Development",
    points: [
      "Develop custom WordPress themes and plugins",
      "Build headless WordPress experiences with modern frontends",
      "Customize content pipelines for maintainability",
    ],
  },
  {
    title: "Performance and Security",
    points: [
      "Apply caching, CDN, and asset optimization",
      "Harden access and authentication workflows",
      "Deliver ADA and GDPR-aware implementation",
    ],
  },
];

export const contact = {
  heading: "Let us build something high-impact.",
  copy:
    "I am open to frontend-focused and full-stack roles where product quality, performance, and engineering ownership matter.",
  email: "mayankpadhi91@gmail.com",
  phone: "+91 8104487457",
  linkedin: "https://www.linkedin.com/in/mayank-padhi",
  github: "https://github.com/Mpadhi2000",
};
