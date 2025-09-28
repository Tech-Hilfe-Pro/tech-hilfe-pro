import { useState } from "react";
import { Calculator, Euro } from "lucide-react";

interface PricingWidgetProps {
  className?: string;
}

export const PricingWidget = ({ className = "" }: PricingWidgetProps) => {
  const [serviceType, setServiceType] = useState<'remote' | 'onsite'>('remote');
  const [isMember, setIsMember] = useState(false);
  const [duration, setDuration] = useState(60);

  const calculatePrice = () => {
    if (serviceType === 'remote') {
      // Remote: 39 €/30 Min + 11 €/10 Min
      const baseBlocks = Math.ceil(duration / 30);
      const baseCost = baseBlocks * 39;
      
      // Additional 10-minute blocks after first 30 minutes
      const remainingMinutes = Math.max(0, duration - 30);
      const additionalBlocks = Math.ceil(remainingMinutes / 10);
      const additionalCost = additionalBlocks * 11;
      
      return baseCost + additionalCost;
    } else {
      // Vor-Ort
      if (isMember) {
        // Member: 69 € bis 60 Min + 19 €/15 Min danach
        if (duration <= 60) {
          return 69;
        } else {
          const additionalMinutes = duration - 60;
          const additionalBlocks = Math.ceil(additionalMinutes / 15);
          return 69 + (additionalBlocks * 19);
        }
      } else {
        // Standard: 89 €/Std
        const hours = Math.ceil(duration / 60);
        return hours * 89;
      }
    }
  };

  const estimatedPrice = calculatePrice();

  return (
    <div className={`bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20 ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Calculator className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">Kostenrechner</h3>
      </div>

      <div className="space-y-4 mb-6">
        {/* Service Type */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Service-Art
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setServiceType('remote')}
              className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                serviceType === 'remote'
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-foreground border-border hover:border-primary/50'
              }`}
              aria-pressed={serviceType === 'remote'}
            >
              Remote-Support
            </button>
            <button
              onClick={() => setServiceType('onsite')}
              className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                serviceType === 'onsite'
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-foreground border-border hover:border-primary/50'
              }`}
              aria-pressed={serviceType === 'onsite'}
            >
              Vor-Ort-Service
            </button>
          </div>
        </div>

        {/* Member Status */}
        {serviceType === 'onsite' && (
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Mitgliedschaft
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setIsMember(false)}
                className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                  !isMember
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-foreground border-border hover:border-primary/50'
                }`}
                aria-pressed={!isMember}
              >
                Standard-Kunde
              </button>
              <button
                onClick={() => setIsMember(true)}
                className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                  isMember
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-foreground border-border hover:border-primary/50'
                }`}
                aria-pressed={isMember}
              >
                Mitglied
              </button>
            </div>
          </div>
        )}

        {/* Duration */}
        <div>
          <label htmlFor="duration" className="block text-sm font-medium text-foreground mb-2">
            Geschätzte Dauer: {duration} Minuten
          </label>
          <input
            id="duration"
            type="range"
            min="30"
            max="180"
            step="15"
            value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            aria-label={`Dauer auswählen, aktuell ${duration} Minuten`}
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>30 Min</span>
            <span>180 Min</span>
          </div>
        </div>
      </div>

      {/* Price Display */}
      <div className="bg-white rounded-lg p-4 border border-primary/20">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-foreground">Geschätzte Kosten:</span>
          <div className="flex items-center gap-1">
            <Euro className="h-4 w-4 text-primary" />
            <span className="text-2xl font-bold text-primary">{estimatedPrice}</span>
          </div>
        </div>
        
        <div className="text-xs text-muted-foreground space-y-1">
          <p>• Unverbindliche Schätzung</p>
          <p>• Tatsächlicher Aufwand vor Ort maßgeblich</p>
          <p className="font-medium">Keine Umsatzsteuer gem. §19 UStG (Kleinunternehmer)</p>
        </div>
      </div>

      {/* Pricing Details */}
      <details className="mt-4">
        <summary className="text-xs text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
          Preisdetails anzeigen
        </summary>
        <div className="mt-2 text-xs text-muted-foreground space-y-1">
          <p><strong>Remote:</strong> 39 € / 30 Min, danach 11 € / 10 Min</p>
          <p><strong>Vor-Ort Standard:</strong> 89 € / Stunde</p>
          <p><strong>Mitglied Vor-Ort:</strong> 69 € bis 60 Min, danach 19 € / 15 Min</p>
        </div>
      </details>
    </div>
  );
};