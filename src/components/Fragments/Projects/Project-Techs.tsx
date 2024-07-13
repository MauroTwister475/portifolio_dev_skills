import { motion } from "framer-motion";
import { BadgeTech } from "@/components/Badge-Tech";
import { ProjectTechType } from "./projects";

interface ProjectTechProps {
  techs: ProjectTechType[]
}
export function ProjectTechs({ techs }: ProjectTechProps) {
  return (
    <div className="flex items-center flex-wrap max-w-full gap-3">
      {techs.map(( tech, index) => (
        <motion.div
          key={index}
          initial={{ x: -100, scale: 0 }}
          whileInView={{ x: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          exit={{ x: -100, scale: 0 }}
          className="flex items-center"
        >
          <BadgeTech tech={tech.tech} />
        </motion.div>
      ))}
    </div>
  );
}
