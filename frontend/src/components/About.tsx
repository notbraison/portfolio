import { motion } from "framer-motion";
import { Calendar, MapPin, Award, Code } from "lucide-react";
import { useEffect } from "react";

const gradientBalls = [
  {
    style:
      "left-10 top-24 w-40 h-40 bg-gradient-to-br from-pink-500 via-yellow-400 to-purple-500 opacity-40 blur-2xl",
    delay: 0,
    duration: 6,
  },
  {
    style:
      "right-20 top-40 w-32 h-32 bg-gradient-to-br from-purple-500 via-pink-400 to-yellow-400 opacity-30 blur-2xl",
    delay: 1.5,
    duration: 7,
  },
  {
    style:
      "left-1/2 top-80 w-52 h-52 bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-500 opacity-30 blur-3xl",
    delay: 2.5,
    duration: 8,
  },
];

const About = () => {
  const timeline = [
    {
      year: "2024",
      title: "Software Engineering Intern",
      company: "AttainEnterprises",
      location: "Nairobi, Kenya",
      description:
        "Designed and implemented a building management system from the ground up, focusing on secure data handling, user-friendly design, and efficient backend architecture.",
      type: "work",
    },
    {
      year: "2021–2025",
      title: "B.S. Computer Science",
      company: "University of Nairobi",
      location: "Nairobi, Kenya",
      description:
        "Relevant coursework: Data Structures, Algorithm Design, Artificial Intelligence, Business Intelligence, Machine Learning, Distributed Systems, Statistics, Project Management, Networking, Security, Compiler Construction, Computer Architecture, Operating Systems.",
      type: "education",
    },
  ];

  const skills = [
    "React",
    "TypeScript",
    "Three.js",
    "Framer Motion",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "GraphQL",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Git",
  ];

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="relative min-h-screen py-20 px-6 overflow-hidden">
      {/* Animated floating balls background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {gradientBalls.map((ball, i) => (
          <motion.div
            key={i}
            className={`absolute ${ball.style} rounded-full`}
            initial={{ y: 0 }}
            animate={{ y: [0, -40, 0] }}
            transition={{
              duration: ball.duration,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: ball.delay,
            }}
          />
        ))}
      </div>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl font-extrabold mb-10 bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,0,0,0.08)]"
            style={{ textShadow: "0 0 8px #888" }}
          >
            About Me
          </h2>
          <p className="mb-10 text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed font-normal">
            Hi, I'm <span className="font-bold">Braison Orina</span>, a Software
            Engineer based in Nairobi, Kenya.
            <br />
            I'm passionate about building impactful digital solutions and have
            experience in fullstack web development, backend, and mobile apps.
            <br />I am a strong communicator, cool-headed, and always biased to
            action.
          </p>
          <ul className="mb-8 text-lg font-medium space-y-2">
            <li>
              <b>Location:</b> Nairobi, Kenya
            </li>
            <li>
              <b>Education:</b> B.S. Computer Science, University of Nairobi
              (2022–2025)
            </li>
            <li>
              <b>Languages:</b> English, Swahili, French
            </li>
            <li>
              <b>GitHub:</b>{" "}
              <a
                href="https://github.com/notbraison"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/notbraison
              </a>
            </li>
            <li>
              <b>LinkedIn:</b>{" "}
              <a
                href="https://www.linkedin.com/in/braison-orina-9b5576254/"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/braison-orina-9b5576254
              </a>
            </li>
          </ul>
          <p className="mb-12 text-base md:text-lg text-gray-600 dark:text-gray-300">
            <b>Interests:</b> Fitness, Nutrition, Food, Self-improvement,
            Football, Chess, Reading, Writing, Public Speaking, Volunteering
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">
              Experience & Education
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start mb-12 last:mb-0"
                >
                  {/* Year badge */}
                  <div className="flex-shrink-0 w-24 text-right pr-6">
                    <span className="text-lg font-bold text-gray-500 dark:text-gray-400 font-mono">
                      {item.year}
                    </span>
                  </div>

                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative z-10 mt-1.5">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping opacity-20"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 ml-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {item.type === "work" ? (
                          <Code size={18} />
                        ) : (
                          <Award size={18} />
                        )}
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                        {item.company}
                      </p>
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <MapPin size={14} />
                        {item.location}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 20px rgba(79, 70, 229, 0.2)",
                  }}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-4 text-center border border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300"
                >
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Personal touch */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 border border-blue-200 dark:border-blue-800"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                When I'm not coding...
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                You'll find me exploring new 3D art techniques, contributing to
                open-source projects, or experimenting with the latest web
                technologies. I believe the best digital experiences come from
                understanding both the technical and creative sides of
                development.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
