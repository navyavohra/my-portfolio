import React, { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import ProjectsGrid from "./ProjectsGrid";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";

const Home = () => {
  const handleExploreClick = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-background min-h-screen">
      <Navigation />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 10 }}
        transition={{ duration: 0.5 }}
      >
        <section id="hero">
          <HeroSection onExploreClick={handleExploreClick} />
        </section>

        <section id="projects" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured Projects
            </h2>
            <ProjectsGrid />
          </motion.div>
        </section>

        <section id="skills">
          <SkillsSection />
        </section>

        <section id="contact">
          <ContactSection
            onSubmit={(data) => {
              console.log("Form submitted:", data);
              // Handle form submission in a real app
            }}
          />
        </section>
      </motion.main>

      <footer className="bg-background py-8 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
