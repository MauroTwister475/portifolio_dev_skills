export type LinkType = "#projects" | "#about_me"  | "#contacts" | "#skills"

export type LinkTypeProps = {
  name: string;
  href: LinkType,
}

export const HEADERLINKS: LinkTypeProps[] = [
  {
    href: "#about_me",
    name: "Sobre mim",
  },
  {
    href: "#skills",
    name: "Habilidades",
  },
  {
    href: "#projects",
    name: "Projectos",
  },
  {
    href: "#contacts",
    name: "Contactos",
  },
]