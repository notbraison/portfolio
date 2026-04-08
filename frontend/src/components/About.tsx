import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  location: string;
  description: string[];
  type: "work" | "education";
  techStack?: string[];
  relevantCoursework?: string[];
}

const About = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const profileSlides = [
    {
      type: "image" as const,
      src: "/assets/me.jpg",
      alt: "Braison portrait placeholder 1",
    },
    {
      type: "image" as const,
      src: "/assets/me.jpg",
      alt: "Braison portrait placeholder 2",
    },
    {
      type: "content" as const,
      title: "Braison Orina",
      bio: "Full-stack developer focused on practical products, clean interfaces, and scalable backend systems.",
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % profileSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? profileSlides.length - 1 : prev - 1
    );
  };

  const timeline: TimelineItem[] = [
    {
      year: "2025",
      title: "Software Developer",
      company: "Go Digital Africa",
      location: "Westlands, Nairobi, Kenya",
      description: [
        "Developed and deployed multiple client portfolio websites and a full-featured news publishing platform.",
        "Built an admin + reader dual frontend with secure APIs and robust content workflows.",
        "Contributed to bug-fixing and stability improvements for the company main site.",
        "Collaborated with designers and content teams to translate editorial requirements into reliable product features.",
        "Improved deployment reliability by documenting release flows and production support checks.",
      ],
      type: "work",
      techStack: [
        "React",
        "TypeScript",
        "Laravel",
        "Node.js",
        "PostgreSQL",
        "AWS",
      ],
    },
    {
      year: "2024",
      title: "Software Engineering Intern",
      company: "AttainEnterprises",
      location: "Nairobi, Kenya",
      description: [
        "Designed and implemented a building management system from scratch.",
        "Led key frontend development tasks in React and TypeScript.",
        "Improved data performance with query optimization.",
        "Worked closely with stakeholders to turn manual workflows into a structured digital system.",
        "Delivered iterative UI improvements based on user feedback during internal testing.",
      ],
      type: "work",
      techStack: ["Vue", "Laravel", "Node.js", "MySQL"],
    },
    {
      year: "2021–2025",
      title: "B.S. Computer Science",
      company: "University of Nairobi",
      location: "Nairobi, Kenya",
      description: [
        "Built a strong foundation in software engineering, algorithms, systems, and applied computing.",
        "Completed projects focused on software architecture, data handling, and collaborative development.",
      ],
      type: "education",
      relevantCoursework: [
        "Data Structures & Algorithms",
        "Machine Learning",
        "Distributed Systems",
        "Compiler Construction",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 md:px-10 lg:px-16 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="max-w-6xl mx-auto text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          Product-minded software developer who enjoys building fast, clean,
          and scalable applications across web and backend systems.
        </p>
      </motion.div>

      <section className="max-w-6xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start bg-white/80 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
        >
          <div className="mx-auto w-full max-w-[420px]">
            <div className="relative aspect-square [perspective:1200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, rotateY: 90, scale: 0.95 }}
                  animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                  exit={{ opacity: 0, rotateY: -90, scale: 0.95 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-[0_18px_35px_rgba(15,23,42,0.20)]"
                >
                  {profileSlides[activeSlide].type === "image" ? (
                    <img
                      src={profileSlides[activeSlide].src}
                      alt={profileSlides[activeSlide].alt}
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <div className="w-full h-full bg-violet-600 text-white p-8 flex flex-col justify-center text-center">
                      <h4 className="text-3xl font-semibold mb-3">
                        {profileSlides[activeSlide].title}
                      </h4>
                      <p className="text-white/90 leading-relaxed mb-6">
                        {profileSlides[activeSlide].bio}
                      </p>
                      <div className="flex items-center justify-center gap-3">
                        <a
                          href="https://github.com/notbraison"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white text-violet-700 inline-flex items-center justify-center"
                          aria-label="GitHub"
                        >
                          <Github size={18} />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/braison-orina-9b5576254/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white text-violet-700 inline-flex items-center justify-center"
                          aria-label="LinkedIn"
                        >
                          <Linkedin size={18} />
                        </a>
                        <a
                          href="https://x.com/onewhoplaysMC"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white text-violet-700 inline-flex items-center justify-center"
                          aria-label="X"
                        >
                          <Twitter size={18} />
                        </a>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/65 text-white inline-flex items-center justify-center hover:bg-slate-900/80 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/65 text-white inline-flex items-center justify-center hover:bg-slate-900/80 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              {profileSlides.map((_, index) => (
                <button
                  key={`slide-dot-${index}`}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeSlide
                      ? "w-8 bg-violet-500"
                      : "w-2.5 bg-slate-300 dark:bg-slate-600"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100 leading-tight">
              I&apos;m Braison, a software developer building practical products
              for real users.
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              My work sits at the intersection of product thinking and
              engineering execution. I enjoy taking ideas from concept to
              production, with attention to performance, reliability, and user
              experience.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              I&apos;ve worked across frontend and backend systems using React,
              Laravel, TypeScript, and relational databases, often shipping in
              fast-moving environments where clarity and adaptability matter.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              These days, I focus on creating software that is maintainable for
              teams and intuitive for users, while still leaving room for bold
              interface ideas and creative detail.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-800 dark:text-slate-100">
          Experience
        </h3>

        <div className="space-y-6">
          {timeline.map((item, idx) => (
            <motion.article
              key={item.year + item.title}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="rounded-2xl p-6 md:p-7 bg-white/85 dark:bg-slate-800/80 border border-blue-100 dark:border-slate-700 shadow-[0_12px_35px_rgba(37,99,235,0.08)]"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <span className="inline-flex px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                  {item.year}
                </span>
                <span className="text-base md:text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {item.title}
                </span>
              </div>

              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mb-4">
                {item.company} &mdash; {item.location}
              </p>

              <ul className="list-disc ml-5 space-y-1 text-slate-700 dark:text-slate-200 mb-4">
                {item.description.map((desc, i) => (
                  <li key={desc + i}>{desc}</li>
                ))}
              </ul>

              {item.techStack && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {item.relevantCoursework && (
                <div className="mb-4">
                  <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
                    Relevant Coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.relevantCoursework.map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
