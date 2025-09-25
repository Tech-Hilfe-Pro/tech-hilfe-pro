import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, ChevronRight, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/assets/whatsapp.svg";

const Benefits = () => {
  const { slug } = useParams();

  const benefitData = {
    "lokaler-support": {
      title: "Lokaler Support – Köln & Umgebung",
      subtitle: "Schnell vor Ort, persönlich erreichbar, pragmatisch gelöst.",
      metaTitle: "Lokaler IT-Support in Köln – schnell vor Ort | Tech Hilfe Pro",
      metaDescription: "Schnelle Hilfe in Köln & Umgebung: fester Ansprechpartner, kurze Anfahrt, WhatsApp-Direktkontakt. Vor Ort, telefonisch oder per Fernwartung.",
      description: "Unsere Nähe macht den Unterschied. Wenn Sie in Köln oder Umgebung Hilfe brauchen, sind wir schnell vor Ort – ohne Callcenter-Schleifen. Lokaler Support heißt: feste Ansprechpartner, kurze Wege, klare Absprachen. Ob Privatkunde in Nippes oder Home-Office in Ehrenfeld – wir sind meist in wenigen Stunden bei Ihnen. Viele Anliegen lösen wir bereits vorher per Fernwartung, damit Vor-Ort-Termine kurz und effizient bleiben. Break-Fix führt oft zu Panikaktionen und teuren Ad-hoc-Einsätzen. Wir setzen dagegen auf Partnerschaft: direkter Draht per WhatsApp, schnelle Einordnung, Lösungsvorschlag, Termin nach Bedarf. So kombinieren wir das Beste aus zwei Welten: die Nähe eines lokalen Technikers und die Geschwindigkeit moderner Remote-Tools. Ergebnis: weniger Ausfälle, weniger Stress, planbare Kosten.",
      included: [
        "Direkter Kontakt (Telefon/WhatsApp), klare Zeitfenster",
        "Priorisierte Vor-Ort-Termine in Köln & Umgebung",
        "Vorab-Check per Fernwartung zur Minimierung der Einsatzzeit",
        "Dokumentation der Lösung für spätere Nachfragen"
      ],
      example: "Drucker streikt vor einem Kundentermin (Sülz). Diagnose remote in 30 Min., Ersatztoner mitgebracht, Vor-Ort-Fix in 20 Min. Meeting fand pünktlich statt."
    },
    "schnelle-reaktion": {
      title: "Schnelle Reaktion – meist am selben Tag",
      subtitle: "Ohne Hotline-Hürden. Remote in 1–2 Stunden, Vor-Ort nach Bedarf.",
      metaTitle: "Schnelle IT-Reaktion – meist am selben Tag | Tech Hilfe Pro",
      metaDescription: "Reaktionszeit, die sich rechnet: Remote oft in 1–2 Stunden, Vor-Ort nach Bedarf. Ohne Hotline-Hürden, mit klarer Priorisierung.",
      description: "In der IT zählt jede Stunde. Unser Versprechen: Wir reagieren in den meisten Fällen noch am selben Tag – remote oft in 1–2 Stunden. Der Weg dahin ist schlank: Anfragen landen ohne Umwege beim richtigen Ansprechpartner; Monitoring und feste Wartungsfenster verhindern vieles im Vorfeld. Was bleibt, lösen wir pragmatisch – telefonisch, per Fernwartung oder vor Ort. Im Gegensatz zum klassischen Break-Fix, bei dem Reaktionszeiten erst starten, wenn jemand verfügbar ist, begreifen wir Support als kontinuierliche Betreuung. Das bedeutet: kurze Wege, klare Verantwortung, verbindliche Absprachen. Ergebnis: weniger Wartezeit, weniger Ausfall, mehr Ruhe im Alltag. Selbst kleine Anliegen nehmen wir ernst, damit aus 'kurz nervig' kein 'richtig teuer' wird.",
      included: [
        "Schnelle Remote-Slots (werktags), klare Reaktionsfenster",
        "Direkter Draht per Telefon & WhatsApp",
        "Eskalation auf Vor-Ort nur bei echtem Bedarf",
        "Protokoll der Schritte zur Nachvollziehbarkeit"
      ],
      example: "WLAN bricht vor Videocall weg (Ehrenfeld). Kanalwechsel + Repeater-Platzierung remote in 45 Min. Stabiler Call, keine Zusatztermine nötig."
    },
    "planbare-kosten": {
      title: "Planbare Kosten – feste Monatsraten",
      subtitle: "Kalkulierbar statt überraschend. Klar, fair, inkl. MwSt.",
      metaTitle: "Planbare IT-Kosten – feste Monatsrate | Tech Hilfe Pro",
      metaDescription: "Monatlich kalkulierbar statt Überraschungen. 19 €/Monat inkl. MwSt., 15 % Rabatt jährlich. Klarer Leistungsumfang, transparente Grenzen.",
      description: "Unerwartete Rechnungen sind der größte Frust in der IT. Mit festen Monatsraten schaffen wir Klarheit: Sie wissen genau, was anfällt – unabhängig davon, ob die Lösung 10 Minuten oder 2 Stunden braucht. Anders als beim Break-Fix addieren sich keine unplanbaren Stunden und Anfahrten; stattdessen investieren Sie in Stabilität. Das Paketmodell motiviert uns, Probleme nachhaltig zu beheben und Störungen zu vermeiden. Regelmäßige Updates, Checks und klare Kommunikation gehören dazu. Bei jährlicher Zahlung erhalten Sie 15 % Rabatt. Planbare Kosten sind mehr als Zahlen: Sie bedeuten Ruhe und Fokus auf das, was zählt – Ihren Alltag oder Ihr Geschäft. Transparenz ist Pflicht: Was enthalten ist, sagen wir; was optional ist, ebenso.",
      included: [
        "Feste Monatsrate (Privat), inkl. MwSt.",
        "Remote-Support werktags, Telefon/WhatsApp inklusive",
        "Regelmäßige Updates & Patch-Management",
        "Monatlicher System-Check mit kurzer Auswertung"
      ],
      example: "Privatkunde mit Home-Office (Nippes). Drei kleinere Themen im Monat gelöst, keine Zusatzrechnung. Ergebnis: stabile Workflows, planbarer Aufwand."
    }
  };

  const benefit = slug ? benefitData[slug as keyof typeof benefitData] : null;

  // Set SEO meta tags
  React.useEffect(() => {
    if (benefit) {
      document.title = benefit.metaTitle || benefit.title;
      
      // Update meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', benefit.metaDescription || benefit.subtitle);
    }
  }, [benefit]);

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
      window.umami.track('cta_consultation', { location: 'benefit_page' });
    }
    // Redirect to contact page
    window.location.href = '/kontakt';
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

      <div className="lg:flex">
        {/* Main Content */}
        <main className="flex-1 lg:mr-80 pb-20 lg:pb-0">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
            {/* Breadcrumb */}
            <nav className="flex mb-8" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link to="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary">
                    Startseite
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-muted-foreground mx-1" />
                    <Link to="/vorteile" className="text-sm font-medium text-muted-foreground hover:text-primary">
                      Vorteile
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-muted-foreground mx-1" />
                    <span className="text-sm font-medium text-foreground">
                      {benefit.title}
                    </span>
                  </div>
                </li>
              </ol>
            </nav>

            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {benefit.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {benefit.subtitle}
              </p>
            </div>

            {/* Main Text */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>

            {/* What's Included */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Was ist inkludiert?
              </h2>
              <div className="grid gap-4">
                {benefit.included.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Example from Cologne */}
            <div className="mb-12 bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Beispiel aus Köln
              </h2>
              <p className="text-muted-foreground italic">
                „{benefit.example}"
              </p>
            </div>
          </div>
        </main>

        {/* Sticky Sidebar - Desktop */}
        <aside className="hidden lg:block fixed right-0 top-0 h-full w-80 bg-gray-50 dark:bg-gray-900 border-l border-border p-6 overflow-y-auto">
          <div className="sticky top-6">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Bereit für professionellen IT-Support?
            </h3>
            
            <div className="space-y-4">
              <button
                onClick={handleConsultation}
                className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Kostenlose Erstberatung
              </button>
              
              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
              >
                <img src={WhatsAppIcon} alt="WhatsApp" className="w-5 h-5" />
                <span>WhatsApp Support starten</span>
              </button>
            </div>

            <div className="mt-8 text-sm text-muted-foreground">
              <p>✓ Kostenlose Erstberatung</p>
              <p>✓ Transparente Preise</p>
              <p>✓ Schnelle Reaktionszeiten</p>
            </div>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
};

export default Benefits;