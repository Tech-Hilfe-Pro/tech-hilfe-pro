import { useState } from "react";
import { packages } from "@/data/packages";
import KMUPackageCard from "./KMUPackageCard";
import PackageDetailsModal from "./PackageDetailsModal";

const PricingTable = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  
  const kmuPackages = packages.filter(pkg => pkg.segment === 'kmu');

  const handleConsultation = () => {
    // Track analytics event
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track('cta_consultation', { location: 'pricing_table' });
    }
  };

  const handleWhatsApp = () => {
    // Track analytics event  
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track('whatsapp_start', { location: 'pricing_table' });
    }
    window.open('https://wa.me/4915565029989?text=Hallo,%20ich%20interessiere%20mich%20für%20ein%20Service-Paket...', '_blank');
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-section-title mb-4 text-foreground">
              KMU-Service-Pakete
            </h2>
            <p className="text-subtitle max-w-2xl mx-auto mb-4">
              Sie zahlen für Vorsorge, Priorität und klare Reaktionszeiten. Für 24/7-Notfälle wählen Sie 360°.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-muted p-1 rounded-lg">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                  !isYearly
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Monatlich
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                  isYearly
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Jährlich <span className="text-green-600 ml-1">(-15%)</span>
              </button>
            </div>
          </div>

          {/* Package Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {kmuPackages.map((pkg) => (
              <KMUPackageCard
                key={pkg.slug}
                package={pkg}
                isYearly={isYearly}
                onCTAClick={handleConsultation}
                onDetailsClick={() => setSelectedPackage(pkg)}
              />
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="text-center space-y-4">
            <button 
              onClick={handleConsultation}
              className="btn-hero"
            >
              Kostenlose Erstberatung
            </button>
            <div className="text-sm text-muted-foreground">
              oder direkt per{" "}
              <button 
                onClick={handleWhatsApp}
                className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
              >
                WhatsApp kontaktieren
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Details Modal */}
      {selectedPackage && (
        <PackageDetailsModal
          package={selectedPackage}
          isOpen={!!selectedPackage}
          onClose={() => setSelectedPackage(null)}
        />
      )}
    </>
  );
};

export default PricingTable;