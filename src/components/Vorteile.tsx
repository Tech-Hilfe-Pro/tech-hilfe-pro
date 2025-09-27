import { Headphones, MapPin, Shield, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: Headphones,
    title: "Unbegrenzter Online-Support",
    description: "Remote-Hilfe im Rahmen der Fair-Use-Policy"
  },
  {
    icon: MapPin,
    title: "Vor-Ort zum Mitgliederpreis",
    description: "69 € je Termin statt 89 € Standardpreis"
  },
  {
    icon: CheckCircle,
    title: "Heim/Standort-Check",
    description: "Jährlicher Sicherheitscheck inklusive"
  },
  {
    icon: Shield,
    title: "Verwaltete Security",
    description: "Antivirus & Passwortmanager betreut"
  }
];

export const VorteileSection = () => {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-section-title text-foreground">
            Vorteile im Abo
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-white border border-border hover:shadow-md transition-shadow duration-200"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                  <IconComponent className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};