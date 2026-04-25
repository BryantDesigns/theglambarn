import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/shared/config/routes";

export function HeroSectionV2() {
    return (
        <section className="relative overflow-hidden bg-sky-mist">
            {/* Soft top light */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 130% 55% at 50% 0%, rgba(255,255,255,0.25) 0%, transparent 100%)",
                }}
            />

            <div className="relative mx-auto grid max-w-7xl lg:min-h-[640px] lg:grid-cols-[2fr_3fr]">

                {/* ── Text column ───────────────────────────────────────── */}
                <div
                    className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-12 lg:py-24"
                    style={{ animation: "fadeSlideUp 0.6s ease both" }}
                >
                    {/* Eyebrow */}
                    <div className="mb-8 inline-flex items-center gap-2 self-start rounded-full border border-white/55 bg-white/35 px-4 py-1.5 backdrop-blur-sm">
                        <span className="text-[10px] text-rustic-brown/50">✦</span>
                        <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-rustic-brown/75">
                            Nail Studio · By Appointment
                        </p>
                    </div>

                    {/* Headline */}
                    <p
                        className="font-sans mb-8 text-4xl text-rustic-brown"
                        style={{ animation: "fadeSlideUp 0.5s 0.1s ease both" }}
                    >
                        Step Inside
                    </p>
                    <h1
                        className="font-script mt-1 text-6xl no-wrap whitespace-nowrap leading-none text-blush sm:text-7xl lg:text-8xl"
                        style={{ animation: "fadeSlideUp 0.5s 0.2s ease both" }}
                    >
                        The Barn.
                    </h1>

                    {/* Body */}
                    <p
                        className="mt-7 max-w-sm font-sans text-base leading-relaxed text-rustic-brown/75"
                        style={{ animation: "fadeSlideUp 0.5s 0.3s ease both" }}
                    >
                        Premium nail care crafted by hand in a warm, welcoming space — because beautiful nails deserve a beautiful experience.
                    </p>

                    {/* CTAs */}
                    <div
                        className="mt-9 flex flex-wrap gap-3.5"
                        style={{ animation: "fadeSlideUp 0.5s 0.4s ease both" }}
                    >
                        <Link
                            href={ROUTES.BOOK}
                            className="inline-flex items-center justify-center rounded-full bg-rustic-brown px-8 py-3.5 font-sans text-sm font-semibold text-white transition-colors hover:bg-rustic-brown-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rustic-brown focus-visible:ring-offset-2 focus-visible:ring-offset-sky-mist"
                        >
                            Book Your Visit
                        </Link>
                        <a
                            href="#services"
                            className="inline-flex items-center justify-center rounded-full border border-white/55 bg-white/35 px-8 py-3.5 font-sans text-sm font-semibold text-rustic-brown backdrop-blur-sm transition-all hover:bg-white/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rustic-brown focus-visible:ring-offset-2 focus-visible:ring-offset-sky-mist"
                        >
                            Explore Services
                        </a>
                    </div>

                    {/* Tagline */}
                    <p
                        className="mt-8 font-sans text-xs uppercase tracking-[0.22em] text-rustic-brown/45"
                        style={{ animation: "fadeSlideUp 0.5s 0.5s ease both" }}
                    >
                        Premium Products · Personalized Care
                    </p>
                </div>

                {/* ── Barn column ───────────────────────────────────────── */}
                <div
                    className="relative flex items-center justify-center pb-6 pt-0 lg:items-end lg:pb-0"
                    style={{ animation: "fadeSlideUp 0.7s 0.2s ease both" }}
                >
                    <div
                        className="relative w-full"
                        style={{ animation: "heroFloat 7s ease-in-out infinite" }}
                    >
                        <Image
                            src="/barn.png"
                            alt="The Glam Barn nail studio illustrated as a rustic watercolor barn"
                            width={700}
                            height={700}
                            className="mx-auto w-full max-w-xs drop-shadow-[0_24px_60px_rgba(139,96,64,0.20)] sm:max-w-sm lg:max-w-none"
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
