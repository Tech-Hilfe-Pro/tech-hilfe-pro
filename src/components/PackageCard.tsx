import { Check } from "lucide-react";
import { Package } from "@/data/packages";

interface PackageCardProps {
  package: Package;
  onCTAClick: () => void;
}

const PackageCard = ({ package: pkg, onCTAClick }: PackageCardProps) => {
  const hasBadge = !!pkg.badge;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-card border border-border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 h-full min-h-[600px] flex flex-col">
      <div className="p-6 flex-1 flex flex-col">
        {/* Badge */}
        <div className="h-8 flex items-center justify-center mb-4">
          {hasBadge && (
            <span className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-1 rounded-full text-sm font-medium shadow-md">
              {pkg.badge}
            </span>
          )}
        </div>

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
          
          {/* Promo - Reserve space even if empty */}
          <div className="h-6 flex items-center justify-center">
            {pkg.promo ? (
              <p className="text-sm text-success font-medium">
                {pkg.promo}
              </p>
            ) : (
              <div className="h-5"></div>
            )}
          </div>
        </div>

        {/* Features - Takes remaining space */}
        <div className="flex-1 mb-6">
          <ul className="space-y-3">
            {pkg.bullets.map((bullet, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-4 w-4 text-success mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* CTA Button - Fixed at bottom */}
        <div className="mt-auto mb-4">
          <button 
            onClick={onCTAClick}
            className="btn-hero w-full h-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {pkg.cta}
          </button>
        </div>
        
        {/* Footer - Always same height */}
        <div className="border-t border-border pt-4 min-h-[80px]">
          <p className="text-xs text-muted-foreground mb-2 font-medium">
            Nicht enthalten / optional:
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {pkg.notIncluded || 'Alle Kernleistungen enthalten'}
          </p>
          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
            Fernzugriff nur nach Einwilligung; 2-Faktor-Schutz aktiv.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;