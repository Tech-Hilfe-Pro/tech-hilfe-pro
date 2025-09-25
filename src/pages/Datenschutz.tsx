import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Breadcrumb */}
        <div className="bg-neutral-50 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-accent hover:underline">
                Startseite
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground">Datenschutz</span>
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
            
            <h1 className="text-hero mb-4">Datenschutzerklärung</h1>
            <p className="text-subtitle">
              Informationen zum Umgang mit Ihren personenbezogenen Daten
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none space-y-8">
              <div className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Verantwortlicher</h2>
                <div className="space-y-2 text-foreground">
                  <p><strong>Tech Hilfe Pro</strong></p>
                  <p>José Carlos Martin Lache</p>
                  <p>[Straße, Hausnummer]</p>
                  <p>[PLZ, Stadt] Köln</p>
                  <p><strong>E-Mail:</strong> kontakt@techhilfepro.de</p>
                  <p><strong>Telefon:</strong> +49 1556 5029989</p>
                </div>
              </div>

              <div className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Hosting</h2>
                <p className="text-foreground mb-4">
                  <strong>Cloudflare Pages</strong>
                </p>
                <p className="text-foreground mb-4">
                  <strong>Zweck:</strong> Bereitstellung und Auslieferung der Website
                </p>
                <p className="text-foreground mb-4">
                  <strong>Rechtsgrundlage:</strong> Berechtigtes Interesse gem. Art. 6 Abs. 1 lit. f DSGVO 
                  (zuverlässige und sichere Bereitstellung der Website)
                </p>
                <p className="text-foreground mb-4">
                  <strong>Empfänger:</strong> Cloudflare Inc., 101 Townsend St, San Francisco, CA 94107, USA
                </p>
                <p className="text-foreground">
                  <strong>Drittlandtransfer:</strong> USA mit Angemessenheitsbeschluss der EU-Kommission
                </p>
              </div>

              <div className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Website-Analytik</h2>
                <p className="text-foreground mb-4">
                  <strong>Umami Analytics</strong>
                </p>
                <p className="text-foreground mb-4">
                  <strong>Zweck:</strong> Anonyme Analyse der Website-Nutzung zur Verbesserung unserer Dienstleistungen
                </p>
                <p className="text-foreground mb-4">
                  <strong>Rechtsgrundlage:</strong> Berechtigtes Interesse gem. Art. 6 Abs. 1 lit. f DSGVO
                </p>
                <p className="text-foreground mb-4">
                  <strong>Datenverarbeitung:</strong> IP-Adressen werden anonymisiert, keine personenbezogenen Profile
                </p>
                <p className="text-foreground">
                  <strong>Cookies:</strong> Umami verwendet keine Cookies
                </p>
              </div>

              <div className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Kontaktformular</h2>
                <p className="text-foreground mb-4">
                  <strong>Zweck:</strong> Bearbeitung Ihrer Anfrage und Kontaktaufnahme
                </p>
                <p className="text-foreground mb-4">
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) bzw. lit. b DSGVO 
                  (Vertragsanbahnung)
                </p>
                <p className="text-foreground mb-4">
                  <strong>Datenarten:</strong> Name, E-Mail-Adresse, Telefonnummer (optional), Nachrichteninhalt
                </p>
                <p className="text-foreground mb-4">
                  <strong>Speicherdauer:</strong> Bis zur vollständigen Bearbeitung Ihrer Anfrage, 
                  maximal 2 Jahre
                </p>
                <p className="text-foreground">
                  <strong>Empfänger:</strong> Formulardaten werden an unseren E-Mail-Provider übermittelt
                </p>
              </div>

              <div className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Ihre Rechte als Betroffener</h2>
                <div className="space-y-4 text-foreground">
                  <p><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie haben das Recht zu erfahren, 
                  ob und welche personenbezogenen Daten wir von Ihnen verarbeiten.</p>
                  
                  <p><strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Sie haben das Recht, 
                  unrichtige Daten berichtigen zu lassen.</p>
                  
                  <p><strong>Löschungsrecht (Art. 17 DSGVO):</strong> Sie haben das Recht auf Löschung 
                  Ihrer personenbezogenen Daten unter bestimmten Voraussetzungen.</p>
                  
                  <p><strong>Einschränkungsrecht (Art. 18 DSGVO):</strong> Sie haben das Recht, 
                  die Verarbeitung einschränken zu lassen.</p>
                  
                  <p><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, 
                  Ihre Daten in strukturierter Form zu erhalten.</p>
                  
                  <p><strong>Beschwerderecht:</strong> Sie haben das Recht, sich bei einer Aufsichtsbehörde 
                  zu beschweren.</p>
                </div>
              </div>

              <div className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Widerrufsrecht</h2>
                <p className="text-foreground">
                  Soweit die Verarbeitung auf einer Einwilligung beruht, haben Sie das Recht, 
                  diese jederzeit zu widerrufen. Der Widerruf der Einwilligung berührt nicht 
                  die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung.
                </p>
              </div>

              <div className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Änderungen der Datenschutzerklärung</h2>
                <p className="text-foreground mb-4">
                  Wir behalten uns vor, diese Datenschutzerklärung zu aktualisieren, 
                  um sie an geänderte Rechtslagen oder bei Änderungen des Dienstes sowie 
                  der Datenverarbeitung anzupassen.
                </p>
                <p className="text-foreground">
                  <strong>Stand:</strong> [Datum der letzten Aktualisierung einfügen]
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Datenschutz;