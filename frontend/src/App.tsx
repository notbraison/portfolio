import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./components/About";
import Projects from "./components/Projects";
//import Photography from "./components/Photography";
//import Art from "./components/Art";
//import Interesting from "./components/Interesting";
import Games from "./components/Games";
import Contact from "./components/Contact";
import Blog from "./components/Blog";



// Placeholder components for Art, Photography, and Interesting until you create them
const Art = () => <div className="py-20 text-center">Art Gallery Coming Soon</div>;
const Photography = () => <div className="py-20 text-center">Photography Portfolio Coming Soon</div>;

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <Router>
      {/* Pass BOTH here */}
      <Layout activeSection={activeSection} setActiveSection={setActiveSection}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/games" element={<Games />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Layout>
    </Router>
  );
}
   
export default App;