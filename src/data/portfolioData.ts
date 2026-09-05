export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Full-Stack Web' | 'Data Analytics & AI' | 'UI/UX & Web';
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
  techStack: string[];
  featured: boolean;
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: { name: string; level: number; highlight?: boolean; icon?: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'Internship' | 'Leadership';
  description: string[];
  badges: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  category: string;
  credentialId?: string;
}

export const PERSONAL_INFO = {
  name: "Ananth Ram S",
  titles: [
    "Full-Stack Web Developer",
    "UI/UX Designer",
    "Data Analyst",
    "Freelance Developer"
  ],
  tagline: "Building High-Impact Web Applications, AI Analytics & Sleek Digital Experiences",
  bio: "Multi-disciplinary software engineer & data analyst. I architect high-performance full-stack web platforms, design intuitive user interfaces, and build AI-driven data analytics pipelines specializing in React, TypeScript, Python, and Azure.",
  location: "Palakkad, Kerala, India",
  email: "ananthramsuresh05@gmail.com",
  phone: "+91 7736516973",
  linkedin: "https://www.linkedin.com/in/ananth-ram-s212005/",
  github: "https://github.com/ananthram-dotcom",
  cgpa: "8.0 / 10.0",
  photoUrl: "/ananth-photo.jpg",
  freelanceStatus: "Available for Freelance & Contract Projects"
};

export const METRICS = [
  { label: "CGPA (B.Sc Data Science)", value: "8.0", icon: "GraduationCap", detail: "Nehru Arts and Science College" },
  { label: "Live & GitHub Projects", value: "7+", icon: "Code2", detail: "Full-Stack, AI & Analytics" },
  { label: "Industry Internships", value: "2", icon: "Briefcase", detail: "Microsoft Azure & IIT Bombay ML" },
  { label: "Cabinet Ministries Led", value: "14", icon: "Users", detail: "Student Cabinet Advisor 2025-26" }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Full-Stack Web Development",
    description: "Engineering scalable web applications with modern frontend frameworks and reliable backend systems.",
    iconName: "Layout",
    skills: [
      { name: "React", level: 92, highlight: true },
      { name: "TypeScript", level: 88, highlight: true },
      { name: "JavaScript (ES6+)", level: 90, highlight: true },
      { name: "Node.js", level: 85 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Tailwind CSS", level: 92, highlight: true },
      { name: "RESTful APIs", level: 88 },
      { name: "MySQL", level: 86 },
      { name: "MongoDB", level: 82 },
      { name: "Streamlit", level: 85 },
      { name: "Vite", level: 90 }
    ]
  },
  {
    title: "UI/UX Design & Architecture",
    description: "Designing sleek, intuitive, responsive user interfaces with accessible design systems and glassmorphic aesthetics.",
    iconName: "Palette",
    skills: [
      { name: "Figma", level: 90, highlight: true },
      { name: "Canva", level: 88 },
      { name: "Responsive UI", level: 95, highlight: true },
      { name: "Component Architecture", level: 92 },
      { name: "Glassmorphism", level: 90 },
      { name: "Micro-Interactions", level: 88 },
      { name: "Design Systems", level: 86 }
    ]
  },
  {
    title: "Data Analytics & AI",
    description: "Extracting insights, building predictive models, and visualizing complex datasets.",
    iconName: "BarChart3",
    skills: [
      { name: "Power BI", level: 92, highlight: true },
      { name: "Python", level: 90, highlight: true },
      { name: "SQL", level: 88, highlight: true },
      { name: "R Language", level: 80 },
      { name: "Microsoft Azure", level: 84 },
      { name: "NLP (Natural Language Processing)", level: 86 },
      { name: "Data Visualization", level: 94 },
      { name: "QlikView", level: 78 },
      { name: "Supervised ML", level: 85 }
    ]
  },
  {
    title: "Generative AI & Modern Tools",
    description: "Leveraging cutting-edge AI tools and workflow automation for maximum developer productivity.",
    iconName: "Sparkles",
    skills: [
      { name: "Generative AI Tools", level: 92, highlight: true },
      { name: "Outskill GenAI Mastermind", level: 95 },
      { name: "Prompt Engineering", level: 90 },
      { name: "AI Agent Workflows", level: 85 },
      { name: "Git & GitHub", level: 88 }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "finora",
    title: "Finora",
    tagline: "AI-Assisted Communal Financial Monitoring & Governance Analytics",
    description: "An intelligent communal financial monitoring framework utilizing Natural Language Transaction Parsing and Cloud-Based Aggregation to deliver real-time transparency, automated financial auditing, and interactive governance dashboards.",
    category: "Data Analytics & AI",
    liveUrl: "https://finora-tracker.streamlit.app/",
    githubUrl: "https://github.com/ananthram-dotcom",
    highlights: [
      "Natural Language Transaction Parsing with NLP algorithms",
      "Cloud-based financial data aggregation pipeline",
      "Interactive Streamlit dashboard with real-time reporting",
      "Governance analytics for communal fund management"
    ],
    techStack: ["Python", "Streamlit", "NLP", "Cloud Aggregation", "Pandas", "Data Visualization"],
    featured: true,
    accentColor: "from-emerald-500 to-teal-700"
  },
  {
    id: "amaira",
    title: "Amaira",
    tagline: "AI-Driven Indian Fashion & Beauty E-Commerce Platform",
    description: "A full-stack e-commerce web application tailored for Indian fashion and beauty products. Features dynamic product filtering, cart & wishlist state management, user authentication workflows, and a responsive glassmorphism UI.",
    category: "Full-Stack Web",
    liveUrl: "https://amaira-two.vercel.app/",
    githubUrl: "https://github.com/ananthram-dotcom",
    highlights: [
      "Automated multi-criteria product search and filter engine",
      "Interactive Wishlist and Cart state management",
      "Secure authentication workflow simulation",
      "Mobile-first, high-conversion UI/UX component architecture"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Component Architecture"],
    featured: true,
    accentColor: "from-pink-500 to-rose-700"
  },
  {
    id: "bigger-nightingale",
    title: "Bigger Nightingale Manufacturing",
    tagline: "Smart Industrial Operational & Manufacturing Hub",
    description: "Industrial analytics web portal designed to monitor manufacturing throughput, yield metrics, equipment performance, and automated operational logs in real-time.",
    category: "Full-Stack Web",
    liveUrl: "https://bigger-nightingale-manufacturing-so.vercel.app/",
    githubUrl: "https://github.com/ananthram-dotcom",
    highlights: [
      "Real-time manufacturing throughput and yield dashboards",
      "Automated operational status report generation",
      "Clean corporate industrial UI/UX aesthetic",
      "Vercel high-speed zero-downtime deployment"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Data Analytics", "Vercel"],
    featured: true,
    accentColor: "from-blue-500 to-indigo-700"
  },
  {
    id: "reverie",
    title: "Reverie",
    tagline: "Next-Generation Interactive Web Experience",
    description: "A showcase web platform demonstrating state-of-the-art interactive UI patterns, dynamic particle layouts, parallax scroll scenes, and modern typography.",
    category: "UI/UX & Web",
    liveUrl: "https://reverie-source.vercel.app/",
    githubUrl: "https://github.com/ananthram-dotcom",
    highlights: [
      "Smooth micro-interactions and scroll parallax effects",
      "Custom responsive CSS & Tailwind design system",
      "Fluid dark/light visual theme experience",
      "Ultra-low latency rendering"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    featured: true,
    accentColor: "from-purple-500 to-violet-700"
  },
  {
    id: "good-whizbang",
    title: "Good Whizbang",
    tagline: "High-Performance Modern Web Platform",
    description: "High-speed modular web application focused on seamless user onboarding, dynamic content delivery, and interactive web elements.",
    category: "Full-Stack Web",
    liveUrl: "https://good-whizbang-source.vercel.app/",
    githubUrl: "https://github.com/ananthram-dotcom",
    highlights: [
      "Modular React component structure",
      "High performance 100/100 Lighthouse rating target",
      "Dynamic interactive card components",
      "Full Vercel serverless integration"
    ],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    featured: false,
    accentColor: "from-amber-500 to-orange-700"
  },
  {
    id: "gesundheit",
    title: "Gesundheit Curriculums",
    tagline: "Healthcare & Medical Education Portal",
    description: "Educational portal facilitating structured healthcare curricula, interactive medical modules, student assessment tracking, and medical curriculum navigation.",
    category: "Full-Stack Web",
    liveUrl: "https://gesundheit-curriculums.vercel.app/",
    githubUrl: "https://github.com/ananthram-dotcom",
    highlights: [
      "Structured curriculum track navigator for medical modules",
      "Clean accessible interface designed for clinical learners",
      "Progress tracking visualization",
      "Responsive layout for mobile and desktop review"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Content Architecture"],
    featured: false,
    accentColor: "from-cyan-500 to-blue-700"
  },
  {
    id: "movie-rec",
    title: "Movie Recommendation Model",
    tagline: "NLP Content-Based Movie Recommendation Engine",
    description: "Designed and built a content-based recommendation engine that processes textual movie attributes using Natural Language Processing (NLP) and TF-IDF vectorization, measuring similarity via Cosine Similarity for precise recommendations.",
    category: "Data Analytics & AI",
    githubUrl: "https://github.com/ananthram-dotcom",
    highlights: [
      "TF-IDF (Term Frequency-Inverse Document Frequency) text vectorization",
      "Cosine Similarity matrix computation for content matching",
      "NLP text cleaning, stop-word removal & tokenization",
      "Modular Python data pipeline with Pandas & Scikit-Learn"
    ],
    techStack: ["Python", "NLP", "TF-IDF", "Cosine Similarity", "Scikit-Learn", "Pandas"],
    featured: true,
    accentColor: "from-red-500 to-rose-800"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "nest-digital",
    role: "Cloud Computing & DevOps Intern",
    organization: "NeST Digital",
    location: "Kochi, Kerala",
    period: "June 2025 – July 2025",
    type: "Internship",
    description: [
      "Engineered and deployed cloud-based services and web applications utilizing Microsoft Azure ecosystem.",
      "Configured automated CI/CD pipelines, reducing manual deployment overhead and optimizing serverless execution.",
      "Gained hands-on expertise in cloud infrastructure management, resource monitoring, and scalable service architecture."
    ],
    badges: ["Microsoft Azure", "DevOps", "CI/CD Pipelines", "Cloud Services", "NeST Digital"]
  },
  {
    id: "iit-bombay",
    role: "Machine Learning & Neural Networks Intern",
    organization: "Techgyan Technologies with Avenues, IIT Bombay",
    location: "IIT Bombay Campus / Virtual",
    period: "October 2024 – November 2024",
    type: "Internship",
    description: [
      "Trained supervised learning algorithms and constructed predictive regression and classification models.",
      "Performed advanced data preprocessing, feature engineering, and hyperparameter tuning.",
      "Built multi-layer neural network implementations and evaluated model performance using statistical metrics."
    ],
    badges: ["Supervised ML", "Neural Networks", "Data Preprocessing", "IIT Bombay", "Techgyan"]
  },
  {
    id: "cabinet-advisor",
    role: "Advisor - Student Cabinet",
    organization: "Nehru Arts and Science College",
    location: "Palakkad, Kerala",
    period: "2025 – 2026 Academic Year",
    type: "Leadership",
    description: [
      "Selected as Cabinet Advisor due to outstanding performance as Research Minister in the preceding term.",
      "Led and advised the entire Student Cabinet comprising 14 distinct ministries, administering campus operations and institution events.",
      "Served as strategic liaison between executive administration, department heads, and the student body."
    ],
    badges: ["Cabinet Leadership", "14 Ministries Overseen", "Strategic Governance", "Event Operations"]
  },
  {
    id: "research-minister",
    role: "Research Minister - Student Cabinet",
    organization: "Nehru Arts and Science College",
    location: "Palakkad, Kerala",
    period: "2024 – 2025 Academic Year",
    type: "Leadership",
    description: [
      "Re-established and revitalized the college Research Cell to promote undergraduate research and student innovation.",
      "Coordinated, managed, and executed major college events, inter-collegiate festivals, and technical symposiums.",
      "Fostered cross-departmental academic collaboration and led student research initiatives."
    ],
    badges: ["Re-established Research Cell", "Ministerial Office", "Event Management", "Academic Research"]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "cert-power-bi",
    title: "Data Visualization with Power BI",
    issuer: "Microsoft",
    issueDate: "Feb 2026",
    category: "Data Analytics"
  },
  {
    id: "cert-cloud-nest",
    title: "Industry Immersion Program on Cloud Computing",
    issuer: "NeST Digital",
    issueDate: "June 2025",
    category: "Cloud & DevOps"
  },
  {
    id: "cert-mongodb",
    title: "Introduction to MongoDB for Students",
    issuer: "MongoDB Inc.",
    issueDate: "Aug 2024",
    category: "Databases"
  },
  {
    id: "cert-ml-iitb",
    title: "Machine Learning and Neural Network",
    issuer: "Techgyan Technologies / IIT Bombay",
    issueDate: "July 2024",
    category: "Machine Learning"
  },
  {
    id: "cert-infosys",
    title: "Software Engineering & Agile Software Development",
    issuer: "Infosys Springboard",
    issueDate: "Feb 2024",
    category: "Software Engineering"
  },
  {
    id: "cert-google-python",
    title: "Crash Course on Python",
    issuer: "Google",
    issueDate: "Jan 2024",
    category: "Programming"
  },
  {
    id: "cert-cisco-ds",
    title: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    issueDate: "Nov 2023",
    category: "Data Science"
  },
  {
    id: "cert-outskill-genai",
    title: "Generative AI Mastermind",
    issuer: "Outskill",
    issueDate: "2025",
    category: "Generative AI"
  }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science - Computer Science (Data Science)",
    institution: "Nehru Arts and Science College",
    location: "Palakkad, Kerala",
    period: "July 2023 - June 2026",
    score: "CGPA: 8.0 / 10.0",
    details: "Specialized coursework in Machine Learning, SQL, Big Data Processing, Web Development, and Predictive Analytics."
  },
  {
    degree: "Higher Secondary & Secondary Education",
    institution: "St. Raphael's Cathedral School",
    location: "Palakkad, Kerala",
    period: "March 2022 - May 2023",
    score: "12th Grade: 75% | 10th Grade: 84%",
    details: "Focus on Computer Science, Mathematics, and Physical Sciences."
  }
];
