import { Code2, Server, Database, Wrench } from "lucide-react";

export const personalInfo = {
  name: "Ibrahim Jlidi",
  title: "Full-Stack & AI DevOps Engineer",
  titleFr: "Ingénieur Full-Stack & DevOps IA",
  tagline: "AI-driven web apps, E-commerce & Feature Teams Specialist",
  email: "ibrahimjlidi23@gmail.com",
  phone: "+216 23 84 46 41",
  location: "Tunis / Remote",
  website: "https://ibrahimjlidi-portfolio.netlify.app",
  github: "https://github.com/ibrahimjlidi",
  linkedin: "https://linkedin.com/in/ibrahimjlidi",
  about: "AI & Magento (Adobe Commerce) Full Stack Developer with experience building AI-driven web applications, performing web vulnerability audits, and contributing to international e-commerce platforms within feature teams. Specialized in Hyvä frontend architecture, performance optimization, and scalable component design using PHP, Alpine.js, and Tailwind CSS. Experienced with LLM integrations, prompt engineering, and AI-based automation. Also experienced in full-stack development using the MERN stack (MongoDB, Express, React, Node.js). Comfortable working in agile environments, delivering maintainable, business-oriented solutions.",
  aboutFr: "Développeur Full Stack & IA (Adobe Commerce / Magento) avec expérience dans la création d'applications web pilotées par l'IA, les audits de vulnérabilités web, et la contribution à des plateformes e-commerce internationales. Spécialisé en architecture frontend Hyvä, optimisation des performances et conception de composants évolutifs avec PHP, Alpine.js et Tailwind CSS. Expérience des intégrations LLM et du prompt engineering. À l'aise dans les environnements agiles pour livrer des solutions maintenables et orientées métier."
};

/**
 * @typedef {{ category: string, icon: import('lucide-react').LucideIcon, items: string[] }} SkillGroup
 * @typedef {{ id: number, role: string, company: string, date: string, location: string, description: string[] }} ExperienceEntry
 * @typedef {{
 *   id: string,
 *   title: string,
 *   projectUrl: string,
 *   image?: string,
 *   stack: string[],
 *   architecture: { en: string, fr: string },
 *   performance: { en: string, fr: string },
 *   deployment: { en: string, fr: string }
 * }} ArchitectureHighlight
 */

/** @type {SkillGroup[]} */
export const skills = [
  {
    category: "Front-End",
    icon: Code2,
    items: ["React", "Next.js", "Angular", "Tailwind CSS", "TypeScript", "Alpine.js", "Hyvä"]
  },
  {
    category: "Back-End",
    icon: Server,
    items: ["Node.js", "Express.js", "NestJS", "Laravel", "Symfony", "PHP / Magento 2"]
  },
  {
    category: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "MySQL"]
  },
  {
    category: "DevOps & AI",
    icon: Wrench,
    items: ["Docker", "Kubernetes", "GitLab CI/CD", "Linux / VPS", "Git", "AI workflows", "LLM integration"]
  }
];

/** @type {ExperienceEntry[]} */
export const experience = [
  {
    id: 1,
    role: "Web Developer",
    company: "IoTechnologies",
    date: "Sep 2022 – Present",
    location: "Medenine / Remote",
    description: [
      "Contributed to Magento 2 (Adobe Commerce) projects as part of a feature team",
      "Developed scalable UI components using Hyvä Theme, Tailwind CSS, and Alpine.js",
      "Implemented AI-powered features and integrations (LLMs, prompt engineering) in client projects",
      "Conducted web vulnerability audits and implemented remediations to improve security posture",
      "Collaborated with backend developers, designers, and stakeholders",
      "Integrated Algolia Search (Autocomplete + InstantSearch)",
      "Built reusable CMS-driven components (widgets, sliders, banners)",
      "Implemented a dynamic multi-level mega menu (mobile + desktop)",
      "Participated in performance optimization and debugging",
      "Worked on international platforms: Atol.fr (Magento) and Elite-Auto.fr (Angular + NestJS)"
    ]
  },
  {
    id: 2,
    role: "Freelance Developer",
    company: "Weecode",
    date: "Nov 2023 – Present",
    location: "Remote",
    description: [
      "Delivered full-stack web and mobile applications for clients",
      "Collaborated with teams on feature implementation and optimization"
    ]
  },
  {
    id: 3,
    role: "Instructor",
    company: "Designet",
    date: "Jan 2025 – Present",
    location: "Remote",
    description: [
      "Delivered MERN stack training (MongoDB, Express, React, Node.js)",
      "Taught REST APIs, authentication, and scalable architecture",
      "Mentored students on real-world full-stack projects"
    ]
  },
  {
    id: 4,
    role: "Freelance Developer",
    company: "Personal Projects",
    date: "Jun 2020 – Aug 2022",
    location: "Remote",
    description: [
      "Developed websites and business applications for local clients",
      "Built responsive frontends and integrated backend APIs",
      "Collaborated directly with clients for delivery and improvements"
    ]
  }
];

/** @type {ArchitectureHighlight[]} */
export const architectureHighlights = [
  {
    id: "fuelstation-erp",
    title: "FuelStation ERP v2.0",
    projectUrl: "https://kiosk-tunisia.vercel.app/",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    architecture: {
      en: "MERN application bringing station, pump, product, purchase, and expense operations together with role-based access.",
      fr: "Application MERN réunissant la gestion des stations, pompes, produits, achats et dépenses avec un accès par rôle."
    },
    performance: {
      en: "Five operational areas are managed in one interface, with permissions tailored to staff roles.",
      fr: "Cinq domaines opérationnels sont réunis dans une interface, avec des permissions adaptées aux rôles."
    },
    deployment: {
      en: "Live application deployed on Vercel.",
      fr: "Application en ligne déployée sur Vercel."
    }
  },
  {
    id: "elite-auto",
    title: "Elite-Auto E-Commerce",
    projectUrl: "https://www.elite-auto.fr/",
    stack: ["Angular", "NestJS"],
    architecture: {
      en: "Contributed to an international e-commerce platform using Angular and NestJS within a feature team.",
      fr: "Contribution à une plateforme e-commerce internationale avec Angular et NestJS au sein d'une feature team."
    },
    performance: {
      en: "Participated in performance optimization and debugging.",
      fr: "Participation à l'optimisation des performances et au débogage."
    },
    deployment: {
      en: "Delivered collaboratively with backend, design, and stakeholder teams.",
      fr: "Livraison en collaboration avec les équipes backend, design et les parties prenantes."
    }
  },
  {
    id: "atol-hyva",
    title: "Atol.fr Magento 2 / Hyvä",
    projectUrl: "https://www.atol.fr/",
    image: "/screenshots/atol.JPG",
    stack: ["Magento 2", "Hyvä", "Alpine.js", "Tailwind CSS"],
    architecture: {
      en: "Built reusable, CMS-driven components for a Magento 2 storefront using Hyvä, Alpine.js, and Tailwind CSS.",
      fr: "Création de composants réutilisables pilotés par le CMS pour une boutique Magento 2 avec Hyvä, Alpine.js et Tailwind CSS."
    },
    performance: {
      en: "Contributed to storefront performance optimization and debugging.",
      fr: "Contribution à l'optimisation des performances et au débogage de la boutique."
    },
    deployment: {
      en: "Shipped reusable storefront features as part of an international feature team.",
      fr: "Livraison de fonctionnalités réutilisables au sein d'une feature team internationale."
    }
  }
];

export const education = [
  {
    id: 1,
    degree: "Master’s in Software Engineering",
    school: "ISIMED, Medenine",
    date: "2019 – 2021"
  },
  {
    id: 2,
    degree: "Bachelor’s in Computer Science",
    school: "ISIMED, Medenine",
    date: "2015 – 2018"
  }
];

/** @type {PortfolioProject[]} */
export const projects = [
  {
    id: 1,
    title: "AI Career Coach",
    category: "AI / Web",
    description: "An AI-driven career coach that offers interview preparation, CV feedback, and personalized career advice.",
    tech: ["React", "AI", "Tailwind CSS"],
    status: "Deployed",
    link: "https://ai-career-coach-seven-beta.vercel.app/",
    image: "/screenshots/Ai-Career.JPG",
    screenshots: ["/screenshots/Ai-Career.JPG"]
  },
  {
    id: 2,
    title: "E-commerce Web Application (MERN)",
    category: "Full Stack",
    description: "Developing a full-stack e-commerce platform with modern architecture and scalable design. Implemented product management, authentication, and dynamic data handling.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    status: "In Progress",
    link: "https://eshop-eco.vercel.app/",
    image: "/screenshots/shop.JPG",
    screenshots: ["/screenshots/shop.JPG"]
  },
  {
    id: 3,
    title: "Hyvä CMS Components System (Atol.fr)",
    category: "Magento",
    description: "Developed reusable Magento components enabling dynamic content management. Focused on scalability and maintainability for business users.",
    tech: ["Magento 2", "PHP", "Hyvä", "Alpine.js", "Tailwind CSS"],
    status: "Completed",
    link: "https://www.atol.fr",
    image: "/screenshots/atol.JPG",
    screenshots: ["/screenshots/atol.JPG", "/screenshots/atol2.JPG", "/screenshots/atol3.JPG"]
  },
  {
    id: 4,
    title: "Movie Metro",
    category: "Frontend",
    description: "A movie discovery and search app with clean visual browsing for films and shows.",
    tech: ["React", "Tailwind CSS", "APIs", "Netlify"],
    status: "Completed",
    link: "https://movie-metro.netlify.app",
    image: "/screenshots/movie.JPG",
    screenshots: ["/screenshots/movie.JPG"]
  },
  {
    id: 5,
    title: "Safoua Academy",
    category: "Full Stack",
    description: "Developing an educational platform for online learning and student management.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    status: "In Progress",
    link: "https://safoua-academy.vercel.app",
    image: "/screenshots/safwa.JPG",
    screenshots: ["/screenshots/safwa.JPG", "/screenshots/safwa2.JPG"]
  },
  {
    id: 6,
    title: "GreenLife",
    category: "Full Stack",
    description: "Creating a sustainability platform focused on healthy living and eco-friendly products.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    status: "In Progress",
    link: "https://greenlife-web-l30d.onrender.com/",
    image: "/screenshots/green.JPG",
    screenshots: ["/screenshots/green.JPG", "/screenshots/green2.JPG", "/screenshots/green3.JPG", "/screenshots/green4.JPG"]
  },
  {
    id: 7,
    title: "AiCoach",
    category: "Full Stack",
    description: "Developing a personalized AI coaching platform for fitness and wellness guidance.",
    tech: ["React", "Express.js", "MongoDB", "Tailwind CSS"],
    status: "In Progress",
    link: "https://aicoach-phi-mocha.vercel.app/login",
    image: "/screenshots/aicoach.JPG",
    screenshots: ["/screenshots/aicoach.JPG", "/screenshots/aicoach2.JPG", "/screenshots/aicoach3.JPG", "/screenshots/aicoach4.JPG", "/screenshots/aicoach5.JPG", "/screenshots/aicoach6.JPG", "/screenshots/aicoach7.JPG"]
  },
  {
    id: 8,
    title: "Express.js API Documentation Guide",
    category: "Backend",
    description: "Comprehensive API documentation site for Node.js and Express.js backend development. Includes authentication, endpoints, error handling, and best practices with code examples.",
    tech: ["Node.js", "Express.js", "API Documentation", "REST APIs"],
    status: "Completed",
    link: "https://node-express-guid.netlify.app/",
    image: "/screenshots/node.JPG",
    screenshots: ["/screenshots/node.JPG", "/screenshots/node2.JPG", "/screenshots/node3.JPG"]
  },
  {
    id: 9,
    title: "MediTravel - Medical Tourism Platform",
    category: "Full Stack",
    description: "A comprehensive medical tourism platform featuring clinic discovery, specialty search, and AI-powered coordination. Integrated with Gemini AI for document translation and personalized care itineraries.",
    tech: ["React", "Node.js", "Tailwind CSS", "AI Integration", "Gemini API"],
    status: "Completed",
    link: "https://projects-template.netlify.app/",
    image: "/screenshots/medtour.JPG",
    screenshots: ["/screenshots/medtour.JPG", "/screenshots/medtour2.JPG", "/screenshots/medtour3.JPG", "/screenshots/medtour4.JPG", "/screenshots/medtour5.JPG"]
  },
  {
    id: 10,
    title: "City's Weather App",
    category: "Frontend",
    description: "A weather application that allows users to search for real-time weather information by city name. Built with React for a responsive and interactive user experience.",
    tech: ["React", "Weather API", "Tailwind CSS", "Netlify"],
    status: "Completed",
    link: "https://citys-weather.netlify.app/",
    image: "/screenshots/weather.JPG",
    screenshots: ["/screenshots/weather.JPG"]
  },
  {
    id: 11,
    title: "Mental Calcul - Math Learning Platform",
    category: "Frontend",
    description: "An interactive Arabic educational platform designed for 5th-grade students to practice and improve mental math skills. Engaging and user-friendly interface for mathematics learning.",
    tech: ["React", "Arabic Localization", "Educational App"],
    status: "Completed",
    link: "https://mentalcalcul.netlify.app/",
    image: "/screenshots/mental.JPG",
    screenshots: ["/screenshots/mental.JPG", "/screenshots/mental2.JPG", "/screenshots/mental3.JPG", "/screenshots/mental4.JPG", "/screenshots/mental5.JPG"]
  },
  {
    id: 12,
    title: "FuelStation ERP v2.0",
    category: "Full Stack",
    description: "A completed MERN stack fuel station ERP for Tunisia, featuring station management, pumps, products, purchases, expenses, and role-based access control.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    status: "Completed",
    link: "https://kiosk-tunisia.vercel.app/",
    image: "/screenshots/kiosk1.PNG",
    screenshots: ["/screenshots/kiosk1.PNG", "/screenshots/kiosk2.PNG", "/screenshots/kiosk3.PNG", "/screenshots/kiosk4.PNG"]
  }
  ,
   {
    id: 13,
    title: "EduInsight",
    category: "Full Stack",
    description: "An educational platform focused on student learning, course management, and engaging digital experiences.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    status: "In Progress",
    link: "https://edu-insight.vercel.app/",
    image: "/screenshots/edun.JPG",
    screenshots: ["/screenshots/edun.JPG", "/screenshots/edun2.JPG", "/screenshots/edun3.JPG"]
  },
 
  {
    id: 14,
    title: "AI Web Vulnerability Audit System",
    category: "AI / Security",
    description: "A web vulnerability auditing system enhanced by AI to detect common security issues and suggest remediations.",
    tech: ["React", "AI", "Security"],
    status: "Deployed",
    link: "https://ai-web-vulnerability-audit-system.vercel.app/",
    image: "/screenshots/audit.JPG",
    screenshots: ["/screenshots/audit.JPG", "/screenshots/audit2.JPG"]
  },
  {
    id: 15,
    title: "Security Audit Platform",
    category: "AI / Security",
    description: "A modern security-focused platform for identifying vulnerabilities, reviewing web risks, and recommending actionable safeguards.",
    tech: ["React", "AI", "Security", "Vulnerability Review"],
    status: "Deployed",
    link: "https://security-tau-seven-51.vercel.app/",
    image: "https://placehold.co/1200x800/0f172a/ffffff?text=Security+Audit",
    screenshots: ["https://placehold.co/1200x800/0f172a/ffffff?text=Security+Audit"]
  },
  {
    id: 16,
    title: "AI RAG Assistant",
    category: "AI / RAG",
    description: "An AI-powered retrieval assistant for grounded question answering, document discovery, and contextual insights.",
    tech: ["React", "AI", "RAG", "Tailwind CSS"],
    status: "Deployed",
    link: "https://rag-five-alpha.vercel.app/",
    image: "/screenshots/rag.JPG",
    screenshots: ["/screenshots/rag.JPG", "/screenshots/rag2.JPG"]
  },
  {
    id: 17,
    title: "MobiTech Maghreb",
    category: "E-commerce",
    description: "An online store for new smartphones from Apple, Samsung, Xiaomi, and other brands, with delivery across the Maghreb and warranty support.",
    tech: ["E-commerce", "Smartphones", "Product Catalog"],
    status: "Completed",
    link: "https://mobiphone-flame.vercel.app/",
    image: "/screenshots/mobi1.PNG",
    screenshots: ["/screenshots/mobi1.PNG", "/screenshots/mobi2.PNG", "/screenshots/mobi3.PNG", "/screenshots/mobi4.PNG"]
  },
  {
    id: 18,
    title: "Hifz Quran App",
    category: "Education",
    description: "An Arabic-language Quran app with a focused interface for reading and memorization practice.",
    tech: ["Quran", "Arabic", "Memorization"],
    status: "Completed",
    link: "https://hifz-app-rho.vercel.app/",
    image: "/screenshots/coran1.PNG",
    screenshots: ["/screenshots/coran1.PNG", "/screenshots/coran2.PNG", "/screenshots/coran3.PNG", "/screenshots/coran4.PNG"]
  },
  {
    id: 19,
    title: "DeutschQuest",
    category: "Education",
    description: "A German vocabulary learning experience for building and practicing language skills.",
    tech: ["German", "Vocabulary", "Language Learning"],
    status: "Completed",
    link: "https://deutschquest-ten.vercel.app/",
    image: "/screenshots/german.PNG",
    screenshots: ["/screenshots/german.PNG", "/screenshots/german1.PNG", "/screenshots/german2.PNG", "/screenshots/german3.PNG"]
  },
  {
    id: 20,
    title: "NovaStore",
    category: "E-commerce",
    description: "An Arabic and French inventory and sales management app for retail stores.",
    tech: ["Inventory Management", "Sales", "Arabic", "French"],
    status: "Completed",
    link: "https://novastore-black.vercel.app/",
    image: "/screenshots/nova1.PNG",
    screenshots: ["/screenshots/nova1.PNG", "/screenshots/nova2.PNG", "/screenshots/nova3.PNG", "/screenshots/nova4.PNG", "/screenshots/nova5.PNG", "/screenshots/nova6.PNG"]
  }
];

/**
 * @typedef {{
 *   id: number,
 *   title: string,
 *   category: string,
 *   description?: string,
 *   tech?: string[] | string,
 *   image?: string,
 *   screenshots?: string[],
 *   link?: string,
 *   repoUrl?: string | null,
 *   status?: string
 * }} PortfolioProject
 * @typedef {{ value: string, label: string }} ProjectMetric
 * @typedef {{ challenge: string, system: string, outcomes: string }} ProjectArchitectureNotes
 * @typedef {{
 *   id: number,
 *   title: string,
 *   category: 'ERP' | 'E-Commerce' | 'AI & Analytics' | 'Other',
 *   featured: boolean,
 *   summary: string,
 *   metrics: ProjectMetric[],
 *   techStack: string[],
 *   image: string,
 *   liveUrl: string | null,
 *   repoUrl: string | null,
 *   architectureNotes: ProjectArchitectureNotes,
 *   screenshots: string[],
 *   status: string
 * }} ProjectShowcaseEntry
 */

const showcaseCategories = {
  "E-commerce": "E-Commerce",
  Magento: "E-Commerce",
  "AI / Web": "AI & Analytics",
  "AI / Security": "AI & Analytics",
  "AI / RAG": "AI & Analytics"
};

const showcaseMetadata = {
  1: { category: "AI & Analytics" },
  2: { category: "E-Commerce" },
  7: { category: "AI & Analytics" },
  9: { category: "AI & Analytics" },
  12: {
    category: "ERP",
    featured: true,
    metrics: [
      { value: "05", label: "operations modules" },
      { value: "MERN", label: "full-stack system" },
      { value: "RBAC", label: "role-based access" }
    ],
    architectureNotes: {
      challenge: "Fuel station operators need a central place to manage stations, pumps, products, purchases and expenses while controlling staff permissions.",
      system: "MERN stack: React interface, Node.js and Express backend, and MongoDB data storage. The system includes role-based access control.",
      outcomes: "Five operational areas—stations, pumps, products, purchases and expenses—are managed in one system, with access controlled by user role."
    }
  },
  14: { category: "AI & Analytics" },
  15: { category: "AI & Analytics" },
  16: { category: "AI & Analytics" },
  17: { category: "E-Commerce" },
  20: { category: "E-Commerce" }
};

/**
 * Convert the admin-friendly project records into the showcase view model.
 * @param {PortfolioProject[]} sourceProjects
 * @returns {ProjectShowcaseEntry[]}
 */
export const toProjectShowcase = (sourceProjects) => sourceProjects.map((project) => {
  const metadata = showcaseMetadata[project.id] || {};
  const techStack = Array.isArray(project.tech)
    ? project.tech
    : String(project.tech || "").split(",").map((item) => item.trim()).filter(Boolean);
  const summary = project.description || "";

  return {
    id: project.id,
    title: project.title,
    category: metadata.category || showcaseCategories[project.category] || "Other",
    featured: Boolean(metadata.featured),
    summary,
    metrics: metadata.metrics || [],
    techStack: techStack.slice(0, 5),
    image: project.image || project.screenshots?.[0] || "https://placehold.co/1200x800/0f172a/ffffff?text=Project+Preview",
    liveUrl: project.link && project.link !== "#" ? project.link : null,
    repoUrl: project.repoUrl || null,
    architectureNotes: metadata.architectureNotes || {
      challenge: `Project brief: ${summary}`,
      system: techStack.length ? `Listed stack: ${techStack.join(", ")}.` : "Implementation details are not listed.",
      outcomes: project.status === "Completed"
        ? `Listed as completed. ${summary}`
        : `Current status: ${project.status || "In progress"}. ${summary}`
    },
    screenshots: Array.isArray(project.screenshots) ? project.screenshots : [],
    status: project.status || "In Progress"
  };
});

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Intermediate (B1/B2)" },
  { name: "French", level: "Intermediate (B1/B2)" },
  { name: "Italian", level: "Basic (A1/A2)" }
];
