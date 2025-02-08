import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useTheme } from "./theme-provider";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  onExploreClick?: () => void;
}

const HeroSection = ({
  title = "Navya Vohra",
  subtitle = "iOS Developer, Open Source Contributor, and Tech Enthusiast",
  imageUrl = "icon.png",
  onExploreClick = () => {},
}: HeroSectionProps) => {
  const { theme } = useTheme();

  // Function to determine gradient colors and glow based on the theme
  const getThemeColors = () => {
    switch (theme) {
      case "dark":
        return {
          gradient: "from-purple-500 to-indigo-700",
          glow: "rgba(139, 92, 246, 0.8)",
        };
      case "light":
        return {
          gradient: "from-yellow-400 to-orange-500",
          glow: "rgba(252, 211, 77, 0.8)",
        };
      case "high-contrast":
        return {
          gradient: "from-red-500 to-black",
          glow: "rgba(239, 68, 68, 0.8)",
        };
      case "deuteranopia":
        return {
          gradient: "from-green-400 to-teal-500",
          glow: "rgba(34, 197, 94, 0.8)",
        };
      case "protanopia":
        return {
          gradient: "from-blue-400 to-cyan-500",
          glow: "rgba(56, 189, 248, 0.8)",
        };
      default:
        return {
          gradient: "from-green-400 to-blue-500",
          glow: "rgba(59, 130, 246, 0.8)",
        };
    }
  };

  const { gradient, glow } = getThemeColors();

  return (
    <section className="min-h-screen bg-background flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ scale: 0.9, y: 0 }}
            animate={{
              scale: [1, 1.03, 1],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="relative w-48 h-48 mx-auto mb-8"
          >
            <img
              src={imageUrl}
              alt="Profile"
              className="w-full h-full object-contain"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <button
              onClick={onExploreClick}
              className={`px-8 py-4 sm:px-12 sm:py-6 rounded-full font-semibold text-white bg-gradient-to-br ${gradient} transition-transform hover:scale-105`}
              style={{
                boxShadow: `0 0 20px ${glow}, 0 0 40px ${glow}`,
              }}
            >
              Explore My Work
              <ArrowDown className="ml-2 h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-y-1 inline-block" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 0.6, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-primary/5"
      />
    </section>
  );
};

export default HeroSection;
