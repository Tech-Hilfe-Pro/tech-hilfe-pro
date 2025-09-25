import { Link } from "react-router-dom";
import { Check, ArrowLeft, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/assets/whatsapp.svg";

const Packages = () => {
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-accent hover:underline mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Zurück zur Startseite
            </Link>
            
            <h1 className="text-hero mb-4">Pakete für Privat – klar, fair, planbar</h1>
            <p className="text-subtitle">
              Wählen Sie das Paket, das zu Ihrem Bedarf passt. Monatlich kündbar mit 15% Rabatt bei jährlicher Zahlung.
            </p>
          </div>
        </section>

        {/* Package Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                {/* Main Package */}
                <div className="max-w-lg mx-auto lg:mx-0">
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-accent shadow-md">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-gradient-to-r from-brand-start to-brand-end text-white px-4 py-1 rounded-full text-sm font-medium">
                        Empfohlen
                      </span>
                    </div>

                    <div className="p-8">
                      <div className="text-center mb-8">
                        <h2 className="text-2xl font-semibold text-foreground mb-2">
                          HOME CARE Home
                        </h2>
                        <p className="text-muted-foreground mb-4">
                          Komplette IT-Betreuung für Ihr Zuhause
                        </p>
                        <div className="flex items-baseline justify-center mb-2">
                          <span className="text-4xl font-bold text-foreground">
                            19
                          </span>
                          <span className="text-muted-foreground ml-1">
                            €/Monat (inkl. MwSt.)
                          </span>
                        </div>
                        <p className="text-sm text-success font-medium">
                          15% Rabatt bei jährlicher Zahlung
                        </p>
                      </div>

                      <ul className="space-y-4 mb-8">
                        {[
                          "Unbegrenzter Remote-Support (werktags)",
                          "Telefon- und WhatsApp-Support",
                          "Regelmäßige Updates & Patch-Management",
                          "Monatlicher System-Gesundheitscheck",
                          "Erklärungen ohne Fachjargon"
                        ].map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <Check className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <button
                        onClick={handleConsultation}
                        className="btn-hero w-full mb-6"
                      >
                        Kostenlose Erstberatung
                      </button>
                      
                      <div className="border-t border-border pt-6">
                        <p className="text-xs text-muted-foreground mb-3 font-medium">
                          Nicht enthalten / optional:
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Vor-Ort-Einsätze, Hardware, Ersatzteile, Spezialsoftware
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing Without Package */}
                <div className="mt-12">
                  <div className="bg-neutral-50 rounded-xl p-8">
                    <h3 className="text-xl font-semibold mb-6 text-foreground">Preise ohne Paket</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-foreground mb-2">79 €/Stunde</div>
                        <p className="text-muted-foreground">Vor Ort (Köln & Umgebung)</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-foreground mb-2">59 €/Stunde</div>
                        <p className="text-muted-foreground">Remote-Support</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-6 text-center">
                      Mindestabrechnung: 30 Minuten
                    </p>
                  </div>
                </div>

                {/* FAQ */}
                <div className="mt-16">
                  <h3 className="text-2xl font-semibold mb-8 text-foreground">Häufige Fragen</h3>
                  <div className="space-y-6">
                    {[
                      {
                        question: "Ist Hardware enthalten?",
                        answer: "Nein. Beratung ja; Beschaffung optional."
                      },
                      {
                        question: "Mindestlaufzeit?", 
                        answer: "Monatlich kündbar. 15% Rabatt bei jährlicher Zahlung."
                      },
                      {
                        question: "Reaktionszeit?",
                        answer: "Meist am selben Werktag; remote oft in 1–2 Stunden."
                      }
                    ].map((faq, index) => (
                      <div key={index} className="bg-white rounded-xl p-6 border border-border">
                        <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    ))}
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
                      WhatsApp Chat
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

export default Packages;