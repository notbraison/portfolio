import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MasterNav from "./MasterNav";

interface LayoutProps {
  children: React.ReactNode;
  activeSection: string;
  setActiveSection: (id: string) => void;
}

const Layout = ({ children, activeSection, setActiveSection }: LayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Sync the navigation pill with the current URL path
  useEffect(() => {
    const path = location.pathname.split("/")[1] || "home";
    setActiveSection(path);
  }, [location, setActiveSection]);

  const handleNavigate = (id: string) => {
    setActiveSection(id);
    navigate(id === "home" ? "/" : `/${id}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <MasterNav activeSection={activeSection} onNavigate={handleNavigate} />
      
      {/* pt-24 provides space for the fixed top nav */}
      <main className="pt-24 transition-all duration-500">
        <div className="max-w-[1280px] mx-auto px-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;