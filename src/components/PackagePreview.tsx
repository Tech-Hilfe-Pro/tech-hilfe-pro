import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

const PackagePreview = () => {
  const packageData = {
    name: "Home",
    price: "19",
    period: "€/Monat (inkl. MwSt.)",
    description: "Komplette IT-Betreuung für Ihr Zuhause",
    features: [
      "Unbegrenzter Remote-Support (werktags)",
      "Telefon- und WhatsApp-Support",
      "Regelmäßige Updates & Patch-Management", 
      "Monatlicher System-Gesundheitscheck",
      "Erklärungen ohne Fachjargon"
    ],
    discount: "15% Rabatt bei jährlicher Zahlung"
  };

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

        <div className="max-w-md mx-auto mb-12">
          <div className="relative overflow-hidden rounded-2xl bg-white border border-accent shadow-md">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="bg-gradient-to-r from-brand-start to-brand-end text-white px-4 py-1 rounded-full text-sm font-medium">
                Empfohlen
              </span>
            </div>

            <div className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  HOME CARE {packageData.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {packageData.description}
                </p>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-3xl font-bold text-foreground">
                    {packageData.price}
                  </span>
                  <span className="text-muted-foreground ml-1">
                    {packageData.period}
                  </span>
                </div>
                <p className="text-sm text-success font-medium">
                  {packageData.discount}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {packageData.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="btn-hero w-full mb-6">
                Kostenlose Erstberatung
              </button>
              
              <div className="border-t border-border pt-6">
                <p className="text-xs text-muted-foreground mb-3 font-medium">
                  Nicht enthalten / optional:
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Vor-Ort-Einsätze, Hardware, Ersatzteile, Spezialsoftware
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-8">
          <div className="max-w-md mx-auto bg-neutral-50 rounded-xl p-6 text-sm">
            <h4 className="font-semibold mb-3 text-foreground">Preise ohne Paket</h4>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex justify-between">
                <span>Vor Ort:</span>
                <span className="font-medium">79 €/Stunde</span>
              </div>
              <div className="flex justify-between">
                <span>Remote:</span>
                <span className="font-medium">59 €/Stunde</span>
              </div>
              <p className="text-xs mt-3">Mindestabrechnung: 30 Minuten</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/pakete"
            className="btn-secondary group"
          >
            Pakete ansehen
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PackagePreview;