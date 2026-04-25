const testimonials = [
  {
    quote:
      "I've been coming to The Glam Barn for over a year and I will never go anywhere else. The atmosphere is so warm and welcoming, and my nails always look absolutely stunning. They truly take their time with every client.",
    name: "Megan R.",
  },
  {
    quote:
      "The nail art here is unlike anything I've seen in town. I showed them a picture I found on Pinterest and they recreated it perfectly — down to every tiny detail. I get compliments everywhere I go.",
    name: "Jasmine T.",
  },
  {
    quote:
      "Booking online was so easy, and my appointment felt calm and never rushed. The gel manicure lasted four full weeks without a single chip. I'm officially a regular!",
    name: "Lauren K.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-script text-4xl text-rustic-brown sm:text-5xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl bg-barn-white p-8 shadow-sm ring-1 ring-cream-dark"
            >
              <div className="font-script text-5xl leading-none text-rustic-brown">
                &ldquo;
              </div>
              <blockquote className="mt-2 flex-1 font-sans text-base italic leading-relaxed text-neutral-700">
                {t.quote}
              </blockquote>
              <p className="mt-6 font-sans text-sm font-semibold text-rustic-brown">
                &mdash; {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
