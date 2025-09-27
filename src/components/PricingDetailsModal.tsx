import { AlertCircle, CheckCircle, Clock, Zap } from "lucide-react";
import { Package } from "@/data/packages";

interface PricingDetailsModalProps {
  package: Package;
  isOpen: boolean;
  onClose: () => void;
}

const PricingDetailsModal = ({ package: pkg, isOpen, onClose }: PricingDetailsModalProps) => {
  if (!isOpen) return null;

  const getPriorityIcon = (priority: string) => {
    if (priority.includes('P1')) return <Zap className="h-4 w-4 text-red-500" />;
    if (priority.includes('P2')) return <AlertCircle className="h-4 w-4 text-orange-500" />;
    if (priority.includes('P3')) return <Clock className="h-4 w-4 text-yellow-500" />;
    return <CheckCircle className="h-4 w-4 text-blue-500" />;
  };

  const fairUseText = pkg.segment === 'privat' 
    ? "Fair-Use-Policy: Unbegrenzter Remote-Support bedeutet fairer Gebrauch. Bei dauerhaft deutlich überdurchschnittlicher Nutzung empfehlen wir Schulung, Ursachenbehebung oder ein Upgrade. Unser Ziel ist es, Ihre IT proaktiv zu betreuen, nicht permanent Notfälle zu beheben."
    : "Fair-Use-Policy: Unbegrenzter Remote-Support bedeutet fairer Gebrauch. Bei dauerhaft deutlich überdurchschnittlicher Nutzung empfehlen wir Schulung, Ursachenbehebung oder ein Upgrade. Unser Ziel ist es, Ihre IT proaktiv zu betreuen, nicht permanent Notfälle zu beheben.";

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                {pkg.name}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                {pkg.subtitle}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground p-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* Included / Not Included */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Enthalten
              </h3>
              <ul className="space-y-2">
                {pkg.included.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-orange-500" />
                Nicht enthalten
              </h3>
              <ul className="space-y-2">
                {pkg.notIncluded.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <AlertCircle className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SLA Matrix */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Service Level Agreement (SLA)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-border rounded-lg">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left p-3 text-sm font-medium text-foreground">Priorität</th>
                    <th className="text-left p-3 text-sm font-medium text-foreground">Beschreibung</th>
                    <th className="text-left p-3 text-sm font-medium text-foreground">Reaktionszeit</th>
                    <th className="text-left p-3 text-sm font-medium text-foreground">Lösungszeit</th>
                  </tr>
                </thead>
                <tbody>
                  {pkg.slaMatrix.map((sla, index) => (
                    <tr key={index} className="border-t border-border">
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          {getPriorityIcon(sla.priority)}
                          <span className="text-sm font-medium text-foreground">
                            {sla.priority}
                          </span>
                        </div>
                      </td>
                      <td className="p-3 text-sm text-foreground">{sla.description}</td>
                      <td className="p-3 text-sm text-foreground">{sla.responseTime}</td>
                      <td className="p-3 text-sm text-foreground">{sla.resolutionTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              {pkg.segment === 'privat' 
                ? 'SLA-Zeiten gelten werktags (Mo-Fr), außer bei Familie+ Paket (auch Sa). Details siehe AGB.'
                : 'SLA-Zeiten gelten werktags (Mo-Fr), bei 360° auch Notfallnummer 24/7. Details siehe AGB.'
              }
            </p>
          </div>

          {/* Fair Use Policy */}
          <div className="bg-muted rounded-lg p-4">
            <h3 className="text-sm font-semibold text-foreground mb-2">
              Fair-Use-Policy
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {fairUseText}
            </p>
            <p className="text-xs text-muted-foreground mt-3">
              Bedingungen zu Fair-Use und Vor-Ort-Terminen sind Bestandteil der <a href="/agb" className="text-primary hover:text-primary/80 underline">AGB</a>.
            </p>
          </div>

          {/* Final AGB Reference */}
          <div className="text-center pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">
              Alle Leistungen und Bedingungen sind in den <a href="/agb" className="text-primary hover:text-primary/80 underline">Allgemeinen Geschäftsbedingungen (AGB)</a> geregelt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingDetailsModal;