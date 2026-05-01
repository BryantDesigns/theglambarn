"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

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

export function GallerySectionV2() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  // Update active dot on scroll
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const handleScroll = () => {
      const itemWidth = track.firstElementChild
        ? (track.firstElementChild as HTMLElement).offsetWidth + 16
        : track.scrollWidth / allImages.length;
      setActiveIndex(Math.round(track.scrollLeft / itemWidth));
    };
    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const itemWidth = track.firstElementChild
      ? (track.firstElementChild as HTMLElement).offsetWidth + 16
      : track.scrollWidth / allImages.length;
    track.scrollTo({ left: i * itemWidth, behavior: "smooth" });
  };

  // Mouse drag-to-scroll
  const onMouseDown = (e: React.MouseEvent) => {
    const track = trackRef.current;
    if (!track) return;
    setIsDragging(false);
    dragStart.current = { x: e.clientX, scrollLeft: track.scrollLeft };
    const onMove = (ev: MouseEvent) => {
      const dx = ev.clientX - dragStart.current.x;
      if (Math.abs(dx) > 4) setIsDragging(true);
      track.scrollLeft = dragStart.current.scrollLeft - dx;
    };
    const onUp = () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      setTimeout(() => setIsDragging(false), 50);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  return (
    <section id="gallery" className="overflow-hidden bg-cream py-20">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans mb-8 text-xs font-semibold uppercase tracking-[0.25em] text-rustic-brown/60">
              Our Portfolio
            </p>
            <h2 className="font-script mt-2 text-4xl text-rustic-brown sm:text-5xl">
              Our Work
            </h2>
          </div>
          <p className="hidden font-sans text-sm text-neutral-500 sm:block">
            Drag to explore →
          </p>
        </div>

        {/* Counter */}
        <div className="mt-6 flex items-center gap-3">
          <span className="font-sans text-3xl font-light tabular-nums text-rustic-brown">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <div className="h-px flex-1 bg-rustic-brown/20">
            <div
              className="h-px bg-rustic-brown transition-all duration-500"
              style={{ width: `${((activeIndex + 1) / allImages.length) * 100}%` }}
            />
          </div>
          <span className="font-sans text-sm text-neutral-400">
            {String(allImages.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Filmstrip */}
      <div
        ref={trackRef}
        onMouseDown={onMouseDown}
        className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 pb-4 lg:px-8"
        style={{
          cursor: isDragging ? "grabbing" : "grab",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {allImages.map((src, i) => (
          <div
            key={src}
            className="group relative flex-none snap-center overflow-hidden rounded-3xl"
            style={{ width: "clamp(260px, 40vw, 440px)", aspectRatio: "3/4" }}
            onClick={() => !isDragging && scrollTo(i)}
          >
            <Image
              src={src}
              alt={`Glam Barn nail design ${i + 1}`}
              fill
              sizes="(max-width: 640px) 80vw, 40vw"
              className="object-cover transition duration-700 group-hover:scale-105"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUE/8QAIxAAAQMEAgMBAAAAAAAAAAAAAQIDBAAFEiExQVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Amq9ycfRX37xNLSVlLjQyTbLbr7LiUJCQrYJVrQHpXO3G+PF2k3GJ8bSEoQFJCyUnZ69ADQooA//Z"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-rustic-brown/40 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            {/* Index badge */}
            <div className="absolute bottom-4 left-4 opacity-0 transition duration-300 group-hover:opacity-100">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-white/90">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
        ))}
        {/* End spacer */}
        <div className="flex-none" style={{ width: "calc(clamp(260px, 40vw, 440px) * 0.5)" }} />
      </div>

      {/* Dot nav */}
      <div className="mx-auto mt-6 max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-1.5">
          {allImages.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "h-2 w-6 bg-rustic-brown"
                  : "h-2 w-2 bg-rustic-brown/25 hover:bg-rustic-brown/50"
              }`}
            />
          ))}
        </div>

        <p className="mt-8 font-sans text-sm text-neutral-500">
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
