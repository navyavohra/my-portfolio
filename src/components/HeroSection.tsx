import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  onExploreClick?: () => void;
}

const HeroSection = ({
  title = "Hi, I'm John Doe",
  subtitle = "A passionate Software Engineer crafting elegant solutions through code",
  imageUrl = "/images/tempo-image-20250125T012248789Z.jpeg",
  onExploreClick = () => {},
}: HeroSectionProps) => {
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
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative w-48 h-48 mx-auto mb-8"
          >
            <img
              src={imageUrl}
              alt="Profile"
              className="rounded-full shadow-xl border-4 border-primary/10 animate-bounce"
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
            <Button onClick={onExploreClick} size="lg" className="group">
              Explore My Work
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-primary/5"
      />
    </section>
  );
};

export default HeroSection;
