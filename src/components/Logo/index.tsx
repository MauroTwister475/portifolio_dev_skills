import Link from "next/link";
import { CodeXml } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 30, className }: LogoProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      <CodeXml className='text-blue-700' size={size} />
      <Link href="/" className={twMerge('flex flex-col text-white', className)}>
        <h1 className=' font-bold text-xl'>MDR</h1>
        <small className="text-[0.6rem] font-thin">
          Desenvolvedor Web
        </small>
      </Link>
    </div>
  );
}
