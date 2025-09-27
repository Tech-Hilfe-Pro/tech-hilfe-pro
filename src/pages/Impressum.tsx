import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Impressum = () => {
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
              <span className="text-foreground">Impressum</span>
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
            
            <h1 className="text-hero mb-4">Impressum</h1>
            <p className="text-subtitle">
              Angaben gemäß Telemediengesetz (TMG) und Medienstaatsvertrag (MStV)
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none space-y-8">
              
              <div className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Angaben gemäß § 5 TMG</h2>
                <div className="text-foreground leading-relaxed">
                  <p className="mb-2"><strong>Tech Hilfe Pro</strong></p>
                  <p className="mb-1">[Vor- und Nachname / Firmenname]</p>
                  <p className="mb-1">[Anschrift: Straße Hausnummer]</p>
                  <p className="mb-4">[PLZ Ort], Deutschland</p>
                  
                  <p className="mb-1">Telefon: [Telefonnummer]</p>
                  <p className="mb-1">E-Mail: [E-Mail-Adresse]</p>
                  <p className="mb-4">WhatsApp: [Nummer oder „Click-to-Chat"]</p>
                  
                  <p>USt-Status: Kleinunternehmer gemäß § 19 UStG, <strong>kein</strong> Ausweis von Umsatzsteuer.</p>
                </div>
              </div>

              <div className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Vertretungsberechtigte Person</h2>
                <div className="text-foreground leading-relaxed">
                  <p>[Name der verantwortlichen Person]</p>
                </div>
              </div>

              <div className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Verantwortlich i. S. d. § 18 Abs. 2 MStV</h2>
                <div className="text-foreground leading-relaxed">
                  <p>[Name, Anschrift wie oben]</p>
                </div>
              </div>

              <div className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">EU-Streitschlichtung / Verbraucherstreitbeilegung</h2>
                <div className="text-foreground leading-relaxed">
                  <p className="mb-4">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit: 
                    <a href="https://ec.europa.eu/consumers/odr/" className="text-primary hover:text-primary/80 underline ml-1" target="_blank" rel="noopener noreferrer">
                      https://ec.europa.eu/consumers/odr/
                    </a>
                  </p>
                  <p>
                    Wir sind <strong>nicht verpflichtet</strong> und <strong>nicht bereit</strong>, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Haftung für Inhalte</h2>
                <div className="text-foreground leading-relaxed">
                  <p>
                    Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8–10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen entfernen wir diese Inhalte umgehend.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Haftung für Links</h2>
                <div className="text-foreground leading-relaxed">
                  <p>
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Links umgehend.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Urheberrecht</h2>
                <div className="text-foreground leading-relaxed">
                  <p>
                    Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors/Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Bild- und Icon-Nachweise</h2>
                <div className="text-foreground leading-relaxed">
                  <p>
                    Eigene Grafiken/Assets; UI-Icons u. a. von <strong>lucide-react</strong>. Marken-/Produktnamen sind Eigentum der jeweiligen Inhaber.
                  </p>
                </div>
              </div>

              {/* Contact Section */}
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Kontakt</h3>
                <p className="text-muted-foreground mb-4">
                  Bei Fragen zu diesem Impressum oder rechtlichen Angelegenheiten können Sie uns kontaktieren:
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-foreground">E-Mail: kontakt@techhilfepro.de</p>
                  <p className="text-foreground">Telefon: +49 1556 5029989</p>
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

export default Impressum;