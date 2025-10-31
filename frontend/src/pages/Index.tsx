import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";
import HeroSimple from "../components/HeroSimple";
import About from "../components/About";
import Projects from "../components/Projects";
import UnderConstruction from "../components/UnderConstruction";
import Contact from "../components/Contact";
import Shapes from "../components/art/Shapes";
import Games from "../components/Games";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const renderSection = () => {
    const sectionVariants = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
    };

    switch (currentSection) {
      case "home":
        return (
          <motion.div
            key="home"
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <HeroSimple onNavigate={setCurrentSection} />
          </motion.div>
        );
      case "about":
        return (
          <motion.div
            key="about"
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <About />
          </motion.div>
        );
      case "projects":
        return (
          <motion.div
            key="projects"
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <Projects />
          </motion.div>
        );
      case "blog":
        return (
          <motion.div
            key="blog"
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <UnderConstruction />
          </motion.div>
        );
      case "contact":
        return (
          <motion.div
            key="contact"
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <Contact />
          </motion.div>
        );
      case "interesting":
        return (
          <motion.div
            key="interesting"
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <Shapes />
          </motion.div>
        );
      case "games":
        return (
          <motion.div
            key="games"
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <Games />
          </motion.div>
        );
      default:
        return <HeroSimple />;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            braison
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-gray-600 dark:text-gray-400 mt-2"
          >
            Loading portfolio...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <Layout currentSection={currentSection} onSectionChange={setCurrentSection}>
      <AnimatePresence mode="wait">{renderSection()}</AnimatePresence>
    </Layout>
  );
};

export default Index;
