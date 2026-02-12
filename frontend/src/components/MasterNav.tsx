import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationLinks } from "../data/portfolio";


interface MasterNavProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export default function MasterNav({ activeSection, onNavigate }: MasterNavProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle background blur on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex justify-center p-6 ${
        isScrolled ? "py-4" : "py-8"
      }`}
    >
      {/* Glassmorphism Container */}
      <div className="relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-full shadow-2xl border border-white/20 dark:border-slate-800/50 p-1.5 flex items-center gap-1">
        {navigationLinks.map((link) => {
          const isActive = activeSection === link.id;
          const Icon = link.icon;

          return (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className="relative px-4 py-2 flex items-center gap-2 group outline-none transition-all"
            >
              {/* The "Sidebar Style" Active Pill Background */}
              {isActive && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full shadow-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              {/* Icon & Text Content */}
              <div className={`relative z-10 flex items-center gap-2 transition-colors duration-300 ${
                isActive ? "text-white" : "text-slate-500 dark:text-slate-400 hover:text-purple-500"
              }`}>
                {Icon && <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />}
                
                <span className="text-sm font-bold capitalize hidden md:block tracking-tight">
                  {link.name}
                </span>

                {/* The White Indicator Dot (from your sidebar image) */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                    />
                  )}
                </AnimatePresence>
              </div>

              {/* Subtle hover effect for inactive items */}
              {!isActive && (
                <div className="absolute inset-0 rounded-full bg-slate-100 dark:bg-slate-800 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
