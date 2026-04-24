const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Booking", href: "#booking" },
];

export function Footer() {
  return (
    <footer className="bg-sky-mist-dark">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <p className="font-script text-3xl text-rose-gold">
              The Glam Barn
            </p>
            <p className="mt-2 font-sans text-sm text-neutral-600">
              Luxurious. Welcoming. Curated.
            </p>
          </div>

          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Navigate
            </p>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-neutral-700 transition hover:text-rose-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Connect
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://instagram.com/theglambarn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-neutral-700 transition hover:text-rose-gold"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/theglambarn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-neutral-700 transition hover:text-rose-gold"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="font-sans text-sm text-neutral-700 transition hover:text-rose-gold"
                >
                  (123) 456-7890
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@theglambarn.com"
                  className="font-sans text-sm text-neutral-700 transition hover:text-rose-gold"
                >
                  hello@theglambarn.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-rose-gold/15 pt-8">
          <p className="font-sans text-sm text-neutral-500">
            &copy; 2026 The Glam Barn Nails. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
