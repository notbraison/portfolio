import { 
  Home, User, Briefcase, FileText, 
  Gamepad2, Palette, Camera, Mail 
} from "lucide-react";

// Types to ensure data consistency
export interface Skill {
  name: string;
  level: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  image: string;
  link: string;
  github?: string;
  category: 'web' | '3d' | 'design';
}

// 1. Navigation Links (The Unified 8)
export const navigationLinks = [
  { name: 'Home', id: 'home', icon: Home },
  { name: 'About', id: 'about', icon: User },
  { name: 'Projects', id: 'projects', icon: Briefcase },
  { name: 'Blog', id: 'blog', icon: FileText },
  { name: 'Games', id: 'games', icon: Gamepad2 },
  { name: 'Art', id: 'art', icon: Palette },
  { name: 'Photography', id: 'photography', icon: Camera },
  { name: 'Contact', id: 'contact', icon: Mail },
];

// 2. Professional Timeline
export const timeline = [
  {
    year: "2025",
    title: "Software Developer",
    company: "Go Digital Africa",
    location: "Nairobi, Kenya",
    description: [
      "Developed dual-frontend systems with Laravel 12 and React.",
      "Managed deployment as microservices on Railway.",
      "Integrated Firebase and SQL databases."
    ]
  },
  {
    year: "2024",
    title: "Software Engineering Intern",
    company: "AttainEnterprises",
    location: "Nairobi, Kenya",
    description: ["Designed building management systems from scratch using Vue and Laravel."]
  }
];

// 3. Skills Data (Merged from SkillsSection and About)
export const skills = {
  frontend: [
    { name: "Vue", level: 90 },
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 95 }
  ],
  backend: [
    { name: "PHP Laravel", level: 85 },
    { name: "Node.js", level: 85 },
    { name: "PostgreSQL", level: 80 }
  ]
};

// 4. Creative Assets (Games, Art, Photography)
export const creativeWork = {
  games: [
    { id: "g1", title: "Stick Stretch", url: "https://stick-stretch.vercel.app/" },
    { id: "g2", title: "MiniMan", url: "https://notbraison.itch.io/miniman" }
  ],
  photography: [
    // Placeholder for your photography links
  ]
};

// 5. Certification Data (New)
export const certifications = [
  {
    title: "Full Stack Web Development",
    issuer: "Example Institute",
    date: "2024",
    link: "#"
  }
];