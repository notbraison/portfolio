import Footer from "./Footer";
import SectionSidebar from "./SectionSidebar";
import AtmosphericBackground from "./AtmosphericBackground";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col relative isolate">
      <AtmosphericBackground />
      <SectionSidebar />
      <main className="transition-all duration-500 w-full flex-1 relative z-10">
        {children}
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
