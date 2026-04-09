import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Contact from "../components/Contact";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: "auto", block: "start" });
    }
  }, [location.hash]);

  return (
    <section>
      <Contact />
    </section>
  );
};

export default Index;
