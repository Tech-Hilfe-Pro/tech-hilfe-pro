import { Check, Info } from "lucide-react";

interface PlanCardProps {
  title: string;
  price: string;
  yearlyPrice?: string;
  isYearly: boolean;
  isMostPopular?: boolean;
  features: string[];
  ctaText: string;
  onCTAClick: () => void;
  onInfoClick?: () => void;
  priceId: string;
}

export const PlanCard = ({
  title,
  price,
  yearlyPrice,
  isYearly,
  isMostPopular,
  features,
  ctaText,
  onCTAClick,
  onInfoClick,
  priceId
}: PlanCardProps) => {
  const displayPrice = isYearly && yearlyPrice ? yearlyPrice : price;
  
  const handleCTAClick = () => {
    if (typeof window !== 'undefined' && window.umami) {
      const eventName = title.toLowerCase().includes('business') ? 'cta_biz' : 'cta_priv';
      window.umami.track(eventName, { plan: title, period: isYearly ? 'yearly' : 'monthly' });
    }
    onCTAClick();
  };

  return (
    <div className={`relative rounded-2xl border-2 p-8 ${
      isMostPopular 
        ? 'border-primary bg-primary/5' 
        : 'border-border bg-white'
    } transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
      
      {isMostPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-primary px-4 py-1 text-sm font-medium text-white">
            Meistgewählt
          </span>
        </div>
      )}

      <div className="text-center">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <div className="mt-4">
          <span className="text-4xl font-bold text-foreground">{displayPrice}</span>
          <span className="text-muted-foreground">/Monat</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Monatlich kündbar · Keine Umsatzsteuer gem. §19 UStG
        </p>
      </div>

      <ul className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="h-5 w-5 flex-shrink-0 text-success mt-0.5" />
            <span className="text-sm text-foreground leading-relaxed">
              {feature}
              {feature.includes("Vor-Ort-Termin") && onInfoClick && (
                <button
                  onClick={onInfoClick}
                  className="ml-2 inline-flex items-center text-primary hover:text-primary/80"
                  aria-label="Weitere Informationen zu Vor-Ort-Terminen"
                >
                  <Info className="h-4 w-4" />
                </button>
              )}
            </span>
          </li>
        ))}
      </ul>

      <button
        onClick={handleCTAClick}
        className="mt-8 w-full btn-hero"
        data-umami-event={title.toLowerCase().includes('business') ? 'cta_biz' : 'cta_priv'}
      >
        {ctaText}
      </button>
    </div>
  );
};