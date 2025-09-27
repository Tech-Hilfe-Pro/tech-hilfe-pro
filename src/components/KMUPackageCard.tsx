import { Check } from "lucide-react";
import { Package } from "@/data/packages";

interface KMUPackageCardProps {
  package: Package;
  isYearly: boolean;
  onCTAClick: () => void;
  onDetailsClick: () => void;
}

const KMUPackageCard = ({ package: pkg, isYearly, onCTAClick, onDetailsClick }: KMUPackageCardProps) => {
  const price = isYearly ? pkg.yearlyPrice : pkg.monthlyPrice;
  const originalPrice = pkg.monthlyPrice;
  const savings = isYearly ? Math.round(((originalPrice - pkg.yearlyPrice) / originalPrice) * 100) : 0;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-card border border-border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 h-full min-h-[600px] flex flex-col">
      <div className="p-6 flex-1 flex flex-col">
        {/* Badge */}
        <div className="h-8 flex items-center justify-center mb-4">
          {pkg.badge && (
            <span className={`px-4 py-1 rounded-full text-sm font-medium shadow-md ${
              pkg.badge === 'Beliebteste Wahl' 
                ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground'
                : pkg.badge === 'Bester Gegenwert'
                ? 'bg-gradient-to-r from-accent to-accent/80 text-accent-foreground'
                : 'bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground'
            }`}>
              {pkg.badge}
            </span>
          )}
        </div>

        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {pkg.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-3">
            {pkg.subtitle}
          </p>
          <p className="text-foreground text-sm font-medium mb-4">
            {pkg.positioning}
          </p>
          
          {/* Price */}
          <div className="mb-3">
            <div className="text-2xl font-bold text-foreground">
              {price} € / Arbeitsplatz
            </div>
            <div className="text-sm text-muted-foreground">
              {isYearly ? 'pro Monat (jährlich)' : 'pro Monat'}
            </div>
          </div>
          
          {/* Tax Note */}
          <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
            Kein Umsatzsteuerausweis gem. § 19 UStG. Monatlich kündbar. Bitte <a href="/agb" className="text-primary hover:text-primary/80 underline">AGB</a> lesen.
          </p>
          
          {/* Promo Space - Reserve space for consistency */}
          <div className="h-5 mb-2">
            {isYearly && savings > 0 && (
              <div className="text-sm text-green-600 font-medium">
                15% Rabatt bei jährlicher Zahlung
              </div>
            )}
          </div>
        </div>

        {/* Key Differences */}
        <div className="flex-1 mb-6">
          <h4 className="text-sm font-semibold text-foreground mb-3">Hauptmerkmale</h4>
          <ul className="space-y-3">
            {pkg.keyDifferences.map((difference, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-4 w-4 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground leading-relaxed">{difference}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* CTA Button */}
        <div className="mt-auto mb-4">
          <button 
            onClick={onCTAClick}
            className="btn-hero w-full h-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {pkg.cta}
          </button>
        </div>
        
        {/* Details Button */}
        <div className="mb-4">
          <button 
            onClick={onDetailsClick}
            className="w-full h-10 text-primary hover:text-primary/80 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
          >
            Details zum Plan
          </button>
        </div>
        
        {/* Footer Note */}
        <div className="text-xs text-muted-foreground text-center leading-relaxed border-t border-border pt-3">
          Fernzugriff nur nach Einwilligung; 2-Faktor-Schutz aktiv.
        </div>
      </div>
    </div>
  );
};

export default KMUPackageCard;