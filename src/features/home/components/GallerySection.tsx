const placeholders = [
  "from-blush via-cream to-blush-light",
  "from-rustic-brown/40 via-blush-light to-cream",
  "from-cream via-blush to-rustic-brown/30",
  "from-blush-light via-rustic-brown/20 to-blush",
  "from-rustic-brown/30 via-cream to-blush-light",
  "from-blush via-rustic-brown/25 to-cream",
];

export function GallerySection() {
  return (
    <section id="gallery" className="bg-sky-mist py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-script text-4xl text-rustic-brown sm:text-5xl">
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
            href="https://instagram.com/theglambarnnails"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-rustic-brown hover:underline"
          >
            @theglambarnnails
          </a>{" "}
          for daily nail inspo.
        </p>
      </div>
    </section>
  );
}
