import { X, Check, Ban } from "lucide-react";
import type { Regulation } from "@/data/regulations";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface RegulationModalProps {
  regulation: Regulation | null;
  isOpen: boolean;
  onClose: () => void;
}

export function RegulationModal({ regulation, isOpen, onClose }: RegulationModalProps) {
  if (!regulation) return null;

  const getRuleIcon = (rule: string) => {
    const lowerRule = rule.toLowerCase();
    if (lowerRule.includes("dilarang") || lowerRule.includes("tidak boleh") || lowerRule.includes("tidak menjadi")) {
      return <Ban className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />;
    }
    return <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[85vh] p-0 glass-card border-border/50 overflow-hidden [&>button]:hidden">
        <DialogHeader className="p-6 pb-4 border-b border-border/50 bg-gradient-to-r from-primary/10 to-transparent">
          <div className="flex items-start justify-between gap-4">
            <div>
              <DialogTitle className="font-display text-2xl md:text-3xl text-gradient-fire mb-2">
                {regulation.title}
              </DialogTitle>
              <p className="text-muted-foreground text-sm">
                {regulation.subtitle}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh]">
          <div className="p-6 space-y-3">
            {regulation.rules.map((rule, index) => (
              <div
                key={index}
                className="flex gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                {getRuleIcon(rule)}
                <div className="flex gap-2 flex-1 min-w-0">
                  <span className="text-muted-foreground font-medium text-sm">
                    {index + 1}.
                  </span>
                  <p className="text-foreground/90 text-sm leading-relaxed">
                    {rule}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
