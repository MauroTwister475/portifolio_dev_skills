import { ArrowRight } from "lucide-react";
import { ButtonPrimary } from "../Buttons/primary";
import { motion } from "framer-motion";
import { MyName } from "../MyName";
import { Hello } from "./Hello";

export function BannerContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col items-center lg:items-start justify-center gap-10 "
    >
      <motion.h1 className="font-semibold text-white text-4xl lg:text-4xl text-center lg:text-justify">
        <Hello />
        <br />  
        Sou o <MyName />
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.3 }}
        className="text-center lg:text-justify text-slate-300"
      >
        Sou apaixonado por criar soluções digitais inovadoras e funcionais. Com
        experiência em JavaScript, TypeScript, Nodejs, React, React Native e
        expo . Tenho ajudado empresas e indivíduos a transformar suas ideias em
        produtos web de alta qualidade com o melhor do mercado
      </motion.p>
      <motion.div className="w-full flex items-center justify-center lg:justify-start gap-3">
        <motion.div
          initial={{ x: 4 }}
          whileInView={{ x: 0 }}
          translate="yes"
          transition={{
            delay: 2,
            duration: 1.5,
            type: "spring",
            repeat: Infinity,
          }}
        >
          <ButtonPrimary
            Icon={ArrowRight}
            title="Github"
            variant="outline"
            className="lg:w-max px-20 lg:px-10 text-md bg-blue-700 text-white hover:bg-blue-800 hover:text-white transition-colors"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
/*
<span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
  IITECH
</span>
*/
