import { useState } from "react";
import { packages } from "@/data/packages";
import PricingCard from "@/components/PricingCard";
import PricingDetailsModal from "@/components/PricingDetailsModal";
import WhatsAppIcon from "@/assets/whatsapp.svg";

const PrivatPricingTable = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  
  // Filter für Privatkunden-Pakete
  const privatPackages = packages.filter(pkg => pkg.segment === 'privat');

  const handleConsultation = () => {
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track('cta_consultation', { location: 'privat-pricing' });
    }
  };

  const handleWhatsApp = () => {
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track('whatsapp_start', { location: 'privat-pricing' });
    }
    window.open("https://wa.me/4915565029989?text=Hallo,%20ich%20interessiere%20mich%20für%20ein%20Service-Paket...", "_blank");
  };

  const handleCTAClick = (pkg: any) => {
    // Stripe checkout logic will be added here
    console.log('Checkout clicked for:', pkg.slug, isYearly ? 'yearly' : 'monthly');
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-section-title mb-4 text-foreground">
              Privatkunden-Service-Pakete
            </h2>
            <p className="text-subtitle max-w-2xl mx-auto mb-4">
              Sorgenfrei digital leben – von der Einzelperson bis zur großen Familie. Monatlich kündbar mit persönlicher Betreuung.
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

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {privatPackages.map((pkg) => (
              <PricingCard
                key={pkg.slug}
                package={pkg}
                isYearly={isYearly}
                onCTAClick={() => handleCTAClick(pkg)}
                onDetailsClick={() => setSelectedPackage(pkg)}
                onConsultationClick={handleConsultation}
              />
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
              <button
                onClick={handleConsultation}
                className="btn-hero"
              >
                Kostenlose Erstberatung
              </button>
              <button
                onClick={handleWhatsApp}
                className="btn-whatsapp flex items-center gap-2"
              >
                <img src={WhatsAppIcon} alt="WhatsApp" className="h-5 w-5" />
                WhatsApp-Support starten
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Details Modal */}
      {selectedPackage && (
        <PricingDetailsModal
          package={selectedPackage}
          isOpen={!!selectedPackage}
          onClose={() => setSelectedPackage(null)}
        />
      )}
    </>
  );
};

export default PrivatPricingTable;