"use client";

import Image from "next/image";

// 2. SPLIT STATEMENT — Magazine two-column spread.
//    Left: nail photo bleeds to edge, horizontal gradient fades it into cream.
//    Right: bold editorial statement on cream.
export function SplitPhotoStatement() {
  return (
    <section className="overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-none grid-cols-1 lg:grid-cols-2">
        {/* Photo side */}
        <div className="relative h-80 lg:h-auto lg:min-h-[600px]">
          <Image
            src="/IMG_6742.jpeg"
            alt="Intricate nail art"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
          {/* Fade to cream on the right (desktop) and bottom (mobile) */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cream lg:bg-gradient-to-r lg:from-transparent lg:to-cream" />
        </div>

        {/* Statement side */}
        <div className="flex flex-col justify-center px-8 py-16 lg:px-16 lg:py-24">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-rustic-brown/50">
            The Glam Barn difference
          </span>

          <h2 className="font-script mt-4 text-5xl leading-tight text-rustic-brown sm:text-6xl">
            You deserve<br />nails that turn<br />heads.
          </h2>

          <div className="mt-8 space-y-4 font-sans text-neutral-600">
            <p className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blush text-xs font-bold text-rustic-brown">✓</span>
              Custom nail art — no templates, ever
            </p>
            <p className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blush text-xs font-bold text-rustic-brown">✓</span>
              Premium gel & acrylic products only
            </p>
            <p className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blush text-xs font-bold text-rustic-brown">✓</span>
              Insured, experienced nail artist
            </p>
          </div>

          <a
            href="#services"
            className="mt-10 inline-flex w-fit items-center gap-2 border-b-2 border-rustic-brown pb-1 font-sans text-sm font-semibold text-rustic-brown transition hover:gap-4"
          >
            See all services <span aria-hidden>→</span>
          </a>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="h-16 bg-gradient-to-b from-cream to-barn-white" />
    </section>
  );
}
