"use client"
import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Contacts } from "@/components/Fragments/Contacts";
import { SkillsSection } from "@/components/Fragments/Skills";
import { useEffect } from "react";
import { Projects } from "@/components/Fragments/Projects";
import { useActiveLink } from "@/hooks/use-active-link";

export default function Home() {
  const { setIsActive } = useActiveLink();
  
  useEffect(() => {
    setIsActive("#about_me");
  }, [])

  return (
    <main className="w-full h-full flex flex-col items-center bg-[#0E1012] overflow-x-hidden">
      <Banner />
      <SkillsSection />
      <Projects />
      <Contacts />
      <Footer />
      {/* <ButtonBackTop /> */}
    </main>
  );
}