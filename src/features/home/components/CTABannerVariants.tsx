import Link from "next/link";
import { ROUTES } from "@/shared/config/routes";

// ── Version 2: Split Editorial ────────────────────────────────────────────────
// Left blush panel with oversized ghost script / Right cream text + CTA
export function CTABannerV2() {
  return (
    <section className="overflow-hidden bg-cream">
      <div className="grid lg:grid-cols-2 min-h-[420px]">
        {/* Left — blush panel */}
        <div className="relative flex items-center justify-center bg-blush px-10 py-20">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden"
          >
            <span className="font-script text-[11rem] leading-none text-white/20 -rotate-12 whitespace-nowrap">
              Glam
            </span>
          </span>
          <div className="relative z-10 text-center">
            <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-rustic-brown/60">
              The Glam Barn
            </p>
            <p className="mt-4 font-script text-5xl text-rustic-brown">
              Beauty awaits
            </p>
          </div>
        </div>

        {/* Right — cream text panel */}
        <div className="flex flex-col items-start justify-center px-12 py-20 lg:px-16">
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-rustic-brown/50">
            Book your visit
          </p>
          <h2 className="mt-4 font-script text-5xl text-rustic-brown sm:text-6xl">
            Your moment
            <br />
            starts here.
          </h2>
          <p className="mt-5 max-w-xs font-sans text-base text-rustic-brown/65">
            From fresh cuts to full glam — reserve your chair online in
            seconds.
          </p>
          <Link
            href={ROUTES.BOOK}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-rustic-brown px-8 py-3.5 font-sans text-sm font-semibold text-white transition hover:bg-rustic-brown-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rustic-brown focus-visible:ring-offset-2"
          >
            Book Now
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Version 3: Oversized Magazine Typography ──────────────────────────────────
// Giant script bleeds off canvas; two-column bottom-anchored layout
export function CTABannerV3() {
  return (
    <section className="relative overflow-hidden bg-barn-white py-28">
      {/* Ghost headline watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden"
      >
        <span className="font-script text-[22vw] leading-none text-rustic-brown/[0.04] whitespace-nowrap">
          Book Now
        </span>
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto]">
          {/* Left — main headline */}
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-rustic-brown/45">
              Reserve your appointment
            </p>
            <h2 className="mt-6 font-script text-6xl leading-[1.05] text-rustic-brown sm:text-7xl lg:text-8xl">
              Treat yourself,
              <br />
              <span className="text-blush">beautifully.</span>
            </h2>
          </div>

          {/* Right — sub-copy + CTA, bottom-aligned */}
          <div className="flex flex-col items-start gap-5 lg:items-end lg:pb-3">
            <p className="max-w-[22ch] font-sans text-sm leading-relaxed text-rustic-brown/55 lg:text-right">
              We&apos;ll have your chair ready and waiting.
            </p>
            <Link
              href={ROUTES.BOOK}
              className="rounded-full border-2 border-rustic-brown px-8 py-3 font-sans text-sm font-semibold text-rustic-brown transition hover:bg-rustic-brown hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rustic-brown focus-visible:ring-offset-2"
            >
              Book Now
            </Link>
          </div>
        </div>

        <div className="mt-16 h-px w-full bg-rustic-brown/12" />
      </div>
    </section>
  );
}

// ── Version 4: Moody Dark Luxury ──────────────────────────────────────────────
// Deep espresso bg, blush radial glow, diamond ornament, script headline
export function CTABannerV4() {
  return (
    <section className="relative overflow-hidden bg-[#221610] py-28">
      {/* Blush ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blush/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-blush/55">
          Now accepting bookings
        </p>

        {/* Diamond ornament divider */}
        <div className="mx-auto mt-6 flex max-w-xs items-center gap-3">
          <div className="h-px flex-1 bg-blush/25" />
          <div className="h-2 w-2 rotate-45 bg-blush/50" />
          <div className="h-px flex-1 bg-blush/25" />
        </div>

        <h2 className="mt-8 font-script text-5xl leading-[1.1] text-cream sm:text-6xl lg:text-7xl">
          Your glow-up
          <br />
          awaits you.
        </h2>

        <p className="mx-auto mt-6 max-w-[30ch] font-sans text-sm leading-relaxed text-cream/40">
          Pamper yourself at The Glam Barn — where every appointment feels
          like a retreat.
        </p>

        <Link
          href={ROUTES.BOOK}
          className="mt-10 inline-flex items-center justify-center rounded-full bg-blush px-10 py-3.5 font-sans text-sm font-semibold text-[#221610] transition hover:bg-blush-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush focus-visible:ring-offset-2 focus-visible:ring-offset-[#221610]"
        >
          Book Your Appointment
        </Link>
      </div>
    </section>
  );
}

// ── Version 5: Justified Two-Column with Accent Bar ───────────────────────────
// Bright & airy, sky-mist accent strip, justified layout, dual CTAs
export function CTABannerV5() {
  return (
    <section className="relative overflow-hidden bg-cream py-24">
      {/* Subtle diagonal stripe texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg,transparent,transparent 48px,rgba(139,96,64,0.04) 48px,rgba(139,96,64,0.04) 96px)",
        }}
      />

      {/* Sky-mist top stripe */}
      <div className="absolute left-0 top-0 h-1 w-full bg-sky-mist" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          {/* Headline block */}
          <div className="max-w-xl">
            <h2 className="font-script text-5xl text-rustic-brown sm:text-6xl">
              Ready to glow?
            </h2>
            <p className="mt-3 font-sans text-base text-rustic-brown/60">
              Fresh cuts, color, and full glam — all under one roof at The
              Glam Barn.
            </p>
          </div>

          {/* CTA block */}
          <div className="flex shrink-0 flex-col items-center gap-4 sm:items-end">
            <Link
              href={ROUTES.BOOK}
              className="rounded-full bg-rustic-brown px-10 py-3.5 font-sans text-sm font-semibold text-white transition hover:bg-rustic-brown-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rustic-brown focus-visible:ring-offset-2"
            >
              Book Now
            </Link>
            <a
              href="tel:+1"
              className="font-sans text-sm font-medium text-rustic-brown/60 underline underline-offset-4 transition hover:text-rustic-brown"
            >
              or give us a call
            </a>
          </div>
        </div>

        {/* Sky-mist bottom accent */}
        <div className="mt-14 h-1.5 w-full rounded-full bg-sky-mist/50" />
      </div>
    </section>
  );
}
