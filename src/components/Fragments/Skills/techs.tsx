import { StaticImageData } from "next/image";
import react from "@/assets/react.svg";
import native from "@/assets/react-native.svg";
import node from "@/assets/node.svg";
import ts from "@/assets/typescript.svg";
import tw from "@/assets/tailwindcss.svg";
import nx from "@/assets/next.svg";
import js from "@/assets/javascript.svg";

type TechType = {
  tooltip: string;
  Icon: StaticImageData;
};

export const TECHS: TechType[] = [
  {
    tooltip: "Javascript",
    Icon: js,
  },
  {
    tooltip: "Typescript",
    Icon: ts,
  },
  {
    tooltip: "React",
    Icon: react,
  },
  {
    tooltip: "Next.js",
    Icon: nx,
  },
  {
    tooltip: "TaiwindCSS",
    Icon: tw,
  },
  {
    tooltip: "React Native",
    Icon: native,
  },
  {
    tooltip: "Node.js",
    Icon: node,
  },
];
