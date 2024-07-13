"use client";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

interface TitleProps {
  title: string;
  className?: string;
}

export function Title({ title, className }: TitleProps) {
  return (
    <motion.h1
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      exit={{ x: -100, opacity: 0 }}
      className={twMerge(
        "w-full font-semibold text-3xl leading-10 text-white text-center",
        className
      )}
    >
      <span>
        {" "}
        <span className="text-blue-700">#</span> 
        {title}
      </span>
    </motion.h1>
  );
}
