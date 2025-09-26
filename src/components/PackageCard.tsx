import { Check } from "lucide-react";
import { Package } from "@/data/packages";

interface PackageCardProps {
  package: Package;
  onCTAClick: () => void;
}

const PackageCard = ({ package: pkg, onCTAClick }: PackageCardProps) => {
  const isRecommended = pkg.badge === 'Empfohlen';

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-card border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ${
      isRecommended ? 'border-primary shadow-md' : 'border-border shadow-sm'
    }`}>
      {isRecommended && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-gradient-to-r from-brand-start to-brand-end text-white px-4 py-1 rounded-full text-sm font-medium">
            {pkg.badge}
          </span>
        </div>
      )}

      <div className="p-6 min-h-[520px] flex flex-col">
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {pkg.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            {pkg.subtitle}
          </p>
          
          {/* Price */}
          <div className="mb-3">
            <div className="text-2xl font-bold text-foreground">
              {pkg.price}
            </div>
          </div>
          
          {/* Tax Note */}
          <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
            {pkg.taxNote}
          </p>
          
          {/* Promo */}
          {pkg.promo && (
            <p className="text-sm text-success font-medium">
              {pkg.promo}
            </p>
          )}
        </div>

        {/* Features */}
        <div className="flex-1">
          <ul className="space-y-3 mb-6">
            {pkg.bullets.map((bullet, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-4 w-4 text-success mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* CTA Button */}
        <button 
          onClick={onCTAClick}
          className="btn-hero w-full mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          {pkg.cta}
        </button>
        
        {/* Not Included */}
        {pkg.notIncluded && (
          <div className="border-t border-border pt-4">
            <p className="text-xs text-muted-foreground mb-2 font-medium">
              Nicht enthalten / optional:
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {pkg.notIncluded}
            </p>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Fernzugriff nur nach Einwilligung; 2-Faktor-Schutz aktiv.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PackageCard;