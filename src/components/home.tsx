import React from "react";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import ProjectsGrid from "./ProjectsGrid";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import WorkExp from "./WorkExp";

const Home = () => {
  const handleExploreClick = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollVariant = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="bg-background min-h-screen">
      <Navigation />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Hero Section */}
        <section id="hero" className="py-16">
          <HeroSection onExploreClick={handleExploreClick} />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <motion.div
            variants={scrollVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="container mx-auto px-4"
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              Featured Projects
            </h2>
            <ProjectsGrid />
          </motion.div>
        </section>

        {/* Work Experience Section */}
        <section id="workExp" className="py-16">
          <motion.div
            variants={scrollVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <WorkExp />
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <motion.div
            variants={scrollVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <SkillsSection />
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <motion.div
            variants={scrollVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <ContactSection
              // onSubmit={(data) => {
              //   console.log("Form submitted:", data);
              // }}
            />
          </motion.div>
        </section>
      </motion.main>
    </div>
  );
};

export default Home;
