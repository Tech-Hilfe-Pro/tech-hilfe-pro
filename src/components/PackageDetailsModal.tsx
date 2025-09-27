import { X, Check, Clock, AlertTriangle, Info, Zap } from "lucide-react";
import { Package } from "@/data/packages";

interface PackageDetailsModalProps {
  package: Package;
  isOpen: boolean;
  onClose: () => void;
}

const PackageDetailsModal = ({ package: pkg, isOpen, onClose }: PackageDetailsModalProps) => {
  if (!isOpen) return null;

  const getPriorityIcon = (priority: string) => {
    if (priority.includes('P1')) return <Zap className="h-4 w-4 text-red-500" />;
    if (priority.includes('P2')) return <AlertTriangle className="h-4 w-4 text-orange-500" />;
    if (priority.includes('P3')) return <Clock className="h-4 w-4 text-yellow-500" />;
    return <Info className="h-4 w-4 text-blue-500" />;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-background rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-xl font-semibold text-foreground">{pkg.name}</h2>
            <p className="text-sm text-muted-foreground">{pkg.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
            aria-label="Details schließen"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Leistungen */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Enthalten */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Enthalten</h3>
              <ul className="space-y-2">
                {pkg.included.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-4 w-4 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nicht enthalten */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Nicht enthalten</h3>
              <ul className="space-y-2">
                {pkg.notIncluded.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <X className="h-4 w-4 text-muted-foreground mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SLA Matrix */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Service Level Agreement (SLA)</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-border rounded-lg">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left p-3 text-sm font-semibold text-foreground">Priorität</th>
                    <th className="text-left p-3 text-sm font-semibold text-foreground">Beschreibung</th>
                    <th className="text-left p-3 text-sm font-semibold text-foreground">Antwortzeit</th>
                    <th className="text-left p-3 text-sm font-semibold text-foreground">Lösungszeit</th>
                  </tr>
                </thead>
                <tbody>
                  {pkg.slaMatrix.map((sla, index) => (
                    <tr key={index} className="border-t border-border">
                      <td className="p-3">
                        <div className="flex items-center">
                          {getPriorityIcon(sla.priority)}
                          <span className="ml-2 text-sm font-medium text-foreground">{sla.priority}</span>
                        </div>
                      </td>
                      <td className="p-3 text-sm text-foreground">{sla.description}</td>
                      <td className="p-3 text-sm font-medium text-foreground">{sla.responseTime}</td>
                      <td className="p-3 text-sm font-medium text-foreground">{sla.resolutionTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Fair Use */}
          <div className="bg-muted/50 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Fair-Use-Richtlinie</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Unbegrenzter Remote-Support bedeutet fairer Gebrauch. Bei dauerhaft deutlich überdurchschnittlicher 
              Nutzung empfehlen wir Schulung, Ursachenbehebung oder ein Upgrade. Unser Ziel ist es, Ihre IT 
              proaktiv zu betreuen, nicht permanent Notfälle zu beheben.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailsModal;