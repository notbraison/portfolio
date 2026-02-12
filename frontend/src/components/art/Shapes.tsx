import { useEffect, useRef, useState } from "react";

type ModeKey = "matrix" | "arctic";
type ShapeKey = "donut" | "cube";

const modeConfigs: Record<
  ModeKey,
  { name: string; bgClass: string; textClass: string }
> = {
  matrix: {
    name: "Matrix Mode",
    bgClass: "bg-black",
    textClass: "text-green-400",
  },
  arctic: {
    name: "Arctic Mode",
    bgClass: "bg-sky-100",
    textClass: "text-blue-700",
  },
};

// Donut parameters (kept similar to previous)
const donutConfig = {
  width: 140,
  height: 70,
  scaleX: 45,
  scaleY: 22,
  thetaStep: 0.05,
  phiStep: 0.015,
  chars: " .:-=+*#%@",
};

export default function Shapes() {
  const [mode, setMode] = useState<ModeKey>("matrix");
  const [shape, setShape] = useState<ShapeKey>("donut");
  const [content, setContent] = useState<string>("");

  // rotation refs
  const A = useRef(0);
  const B = useRef(0);
  const intervalRef = useRef<number | null>(null);

  // cube rotation state
  const cubeRef = useRef({ rx: 0, ry: 0, rz: 0 });

  useEffect(() => {
    function renderDonut() {
      const { width, height, scaleX, scaleY, thetaStep, phiStep, chars } =
        donutConfig;

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

    function renderCube() {
      // Face-based cube rendering with z-buffer and lighting
      const config = {
        width: 120,
        height: 60,
        cubeSize: 18,
        chars: " .:-=+*#%@",
      };
      const { width, height, cubeSize, chars } = config;
      const output: string[] = [];
      const zbuffer: number[] = [];

      for (let i = 0; i < width * height; i++) {
        output[i] = " ";
        zbuffer[i] = 0;
      }

      const distance = 60;

      function rotateX(x: number, y: number, z: number, angle: number) {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return [x, y * cos - z * sin, y * sin + z * cos] as [
          number,
          number,
          number
        ];
      }

      function rotateY(x: number, y: number, z: number, angle: number) {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return [x * cos + z * sin, y, -x * sin + z * cos] as [
          number,
          number,
          number
        ];
      }

      function rotateZ(x: number, y: number, z: number, angle: number) {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return [x * cos - y * sin, x * sin + y * cos, z] as [
          number,
          number,
          number
        ];
      }

      const angleX = cubeRef.current.rx + 0.02;
      const angleY = cubeRef.current.ry + 0.03;
      const angleZ = cubeRef.current.rz + 0.01;

      function drawPoint(x: number, y: number, z: number) {
        let [rx, ry, rz] = rotateX(x, y, z, angleX);
        [rx, ry, rz] = rotateY(rx, ry, rz, angleY);
        [rx, ry, rz] = rotateZ(rx, ry, rz, angleZ);

        const z_proj = rz + distance;
        if (z_proj <= 0) return;

        const scale = distance / z_proj;
        const xp = Math.floor(width / 2 + rx * scale);
        const yp = Math.floor(height / 2 - ry * scale * 0.5);

        if (xp >= 0 && xp < width && yp >= 0 && yp < height) {
          const idx = xp + width * yp;
          const ooz = 1 / z_proj;
          if (ooz > zbuffer[idx]) {
            zbuffer[idx] = ooz;
            const luminance = Math.max(
              0,
              Math.min(1, (rz + cubeSize * 2) / (cubeSize * 4))
            );
            const charIdx = Math.floor(luminance * (chars.length - 1));
            output[idx] =
              chars[Math.max(0, Math.min(charIdx, chars.length - 1))];
          }
        }
      }

      // Draw faces by sampling x,y across each face
      for (let x = -cubeSize; x <= cubeSize; x += 0.5) {
        for (let y = -cubeSize; y <= cubeSize; y += 0.5) {
          drawPoint(x, y, cubeSize); // front
          drawPoint(x, y, -cubeSize); // back
          drawPoint(cubeSize, x, y); // right
          drawPoint(-cubeSize, x, y); // left
          drawPoint(x, cubeSize, y); // top
          drawPoint(x, -cubeSize, y); // bottom
        }
      }

      let result = "";
      for (let i = 0; i < height; i++) {
        result += output.slice(i * width, (i + 1) * width).join("") + "\n";
      }

      setContent(result);

      cubeRef.current.rx += 0.02;
      cubeRef.current.ry += 0.03;
      cubeRef.current.rz += 0.01;
    }

    function tick() {
      if (shape === "donut") renderDonut();
      else renderCube();
    }

    intervalRef.current = window.setInterval(tick, 50);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [shape, mode]);

  const toggleMode = () =>
    setMode((m) => (m === "matrix" ? "arctic" : "matrix"));

  return (
    <div
      className={`min-h-screen relative flex items-center justify-center ${modeConfigs[mode].bgClass} ${modeConfigs[mode].textClass}`}
    >
      {/* Left selector */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30">
        {shape === "donut" ? (
          <button
            onClick={() => setShape("donut")}
            className={`px-3 py-2 rounded-md font-mono bg-white/10`}
            aria-pressed="true"
          >
            Donut
          </button>
        ) : (
          <button
            onClick={() => setShape("donut")}
            className={`px-3 py-2 rounded-md font-mono bg-white/5`}
            aria-pressed="false"
          >
            Donut
          </button>
        )}

        {shape === "cube" ? (
          <button
            onClick={() => setShape("cube")}
            className={`px-3 py-2 rounded-md font-mono bg-white/10`}
            aria-pressed="true"
          >
            Cube
          </button>
        ) : (
          <button
            onClick={() => setShape("cube")}
            className={`px-3 py-2 rounded-md font-mono bg-white/5`}
            aria-pressed="false"
          >
            Cube
          </button>
        )}
      </div>

      {/* Top-right mode toggle */}
      <button
        onClick={toggleMode}
        className="absolute top-6 right-6 px-4 py-2 rounded-md font-mono z-30"
        aria-label="Toggle mode"
        title="Toggle mode"
      >
        {modeConfigs[mode].name}
      </button>

      {/* Content area */}
      <div className="max-w-[90vw] w-full flex items-center justify-center">
        <pre
          className="whitespace-pre-wrap font-mono text-[8px] sm:text-[10px] leading-[5px] sm:leading-[6px] p-4 rounded-md shadow-inner backdrop-blur"
          aria-hidden
        >
          {content}
        </pre>
      </div>
    </div>
  );
}
