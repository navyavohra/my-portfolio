import React, { useState } from "react";
import { motion } from "framer-motion";
import AchivementsModal from "./AchivementsModal";
import { Card, CardContent } from "./ui/card";
import { Github, ExternalLink } from "lucide-react";

interface Achivements {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

interface AchivementsGridProps {
  achivements?: Achivements[];
}

const AchivementsGrid = ({
  achivements = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/ecommerce",
    },
    {
      id: "2",
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/dashboard",
    },
    {
      id: "3",
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      technologies: ["TypeScript", "OpenAI", "WebSocket"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/ai-chat",
    },
  ],
}: AchivementsGridProps) => {
  const [selectedAchivements, setSelectedAchivements] = useState<Achivements | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        {achivements.map((achivements) => (
          <motion.div key={achivements.id} variants={item}>
            <Card
              className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg"
              onClick={() => setSelectedAchivements(achivements)}
            >
              <CardContent className="p-0 relative">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={achivements.image}
                    alt={achivements.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={achivements.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                    <a
                      href={achivements.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {achivements.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    {achivements.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {selectedAchivements && (
        <AchivementsModal
          isOpen={true}
          onClose={() => setSelectedAchivements(null)}
          achivements ={selectedAchivements}
        />
      )}
    </div>
  );
};

export default AchivementsGrid;
