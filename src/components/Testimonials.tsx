import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Seit Home Plus läuft alles spürbar ruhiger. Updates nerven nicht mehr.",
      author: "S. Fischer",
      location: "Sülz",
      rating: 5
    },
    {
      quote: "Endlich jemand, der ohne Fachchinesisch erklärt. Schneller WhatsApp-Support!",
      author: "A. Kramer", 
      location: "Ehrenfeld",
      rating: 5
    },
    {
      quote: "Für unser Home Office goldwert. Kein Stillstand mehr vor Kundencalls.",
      author: "M. Vogel",
      location: "Nippes", 
      rating: 5
    },
    {
      quote: "Planbare Kosten haben uns geholfen, unser IT-Budget zu kontrollieren.",
      author: "T. Weber",
      location: "Lindenthal",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section-title mb-4 text-foreground">
            Was unsere Kunden sagen
          </h2>
          <p className="text-subtitle max-w-2xl mx-auto">
            Echte Erfahrungen von zufriedenen Kunden in Köln
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-neutral-50 rounded-2xl p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-4 text-sm leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="text-xs text-muted-foreground">
                <div className="font-medium">{testimonial.author}</div>
                <div>{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Signal */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-start to-brand-end text-white px-6 py-3 rounded-full text-sm font-medium">
            <Star className="h-4 w-4 fill-current" />
            4.9/5 Sterne von 50+ zufriedenen Kunden
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;