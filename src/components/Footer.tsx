import logo5tl from "@/assets/logo-5tl.png";

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 justify-center md:justify-start w-full md:w-auto">
          <img src={logo5tl} alt="5TL Makassar" className="w-12 h-12 object-contain" />
          <div className="text-left">
            <p className="font-display text-lg text-foreground">5TL MAKASSAR</p>
            <p className="text-xs text-muted-foreground">Fun Bike Contest Vol 1</p>
          </div>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-sm text-muted-foreground">
           © Contest Vol 1 2026.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Makassar, Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
