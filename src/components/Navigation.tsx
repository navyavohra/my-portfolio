import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { ThemeSelector } from "./ui/theme-selector";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { motion } from "framer-motion";
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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

  // Function to determine the orb, text, and button colors based on the theme
  const getThemeColors = () => {
    switch (theme) {
      case "dark":
        return {
          gradient: "from-purple-400 to-indigo-600",
          text: "text-indigo-400",
          button: "bg-indigo-600 hover:bg-indigo-700",
        };
      case "light":
        return {
          gradient: "from-yellow-400 to-orange-500",
          text: "text-orange-500",
          button: "bg-orange-500 hover:bg-orange-600",
        };
      case "high-contrast":
        return {
          gradient: "from-red-500 to-black",
          text: "text-red-500",
          button: "bg-red-500 hover:bg-red-600",
        };
      case "deuteranopia":
        return {
          gradient: "from-green-400 to-teal-500",
          text: "text-teal-500",
          button: "bg-teal-500 hover:bg-teal-600",
        };
      case "protanopia":
        return {
          gradient: "from-blue-400 to-cyan-500",
          text: "text-cyan-500",
          button: "bg-cyan-500 hover:bg-cyan-600",
        };
      default:
        return {
          gradient: "from-green-400 to-blue-500",
          text: "text-blue-500",
          button: "bg-blue-500 hover:bg-blue-600",
        };
    }
  };

  const { gradient, text, button } = getThemeColors();

  return (
    <div className="relative cursor-none">
      {/* Orb following the cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{
          x: cursorPosition.x - 24, // Center the orb relative to the cursor
          y: cursorPosition.y - 24,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.1 }}
      >
        <div
          className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient} animate-pulse drop-shadow-[0_0_15px_rgba(0,255,255,0.9)]`}
        ></div>
      </motion.div>

      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-40 ${
          isScrolled ? "shadow-md" : ""
        } bg-transparent backdrop-blur-sm border-b border-transparent`}
      >
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo with text */}
          <div className="relative flex items-center gap-2">
            <span className={`text-2xl font-extrabold ${text}`}>
              Navya Vohra's<span className={text}> Space</span>
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
