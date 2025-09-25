import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, CheckCircle } from "lucide-react";
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
            
            <h1 className="text-hero mb-4">Ihr IT-Partner aus Köln – persönlich, klar, zuverlässig</h1>
            <p className="text-subtitle">
              Tech Hilfe Pro steht für proaktive IT-Betreuung mit verständlicher Sprache und planbaren Kosten.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                {/* Main Content */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-foreground">
                    Tech Hilfe Pro steht für proaktive IT-Betreuung mit verständlicher Sprache und planbaren Kosten. 
                    Wir kombinieren Erfahrung aus Vor-Ort-Einsätzen mit modernen Managed-Service-Prinzipien – 
                    für Privatkunden und KMU.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-foreground">
                    Geleitet von <strong>José Carlos Martin Lache</strong>, fokussieren wir uns auf Stabilität, 
                    Sicherheit und kurze Reaktionszeiten. Wir erklären ohne Fachjargon, dokumentieren sauber 
                    und handeln vorausschauend.
                  </p>
                </div>

                {/* Trust Points */}
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Feste Ansprechpartner",
                    "Klare Pakete statt Überraschungen", 
                    "Datenschutz ernst genommen (DSGVO)",
                    "Lokal erreichbar: Köln & Umgebung"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="bg-neutral-50 rounded-2xl p-8">
                  <h2 className="text-2xl font-semibold mb-6 text-foreground">Kontakt & Erreichbarkeit</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3 text-foreground">Kontaktdaten</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p>José Carlos Martin Lache</p>
                        <p>kontakt@techhilfepro.de</p>
                        <p>+49 1556 5029989</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3 text-foreground">Servicegebiet</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p>Köln & Umgebung</p>
                        <p>Remote-Support deutschlandweit</p>
                      </div>
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

export default About;