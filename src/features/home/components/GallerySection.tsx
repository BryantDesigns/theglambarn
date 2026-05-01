"use client";

import Image from "next/image";
import { useState } from "react";

const allImages = [
  "/IMG_4471.jpeg",
  "/IMG_4706.jpeg",
  "/IMG_4906.jpeg",
  "/IMG_4983.jpeg",
  "/IMG_5577.jpeg",
  "/IMG_6204.jpeg",
  "/IMG_6297.jpeg",
  "/IMG_6337.jpeg",
  "/IMG_6742.jpeg",
  "/IMG_6954.jpeg",
  "/IMG_7371.jpeg",
  "/IMG_7472.jpeg",
  "/IMG_7685.jpeg",
  "/IMG_7702.jpeg",
];

const PER_PAGE = 6;

export function GallerySection() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(allImages.length / PER_PAGE);
  const images = allImages.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  const goTo = (next: number) => {
    setPage(next);
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="gallery" className="bg-sky-mist py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-script text-4xl text-rustic-brown sm:text-5xl">
            Our Work
          </h2>
          <p className="mt-4 font-sans text-lg text-neutral-700">
            A glimpse at what we create — every set is one of a kind.
          </p>
        </div>

        {/* Masonry grid */}
        <div key={page} className="mt-12 columns-2 gap-3 sm:columns-3 animate-fade-slide-up">
          {images.map((src, i) => (
            <div
              key={src}
              className="group mb-3 break-inside-avoid overflow-hidden rounded-2xl"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={src}
                  alt={`Glam Barn nail design ${page * PER_PAGE + i + 1}`}
                  width={600}
                  height={750}
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="w-full object-cover transition duration-500 group-hover:scale-105"
                  priority={page === 0 && i < 3}
                />
                <div className="absolute inset-0 bg-rustic-brown/0 transition duration-300 group-hover:bg-rustic-brown/10" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={() => goTo(Math.max(0, page - 1))}
              disabled={page === 0}
              aria-label="Previous page"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-rustic-brown/40 font-sans text-rustic-brown transition hover:bg-rustic-brown hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              ←
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Page ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === page
                      ? "h-3 w-3 bg-rustic-brown"
                      : "h-2.5 w-2.5 bg-rustic-brown/30 hover:bg-rustic-brown/60"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => goTo(Math.min(totalPages - 1, page + 1))}
              disabled={page === totalPages - 1}
              aria-label="Next page"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-rustic-brown/40 font-sans text-rustic-brown transition hover:bg-rustic-brown hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              →
            </button>
          </div>
        )}

        <p className="mt-10 text-center font-sans text-sm text-neutral-600">
          Follow us on Instagram{" "}
          <a
            href="https://instagram.com/theglambarnnails"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-rustic-brown hover:underline"
          >
            @theglambarnnails
          </a>{" "}
          for daily nail inspo.
        </p>
      </div>
    </section>
  );
}
