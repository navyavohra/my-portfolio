import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { ThemeSelector } from "./ui/theme-selector";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./theme-provider";

interface NavigationProps {
  sections?: Array<{ id: string; label: string }>;
}

const Navigation = ({
  sections = [
    { id: "hero", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ],
}: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [orbPosition, setOrbPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    // Lagging effect: Smoothly interpolate the orb's position toward the cursor position
    const animationFrame = requestAnimationFrame(() => {
      setOrbPosition((prev) => ({
        x: prev.x + (cursorPosition.x - prev.x) * 0.08, // Adjust for smooth lag
        y: prev.y + (cursorPosition.y - prev.y) * 0.08,
      }));
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [cursorPosition]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation for orbiting particles
  const particleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [1, 0],
      scale: [1, 2],
      transition: { duration: 1.5, repeat: Infinity, ease: "easeOut" },
    },
  };

  return (
    <div className="relative">
      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 ${
          isScrolled ? "shadow-md" : ""
        } bg-background border-b ${
          theme === "high-contrast" || theme === "protanopia"
            ? "border-primary"
            : "border-gray-200"
        }`}
      >
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo with interactive orb */}
          <div className="relative flex items-center gap-2">
            {/* Interactive Orb */}
            <motion.div
              className="absolute"
              style={{
                x: orbPosition.x,
                y: orbPosition.y,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 150, damping: 25 }}
            >
              <div className="relative">
                {/* Orb */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-blue-400 animate-pulse drop-shadow-[0_0_15px_rgba(0,255,255,0.9)] flex items-center justify-center">
                  <span className="text-white text-xl font-bold">N</span>
                </div>
                {/* Particles */}
                <AnimatePresence>
                  {[...Array(4)].map((_, index) => (
                    <motion.div
                      key={index}
                      className="absolute h-2 w-2 rounded-full bg-green-300 blur-lg"
                      variants={particleVariants}
                      initial="hidden"
                      animate="visible"
                      style={{
                        top: Math.random() * 20 - 10,
                        left: Math.random() * 20 - 10,
                      }}
                    />
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
            {/* Text */}
            <span className="text-2xl font-extrabold text-foreground">
              Navya<span className="text-blue-400">Sphere</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant="ghost"
                onClick={() => scrollToSection(section.id)}
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                {section.label}
              </Button>
            ))}
            <ThemeSelector />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeSelector />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-4 pt-8">
                  {sections.map((section) => (
                    <Button
                      key={section.id}
                      variant="ghost"
                      onClick={() => scrollToSection(section.id)}
                      className="w-full justify-start text-lg text-foreground hover:text-primary"
                    >
                      {section.label}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navigation;
