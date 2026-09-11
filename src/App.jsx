import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useTelegramVisitNotifier } from './useTelegramVisitNotifier';
import { 
  Mail, Download, ChevronDown, 
  ExternalLink, Code2, Monitor, Database, User, 
  Briefcase, GraduationCap, Moon, Sun, Menu, X, MapPin,
  Shield, Save, Plus, Trash2, Lock, Pencil
} from 'lucide-react';
import {
  personalInfo as defaultPersonalInfo,
  skills as defaultSkills,
  experience as defaultExperience,
  education as defaultEducation,
  projects as defaultProjects,
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
    aboutMe: 'About Me',
    location: 'Location',
    email: 'Email',
    language: 'Language',
    english: 'EN',
    french: 'FR',
    featuredProjects: 'Featured Projects',
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
    skills: 'Compétences techniques',
    projects: 'Projets',
    contact: 'Contact',
    hello: "Bonjour, je suis",
    viewWork: 'Voir mes projets',
    downloadCV: 'Télécharger CV',
    letsTalk: 'Contactez-moi',
    aboutMe: 'À propos de moi',
    location: 'Localisation',
    email: 'Email',
    language: 'Langue',
    english: 'EN',
    french: 'FR',
    featuredProjects: 'Projets en vedette',
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

const Navbar = ({ darkMode, setDarkMode, locale, setLocale, personalInfo, onAdminClick }) => {
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
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              type="button"
              onClick={onAdminClick}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-primary-500 hover:text-primary-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              <Shield size={16} /> Admin
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLocale('en')}
                className={`px-3 py-2 rounded-full text-sm ${locale === 'en' ? 'bg-primary-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLocale('fr')}
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
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              type="button"
              onClick={onAdminClick}
              className="rounded-full border border-slate-200 bg-white p-2 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              aria-label="Open admin panel"
            >
              <Shield size={18} />
            </button>
            <button
              onClick={() => setLocale(locale === 'en' ? 'fr' : 'en')}
              className="px-3 py-2 rounded-full text-sm bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              aria-label="Toggle Language"
            >
              {locale === 'en' ? 'FR' : 'EN'}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600 dark:text-slate-300"
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
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = ({ locale, personalInfo }) => {
  const t = translations[locale];
  const title = locale === 'fr' ? personalInfo.titleFr || personalInfo.title : personalInfo.title;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 dark:bg-primary-500/20 rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-lighten animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl mb-8"
          >
            <img 
              src="/avatar.png" 
              alt={personalInfo.name} 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase mb-3"
          >
            {t.hello}
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight"
          >
            {personalInfo.name}
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 font-medium mb-8 max-w-2xl"
          >
            {title}
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#projects" className="px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium rounded-full hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-lg hover:-translate-y-1">
              {t.viewWork}
            </a>
            <a href="/ibrahim_jlidi.pdf" download className="px-8 py-3.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium rounded-full border border-slate-200 dark:border-slate-700 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all flex items-center gap-2 group shadow-sm hover:shadow-md hover:-translate-y-1">
              <Download size={18} className="group-hover:animate-bounce" /> {t.downloadCV}
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 animate-bounce text-slate-400 dark:text-slate-500"
          >
            <ChevronDown size={32} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = ({ locale, personalInfo }) => {
  const t = translations[locale];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading icon={User}>{t.aboutMe}</SectionHeading>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="prose dark:prose-invert prose-lg text-slate-600 dark:text-slate-300"
          >
            <p className="leading-relaxed">{locale === 'fr' ? personalInfo.aboutFr : personalInfo.about}</p>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <MapPin size={18} className="text-primary-500" /> {t.location}
                </h4>
                <p>{personalInfo.location}</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <Mail size={18} className="text-primary-500" /> {t.email}
                </h4>
                <p className="truncate"><a href={`mailto:${personalInfo.email}`} className="hover:text-primary-500 transition-colors">{personalInfo.email}</a></p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {languages.map((lang, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">{lang.name}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">{lang.level}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Experience = ({ locale, experience }) => {
  const t = translations[locale];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading icon={Briefcase}>{t.experience}</SectionHeading>
        
        <div className="space-y-12">
          {experience.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 md:gap-12 items-start">
                <div className="md:col-span-1 md:text-right mb-4 md:mb-0 pt-1">
                  <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full inline-block whitespace-nowrap">
                    {exp.date.split('–')[0].trim()} - {exp.date.split('–')[1]?.trim() || 'Present'}
                  </span>
                </div>
                
                <div className="md:col-span-4 relative group">
                  <div className="hidden md:block absolute -left-[32px] top-2 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-primary-500 z-10 group-hover:scale-125 transition-transform" />
                  <div className="hidden md:block absolute -left-[25px] top-6 bottom-[-60px] w-0.5 bg-slate-200 dark:bg-slate-800" />
                  
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all group-hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-4 mt-1">
                      <span className="font-medium text-slate-700 dark:text-slate-300">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-slate-600 dark:text-slate-300 text-sm flex items-start gap-2">
                          <span className="text-primary-500 mt-1">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = ({ locale, skills }) => {
  const t = translations[locale];

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading icon={Code2}>{t.skills}</SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => {
            const Icon = skillGroup.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:border-primary-200 dark:hover:border-primary-800 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-lg">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 text-sm rounded-md font-medium hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Projects = ({ locale, projects }) => {
  const t = translations[locale];
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const categories = ['All', ...(projects ? [...new Set(projects.map(p => p.category))] : [])];
  
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);
  const placeholderImage = 'https://placehold.co/1200x800/0f172a/ffffff?text=Project+Preview';

  return (
    <>
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading icon={Monitor}>{t.featuredProjects}</SectionHeading>
          
          <div className="flex flex-wrap gap-2 pb-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  filter === cat 
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all flex flex-col"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image || project.screenshots?.[0] || placeholderImage}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-xs font-bold tracking-wider uppercase text-primary-500 mb-2">
                    {project.category}
                  </div>
                  {project.link !== '#' ? (
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary-500 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  ) : null}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-mono px-2.5 py-1 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/50 px-8 py-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-sm">
                <span className="text-slate-500 flex items-center gap-1.5">
                  <div className={`w-2 h-2 rounded-full ${project.status === 'Completed' ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`}></div>
                  {project.status === 'Completed' ? t.completed : t.inProgress}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="font-medium text-primary-600 dark:text-primary-400 hover:underline"
                >
                  {t.viewDetails}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {selectedProject && (
      <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 px-4 py-8" onClick={() => { setSelectedProject(null); setActiveImageIndex(0); }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-4xl rounded-3xl border border-slate-200 bg-white p-0 shadow-2xl dark:border-slate-700 dark:bg-slate-900"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 dark:border-slate-700">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500">{selectedProject.category}</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{selectedProject.title}</h3>
            </div>
            <button type="button" onClick={() => { setSelectedProject(null); setActiveImageIndex(0); }} className="rounded-full p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
              <X size={20} />
            </button>
          </div>
          <div className="grid gap-6 p-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="relative">
                <img
                  src={(selectedProject.screenshots && selectedProject.screenshots[activeImageIndex]) || selectedProject.image || placeholderImage}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />
                {selectedProject.screenshots && selectedProject.screenshots.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => setActiveImageIndex((prev) => (prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1))}
                      className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/70 p-2 text-white"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveImageIndex((prev) => (prev === selectedProject.screenshots.length - 1 ? 0 : prev + 1))}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/70 p-2 text-white"
                    >
                      →
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <p className="mb-4 text-slate-600 dark:text-slate-300">{selectedProject.description}</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Preview</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {selectedProject.link !== '#' ? 'View the live project or explore the full experience.' : 'This project is currently in progress and the live link is not available yet.'}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                {selectedProject.link !== '#' ? (
                  <a href={selectedProject.link} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-primary-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-700">
                    Visit Site
                  </a>
                ) : null}
                <button type="button" onClick={() => { setSelectedProject(null); setActiveImageIndex(0); }} className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800">
                  Close
                </button>
              </div>
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
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
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
              className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
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

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-600 to-indigo-800 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.readyToWork}</h2>
          <p className="text-primary-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            {t.availableForWork}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href={`mailto:${personalInfo.email}`} className="px-8 py-4 bg-white text-primary-700 font-bold rounded-full hover:bg-slate-50 transition-all hover:-translate-y-1 w-full sm:w-auto shadow-lg flex items-center justify-center gap-2">
              <Mail size={20} /> {t.sayHello}
            </a>
            <div className="flex gap-4 w-full sm:w-auto justify-center">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-4 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all hover:-translate-y-1 text-white">
                <GithubIcon size={24} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-4 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all hover:-translate-y-1 text-white">
                <LinkedinIcon size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
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

const Footer = ({ personalInfo }) => (
  <footer className="bg-white dark:bg-slate-950 py-8 border-t border-slate-200 dark:border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-slate-500 dark:text-slate-400 text-sm">
        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
      </p>
      <p className="text-slate-400 dark:text-slate-500 text-sm flex items-center gap-1">
        Built with React & Tailwind CSS
      </p>
    </div>
  </footer>
);

function App() {
  useTelegramVisitNotifier();

  const [darkMode, setDarkMode] = useState(false);
  const [locale, setLocale] = useState('en');
  const [personalInfo, setPersonalInfo] = useState(() => {
    if (typeof window === 'undefined') return defaultPersonalInfo;
    try {
      const saved = localStorage.getItem('portfolio-personal-info');
      return saved ? JSON.parse(saved) : defaultPersonalInfo;
    } catch {
      return defaultPersonalInfo;
    }
  });
  const [projects, setProjects] = useState(() => {
    if (typeof window === 'undefined') return defaultProjects;
    try {
      const saved = localStorage.getItem('portfolio-projects');
      return saved ? JSON.parse(saved) : defaultProjects;
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
    if (typeof window === 'undefined') return defaultSkills;
    try {
      const saved = localStorage.getItem('portfolio-skills');
      return saved ? JSON.parse(saved) : defaultSkills;
    } catch {
      return defaultSkills;
    }
  });
  const [adminOpen, setAdminOpen] = useState(false);
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
    localStorage.setItem('portfolio-skills', JSON.stringify(skills));
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
    <div className="min-h-screen bg-bg-color text-text-color font-sans overflow-x-hidden selection:bg-primary-200 selection:text-primary-900 dark:selection:bg-primary-900 dark:selection:text-primary-100">
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
        onAdminClick={() => setAdminOpen(true)}
      />
      
      <main>
        <Hero locale={locale} personalInfo={personalInfo} />
        <About locale={locale} personalInfo={personalInfo} />
        <Experience locale={locale} experience={experience} />
        <Skills locale={locale} skills={skills} />
        <Projects locale={locale} projects={projects} />
        <Education locale={locale} education={education} />
        <Contact locale={locale} personalInfo={personalInfo} />
      </main>
      
      <Footer personalInfo={personalInfo} />

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
