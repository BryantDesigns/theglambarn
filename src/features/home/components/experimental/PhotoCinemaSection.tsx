"use client";

import Image from "next/image";

// 1. CINEMA REVEAL — Full-bleed nail photo that bleeds edge to edge,
//    cream gradient fading it out top & bottom so it floats between sections.
//    Text sits centered over the photo.
export function PhotoCinemaSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-bleed photo */}
      <div className="relative h-[70vh] min-h-[480px] w-full">
        <Image
          src="/IMG_7685.jpeg"
          alt="Glam Barn nail art"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />

        {/* Top fade — matches bg-cream above */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-cream to-transparent" />

        {/* Bottom fade — matches bg-barn-white below */}
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-barn-white to-transparent" />

        {/* Vignette sides */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream/60 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream/60 to-transparent" />

        {/* Centered text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="rounded-full bg-barn-white/80 px-6 py-2 backdrop-blur-sm">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-rustic-brown/70">
              Handcrafted in every detail
            </p>
          </div>
          <h2 className="font-script mt-4 text-5xl text-rustic-brown drop-shadow-sm sm:text-6xl lg:text-7xl">
            Nails as art.
          </h2>
          <p className="mt-4 max-w-sm font-sans text-base text-neutral-700 drop-shadow-sm">
            Every shape, shade, and stone — chosen just for you.
          </p>
          <a
            href="#booking"
            className="mt-8 rounded-full bg-rustic-brown px-8 py-3 font-sans text-sm font-semibold text-white shadow-lg transition hover:bg-rustic-brown-dark"
          >
            Book your set →
          </a>
        </div>
      </div>
    </section>
  );
}
