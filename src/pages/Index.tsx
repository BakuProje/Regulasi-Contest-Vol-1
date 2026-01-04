import { useState, useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { RegulationsSection } from "@/components/RegulationsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (!canScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [canScroll]);

  const handleUnlockScroll = () => {
    setCanScroll(true);
    document.getElementById("regulations")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background">
      <HeroSection onUnlockScroll={handleUnlockScroll} />
      <RegulationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
