import { StaticImageData } from "next/image";
import Proffy from "@/assets/proffy.png";
import Test from "@/assets/test.png";
import Game from "@/assets/game.png";
import Task from "@/assets/task.png";
import Porti from "@/assets/porti.png";
import Inbox from "@/assets/inbox.png";
import IItech from "@/assets/iitech.png";
import dtmoney from "@/assets/dtmoney.png";
import portiWeb from "@/assets/portiWeb.png";
import sg from "@/assets/sg.jpg";

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
    linkRepo: "https://github.com/MauroTwister475/ProffyReactJS",
    projectImage: Proffy,
    techs: [
      {
        tech: "React",
      },
      {
        tech: "Nodejs",
      },
      {
        tech: "Prisma ORM",
      },
      {
        tech: "SQLite",
      },
      {
        tech: "TypeScript",
      },
      {
        tech: "React Router Dom",
      },
    ],
  },
  {
    description:
      "Esse é um projecto que consiste no meu próprio portifólio, com o objectivo de mostrar as minhas habilidades e projectos. Se estás a ver esse projecto é porque nesse momento estás no próprio portifólio",
    projectName: "proffy",
    projectDisplayName: "Portfólio Pessoal",
    linkRepo: "https://github.com/MauroTwister475/portifolio_dev_skills",
    projectImage: portiWeb,
    techs: [
      {
        tech: "Next.js",
      },
      {
        tech: "TypeScript",
      },
      {
        tech: "Framer-motion",
      },
      {
        tech: "Tailwind",
      },
    ],
  },
  {
    description:
      "Esse é um projecto que consiste na Landing Page da IItech, empresa de serviços de Informática. É um Demo para analise.",
    projectName: "proffy",
    projectDisplayName: "Landing Page da IItech",
    linkRepo: "https://github.com/MauroTwister475/iitech-landing-page",
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
      {
        tech: "Tailwind",
      },
      {
        tech: "Framer-motion",
      },
    ],
  },
  {
    description:
      "Esse é um projecto que consiste num desafio de front-end da Rocketseat. Construção de uma aplicação web de finanças.",
    projectName: "dtmoney",
    projectDisplayName: "Dt.Money",
    linkRepo: "https://github.com/MauroTwister475/dt-money",
    projectImage: dtmoney,
    techs: [
      {
        tech: "React",
      },
      {
        tech: "TypeScript",
      },
      {
        tech: "Headeless-UI",
      },
    ],
  },
  {
    description:
      "Esse é um projecto que consiste em uma aplicação web capaz de gerar horários automáticos de uma determinada instituição, tanto escolar como corporativa.",
    projectName: "schedule generator",
    projectDisplayName: "Gerador de Horários Automáticos",
    linkRepo: "https://github.com/MauroTwister475/SG",
    projectImage: sg,
    techs: [
      {
        tech: "NextJs",
      },
      {
        tech: "TypeScript",
      },
      {
        tech: "Tailwind",
      },
      {
        tech: "Shadcn-ui",
      },
      {
        tech: "NodeJs",
      },
      {
        tech: "ExpressJs",
      },
      {
        tech: "TypeORM",
      },
      {
        tech: "Zustand",
      },
    ],
  },
  {
    description:
      "Esse é um projecto que consiste em um Teste que me foi imposto para poder provar os meus conhecimento sobre front-end, consumo de APIs e uso de libs de terceiros.",
    projectName: "test-next",
    projectDisplayName: "Teste Front-end Next.js",
    linkRepo: "https://github.com/MauroTwister475/test-front-end-NextJS",
    projectImage: Test,
    techs: [
      {
        tech: "Nextjs",
      },
      {
        tech: "TypeScript",
      },
      {
        tech: "Tailwind",
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
    projectName: "task manage",
    projectDisplayName: "Gerenciador de Tarefas",
    linkRepo: "https://github.com/MauroTwister475/taskApp",
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
        tech: "Nativewind",
      },
      {
        tech: "Zustand",
      },
    ],
  },
  {
    description:
      "Esse é um projecto em que fiz o meu perfil mobile. Simples mas intuitivo. Organização simples das informações.",
    projectName: "mobile profile",
    projectDisplayName: "Perfil Mobile",
    linkRepo: "https://github.com/MauroTwister475/my-profile",
    projectImage: Porti,
    isMobile: true,
    techs: [
      {
        tech: "React Native",
      },
      {
        tech: "Expo",
      },
      {
        tech: "Nativewind",
      },
    ],
  },
  {
    description:
      "Esse é um projecto é o clone da Inbon do Gmail do Google. Fiz para treinar o uso de dois ou mais tipos de navegação (Tab e Drawer).",
    projectName: "clone gmail",
    projectDisplayName: "Gmail Clone Inbox",
    linkRepo: "https://github.com/MauroTwister475/gmail-clone",
    projectImage: Inbox,
    isMobile: true,
    techs: [
      {
        tech: "React Native",
      },
      {
        tech: "Expo",
      },
      {
        tech: "Nativewind",
      },
    ],
  },
  {
    description:
      "Esse é um projecto que consiste em um jogo mobile de Quiz  sobre as tecnologias JavaScript, nomeadamente React, Nodejs e React Native.",
    projectName: "quizjs",
    projectDisplayName: "QuizJS",
    linkRepo: "https://github.com/MauroTwister475/quiz-js",
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
        tech: "Nativewind",
      },
      {
        tech: "Zustand",
      },
    ],
  },
];
