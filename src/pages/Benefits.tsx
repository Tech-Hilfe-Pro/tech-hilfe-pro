import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, MessageCircle, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Benefits = () => {
  const { slug } = useParams();

  const benefitData = {
    "planbare-kosten": {
      title: "Planbare IT-Kosten ohne Überraschungen",
      subtitle: "Feste Monatsraten. Klare Leistungen.",
      included: [
        "Definierte Reaktionszeiten",
        "Remote-Support inklusive",
        "Regelmäßige Wartung nach Plan",
        "Kurze Monatsberichte",
        "Transparente Kostenaufstellung"
      ],
      comparison: {
        breakfix: "Sie zahlen erst, wenn es weh tut. Ungeplante Kosten, längere Ausfälle, hoher Stress.",
        service: "Gleichmäßige Kosten, weniger Störungen, planbare Betreuung, klare Zuständigkeiten. Wer kalkuliert, spart Zeit, Nerven und Geld."
      }
    },
    "proaktive-betreuung": {
      title: "Proaktive Betreuung statt Störungstheater", 
      subtitle: "Probleme vermeiden, bevor sie entstehen.",
      included: [
        "Kontinuierliches System-Monitoring",
        "Automatisches Patch-Management",
        "Frühwarnungen bei Problemen",
        "Kapazitätsplanung und -überwachung",
        "Präventive Wartungsmaßnahmen"
      ],
      comparison: {
        breakfix: "Reaktiv bedeutet Stillstand und Feuerwehrmodus.",
        service: "Proaktiv bedeutet Ruhe, Planbarkeit und weniger Risiko."
      }
    },
    "schneller-support": {
      title: "Schneller Support – remote oder vor Ort",
      subtitle: "Kurze Wege, klare Antworten.", 
      included: [
        "Hotline ohne Warteschleife",
        "WhatsApp für schnelle Anfragen",
        "Sicherer Remotezugriff",
        "Vor-Ort-Service in Köln",
        "Ein Ansprechpartner für alles"
      ],
      comparison: {
        breakfix: "Ticket-Ping-Pong und stundenlanges Warten auf Rückruf.",
        service: "Ein Ansprechpartner, verbindliche Reaktionszeiten."
      }
    },
    "sicherheit-und-updates": {
      title: "Sicherheit & Updates im Griff",
      subtitle: "Patches, EDR, Backups – DSGVO-bewusst.",
      included: [
        "Geplante Update-Fenster",
        "Optional EDR",
        "Offsite-Backups",
        "Wiederherstellungstests",
        "DSGVO-konforme Umsetzung"
      ],
      comparison: {
        breakfix: "Einmalige 'Sicherheitsaktionen' reichen nicht.",
        service: "Kontinuität schützt vor echten Schäden."
      }
    },
    "produktivitaet-statt-stillstand": {
      title: "Produktivität statt Stillstand",
      subtitle: "Stabile Systeme. Konzentriertes Arbeiten.",
      included: [
        "Wartungstakte",
        "Performance-Checks",
        "Bottleneck-Analysen",
        "Ausfallzeiten minimieren",
        "Arbeitsplatz-Optimierung"
      ],
      comparison: {
        breakfix: "Jede Ausfallstunde kostet.",
        service: "Prävention rechnet sich."
      }
    },
    "transparente-leistungen": {
      title: "Transparente Leistungen, klare Grenzen",
      subtitle: "Was drin ist – und was nicht.",
      included: [
        "Detaillierte Leistungsbeschreibung",
        "Klare Reaktionszeiten",
        "Add-ons transparent benannt",
        "Ausschlüsse fair kommuniziert",
        "Keine versteckten Kosten"
      ],
      comparison: {
        breakfix: "Grauzonen führen zu Diskussionen und unklaren Rechnungen.",
        service: "Packen wir Klartext auf die Seite."
      }
    }
  };

  const benefit = slug ? benefitData[slug as keyof typeof benefitData] : null;

  if (!benefit) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-8">
              <X className="h-16 w-16 text-destructive mx-auto mb-4" />
              <h1 className="text-3xl font-semibold mb-4">Vorteil nicht gefunden</h1>
              <p className="text-muted-foreground">
                Der gewünschte Vorteil konnte nicht gefunden werden.
              </p>
            </div>
            <Link to="/" className="btn-hero">
              Zur Startseite
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleConsultation = () => {
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track('cta_consultation', { location: `benefit_${slug}` });
    }
  };

  const handleWhatsApp = () => {
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track('whatsapp_start', { location: `benefit_${slug}` });
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
            <MessageCircle className="h-5 w-5" />
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
              <span className="text-muted-foreground">{benefit.title}</span>
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
            
            <h1 className="text-hero mb-4">{benefit.title}</h1>
            <p className="text-subtitle">{benefit.subtitle}</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                {/* Was ist inkludiert */}
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Was ist inkludiert?</h2>
                  <ul className="space-y-4">
                    {benefit.included.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Vergleich */}
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Break-Fix vs. Service-Paket</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                      <h3 className="font-semibold text-red-800 mb-3">❌ Break-Fix Ansatz</h3>
                      <p className="text-red-700 text-sm leading-relaxed">{benefit.comparison.breakfix}</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                      <h3 className="font-semibold text-green-800 mb-3">✅ Service-Paket</h3>
                      <p className="text-green-700 text-sm leading-relaxed">{benefit.comparison.service}</p>
                    </div>
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
                      <MessageCircle className="h-4 w-4" />
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

export default Benefits;