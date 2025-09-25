import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Vorteile = () => {
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
              <span className="text-foreground">Vorteile</span>
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
            
            <h1 className="text-hero mb-4">Unsere Vorteile</h1>
            <p className="text-subtitle">
              Entdecken Sie, warum Tech Hilfe Pro die richtige Wahl für Ihre IT-Betreuung ist.
            </p>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Planbare Kosten",
                  description: "Schluss mit Überraschungen. Feste Monatsrate statt unklarer Stunden.",
                  href: "/benefits/planbare-kosten"
                },
                {
                  title: "Proaktive Betreuung", 
                  description: "Wir warten und überwachen, bevor Probleme entstehen.",
                  href: "/benefits/proaktive-betreuung"
                },
                {
                  title: "Schneller Support",
                  description: "Telefon, Remote oder vor Ort. Ohne Warteschleife.",
                  href: "/benefits/schneller-support"
                },
                {
                  title: "Sicherheit & Updates",
                  description: "Patches, Backups, EDR. DSGVO-bewusst.",
                  href: "/benefits/sicherheit-und-updates"
                },
                {
                  title: "Produktivität statt Stillstand",
                  description: "Weniger Unterbrechungen, mehr Output.",
                  href: "/benefits/produktivitaet-statt-stillstand"
                },
                {
                  title: "Transparente Leistungen",
                  description: "Klare Pakete, klare Grenzen, ehrliche Beratung.",
                  href: "/benefits/transparente-leistungen"
                }
              ].map((benefit, index) => (
                <Link
                  key={benefit.href}
                  to={benefit.href}
                  className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Vorteile;