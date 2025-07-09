
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Code } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2023',
      title: 'Senior Frontend Developer',
      company: 'Tech Innovators Inc.',
      location: 'San Francisco, CA',
      description: 'Led development of interactive web applications using React, Three.js, and modern animation libraries.',
      type: 'work'
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Co.',
      location: 'Remote',
      description: 'Built scalable web applications and implemented 3D visualizations for client projects.',
      type: 'work'
    },
    {
      year: '2021',
      title: 'Computer Science Degree',
      company: 'University of Technology',
      location: 'Boston, MA',
      description: 'Graduated with honors, specializing in computer graphics and web technologies.',
      type: 'education'
    },
    {
      year: '2020',
      title: 'Frontend Developer Intern',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      description: 'Developed responsive web interfaces and gained experience with modern JavaScript frameworks.',
      type: 'work'
    }
  ];

  const skills = [
    'React', 'TypeScript', 'Three.js', 'Framer Motion', 'Next.js', 'Tailwind CSS',
    'Node.js', 'GraphQL', 'PostgreSQL', 'AWS', 'Docker', 'Git'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm passionate about creating immersive digital experiences that blend cutting-edge technology 
            with beautiful design. My journey in development spans from traditional web apps to experimental 3D interfaces.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">Experience & Education</h3>
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
                        {item.type === 'work' ? <Code size={18} /> : <Award size={18} />}
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{item.company}</p>
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
            <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">Skills & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 20px rgba(79, 70, 229, 0.2)"
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
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">When I'm not coding...</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                You'll find me exploring new 3D art techniques, contributing to open-source projects, 
                or experimenting with the latest web technologies. I believe the best digital experiences 
                come from understanding both the technical and creative sides of development.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
