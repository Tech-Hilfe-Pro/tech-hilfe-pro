import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Phone, Mail, Calendar, MapPin, Shield, Clock, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/assets/whatsapp.svg";

const ITHilfeKoeln = () => {
  const handleWhatsApp = () => {
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track('whatsapp_start', { location: 'koeln_page' });
    }
    window.open("https://wa.me/4915565029989?text=Hallo,%20ich%20benötige%20IT-Hilfe%20in%20Köln...", "_blank");
  };

  const handleCall = () => {
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track('call_click', { location: 'koeln_page' });
    }
  };

  const problemsAndSolutions = [
    {
      problem: "WLAN funktioniert nicht oder ist langsam",
      solution: "Optimierung der Router-Einstellungen, Kanalwechsel und Signalstärke-Analyse"
    },
    {
      problem: "Computer startet nicht oder ist sehr langsam",
      solution: "Hardware-Diagnose, Festplatten-Check, Arbeitsspeicher-Test und System-Optimierung"
    },
    {
      problem: "Drucker druckt nicht oder zeigt Fehlermeldungen",
      solution: "Treiber-Installation, Netzwerk-Konfiguration und Wartungsarbeiten"
    },
    {
      problem: "E-Mail-Probleme mit Outlook oder anderen Programmen",
      solution: "Konto-Einrichtung, Server-Konfiguration und Synchronisations-Probleme lösen"
    },
    {
      problem: "Virenverdacht oder verdächtige Pop-ups",
      solution: "Malware-Scan, Virenschutz-Installation und System-Bereinigung"
    },
    {
      problem: "Datenverlust oder Backup-Probleme",
      solution: "Datenrettung, automatische Backup-Einrichtung und Cloud-Synchronisation"
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT-Hilfe Köln - Computer & WLAN Support vor Ort | Tech Hilfe Pro</title>
        <meta name="description" content="IT-Hilfe in Köln: Schneller Computer-Support, WLAN-Reparatur und Drucker-Service vor Ort. Erfahrene Techniker, faire Preise, meist Termin in 24-48h." />
        <meta name="keywords" content="IT-Hilfe Köln, Computer Reparatur Köln, WLAN Hilfe Köln, Drucker Service Köln, IT-Support vor Ort" />
        <link rel="canonical" href="https://techhilfepro.de/it-hilfe-koeln" />
        
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Tech Hilfe Pro - IT-Hilfe Köln",
          "url": "https://techhilfepro.de/it-hilfe-koeln",
          "telephone": "+49 15565029989",
          "email": "info@techhilfepro.de",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Schirmerstr. 7",
            "postalCode": "50823",
            "addressLocality": "Köln",
            "addressCountry": "DE"
          },
          "areaServed": "Köln",
          "openingHoursSpecification": [{
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
            "opens": "09:00",
            "closes": "18:00"
          }],
          "paymentAccepted": ["Card","Invoice"],
          "priceRange": "€€",
          "founder": { "@type": "Person", "name": "Jose Carlos Marin Lache" }
        })}
        </script>
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                IT-Hilfe in Köln - Schnell & Zuverlässig
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Professionelle IT-Unterstützung direkt bei Ihnen vor Ort in Köln. Von WLAN-Problemen bis zur Computer-Reparatur – 
                wir lösen Ihre IT-Herausforderungen schnell und kompetent. Meist können wir Ihnen bereits innerhalb von 24-48 Stunden helfen.
              </p>
            </div>

            {/* Vorteile */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-card rounded-lg">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Schnelle Termine</h3>
                <p className="text-muted-foreground">
                  Meist können wir Ihnen bereits in 24-48 Stunden einen Termin in Köln anbieten. 
                  Für Notfälle auch am gleichen Tag möglich.
                </p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Lokaler Service</h3>
                <p className="text-muted-foreground">
                  Direkter Service vor Ort in ganz Köln. Kurze Anfahrtswege bedeuten 
                  günstige Preise und flexible Terminplanung für Sie.
                </p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Transparente Preise</h3>
                <p className="text-muted-foreground">
                  Faire Festpreise ohne versteckte Kosten. Mitglieder zahlen nur 69 € pro Termin (bis 60 Min), 
                  Standard-Tarif 89 € pro Stunde.
                </p>
              </div>
            </div>

            {/* Häufige Probleme & Lösungen */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">
                Häufige IT-Probleme in Köln & unsere Lösungen
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {problemsAndSolutions.map((item, index) => (
                  <div key={index} className="bg-card p-6 rounded-lg border">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{item.problem}</h3>
                        <p className="text-muted-foreground text-sm">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Leiste */}
            <div className="bg-primary/5 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-center mb-6">
                Jetzt IT-Hilfe in Köln anfragen
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+4915565029989"
                  onClick={handleCall}
                  className="btn-primary inline-flex items-center gap-2 justify-center"
                >
                  <Phone className="h-4 w-4" />
                  Jetzt anrufen
                </a>
                <button
                  onClick={handleWhatsApp}
                  className="btn-whatsapp inline-flex items-center gap-2 justify-center"
                >
                  <img src={WhatsAppIcon} alt="WhatsApp" className="h-4 w-4" />
                  WhatsApp
                </button>
                <Link
                  to="/kontakt"
                  className="btn-secondary inline-flex items-center gap-2 justify-center"
                >
                  <Calendar className="h-4 w-4" />
                  Termin vereinbaren
                </Link>
              </div>
            </div>

            {/* Standort & Preise */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Unser Standort in Köln
                </h3>
                <div className="text-muted-foreground space-y-2">
                  <p><strong>Tech Hilfe Pro</strong></p>
                  <p>Schirmerstr. 7, 50823 Köln</p>
                  <p>Telefon: <a href="tel:+4915565029989" className="text-primary hover:underline">+49 1556 5029989</a></p>
                  <p>E-Mail: <a href="mailto:info@techhilfepro.de" className="text-primary hover:underline">info@techhilfepro.de</a></p>
                  <p>Öffnungszeiten: Mo–Fr 09:00–18:00</p>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Unsere Preise in Köln</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Remote-Support:</span>
                    <span className="font-medium">ab 39 € / 30 Min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vor-Ort Standard:</span>
                    <span className="font-medium">89 € / Std.</span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span>Mitgliederpreis Vor-Ort:</span>
                    <span className="font-medium text-primary">69 € / Termin*</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    * bis 60 Min, danach 19 € je angefangene 15 Min
                  </p>
                  <p className="text-xs text-muted-foreground mt-4 pt-4 border-t">
                    Keine Umsatzsteuer gem. §19 UStG (Kleinunternehmer)
                  </p>
                </div>
              </div>
            </div>

            {/* Abschluss */}
            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                Vertrauen Sie auf unsere langjährige Erfahrung in der IT-Betreuung. 
                Wir sind Ihr zuverlässiger Partner für alle IT-Belange in Köln.
              </p>
              <Link
                to="/"
                className="text-primary hover:underline"
              >
                ← Zurück zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ITHilfeKoeln;