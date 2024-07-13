import { StaticImageData } from "next/image";
import Proffy from "@/assets/proffy.png";
import Test from "@/assets/test.png";
import Game from "@/assets/game.png";
import Task from "@/assets/task.png";
import Porti from "@/assets/porti.png";
import Inbox from "@/assets/inbox.png";
import IItech from "@/assets/iitech.png";

export interface ProjectItemProps {
  projectName: string;
  projectDisplayName: string;
  projectImage: StaticImageData;
  description: string;
  linkRepo: string;
  techs: ProjectTechType[];
  isMobile?: boolean;
}

export type ProjectTechType = {
  tech: string;
};

export const PROJECTS: ProjectItemProps[] = [
  {
    description:
      "Esse é um projecto que consiste em uma plataforma de estudos para professores e alunos que pretendem aprender mais sobre determinada disciplina.",
    projectName: "proffy",
    projectDisplayName: "Proffy",
    linkRepo: "https://github.com/MauroTwister475/project",
    projectImage: Proffy,
    techs: [
      {
        tech: "React",
      },
      {
        tech: "Nodejs",
      },
      {
        tech: "SQLite",
      },
      {
        tech: "TypeScript",
      },
    ],
  },
  {
    description:
      "Esse é um projecto que consiste na Landing Page da IItech, empresa de serviços de Informática. É um Demo para analise.",
    projectName: "proffy",
    projectDisplayName: "Landing Page da IItech",
    linkRepo: "https://github.com/MauroTwister475/project",
    projectImage: IItech,
    techs: [
      {
        tech: "Next.js",
      },
      {
        tech: "TypeScript",
      },
      {
        tech: "Shadcn-ui",
      },
    ],
  },
  {
    description:
      "Esse é um projecto que consiste em um Teste que me foi imposto para poder provar os meus conhecimento sobre front-end, consumo de APIs e uso de libs de terceiros.",
    projectName: "test-next",
    projectDisplayName: "Teste Front-end Next.js",
    linkRepo: "https://github.com/MauroTwister475/project",
    projectImage: Test,
    techs: [
      {
        tech: "Nextjs",
      },
      {
        tech: "Shadcn-ui",
      },
      {
        tech: "Json Server",
      },
    ],
  },
  {
    description:
      "Esse é um projecto que consiste num gerenciador de Tarefas. Com diversas funcionalidades como adicionar tarefa, editar, excluir, filtrar e com uma gama de personalização das mesmas.",
    projectName: "test-next",
    projectDisplayName: "Gerenciador de Tarefas",
    linkRepo: "https://github.com/MauroTwister475/project",
    projectImage: Task,
    isMobile: true,
    techs: [
      {
        tech: "React Native",
      },
      {
        tech: "Expo",
      },
      {
        tech: "SQLite",
      },
      {
        tech: "Zustand",
      },
    ],
  },
  {
    description:
      "Esse é um projecto em que fiz o meu perfil mobile. Simples mas intuitivo. Organização simples das informações.",
    projectName: "test-next",
    projectDisplayName: "Perfil Mobile",
    linkRepo: "https://github.com/MauroTwister475/project",
    projectImage: Porti,
    isMobile: true,
    techs: [
      {
        tech: "React Native",
      },
      {
        tech: "Expo",
      },
    ],
  },
  {
    description:
      "Esse é um projecto é o clone da Inbon do Gmail do Google. Fiz para treinar o uso de dois ou mais tipos de navegação (Tab e Drawer).",
    projectName: "test-next",
    projectDisplayName: "Gmail Clone Inbox",
    linkRepo: "https://github.com/MauroTwister475/project",
    projectImage: Inbox,
    isMobile: true,
    techs: [
      {
        tech: "React Native",
      },
      {
        tech: "Expo",
      },
    ],
  },
  {
    description:
      "Esse é um projecto que consiste em um jogo mobile de Quiz  sobre as tecnologias JavaScript, nomeadamente React, Nodejs e React Native.",
    projectName: "test-next",
    projectDisplayName: "QuizJS",
    linkRepo: "https://github.com/MauroTwister475/project",
    projectImage: Game,
    isMobile: true,
    techs: [
      {
        tech: "React Native",
      },
      {
        tech: "Expo",
      },
      {
        tech: "Zustand",
      },
    ],
  },
];
