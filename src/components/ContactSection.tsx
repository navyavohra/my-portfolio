import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram, Github, FileText } from "lucide-react";

const Footer = () => {
  const iconVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const textVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <footer className="w-full bg-transparent">
      <div className="container mx-auto flex flex-col items-center sm:flex-row justify-between px-6 py-10">
        {/* Icons Section */}
        <motion.div
          variants={iconVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center space-x-6"
        >
          <a
            href="mailto:navyavohra23@gmail.com"
            className="text-foreground hover:text-primary transition-transform transform hover:scale-110"
            aria-label="Email Me"
          >
            <Mail className="h-12 w-12" />
          </a>
          <a
            href="https://www.linkedin.com/in/navyavohra/"
            className="text-foreground hover:text-primary transition-transform transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-12 w-12" />
          </a>
          <a
            href="https://www.instagram.com/navyavohra/"
            className="text-foreground hover:text-primary transition-transform transform hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="h-12 w-12" />
          </a>
          <a
            href="https://github.com/navyavohra"
            className="text-foreground hover:text-primary transition-transform transform hover:scale-110"
            aria-label="Github"
          >
            <Github className="h-12 w-12" />
          </a>
          <a
            href="/resume.pdf"
            download="Navya_Vohra_Resume.pdf"
            className="text-foreground hover:text-primary transition-transform transform hover:scale-110"
            aria-label="Download Resume"
          >
            <FileText className="h-12 w-12" />
          </a>
        </motion.div>

        {/* Text Section */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-6 sm:mt-0 text-foreground text-center sm:text-right text-sm sm:text-base"
        >
          <p>© {new Date().getFullYear()} Navya Vohra. All Rights Reserved.</p>
          <p className="mt-2">
            Proudly building innovative mobile applications in the Greater Toronto Area.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
