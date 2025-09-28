import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { TypewriterLine } from "@/components/TypewriterLine";
import { PlanToggle } from "@/components/PlanToggle";
import { PlanCard } from "@/components/PlanCard";
import { VorteileSection } from "@/components/Vorteile";
import { CompareAboVsOneOff } from "@/components/CompareAboVsOneOff";
import { AccordionServices } from "@/components/AccordionServices";
import { LegalModal } from "@/components/LegalModal";
import { FAQSection } from "@/components/FAQSection";

const Index = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);

  // Scroll depth tracking
  useEffect(() => {
    const trackedDepths = new Set();
    
    const trackScrollDepth = () => {
      const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      
      const milestones = [25, 50, 75, 100];
      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && !trackedDepths.has(milestone) && typeof window !== 'undefined' && window.umami) {
          window.umami.track(`scroll-depth`, { depth: milestone });
          trackedDepths.add(milestone);
        }
      });
    };

    window.addEventListener('scroll', trackScrollDepth, { passive: true });
    return () => window.removeEventListener('scroll', trackScrollDepth);
  }, []);

  const privatFeatures = [
    "Unbegrenzter Remote-Support (Mo–Fr 9–18) im Rahmen der Fair-Use-Policy (bis 90 Min/Monat)",
    "1 Vor-Ort-Termin/Jahr inklusive (nach 60 Tagen aktiv)",
    "Bis 3 Geräte (PC/Mac, Drucker, WLAN)",
    "Mitgliederpreis Vor-Ort: 69 € je Termin (bis 60 Min)",
    "Heim-Sicherheitscheck 1×/Jahr"
  ];

  const businessFeatures = [
    "Priorisierter Remote-Support (SLA Antwort ≤ 4 Std., Fair-Use bis 180 Min/Monat)",
    "2 Vor-Ort-Termine/Jahr inkl. (1. nach 30 Tagen, 2. nach 90 Tagen)",
    "Bis 10 Geräte / 5 Nutzer",
    "Endpoint-Schutz & Patch-Management",
    "Mitgliederpreis Vor-Ort: 69 € je Termin (bis 60 Min)"
  ];

  const handleJoinPrivat = () => {
    // Stripe Checkout placeholder
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track('checkout_success', { plan: 'privat', period: isYearly ? 'yearly' : 'monthly' });
    }
    alert(`Stripe Checkout für ${isYearly ? 'price_priv_jahr' : 'price_priv_monat'}`);
  };

  const handleJoinBusiness = () => {
    // Stripe Checkout placeholder
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track('checkout_success', { plan: 'business', period: isYearly ? 'yearly' : 'monthly' });
    }
    alert(`Stripe Checkout für ${isYearly ? 'price_biz_jahr' : 'price_biz_monat'}`);
  };

  const handleOneOffHelpClick = () => {
    const accordion = document.querySelector('#einmalige-hilfe');
    if (accordion) {
      accordion.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* JSON-LD Product data for plans */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context":"https://schema.org",
          "@type":"Product",
          "name":"Privat-Mitgliedschaft",
          "brand":"Tech Hilfe Pro",
          "description":"Unbegrenzter Remote-Support (Fair-Use 90 Min/Monat), 1 Vor-Ort-Termin/Jahr nach 60 Tagen, bis 3 Geräte. Keine Umsatzsteuer gem. §19 UStG.",
          "offers":{
            "@type":"Offer",
            "price":"12.90",
            "priceCurrency":"EUR",
            "availability":"https://schema.org/InStock",
            "url":"https://techhilfepro.de/"
          }
        })
      }} />
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context":"https://schema.org",
          "@type":"Product",
          "name":"Business (KMU) - Mitgliedschaft",
          "brand":"Tech Hilfe Pro",
          "description":"SLA Antwort ≤ 4 Std., Fair-Use 180 Min/Monat, 2 Vor-Ort-Termine/Jahr (30/90 Tage), bis 10 Geräte/5 Nutzer. Keine Umsatzsteuer gem. §19 UStG.",
          "offers":{
            "@type":"Offer",
            "price":"39.90",
            "priceCurrency":"EUR",
            "availability":"https://schema.org/InStock",
            "url":"https://techhilfepro.de/"
          }
        })
      }} />

      {/* FAQ JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Kann ich monatlich kündigen?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja, alle unsere Mitgliedschaften sind monatlich kündbar ohne Kündigungsfristen."
              }
            },
            {
              "@type": "Question", 
              "name": "Gibt es ein Widerrufsrecht?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sie haben 14 Tage Widerrufsrecht. Bei sofortigem Leistungsbeginn berechnen wir anteilig den Wertersatz."
              }
            },
            {
              "@type": "Question",
              "name": "Erfolgt Fernzugriff ohne meine Zustimmung?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nein, Fernzugriff erfolgt nur mit Ihrer ausdrücklichen Einwilligung per Fernwartungssoftware."
              }
            },
            {
              "@type": "Question",
              "name": "In welchem Gebiet bieten Sie Vor-Ort-Service?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Vor-Ort-Service bieten wir in Köln, Neuss und Umgebung. Remote-Support ist deutschlandweit verfügbar."
              }
            },
            {
              "@type": "Question",
              "name": "Warum wird keine Umsatzsteuer ausgewiesen?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Als Kleinunternehmer gemäß §19 UStG weisen wir keine Umsatzsteuer aus."
              }
            }
          ]
        })
      }} />

      <div className="min-h-screen bg-background">
        <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-hero text-foreground mb-6">
              IT-Hilfe in Köln, Neuss & Umgebung
            </h1>
            <p className="text-subtitle mb-8">
              Unbegrenzter Remote-Support. Vor-Ort, wenn's zählt. Monatlich kündbar.
            </p>
            
            <TypewriterLine />
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 mb-8">
              <button 
                onClick={handleJoinPrivat}
                className="btn-hero"
                data-umami-event="cta_priv"
              >
                Jetzt Mitglied werden
              </button>
              <button 
                onClick={handleOneOffHelpClick}
                className="btn-secondary"
              >
                Einmalige Hilfe ansehen
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>Mitgliederpreis Vor-Ort: 69 € je Termin</span>
              <span className="hidden sm:inline">·</span>
              <span>Keine Umsatzsteuer gem. §19 UStG (Kleinunternehmer)</span>
            </div>
          </div>
        </section>

        {/* Membership Plans */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-section-title text-foreground">
                Wählen Sie Ihr Membership
              </h2>
            </div>
            
            <PlanToggle 
              isYearly={isYearly}
              onToggle={setIsYearly}
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <PlanCard
                title="Privat"
                price="12,90 €"
                yearlyPrice="10,32 €"
                isYearly={isYearly}
                features={privatFeatures}
                ctaText="Jetzt starten"
                onCTAClick={handleJoinPrivat}
                onInfoClick={() => setIsLegalModalOpen(true)}
                priceId={isYearly ? 'price_priv_jahr' : 'price_priv_monat'}
              />
              
              <PlanCard
                title="Business (KMU)"
                price="39,90 €"
                yearlyPrice="31,92 €"
                isYearly={isYearly}
                isMostPopular={true}
                features={businessFeatures}
                ctaText="Jetzt Business starten"
                onCTAClick={handleJoinBusiness}
                onInfoClick={() => setIsLegalModalOpen(true)}
                priceId={isYearly ? 'price_biz_jahr' : 'price_biz_monat'}
              />
            </div>
            
            <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
              Kündigung jederzeit zum Monatsende. Bei Kündigung innerhalb von 30 Tagen nach einem genutzten 
              Inklusiv-Termin wird dieser rückwirkend zum Mitgliederpreis (69 €) berechnet.
            </p>
          </div>
        </section>

        <VorteileSection />
        <CompareAboVsOneOff />
        <AccordionServices />
        <FAQSection />
      </main>

      <Footer />
      
      <StickyCTA onJoinClick={handleJoinPrivat} />
      
      <LegalModal 
        isOpen={isLegalModalOpen}
        onClose={() => setIsLegalModalOpen(false)}
      />
      </div>
    </>
  );
};

export default Index;
