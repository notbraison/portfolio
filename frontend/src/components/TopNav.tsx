import React from "react";

interface TopNavProps {
  onNavigate?: (section: string) => void;
}

export default function TopNav({ onNavigate }: TopNavProps) {
  const links = ["home", "about", "projects", "blog", "contact"];

  return (
    <nav className="fixed top-0 right-0 p-6 z-50">
      <ul className="flex gap-6">
        {links.map((l) => (
          <li key={l}>
            <button
              onClick={() => onNavigate?.(l)}
              className="text-gray-400 hover:text-white transition-colors duration-300 uppercase text-sm tracking-wider"
              aria-label={`Go to ${l}`}
            >
              {l}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
