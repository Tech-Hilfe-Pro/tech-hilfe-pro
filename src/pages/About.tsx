import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/assets/whatsapp.svg";

const About = () => {
  const handleConsultation = () => {
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track('cta_consultation', { location: 'about' });
    }
  };

  const handleWhatsApp = () => {
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track('whatsapp_start', { location: 'about' });
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
              <span className="text-foreground">Über uns</span>
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
            
            <h1 className="text-hero mb-6">Über uns</h1>
            <p className="text-xl font-medium text-foreground max-w-3xl leading-relaxed">
              <strong>Tech Hilfe Pro – Ihr IT-Partner in Köln, Neuss & Umgebung.</strong><br />
              Wir machen Technik verständlich, zuverlässig und bezahlbar – für 
              Privathaushalte, Homeoffice-Profis und Micro-KMU.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              
              {/* Mission */}
              <div>
                <h2 className="text-3xl font-semibold mb-4 text-foreground">Unsere Mission</h2>
                <p className="text-lg leading-relaxed text-foreground max-w-3xl">
                  Technik soll einfach laufen: sicher, planbar und ohne Überraschungen. 
                  Wir kombinieren geduldige Hilfe vor Ort mit schneller Fernwartung und klaren Preisen.
                </p>
              </div>

              {/* Wofür wir stehen */}
              <div>
                <h2 className="text-3xl font-semibold mb-6 text-foreground">Wofür wir stehen</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-semibold min-w-0">Nähe:</span>
                    <span className="text-foreground">Köln, Neuss & Umgebung. Persönlich, verlässlich.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-semibold min-w-0">Proaktiv:</span>
                    <span className="text-foreground">Updates, Backups, Security statt Feuerlöschen.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-semibold min-w-0">Transparenz:</span>
                    <span className="text-foreground">klare Leistungen, feste Paketpreise, monatlich kündbar.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-semibold min-w-0">Geduld:</span>
                    <span className="text-foreground">besonders wichtig bei Seniorinnen und Senioren.</span>
                  </li>
                </ul>
              </div>

              {/* Was Sie konkret bekommen */}
              <div>
                <h2 className="text-3xl font-semibold mb-6 text-foreground">Was Sie konkret bekommen</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-semibold min-w-0">Einrichtung & Umzug:</span>
                    <span className="text-foreground">PC/Mac, E-Mail, Cloud, NAS, Drucker, Daten-Umzug.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-semibold min-w-0">Sicherheit:</span>
                    <span className="text-foreground">Virenschutz, Firewall, VPN, Passwort-Manager, Updates & Patches.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-semibold min-w-0">Netzwerk:</span>
                    <span className="text-foreground">WLAN-Analyse, Mesh, Router-Setup, LAN-Verkabelung, Gastnetz.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-semibold min-w-0">Backup & Rettung:</span>
                    <span className="text-foreground">Cloud-Backup, NAS-Backup, Wiederherstellung, Foto-Archiv.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-semibold min-w-0">TV & Streaming:</span>
                    <span className="text-foreground">Senderliste einrichten/ordnen, Kabel/Sat/IPTV, Apps (z. B. ARD/ZDF, Netflix, Prime), Fernbedienungen & Sound.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-semibold min-w-0">Soforthilfe:</span>
                    <span className="text-foreground">Fernwartung oder Vor-Ort – meist am selben Tag.</span>
                  </li>
                </ul>
              </div>

              {/* So arbeiten wir */}
              <div>
                <h2 className="text-3xl font-semibold mb-6 text-foreground">So arbeiten wir</h2>
                <ol className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="text-accent font-bold text-lg min-w-0">1.</span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Kurzes Erstgespräch:</h3>
                      <p className="text-foreground">Problem, Ziel, Termin. 10-Min-Erstdiagnose kostenlos per Telefon/WhatsApp.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-accent font-bold text-lg min-w-0">2.</span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Diagnose remote oder vor Ort:</h3>
                      <p className="text-foreground">Remote zuerst (schneller, günstiger, ohne Anfahrt). Vor Ort, wenn Hardware/Empfang/Verkabelung betroffen ist.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-accent font-bold text-lg min-w-0">3.</span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Fix + Absicherung:</h3>
                      <p className="text-foreground">Lösung umsetzen, Updates & Schutz aktivieren; kurze Einweisung auf Wunsch.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-accent font-bold text-lg min-w-0">4.</span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Nachweis & Tipps:</h3>
                      <p className="text-foreground">kurze, verständliche Doku mit den wichtigsten Änderungen und Empfehlungen.</p>
                    </div>
                  </li>
                </ol>
                
                <div className="mt-6 p-6 bg-neutral-50 rounded-2xl">
                  <p className="text-foreground">
                    <strong>Ihre Vorteile:</strong> weniger Wartezeit, Festpreise vor Start, 
                    kein Fachchinesisch, ein fester Ansprechpartner.
                  </p>
                </div>
              </div>

              {/* Belege statt Versprechen */}
              <div>
                <h2 className="text-3xl font-semibold mb-6 text-foreground">Belege statt Versprechen</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-semibold min-w-0">Reaktionszeit:</span>
                    <span className="text-foreground">in der Regel &lt; 24 h in Köln &amp; Neuss, remote oft &lt; 2 h.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-semibold min-w-0">Feste Paketpreise</span>
                    <span className="text-foreground">statt „mal sehen"; Kostendeckel vorab.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-semibold min-w-0">Zufriedenheitsgarantie:</span>
                    <span className="text-foreground">14 Tage bei Abos, 7 Tage bei Einzelleistungen.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-semibold min-w-0">No-Fix-No-Fee:</span>
                    <span className="text-foreground">keine Kosten bei erfolgloser Ersthilfe (bis 30 Min remote).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-semibold min-w-0">DSGVO-konform:</span>
                    <span className="text-foreground">Zugriff nur mit Einwilligung, keine Datenkopien ohne Rücksprache.</span>
                  </li>
                </ul>
              </div>

              {/* Kontakt */}
              <div className="bg-neutral-50 rounded-2xl p-8">
                <h2 className="text-3xl font-semibold mb-6 text-foreground">Kontakt</h2>
                <div className="space-y-2 mb-6">
                  <p className="text-foreground">
                    Telefon: <strong className="text-accent">+49 155 65029989</strong> &middot;{" "}
                    E-Mail: <strong className="text-accent">kontakt@techhilfepro.de</strong>
                  </p>
                  <p className="text-muted-foreground">
                    Mo–Fr 9–19 Uhr, Notfälle nach Absprache.
                  </p>
                </div>
                
                <Link
                  to="/kontakt"
                  onClick={handleConsultation}
                  className="btn-hero inline-flex items-center gap-2"
                >
                  Jetzt anfragen
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;