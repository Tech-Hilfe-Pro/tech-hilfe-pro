import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

const PackagePreview = () => {
  const packages = [
    {
      name: "HOME CARE Lite",
      price: "5-9",
      period: "€/Monat",
      description: "Grundlegende Überwachung für Privatnutzer",
      features: [
        "Basis-Monitoring",
        "E-Mail-Support", 
        "Monatlicher Gesundheitscheck",
        "Monatlich kündbar"
      ],
      popular: false
    },
    {
      name: "HOME CARE Home",
      price: "15-19", 
      period: "€/Monat",
      description: "Erweiterte Betreuung mit Remote-Support",
      features: [
        "Remote-Support",
        "Priorisierte Reaktion",
        "Patch-Management",
        "Telefonischer Support"
      ],
      popular: true
    },
    {
      name: "HOME CARE Plus",
      price: "24-29",
      period: "€/Monat", 
      description: "Premium-Schutz mit Schulungen",
      features: [
        "Erweiterter Schutz",
        "Backup-Empfehlung",
        "Mini-Schulung pro Quartal",
        "Priority Support"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section-title mb-4 text-foreground">
            Unsere HOME CARE Pakete
          </h2>
          <p className="text-subtitle max-w-2xl mx-auto">
            Planbare IT-Kosten für Privatkunden in Köln & Umgebung
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative overflow-hidden rounded-2xl bg-white border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                pkg.popular 
                  ? 'border-accent shadow-md scale-105' 
                  : 'border-border'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-brand-start to-brand-end text-white px-4 py-1 rounded-full text-sm font-medium">
                    Beliebt
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {pkg.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold text-foreground">
                      {pkg.price}
                    </span>
                    <span className="text-muted-foreground ml-1">
                      {pkg.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-6">
            15% Rabatt bei jährlicher Zahlung • On-Site: 79-89 €/Stunde
          </p>
          <Link
            to="/pakete"
            className="btn-hero group"
          >
            Pakete vergleichen
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PackagePreview;