"use client"
import { SectionContent } from "@/components/Section-Content";
import { ProjectItem } from "./Project-Item";
import { Title } from "@/components/Title";
import { PROJECTS } from "./projects";

export function Projects() {
  return (
    <SectionContent
      id="projects"
      className="flex flex-col py-24 items-center gap-8 lg:gap-20"
    >
      <Title title="Projectos" className="text-start" />
      {PROJECTS.map(project => (
        <ProjectItem 
          key={project.linkRepo}
          linkRepo={project.linkRepo}
          description={project.description}
          projectName={project.projectName}
          projectDisplayName={project.projectDisplayName}
          projectImage={project.projectImage}
          isMobile={project.isMobile}
          techs={project.techs}
        />
      ))}
    </SectionContent>
  );
}
