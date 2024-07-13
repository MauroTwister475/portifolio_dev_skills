import { Badge } from "../ui/badge";

interface BadgeTechProps {
  tech: string;
}

export function BadgeTech({ tech }: BadgeTechProps) {
  return (
    <Badge className="cursor-pointer bg-blue-800/50 transition-all rounded-md flex items-center justify-center space-x-2 py-1.5 px-3">
      <span className="text-base text-white font-normal">{tech}</span>
    </Badge>
  );
}
