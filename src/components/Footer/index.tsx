import { Logo } from "../Logo";
import { CopyRight } from "./Copy-Right";

export function Footer() {
  return (
    <footer className="w-full flex border-t border-zinc-900 flex-col bg-[#0E1012] py-8 px-14 lg:px-24 gap-2">
      <Logo size={30} />
      <CopyRight />
    </footer>
  );
}
