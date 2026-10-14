import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <Analytics />
    </Router>
  );
}
   
export default App;
