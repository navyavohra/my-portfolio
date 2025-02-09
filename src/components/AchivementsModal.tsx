import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, X } from "lucide-react";
import { motion } from "framer-motion";

interface AchivementsModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  work?: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
  };
}

const AchivementsModal = ({
  isOpen = true,
  onClose = () => {},
  achivements = {
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with React and Tailwind CSS. Features smooth animations, responsive design, and interactive elements.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/portfolio",
  },
}: AchivementsModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-background max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-bold">
              {achivements.title}
            </DialogTitle>
          </div>
        </DialogHeader>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <img
              src={achivements.image}
              alt={achivements.title}
              className="object-cover w-full h-full"
            />
          </div>

          <DialogDescription className="text-lg leading-relaxed text-muted-foreground">
            {achivements.description}
          </DialogDescription>

          <div className="flex flex-wrap gap-2">
            {achivements.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-4">
            <Button
              variant="default"
              className="flex items-center gap-2"
              onClick={() => window.open(achivements.liveUrl, "_blank")}
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => window.open(achivements.githubUrl, "_blank")}
            >
              <Github className="h-4 w-4" />
              View Code
            </Button>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default AchivementsModal;
