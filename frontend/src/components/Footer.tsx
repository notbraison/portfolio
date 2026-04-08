import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter } from "lucide-react";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relative mt-12 border-t border-slate-800/60 bg-slate-950 text-slate-200 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.2),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.2),transparent_35%)]" />

      <div className="relative max-w-6xl mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-3xl font-bold text-white">Braison Orina</h3>
            <p className="mt-4 text-slate-400 leading-relaxed max-w-sm">
              Software developer crafting modern products with Laravel, React,
              and thoughtful user experience.
            </p>
          </div>

          <div>
            <h4 className="text-3xl font-bold text-white">Quick Links</h4>
            <div className="mt-4 flex flex-col gap-2">
              <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-blue-400 hover:text-blue-300 transition-colors">
                About
              </Link>
              <Link to="/projects" className="text-blue-400 hover:text-blue-300 transition-colors">
                Projects
              </Link>
              <Link to="/blog" className="text-blue-400 hover:text-blue-300 transition-colors">
                Blog
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-3xl font-bold text-white">Connect</h4>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://github.com/notbraison"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-12 h-12 rounded-full bg-slate-800/90 border border-slate-700 inline-flex items-center justify-center hover:border-blue-400 hover:text-blue-300 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/braison-orina-9b5576254/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-12 h-12 rounded-full bg-slate-800/90 border border-slate-700 inline-flex items-center justify-center hover:border-blue-400 hover:text-blue-300 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/onewhoplaysMC"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="w-12 h-12 rounded-full bg-slate-800/90 border border-slate-700 inline-flex items-center justify-center hover:border-blue-400 hover:text-blue-300 transition-all"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-800/70 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-blue-400">
            © {currentYear} Braison Orina. All rights reserved.
          </p>
          <p className="text-slate-400">
            Made with <span className="text-red-500">❤</span> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
