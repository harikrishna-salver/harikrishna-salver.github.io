import { ResumeData } from "../types/common";

export const resumeData: ResumeData = {
  name: "Hari Krishna Salver",
  title: "Senior Software Engineer",
  summary:
    "Senior Software Engineer with 9.5 years of experience designing and scaling frontend-heavy platforms. Deep expertise in React, Redux and JavaScript, with proven impact in frontend architecture, performance, accessibility, and AI-powered product and developer tooling.",
  contact: {
    phone: "+91 94940 59837",
    email: "harikrishna.salver@gmail.com",
    location: "Hyderabad, Telangana, India",
    linkedin: "https://www.linkedin.com/in/harikrishnasalver/",
    github: "https://github.com/76hari",
  },
  skillCategories: [
    {
      category: "Frontend & Mobile",
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "React Native",
        "Redux",
        "Next.js",
        "Micro-Frontends (Module Federation)",
        "GraphQL",
        "Apollo Client",
        "HTML",
        "CSS/SCSS",
        "Jest",
        "React Testing Library",
      ],
    },
    {
      category: "Backend & Core",
      skills: [
        "Node.js",
        "Express",
        "GraphQL (Apollo Server)",
        "Ruby on Rails",
        "PHP",
        "Laravel",
        "Microservices",
      ],
    },
    {
      category: "AI & Developer Productivity",
      skills: [
        "OpenAI GPT API Integration",
        "Cursor AI",
        "CI/CD Orchestration",
        "GitHub Actions",
        "Jenkins Pipelines",
      ],
    },
    {
      category: "Engineering Practices",
      skills: [
        "Frontend System Design & Architecture",
        "Performance Optimisation",
        "Accessibility Compliance (NVDA/JAWS/WCAG)",
        "Internationalisation (i18n, LTR/RTL)",
        "Test-Driven Development (TDD)",
        "Agile Methodologies",
      ],
    },
  ],
  experience: [
    {
      company: "Skillsoft",
      location: "Hyderabad, India",
      role: "Senior Software Engineer II",
      period: "Aug 2022 - Present",
      bullets: [
        {
          title: "Frontend Platform Architecture",
          text: "Architected and delivered scalable frontend features for the Percipio learning platform, serving millions of global users using React, Redux, and GraphQL.",
        },
        {
          title: "Backend Development",
          text: "Built backend-for-frontend (BFF) services using Node.js, Apollo Server, and CRUD APIs to support frontend features.",
        },
        {
          title: "AI Innovation",
          text: "Integrated OpenAI GPT APIs to deliver video and course summarisation features, improving content clarity by 30%.",
        },
        {
          title: "AI Tools & Dev Productivity",
          text: "Leveraged Cursor AI to accelerate development, increasing productivity by 25%. Built an automated AI code review system using GitHub Actions, streamlining the PR process and enforcing code quality standards.",
        },
        {
          title: "CI/CD Optimisation",
          text: "Reduced Jenkins build times by ~25% (30m → 22m) through parallelisation. Migrated pipelines to GitHub Actions with Matrix Strategy, cutting unit test runtime by 50% (15m → 8m).",
        },
        {
          title: "Web Security & CSP",
          text: "Implemented Content Security Policy (CSP) and frontend security best practices to reduce XSS and third-party script risks.",
        },
        {
          title: "Media Platform Engineering",
          text: "Transformed learning experiences by building an in-house PercipioPlayer using Video.js and developing Book Reader 2.0 with enhanced navigation and accessibility.",
        },
        {
          title: "Production Stability",
          text: "Active PER (Performance, Escalation, Resolution) triage team member, prioritising P1 issues, performing root cause analysis, and delivering rapid fixes to maintain 99.9% platform uptime.",
        },
        {
          title: "Mentorship & Enablement",
          text: "Guided and onboarded new developers, accelerating ramp-up through platform architecture and codebase knowledge sharing.",
        },
        {
          title: "Awards & Recognition",
          text: "Multiple Spot Awards for resolving critical production issues; Sprint Achiever Awards for consistent delivery; Above & Beyond Award for technical leadership and team support.",
        },
      ],
    },
    {
      company: "Skillsoft",
      location: "Hyderabad, India",
      role: "Senior Software Engineer",
      period: "Sep 2020 - Aug 2022",
      bullets: [
        {
          title: "Frontend & Feature Scaling",
          text: "Developed the front-end for the Percipio learner platform, focusing on building and scaling core user-facing features.",
        },
        {
          title: "Performance Optimisation",
          text: "Optimised page load and overall performance, resulting in measurable improvements to load times and user engagement metrics.",
        },
        {
          title: "Code Coverage & Health",
          text: "Led code coverage initiatives, achieving 80% coverage using Jest and React Testing Library.",
        },
        {
          title: "Video Platform Engineering",
          text: "Enhanced JW Player and HTML5 implementations to improve the video viewing experience. Built a tracking system, reducing playback issues by 40%.",
        },
        {
          title: "Accessibility Compliance",
          text: "Ensured accessibility across major features with keyboard navigation, screen reader support (NVDA, JAWS), and ARIA patterns to deliver an inclusive user experience.",
        },
        {
          title: "Codebase Modernisation",
          text: "Modernised the codebase by migrating deprecated React features and upgrading test suites to ensure long-term stability.",
        },
        {
          title: "Internationalisation (i18n)",
          text: "Implemented multi-language and RTL/LTR support using react-intl for 15+ locales, providing a seamless global user experience.",
        },
      ],
    },
    {
      company: "Egnify Technologies",
      location: "Hyderabad, India",
      role: "Senior Product Engineer (Frontend & Mobile)",
      period: "Apr 2019 - Aug 2020",
      bullets: [
        {
          title: "Team Leadership & Delivery",
          text: "Led a team of 5 web and mobile developers, managing project timelines and ensuring timely, high-quality delivery.",
        },
        {
          title: "Technical Architecture Design",
          text: "Designed scalable technical architecture for both web and mobile applications to support growth and long-term maintainability.",
        },
        {
          title: "Modular Codebase & Reusability",
          text: "Modularised the codebase at project and feature levels, improving code reuse and accelerating development across the team.",
        },
        {
          title: "Release Management & Deployment",
          text: "Managed end-to-end mobile application releases, including deployments and app store submissions.",
        },
        {
          title: "Mentorship",
          text: "Mentored junior developers and interns, providing technical guidance, conducting code reviews, and fostering team growth.",
        },
      ],
    },
    {
      company: "Egnify Technologies",
      location: "Hyderabad, India",
      role: "Software Developer (Full Stack)",
      period: "Aug 2017 - Mar 2019",
      bullets: [
        {
          title: "Full-Stack Software Development",
          text: "Built an analytics and reporting platform for schools, automating the entire paper report generation process.",
        },
        {
          title: "Code Refactoring & Optimisation",
          text: "Refactored the existing codebase using DRY principles, eliminating 40% of redundant code to improve maintainability and clarity.",
        },
        {
          title: "End-to-End Feature Development",
          text: "Developed complete platform features, handling database logic, reporting workflows, and frontend UI implementation.",
        },
      ],
    },
    {
      company: "Tazzobikes",
      location: "Hyderabad, India",
      role: "Software Development Engineer",
      period: "Jul 2016 - Jul 2017",
      bullets: [
        {
          title: "Frontend Development & SEO Optimisation",
          text: "Handled front-end development and implemented SEO improvements, enhancing site performance and search visibility.",
        },
        {
          title: "Internal Analytics Dashboard",
          text: "Built an internal analytics dashboard from scratch to track and visualize company operational data, enabling data-driven decision making.",
        },
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "IIIT Basar",
      year: "2016",
    },
  ],
  projects: [
    {
      id: "cosmaLauncher",
      title: "Cosma Launcher",
      tag: "Productivity & Mobile UX",
      description:
        "An elegant, ultra-minimalist launch interface engineered to systematically reduce screen-time, categorize native utilities dynamically, and offer sub-millisecond tactile launcher actions.",
      impact:
        "Successfully achieved high active retention rates by offering a clean, customizable dashboard showing vital focus statistics and rapid application launching without the usual noise.",
      technologies: [
        "TypeScript",
        "React Native",
        "Android Core",
        "Tailwind CSS",
      ],
      url: "/projects/cosma-launcher",
    },
    {
      id: "countdown",
      title: "Countdown",
      tag: "Utility & Time Management",
      description:
        "A beautifully designed, distraction-free countdown timer application for Android that helps you cherish and track your most significant life milestone dates and focus intervals with elegance.",
      impact:
        "Designed with Jetpack Compose and minimal design templates to lower baseline visual cognitive load, offering widget setups and robust custom reminders.",
      technologies: ["Kotlin", "Android SDK", "Jetpack Compose", "Material 3"],
      url: "/projects/countdown",
    },
  ],
};
