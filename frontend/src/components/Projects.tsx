import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    },
    {
      id: 2,
      title: "TES Network (Humanitarian Website)",
      description:
        "Responsive public site with a protected admin CMS for managing programs, events, stories, gallery and donations.",
      longDescription: `Built a responsive public site plus a protected admin CMS:
• Public site – responsive pages (Home, About, Programs, Events, Gallery, Stories, Donate, Team, Contact) with lazy-loaded media and accessible UI.
• Admin CMS – email/password auth, protected routes, role-based access, full CRUD for stories/events/programs/gallery/team/donations, and media management.

Backend: Supabase (Postgres) with Edge Functions for email notifications and signed storage URL handling.
Frontend: React + Vite + TypeScript, TanStack React Query for data, Tailwind + Radix UI + shadcn/ui for design.
Cloud & Deployment: Vercel for frontend, Supabase for backend/functions; RLS policies and secure signed URLs for storage.`,
      tech: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind",
        "Radix UI",
        "shadcn/ui",
        "Lucide React",
        "TanStack React Query",
        "Supabase",
        "PostgreSQL",
        "SendGrid",
        "Vercel",
        "PostCSS",
        "ESLint",
      ],
      image: "/assets/TES.png",
      github: "https://github.com/notbraison/TES",
      live: "https://tes-bay-six.vercel.app/",
      featured: true,
      images: ["/assets/TES.png"],
    },
    {
      id: 3,
      title: "Building Management System",
      description:
        "A full-stack app for property owners to manage buildings, rooms, and bookings, with role-based access, booking validation, and payment integration.",
      longDescription:
        "A sophisticated dashboard application that transforms complex datasets into intuitive, interactive visualizations. Features real-time updates, custom chart types, and export capabilities.",
      tech: ["Laravel", "MySQL", "Vue.js", "Stripe"],
      image: "/lovable-uploads/ebf4e624-3656-4574-9eb8-a8701fb3fe1a.png",
      github: "https://github.com/yourusername/dashboard",
      live: "https://dashboard-demo.com",
      featured: false,
      images: ["/lovable-uploads/ebf4e624-3656-4574-9eb8-a8701fb3fe1a.png"],
    },
    {
      id: 4,
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
    },
    {
      id: 5,
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
    },
    {
      id: 6,
      title: "Mini Compiler for C to Python",
      description:
        "A mini compiler that translates C code into Python, implementing lexical analysis and syntax parsing.",
      longDescription:
        "A sophisticated dashboard application that transforms complex datasets into intuitive, interactive visualizations. Features real-time updates, custom chart types, and export capabilities.",
      tech: ["Python", "Lexers/Parsers", "AST"],
      image: "/lovable-uploads/ebf4e624-3656-4574-9eb8-a8701fb3fe1a.png",
      github: "https://github.com/yourusername/dashboard",
      live: "https://dashboard-demo.com",
      featured: false,
      images: ["/lovable-uploads/ebf4e624-3656-4574-9eb8-a8701fb3fe1a.png"],
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

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, featuring interactive web
            applications, 3D experiences, and full-stack solutions.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
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
                className="group cursor-pointer"
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImageIndex(0);
                }}
              >
                <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
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
                className="group cursor-pointer"
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImageIndex(0);
                }}
              >
                <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300">
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
