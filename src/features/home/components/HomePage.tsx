import { NavBar } from "./NavBar";
import { HeroSection } from "./HeroSection";
import { TaglineBand } from "./TaglineBand";
import { ServicesSection } from "./ServicesSection";
import { GallerySectionV2 } from "./GallerySectionV2";
import { CTABanner } from "./CTABanner";
import { Footer } from "./Footer";
import { MoodCollage } from "./experimental/MoodCollage";

function VersionLabel({ label, description }: { label: string; description: string }) {
  return (
    <div className="flex items-center gap-4 bg-rustic-brown px-6 py-3 lg:px-8">
      <span className="font-sans text-xs font-bold uppercase tracking-widest text-white/60">
        {label}
      </span>
      <span className="h-px flex-1 bg-white/20" />
      <span className="font-sans text-xs text-white/70">{description}</span>
    </div>
  );
}

export function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <TaglineBand />
        <ServicesSection />
        <GallerySectionV2 />
        <MoodCollage />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
