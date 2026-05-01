"use client";

import Image from "next/image";

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

// Explicit grid placement — no auto-flow gaps
// 3-col grid, 7 rows of 240px each (gridAutoRows)
const placement: React.CSSProperties[] = [
  { gridColumn: "1 / 3", gridRow: "1 / 3" }, // 0 — wide tall (2×2)
  { gridColumn: "3 / 4", gridRow: "1 / 2" }, // 1 — square
  { gridColumn: "3 / 4", gridRow: "2 / 3" }, // 2 — square
  { gridColumn: "1 / 2", gridRow: "3 / 4" }, // 3 — square
  { gridColumn: "2 / 3", gridRow: "3 / 4" }, // 4 — square
  { gridColumn: "3 / 4", gridRow: "3 / 4" }, // 5 — square
  { gridColumn: "1 / 2", gridRow: "4 / 6" }, // 6 — tall (1×2)
  { gridColumn: "2 / 4", gridRow: "4 / 6" }, // 7 — wide tall (2×2)
  { gridColumn: "1 / 2", gridRow: "6 / 7" }, // 8 — square
  { gridColumn: "2 / 3", gridRow: "6 / 7" }, // 9 — square
  { gridColumn: "3 / 4", gridRow: "6 / 7" }, // 10 — square
  { gridColumn: "1 / 2", gridRow: "7 / 8" }, // 11 — square
  { gridColumn: "2 / 3", gridRow: "7 / 8" }, // 12 — square
  { gridColumn: "3 / 4", gridRow: "7 / 8" }, // 13 — square
];

const BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUE/8QAIxAAAQMEAgMBAAAAAAAAAAAAAQIDBAAFEiExQVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Amq9ycfRX37xNLSVlLjQyTbLbr7LiUJCQrYJVrQHpXO3G+PF2k3GJ8bSEoQFJCyUnZ69ADQooA//Z";

export function GallerySectionV3() {
  return (
    <section id="gallery" className="bg-blush-light/30 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-rustic-brown/30" />
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-rustic-brown/60">
              Portfolio
            </p>
            <span className="h-px w-12 bg-rustic-brown/30" />
          </div>
          <h2 className="font-script text-4xl text-rustic-brown sm:text-5xl">
            Our Work
          </h2>
          <p className="max-w-md font-sans text-base text-neutral-600">
            Every set is hand-crafted and one of a kind — here&rsquo;s a taste of what we&rsquo;ve made.
          </p>
        </div>

        {/* Bento grid — explicit placement, no gaps */}
        <div
          className="grid grid-cols-3 gap-2 sm:gap-3"
          style={{ gridAutoRows: "240px" }}
        >
          {allImages.map((src, i) => (
            <div
              key={src}
              style={placement[i]}
              className="group relative overflow-hidden rounded-2xl"
            >
              <Image
                src={src}
                alt={`Glam Barn nail design ${i + 1}`}
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 35vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
                placeholder="blur"
                blurDataURL={BLUR}
                priority={i < 3}
              />
              <div className="absolute inset-0 bg-blush/0 transition duration-300 group-hover:bg-blush/10" />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <p className="font-sans text-sm text-neutral-500">
            <span className="font-semibold text-rustic-brown">{allImages.length} looks</span> — and counting.
          </p>
          <p className="font-sans text-sm text-neutral-500">
            Follow{" "}
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
      </div>
    </section>
  );
}
