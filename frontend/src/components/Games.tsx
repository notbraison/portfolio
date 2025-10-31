import { useEffect, useRef } from "react";

const games = [
  {
    id: "g1",
    title: "Stick Strech",
    description: "A stick stretching game.",
    itch: "https://stick-stretch.vercel.app/",
    download: "https://example.com/",
  },
  {
    id: "g2",
    title: "MiniMan – A Mega Man-Inspired Prototype",
    description:
      "MiniMan is a work-in-progress prototype heavily inspired by Mega Man. This 2D side-scrolling platformer features classic run-and-gun mechanics, precision jumping, and responsive animations.",
    itch: "https://notbraison.itch.io/miniman",
    download: "https://notbraison.itch.io/miniman/download/MiniMan.exe",
    details: {
      size: "25 MB",
      install:
        "Download the EXE and run it (Windows). For macOS use the mac build if provided.",
      comments: "play the game — notbraison9 months ago",
    },
  },
  {
    id: "g3",
    title: "Echoes of Terra",
    description: "An experimental atmospheric exploration game.",
    itch: "https://braison.itch.io/echoes-of-terra",
    download: "https://example.com/echoes-of-terra.zip",
  },
];

export default function Games() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const children = Array.from(
        el.querySelectorAll<HTMLElement>(".game-card")
      );
      const center = window.innerHeight / 2;
      children.forEach((child) => {
        const rect = child.getBoundingClientRect();
        const dist = rect.top + rect.height / 2 - center;
        const max = window.innerHeight;
        const t = Math.max(-1, Math.min(1, dist / max));
        const angle = t * 25; // rotate up to 25deg
        child.style.transform = `perspective(1200px) rotateX(${angle}deg)`;
        child.style.opacity = `${Math.max(0.6, 1 - Math.abs(t) * 0.6)}`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-y-auto" ref={containerRef}>
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {games.map((g) => (
          <section
            key={g.id}
            className="game-card snap-start h-[70vh] w-full flex items-center justify-center px-8"
          >
            <div className="max-w-5xl w-full h-full bg-gradient-to-r from-slate-800/60 to-slate-700/40 rounded-2xl p-8 flex flex-col justify-between shadow-2xl">
              <div className="flex gap-6 items-start">
                {g.id === "g2" ? (
                  <img
                    src="/assets/minimangame.png"
                    alt="MiniMan thumbnail"
                    className="w-56 h-40 object-cover rounded-lg shadow-lg"
                  />
                ) : g.id === "g1" ? (
                  <img
                    src="/assets/stick-stretch.png"
                    alt="Stick Stretch thumbnail"
                    className="w-56 h-40 object-cover rounded-lg shadow-lg"
                  />
                ) : null}

                <div className="flex-1">
                  <h2 className="text-4xl font-bold text-white mb-4">
                    {g.title}
                  </h2>
                  <p className="text-lg text-slate-200/90 mb-4">
                    {g.description}
                  </p>

                  {g.details ? (
                    <div className="text-sm text-slate-300 mb-4 space-y-1">
                      <div>
                        <strong>Download:</strong> {g.details.size}
                      </div>
                      <div>
                        <strong>Install:</strong> {g.details.install}
                      </div>
                      <div>
                        <strong>Comments:</strong> {g.details.comments}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <a
                  href={g.itch}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-amber-500 text-black rounded-md font-semibold"
                >
                  itch.io
                </a>
                <a
                  href={g.download}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 border border-white/20 text-white rounded-md"
                >
                  Download
                </a>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
