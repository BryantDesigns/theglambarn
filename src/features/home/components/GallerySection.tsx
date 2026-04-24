const placeholders = [
  "from-blush via-cream to-blush-light",
  "from-rose-gold/40 via-blush-light to-cream",
  "from-cream via-blush to-rose-gold/30",
  "from-blush-light via-rose-gold/20 to-blush",
  "from-rose-gold/30 via-cream to-blush-light",
  "from-blush via-rose-gold/25 to-cream",
];

export function GallerySection() {
  return (
    <section id="gallery" className="bg-sky-mist py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-script text-4xl text-rose-gold sm:text-5xl">
            Our Work
          </h2>
          <p className="mt-4 font-sans text-lg text-neutral-700">
            A glimpse at what we create — every set is one of a kind.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {placeholders.map((gradient) => (
            <div
              key={gradient}
              className={`aspect-square rounded-2xl bg-gradient-to-br ${gradient} transition duration-300 hover:scale-[1.02] hover:shadow-lg`}
            />
          ))}
        </div>

        <p className="mt-8 text-center font-sans text-sm text-neutral-600">
          Follow us on Instagram{" "}
          <a
            href="https://instagram.com/theglambarn"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-rose-gold hover:underline"
          >
            @theglambarn
          </a>{" "}
          for daily nail inspo.
        </p>
      </div>
    </section>
  );
}
