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
              Angaben gemäß § 5 TMG
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="bg-white border border-border rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Anbieter</h2>
                <div className="space-y-2 text-foreground">
                  <p><strong>Tech Hilfe Pro</strong></p>
                  <p>José Carlos Martin Lache</p>
                  <p>[Straße, Hausnummer]</p>
                  <p>[PLZ, Stadt] Köln</p>
                </div>
              </div>

              <div className="bg-white border border-border rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Kontakt</h2>
                <div className="space-y-2 text-foreground">
                  <p><strong>E-Mail:</strong> kontakt@techhilfepro.de</p>
                  <p><strong>Telefon:</strong> +49 1556 5029989</p>
                </div>
              </div>

              <div className="bg-white border border-border rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Umsatzsteuer-ID</h2>
                <p className="text-foreground">
                  [Umsatzsteuer-Identifikationsnummer nach §27 a Umsatzsteuergesetz: falls vorhanden]
                </p>
              </div>

              <div className="bg-white border border-border rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Haftungsausschluss</h2>
                
                <h3 className="text-lg font-semibold mb-3 text-foreground">Haftung für Inhalte</h3>
                <p className="text-foreground mb-4">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                  unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                  Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>

                <h3 className="text-lg font-semibold mb-3 text-foreground">Haftung für Links</h3>
                <p className="text-foreground mb-4">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
                  Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>

                <h3 className="text-lg font-semibold mb-3 text-foreground">Urheberrecht</h3>
                <p className="text-foreground">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                  Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>

              <div className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">EU-Streitschlichtung</h2>
                <p className="text-foreground mb-4">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a 
                    href="https://ec.europa.eu/consumers/odr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:underline ml-1"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="text-foreground">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
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

export default Impressum;