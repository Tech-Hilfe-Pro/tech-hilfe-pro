import { Link } from "react-router-dom";
import { ArrowRight, Euro, Shield, Zap, Clock, TrendingUp, Eye } from "lucide-react";

const BenefitsGrid = () => {
  const benefits = [
    {
      slug: "planbare-kosten",
      title: "Planbare Kosten",
      description: "Schluss mit Überraschungen. Feste Monatsrate statt unklarer Stunden.",
      icon: Euro,
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      slug: "proaktive-betreuung", 
      title: "Proaktive Betreuung",
      description: "Wir warten und überwachen, bevor Probleme entstehen.",
      icon: Shield,
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      slug: "schneller-support",
      title: "Schneller Support", 
      description: "Telefon, Remote oder vor Ort. Ohne Warteschleife.",
      icon: Zap,
      gradient: "from-violet-500 to-purple-600"
    },
    {
      slug: "sicherheit-und-updates",
      title: "Sicherheit & Updates",
      description: "Patches, Backups, EDR. DSGVO-bewusst.",
      icon: Shield,
      gradient: "from-rose-500 to-pink-600"
    },
    {
      slug: "produktivitaet",
      title: "Produktivität statt Stillstand",
      description: "Weniger Unterbrechungen, mehr Output.",
      icon: TrendingUp,
      gradient: "from-orange-500 to-red-600"
    },
    {
      slug: "transparente-leistungen",
      title: "Transparente Leistungen",
      description: "Klare Pakete, klare Grenzen, ehrliche Beratung.",
      icon: Eye,
      gradient: "from-indigo-500 to-blue-600"
    }
  ];

  const handleCardClick = (slug: string) => {
    // Track analytics event
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track('card_click', { benefit_slug: slug });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section-title mb-4 text-foreground">
            Warum Tech Hilfe Pro?
          </h2>
          <p className="text-subtitle max-w-2xl mx-auto">
            Entdecken Sie die Vorteile unserer proaktiven IT-Betreuung
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Link
                key={benefit.slug}
                to={`/benefits/${benefit.slug}`}
                onClick={() => handleCardClick(benefit.slug)}
                className="card-benefit animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${benefit.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  <div className="flex items-center text-accent font-medium group-hover:translate-x-2 transition-transform duration-300">
                    Mehr erfahren
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>

                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;