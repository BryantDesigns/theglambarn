const services = [
  {
    title: "Classic Manicure",
    description: "Shape, cuticle care, and your choice of polish for a clean, polished look.",
    price: "Starting at $25",
  },
  {
    title: "Gel Manicure",
    description: "Long-lasting gel color with a high-shine finish that lasts up to three weeks.",
    price: "Starting at $40",
  },
  {
    title: "Acrylic Full Set",
    description: "Full acrylic nail extensions customized to your preferred length and shape.",
    price: "Starting at $55",
  },
  {
    title: "Pedicure",
    description: "Soak, exfoliation, massage, and polish for soft, beautiful feet.",
    price: "Starting at $35",
  },
  {
    title: "Nail Art",
    description: "Custom hand-painted designs, florals, gems, and more — tell us your vision.",
    price: "Starting at $15",
  },
  {
    title: "Dip Powder",
    description: "Chip-resistant color with a natural feel and no UV lamp required.",
    price: "Starting at $45",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-barn-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-script text-4xl text-rose-gold sm:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 font-sans text-lg text-neutral-600">
            Every service is performed with premium products and careful attention to detail.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-cream-dark bg-cream p-8 transition hover:border-rose-gold/30 hover:shadow-md"
            >
              <div className="mb-4 h-1.5 w-8 rounded-full bg-rose-gold/50" />
              <h3 className="font-sans text-lg font-semibold text-rose-gold">
                {service.title}
              </h3>
              <p className="mt-2 font-sans text-neutral-600">{service.description}</p>
              <p className="mt-4 font-sans text-sm font-semibold text-rose-gold/70">
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
