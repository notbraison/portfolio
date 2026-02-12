import { motion } from "framer-motion";
import { useState } from "react";

const CSSModelTest = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <div className="bg-background text-foreground min-h-screen p-8">
        {/* Header */}
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              CSS Model Test
            </h1>
            <button
              onClick={toggleDarkMode}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              {isDarkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>

          {/* Design System Colors */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Design System Colors
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-background border border-border rounded-lg">
                <div className="w-full h-20 bg-background border border-border rounded mb-2"></div>
                <p className="text-sm font-medium">Background</p>
                <p className="text-xs text-muted-foreground">
                  hsl(var(--background))
                </p>
              </div>
              <div className="p-4 bg-card border border-border rounded-lg">
                <div className="w-full h-20 bg-card border border-border rounded mb-2"></div>
                <p className="text-sm font-medium">Card</p>
                <p className="text-xs text-muted-foreground">
                  hsl(var(--card))
                </p>
              </div>
              <div className="p-4 bg-primary text-primary-foreground border border-border rounded-lg">
                <div className="w-full h-20 bg-primary rounded mb-2"></div>
                <p className="text-sm font-medium">Primary</p>
                <p className="text-xs opacity-80">hsl(var(--primary))</p>
              </div>
              <div className="p-4 bg-secondary text-secondary-foreground border border-border rounded-lg">
                <div className="w-full h-20 bg-secondary rounded mb-2"></div>
                <p className="text-sm font-medium">Secondary</p>
                <p className="text-xs opacity-80">hsl(var(--secondary))</p>
              </div>
              <div className="p-4 bg-accent text-accent-foreground border border-border rounded-lg">
                <div className="w-full h-20 bg-accent rounded mb-2"></div>
                <p className="text-sm font-medium">Accent</p>
                <p className="text-xs opacity-80">hsl(var(--accent))</p>
              </div>
              <div className="p-4 bg-muted text-muted-foreground border border-border rounded-lg">
                <div className="w-full h-20 bg-muted rounded mb-2"></div>
                <p className="text-sm font-medium">Muted</p>
                <p className="text-xs opacity-80">hsl(var(--muted))</p>
              </div>
              <div className="p-4 bg-destructive text-destructive-foreground border border-border rounded-lg">
                <div className="w-full h-20 bg-destructive rounded mb-2"></div>
                <p className="text-sm font-medium">Destructive</p>
                <p className="text-xs opacity-80">hsl(var(--destructive))</p>
              </div>
              <div className="p-4 bg-popover text-popover-foreground border border-border rounded-lg">
                <div className="w-full h-20 bg-popover border border-border rounded mb-2"></div>
                <p className="text-sm font-medium">Popover</p>
                <p className="text-xs opacity-80">hsl(var(--popover))</p>
              </div>
            </div>
          </section>

          {/* Custom Animations */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Custom Animations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-card border border-border rounded-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 animate-float"></div>
                <h3 className="font-semibold mb-2">Float Animation</h3>
                <p className="text-sm text-muted-foreground">
                  Smooth up and down movement
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-4 animate-pulse-slow"></div>
                <h3 className="font-semibold mb-2">Slow Pulse</h3>
                <p className="text-sm text-muted-foreground">
                  Gentle breathing effect
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 animate-glow flex items-center justify-center text-white font-bold">
                  GLOW
                </div>
                <h3 className="font-semibold mb-2">Glow Effect</h3>
                <p className="text-sm text-muted-foreground">
                  Neon-like glow animation
                </p>
              </div>
            </div>
          </section>

          {/* Interactive Elements */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Interactive Elements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="font-semibold mb-4">Buttons</h3>
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Primary Button
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                  >
                    Secondary Button
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-4 py-2 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition-colors"
                  >
                    Destructive Button
                  </motion.button>
                </div>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="font-semibold mb-4">Cards with Hover Effects</h3>
                <div className="space-y-3">
                  <motion.div
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    }}
                    className="p-4 bg-accent rounded-lg cursor-pointer transition-all"
                  >
                    <p className="font-medium">Hover Card 1</p>
                    <p className="text-sm text-muted-foreground">
                      Lifts up on hover
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "hsl(var(--accent))",
                    }}
                    className="p-4 bg-muted rounded-lg cursor-pointer transition-all"
                  >
                    <p className="font-medium">Hover Card 2</p>
                    <p className="text-sm text-muted-foreground">
                      Scales and changes color
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Custom Width Classes */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Custom Width Classes
            </h2>
            <div className="space-y-4">
              <div className="w-70 bg-primary text-primary-foreground p-4 rounded-lg">
                <p className="text-sm">Custom width: w-70 (17.5rem)</p>
              </div>
              <div className="ml-70 bg-secondary text-secondary-foreground p-4 rounded-lg">
                <p className="text-sm">Custom margin: ml-70 (17.5rem)</p>
              </div>
            </div>
          </section>

          {/* Gradient Text Examples */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Gradient Text Examples
            </h2>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Blue to Purple to Pink
              </h3>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Green to Blue
              </h3>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Sunset Gradient
              </h3>
            </div>
          </section>

          {/* Responsive Design Test */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Responsive Design
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-card border border-border rounded-lg text-center">
                <p className="text-sm">Mobile: 1 column</p>
                <p className="text-xs text-muted-foreground">sm: 2 columns</p>
                <p className="text-xs text-muted-foreground">lg: 4 columns</p>
              </div>
              <div className="p-4 bg-card border border-border rounded-lg text-center">
                <p className="text-sm">Responsive Grid</p>
                <p className="text-xs text-muted-foreground">
                  Adapts to screen size
                </p>
              </div>
              <div className="p-4 bg-card border border-border rounded-lg text-center">
                <p className="text-sm">Auto Layout</p>
                <p className="text-xs text-muted-foreground">
                  Flexible spacing
                </p>
              </div>
              <div className="p-4 bg-card border border-border rounded-lg text-center">
                <p className="text-sm">Consistent Design</p>
                <p className="text-xs text-muted-foreground">
                  Maintains visual hierarchy
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CSSModelTest;
