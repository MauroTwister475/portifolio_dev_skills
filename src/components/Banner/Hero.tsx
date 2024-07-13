import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import heroImage from "@/assets/avatar1.jpg";

export function HeroImage({ urlImage = heroImage }: { urlImage?: StaticImageData }) {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      exit={{ opacity: 0, x: 100 }}
      className="hidden w-full h-full lg:flex items-center justify-center"
    >
      <Image src={urlImage} className="rounded-md w-80 h-auto" alt="hero image" />
    </motion.div>
  );
}
