import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/assets/whatsapp.svg";

const BenefitSchnelleReaktion = () => {
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
              <span className="text-muted-foreground">Schnelle Reaktion – meist am selben Tag</span>
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
            
            <h1 className="text-hero mb-4">Schnelle Reaktion – meist am selben Tag</h1>
            <p className="text-subtitle">Ohne Hotline-Hürden. Remote in 1–2 Stunden, Vor-Ort nach Bedarf.</p>
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
                    In der IT zählt jede Stunde. Unser Versprechen: Wir reagieren in den meisten Fällen noch am selben Tag – remote oft in 1–2 Stunden. Der Weg dahin ist schlank: Anfragen landen ohne Umwege beim richtigen Ansprechpartner; Monitoring und feste Wartungsfenster verhindern vieles im Vorfeld. Was bleibt, lösen wir pragmatisch – telefonisch, per Fernwartung oder vor Ort. Im Gegensatz zum klassischen Break-Fix, bei dem Reaktionszeiten erst starten, wenn jemand verfügbar ist, begreifen wir Support als kontinuierliche Betreuung. Das bedeutet: kurze Wege, klare Verantwortung, verbindliche Absprachen. Ergebnis: weniger Wartezeit, weniger Ausfall, mehr Ruhe im Alltag. Selbst kleine Anliegen nehmen wir ernst, damit aus „kurz nervig" kein „richtig teuer" wird.
                  </p>
                </div>

                {/* Was ist inkludiert */}
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Was ist inkludiert?</h2>
                  <ul className="space-y-4">
                    {[
                      "Schnelle Remote-Slots (werktags), klare Reaktionsfenster",
                      "Direkter Draht per Telefon & WhatsApp", 
                      "Eskalation auf Vor-Ort nur bei echtem Bedarf",
                      "Protokoll der Schritte zur Nachvollziehbarkeit"
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
                      „WLAN bricht vor Videocall weg (Ehrenfeld). Kanalwechsel + Repeater-Platzierung remote in 45 Min. Stabiler Call, keine Zusatztermine nötig."
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

export default BenefitSchnelleReaktion;