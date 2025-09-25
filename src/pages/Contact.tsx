import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Send, CheckCircle, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    packageInterest: "",
    consent: false
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      alert('Bitte stimmen Sie der Datenverarbeitung zu.');
      return;
    }

    setFormStatus('sending');

    // Track form submission
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track('contact_form_submit', { 
        packageInterest: formData.packageInterest 
      });
    }

    try {
      // Simulate form submission - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, we'll show success
      setFormStatus('success');
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        packageInterest: "",
        consent: false
      });
    } catch (error) {
      setFormStatus('error');
    }
  };

  const handleWhatsApp = () => {
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track('whatsapp_start', { location: 'contact_fallback' });
    }
    window.open("https://wa.me/4915565029989?text=Hallo,%20ich%20interessiere%20mich%20für%20ein%20Service-Paket...", "_blank");
  };

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
              <span className="text-foreground">Kontakt</span>
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
            
            <h1 className="text-hero mb-4">Kontakt</h1>
            <p className="text-subtitle">
              Wir melden uns schnell – meist am selben Werktag.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Nachricht senden</h2>
                
                {formStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="text-green-800 font-medium">Danke! Wir melden uns zeitnah.</p>
                    </div>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                    <div>
                      <p className="text-red-800 font-medium">Senden fehlgeschlagen – bitte WhatsApp nutzen.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-input-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-input-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefon (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-input-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>

                  <div>
                    <label htmlFor="packageInterest" className="block text-sm font-medium text-foreground mb-2">
                      Paketinteresse
                    </label>
                    <select
                      id="packageInterest"
                      name="packageInterest"
                      value={formData.packageInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-input-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Bitte wählen...</option>
                      <option value="home">HOME CARE Home</option>
                      <option value="onetime">Einmalige Hilfe</option>
                      <option value="consultation">Nur Beratung</option>
                      <option value="other">Sonstiges</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Anliegen *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-input-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                      className="mt-1 h-4 w-4 rounded border-input-border text-accent focus:ring-2 focus:ring-ring"
                    />
                    <label htmlFor="consent" className="text-sm text-muted-foreground">
                      Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
                      <Link to="/datenschutz" className="text-accent hover:underline">
                        Datenschutzerklärung
                      </Link>{" "}
                      zu. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="btn-hero flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Nachricht senden
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-8 p-6 bg-neutral-50 rounded-xl">
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Problem beim Senden?</strong> Kontaktieren Sie uns direkt per WhatsApp.
                  </p>
                  <button
                    onClick={handleWhatsApp}
                    className="btn-whatsapp"
                    aria-label="Chat auf WhatsApp starten"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Chat starten
                  </button>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Direkter Kontakt</h2>
                
                <div className="space-y-6">
                  <div className="bg-white border border-border rounded-xl p-6">
                    <h3 className="font-semibold mb-3 text-foreground">Telefon & E-Mail</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>+49 1556 5029989</p>
                      <p>kontakt@techhilfepro.de</p>
                    </div>
                  </div>

                  <div className="bg-white border border-border rounded-xl p-6">
                    <h3 className="font-semibold mb-3 text-foreground">Öffnungszeiten</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Mo–Fr: 9–18 Uhr</p>
                      <p>Sa/So: Nach Vereinbarung</p>
                    </div>
                  </div>

                  <div className="bg-white border border-border rounded-xl p-6">
                    <h3 className="font-semibold mb-3 text-foreground">Servicegebiet</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Köln & Umgebung (Vor-Ort)</p>
                      <p>Remote-Support deutschlandweit</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-brand-start to-brand-end rounded-xl p-6 text-white">
                    <h3 className="font-semibold mb-3">WhatsApp Support</h3>
                    <p className="text-sm mb-4">
                      Schnelle Antworten für einfache Fragen und Terminvereinbarungen.
                    </p>
                    <button
                      onClick={handleWhatsApp}
                      className="bg-white text-accent px-4 py-2 rounded-lg font-medium hover:bg-neutral-50 transition-colors"
                    >
                      Chat starten
                    </button>
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

export default Contact;