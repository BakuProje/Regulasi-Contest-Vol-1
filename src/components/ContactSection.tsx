import whatsappIcon from "@/assets/whatsapp.svg";
import instagramIcon from "@/assets/instagram.svg";
import tiktokIcon from "@/assets/tiktok.svg";

export function ContactSection() {
  return (
    <section className="py-20 px-4 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-4">
            <span className="text-gradient-cyan">HUBUNGI</span>{" "}
            <span className="text-foreground">KAMI</span>
          </h2>
          <p className="text-muted-foreground">
            Ikuti social media kami atau hubungi admin untuk informasi lebih lanjut
          </p>
        </div>

        {/* Social Media & Admin Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Admin WhatsApp */}
          <a
            href="https://wa.me/6281228019788?text=Halo%20Admin,%20saya%20maunya%20terkait%20regulasi%20Fun%20Bike%20Contest%20"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-xl p-6 text-center transition-all hover:scale-105 hover:glow-cyan border border-border/50 hover:border-secondary/50 group"
          >
            <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <img src={whatsappIcon} alt="WhatsApp" className="w-10 h-10" />
            </div>
            <h3 className="font-semibold text-foreground">Hubungi Admin</h3>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/5tl_makassar"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-xl p-6 text-center transition-all hover:scale-105 hover:glow-cyan border border-border/50 hover:border-secondary/50 group"
          >
            <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <img src={instagramIcon} alt="Instagram" className="w-10 h-10 rounded-lg" />
            </div>
            <h3 className="font-semibold text-foreground">Instagram</h3>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@5tl_makassar"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-xl p-6 text-center transition-all hover:scale-105 hover:glow-cyan border border-border/50 hover:border-secondary/50 group"
          >
            <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <img src={tiktokIcon} alt="TikTok" className="w-10 h-10" />
            </div>
            <h3 className="font-semibold text-foreground">TikTok</h3>
          </a>
        </div>
      </div>
    </section>
  );
}
