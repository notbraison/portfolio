import Footer from "./Footer";
import SectionSidebar from "./SectionSidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SectionSidebar />
      <main className="transition-all duration-500 w-full flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
