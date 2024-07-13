"use client";
import { FooterHeader } from "../../Footer/Footer-Header";
import { motion } from "framer-motion";
import { TECHS } from "./techs";
import Image from "next/image";
import { Tooltip } from "@/components/ui/tooltip";

export function Skills() {
  return (
    <FooterHeader className="w-auto mb-4">
      <div className="w-full flex items-center justify-center flex-wrap gap-4">
        {TECHS.map(({ Icon, tooltip }, index) => (
          <motion.div
            key={index}
            initial={{ x: -100, scale: 0 }}
            whileInView={{ x: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            exit={{ x: -100, scale: 0 }}
          >
            <Image
              src={Icon}
              alt={tooltip}
              className="w-24 h-24 hover:opacity-55 transition-all cursor-pointer"
              title={tooltip}
            />
          </motion.div>
        ))}
      </div>
    </FooterHeader>
  );
}
