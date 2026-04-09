import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const HOME_SECTION_ITEMS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

const PROJECTS_SECTION_ITEMS = [
  { id: "featured", label: "Featured" },
  { id: "games", label: "Games" },
] as const;

const SectionSidebar = () => {
  const location = useLocation();
  const { setTheme, resolvedTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("about");
  const isHomePage = location.pathname === "/";
  const isProjectsPage = location.pathname === "/projects";
  const isBlogPage = location.pathname === "/blog";
  const shouldShowSidebar = isHomePage || isProjectsPage || isBlogPage;

  const trackedItems = useMemo(() => {
    if (isHomePage) return HOME_SECTION_ITEMS;
    if (isProjectsPage) return PROJECTS_SECTION_ITEMS;
    return [];
  }, [isHomePage, isProjectsPage]);

  const sectionIds = useMemo(() => trackedItems.map((item) => item.id), [trackedItems]);

  useEffect(() => {
    if (!shouldShowSidebar || trackedItems.length === 0) return;

    const getSections = () =>
      sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section));

    const updateActiveSection = () => {
      const sections = getSections();
      if (sections.length === 0) return;

      const viewportLine = window.scrollY + window.innerHeight * 0.35;
      let current = sections[0].id;

      for (const section of sections) {
        if (section.offsetTop <= viewportLine) {
          current = section.id;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sectionIds, shouldShowSidebar, trackedItems.length]);

  if (!shouldShowSidebar) {
    return null;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <>
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-40 md:hidden">
        <nav className="flex items-center gap-1.5 rounded-full border border-slate-200/80 dark:border-slate-700/90 bg-white/85 dark:bg-slate-900/80 backdrop-blur-xl shadow-[0_16px_30px_rgba(15,23,42,0.15)] px-2 py-1.5">
          {isHomePage ? (
            HOME_SECTION_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  to={`/#${item.id}`}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors duration-300 ${
                    isActive
                      ? "bg-blue-700 text-white"
                      : "text-slate-700 dark:text-slate-200 hover:bg-slate-200/70 dark:hover:bg-slate-700/60"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })
          ) : isProjectsPage ? (
            <>
              <Link
                to="/"
                className="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-200/70 dark:hover:bg-slate-700/60 transition-colors duration-300"
              >
                Home
              </Link>
              {PROJECTS_SECTION_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <Link
                    key={item.id}
                    to={`/projects#${item.id}`}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors duration-300 ${
                      isActive
                        ? "bg-blue-700 text-white"
                        : "text-slate-700 dark:text-slate-200 hover:bg-slate-200/70 dark:hover:bg-slate-700/60"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </>
          ) : (
            <Link
              to="/"
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-200/70 dark:hover:bg-slate-700/60 transition-colors duration-300"
            >
              Home
            </Link>
          )}
          <button
            type="button"
            aria-label="Toggle color theme"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="p-2 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-200/70 dark:hover:bg-slate-700/60 transition-colors"
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </nav>
      </div>

      <div className="hidden md:block fixed top-[44%] right-6 -translate-y-1/2 z-40">
        <nav className="flex flex-col items-center gap-2 rounded-[2.1rem] border border-slate-200/80 dark:border-slate-700/90 bg-white/85 dark:bg-slate-900/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(15,23,42,0.18)] px-2.5 py-2.5">
          {isHomePage ? (
            HOME_SECTION_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  to={`/#${item.id}`}
                  className={`w-[6.65rem] text-center px-3 py-2.5 rounded-[1.2rem] text-sm font-semibold transition-colors duration-300 ${
                    isActive
                      ? "bg-blue-800 text-white"
                      : "text-slate-700 dark:text-slate-200 hover:bg-slate-200/70 dark:hover:bg-slate-700/60"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })
          ) : isProjectsPage ? (
            <>
              <Link
                to="/"
                className="w-[6.65rem] text-center px-3 py-2.5 rounded-[1.2rem] text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-200/70 dark:hover:bg-slate-700/60 transition-colors duration-300"
              >
                Home
              </Link>
              {PROJECTS_SECTION_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <Link
                    key={item.id}
                    to={`/projects#${item.id}`}
                    className={`w-[6.65rem] text-center px-3 py-2.5 rounded-[1.2rem] text-sm font-semibold transition-colors duration-300 ${
                      isActive
                        ? "bg-blue-800 text-white"
                        : "text-slate-700 dark:text-slate-200 hover:bg-slate-200/70 dark:hover:bg-slate-700/60"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </>
          ) : (
            <Link
              to="/"
              className="w-[6.65rem] text-center px-3 py-2.5 rounded-[1.2rem] text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-200/70 dark:hover:bg-slate-700/60 transition-colors duration-300"
            >
              Home
            </Link>
          )}

          <button
            type="button"
            aria-label="Toggle color theme"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="mt-0.5 p-2 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-200/70 dark:hover:bg-slate-700/60 transition-colors"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </div>
    </>
  );
};

export default SectionSidebar;
