"use client";

import Image from "next/image";

const stats = [
  { value: "3+", label: "Years of experience" },
  { value: "500+", label: "Happy clients" },
  { value: "100%", label: "Custom designs" },
  { value: "10k+", label: "Instagram followers" },
];

// 3. STATS RIBBON — Nail photo as a wide panoramic background strip.
//    Left & right edges fade to barn-white. Stats sit on top in a frosted pill row.
//    Very transitional — works as a visual breathing room section.
export function StatsRibbon() {
  return (
    <section className="relative py-20">
      {/* Fade in from above */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-barn-white to-transparent" />

      {/* Background photo strip */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/IMG_5577.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        {/* Deep overlay so text is readable */}
        <div className="absolute inset-0 bg-rustic-brown/55" />
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-barn-white to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-barn-white to-transparent" />
      </div>

      {/* Stats */}
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <span className="font-script text-5xl text-white drop-shadow">
                {s.value}
              </span>
              <span className="mt-2 font-sans text-xs font-semibold uppercase tracking-widest text-white/70">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Fade out below */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-barn-white to-transparent" />
    </section>
  );
}
