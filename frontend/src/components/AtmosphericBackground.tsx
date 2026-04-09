import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const AtmosphericBackground = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduceMotion = mediaQuery.matches;

    const onMediaChange = (event: MediaQueryListEvent) => {
      reduceMotion = event.matches;
      if (reduceMotion && sceneRef.current) {
        sceneRef.current.style.setProperty("--drift-x", "0px");
        sceneRef.current.style.setProperty("--drift-y", "0px");
        sceneRef.current.style.setProperty("--scroll-y", "0px");
      }
    };

    mediaQuery.addEventListener("change", onMediaChange);

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const applyMotion = () => {
      if (!sceneRef.current || reduceMotion) {
        raf = 0;
        return;
      }

      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      sceneRef.current.style.setProperty("--drift-x", `${currentX.toFixed(2)}px`);
      sceneRef.current.style.setProperty("--drift-y", `${currentY.toFixed(2)}px`);

      if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
        raf = window.requestAnimationFrame(applyMotion);
      } else {
        raf = 0;
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      if (reduceMotion) return;

      const halfWidth = window.innerWidth / 2;
      const halfHeight = window.innerHeight / 2;
      const normX = (event.clientX - halfWidth) / halfWidth;
      const normY = (event.clientY - halfHeight) / halfHeight;

      targetX = normX * 16;
      targetY = normY * 12;

      if (!raf) {
        raf = window.requestAnimationFrame(applyMotion);
      }
    };

    const onScroll = () => {
      if (!sceneRef.current || reduceMotion) return;
      const scrollOffset = Math.min(window.scrollY * 0.12, 120);
      sceneRef.current.style.setProperty("--scroll-y", `${scrollOffset.toFixed(2)}px`);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      mediaQuery.removeEventListener("change", onMediaChange);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  const routeClass = (() => {
    if (location.pathname === "/") return "atmo-route-home";
    if (location.pathname === "/projects") return "atmo-route-projects";
    if (location.pathname === "/blog") return "atmo-route-blog";
    return "atmo-route-default";
  })();

  return (
    <div ref={sceneRef} className={`atmo-scene ${routeClass}`} aria-hidden="true">
      <div className="atmo-layer atmo-sky" />
      <div className="atmo-layer atmo-stars" />
      <div className="atmo-layer atmo-star-haze" />
      <div className="atmo-layer atmo-orbits" />
      <div className="atmo-layer atmo-cloud atmo-cloud-back" />
      <div className="atmo-layer atmo-cloud atmo-cloud-wisp" />
      <div className="atmo-layer atmo-moon-wrap">
        <div className="atmo-moon" />
      </div>
      <div className="atmo-layer atmo-cloud atmo-cloud-mid" />
      <div className="atmo-layer atmo-horizon-glow" />
      <div className="atmo-layer atmo-landscape" />
      <div className="atmo-layer atmo-cloud atmo-cloud-front" />
      <div className="atmo-layer atmo-tint" />
    </div>
  );
};

export default AtmosphericBackground;
