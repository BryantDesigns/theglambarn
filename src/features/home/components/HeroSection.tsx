import Link from "next/link";
import { ROUTES } from "@/shared/config/routes";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-sky-mist">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-16 h-64 w-64 rounded-full bg-blush/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-24 h-72 w-72 rounded-full bg-rustic-brown/20 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-8 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-12 lg:py-20">
        <div className="relative z-10">
          <p className="inline-flex items-center rounded-full border border-rustic-brown/30 bg-white/60 px-4 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-rustic-brown">
            Nail Salon · Walk-Ins Welcome
          </p>
          <h1 className="mt-6 font-script text-[clamp(2.8rem,8vw,5.5rem)] leading-tight text-rustic-brown">
            Where Rustic Charm
            <br />
            Meets Luxe Nails
          </h1>
          <p className="mt-6 max-w-[34rem] font-sans text-lg leading-relaxed text-neutral-700">
            Handcrafted nail art and premium nail care in a warm, welcoming space. Because every detail matters — especially yours.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href={ROUTES.BOOK}
              className="inline-flex items-center justify-center rounded-full bg-rustic-brown px-8 py-3 font-sans text-sm font-semibold text-white transition hover:bg-rustic-brown-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rustic-brown focus-visible:ring-offset-2"
            >
              Book Appointment
            </Link>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border-2 border-rustic-brown px-8 py-3 font-sans text-sm font-semibold text-rustic-brown transition hover:bg-rustic-brown/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rustic-brown focus-visible:ring-offset-2"
            >
              View Services
            </a>
          </div>
          <p className="mt-6 font-sans text-sm italic text-rustic-brown/70">
            Premium products. Personalized care. Every visit.
          </p>
        </div>

        <div aria-hidden="true" className="relative z-10 mx-auto w-full max-w-[28rem]">
          <div className="absolute -inset-3 rounded-[2.15rem] border border-rustic-brown/15" />
          <div className="relative overflow-hidden rounded-[2rem] border border-rustic-brown/10 bg-white p-2 shadow-[0_28px_80px_-42px_rgba(183,110,121,0.45)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-blush-light via-cream to-blush" />
          </div>
          <div className="absolute -bottom-4 right-4 rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-lg backdrop-blur">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-rustic-brown/75">
              Walk-Ins Welcome
            </p>
            <p className="mt-1 font-sans text-sm text-neutral-700">
              No appointment needed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
