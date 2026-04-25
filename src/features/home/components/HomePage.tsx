import { NavBar } from "./NavBar";
import { HeroSection } from "./HeroSection";
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
