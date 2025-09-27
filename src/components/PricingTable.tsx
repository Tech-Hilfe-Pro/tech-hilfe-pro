import { useState } from "react";
import { packages, Package } from "@/data/packages";
import PackageCard from "./PackageCard";

const PricingTable = () => {
  const [activeSegment, setActiveSegment] = useState<'privat' | 'kmu'>('privat');
  
  const privatPackages = packages.filter(pkg => pkg.segment === 'privat');
  const kmuPackages = packages.filter(pkg => pkg.segment === 'kmu');
  const currentPackages = activeSegment === 'privat' ? privatPackages : kmuPackages;

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
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-section-title mb-4 text-foreground">
            Unsere Service-Pakete
          </h2>
          <p className="text-subtitle max-w-2xl mx-auto">
            Planbare IT-Kosten für Privatkunden und KMU in Köln & Umgebung
          </p>
        </div>

        {/* Segment Toggle */}
        <div className="flex justify-center mb-12">
          <div 
            role="tablist"
            aria-label="Paket-Kategorien auswählen"
            className="bg-muted p-1 rounded-lg"
          >
            <button
              role="tab"
              aria-selected={activeSegment === 'privat'}
              aria-controls="privat-packages"
              onClick={() => setActiveSegment('privat')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                activeSegment === 'privat'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Privatkunden
            </button>
            <button
              role="tab"
              aria-selected={activeSegment === 'kmu'}
              aria-controls="kmu-packages"
              onClick={() => setActiveSegment('kmu')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                activeSegment === 'kmu'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              KMU & Unternehmen
            </button>
          </div>
        </div>

        {/* Package Cards */}
        <div 
          id={`${activeSegment}-packages`}
          role="tabpanel"
          aria-labelledby={`${activeSegment}-tab`}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {currentPackages.map((pkg) => (
            <PackageCard
              key={pkg.slug}
              package={pkg}
              onCTAClick={activeSegment === 'privat' ? handleConsultation : handleConsultation}
            />
          ))}
        </div>

        {/* Additional Info for Privat */}
        {activeSegment === 'privat' && (
          <div className="text-center mb-8">
            <div className="max-w-md mx-auto bg-neutral-50 rounded-xl p-6 text-sm">
              <h4 className="font-semibold mb-3 text-foreground">Preise ohne Paket</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Vor Ort:</span>
                  <span className="font-medium">79 €/Stunde</span>
                </div>
                <div className="flex justify-between">
                  <span>Remote:</span>
                  <span className="font-medium">59 €/Stunde</span>
                </div>
                <p className="text-xs mt-3">Mindestabrechnung: 30 Minuten</p>
                <p className="text-xs mt-2">Kein Umsatzsteuerausweis gem. § 19 UStG.</p>
              </div>
            </div>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="text-center space-y-4">
          <button 
            onClick={handleConsultation}
            className="btn-hero"
          >
            {activeSegment === 'privat' ? 'Kostenlose Erstberatung' : 'Kostenfreie Erstberatung buchen'}
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
  );
};

export default PricingTable;