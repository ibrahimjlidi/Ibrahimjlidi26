import { Code2, Server, Database, Wrench, GraduationCap, Briefcase, Mail, MapPin, Phone, Globe } from "lucide-react";

export const personalInfo = {
  name: "Ibrahim Jlidi",
  title: "Magento / Full Stack Developer",
  titleFr: "Développeur Full Stack",
  tagline: "E-commerce & Feature Teams Specialist",
  email: "ibrahimjlidi23@gmail.com",
  phone: "+216 23 84 46 41",
  location: "Medenine / Remote",
  website: "https://ibrahimjlidi-portfolio.netlify.app",
  github: "https://github.com/ibrahimjlidi",
  linkedin: "https://linkedin.com/in/ibrahimjlidi",
  about: "Magento (Adobe Commerce) Full Stack Developer with experience contributing to international e-commerce platforms within feature teams. Specialized in Hyvä frontend architecture, performance optimization, and scalable component design using PHP, Alpine.js, and Tailwind CSS. Also experienced in full-stack development using the MERN stack (MongoDB, Express.js, React, Node.js). Comfortable working in agile environments, contributing to production systems, and delivering maintainable, business-oriented solutions.",
  aboutFr: "Développeur Full Stack Adobe Commerce (Magento) avec une expérience sur des plateformes e-commerce internationales au sein de Feature Teams. Spécialisé dans l'architecture frontend Hyvä, l'optimisation des performances et la conception de composants évolutifs avec PHP, Alpine.js et Tailwind CSS. Expérience également en développement full stack MERN (MongoDB, Express.js, React, Node.js). À l'aise dans les environnements agiles pour livrer des solutions maintenables et orientées métier."
};

export const skills = [
  {
    category: "Frontend",
    icon: Code2,
    items: ["React.js", "Angular", "Tailwind CSS", "Alpine.js", "HTML5", "CSS3", "JavaScript"]
  },
  {
    category: "Backend",
    icon: Server,
    items: ["PHP (Magento 2)", "Node.js", "Express.js", "NestJS"]
  },
  {
    category: "E-commerce & CMS",
    icon: Globe,
    items: ["Magento 2 (Adobe Commerce)", "Hyvä Theme", "Algolia"]
  },
  {
    category: "Databases",
    icon: Database,
    items: ["MongoDB", "MySQL", "PostgreSQL"]
  },
  {
    category: "Tools & Workflow",
    icon: Wrench,
    items: ["Git", "GitHub", "GitLab", "Docker", "Postman", "Jira", "Agile/Scrum", "Feature Team collaboration"]
  }
];

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

export const projects = [
  {
    id: 1,
    title: "E-commerce Web Application (MERN)",
    category: "Full Stack",
    description: "Developing a full-stack e-commerce platform with modern architecture and scalable design. Implemented product management, authentication, and dynamic data handling.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    status: "In Progress",
    link: "https://eshop-eco.vercel.app/"
  },
  {
    id: 2,
    title: "Hyvä CMS Components System",
    category: "Magento",
    description: "Developed reusable Magento components enabling dynamic content management. Focused on scalability and maintainability for business users.",
    tech: ["Magento 2", "PHP", "Hyvä", "Alpine.js", "Tailwind CSS"],
    status: "Completed",
    link: "#"
  },
  {
    id: 3,
    title: "Mobile Mega Menu (Hyvä)",
    category: "Magento",
    description: "Built a scalable multi-level mega menu with CMS-driven structure for modern Magento storefronts.",
    tech: ["Magento 2", "Alpine.js"],
    status: "Completed",
    link: "#"
  },
  {
    id: 4,
    title: "MERN Applications",
    category: "Full Stack",
    description: "Developed various full-stack apps with authentication and REST APIs.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    status: "Completed",
    link: "#"
  },
  {
    id: 5,
    title: "Movie Metro",
    category: "Frontend",
    description: "A movie discovery and search app with clean visual browsing for films and shows.",
    tech: ["React", "Tailwind CSS", "APIs", "Netlify"],
    status: "Completed",
    link: "https://movie-metro.netlify.app"
  },
  {
    id: 6,
    title: "Safoua Academy",
    category: "Full Stack",
    description: "Developing an educational platform for online learning and student management.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    status: "In Progress",
    link: "#"
  },
  {
    id: 7,
    title: "SmartBabySitterCare",
    category: "Full Stack",
    description: "Building a caregiver matching and scheduling solution for parents and sitters.",
    tech: ["React", "Express.js", "MongoDB", "Tailwind CSS"],
    status: "In Progress",
    link: "#"
  },
  {
    id: 8,
    title: "GreenLife",
    category: "Full Stack",
    description: "Creating a sustainability platform focused on healthy living and eco-friendly products.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    status: "In Progress",
    link: "#"
  },
  {
    id: 9,
    title: "MedTourMedical",
    category: "Full Stack",
    description: "Developing a medical tourism marketplace for patient journeys and provider connections.",
    tech: ["React", "Express.js", "MongoDB", "Tailwind CSS"],
    status: "In Progress",
    link: "#"
  }
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Intermediate (B1/B2)" },
  { name: "French", level: "Intermediate (B1/B2)" },
  { name: "Italian", level: "Basic (A1/A2)" }
];
