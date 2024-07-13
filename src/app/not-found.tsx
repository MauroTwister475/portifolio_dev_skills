import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between">
      <h1 className="text-6xl text-slate-400 text-center font-bold">
        404
      </h1>
      <Footer/>
    </div>
  )
}
