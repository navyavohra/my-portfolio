import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface Skill {
  name: string;
  icon: string;
  color: string;
}

interface SkillsSectionProps {
  skills?: Skill[];
}

const SkillsSection = ({
  skills = [
    { name: "React", icon: "⚛️", color: "text-blue-500" },
    { name: "TypeScript", icon: "📘", color: "text-blue-600" },
    { name: "Node.js", icon: "🟢", color: "text-green-500" },
    { name: "Python", icon: "🐍", color: "text-yellow-500" },
    { name: "Docker", icon: "🐳", color: "text-blue-400" },
    { name: "AWS", icon: "☁️", color: "text-orange-500" },
    { name: "GraphQL", icon: "📊", color: "text-pink-500" },
    { name: "MongoDB", icon: "🍃", color: "text-green-600" },
  ],
}: SkillsSectionProps) => {
  return (
    <section className="py-20 bg-background min-h-[400px] w-full">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the technologies I work with on a regular basis.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card className="p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer text-center">
                      <div className="text-4xl mb-2">{skill.icon}</div>
                      <div className={`font-medium ${skill.color}`}>
                        {skill.name}
                      </div>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Click to learn more about {skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
