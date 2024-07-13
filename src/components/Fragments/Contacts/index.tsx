import { SectionContent } from "@/components/Section-Content";
import { Title } from "@/components/Title";
import { SocialMidia } from "./Social-Midia";

export function Contacts() {
  return (
    <SectionContent id="contacts" className="flex flex-col items-center justify-center gap-8 pt-0">
      <Title title="Contactos" className="text-start lg:text-center" />
      <SocialMidia />
    </SectionContent>
  );
}
