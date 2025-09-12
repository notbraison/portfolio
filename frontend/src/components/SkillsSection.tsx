import { motion } from "framer-motion";

interface Technology {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  technologies: Technology[];
}

interface SkillsSectionProps {
  skills: SkillCategory[];
}

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <div className="max-w-4xl mx-auto mt-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skillCategory, index) => (
          <motion.div
            key={skillCategory.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-lg rounded-xl p-6 shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-4 text-purple-400">
              {skillCategory.category}
            </h3>
            <div className="space-y-4">
              {skillCategory.technologies.map((tech) => (
                <div key={tech.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{tech.name}</span>
                    <span>{tech.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${tech.level}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
