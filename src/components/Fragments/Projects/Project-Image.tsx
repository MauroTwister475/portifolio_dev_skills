import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";

interface ProjectImageProps {
  isMobile?: boolean;
  image: StaticImageData;
}

export function ProjectImage({ image, isMobile }: ProjectImageProps) {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      exit={{ x: 200, opacity: 0 }}
      className="w-full h-full lg:flex items-center justify-center"
    >
      <Image
        src={image}
        alt="hero image"
        className={clsx('rounded-md mx-auto lg:ml-auto cursor-pointer hover:scale-105 transition-all bg-cover', {
          'w-auto h-[30rem]': isMobile, 
          'w-full h-full bg-cover': !isMobile 
        })}
      />
    </motion.div>
  );
}
