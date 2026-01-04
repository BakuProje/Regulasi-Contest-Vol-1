import { useState } from "react";
import { regulations } from "@/data/regulations";
import { CategoryCard } from "./CategoryCard";
import { RegulationModal } from "./RegulationModal";
import type { Regulation } from "@/data/regulations";

export function RegulationsSection() {
  const [selectedRegulation, setSelectedRegulation] = useState<Regulation | null>(null);

  return (
    <section id="regulations" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide mb-4">
            <span className="text-gradient-fire">KATEGORI</span>{" "}
            <span className="text-foreground">REGULASI</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pilih Kategori Untuk Melihat Detail Regulasi Fun Bike Contest Vol 1 2026
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {regulations.map((regulation, index) => (
            <CategoryCard
              key={regulation.id}
              regulation={regulation}
              index={index}
              onClick={() => setSelectedRegulation(regulation)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <RegulationModal
        regulation={selectedRegulation}
        isOpen={!!selectedRegulation}
        onClose={() => setSelectedRegulation(null)}
      />
    </section>
  );
}
