import { useEffect, useRef, useState } from "react";

const modes = {
  matrix: {
    name: "Matrix Mode",
    width: 120,
    height: 60,
    scaleX: 40,
    scaleY: 20,
    thetaStep: 0.05,
    phiStep: 0.015,
    chars: " .:-=+*#%@",
  },
};

export default function Donut() {
  const [currentModeKey, setCurrentModeKey] = useState<string>("matrix");
  const [content, setContent] = useState<string>("");
  const A = useRef(0);
  const B = useRef(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    function render() {
      const config = modes[currentModeKey as keyof typeof modes];
      const { width, height, scaleX, scaleY, thetaStep, phiStep, chars } =
        config;

      const output: string[] = [];
      const zbuffer: number[] = [];

      for (let i = 0; i < width * height; i++) {
        output[i] = " ";
        zbuffer[i] = 0;
      }

      for (let theta = 0; theta < 6.28; theta += thetaStep) {
        for (let phi = 0; phi < 6.28; phi += phiStep) {
          const sinA = Math.sin(A.current),
            cosA = Math.cos(A.current);
          const sinB = Math.sin(B.current),
            cosB = Math.cos(B.current);

          const sinTheta = Math.sin(theta),
            cosTheta = Math.cos(theta);
          const sinPhi = Math.sin(phi),
            cosPhi = Math.cos(phi);

          const circleX = cosTheta + 2;
          const circleY = sinTheta;

          const x =
            circleX * (cosB * cosPhi + sinA * sinB * sinPhi) -
            circleY * cosA * sinB;
          const y =
            circleX * (sinB * cosPhi - sinA * cosB * sinPhi) +
            circleY * cosA * cosB;
          const z = cosA * circleX * sinPhi + circleY * sinA + 5;
          const ooz = 1 / z;

          const xp = Math.floor(width / 2 + scaleX * ooz * x);
          const yp = Math.floor(height / 2 - scaleY * ooz * y);

          const idx = xp + width * yp;

          const L =
            cosPhi * cosTheta * sinB -
            cosA * cosTheta * sinPhi -
            sinA * sinTheta +
            cosB * (cosA * sinTheta - cosTheta * sinA * sinPhi);

          if (
            yp >= 0 &&
            yp < height &&
            xp >= 0 &&
            xp < width &&
            ooz > zbuffer[idx]
          ) {
            zbuffer[idx] = ooz;
            const luminance = L > 0 ? L : 0;
            const charIdx = Math.floor(luminance * (chars.length - 1));
            output[idx] = chars[Math.min(charIdx, chars.length - 1)];
          }
        }
      }

      let result = "";
      for (let i = 0; i < height; i++) {
        result += output.slice(i * width, (i + 1) * width).join("") + "\n";
      }

      setContent(result);

      A.current += 0.04;
      B.current += 0.02;
    }

    // start interval
    intervalRef.current = window.setInterval(render, 50);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentModeKey]);

  const toggleMode = () => {
    const keys = Object.keys(modes);
    const idx = keys.indexOf(currentModeKey);
    const next = keys[(idx + 1) % keys.length];
    setCurrentModeKey(next);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-green-500 relative">
      <button
        onClick={toggleMode}
        className="absolute top-6 right-6 bg-green-500/10 border border-green-500 text-green-300 px-4 py-2 rounded-md font-mono hover:bg-green-500/20"
        aria-label="Toggle donut mode"
        title="Toggle donut mode"
      >
        {modes[currentModeKey as keyof typeof modes].name}
      </button>

      <pre
        className="whitespace-pre text-xs leading-[6px] font-mono px-4"
        aria-hidden
      >
        {content}
      </pre>
    </div>
  );
}
