import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  Download,
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
  const location = useLocation();
  const [showExperience, setShowExperience] = useState(false);
  const [showEducation, setShowEducation] = useState(false);

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

  const experienceItems = timeline.filter((item) => item.type === "work");
  const educationItems = timeline.filter((item) => item.type === "education");

  const certifications = [
    {
      name: "Accenture North America Completion Certificate",
      file: "/assets/certificates/accenture-north-america-certificate.pdf",
    },
    {
      name: "IBM Data Science 101 Certificate",
      file: "/assets/certificates/ibm-data-science-101-certificate.pdf",
    },
    {
      name: "MATLAB Onramp Certificate",
      file: "/assets/certificates/matlab-onramp-certificate.pdf",
    },
    {
      name: "UC-bf9f2bef-e7e0-432e-ba7f-7b54d70ab5b7 Certificate",
      file: "/assets/certificates/uc-certificate.pdf",
    },
  ];

  useEffect(() => {
    const shouldExpand = location.hash === "#about";
    if (shouldExpand) {
      setShowExperience(true);
      setShowEducation(true);
    }
  }, [location.hash]);

  useEffect(() => {
    const expandAll = () => {
      setShowExperience(true);
      setShowEducation(true);
    };

    window.addEventListener("about:expand", expandAll);
    return () => window.removeEventListener("about:expand", expandAll);
  }, []);

  return (
    <div className="py-16 px-4 md:px-10 lg:px-16">
      <section className="w-full space-y-8">
        <div className="rounded-2xl p-5 md:p-6 bg-white/80 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
          <button
            type="button"
            onClick={() => setShowExperience((prev) => !prev)}
            className="w-full flex flex-wrap items-center justify-between gap-3 text-left"
            aria-expanded={showExperience}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100">
                Experience
              </h3>
              {!showExperience && (
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mt-1">
                  {experienceItems.length} roles in full-stack and product-focused development.
                </p>
              )}
            </div>
            <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
              {showExperience ? "Collapse" : "Expand"}
              {showExperience ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </span>
          </button>

          {showExperience && (
            <div className="space-y-6 mt-6">
              {experienceItems.map((item, idx) => (
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
                    <div className="flex flex-wrap gap-2 mb-1">
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
                </motion.article>
              ))}
            </div>
          )}
        </div>

        <div className="rounded-2xl p-5 md:p-6 bg-white/80 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
          <button
            type="button"
            onClick={() => setShowEducation((prev) => !prev)}
            className="w-full flex flex-wrap items-center justify-between gap-3 text-left"
            aria-expanded={showEducation}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100">
                Education
              </h3>
              {!showEducation && (
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mt-1">
                  {educationItems.length} degree entry and{" "}
                  {certifications.length} certifications.
                </p>
              )}
            </div>
            <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-semibold bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300">
              {showEducation ? "Collapse" : "Expand"}
              {showEducation ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </span>
          </button>

          {showEducation && (
            <div className="space-y-6 mt-6">
              {educationItems.map((item, idx) => (
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

                  {item.relevantCoursework && (
                    <div className="mb-1">
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

              <div className="rounded-2xl p-6 md:p-7 bg-white/85 dark:bg-slate-800/80 border border-violet-100 dark:border-slate-700 shadow-[0_12px_35px_rgba(124,58,237,0.08)]">
                <h4 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100">
                  Certifications
                </h4>
                <ul className="space-y-2 text-slate-700 dark:text-slate-200">
                  {certifications.map((cert) => (
                    <li
                      key={cert.name}
                      className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-900/30"
                    >
                      <span>{cert.name}</span>
                      <a
                        href={cert.file}
                        download
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/60 transition-colors"
                      >
                        <Download size={14} />
                        Download
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default About;
