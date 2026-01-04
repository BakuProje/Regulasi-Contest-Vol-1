import { ChevronRight } from "lucide-react";
import type { Regulation } from "@/data/regulations";

interface CategoryCardProps {
  regulation: Regulation;
  index: number;
  onClick: () => void;
}

export function CategoryCard({ regulation, index, onClick }: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className="group w-full text-left glass-card rounded-xl p-5 transition-all duration-300 hover:scale-[1.02] hover:glow-fire border border-border/50 hover:border-primary/50"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/20 text-primary font-display text-lg flex items-center justify-center">
              {index + 1}
            </span>
            <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
              {regulation.title.replace(/^[IVXLCDM]+\.\s*KATEGORI\s*/i, "")}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-1 pl-11">
            {regulation.subtitle}
          </p>
        </div>
        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
      </div>
    </button>
  );
}
