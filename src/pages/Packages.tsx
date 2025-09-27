import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingCard from "@/components/PricingCard";
import PricingDetailsModal from "@/components/PricingDetailsModal";
import { packages } from "@/data/packages";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import WhatsAppIcon from "@/assets/whatsapp.svg";

const Packages = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('privat');
  
  const privatPackages = packages.filter(pkg => pkg.segment === 'privat');
  const kmuPackages = packages.filter(pkg => pkg.segment === 'kmu');

  const handleConsultation = () => {
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track('cta_consultation', { location: 'packages' });
    }
  };

  const handleWhatsApp = () => {
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track('whatsapp_start', { location: 'packages' });
    }
    window.open("https://wa.me/4915565029989?text=Hallo,%20ich%20interessiere%20mich%20für%20ein%20Service-Paket...", "_blank");
  };

  const handleCTAClick = (pkg: any) => {
    // Stripe checkout logic will be added here
    console.log('Checkout clicked for:', pkg.slug, isYearly ? 'yearly' : 'monthly');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Sticky CTA Bar - Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border p-4 md:hidden z-40">
        <div className="flex gap-2">
          <button
            onClick={handleConsultation}
            className="btn-hero flex-1 text-sm py-3"
          >
            Jetzt Beratung sichern
          </button>
          <button
            onClick={handleWhatsApp}
            className="btn-whatsapp px-4"
            aria-label="WhatsApp"
          >
            <img src={WhatsAppIcon} alt="WhatsApp" className="h-5 w-5" />
          </button>
        </div>
      </div>

      <main className="pb-20 md:pb-0">
        {/* Breadcrumb */}
        <div className="bg-neutral-50 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-accent hover:underline">
                Startseite
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground">Pakete</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-white to-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-accent hover:underline mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Zurück zur Startseite
            </Link>
            
            <h1 className="text-hero mb-4 text-center">Service-Pakete</h1>
            <p className="text-subtitle text-center max-w-3xl mx-auto">
              Wählen Sie das Paket, das zu Ihrem Bedarf passt. Monatlich kündbar mit 15% Rabatt bei jährlicher Zahlung.
            </p>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-2 rounded-xl">
                  <TabsTrigger value="privat" className="rounded-lg">
                    Für Privat
                  </TabsTrigger>
                  <TabsTrigger value="kmu" className="rounded-lg">
                    <div className="flex flex-col items-center">
                      <span>Für Unternehmen</span>
                      <span className="text-xs text-muted-foreground font-normal">(KMU)</span>
                    </div>
                  </TabsTrigger>
                </TabsList>
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

              {/* Privat Packages */}
              <TabsContent value="privat" className="mt-0">
                {privatPackages.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">Keine Pakete verfügbar.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                )}
              </TabsContent>

              {/* KMU Packages */}
              <TabsContent value="kmu" className="mt-0">
                {kmuPackages.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">Keine Pakete verfügbar.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {kmuPackages.map((pkg) => (
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
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />

      {/* Details Modal */}
      {selectedPackage && (
        <PricingDetailsModal
          package={selectedPackage}
          isOpen={!!selectedPackage}
          onClose={() => setSelectedPackage(null)}
        />
      )}
    </div>
  );
};

export default Packages;