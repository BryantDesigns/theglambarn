import Link from "next/link";
import { ROUTES } from "@/shared/config/routes";

export function CTABanner() {
  return (
    <section id="booking" className="bg-rustic-brown py-20">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="font-script text-4xl text-white sm:text-5xl">
          Ready to Treat Yourself?
        </h2>
        <p className="mt-4 font-sans text-lg text-white/85">
          Reserve your appointment online — we&apos;ll have your chair ready.
        </p>
        <Link
          href={ROUTES.BOOK}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-10 py-3.5 font-sans text-sm font-semibold text-rustic-brown transition hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rustic-brown focus-visible:ring-offset-2"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}
