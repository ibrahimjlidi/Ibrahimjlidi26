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
    title: "FuelStationERP Tunisia",
    category: "Full Stack",
    description: "A completed MERN stack fuel station ERP for Tunisia, featuring station management, pumps, products, purchases, expenses, and role-based access control.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    status: "Completed",
    link: "http://kisok-tunisia.duckdns.org/",
    image: "/screenshots/capt4.JPG",
    screenshots: ["/screenshots/capt1.JPG", "/screenshots/capt2.JPG", "/screenshots/capt3.JPG", "/screenshots/capt4.JPG"]
  }
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Intermediate (B1/B2)" },
  { name: "French", level: "Intermediate (B1/B2)" },
  { name: "Italian", level: "Basic (A1/A2)" }
];
