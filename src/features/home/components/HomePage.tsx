import { NavBar } from "./NavBar";
import { HeroSection } from "./HeroSection";
import { TaglineBand } from "./TaglineBand";
import { ServicesSection } from "./ServicesSection";
import { GallerySection } from "./GallerySection";
import { GallerySectionV2 } from "./GallerySectionV2";
import { GallerySectionV3 } from "./GallerySectionV3";
import { CTABanner } from "./CTABanner";
import {
  CTABannerV2,
  CTABannerV3,
  CTABannerV4,
  CTABannerV5,
} from "./CTABannerVariants";
import { Footer } from "./Footer";

// Experimental components
import { ScreenshotTransition } from "./experimental/ScreenshotTransition";
import { PhotoCinemaSection } from "./experimental/PhotoCinemaSection";
import { SplitPhotoStatement } from "./experimental/SplitPhotoStatement";
import { StatsRibbon } from "./experimental/StatsRibbon";
import { TestimonialPhoto } from "./experimental/TestimonialPhoto";
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

        <VersionLabel
          label="Our Work — Version 1"
          description="Masonry grid with pagination (current)"
        />
        <GallerySection />

        <VersionLabel
          label="Our Work — Version 2"
          description="Horizontal filmstrip carousel"
        />
        <GallerySectionV2 />

        <VersionLabel
          label="Our Work — Version 3"
          description="Bento mosaic — all images at once"
        />
        
        <GallerySectionV3 />

<VersionLabel
          label="Experimental 1"
          description="Screenshot transition — photo dissolves seamlessly into Gallery Section V2 (bg-barn-white)"
        />
        <ScreenshotTransition />
        {/* ── Experimental components ── */}

        

        

        
        <VersionLabel
          label="Experimental 2"
          description="Mood collage — scattered polaroid photos with Instagram CTA"
        />
        <MoodCollage />
         

        <VersionLabel
          label="CTA Banner — Version 1"
          description="Centered on rustic-brown (current)"
        />
        <CTABanner />

        <VersionLabel
          label="CTA Banner — Version 2"
          description="Split editorial — blush left panel + cream right"
        />
        <CTABannerV2 />

        <VersionLabel
          label="CTA Banner — Version 3"
          description="Oversized magazine typography — giant ghost script on barn-white"
        />
        <CTABannerV3 />

        <VersionLabel
          label="CTA Banner — Version 4"
          description="Moody dark luxury — espresso bg, blush glow, diamond ornament"
        />
        <CTABannerV4 />

        <VersionLabel
          label="CTA Banner — Version 5"
          description="Justified two-column — sky-mist accents, dual CTAs"
        />
        <CTABannerV5 />
      </main>
      <Footer />
    </>
  );
}
