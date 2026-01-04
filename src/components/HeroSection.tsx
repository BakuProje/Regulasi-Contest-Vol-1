import heroBackground from "@/assets/hero-background.png";
import heroBackgroundPc from "@/assets/hero-background-pc.png";
import logo5tl from "@/assets/logo-5tl.png";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onUnlockScroll: () => void;
}

export function HeroSection({ onUnlockScroll }: HeroSectionProps) {

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image - Mobile */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Background Image - Desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{ backgroundImage: `url(${heroBackgroundPc})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <img
          src={logo5tl}
          alt="5TL Makassar Logo"
          className="w-64 md:w-80 lg:w-96 animate-float drop-shadow-2xl mb-6"
        />

        {/* Title */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-wider mb-4">
          <span className="text-gradient-fire">CONTEST VOL 1 2026</span>
        </h1>

        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-2">
          Regulasi Resmi Fun Bike Contest Vol 1
        </p>

        <p className="text-muted-foreground text-sm md:text-base mb-8">
          16 Kategori • Makassar, Indonesia
        </p>

        {/* CTA Button */}
        <button
          onClick={onUnlockScroll}
          className="group flex flex-col items-center gap-2 transition-all hover:scale-105"
        >
          <span className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-lg glow-fire animate-pulse-glow hover:bg-primary/90 transition-colors">
            Lihat Regulasi
          </span>
          <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
        </button>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
