import { useEffect, useState, type CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  ExternalLink,
  Github,
  X,
  ChevronLeft,
  ChevronRight,
  Gamepad2,
  ArrowRight,
} from "lucide-react";

import { creativeWork } from "../data/portfolio";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
  featured: boolean;
  images: string[];
  accent: [string, string];
}

interface ProjectsProps {
  showExtendedSections?: boolean;
}

const Projects = ({ showExtendedSections = true }: ProjectsProps) => {
  const location = useLocation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!location.hash) return;
    const sectionId = location.hash.replace("#", "");
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "auto", block: "start" });
  }, [location.hash]);

  const projects: Project[] = [
    {
      id: 1,
      title: "East African Bullet (News Site)",
      description:
        "A dual-frontend news platform with admin and reader portals, deployed to production.",
      longDescription: `Built a dual-frontend system:
• Admin portal – CRUD for articles, comments, and user management.
• Reader portal – user registration, newsletter signup, and article browsing.

Backend: Designed and implemented REST APIs using Laravel 12 (MVC) with a SQL database.
Frontend: Built responsive interfaces with ReactJS, integrated with backend APIs.
Cloud & Deployment: Deployed as 4 microservices on Railway, later migrated to cPanel for production.
Integrated Firebase for authentication and image storage in articles.`,
      tech: [
        "React",
        "TypeScript",
        "Laravel",
        "Node.js",
        "Firebase",
        "AWS",
        "PostgreSQL",
      ],
      image: "/assets/EABulletin.png",
      github:
        "https://github.com/GDA-Developers-Hub/Finance-and-Systems-Consultants-Limited",
      live: "https://frontend-production-ec5e.up.railway.app/",
      featured: true,
      images: ["/assets/EABulletin.png"],
      accent: ["#2563eb", "#f97316"],
    },
    {
      id: 2,
      title: "TES Network (Humanitarian Website)",
      description:
        "Responsive public site with a protected admin CMS for managing programs, events, stories, gallery and donations.",
      longDescription: `Built a responsive public site plus a protected admin CMS:
• Public site – responsive pages (Home, About, Programs, Events, Gallery, Stories, Donate, Team, Contact) with lazy-loaded media and accessible UI.
• Admin CMS – email/password auth, protected routes, role-based access, full CRUD for stories/events/programs/gallery/team/donations, and media management.

Backend: PostgreSQL with serverless functions for email notifications and signed storage URL handling.
Frontend: React + Vite + TypeScript, TanStack React Query for data, Tailwind + Radix UI + shadcn/ui for design.
Cloud & Deployment: Vercel for frontend with a managed backend and secure signed storage URLs.`,
      tech: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind",
        "Radix UI",
        "shadcn/ui",
        "Lucide React",
        "PostgreSQL",
        "SendGrid",
        "Vercel",
      ],
      image: "/assets/TES.png",
      github: "https://github.com/notbraison/TES",
      live: "https://tes-bay-six.vercel.app/",
      featured: true,
      images: ["/assets/TES.png"],
      accent: ["#0284c7", "#8b5cf6"],
    },
    {
      id: 3,
      title: "consultantsltd",
      description:
        "A full-stack public-facing website for consulting platform.",
      longDescription: `Built a full-stack consulting platform with a public-facing website and secure admin panel. The site highlights 9 core service areas, includes a dynamic news section, contact and quote request workflows, and an AI-powered assistant with direct fallback channels (email/phone/WhatsApp). The admin side supports authenticated content operations, including news/social links management, user management, inquiry tracking, and media uploads. Backend APIs are hardened with CORS controls, rate limiting, JWT auth, and security middleware for production readiness.`,
      tech: [
        "Next.js",
        "Node.js",
        "TypeScript",
        "Vite",
        "Tailwind",
        "Radix UI",
        "shadcn/ui",
        "Vercel",
        "PostCSS",
        "Express",
      ],
      image: "/assets/consultantsltd.png",
      github: "https://github.com/notbraison/democonsultantsltd",
      live: "https://consultantsltd.vercel.app  ",
      featured: true,
      images: ["/assets/consultantsltd.png"],
      accent: ["#c70244", "#f65c5c"],
    },
    {
      id: 4,
      title: "Food Palace (Restaurant Ordering Site)",
      description:
        "Built a polished restaurant ordering site with a clean public-facing experience and a light, food-focused brand style.",
      longDescription: `Built a polished restaurant ordering experience with a responsive landing flow, sticky header, category navigation, and partner delivery strip.

• Searchable menu browser with 5 categories: Pizza, Burgers, Chicken, Sides, Drinks.
• Dynamic item cards with pricing, descriptions, and image-driven ordering.
• Floating order CTA and slide-out cart sidebar for quick add-to-cart checkout previews.
• Contact section with phone, email, location, operating hours, and social links.
• Lightweight footer with quick links, payment methods, and delivery guarantee details.`,
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Radix UI",
        "PostCSS",
        "Vercel",
        "React",
        "Lucide-react",
      ],
      image: "/assets/Screenshot%20from%202026-04-13%2016-03-52.png",
      github: "https://github.com/notbraison/menu",
      live: "https://food-palace-menu.vercel.app",
      featured: true,
      images: ["/assets/Screenshot%20from%202026-04-13%2016-03-52.png"],
      accent: ["#dc2626", "#f97316"],
    },
    {
      id: 5,
      title: "Expensely (Expense Sharing Platform)",
      description:
        "An app for managing shared expenses in groups, with real-time expense splitting and transaction tracking.",
      longDescription:
        "A sophisticated dashboard application that transforms complex datasets into intuitive, interactive visualizations. Features real-time updates, custom chart types, and export capabilities.",
      tech: ["Vue.js", "Laravel", "MySQL"],
      image: "/lovable-uploads/ebf4e624-3656-4574-9eb8-a8701fb3fe1a.png",
      github: "https://github.com/yourusername/dashboard",
      live: "https://dashboard-demo.com",
      featured: false,
      images: ["/lovable-uploads/ebf4e624-3656-4574-9eb8-a8701fb3fe1a.png"],
      accent: ["#0ea5e9", "#a855f7"],
    },
    {
      id: 6,
      title: "AI Chatbot for Pizza Ordering",
      description:
        "An AI-powered chatbot that helps users order pizza via conversational interface, using NLP for intent recognition.",
      longDescription:
        "A sophisticated dashboard application that transforms complex datasets into intuitive, interactive visualizations. Features real-time updates, custom chart types, and export capabilities.",
      tech: ["Python", "TensorFlow", "NLTK"],
      image: "/lovable-uploads/ebf4e624-3656-4574-9eb8-a8701fb3fe1a.png",
      github: "https://github.com/yourusername/dashboard",
      live: "https://dashboard-demo.com",
      featured: false,
      images: ["/lovable-uploads/ebf4e624-3656-4574-9eb8-a8701fb3fe1a.png"],
      accent: ["#8b5cf6", "#ec4899"],
    },
   
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % selectedProject.images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
      );
    }
  };

  const projectAccentStyle = (project: Project) =>
    ({
      "--project-accent-1": project.accent[0],
      "--project-accent-2": project.accent[1],
    }) as CSSProperties;

  return (
    <div
      className={`${
        showExtendedSections ? "min-h-screen py-20" : "py-8 md:py-10"
      } px-6`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pb-1">
              Projects
            </h2>
            {!showExtendedSections && (
              <Link
                to="/projects"
                className="inline-flex items-center gap-1 text-cyan-600 font-semibold hover:text-cyan-500 transition-colors"
                aria-label="See all projects"
                title="See all projects"
              >
                <span className="rainbow-flow-text">More</span>
                <ArrowRight size={18} />
              </Link>
            )}
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, featuring interactive web
            applications, 3D experiences, and full-stack solutions.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          id="featured"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20 scroll-mt-24"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group cursor-pointer project-glass-shell"
                style={projectAccentStyle(project)}
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImageIndex(0);
                }}
              >
                <div className="project-glass-card rounded-xl overflow-hidden shadow-lg border border-gray-200/70 dark:border-slate-700/80 hover:shadow-2xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={20} className="text-white" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={20} className="text-white" />
                      </motion.a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-sm">
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {showExtendedSections && (
          <>
            {/* Games (now listed under Projects) */}
            <motion.div
              id="games"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mb-20 scroll-mt-24"
            >
              <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">
                Games
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {creativeWork.games.map((game) => (
                  <motion.a
                    key={game.id}
                    href={game.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ y: -6 }}
                    className="group bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        <Gamepad2 size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {game.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          Play on external site
                        </p>
                      </div>
                      <ExternalLink
                        size={18}
                        className="text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                      />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Other Projects */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">
                Other Projects
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="group cursor-pointer project-glass-shell project-glass-shell-sm"
                    style={projectAccentStyle(project)}
                    onClick={() => {
                      setSelectedProject(project);
                      setCurrentImageIndex(0);
                    }}
                  >
                    <div className="project-glass-card rounded-lg p-6 border border-gray-200/70 dark:border-slate-700/80 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300">
                      <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`View ${project.title} on GitHub`}
                          title={`View ${project.title} on GitHub`}
                        >
                          <Github size={18} />
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`Open live demo for ${project.title}`}
                          title={`Open live demo for ${project.title}`}
                        >
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/20 backdrop-blur-sm rounded-full hover:bg-black/40 transition-colors"
                  aria-label="Close project modal"
                  title="Close project modal"
                >
                  <X size={20} className="text-white" />
                </button>

                {/* Image carousel */}
                <div className="relative h-64 md:h-80 overflow-hidden rounded-t-xl">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/20 backdrop-blur-sm rounded-full hover:bg-black/40 transition-colors"
                        aria-label="Previous image"
                        title="Previous image"
                      >
                        <ChevronLeft size={20} className="text-white" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/20 backdrop-blur-sm rounded-full hover:bg-black/40 transition-colors"
                        aria-label="Next image"
                        title="Next image"
                      >
                        <ChevronRight size={20} className="text-white" />
                      </button>
                    </>
                  )}
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Github size={20} />
                      View Code
                    </motion.a>
                    <motion.a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
