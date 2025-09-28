import React from "react";
import { Check, X } from "lucide-react";

const comparisonData = [
  {
    feature: "Priorität & Planung",
    abo: "Priorisierter Support",
    oneOff: "Standard-Warteschlange"
  },
  {
    feature: "Vor-Ort inklusive",
    abo: "1-2 Termine/Jahr",
    oneOff: "Kein Inklusiv-Service"
  },
  {
    feature: "Check & Security",
    abo: "Jährliche Checks + AV",
    oneOff: "Nur auf Anfrage"
  },
  {
    feature: "Kosten",
    abo: "Planbar ab 12,90 €/Monat",
    oneOff: "Remote ab 39 €, Vor-Ort 89 €/Std."
  }
];

export const CompareAboVsOneOff = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-section-title text-foreground">
            Abo vs. Einmalig
          </h2>
          <p className="mt-4 text-subtitle">
            Der Vergleich auf einen Blick
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-white">
          <div className="grid grid-cols-3 gap-0">
            {/* Header */}
            <div className="bg-neutral-50 p-4">
              <span className="text-sm font-medium text-muted-foreground">Kriterium</span>
            </div>
            <div className="bg-primary/5 p-4">
              <span className="text-sm font-semibold text-primary">Abo-Mitgliedschaft</span>
            </div>
            <div className="bg-neutral-50 p-4">
              <span className="text-sm font-medium text-muted-foreground">Einmalige Hilfe</span>
            </div>

            {/* Rows */}
            {comparisonData.map((row, index) => (
              <React.Fragment key={index}>
                <div className="p-4 border-t border-border">
                  <span className="text-sm font-medium text-foreground">{row.feature}</span>
                </div>
                <div className="p-4 border-t border-border bg-primary/5">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-success" />
                    <span className="text-sm text-foreground">{row.abo}</span>
                  </div>
                </div>
                <div className="p-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <X className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{row.oneOff}</span>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};