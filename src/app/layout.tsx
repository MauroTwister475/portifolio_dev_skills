import Poppins from "next/font/local";
import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  src: "../assets/fonts/poppins.ttf",
  weight: "medium",
  fallback: ["Carregando Font"],
});

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html lang="en" className="w-screen h-screen antialiased scroll-smooth overflow-hidden">
      <body
        className={`${poppins.className} w-screen h-screen antialiased scroll-smooth bg-[#0E1012]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
