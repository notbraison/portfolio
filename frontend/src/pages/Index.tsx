import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Contact from "../components/Contact";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact") {
      const section = document.getElementById("contact");
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  return (
    <section id="contact">
      <Contact />
    </section>
  );
};

export default Index;
