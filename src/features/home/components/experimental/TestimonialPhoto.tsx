"use client";

import Image from "next/image";

// 4. TESTIMONIAL PHOTO — Nail photo on the right, bleeding off-screen with a horizontal
//    gradient fade back to blush-light. Large italic quote fills the left side.
//    Inspired by the "overlapping image" testimonial pattern.
export function TestimonialPhoto() {
  return (
    <section className="overflow-hidden bg-blush-light/40 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:px-8">
        {/* Quote side */}
        <div className="flex flex-col justify-center">
          {/* Decorative quote mark */}
          <svg
            className="h-10 w-10 text-blush"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>

          <blockquote className="mt-6">
            <p className="font-script text-3xl leading-relaxed text-rustic-brown sm:text-4xl">
              Bethany is the only person I trust with my nails. Every single time I leave feeling like a completely different person.
            </p>
          </blockquote>

          <figcaption className="mt-8 flex items-center gap-4">
            <div className="h-px w-8 bg-rustic-brown/30" />
            <div>
              <p className="font-sans text-sm font-semibold text-rustic-brown">Jessica R.</p>
              <p className="font-sans text-xs text-neutral-500">Client since 2022</p>
            </div>
          </figcaption>

          {/* Stars */}
          <div className="mt-6 flex gap-1" aria-label="5 stars">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="h-4 w-4 text-rustic-brown" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Photo side — bleeds right off container */}
        <div className="relative -mr-6 h-80 lg:-mr-8 lg:h-auto lg:min-h-[460px]">
          <Image
            src="/IMG_4906.jpeg"
            alt="Beautiful nail art"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="rounded-l-3xl object-cover object-top"
          />
          {/* Gradient fade to left (into blush-light bg) */}
          <div className="absolute inset-0 rounded-l-3xl bg-gradient-to-r from-blush-light/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
