import { Code2, Server, Database, Wrench } from "lucide-react";

export const personalInfo = {
  name: "Ibrahim Jlidi",
  title: "Ingénieur Full Stack",
  titleFr: "Ingénieur Full Stack",
  tagline: "Développement web · Architecture logicielle · Intelligence artificielle",
  email: "ibrahimjlidi23@gmail.com",
  phone: "+216 23 844 641",
  location: "Tunisie | Remote",
  website: "https://portfolio2026-six-vert.vercel.app",
  github: "https://github.com/ibrahimjlidi",
  linkedin: "https://linkedin.com/in/ibrahimjlidi",
  about: "Experienced Full-Stack Engineer specializing in React.js, Angular, Node.js, NestJS and TypeScript. I develop frontend and backend applications, design REST APIs, evolve microservice architectures, optimize performance, mentor developers, and integrate AI solutions including AI agents.",
  aboutFr: "Ingénieur Full Stack expérimenté dans la conception et le développement d’applications web, notamment pour des clients français. Spécialisé en React.js, Angular, Node.js, NestJS et TypeScript, j’interviens sur les développements frontend et backend, la conception d’API REST ainsi que l’évolution d’architectures microservices.",
  achievements: [
    "Reduced deployment time by 60% through CI/CD pipelines.",
    "Improved API response times by 35% after migration to microservices.",
    "Developed and integrated AI agents into existing web applications."
  ]
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
    items: ["React.js", "Next.js", "Angular", "Tailwind CSS", "SCSS", "HTML5", "CSS3", "Alpine.js", "Hyvä Theme", "RxJS"]
  },
  {
    category: "Back-End & API",
    icon: Server,
    items: ["Node.js", "NestJS", "Express.js", "PHP", "Symfony", "REST API"]
  },
  {
    category: "Languages & Data",
    icon: Database,
    items: ["JavaScript (ES6+)", "TypeScript", "PHP", "C#", "SQL", "MongoDB", "PostgreSQL", "SQL Server"]
  },
  {
    category: "Architecture, AI & DevOps",
    icon: Wrench,
    items: ["Microservices", "Clean Architecture", "Design Patterns", "OpenAI API", "AI Agents", "Docker", "Git", "GitLab CI/CD", "Postman", "Jira", "Cursor", "GitHub Copilot", "Agile", "Scrum"]
  }
];

/** @type {ExperienceEntry[]} */
export const experience = [
  {
    id: 1,
    role: "Ingénieur Full Stack",
    company: "SARL STE FLOWTEK CONSULTING",
    date: "Juil. 2025 – Nov. 2026",
    location: "Tunisie · Sur site",
    description: [
      "Conception et déploiement de solutions web full-stack et d'API RESTful sous TypeScript, Node.js, NestJS et PHP.",
      "Conteneurisation des environnements de développement et des services avec Docker pour uniformiser les pipelines CI/CD.",
      "Pilotage des optimisations de performance, du refactoring et des évolutions fonctionnelles pour Atol.fr et Elite-Auto.fr.",
      "Collaboration étroite avec les chefs de produit et les équipes pluridisciplinaires pour traduire les besoins métiers et SaaS en composants modulaires."
    ]
  },
  {
    id: 2,
    role: "Ingénieur Full Stack (MERN / Angular / PHP)",
    company: "SOCIÉTÉ IOLABS TECHNOLOGIES",
    date: "Sept. 2022 – Juin 2025",
    location: "Médenine, Tunisie · Sur site",
    description: [
      "Développement et maintenance d'applications web et microservices haute performance avec TypeScript, React, Angular, NestJS, Node.js et Magento 2 (Hyvä Theme).",
      "Contribution majeure à Atol.fr et Elite-Auto.fr, plateformes e-commerce Magento et portail automobile Angular / NestJS.",
      "Conception et sécurisation d'API RESTful connectées à PostgreSQL, MySQL et MongoDB.",
      "Migration d'une architecture monolithique vers des microservices, avec +35 % de rapidité sur les API et maintien des pipelines CI/CD avec Docker et Git."
    ]
  },
  {
    id: 3,
    role: "Développeur Full Stack",
    company: "Innsyapp",
    date: "Juin 2020 – Août 2022",
    location: "Tunisie · Freelance",
    description: [
      "Développement de modules web en PHP, JavaScript et MySQL dans le cadre de projets clients.",
      "Participation aux cycles Agile : sprints, réunions quotidiennes et rétrospectives.",
      "Débogage et optimisation de modules existants avec une réduction annoncée moyenne de 25 % des temps de chargement.",
      "Montée en compétences sur React.js et Node.js selon les besoins des projets."
    ]
  }
];

/** @type {ArchitectureHighlight[]} */
export const architectureHighlights = [
  {
    id: "fuelstation-erp",
    title: "FuelStation ERP v2.0",
    projectUrl: "https://kiosk-tunisia.vercel.app/",
    image: "/screenshots/kiosk1.PNG",
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
    image: "/screenshots/elite-auto.png",
    stack: ["Angular", "TypeScript", "RxJS", "NestJS", "SQL Server", "Docker"],
    architecture: {
      en: "Contributed to an international e-commerce platform using Angular and NestJS within a feature team.",
      fr: "Contribution à une plateforme e-commerce internationale avec Angular et NestJS au sein d'une feature team."
    },
    performance: {
      en: "Reduced loading time by 40% with lazy loading and SQL query optimization.",
      fr: "Réduction de 40 % des temps de chargement grâce au lazy loading et à l’optimisation des requêtes SQL.",
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
  },
  {
    id: "edu-insight",
    title: "EduInsight",
    projectUrl: "https://eduinsightfrontend.vercel.app",
    image: "/screenshots/edun.JPG",
    stack: ["React.js", "Node.js", "MongoDB", "OpenAI API", "Tailwind CSS"],
    architecture: {
      en: "EdTech platform integrating OpenAI API for adaptive quiz generation, student progress analysis, and personalized recommendations.",
      fr: "Plateforme EdTech intégrant l'API OpenAI pour générer des quiz adaptatifs, analyser la progression des étudiants et proposer des recommandations personnalisées."
    },
    performance: {
      en: "AI-driven insights and adaptive learning paths enhance educational engagement and effectiveness.",
      fr: "Les insights pilotés par l'IA et les parcours d'apprentissage adaptatifs améliorent l'engagement et l'efficacité éducative."
    },
    deployment: {
      en: "Deployed on Vercel with a focus on performance and scalability.",
      fr: "Déployé sur Vercel avec un accent sur la performance et la scalabilité."
    }
  },
  {
    id: "nova-store",
    title: "NovaStore",
    projectUrl: "https://novastore-black.vercel.app/",
    image: "/screenshots/nova1.PNG",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Docker"],
    architecture: {
      en: "Bilingual Arabic/French application for stock and sales management in retail, integrating products, purchases, sales, quantities, and a commercial dashboard.",
      fr: "Application bilingue arabe/français de gestion de stock et des ventes pour les commerces de détail, intégrant les produits, achats, ventes, quantités disponibles et un tableau de bord commercial."
    },
    performance: {
      en: "Optimized for fast interactions and real-time data updates in a retail environment.",
      fr: "Optimisé pour des interactions rapides et des mises à jour de données en temps réel dans un environnement de vente au détail."
    },
    deployment: {
      en: "Utilizes Docker for consistent development and production environments, deployed on Vercel.",
      fr: "Utilise Docker pour des environnements de développement et de production cohérents, déployé sur Vercel."
    }
  }
];

export const education = [
  {
    id: 1,
    degree: "Master en Génie logiciel & Ingénierie des connaissances (Bac+5)",
    school: "ISIMED",
    date: "2019 – 2021",
    details: "Architecture logicielle avancée, Clean Architecture, IA. PFE : Jood, application mobile cross-platform (React Native, Node.js, Firebase)."
  },
  {
    id: 2,
    degree: "Licence en Sciences de l’informatique (Bac+3)",
    school: "ISIMED",
    date: "2015 – 2018",
    details: "Algorithmique, programmation orientée objet (Java, C++), bases de données. PFE : agent IA en Python pour le diagnostic automatique de pannes automobiles."
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
    category: "AI / Education",
    description: "Plateforme EdTech intégrant l'API OpenAI pour générer des quiz adaptatifs, analyser la progression des étudiants et proposer des recommandations personnalisées.",
    tech: ["React.js", "Node.js", "MongoDB", "OpenAI API", "Tailwind CSS"],
    status: "Completed",
    link: "https://eduinsightfrontend.vercel.app",
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
    description: "Application bilingue arabe/français de gestion de stock et des ventes pour les commerces de détail, intégrant les produits, achats, ventes, quantités disponibles et un tableau de bord commercial.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Docker"],
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
  { name: "Arabic", level: "Langue maternelle" },
  { name: "French", level: "Professionnel / Technique" },
  { name: "English", level: "Professionnel / Technique" }
];
