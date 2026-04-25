"use client";

import { useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/shared/config/routes";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Booking", href: "#booking" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-barn-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href={ROUTES.HOME}
          className="font-script text-3xl text-rustic-brown"
        >
          The Glam Barn
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-medium text-neutral-600 transition hover:text-rustic-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rustic-brown focus-visible:ring-offset-2"
            >
              {link.label}
            </a>
          ))}
          <Link
            href={ROUTES.BOOK}
            className="inline-flex items-center justify-center rounded-full bg-rustic-brown px-6 py-2.5 font-sans text-sm font-semibold text-white transition hover:bg-rustic-brown-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rustic-brown focus-visible:ring-offset-2"
          >
            Book Now
          </Link>
        </div>

        <button
          className="rounded-md p-2 text-neutral-600 hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rustic-brown focus-visible:ring-offset-2 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-neutral-100 bg-barn-white px-6 pb-4 lg:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm font-medium text-neutral-700 hover:text-rustic-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rustic-brown focus-visible:ring-offset-2"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link
              href={ROUTES.BOOK}
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-rustic-brown px-6 py-2.5 font-sans text-sm font-semibold text-white transition hover:bg-rustic-brown-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rustic-brown focus-visible:ring-offset-2"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
