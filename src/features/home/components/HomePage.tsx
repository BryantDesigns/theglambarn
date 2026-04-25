import { NavBar } from "./NavBar";
import { HeroSection } from "./HeroSection";
import { HeroSectionV2 } from "./HeroSectionV2";
import { HeroSectionV3 } from "./HeroSectionV3";
import { TaglineBand } from "./TaglineBand";
import { ServicesSection } from "./ServicesSection";
import { GallerySection } from "./GallerySection";
import { TestimonialsSection } from "./TestimonialsSection";
import { CTABanner } from "./CTABanner";
import { Footer } from "./Footer";

export function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <HeroSectionV2 />
        <HeroSectionV3 />
        <TaglineBand />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
