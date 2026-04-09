import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

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
        <p className="about-profile-jobtitle hover-underline">Software Developer</p>
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
          <FaGithub size={16} color="#181717" />
        </a>
        <a
          href="https://www.linkedin.com/in/braison-orina-9b5576254/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <FaLinkedin size={16} color="#0A66C2" />
        </a>
        <a
          href="https://x.com/onewhoplaysMC"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          title="Twitter"
        >
          <FaXTwitter size={16} color="#000000" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          title="Instagram"
        >
          <FaInstagram size={16} color="#E4405F" />
        </a>
        <a
          href="https://www.youtube.com/@braisonorina3922/videos"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          title="YouTube"
        >
          <FaYoutube size={16} color="#FF0000" />
        </a>
      </div>
    </aside>
  );
};

export default AboutMeCard;
