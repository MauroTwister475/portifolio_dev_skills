"use client";
import { useState } from "react";
import { Equal, X } from "lucide-react";
import { HEADERLINKS } from "@/constants/header-links";
import { NextLink } from "@/components/Link-Item";
import { Logo } from "@/components/Logo";

export function MenuMobile() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="lg:hidden w-max ">
        <Equal
          className="text-slate-400 cursor-pointer"
          size={36}
          onClick={() => setOpenMenu(true)}
        />
      </div>
      {openMenu && (
        <div className="lg:hidden w-screen bg-[#0E1012] h-screen flex items-center justify-center py-24 absolute top-0 right-0 left-0 bottom-0 transition-all">
          <div className="w-full flex justify-between items-center absolute top-4 px-5">
            <Logo className="text-white" size={40} />
            <X
              size={38}
              className="text-slate-500 cursor-pointer "
              onClick={() => setOpenMenu(false)}
            />
          </div>
          <ul className="flex flex-col gap-8 items-center justify-center">
            {HEADERLINKS.map((link) => (
              <NextLink
                key={link.href}
                href={link.href}
                className="text-white font-medium text-xl hover:text-blue-600"
                onClick={() => setOpenMenu(false)}
              >
                {link.name}
              </NextLink>
            ))}
          </ul>
          <div className="w-full absolute bottom-4 px-5 text-center py-1">
            <span className="text-slate-300 text-sm">
              Mauro Dinis Raimundo &copy; 2024.
            </span>
          </div>
        </div>
      )}
    </>
  );
}