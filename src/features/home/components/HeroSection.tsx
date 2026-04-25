import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/shared/config/routes";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-barn-white">
      {/* Atmosphere gradients */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute right-0 top-0 h-3/4 w-3/5"
          style={{
            background:
              "radial-gradient(ellipse at top right, rgba(232,180,188,0.24) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 h-1/2 w-2/5"
          style={{
            background:
              "radial-gradient(ellipse at bottom left, rgba(189,219,230,0.20) 0%, transparent 62%)",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12">
        {/* ── Text column ─────────────────────────────────────── */}
        <div
          className="relative z-10 py-16 lg:py-20 lg:pr-10"
          style={{ animation: "fadeSlideUp 0.7s ease both" }}
        >
          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-10 bg-rustic-brown/35" />
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-rustic-brown/75">
              Nail Studio · By Appointment
            </p>
          </div>
          <p className="text-4xl text-blush pb-2 mb-8 sm:text-5xl">Step Inside</p>
          <h1 className="font-script no-wrap whitespace-nowrap text-5xl leading-[0.88] text-rustic-brown sm:text-6xl lg:text-7xl">
            The Glam Barn.
          </h1>

          <p className="mt-7 max-w-lg font-sans text-lg leading-relaxed text-neutral-600">
            A cozy nail studio with an eye for every detail. Premium nail care crafted by hand in
            a warm, welcoming space — because beautiful nails deserve a beautiful experience.
          </p>

          <div className="mt-9 flex flex-wrap gap-3.5">
            <Link
              href={ROUTES.BOOK}
              className="inline-flex items-center justify-center rounded-full bg-rustic-brown px-8 py-3.5 font-sans text-sm font-semibold text-white transition-colors hover:bg-rustic-brown-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rustic-brown focus-visible:ring-offset-2"
            >
              Book Your Visit
            </Link>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border-2 border-rustic-brown/25 px-8 py-3.5 font-sans text-sm font-semibold text-rustic-brown transition-all hover:border-rustic-brown hover:bg-rustic-brown/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rustic-brown focus-visible:ring-offset-2"
            >
              Explore Services
            </a>
          </div>

          <p className="mt-8 font-sans text-xs uppercase tracking-[0.22em] text-rustic-brown/50">
            Premium Products · Personalized Care
          </p>
        </div>

        {/* ── Illustration column ──────────────────────────────── */}
        <div className="relative z-10 flex items-center justify-center pb-10 pt-2 lg:py-0">
          {/* Soft blush glow behind barn */}
          <div
            aria-hidden="true"
            className="absolute inset-12 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(232,180,188,0.38) 0%, rgba(245,239,230,0.18) 52%, transparent 72%)",
              filter: "blur(28px)",
            }}
          />

          {/* Decorative outer ring */}
          <div
            aria-hidden="true"
            className="absolute inset-4 rounded-full border border-rustic-brown/10"
          />

          {/* Barn illustration — floating */}
          <div
            className="relative"
            style={{ animation: "heroFloat 7s ease-in-out infinite" }}
          >
            <Image
              src="/barn.png"
              alt="The Glam Barn — a cozy nail studio illustrated as a rustic barn"
              width={560}
              height={560}
              className="w-full max-w-sm drop-shadow-[0_24px_64px_rgba(139,96,64,0.18)] sm:max-w-md lg:max-w-lg"
              priority
            />
          </div>

          {/* Floating availability card — bottom left */}
          <div className="absolute bottom-8 left-4 hidden rounded-2xl border border-rustic-brown/10 bg-white/90 px-5 py-3 shadow-lg backdrop-blur-sm sm:block lg:bottom-20">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-rustic-brown/60">
              Now Booking
            </p>
            <p className="mt-0.5 font-sans text-sm font-medium text-neutral-700">
              Appointments available online
            </p>
          </div>

          {/* Accent pill — top right */}
          <div className="absolute right-4 top-8 hidden rounded-full border border-sky-mist-dark/70 bg-sky-mist-dark/45 px-4 py-2 backdrop-blur-sm sm:block lg:top-20">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-rustic-brown">
              ✦ Nails You&apos;ll Love
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
