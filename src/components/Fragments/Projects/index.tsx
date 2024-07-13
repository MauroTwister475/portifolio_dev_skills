"use client";
import { SectionContent } from "@/components/Section-Content";
import { ProjectItem } from "./Project-Item";
import { Title } from "@/components/Title";
import { PROJECTS } from "./projects";
import Link from "next/link";
import { NextLink } from "@/components/Link-Item";
import { ArrowRight } from "lucide-react";

export function Projects() {
  return (
    <SectionContent
      id="projects"
      className="flex flex-col py-24 items-center gap-8 lg:gap-20"
    >
      <Title title="Projectos" className="text-start" />
      {PROJECTS.map((project) => (
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
        <NextLink href="https://github.com/MauroTwister475/?tab=repositories">
          Mais Projectos? Visite meu <span className="text-blue-700">Github</span>
        </NextLink>
    </SectionContent>
  );
}
