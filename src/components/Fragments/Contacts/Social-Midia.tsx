"use client";
import Link from "next/link";
import { FooterHeader } from "../../Footer/Footer-Header";
import { MIDIAS } from "../../Footer/midias";
import { motion } from "framer-motion";
import { Badge } from "../../ui/badge";

export function SocialMidia() {
  return (
    <FooterHeader className="lg:items-center">
      <div className="w-full flex  flex-wrap gap-4">
        {MIDIAS.map(({ Icon, href, text }, index) => (
          <motion.div
            key={index}
            initial={{ x: -100, scale: 0 }}
            whileInView={{ x: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            exit={{ x: -100, scale: 0 }}
            className="flex items-center "
          >
            <Link
              target="_blank"
              className="flex items-center transition-all"
              href={href}
            >
              <Badge className="border bg-zinc-800 transition-all text-white hover:bg-blue-800/50 cursor-pointer rounded-md flex items-center justify-center space-x-2 py-2 px-3">
                <span className="text-lg  font-normal">{text}</span>
                <Icon className="text-white" size={18} />
              </Badge>
            </Link>
          </motion.div>
        ))}
      </div>
    </FooterHeader>
  );
}
