import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AboutMeCard from "./AboutMeCard";
import Projects from "./Projects";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  Atom,
  Braces,
  Database,
  Server,
  Wind,
  GitBranch,
  Terminal,
  Layers,
  FlaskConical,
  MonitorSmartphone,
  Orbit,
  Flame,
  Globe,
  Shield,
  Rocket,
  Code2,
  ToyBrick,
  Workflow,
  TerminalSquare,
  Download,
  FolderOpen,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/notbraison",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "  https://www.linkedin.com/in/braison-orina-9b5576254/",
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/onewhoplaysMC",
      color: "hover:text-blue-400",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "orinabraison@gmail.com",
      href: "mailto:orinabraison@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254701124021",
      href: "tel:+254701124021",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi,Kenya",
      href: "https://maps.app.goo.gl/Cjtnq2TB2tz7VBvG9",
    },
  ];

  const technologies = [
    { name: "Laravel", icon: Flame, iconColor: "#FF2D20", chipBg: "bg-red-100/90 dark:bg-red-900/30", chipBorder: "border-red-200/80 dark:border-red-700/70", textColor: "text-red-800 dark:text-red-200" },
    { name: "React", icon: Atom, iconColor: "#61DAFB", chipBg: "bg-cyan-100/90 dark:bg-cyan-900/30", chipBorder: "border-cyan-200/80 dark:border-cyan-700/70", textColor: "text-cyan-900 dark:text-cyan-200" },
    { name: "Kali Linux", icon: Shield, iconColor: "#5FA2DB", chipBg: "bg-sky-100/90 dark:bg-sky-900/30", chipBorder: "border-sky-200/80 dark:border-sky-700/70", textColor: "text-sky-900 dark:text-sky-200" },
    { name: "Node.js", icon: Server, iconColor: "#68A063", chipBg: "bg-green-100/90 dark:bg-green-900/30", chipBorder: "border-green-200/80 dark:border-green-700/70", textColor: "text-green-900 dark:text-green-200" },
    { name: "Tailwind CSS", icon: Wind, iconColor: "#38BDF8", chipBg: "bg-sky-100/90 dark:bg-sky-900/30", chipBorder: "border-sky-200/80 dark:border-sky-700/70", textColor: "text-sky-900 dark:text-sky-200" },
    { name: "PostgreSQL", icon: Database, iconColor: "#336791", chipBg: "bg-blue-100/90 dark:bg-blue-900/30", chipBorder: "border-blue-200/80 dark:border-blue-700/70", textColor: "text-blue-900 dark:text-blue-200" },
    { name: "Inertia.js", icon: Orbit, iconColor: "#9553E9", chipBg: "bg-violet-100/90 dark:bg-violet-900/30", chipBorder: "border-violet-200/80 dark:border-violet-700/70", textColor: "text-violet-900 dark:text-violet-200" },
    { name: "Python", icon: Code2, iconColor: "#3776AB", chipBg: "bg-blue-100/90 dark:bg-blue-900/30", chipBorder: "border-blue-200/80 dark:border-blue-700/70", textColor: "text-blue-900 dark:text-blue-200" },
    { name: "Ubuntu", icon: Globe, iconColor: "#E95420", chipBg: "bg-orange-100/90 dark:bg-orange-900/30", chipBorder: "border-orange-200/80 dark:border-orange-700/70", textColor: "text-orange-900 dark:text-orange-200" },
    { name: "TypeScript", icon: Braces, iconColor: "#3178C6", chipBg: "bg-blue-100/90 dark:bg-blue-900/30", chipBorder: "border-blue-200/80 dark:border-blue-700/70", textColor: "text-blue-900 dark:text-blue-200" },
    { name: "MySQL", icon: Database, iconColor: "#00758F", chipBg: "bg-cyan-100/90 dark:bg-cyan-900/30", chipBorder: "border-cyan-200/80 dark:border-cyan-700/70", textColor: "text-cyan-900 dark:text-cyan-200" },
    { name: "Next.js", icon: Rocket, iconColor: "#111111", chipBg: "bg-gray-100/90 dark:bg-gray-800/60", chipBorder: "border-gray-300/80 dark:border-gray-600/80", textColor: "text-gray-900 dark:text-gray-100" },
    { name: "Git", icon: GitBranch, iconColor: "#F05032", chipBg: "bg-orange-100/90 dark:bg-orange-900/30", chipBorder: "border-orange-200/80 dark:border-orange-700/70", textColor: "text-orange-900 dark:text-orange-200" },
    { name: "PHP", icon: Code2, iconColor: "#777BB4", chipBg: "bg-indigo-100/90 dark:bg-indigo-900/30", chipBorder: "border-indigo-200/80 dark:border-indigo-700/70", textColor: "text-indigo-900 dark:text-indigo-200" },
    { name: "Android Studio", icon: MonitorSmartphone, iconColor: "#3DDC84", chipBg: "bg-emerald-100/90 dark:bg-emerald-900/30", chipBorder: "border-emerald-200/80 dark:border-emerald-700/70", textColor: "text-emerald-900 dark:text-emerald-200" },
    { name: "Prisma", icon: Workflow, iconColor: "#2D3748", chipBg: "bg-slate-100/90 dark:bg-slate-800/60", chipBorder: "border-slate-300/80 dark:border-slate-600/80", textColor: "text-slate-900 dark:text-slate-100" },
    { name: "Linux", icon: TerminalSquare, iconColor: "#FCC624", chipBg: "bg-yellow-100/90 dark:bg-yellow-900/30", chipBorder: "border-yellow-200/80 dark:border-yellow-700/70", textColor: "text-yellow-900 dark:text-yellow-200" },
    { name: "Vue.js", icon: Layers, iconColor: "#42B883", chipBg: "bg-emerald-100/90 dark:bg-emerald-900/30", chipBorder: "border-emerald-200/80 dark:border-emerald-700/70", textColor: "text-emerald-900 dark:text-emerald-200" },
    { name: "Flask", icon: FlaskConical, iconColor: "#111111", chipBg: "bg-gray-100/90 dark:bg-gray-800/60", chipBorder: "border-gray-300/80 dark:border-gray-600/80", textColor: "text-gray-900 dark:text-gray-100" },
    { name: "Bash", icon: Terminal, iconColor: "#4EAA25", chipBg: "bg-green-100/90 dark:bg-green-900/30", chipBorder: "border-green-200/80 dark:border-green-700/70", textColor: "text-green-900 dark:text-green-200" },
    { name: "OpenLiteSpeed", icon: ToyBrick, iconColor: "#6A5ACD", chipBg: "bg-violet-100/90 dark:bg-violet-900/30", chipBorder: "border-violet-200/80 dark:border-violet-700/70", textColor: "text-violet-900 dark:text-violet-200" },
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-3 font-mono">
              Hello, I&apos;m
            </p>
            <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              BRAISON
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Creative developer passionate about interactive design, React
              ecosystems, and 3D visual storytelling.
            </p>
            <div className="mt-8">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  About Me
                </Link>
                <a
                  href="/assets/Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-cyan-500 text-cyan-500 font-medium text-lg hover:bg-cyan-500/10 transition-all duration-300"
                >
                  <Download size={18} />
                  Resume
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <AboutMeCard />
          </motion.div>
        </div>

        <div className="mb-16">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-7">
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technologies I Use
            </h2>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-cyan-500 text-cyan-500 font-medium text-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              <FolderOpen size={18} />
              Projects
            </Link>
          </div>
          <div className="relative overflow-hidden border-y border-blue-200/70 dark:border-blue-800/70 bg-white/50 dark:bg-gray-800/40 backdrop-blur-sm py-8 w-screen max-w-none left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="tech-marquee">
            {[...technologies, ...technologies].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={`${tech.name}-${index}`}
                  className={`inline-flex items-center gap-3 px-5 py-3 mx-2 rounded-full border whitespace-nowrap ${tech.chipBg} ${tech.chipBorder} ${tech.textColor}`}
                >
                  <Icon size={19} style={{ color: tech.iconColor }} />
                  <span className="text-sm md:text-base font-semibold">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        </div>

        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and interesting projects.
            Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(79, 70, 229, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  const content = (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/50 dark:hover:bg-gray-700/50 transition-all duration-300 group"
                    >
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white group-hover:scale-110 transition-transform">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {item.label}
                        </p>
                        <p className="font-semibold text-gray-800 dark:text-gray-200">
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                  );

                  return item.href ? (
                    <a key={index} href={item.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                Let's connect
              </h3>

              <div className="flex gap-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-200 dark:border-blue-800 text-gray-600 dark:text-gray-400 ${link.color} transition-all duration-300 hover:shadow-lg`}
                    >
                      <Icon size={24} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-green-200 dark:border-green-800"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Currently Available
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                I'm open to new opportunities and interesting projects. Let's
                discuss how we can work together!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
