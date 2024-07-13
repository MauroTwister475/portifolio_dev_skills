"use client";
import { ArrowUp } from "lucide-react";
import { ButtonPrimary } from "./primary";
import { AnimatePresence, motion } from "framer-motion";
import { useActiveLink } from "@/hooks/use-active-link";

export function ButtonBackTop() {
  const { setIsActive, isActive } = useActiveLink();

  return (
    // <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, right: -10 }}
      animate={{ opacity: 1, right: 16 }}
      exit={{ opacity: 0, right: -10 }}
    >
      <ButtonPrimary
        Icon={ArrowUp}
        className="w-10 h-10 md:w-10 md:h-10 lg:w-10 lg:h-10 px-1 py-0 absolute animate-bounce bottom-2 right-4 shadow-md transition-all"
        onClick={() => setIsActive("#about_me")}
      />
    </motion.div>
    // </AnimatePresence>
  );
}
