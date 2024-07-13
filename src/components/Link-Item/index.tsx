import { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { twMerge } from "tailwind-merge";

interface NextLinkProps extends LinkProps {
  href: string;
  children: ReactNode | string;
  isActive?: boolean;
  className?: string;
}

export function NextLink({ href, children, isActive = false,className, ...rest }: NextLinkProps) {
  console.log("CUrrent href = "+href)

  return (
    <Link 
      href={href} 
      data-active={isActive}  
      className={twMerge('text-white rounded-md data-[active=true]:text-blue-700 hover:text-blue-800 data-[active=true]:font-medium transition-all', className)}
      {...rest}
    >
      <span>{children}</span>
    </Link>
  )
}
