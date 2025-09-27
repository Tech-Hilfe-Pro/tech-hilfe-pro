import { X } from "lucide-react";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalModal = ({ isOpen, onClose }: LegalModalProps) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div className="w-full max-w-2xl max-h-[80vh] bg-white rounded-2xl shadow-lg overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 id="legal-modal-title" className="text-xl font-semibold text-foreground">
            Vor-Ort-Termine & Konditionen
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
            aria-label="Modal schließen"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <h3 className="font-semibold text-foreground mb-2">Sperrfrist & Nutzung inkl. Termine</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>Privat:</strong> 60 Tage Sperrfrist. <strong>Business:</strong> 1. Termin nach 30 Tagen, 2. Termin nach 90 Tagen. 
              Ein Termin umfasst bis 60 Min vor Ort (Mo–Fr 9–18) im Gebiet Köln/Neuss & Umgebung. 
              <strong>Nicht enthalten:</strong> Ersatzteile, Lizenzen, Projekte/Migrationen, Einsätze außerhalb der Geschäftszeiten. 
              Nicht übertragbar, keine Auszahlung.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">Kündigung nach Nutzung</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Kündigung innerhalb von 30 Tagen nach einem genutzten Inklusiv-Termin führt zur Nachberechnung 
              zum Mitgliederpreis (69 €).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">Fair-Use Remote</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>Privat:</strong> bis 90 Min/Monat. <strong>Business:</strong> bis 180 Min/Monat. 
              Bei dauerhaft höherem Bedarf Upgrade oder Mehrzeiten gem. Preisliste erforderlich.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">Zahlung</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Vor Ort per Karte (Tap to Pay) oder per Rechnung, Zahlungsziel 7 Tage. 
              Kurzfristige Absage (&lt; 24 h) führt zu einer Ausfallpauschale von 29 €.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">Kleinunternehmer</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Keine Umsatzsteuer gem. §19 UStG (Kleinunternehmer).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};