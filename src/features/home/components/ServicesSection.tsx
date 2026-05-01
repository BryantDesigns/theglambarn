const lengthPrices = [
  { length: "Short", price: "$45" },
  { length: "Medium", price: "$50" },
  { length: "Long", price: "$55" },
  { length: "Xtra Long", price: "$60" },
];

const nailDesigns = [
  { name: "French Tip", price: "$1 / finger" },
  { name: "Ombre", price: "$2 / finger" },
  { name: "Encapsulation", price: "$2 / finger" },
];

const addOns = [
  { name: "3D Art", price: "$3" },
  { name: "Nail Art", price: "$3" },
  { name: "Charms", price: "$3" },
  { name: "Chrome", price: "$2" },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-barn-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-script text-4xl text-rustic-brown sm:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 font-sans text-lg text-neutral-600">
            Every service is performed with premium products and careful attention to detail.
          </p>
        </div>

        <div className="mt-16 grid items-start gap-8 lg:grid-cols-3">
          {/* Length Base Price */}
          <div className="rounded-2xl border border-cream-dark bg-cream p-8">
            <div className="mb-4 h-1.5 w-8 rounded-full bg-rustic-brown/50" />
            <h3 className="font-script text-2xl text-rustic-brown">Length Base Price</h3>
            <ul className="mt-6 space-y-3">
              {lengthPrices.map((item) => (
                <li key={item.length} className="flex items-center justify-between font-sans text-neutral-700">
                  <span>{item.length}</span>
                  <span className="font-semibold text-rustic-brown">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Nail Design */}
          <div className="rounded-2xl border border-cream-dark bg-cream p-8">
            <div className="mb-4 h-1.5 w-8 rounded-full bg-rustic-brown/50" />
            <h3 className="font-script text-2xl text-rustic-brown">Nail Design</h3>
            <p className="mt-1 font-sans text-sm text-neutral-500">(Per Finger)</p>
            <ul className="mt-6 space-y-3">
              {nailDesigns.map((item) => (
                <li key={item.name} className="flex items-center justify-between font-sans text-neutral-700">
                  <span>{item.name}</span>
                  <span className="font-semibold text-rustic-brown">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Add-ons */}
          <div className="rounded-2xl border border-cream-dark bg-cream p-8">
            <div className="mb-4 h-1.5 w-8 rounded-full bg-rustic-brown/50" />
            <h3 className="font-script text-2xl text-rustic-brown">Add-ons</h3>
            <ul className="mt-6 space-y-3">
              {addOns.map((item) => (
                <li key={item.name} className="flex items-center justify-between font-sans text-neutral-700">
                  <span>{item.name}</span>
                  <span className="font-semibold text-rustic-brown">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional — full width */}
        <div className="mt-8 rounded-2xl border border-cream-dark bg-cream p-8">
          <div className="mb-4 h-1.5 w-8 rounded-full bg-rustic-brown/50" />
          <h3 className="font-script text-2xl text-rustic-brown">Additional</h3>
          <div className="mt-6 flex items-center justify-between font-sans text-neutral-700">
            <span>Soak Off</span>
            <span className="font-semibold text-rustic-brown">$15</span>
          </div>
          <p className="mt-2 font-sans text-xs font-semibold uppercase tracking-wide text-neutral-400">
            Only My Work
          </p>
        </div>
      </div>
    </section>
  );
}
