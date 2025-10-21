import { useState, useEffect } from "react";
import { PenTool, Sparkles } from "lucide-react";

export default function UnderConstruction() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-purple-100 flex items-center justify-center p-4">
      {/* Main content */}
      <div
        className={`max-w-2xl w-full transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Bouncing icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-40"></div>
            <PenTool
              className="w-20 h-20 text-purple-500 relative animate-bounce"
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 text-purple-900">
          Under Construction
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-center text-purple-600 mb-12">
          I'm working on something great. Check back soon.
        </p>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-400"></div>
          <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-400"></div>
        </div>

        {/* Info card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-200 shadow-xl text-center">
          <div className="inline-block p-3 bg-gradient-to-br from-purple-100 to-yellow-50 rounded-full mb-4">
            <PenTool className="w-8 h-8 text-purple-600" strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-purple-900">
            Blog Page Coming Soon
          </h3>
        </div>
      </div>
    </div>
  );
}
