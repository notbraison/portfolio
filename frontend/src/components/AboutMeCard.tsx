import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const AboutMeCard = () => {
  return (
    <aside className="about-profile-card">
      <div className="about-profile-header">
        <img
          className="about-profile-avatar"
          src="/assets/me.jpg"
          alt="Braison Orina profile"
        />
        <h3 className="about-profile-fullname">Braison Orina</h3>
        <p className="about-profile-jobtitle">Software Developer</p>
      </div>

      <div className="about-profile-content">
        <div className="about-profile-subtitle"></div>
        <p className="about-profile-desc">
          Full-stack developer focused on Laravel and React, with strong
          interest in polished interfaces, practical systems, and clean user
          experiences.
        </p>
      </div>

      <div className="about-profile-social">
        <a
          href="https://github.com/notbraison"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <Github size={16} />
        </a>
        <a
          href="https://www.linkedin.com/in/braison-orina-9b5576254/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <Linkedin size={16} />
        </a>
        <a
          href="https://x.com/onewhoplaysMC"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          title="Twitter"
        >
          <Twitter size={16} />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          title="Instagram"
        >
          <Instagram size={16} />
        </a>
      </div>
    </aside>
  );
};

export default AboutMeCard;
