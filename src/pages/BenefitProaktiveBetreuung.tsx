import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/assets/whatsapp.svg";

const BenefitProaktiveBetreuung = () => {
  const handleConsultation = () => {
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track('cta_consultation', { location: 'benefit_page' });
    }
  };

  const handleWhatsApp = () => {
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track('whatsapp_start', { location: 'benefit_page' });
    }
    window.open("https://wa.me/4915565029989?text=Hallo,%20ich%20interessiere%20mich%20für%20ein%20Service-Paket...", "_blank");
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
            Kostenlose Erstberatung
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
              <span className="text-foreground">Vorteile</span>
              <span className="text-muted-foreground">/</span>
              <span className="text-muted-foreground">Proaktive Betreuung – Probleme vermeiden</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-white to-neutral-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-accent hover:underline mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Zurück zur Startseite
            </Link>
            
            <h1 className="text-hero mb-4">Proaktive Betreuung – Probleme vermeiden</h1>
            <p className="text-subtitle">Erkennen, bevor es brennt.</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                {/* Haupttext */}
                <div>
                  <p className="text-foreground leading-relaxed">
                    Proaktive IT-Betreuung bedeutet: Wir sehen Probleme, bevor sie entstehen. Kontinuierliches Monitoring, regelmäßige Updates und Wartungsfenster halten Ihre Systeme stabil. Anstatt zu warten, bis etwas kaputt geht, überwachen wir Festplatten, Speicher, Netzwerk und Sicherheitslücken. Frühwarnungen geben uns Zeit zu handeln, bevor Sie überhaupt merken, dass etwas schief läuft. Diese Herangehensweise reduziert Ausfälle drastisch und spart Ihnen Zeit, Nerven und Geld. Präventive Wartung ist wie beim Auto: Besser den Ölwechsel rechtzeitig machen, als den Motor tauschen. Unsere Kunden erleben weniger IT-Störungen, weil wir vorausschauend agieren statt nur zu reagieren.
                  </p>
                </div>

                {/* Was ist inkludiert */}
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Was ist inkludiert?</h2>
                  <ul className="space-y-4">
                    {[
                      "Kontinuierliches System-Monitoring",
                      "Automatisches Patch-Management", 
                      "Frühwarnungen bei Problemen",
                      "Kapazitätsplanung und -überwachung",
                      "Präventive Wartungsmaßnahmen"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Beispiel aus Köln */}
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Beispiel aus Köln</h2>
                  <div className="bg-neutral-50 border border-border rounded-xl p-6">
                    <p className="text-foreground leading-relaxed">
                      „Festplatte zeigt erste Warnzeichen (Deutz). Proaktive Datensicherung + Austausch am Wochenende. Montag läuft alles normal – Ausfall verhindert."
                    </p>
                  </div>
                </div>
              </div>

              {/* Sticky Sidebar - Desktop */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-white border border-border rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-4">Jetzt starten</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Lassen Sie uns über Ihre IT-Herausforderungen sprechen.
                  </p>
                  <div className="space-y-3">
                    <button
                      onClick={handleConsultation}
                      className="btn-hero w-full"
                    >
                      Kostenlose Erstberatung
                    </button>
                    <button
                      onClick={handleWhatsApp}
                      className="btn-whatsapp w-full justify-center"
                      aria-label="Chat auf WhatsApp starten"
                    >
                      <img src={WhatsAppIcon} alt="WhatsApp" className="h-4 w-4" />
                      WhatsApp-Support starten
                    </button>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-border text-center">
                    <p className="text-xs text-muted-foreground">
                      Schnelle Antwort garantiert
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BenefitProaktiveBetreuung;