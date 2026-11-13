import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Mail, Download, ChevronDown, ExternalLink, Code2, Monitor, Database,
  User, Briefcase, GraduationCap, Moon, Sun, Menu, X, MapPin,
  Save, Plus, Trash2, Lock, Pencil, Server, Wrench,
  Phone, Globe, Users, Lightbulb, Layers, Activity, Send,
  CalendarDays, ArrowUpRight, GitBranch
} from 'lucide-react';
import {
  personalInfo as defaultPersonalInfo,
  skills as defaultSkills,
  experience as defaultExperience,
  education as defaultEducation,
  projects as defaultProjects,
  architectureHighlights,
  toProjectShowcase,
  languages
} from './data';

// --- Custom Icons ---
const GithubIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

// --- Components ---

const translations = {
  en: {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    skills: 'Technical Skills',
    projects: 'Projects',
    contact: 'Contact',
    hello: "Hello, I'm",
    viewWork: 'View Work',
    downloadCV: 'Download CV',
    letsTalk: "Let's Talk",
    heroTitle: 'Full-Stack & AI DevOps Engineer',
    availability: 'Available for Senior Full-Stack & DevOps Opportunities',
    heroSubtitle: 'Architecting scalable applications and automated CI/CD pipelines at production scale.',
    quickHighlights: 'Quick Highlights / Core Stack',
    engineeringAtScale: 'Engineering at Scale',
    yearsInProduction: 'Years in Production',
    systemsDeployed: 'Systems Deployed',
    coreTechStack: 'Core Tech Stack',
    stackFocus: 'Focus: MERN & Containerization',
    projectDomains: 'Project Domains',
    latestInsight: 'Latest Insight',
    latestInsightTitle: 'Containerized CI/CD Workflows',
    quickRead: 'Quick read',
    socialLinks: 'Social links',
    filterProjects: 'Filter projects by category',
    toggleTheme: 'Toggle dark mode',
    toggleLanguage: 'Toggle language',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
    openAdmin: 'Open admin panel',
    close: 'Close',
    domainsSummary: 'ERP · E-Commerce · AI Analytics',
    educator: 'Passionate Educator',
    educatorCopy: 'Technical instruction, curriculum leadership, and practical MERN training.',
    teamMentor: 'Team Mentor',
    teamMentorCopy: 'Code reviews, Gitflow workflows, and guidance for full-stack developers.',
    experienceIntro: 'A practical path from product engineering to mentoring and delivery.',
    professionalJourney: 'Professional Journey',
    architectureImpact: 'Architecture & Impact',
    architecture: 'Architecture',
    performance: 'Performance',
    deployment: 'Deployment',
    viewProject: 'View project',
    roleIo: 'Senior Full-Stack Engineer',
    roleDesignet: 'MERN Stack Instructor & Technical Lead',
    roleWeecode: 'Freelance Full-Stack Developer',
    experienceDescriptions: {},
    allProjects: 'ALL',
    erp: 'ERP',
    ecommerce: 'E-COMMERCE',
    aiAnalytics: 'AI & ANALYTICS',
    contactTitle: "Let's Build Something Great",
    contactName: 'Name',
    contactEmail: 'Email',
    contactMessage: 'Message',
    sendMessage: 'Send Message',
    scheduleMeeting: 'Schedule a Meeting',
    contactDetails: 'Direct Contact',
    messagePlaceholder: 'Tell me a little about your project...',
    aboutFocus: 'Full-stack architecture, performance, and people.',
    skillFrontend: 'Front-End',
    skillBackend: 'Back-End',
    skillDatabases: 'Databases',
    skillDevOps: 'DevOps & AI',
    projectSectionIntro: 'A focused set of systems, commerce experiences, and AI-powered products.',
    flagshipProject: 'Featured flagship',
    featuredCommerce: 'Featured commerce',
    fullStackOperations: 'Operations platform',
    liveDemo: 'Live demo',
    architectureOverview: 'Architecture overview',
    github: 'GitHub',
    openRepository: 'Open repository',
    openGitHub: 'Open GitHub profile',
    caseStudy: 'Case study',
    noProjectsInCategory: 'No projects found in this category.',
    otherProjects: 'Other',
    theChallenge: 'The Challenge',
    systemArchitecture: 'System Architecture & Stack',
    keyOutcomes: 'Key Outcomes',
    metricOperations: 'operations modules',
    metricSystem: 'full-stack system',
    metricAccess: 'role-based access',
    footerCopyright: 'All rights reserved.',
    builtWith: 'Built with React & Tailwind CSS',
    yearsExperience: 'Years of experience',
    productionPlatforms: 'Production ERPs & E-Commerce',
    devOpsDelivery: 'Docker & CI/CD Automation',
    scrollToExplore: 'Scroll to explore',
    aboutMe: 'About Me',
    location: 'Location',
    email: 'Email',
    language: 'Language',
    english: 'EN',
    french: 'FR',
    featuredProjects: 'Select Projects',
    education: 'Education',
    readyToWork: 'Ready to work together?',
    availableForWork: "I'm currently available for freelance work and open to new opportunities. Let's build something amazing.",
    sayHello: 'Say Hello',
    completed: 'Completed',
    inProgress: 'In Progress',
    viewDetails: 'View Details'
  },
  fr: {
    home: 'Accueil',
    about: 'À propos',
    experience: 'Expérience',
    skills: 'Expertise technique',
    projects: 'Projets',
    contact: 'Contact',
    hello: "Bonjour, je suis",
    viewWork: 'Voir mes projets',
    downloadCV: 'Télécharger CV',
    letsTalk: 'Contactez-moi',
    heroTitle: 'Ingénieur Full-Stack & DevOps IA',
    availability: 'Ouvert aux opportunités Senior Full-Stack & DevOps',
    heroSubtitle: 'Je conçois des applications évolutives et des pipelines CI/CD automatisés pour la production.',
    quickHighlights: 'En bref / Stack principale',
    engineeringAtScale: 'L’ingénierie à grande échelle',
    yearsInProduction: 'Années en production',
    systemsDeployed: 'Systèmes déployés',
    coreTechStack: 'Technologies principales',
    stackFocus: 'Focus : MERN et conteneurisation',
    projectDomains: 'Domaines de projets',
    latestInsight: 'Dernier éclairage',
    latestInsightTitle: 'Workflows CI/CD conteneurisés',
    quickRead: 'Lecture rapide',
    socialLinks: 'Liens sociaux',
    filterProjects: 'Filtrer les projets par catégorie',
    toggleTheme: 'Changer le thème',
    toggleLanguage: 'Changer de langue',
    openMenu: 'Ouvrir le menu de navigation',
    closeMenu: 'Fermer le menu de navigation',
    openAdmin: 'Ouvrir le panneau admin',
    close: 'Fermer',
    domainsSummary: 'ERP · E-commerce · IA analytique',
    educator: 'Formateur passionné',
    educatorCopy: 'Formation technique, conception de programmes et apprentissage pratique du MERN.',
    teamMentor: 'Mentorat d’équipe',
    teamMentorCopy: 'Revues de code, workflows Gitflow et accompagnement de développeurs full-stack.',
    experienceIntro: 'Un parcours concret entre ingénierie produit, mentorat et livraison.',
    professionalJourney: 'Parcours professionnel',
    architectureImpact: 'Architecture et impact',
    architecture: 'Architecture',
    performance: 'Performance',
    deployment: 'Déploiement',
    viewProject: 'Voir le projet',
    roleIo: 'Ingénieur Full-Stack Senior',
    roleDesignet: 'Formateur MERN & responsable technique',
    roleWeecode: 'Développeur Full-Stack freelance',
    experienceDescriptions: {
      IoTechnologies: [
        'Contribution à des projets Magento 2 (Adobe Commerce) au sein d’une feature team.',
        'Développement de composants réutilisables avec Hyvä, Tailwind CSS et Alpine.js.',
        'Mise en œuvre de fonctionnalités IA et intégrations LLM dans des projets clients.',
        'Participation aux audits de sécurité, aux corrections et à l’optimisation des performances.'
      ],
      Designet: [
        'Formation au développement MERN : MongoDB, Express, React et Node.js.',
        'Enseignement des API REST, de l’authentification et des architectures évolutives.',
        'Accompagnement des étudiants sur des projets full-stack concrets.'
      ],
      Weecode: [
        'Livraison d’applications web et mobiles full-stack pour des clients.',
        'Collaboration sur la réalisation de fonctionnalités et l’optimisation de produits.'
      ]
    },
    allProjects: 'TOUT',
    erp: 'ERP',
    ecommerce: 'E-COMMERCE',
    aiAnalytics: 'IA & ANALYTIQUE',
    contactTitle: 'Construisons quelque chose de grand',
    contactName: 'Nom',
    contactEmail: 'Email',
    contactMessage: 'Message',
    sendMessage: 'Envoyer le message',
    scheduleMeeting: 'Planifier un rendez-vous',
    contactDetails: 'Contact direct',
    messagePlaceholder: 'Parlez-moi brièvement de votre projet...',
    aboutFocus: 'Architecture full-stack, performance et accompagnement.',
    skillFrontend: 'Front-end',
    skillBackend: 'Back-end',
    skillDatabases: 'Bases de données',
    skillDevOps: 'DevOps et IA',
    projectSectionIntro: 'Une sélection de systèmes, d’expériences e-commerce et de produits IA.',
    flagshipProject: 'Projet phare',
    featuredCommerce: 'E-commerce en vedette',
    fullStackOperations: 'Plateforme opérationnelle',
    liveDemo: 'Démo en ligne',
    architectureOverview: 'Vue d’architecture',
    github: 'GitHub',
    openRepository: 'Ouvrir le dépôt',
    openGitHub: 'Ouvrir le profil GitHub',
    caseStudy: 'Étude de cas',
    noProjectsInCategory: 'Aucun projet trouvé dans cette catégorie.',
    otherProjects: 'Autres',
    theChallenge: 'Le défi',
    systemArchitecture: 'Architecture système et stack',
    keyOutcomes: 'Résultats clés',
    metricOperations: 'modules opérationnels',
    metricSystem: 'système full-stack',
    metricAccess: 'accès basé sur les rôles',
    footerCopyright: 'Tous droits réservés.',
    builtWith: 'Réalisé avec React et Tailwind CSS',
    yearsExperience: "Années d'expérience",
    productionPlatforms: 'ERP et e-commerce en production',
    devOpsDelivery: 'Docker & automatisation CI/CD',
    scrollToExplore: 'Défiler pour découvrir',
    aboutMe: 'À propos de moi',
    location: 'Localisation',
    email: 'Email',
    language: 'Langue',
    english: 'EN',
    french: 'FR',
    featuredProjects: 'Projets sélectionnés',
    education: 'Formation',
    readyToWork: 'Prêt à travailler ensemble ?',
    availableForWork: "Je suis actuellement disponible en freelance et ouvert à de nouvelles opportunités. Construisons quelque chose d'incroyable.",
    sayHello: 'Contactez-moi',
    completed: 'Terminé',
    inProgress: 'En cours',
    viewDetails: 'Voir les détails'
  }
};

const SectionHeading = ({ children, icon: Icon }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-3 mb-12"
  >
    {Icon && <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-600 dark:text-primary-50"><Icon size={24} /></div>}
    <h2 className="text-3xl md:text-4xl font-bold font-sans bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-200">
      {children}
    </h2>
  </motion.div>
);

const Navbar = ({ darkMode, setDarkMode, locale, setLocale, personalInfo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[locale];

  const navLinks = [
    { name: t.about, href: '#about' },
    { name: t.experience, href: '#experience' },
    { name: t.skills, href: '#skills' },
    { name: t.projects, href: '#projects' },
    { name: t.contact, href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm border-b border-border-color' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-400 dark:to-indigo-400">
            {personalInfo.name.split(' ')[0]}<span className="text-slate-800 dark:text-white">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm font-medium text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
              aria-label={t.toggleTheme}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLocale('en')}
                aria-pressed={locale === 'en'}
                className={`px-3 py-2 rounded-full text-sm ${locale === 'en' ? 'bg-primary-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLocale('fr')}
                aria-pressed={locale === 'fr'}
                className={`px-3 py-2 rounded-full text-sm ${locale === 'fr' ? 'bg-primary-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
              >
                FR
              </button>
            </div>
            <a 
              href="#contact" 
              className="px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              {t.letsTalk}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
              <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="p-2 text-slate-600 dark:text-slate-300"
                aria-label={t.toggleTheme}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setLocale(locale === 'en' ? 'fr' : 'en')}
              className="px-3 py-2 rounded-full text-sm bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              aria-label={t.toggleLanguage}
            >
              {locale === 'en' ? 'FR' : 'EN'}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600 dark:text-slate-300"
              aria-label={isMobileMenuOpen ? t.closeMenu : t.openMenu}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-slate-900 shadow-xl border-b border-slate-200 dark:border-slate-800"
        >
          <ul className="px-4 pt-2 pb-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-slate-700 dark:text-slate-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex rounded-full bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white"
              >
                {t.letsTalk}
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = ({ locale, personalInfo }) => {
  const t = translations[locale];
  const title = locale === 'fr'
    ? personalInfo.titleFr || t.heroTitle
    : personalInfo.title || t.heroTitle;
  const stack = [
    { name: 'React', icon: Code2 },
    { name: 'Node.js', icon: Server },
    { name: 'Docker', icon: Wrench },
    { name: 'PostgreSQL', icon: Database }
  ];

  return (
    <section id="hero" className="relative flex min-h-screen flex-col overflow-hidden px-4 pb-14 pt-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-1/4 top-1/4 -z-10 h-96 w-96 rounded-full bg-primary-500/10 blur-3xl dark:bg-primary-500/20" />
      <div className="pointer-events-none absolute right-1/4 top-1/3 -z-10 h-96 w-96 rounded-full bg-indigo-400/10 blur-3xl dark:bg-indigo-500/15" />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center py-8 text-center sm:py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
          className="relative mb-5 h-24 w-24 rounded-full p-1.5 ring-1 ring-primary-300/70 ring-offset-4 ring-offset-white dark:ring-primary-500/50 dark:ring-offset-slate-950 sm:h-28 sm:w-28"
        >
          <div className="h-full w-full overflow-hidden rounded-full border-2 border-white shadow-xl dark:border-slate-800">
            <img src="/avatar.png" alt={personalInfo.name} className="h-full w-full object-cover" />
          </div>
          <span className="absolute bottom-1 right-0 h-4 w-4 rounded-full border-[3px] border-white bg-emerald-500 dark:border-slate-950" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.4 }}
          className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-200/80 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-md dark:border-emerald-900/70 dark:bg-slate-900/60 dark:text-slate-200 sm:text-sm"
        >
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <span>{t.availability}</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-primary-600 dark:text-primary-400"
        >
          {t.hello}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.45 }}
          className="mb-2 text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl md:text-7xl"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.36, duration: 0.45 }}
          className="mb-4 text-xl font-semibold text-primary-700 dark:text-primary-300 sm:text-2xl md:text-3xl"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.44, duration: 0.45 }}
          className="mb-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg"
        >
          {t.heroSubtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.52, duration: 0.45 }}
          className="flex w-full flex-wrap justify-center gap-3 sm:w-auto sm:gap-4"
        >
          <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100">
            {t.viewWork}
          </a>
          <a href="/ibrahim_jlidi.pdf" download className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-7 py-3.5 font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-primary-400 hover:text-primary-600 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:hover:text-primary-300">
            <Download size={18} className="transition group-hover:translate-y-0.5" />
            {t.downloadCV}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62, duration: 0.4 }}
          className="mt-5 flex items-center justify-center gap-3"
          aria-label={t.socialLinks}
        >
          <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub" className="rounded-full border border-slate-200 bg-white/70 p-3 text-slate-600 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-primary-400 hover:text-primary-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:text-primary-300">
            <GithubIcon size={18} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn" className="rounded-full border border-slate-200 bg-white/70 p-3 text-slate-600 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-primary-400 hover:text-primary-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:text-primary-300">
            <LinkedinIcon size={18} />
          </a>
          <a href={`mailto:${personalInfo.email}`} aria-label={t.email} title={t.email} className="rounded-full border border-slate-200 bg-white/70 p-3 text-slate-600 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-primary-400 hover:text-primary-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:text-primary-300">
            <Mail size={18} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.72, duration: 0.5 }}
        className="mx-auto mb-1 w-full max-w-7xl"
      >
        <p className="mb-3 px-1 text-xs font-bold uppercase tracking-[0.2em] text-primary-700 dark:text-primary-300">
          {t.engineeringAtScale}
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <div className="glass-card flex min-h-32 flex-col justify-between p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{t.yearsInProduction}</p>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-extrabold tracking-tight text-primary-600 dark:text-primary-300">4+</span>
              <span className="pb-1 text-sm font-medium text-slate-600 dark:text-slate-300">{t.systemsDeployed}</span>
            </div>
          </div>

          <div className="glass-card p-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{t.coreTechStack}</p>
            <div className="mb-3 flex flex-wrap gap-2">
              {stack.map(({ name, icon: Icon }) => (
                <span key={name} className="inline-flex items-center gap-1.5 rounded-full bg-primary-50/90 px-2.5 py-1.5 text-xs font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-200">
                  <Icon size={13} /> {name}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">{t.stackFocus}</p>
          </div>

          <div className="glass-card flex min-h-32 flex-col justify-between p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{t.projectDomains}</p>
            <p className="text-lg font-bold leading-snug text-slate-900 dark:text-white">{t.domainsSummary}</p>
          </div>

          <a href="#experience" className="glass-card group flex min-h-32 flex-col justify-between p-5 transition hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg dark:hover:border-primary-700">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-300">
              <Lightbulb size={15} /> {t.latestInsight}
            </span>
            <span className="flex items-end justify-between gap-3 text-base font-bold text-slate-900 dark:text-white">
              {t.latestInsightTitle}
              <ArrowUpRight size={18} className="shrink-0 text-primary-600 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-primary-300" />
            </span>
            <span className="text-xs font-semibold text-primary-600 dark:text-primary-300">{t.quickRead}</span>
          </a>
        </div>
      </motion.div>

      <a
        href="#about"
        aria-label={t.scrollToExplore}
        className="absolute bottom-1 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 transition hover:text-primary-500 dark:text-slate-500"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  );
};

const About = ({ locale, personalInfo }) => {
  const t = translations[locale];

  return (
    <section id="about" className="section-space">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading icon={User}>{t.aboutMe}</SectionHeading>
        <div className="grid gap-4 lg:grid-cols-3">
          <motion.article
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 sm:p-8 lg:col-span-2"
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-300">{t.aboutFocus}</p>
            <p className="text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
              {locale === 'fr' ? personalInfo.aboutFr : personalInfo.about}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-slate-200/70 pt-5 text-sm dark:border-slate-700/70">
              <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 font-semibold text-slate-700 transition hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-300">
                <Mail size={16} className="text-primary-500" /> {personalInfo.email}
              </a>
              <span className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <MapPin size={16} className="text-primary-500" /> {personalInfo.location}
              </span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {languages.map((language) => (
                <span key={language.name} className="rounded-full bg-slate-100/80 px-3 py-1.5 text-xs font-medium text-slate-600 dark:bg-slate-800/80 dark:text-slate-300">
                  {language.name} · {language.level}
                </span>
              ))}
            </div>
          </motion.article>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <motion.article
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card flex gap-4 p-5 sm:p-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-100/80 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
                <GraduationCap size={22} />
              </span>
              <div>
                <h3 className="mb-1 font-bold text-slate-900 dark:text-white">{t.educator}</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{t.educatorCopy}</p>
              </div>
            </motion.article>
            <motion.article
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="glass-card flex gap-4 p-5 sm:p-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-100/80 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
                <Users size={21} />
              </span>
              <div>
                <h3 className="mb-1 font-bold text-slate-900 dark:text-white">{t.teamMentor}</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{t.teamMentorCopy}</p>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = ({ locale, experience }) => {
  const t = translations[locale];
  const companies = ['IoTechnologies', 'Designet', 'Weecode'];
  const companyEntries = companies
    .map((company) => experience.find((item) => item.company === company))
    .filter(Boolean);
  const [selectedCompany, setSelectedCompany] = useState(companyEntries[0]?.company || '');
  const selectedExperience = companyEntries.find((item) => item.company === selectedCompany) || companyEntries[0];
  const selectedDescription = selectedExperience
    ? (locale === 'fr'
      ? t.experienceDescriptions[selectedExperience.company] || selectedExperience.description
      : selectedExperience.description)
    : [];
  const roleLabels = {
    IoTechnologies: t.roleIo,
    Designet: t.roleDesignet,
    Weecode: t.roleWeecode
  };
  const icons = [Layers, Activity, GitBranch];

  return (
    <section id="experience" className="section-space">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading icon={Briefcase}>{t.professionalJourney}</SectionHeading>
        <p className="-mt-8 mb-8 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">{t.experienceIntro}</p>

        <div className="relative mb-5">
          <div className="absolute left-5 right-5 top-1/2 hidden h-px bg-primary-200 dark:bg-primary-900 sm:block" />
          <div className="relative flex gap-2 overflow-x-auto pb-2">
            {companyEntries.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedCompany(item.company)}
                aria-pressed={selectedCompany === item.company}
                className={`min-w-56 flex-1 rounded-2xl border p-4 text-left backdrop-blur transition ${
                  selectedCompany === item.company
                    ? 'border-primary-400 bg-primary-50/90 shadow-md shadow-primary-900/10 dark:border-primary-700 dark:bg-primary-950/60'
                    : 'border-slate-200/70 bg-white/70 hover:border-primary-200 dark:border-slate-700/70 dark:bg-slate-900/60 dark:hover:border-primary-800'
                }`}
              >
                <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white text-xs font-extrabold text-primary-700 shadow-sm dark:bg-slate-800 dark:text-primary-300">
                  {item.company.slice(0, 2).toUpperCase()}
                </span>
                <span className="block font-bold text-slate-900 dark:text-white">{item.company}</span>
                <span className="mt-1 block text-xs leading-snug text-slate-500 dark:text-slate-400">{roleLabels[item.company] || item.role}</span>
                <span className="mt-2 block text-[11px] font-medium text-primary-700 dark:text-primary-300">{item.date}</span>
              </button>
            ))}
          </div>
        </div>

        {selectedExperience && (
          <motion.article
            key={selectedExperience.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card mb-8 p-5 sm:p-7"
          >
            <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-600 dark:text-primary-300">{selectedExperience.company}</p>
                <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">{roleLabels[selectedExperience.company] || selectedExperience.role}</h3>
              </div>
              <span className="rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">{selectedExperience.location}</span>
            </div>
            <ul className="grid gap-2 sm:grid-cols-2">
              {(selectedDescription || []).slice(0, 4).map((item, index) => (
                <li key={`${selectedExperience.id}-${index}`} className="flex items-start gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  <span className="mt-1 text-primary-500">▹</span>{item}
                </li>
              ))}
            </ul>
          </motion.article>
        )}

        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-100/80 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
            <Layers size={18} />
          </span>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t.architectureImpact}</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {architectureHighlights.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="glass-card group overflow-hidden p-5 transition hover:-translate-y-1 hover:shadow-lg sm:p-6"
              >
                {item.image && (
                  <div className="mb-5 overflow-hidden rounded-xl border border-slate-200/70 dark:border-slate-700/70">
                    <img src={item.image} alt={`${item.title} interface`} className="aspect-[16/7] w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                  </div>
                )}
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100/80 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300"><Icon size={20} /></span>
                  <a href={item.projectUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-primary-600 hover:text-primary-700 dark:text-primary-300">
                    {t.viewProject}<ArrowUpRight size={14} />
                  </a>
                </div>
                <h4 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">{item.title}</h4>
                <div className="space-y-3">
                  {[
                    [t.architecture, item.architecture[locale]],
                    [t.performance, item.performance[locale]],
                    [t.deployment, item.deployment[locale]]
                  ].map(([label, detail]) => (
                    <div key={label}>
                      <p className="mb-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-primary-600 dark:text-primary-300">{label}</p>
                      <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5 border-t border-slate-200/70 pt-4 dark:border-slate-700/70">
                  {item.stack.map((tech) => (
                    <span key={tech} className="rounded-full bg-slate-100/90 px-2.5 py-1 text-[10px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">{tech}</span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Skills = ({ locale, skills }) => {
  const t = translations[locale];
  const categoryLabels = {
    'Front-End': t.skillFrontend,
    'Back-End': t.skillBackend,
    Databases: t.skillDatabases,
    'DevOps & AI': t.skillDevOps
  };

  return (
    <section id="skills" className="section-space">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading icon={Code2}>{t.skills}</SectionHeading>
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            return (
              <motion.article
                key={skillGroup.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="glass-card p-6 sm:p-7"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-100/80 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300"><Icon size={21} /></span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{categoryLabels[skillGroup.category] || skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span key={skill} className="rounded-full border border-slate-200/80 bg-white/75 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-primary-300 hover:text-primary-700 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:border-primary-700 dark:hover:text-primary-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ProjectBrowserFrame = ({ project, compact = false }) => (
  <div className={`overflow-hidden rounded-2xl border border-slate-300/80 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900 ${compact ? '' : 'shadow-2xl'}`}>
    <div className={`flex items-center gap-1.5 border-b border-slate-200 bg-white px-3 dark:border-slate-700 dark:bg-slate-900 ${compact ? 'h-7' : 'h-9'}`}>
      <span className="h-2 w-2 rounded-full bg-red-400" />
      <span className="h-2 w-2 rounded-full bg-amber-400" />
      <span className="h-2 w-2 rounded-full bg-emerald-400" />
      <span className="ml-2 min-w-0 flex-1 truncate rounded bg-slate-100 px-2 py-0.5 text-center text-[10px] text-slate-500 dark:bg-slate-800 dark:text-slate-400">
        {project.liveUrl?.replace(/^https?:\/\//, '').split('/')[0] || 'Project preview'}
      </span>
    </div>
    <div className={`relative aspect-[16/10] overflow-hidden ${compact ? 'bg-slate-100 dark:bg-slate-800' : 'bg-slate-950'}`}>
      <img
        src={project.image}
        alt={`${project.title} interface`}
        className={`absolute inset-0 h-full w-full ${compact ? 'object-cover transition-transform duration-700 group-hover:scale-105' : 'object-contain'}`}
      />
    </div>
  </div>
);

const Projects = ({ locale, projects, githubUrl }) => {
  const t = translations[locale];
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const showcaseProjects = toProjectShowcase(projects);
  const categories = ['All', 'ERP', 'E-Commerce', 'AI & Analytics'];
  const filteredProjects = filter === 'All'
    ? showcaseProjects
    : showcaseProjects.filter((project) => project.category === filter);
  const featuredProject = filteredProjects.find((project) => project.featured);
  const secondaryProjects = filteredProjects.filter((project) => !project.featured || project.id === 20);
  const categoryLabels = {
    All: t.allProjects,
    ERP: t.erp,
    'E-Commerce': t.ecommerce,
    'AI & Analytics': t.aiAnalytics
  };
  const projectCategoryLabel = (category) => ({
    ERP: t.erp,
    'E-Commerce': t.ecommerce,
    'AI & Analytics': t.aiAnalytics,
    Other: t.otherProjects
  })[category] || category;
  const metricLabel = (label) => ({
    'operations modules': t.metricOperations,
    'full-stack system': t.metricSystem,
    'role-based access': t.metricAccess
  })[label] || label;

  const openArchitecture = (project) => setSelectedProject(project);

  return (
    <>
      <section id="projects" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-6 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionHeading icon={Monitor}>{t.featuredProjects}</SectionHeading>
              <p className="-mt-7 text-sm text-slate-500 dark:text-slate-400">
                {t.projectSectionIntro}
              </p>
            </div>
            <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2" role="group" aria-label={t.filterProjects}>
              {categories.map((category) => {
                const count = category === 'All'
                  ? showcaseProjects.length
                  : showcaseProjects.filter((project) => project.category === category).length;
                const isActive = filter === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setFilter(category)}
                    aria-pressed={isActive}
                    className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'border-primary-500 bg-primary-600 text-white shadow-[0_0_22px_rgba(99,102,241,0.28)]'
                        : 'border-slate-200 bg-white/70 text-slate-600 hover:border-primary-300 hover:text-primary-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-primary-500 dark:hover:text-primary-300'
                    }`}
                  >
                    {categoryLabels[category]}
                    <span className={`ml-2 text-xs ${isActive ? 'text-white/70' : 'text-slate-400'}`}>{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-5">
            {featuredProject && (
              <motion.article
                key={featuredProject.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="group relative overflow-hidden rounded-[2rem] border border-primary-200/70 bg-gradient-to-br from-white/90 via-primary-50/80 to-indigo-50/90 shadow-xl shadow-primary-950/5 backdrop-blur-md dark:border-primary-900/70 dark:from-slate-900/95 dark:via-slate-900/90 dark:to-indigo-950/70"
              >
                <div className="grid h-full md:grid-cols-[1.08fr_0.92fr]">
                  <div className="relative flex min-h-[280px] items-center overflow-hidden bg-gradient-to-br from-primary-100 via-indigo-50 to-white p-5 dark:from-slate-800 dark:via-indigo-950/50 dark:to-slate-900 sm:p-8 lg:p-10">
                    <div className="absolute -left-16 -top-20 h-64 w-64 rounded-full bg-primary-400/20 blur-3xl" />
                    <div className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" />
                    <div className="relative w-full">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-700 dark:text-primary-300">
                          <span className="h-2 w-2 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
                          {t.flagshipProject}
                        </span>
                        <span className="rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300">
                          {projectCategoryLabel(featuredProject.category)}
                        </span>
                      </div>
                      <ProjectBrowserFrame project={featuredProject} />
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-primary-600 dark:text-primary-400">
                      {t.fullStackOperations}
                    </p>
                    <h3 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                      {featuredProject.title}
                    </h3>
                    <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
                      {featuredProject.summary}
                    </p>

                    <div className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-3">
                      {featuredProject.metrics.map((metric) => (
                        <div key={metric.label} className="rounded-2xl border border-slate-200/80 bg-white/75 p-3 dark:border-slate-700 dark:bg-slate-800/70">
                          <p className="text-lg font-bold text-primary-600 dark:text-primary-300">{metric.value}</p>
                          <p className="mt-0.5 text-[11px] leading-snug text-slate-500 dark:text-slate-400">{metricLabel(metric.label)}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mb-7 flex flex-wrap gap-2">
                      {featuredProject.techStack.map((tech) => (
                        <span key={tech} className="rounded-full bg-slate-900 px-3 py-1.5 text-xs font-medium text-white dark:bg-slate-700">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {featuredProject.liveUrl && (
                        <a
                          href={featuredProject.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-primary-700"
                        >
                          {t.liveDemo} <ExternalLink size={15} />
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => openArchitecture(featuredProject)}
                        className="rounded-full border border-slate-300 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-primary-400 hover:text-primary-600 dark:border-slate-600 dark:bg-slate-800/70 dark:text-slate-200"
                      >
                        {t.architectureOverview}
                      </button>
                      <a
                        href={featuredProject.repoUrl || githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        title={featuredProject.repoUrl ? t.openRepository : t.openGitHub}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-primary-400 hover:text-primary-600 dark:border-slate-600 dark:bg-slate-800/70 dark:text-slate-200"
                      >
                        <GithubIcon size={16} /> {t.github}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            )}

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {secondaryProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: Math.min(index * 0.035, 0.2) }}
                className={`glass-card group overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 dark:hover:shadow-black/30 ${project.id === 20 ? 'xl:col-span-2 xl:grid xl:grid-cols-2' : ''}`}
              >
                <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 p-3 dark:from-slate-800 dark:to-slate-950 sm:p-4">
                  <ProjectBrowserFrame project={project} compact />
                  <div className="pointer-events-none absolute inset-3 flex items-end justify-center pb-6 sm:inset-4">
                    <div className="pointer-events-auto flex translate-y-2 gap-2 opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/90 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur hover:bg-primary-600">
                          Live <ExternalLink size={13} />
                        </a>
                      )}
                      <a
                        href={project.repoUrl || githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        title={project.repoUrl ? t.openRepository : t.openGitHub}
                        className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/90 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur hover:bg-primary-600"
                      >
                        Code <GithubIcon size={14} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary-600 dark:text-primary-400">
                      {project.id === 20 ? t.featuredCommerce : projectCategoryLabel(project.category)}
                    </span>
                    <span className="text-xs tabular-nums text-slate-400">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.summary}</p>
                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => openArchitecture(project)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition hover:gap-3 dark:text-primary-400"
                  >
                    {t.caseStudy} <ExternalLink size={14} />
                  </button>
                </div>
              </motion.article>
            ))}

            {filteredProjects.length === 0 && (
              <p className="col-span-full rounded-2xl border border-dashed border-slate-300 p-10 text-center text-slate-500 dark:border-slate-700 dark:text-slate-400">
                {t.noProjectsInCategory}
              </p>
            )}
            </div>
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/75 px-4 py-6 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-case-study-title"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="max-h-full w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 p-6 sm:p-8 dark:border-slate-700">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">
                  {projectCategoryLabel(selectedProject.category)} · {t.caseStudy}
                </p>
                <h3 id="project-case-study-title" className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label={t.close}
                className="shrink-0 rounded-full border border-slate-200 p-2.5 text-slate-500 transition hover:border-primary-400 hover:text-primary-600 dark:border-slate-700 dark:text-slate-300"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-3">
              {[
                { label: `01 / ${t.theChallenge}`, detail: selectedProject.architectureNotes.challenge },
                { label: `02 / ${t.systemArchitecture}`, detail: selectedProject.architectureNotes.system },
                { label: `03 / ${t.keyOutcomes}`, detail: selectedProject.architectureNotes.outcomes }
              ].map((section) => (
                <section key={section.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/60">
                  <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-primary-600 dark:text-primary-400">
                    {section.label}
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{section.detail}</p>
                </section>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 p-6 sm:px-8 dark:border-slate-700">
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span key={tech} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {selectedProject.liveUrl && (
                  <a href={selectedProject.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-700">
                    {t.liveDemo} <ExternalLink size={14} />
                  </a>
                )}
                <button type="button" onClick={() => setSelectedProject(null)} className="rounded-full border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:border-primary-400 dark:border-slate-600 dark:text-slate-200">
                  {t.close}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

const Education = ({ locale, education }) => {
  const t = translations[locale];

  return (
    <section className="section-space">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading icon={GraduationCap}>{t.education}</SectionHeading>
        
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <motion.div 
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card flex flex-col justify-between gap-4 p-6 sm:flex-row sm:items-center"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                <p className="text-slate-600 dark:text-slate-400">{edu.school}</p>
              </div>
              <div className="px-4 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium rounded-full shrink-0">
                {edu.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = ({ locale, personalInfo }) => {
  const t = translations[locale];
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n${t.contactEmail}: ${email}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-space">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading icon={Mail}>{t.contactTitle}</SectionHeading>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card grid overflow-hidden lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div className="bg-gradient-to-br from-primary-700 to-indigo-800 p-6 text-white sm:p-8 lg:p-10">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-100">{t.contactDetails}</p>
            <h3 className="mb-3 text-2xl font-bold sm:text-3xl">{t.readyToWork}</h3>
            <p className="mb-8 text-sm leading-relaxed text-primary-100">{t.availableForWork}</p>

            <div className="space-y-4">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-sm font-medium text-white/95 transition hover:text-white">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10"><Mail size={18} /></span>
                <span className="break-all">{personalInfo.email}</span>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-medium text-white/95 transition hover:text-white">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10"><GithubIcon size={18} /></span>
                GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-medium text-white/95 transition hover:text-white">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10"><LinkedinIcon size={18} /></span>
                LinkedIn
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 p-6 sm:p-8 lg:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                {t.contactName}
                <input name="name" required autoComplete="name" className="mt-2 w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary-400 focus:ring-4 focus:ring-primary-500/10 dark:border-slate-700 dark:bg-slate-900/70 dark:text-white" />
              </label>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                {t.contactEmail}
                <input name="email" type="email" required autoComplete="email" className="mt-2 w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary-400 focus:ring-4 focus:ring-primary-500/10 dark:border-slate-700 dark:bg-slate-900/70 dark:text-white" />
              </label>
            </div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
              {t.contactMessage}
              <textarea name="message" rows="5" required placeholder={t.messagePlaceholder} className="mt-2 w-full resize-y rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary-400 focus:ring-4 focus:ring-primary-500/10 dark:border-slate-700 dark:bg-slate-900/70 dark:text-white" />
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button type="submit" className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary-900/15 transition hover:-translate-y-0.5 hover:bg-primary-700">
                <Send size={16} /> {t.sendMessage}
              </button>
              <a href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(t.scheduleMeeting)}`} className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-5 py-3.5 text-sm font-bold text-slate-700 transition hover:border-primary-300 hover:text-primary-700 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:text-primary-300">
                <CalendarDays size={16} /> {t.scheduleMeeting}
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const STORAGE_KEY = 'portfolio_telegram_blocked_v1';
const COOKIE_NAME = 'portfolio_owner_session';

const skillIconMap = {
  Code2,
  Server,
  Database,
  Wrench,
  GraduationCap,
  Briefcase,
  Mail,
  MapPin,
  Phone,
  Globe
};

const normalizeSkillGroup = (group) => {
  if (!group || typeof group !== 'object') return { category: 'Skills', items: [], icon: Code2 };

  const iconKey = typeof group.icon === 'string' ? group.icon : group.icon?.displayName || group.icon?.name;
  const resolvedIcon = typeof group.icon === 'function'
    ? group.icon
    : skillIconMap[iconKey] || Code2;

  return {
    ...group,
    items: Array.isArray(group.items) ? group.items : [],
    icon: resolvedIcon
  };
};

const normalizeSavedSkills = (groups) => {
  if (!Array.isArray(groups)) return defaultSkills.map(normalizeSkillGroup);

  const legacyCategories = {
    Frontend: 'Front-End',
    'E-commerce & CMS': 'Front-End',
    Backend: 'Back-End',
    'Tools & Workflow': 'DevOps & AI',
    'AI & Security': 'DevOps & AI'
  };
  const knownLegacyCategories = new Set(Object.keys(legacyCategories));
  const hasLegacyCategories = groups.some((group) => knownLegacyCategories.has(group?.category));
  if (!hasLegacyCategories) return groups.map(normalizeSkillGroup);

  const migrated = defaultSkills.map((defaultGroup) => {
    const mappedGroups = groups.filter((group) => (
      legacyCategories[group?.category] === defaultGroup.category ||
      group?.category === defaultGroup.category
    ));
    const items = [...new Set([
      ...mappedGroups.flatMap((group) => Array.isArray(group.items) ? group.items : []),
      ...defaultGroup.items
    ])];

    return normalizeSkillGroup({ ...defaultGroup, items });
  });
  const customGroups = groups
    .filter((group) => !knownLegacyCategories.has(group?.category) && !defaultSkills.some((item) => item.category === group?.category))
    .map(normalizeSkillGroup);

  return [...migrated, ...customGroups];
};

const isOwnerBlocked = () => {
  if (typeof window === 'undefined') return true;

  const hasStorageFlag = localStorage.getItem(STORAGE_KEY) === '1';
  const hasCookieFlag = document.cookie.split('; ').some((cookie) => cookie.startsWith(`${COOKIE_NAME}=1`));

  return hasStorageFlag || hasCookieFlag;
};

const setOwnerBlocked = () => {
  if (typeof window === 'undefined') return;

  localStorage.setItem(STORAGE_KEY, '1');
  document.cookie = `${COOKIE_NAME}=1; Max-Age=31536000; Path=/; SameSite=Lax`;
};

const isProductionHost = (hostname) => {
  if (!hostname) return false;
  if (hostname === 'localhost' || hostname === '127.0.0.1') return false;
  if (hostname.includes('git-') || hostname.includes('-preview') || hostname.includes('preview')) return false;

  return hostname.endsWith('vercel.app');
};

const notifyTelegramVisit = async () => {
  if (typeof window === 'undefined') return;
  if (isOwnerBlocked()) return;
  if (!isProductionHost(window.location.hostname)) return;

  const payload = {
    url: window.location.href,
    referrer: document.referrer || 'direct',
    userAgent: navigator.userAgent,
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'unknown',
    screen: `${window.screen.width}x${window.screen.height}`
  };

  try {
    const endpoint = import.meta.env.PROD ? '/api/telegram-visit' : 'http://localhost:3000/api/telegram-visit';
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (result.ok) {
      setOwnerBlocked();
    }
  } catch (error) {
    console.error('Telegram notification failed:', error);
  }
};

const makeEmptyProject = () => ({
  id: Date.now(),
  title: '',
  category: 'Full Stack',
  description: '',
  tech: [],
  status: 'In Progress',
  link: '#',
  image: '',
  screenshots: []
});

const makeEmptyExperience = () => ({
  id: Date.now(),
  role: '',
  company: '',
  date: '',
  location: '',
  description: []
});

const makeEmptyEducation = () => ({
  id: Date.now(),
  degree: '',
  school: '',
  date: ''
});

const makeEmptySkillGroup = () => ({
  category: '',
  items: [],
  icon: 'Code2'
});

const AdminPanel = ({
  personalInfo,
  setPersonalInfo,
  projects,
  setProjects,
  experience,
  setExperience,
  education,
  setEducation,
  skills,
  setSkills,
  onClose,
  darkMode
}) => {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [formMessage, setFormMessage] = useState('');
  const [personalForm, setPersonalForm] = useState(personalInfo);
  const [projectDraft, setProjectDraft] = useState(makeEmptyProject());
  const [editingProjectId, setEditingProjectId] = useState(null);
  const [experienceDraft, setExperienceDraft] = useState(makeEmptyExperience());
  const [editingExperienceId, setEditingExperienceId] = useState(null);
  const [educationDraft, setEducationDraft] = useState(makeEmptyEducation());
  const [editingEducationId, setEditingEducationId] = useState(null);
  const [skillDraft, setSkillDraft] = useState(makeEmptySkillGroup());
  const [editingSkillCategory, setEditingSkillCategory] = useState(null);

  useEffect(() => {
    setPersonalForm(personalInfo);
  }, [personalInfo]);

  const handleLogin = () => {
    const adminPassword = 'admin2026';
    if (password === adminPassword) {
      setIsUnlocked(true);
      setFormMessage('Access granted.');
      setPassword('');
    } else {
      setFormMessage('Wrong password. Use admin2026.');
    }
  };

  const handlePersonalSave = (event) => {
    event.preventDefault();
    setPersonalInfo({ ...personalForm });
    setFormMessage('Personal information saved.');
  };

  const handleProjectSave = (event) => {
    event.preventDefault();

    const normalizedProject = {
      ...projectDraft,
      id: Number(projectDraft.id) || Date.now(),
      tech: Array.isArray(projectDraft.tech)
        ? projectDraft.tech
        : String(projectDraft.tech || '')
            .split(',')
            .map((item) => item.trim())
            .filter(Boolean),
      screenshots: Array.isArray(projectDraft.screenshots)
        ? projectDraft.screenshots
        : String(projectDraft.screenshots || '')
            .split(',')
            .map((item) => item.trim())
            .filter(Boolean),
      image: projectDraft.image || (projectDraft.screenshots?.[0] || '')
    };

    if (!normalizedProject.title.trim()) {
      setFormMessage('Project title is required.');
      return;
    }

    if (editingProjectId) {
      setProjects((current) =>
        current.map((project) => (project.id === editingProjectId ? normalizedProject : project))
      );
      setFormMessage('Project updated successfully.');
    } else {
      setProjects((current) => [{ ...normalizedProject, id: Date.now() }, ...current]);
      setFormMessage('New project added.');
    }

    setProjectDraft(makeEmptyProject());
    setEditingProjectId(null);
  };

  const handleEditProject = (project) => {
    setEditingProjectId(project.id);
    setProjectDraft({
      ...project,
      tech: Array.isArray(project.tech) ? project.tech : String(project.tech || '').split(',').map((item) => item.trim()).filter(Boolean),
      screenshots: Array.isArray(project.screenshots) ? project.screenshots : String(project.screenshots || '').split(',').map((item) => item.trim()).filter(Boolean)
    });
  };

  const handleDeleteProject = (projectId) => {
    setProjects((current) => current.filter((project) => project.id !== projectId));
    if (editingProjectId === projectId) {
      setProjectDraft(makeEmptyProject());
      setEditingProjectId(null);
    }
    setFormMessage('Project deleted.');
  };

  const handleExperienceSave = (event) => {
    event.preventDefault();
    const normalized = {
      ...experienceDraft,
      id: Number(experienceDraft.id) || Date.now(),
      description: String(experienceDraft.description || '')
        .split('\n')
        .map((item) => item.trim())
        .filter(Boolean)
    };

    if (!normalized.role.trim() || !normalized.company.trim()) {
      setFormMessage('Experience role and company are required.');
      return;
    }

    if (editingExperienceId) {
      setExperience((current) => current.map((item) => item.id === editingExperienceId ? normalized : item));
      setFormMessage('Experience updated.');
    } else {
      setExperience((current) => [normalized, ...current]);
      setFormMessage('Experience added.');
    }

    setExperienceDraft(makeEmptyExperience());
    setEditingExperienceId(null);
  };

  const handleDeleteExperience = (id) => {
    setExperience((current) => current.filter((item) => item.id !== id));
    if (editingExperienceId === id) {
      setExperienceDraft(makeEmptyExperience());
      setEditingExperienceId(null);
    }
    setFormMessage('Experience deleted.');
  };

  const handleEducationSave = (event) => {
    event.preventDefault();
    const normalized = {
      ...educationDraft,
      id: Number(educationDraft.id) || Date.now()
    };

    if (!normalized.degree.trim() || !normalized.school.trim()) {
      setFormMessage('Degree and school are required.');
      return;
    }

    if (editingEducationId) {
      setEducation((current) => current.map((item) => item.id === editingEducationId ? normalized : item));
      setFormMessage('Education updated.');
    } else {
      setEducation((current) => [normalized, ...current]);
      setFormMessage('Education added.');
    }

    setEducationDraft(makeEmptyEducation());
    setEditingEducationId(null);
  };

  const handleDeleteEducation = (id) => {
    setEducation((current) => current.filter((item) => item.id !== id));
    if (editingEducationId === id) {
      setEducationDraft(makeEmptyEducation());
      setEditingEducationId(null);
    }
    setFormMessage('Education deleted.');
  };

  const handleSkillSave = (event) => {
    event.preventDefault();
    const normalized = {
      ...skillDraft,
      items: Array.isArray(skillDraft.items)
        ? skillDraft.items
        : String(skillDraft.items || '')
            .split(',')
            .map((item) => item.trim())
            .filter(Boolean)
    };

    if (!normalized.category.trim()) {
      setFormMessage('Skill category is required.');
      return;
    }

    if (editingSkillCategory) {
      setSkills((current) => current.map((item) => item.category === editingSkillCategory ? normalized : item));
      setFormMessage('Skill group updated.');
    } else {
      setSkills((current) => [normalized, ...current]);
      setFormMessage('Skill group added.');
    }

    setSkillDraft(makeEmptySkillGroup());
    setEditingSkillCategory(null);
  };

  const handleDeleteSkill = (category) => {
    setSkills((current) => current.filter((item) => item.category !== category));
    if (editingSkillCategory === category) {
      setSkillDraft(makeEmptySkillGroup());
      setEditingSkillCategory(null);
    }
    setFormMessage('Skill group deleted.');
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm">
      <div className="w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-700 dark:bg-slate-900">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500">Admin Panel</p>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Portfolio management</h3>
          </div>
          <button type="button" onClick={onClose} className="rounded-full bg-slate-100 p-2 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200">
            <X size={20} />
          </button>
        </div>

        {!isUnlocked ? (
          <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/60">
            <div className="mb-4 flex items-center gap-3 text-slate-900 dark:text-white">
              <Lock size={20} className="text-primary-500" />
              <h4 className="text-xl font-semibold">Login</h4>
            </div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Password</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter admin password"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none ring-0 transition focus:border-primary-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
            />
            <button
              type="button"
              onClick={handleLogin}
              className="mt-4 w-full rounded-xl bg-primary-600 px-4 py-3 font-semibold text-white transition hover:bg-primary-700"
            >
              Unlock Admin
            </button>
            {formMessage && <p className="mt-4 text-sm text-amber-600 dark:text-amber-400">{formMessage}</p>}
          </div>
        ) : (
          <div className="space-y-8">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <form onSubmit={handlePersonalSave} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/60">
                <div className="mb-5 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Pencil size={18} className="text-primary-500" />
                  <h4 className="text-xl font-semibold">Personal information</h4>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Name</label>
                    <input value={personalForm.name || ''} onChange={(event) => setPersonalForm({ ...personalForm, name: event.target.value })} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Title</label>
                    <input value={personalForm.title || ''} onChange={(event) => setPersonalForm({ ...personalForm, title: event.target.value })} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">French Title</label>
                    <input value={personalForm.titleFr || ''} onChange={(event) => setPersonalForm({ ...personalForm, titleFr: event.target.value })} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Tagline</label>
                    <input value={personalForm.tagline || ''} onChange={(event) => setPersonalForm({ ...personalForm, tagline: event.target.value })} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
                    <input value={personalForm.email || ''} onChange={(event) => setPersonalForm({ ...personalForm, email: event.target.value })} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Phone</label>
                    <input value={personalForm.phone || ''} onChange={(event) => setPersonalForm({ ...personalForm, phone: event.target.value })} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Location</label>
                    <input value={personalForm.location || ''} onChange={(event) => setPersonalForm({ ...personalForm, location: event.target.value })} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Website</label>
                    <input value={personalForm.website || ''} onChange={(event) => setPersonalForm({ ...personalForm, website: event.target.value })} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">GitHub</label>
                    <input value={personalForm.github || ''} onChange={(event) => setPersonalForm({ ...personalForm, github: event.target.value })} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">LinkedIn</label>
                    <input value={personalForm.linkedin || ''} onChange={(event) => setPersonalForm({ ...personalForm, linkedin: event.target.value })} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">About</label>
                    <textarea rows="4" value={personalForm.about || ''} onChange={(event) => setPersonalForm({ ...personalForm, about: event.target.value })} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">About (FR)</label>
                    <textarea rows="4" value={personalForm.aboutFr || ''} onChange={(event) => setPersonalForm({ ...personalForm, aboutFr: event.target.value })} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
                  </div>
                </div>

                <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900">
                  <Save size={18} /> Save profile
                </button>
              </form>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/60">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                    <Plus size={18} className="text-primary-500" />
                    <h4 className="text-xl font-semibold">Projects</h4>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setProjectDraft(makeEmptyProject());
                      setEditingProjectId(null);
                    }}
                    className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 dark:border-slate-600 dark:text-slate-200"
                  >
                    New project
                  </button>
                </div>

                <form onSubmit={handleProjectSave} className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Title</label>
                    <input value={projectDraft.title || ''} onChange={(event) => setProjectDraft({ ...projectDraft, title: event.target.value })} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Category</label>
                    <input value={projectDraft.category || ''} onChange={(event) => setProjectDraft({ ...projectDraft, category: event.target.value })} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Status</label>
                    <select value={projectDraft.status || 'In Progress'} onChange={(event) => setProjectDraft({ ...projectDraft, status: event.target.value })} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100">
                      <option>Completed</option>
                      <option>In Progress</option>
                      <option>Deployed</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Description</label>
                    <textarea rows="3" value={projectDraft.description || ''} onChange={(event) => setProjectDraft({ ...projectDraft, description: event.target.value })} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Tech stack (comma separated)</label>
                    <input value={(projectDraft.tech || []).join(', ')} onChange={(event) => setProjectDraft({ ...projectDraft, tech: event.target.value.split(',').map((item) => item.trim()).filter(Boolean) })} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Project link</label>
                    <input value={projectDraft.link || ''} onChange={(event) => setProjectDraft({ ...projectDraft, link: event.target.value })} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Image URL</label>
                    <input value={projectDraft.image || ''} onChange={(event) => setProjectDraft({ ...projectDraft, image: event.target.value })} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Screenshots (comma separated URLs)</label>
                    <input value={(projectDraft.screenshots || []).join(', ')} onChange={(event) => setProjectDraft({ ...projectDraft, screenshots: event.target.value.split(',').map((item) => item.trim()).filter(Boolean) })} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
                  </div>

                  <div className="flex items-center gap-3">
                    <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-4 py-3 font-semibold text-white transition hover:bg-primary-700">
                      <Save size={18} /> {editingProjectId ? 'Update project' : 'Add project'}
                    </button>
                    {editingProjectId && (
                      <button type="button" onClick={() => { setProjectDraft(makeEmptyProject()); setEditingProjectId(null); }} className="rounded-xl border border-slate-300 px-4 py-3 font-medium text-slate-700 dark:border-slate-600 dark:text-slate-200">
                        Cancel
                      </button>
                    )}
                  </div>
                </form>

                <div className="mt-6 space-y-3">
                  {projects.length === 0 ? (
                    <p className="text-sm text-slate-500 dark:text-slate-400">No projects yet.</p>
                  ) : (
                    projects.map((project) => (
                      <div key={project.id} className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900">
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white">{project.title}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{project.category}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button type="button" onClick={() => handleEditProject(project)} className="rounded-lg bg-slate-100 p-2 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200">
                            <Pencil size={16} />
                          </button>
                          <button type="button" onClick={() => handleDeleteProject(project.id)} className="rounded-lg bg-red-100 p-2 text-red-600 hover:bg-red-200 dark:bg-red-950/30 dark:text-red-300">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <form onSubmit={handleExperienceSave} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/60">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                    <Briefcase size={18} className="text-primary-500" />
                    <h4 className="text-xl font-semibold">Experience</h4>
                  </div>
                  <button type="button" onClick={() => { setExperienceDraft(makeEmptyExperience()); setEditingExperienceId(null); }} className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 dark:border-slate-600 dark:text-slate-200">New entry</button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Role</label>
                    <input value={experienceDraft.role || ''} onChange={(event) => setExperienceDraft({ ...experienceDraft, role: event.target.value })} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Company</label>
                    <input value={experienceDraft.company || ''} onChange={(event) => setExperienceDraft({ ...experienceDraft, company: event.target.value })} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Date</label>
                    <input value={experienceDraft.date || ''} onChange={(event) => setExperienceDraft({ ...experienceDraft, date: event.target.value })} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Location</label>
                    <input value={experienceDraft.location || ''} onChange={(event) => setExperienceDraft({ ...experienceDraft, location: event.target.value })} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Description (one item per line)</label>
                    <textarea rows="5" value={(experienceDraft.description || []).join('\n')} onChange={(event) => setExperienceDraft({ ...experienceDraft, description: event.target.value.split('\n').map((item) => item.trim()).filter(Boolean) })} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-4 py-3 font-semibold text-white transition hover:bg-primary-700">
                    <Save size={18} /> {editingExperienceId ? 'Update experience' : 'Add experience'}
                  </button>
                  {editingExperienceId && <button type="button" onClick={() => { setExperienceDraft(makeEmptyExperience()); setEditingExperienceId(null); }} className="rounded-xl border border-slate-300 px-4 py-3 font-medium text-slate-700 dark:border-slate-600 dark:text-slate-200">Cancel</button>}
                </div>
              </form>

              <form onSubmit={handleEducationSave} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/60">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                    <GraduationCap size={18} className="text-primary-500" />
                    <h4 className="text-xl font-semibold">Education</h4>
                  </div>
                  <button type="button" onClick={() => { setEducationDraft(makeEmptyEducation()); setEditingEducationId(null); }} className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 dark:border-slate-600 dark:text-slate-200">New entry</button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Degree</label>
                    <input value={educationDraft.degree || ''} onChange={(event) => setEducationDraft({ ...educationDraft, degree: event.target.value })} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">School</label>
                    <input value={educationDraft.school || ''} onChange={(event) => setEducationDraft({ ...educationDraft, school: event.target.value })} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Date</label>
                    <input value={educationDraft.date || ''} onChange={(event) => setEducationDraft({ ...educationDraft, date: event.target.value })} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-4 py-3 font-semibold text-white transition hover:bg-primary-700">
                    <Save size={18} /> {editingEducationId ? 'Update education' : 'Add education'}
                  </button>
                  {editingEducationId && <button type="button" onClick={() => { setEducationDraft(makeEmptyEducation()); setEditingEducationId(null); }} className="rounded-xl border border-slate-300 px-4 py-3 font-medium text-slate-700 dark:border-slate-600 dark:text-slate-200">Cancel</button>}
                </div>
              </form>
            </div>

            <form onSubmit={handleSkillSave} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/60">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                  <Code2 size={18} className="text-primary-500" />
                  <h4 className="text-xl font-semibold">Skills</h4>
                </div>
                <button type="button" onClick={() => { setSkillDraft(makeEmptySkillGroup()); setEditingSkillCategory(null); }} className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 dark:border-slate-600 dark:text-slate-200">New group</button>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Category</label>
                  <input value={skillDraft.category || ''} onChange={(event) => setSkillDraft({ ...skillDraft, category: event.target.value })} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Skills (comma separated)</label>
                  <input value={(skillDraft.items || []).join(', ')} onChange={(event) => setSkillDraft({ ...skillDraft, items: event.target.value.split(',').map((item) => item.trim()).filter(Boolean) })} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-4 py-3 font-semibold text-white transition hover:bg-primary-700">
                  <Save size={18} /> {editingSkillCategory ? 'Update skill group' : 'Add skill group'}
                </button>
                {editingSkillCategory && <button type="button" onClick={() => { setSkillDraft(makeEmptySkillGroup()); setEditingSkillCategory(null); }} className="rounded-xl border border-slate-300 px-4 py-3 font-medium text-slate-700 dark:border-slate-600 dark:text-slate-200">Cancel</button>}
              </div>
            </form>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/60">
              <h4 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">Current list</h4>
              <div className="space-y-3">
                {skills.map((group) => (
                  <div key={group.category} className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">{group.category}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{group.items.join(', ')}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button type="button" onClick={() => { setSkillDraft({ ...group, items: group.items || [] }); setEditingSkillCategory(group.category); }} className="rounded-lg bg-slate-100 p-2 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200"><Pencil size={16} /></button>
                      <button type="button" onClick={() => handleDeleteSkill(group.category)} className="rounded-lg bg-red-100 p-2 text-red-600 hover:bg-red-200 dark:bg-red-950/30 dark:text-red-300"><Trash2 size={16} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {experience.map((item) => (
                <div key={item.id} className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">{item.role}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{item.company}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button type="button" onClick={() => { setExperienceDraft(item); setEditingExperienceId(item.id); }} className="rounded-lg bg-slate-100 p-2 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200"><Pencil size={16} /></button>
                      <button type="button" onClick={() => handleDeleteExperience(item.id)} className="rounded-lg bg-red-100 p-2 text-red-600 hover:bg-red-200 dark:bg-red-950/30 dark:text-red-300"><Trash2 size={16} /></button>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{item.date} • {item.location}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
                    {(item.description || []).map((desc, idx) => <li key={idx}>{desc}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {education.map((item) => (
                <div key={item.id} className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">{item.degree}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{item.school}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button type="button" onClick={() => { setEducationDraft(item); setEditingEducationId(item.id); }} className="rounded-lg bg-slate-100 p-2 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200"><Pencil size={16} /></button>
                      <button type="button" onClick={() => handleDeleteEducation(item.id)} className="rounded-lg bg-red-100 p-2 text-red-600 hover:bg-red-200 dark:bg-red-950/30 dark:text-red-300"><Trash2 size={16} /></button>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{item.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {formMessage && !isUnlocked && (
          <p className="mt-4 text-sm text-amber-600 dark:text-amber-400">{formMessage}</p>
        )}
      </div>
    </div>
  );
};

const Footer = ({ personalInfo, locale }) => (
  <footer className="border-t border-slate-200/70 bg-white/40 py-8 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/40">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row lg:px-8">
      <p className="text-slate-500 dark:text-slate-400 text-sm">
        © {new Date().getFullYear()} {personalInfo.name}. {translations[locale].footerCopyright}
      </p>
      <div className="flex items-center gap-3">
        <p className="text-slate-400 dark:text-slate-500 text-sm flex items-center gap-1">
          {translations[locale].builtWith}
        </p>
        <a
          href="/admin"
          aria-label={translations[locale].openAdmin}
          title="Admin"
          className="rounded-full p-2 text-slate-300 transition hover:bg-slate-100 hover:text-primary-500 dark:text-slate-700 dark:hover:bg-slate-900 dark:hover:text-primary-400"
        >
          <Lock size={14} />
        </a>
      </div>
    </div>
  </footer>
);

function App() {
  useEffect(() => {
    notifyTelegramVisit();
  }, []);

  const [darkMode, setDarkMode] = useState(false);
  const [locale, setLocale] = useState('en');
  const [personalInfo, setPersonalInfo] = useState(() => {
    if (typeof window === 'undefined') return defaultPersonalInfo;
    try {
      const saved = localStorage.getItem('portfolio-personal-info');
      if (!saved) return defaultPersonalInfo;

      const savedInfo = JSON.parse(saved);
      return {
        ...defaultPersonalInfo,
        ...savedInfo,
        title: savedInfo.title === 'AI & Full Stack Developer'
          ? defaultPersonalInfo.title
          : savedInfo.title || defaultPersonalInfo.title,
        titleFr: savedInfo.titleFr === 'Développeur Full Stack & IA'
          ? defaultPersonalInfo.titleFr
          : savedInfo.titleFr || defaultPersonalInfo.titleFr
      };
    } catch {
      return defaultPersonalInfo;
    }
  });
  const [projects, setProjects] = useState(() => {
    if (typeof window === 'undefined') return defaultProjects;
    try {
      const saved = localStorage.getItem('portfolio-projects');
      const parsed = saved ? JSON.parse(saved) : defaultProjects;
      return Array.isArray(parsed)
        ? parsed.map((project) => project.id === 12 && project.title === 'FuelStationERP Tunisia'
          ? { ...project, title: 'FuelStation ERP v2.0' }
          : project)
        : defaultProjects;
    } catch {
      return defaultProjects;
    }
  });
  const [experience, setExperience] = useState(() => {
    if (typeof window === 'undefined') return defaultExperience;
    try {
      const saved = localStorage.getItem('portfolio-experience');
      return saved ? JSON.parse(saved) : defaultExperience;
    } catch {
      return defaultExperience;
    }
  });
  const [education, setEducation] = useState(() => {
    if (typeof window === 'undefined') return defaultEducation;
    try {
      const saved = localStorage.getItem('portfolio-education');
      return saved ? JSON.parse(saved) : defaultEducation;
    } catch {
      return defaultEducation;
    }
  });
  const [skills, setSkills] = useState(() => {
    if (typeof window === 'undefined') return defaultSkills.map(normalizeSkillGroup);
    try {
      const saved = localStorage.getItem('portfolio-skills');
      const parsed = saved ? JSON.parse(saved) : defaultSkills;
      return normalizeSavedSkills(parsed);
    } catch {
      return defaultSkills.map(normalizeSkillGroup);
    }
  });
  const [adminOpen, setAdminOpen] = useState(() => typeof window !== 'undefined' && window.location.pathname.replace(/\/$/, '') === '/admin');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    localStorage.setItem('portfolio-personal-info', JSON.stringify(personalInfo));
  }, [personalInfo]);

  useEffect(() => {
    localStorage.setItem('portfolio-projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('portfolio-experience', JSON.stringify(experience));
  }, [experience]);

  useEffect(() => {
    localStorage.setItem('portfolio-education', JSON.stringify(education));
  }, [education]);

  useEffect(() => {
    const sanitizedSkills = Array.isArray(skills)
      ? skills.map((group) => normalizeSkillGroup(group))
      : [];

    localStorage.setItem('portfolio-skills', JSON.stringify(sanitizedSkills.map((group) => ({
      ...group,
      icon: typeof group.icon === 'function' ? group.icon.displayName || group.icon.name || 'Code2' : 'Code2'
    }))));
  }, [skills]);

  // Handle system dark mode preference on initial load
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-transparent font-sans text-text-color selection:bg-primary-200 selection:text-primary-900 dark:selection:bg-primary-900 dark:selection:text-primary-100">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-indigo-500 origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        locale={locale}
        setLocale={setLocale}
        personalInfo={personalInfo}
      />
      
      <main>
        <Hero locale={locale} personalInfo={personalInfo} />
        <About locale={locale} personalInfo={personalInfo} />
        <Experience locale={locale} experience={experience} />
        <Skills locale={locale} skills={skills} />
        <Projects locale={locale} projects={projects} githubUrl={personalInfo.github} />
        <Education locale={locale} education={education} />
        <Contact locale={locale} personalInfo={personalInfo} />
      </main>
      
      <Footer personalInfo={personalInfo} locale={locale} />

      {adminOpen && (
        <AdminPanel
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
          projects={projects}
          setProjects={setProjects}
          experience={experience}
          setExperience={setExperience}
          education={education}
          setEducation={setEducation}
          skills={skills}
          setSkills={setSkills}
          onClose={() => setAdminOpen(false)}
          darkMode={darkMode}
        />
      )}
    </div>
  );
}

export default App;
