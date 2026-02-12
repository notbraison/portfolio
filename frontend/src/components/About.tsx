import { motion } from "framer-motion";

interface Technology {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  technologies: Technology[];
}

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  location: string;
  description: string[];
  type: string;
  techStack?: string[];
  tech?: string[]; // allow both keys if present
  achievements?: string[];
  relevantCoursework?: string[]; // added valid property
}

const About = () => {
  const timeline: TimelineItem[] = [
    {
      year: "2025",
      title: "Software Developer",
      company: "Go Digital Africa",
      location: "Westlands,Nairobi, Kenya",
      description: [
        "Developed and deployed multiple client portfolio websites and a full-featured news publishing platform.",
        "Built a dual-frontend system: ",
        "Admin portal – CRUD for articles, comments, and user management. ",
        "Reader portal – user registration, newsletter signup, and article browsing.",
        "Backend: Designed and implemented REST APIs using Laravel 12 (MVC) with a SQL database.",
        "Frontend: Built responsive interfaces with ReactJS, integrated with backend APIs.",
        "Cloud & Deployment: Deployed as 4 microservices on Railway, later migrated to cPanel for production.",
        "Integrated Firebase for authentication and image storage in articles.",
        "Served on the bug-fixing team for the company’s main site (godigitalafrica.com)",
      ],
      type: "work",
      techStack: [
        "React",
        "Python(Django)",
        "TypeScript",
        "Laravel",
        "AWS",
        "Node.js",
        "PostgreSQL",
      ],
    },
    {
      year: "2024",
      title: "Software Engineering Intern",
      company: "AttainEnterprises",
      location: "Nairobi, Kenya",
      description: [
        "Designed and implemented a building management system from scratch",
        "Led the frontend development using React and TypeScript",
        "Implemented secure authentication and authorization systems",
        "Optimized database queries resulting in 40% faster load times",
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
        "Studied core computer science subjects including algorithms, data structures, databases, and software development",
      ],
      type: "education",
      relevantCoursework: [
        "Data Structures & Algorithms",
        "Artificial Intelligence Applications",
        "Distributed Systems",
        "Computer Network Security",
        "Machine Learning",
        "Compiler Construction",
        "Project Management",
      ],
    },
  ];

  const skills: SkillCategory[] = [
    {
      category: "Frontend",
      technologies: [
        { name: "Vue", level: 90 },
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 95 },
      ],
    },
    {
      category: "Backend",
      technologies: [
        { name: "PHP Laravel", level: 85 },
        { name: "Node.js", level: 85 },
        { name: "MySQL", level: 70 },
        { name: "PostgreSQL", level: 80 },
        { name: "Python", level: 80 },
      ],
    },
    {
      category: "DevOps & Tools",
      technologies: [
        { name: "AWS", level: 70 },
        { name: "Docker", level: 75 },
        { name: "Git", level: 90 },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 md:px-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
      >
        About Me
      </motion.h2>

      {/* Skills Section */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillCat, idx) => (
            <div
              key={skillCat.category}
              className="bg-white dark:bg-slate-800 rounded-lg shadow p-6"
            >
              <h4 className="font-bold mb-4 text-lg">{skillCat.category}</h4>
              <ul>
                {skillCat.technologies.map((tech) => (
                  <li
                    key={tech.name}
                    className="mb-2 flex items-center justify-between"
                  >
                    <span>{tech.name}</span>
                    <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                      {tech.level}%
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Timeline</h3>
        <div className="space-y-8">
          {timeline.map((item, idx) => (
            <motion.div
              key={item.year + item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-white dark:bg-slate-800 rounded-lg shadow p-6"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-blue-600 dark:text-blue-400">
                  {item.year}
                </span>
                <span className="font-semibold">{item.title}</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                {item.company} &mdash; {item.location}
              </div>
              <ul className="list-disc ml-6 mb-2">
                {item.description.map((desc, i) => (
                  <li key={desc + i}>{desc}</li>
                ))}
              </ul>
              {item.techStack && (
                <div className="mb-2">
                  <span className="font-semibold">Tech Stack:</span>{" "}
                  {item.techStack.join(", ")}
                </div>
              )}
              {item.achievements && (
                <div>
                  <span className="font-semibold">Achievements:</span>
                  <ul className="list-disc ml-6">
                    {item.achievements.map((ach, i) => (
                      <li key={ach + i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
