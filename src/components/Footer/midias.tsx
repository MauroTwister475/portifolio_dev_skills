import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { ElementType } from "react";

type MidiaType = {
  text: string;
  Icon: ElementType;
  href: string;
};

export const MIDIAS: MidiaType[] = [
  {
    text: "Facebook",
    Icon: Facebook,
    href: "https://www.facebook.com/maurodinnis.raimundo",
  },
  {
    text: "Instagram",
    Icon: Instagram,
    href: "https://www.instagram.com/mauro_twister/",
  },
  {
    text: "Github",
    Icon: Github,
    href: "https://github.com/MauroTwister475",
  },
  {
    text: "LinkedIn",
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/mauro-dinis-raimundo-00475526a/",
  },
];
