import { SectionContent } from "@/components/Section-Content";
import { Title } from "@/components/Title";
import { Skills } from "./Skills";

export function SkillsSection() {
  return (
    <SectionContent id="skills" className="flex flex-col justify-center gap-10">
      <Title title="Habilidades" className="text-start lg:text-center" />
      <Skills />
    </SectionContent>
  );
}
