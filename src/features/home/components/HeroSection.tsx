import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/shared/config/routes";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
            {/* Sky-mist → cream gradient: holds sky-mist on the left, transitions to cream at 2/3 */}
            <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(to right, #BDDBE6 0%, #BDDBE6 22%, #F5EFE6 66%)",
                }}
            />

            {/* Soft warm light on cream zone */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 55% 90% at 88% 45%, rgba(255,255,255,0.40) 0%, transparent 70%)",
                }}
            />

            {/* Subtle top vignette */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(255,255,255,0.18) 0%, transparent 30%)",
                }}
            />

            {/* Grain texture */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.035] [background-size:160px]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />

            <div className="relative mx-auto max-w-7xl lg:min-h-[700px]">

                {/* Barn — flex container handles centering; no w-full on image so justify-center has free space */}
                <div
                    aria-hidden="true"
                    className="flex items-center justify-center pb-4 animate-hero-float lg:absolute lg:inset-y-0 lg:left-0 lg:w-[55%] lg:pb-0"
                >
                    <Image
                        src="/barn.png"
                        alt="The Glam Barn nail studio illustrated as a rustic watercolor barn"
                        width={660}
                        height={660}
                        className="max-w-sm drop-shadow-[0_24px_64px_rgba(139,96,64,0.18)] sm:max-w-md lg:max-w-xl"
                        priority
                    />
                </div>

                {/* Text column */}
                <div className="relative z-10 flex flex-col justify-center px-6 py-16 animate-fade-slide-up sm:px-10 lg:ml-auto lg:w-[48%] lg:py-24 lg:pl-6 lg:pr-16">

                    {/* Eyebrow badge */}
                    <div className="mb-6 inline-flex items-center gap-2 self-start rounded-full border border-rustic-brown/18 bg-rustic-brown/7 px-3.5 py-1.5 animate-fade-slide-up [animation-delay:50ms]">
                        <span className="text-[8px] text-blush">✦</span>
                        <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-rustic-brown/60">
                            Nail Studio · By Appointment
                        </p>
                    </div>

                    {/* Overline */}
                    <p className="font-sans text-xl font-medium uppercase tracking-[0.4em] text-rustic-brown animate-fade-slide-up [animation-delay:100ms]">
                        Step Inside
                    </p>

                    {/* Ornament divider */}
                    <div className="my-3 flex items-center gap-3 animate-fade-slide-up [animation-delay:150ms]">
                        <div className="h-px flex-1 bg-gradient-to-r from-blush/50 to-transparent" />
                        <span className="text-lg text-blush">✦</span>
                        <div className="h-px flex-1 bg-gradient-to-l from-blush/50 to-transparent" />
                    </div>

                    {/* Headline */}
                    <h1 className="font-script mt-2 text-4xl leading-none text-blush animate-fade-slide-up sm:text-5xl lg:text-6xl [animation-delay:200ms]">
                        The Glam Barn.
                    </h1>

                    {/* Body */}
                    <p className="mt-6 max-w-sm font-sans text-sm leading-relaxed text-rustic-brown/75 animate-fade-slide-up [animation-delay:300ms]">
                        Premium nail care crafted by hand in a warm, welcoming space — because beautiful nails deserve a beautiful experience.
                    </p>

                    {/* Thin rule */}
                    <div className="my-6 h-px bg-gradient-to-r from-rustic-brown/25 to-transparent animate-fade-slide-up [animation-delay:350ms]" />

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-3 animate-fade-slide-up [animation-delay:400ms]">
                        <Link
                            href={ROUTES.BOOK}
                            className="inline-flex items-center justify-center rounded-full bg-rustic-brown px-7 py-3 font-sans text-sm font-semibold text-white shadow-[0_4px_18px_rgba(139,96,64,0.32)] transition-all hover:bg-rustic-brown-dark hover:shadow-[0_4px_24px_rgba(139,96,64,0.48)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rustic-brown focus-visible:ring-offset-2"
                        >
                            Book Your Visit
                        </Link>
                        <a
                            href="#services"
                            className="inline-flex items-center justify-center rounded-full border border-rustic-brown/28 px-7 py-3 font-sans text-sm font-semibold text-rustic-brown transition-all hover:border-rustic-brown/45 hover:bg-rustic-brown/6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rustic-brown focus-visible:ring-offset-2"
                        >
                            Explore Services
                        </a>
                    </div>

                    {/* Tagline */}
                    <p className="mt-7 font-sans text-sm uppercase tracking-[0.25em] text-rustic-brown/38 animate-fade-slide-up [animation-delay:500ms]">
                        Premium Products · Personalized Care
                    </p>

                </div>

            </div>
        </section>
  );
}
