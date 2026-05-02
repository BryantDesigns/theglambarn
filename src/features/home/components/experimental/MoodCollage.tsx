"use client";

import Image from "next/image";

const photos = [
  { src: "/IMG_4471.jpeg", label: "Soft glam" },
  { src: "/IMG_6337.jpeg", label: "Bold art" },
  { src: "/IMG_7472.jpeg", label: "French tips" },
];

// 5. MOOD COLLAGE — Three overlapping photos arranged like scattered polaroids on a
//    cream canvas. A "Find us on Instagram" callout floats at the bottom.
//    Top & bottom gradient ties it into surrounding sections.
export function MoodCollage() {
  return (
    <section className="relative overflow-hidden bg-cream py-24">
      {/* Top tie-in */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-barn-white to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-rustic-brown/50">
            Fresh drops weekly
          </span>
          <h2 className="font-script mt-6 text-4xl text-rustic-brown sm:text-5xl">
            Follow the journey.
          </h2>
        </div>

        {/* Collage */}
        <div className="relative mx-auto mt-16 flex h-72 max-w-2xl items-center justify-center sm:h-96">
          {/* Left photo — tilted */}
          <div
            className="absolute left-0 h-52 w-36 overflow-hidden rounded-xl shadow-2xl sm:h-72 sm:w-48"
            style={{ transform: "rotate(-6deg) translateX(-10px)" }}
          >
            <Image
              src={photos[0].src}
              alt={photos[0].label}
              fill
              sizes="200px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-rustic-brown/40 to-transparent p-3">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-white">
                {photos[0].label}
              </span>
            </div>
          </div>

          {/* Center photo — front, no tilt */}
          <div className="relative z-10 h-64 w-44 overflow-hidden rounded-xl shadow-2xl ring-4 ring-barn-white sm:h-80 sm:w-56">
            <Image
              src={photos[1].src}
              alt={photos[1].label}
              fill
              sizes="250px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-rustic-brown/50 to-transparent p-3">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-white">
                {photos[1].label}
              </span>
            </div>
          </div>

          {/* Right photo — tilted opposite */}
          <div
            className="absolute right-0 h-52 w-36 overflow-hidden rounded-xl shadow-2xl sm:h-72 sm:w-48"
            style={{ transform: "rotate(5deg) translateX(10px)" }}
          >
            <Image
              src={photos[2].src}
              alt={photos[2].label}
              fill
              sizes="200px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-rustic-brown/40 to-transparent p-3">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-white">
                {photos[2].label}
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="font-sans text-base text-neutral-600">
            See what we&rsquo;re creating right now.
          </p>
          <a
            href="https://instagram.com/theglambarnnails"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border-2 border-rustic-brown px-7 py-3 font-sans text-sm font-semibold text-rustic-brown transition hover:bg-rustic-brown hover:text-white"
          >
            {/* Instagram icon */}
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @theglambarnnails
          </a>
        </div>
      </div>

      {/* Bottom tie-in */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-cream-dark to-transparent" />
    </section>
  );
}
