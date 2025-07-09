
import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, FileText, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const Layout = ({ children, currentSection, onSectionChange }: LayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navigation = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'About', id: 'about', icon: User },
    { name: 'Projects', id: 'projects', icon: Briefcase },
    { name: 'Blog', id: 'blog', icon: FileText },
    { name: 'Contact', id: 'contact', icon: Mail },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: -280 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 transition-colors duration-300">
      {/* Mobile Header */}
      {isMobile && (
        <motion.header 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between px-4 py-3">
            <motion.h1 
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              braison
            </motion.h1>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.header>
      )}

      {/* Desktop Sidebar */}
      {!isMobile && (
        <motion.aside
          initial={{ x: -280 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="fixed left-0 top-0 h-full w-70 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-r border-gray-200 dark:border-gray-700 z-40"
        >
          <div className="flex flex-col h-full p-6">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                braison
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Creative Developer
              </p>
            </motion.div>

            <nav className="flex-1">
              <ul className="space-y-2">
                {navigation.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = currentSection === item.id;
                  
                  return (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <button
                        onClick={() => onSectionChange(item.id)}
                        className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 group ${
                          isActive
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        <Icon 
                          size={20} 
                          className={`mr-3 transition-transform duration-200 ${
                            isActive ? 'scale-110' : 'group-hover:scale-105'
                          }`} 
                        />
                        <span className="font-medium">{item.name}</span>
                        {isActive && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="ml-auto w-2 h-2 bg-white rounded-full"
                          />
                        )}
                      </button>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </motion.aside>
      )}

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobile && isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ type: "spring", stiffness: 100 }}
              className="fixed left-0 top-0 h-full w-70 bg-white dark:bg-gray-900 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-8">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  braison
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Creative Developer
                </p>
              </div>

              <nav>
                <ul className="space-y-2">
                  {navigation.map((item) => {
                    const Icon = item.icon;
                    const isActive = currentSection === item.id;
                    
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => {
                            onSectionChange(item.id);
                            setIsMobileMenuOpen(false);
                          }}
                          className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                            isActive
                              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                              : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                          }`}
                        >
                          <Icon size={20} className="mr-3" />
                          <span className="font-medium">{item.name}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className={`${!isMobile ? 'ml-70' : 'pt-16'} min-h-screen`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
