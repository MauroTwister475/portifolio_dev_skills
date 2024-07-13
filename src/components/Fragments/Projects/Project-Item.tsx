import { NextLink } from "@/components/Link-Item";
import { motion } from "framer-motion";
import { ProjectImage } from "./Project-Image";
import { ProjectTechs  } from "./Project-Techs";
import { ProjectItemProps } from "./projects";

export function ProjectItem(props: ProjectItemProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pb-10 border-b border-zinc-800">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        className="w-full h-full flex flex-col space-y-8 items-center justify-center"
      >
        <div className="flex flex-col gap-4 justify-center text-slate-300">
          <h1 className="text-2xl font-semibold">{props.projectDisplayName}</h1>
          <p className="text-md leading-7">{props.description}</p>
          <ProjectTechs techs={props.techs} />
          <div className="flex items-center">
            <NextLink href={props.linkRepo}>
              <span className="underline text-blue-700 underline-offset-4">Código fonte</span>
            </NextLink>
          </div>
        </div>
      </motion.div>
      <ProjectImage isMobile={props.isMobile} image={props.projectImage} />
    </div>
  );
}
