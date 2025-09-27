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
            <p className="text-sm text-muted-foreground mt-4">Stand: [TT.MM.JJJJ]</p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Table of Contents */}
            <div className="bg-muted rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold mb-4 text-foreground">Inhaltsverzeichnis</h2>
              <nav className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <a href="#verantwortlicher" className="text-primary hover:text-primary/80 underline">1. Verantwortlicher</a>
                <a href="#uebersicht" className="text-primary hover:text-primary/80 underline">2. Übersicht der Datenverarbeitungen</a>
                <a href="#hosting" className="text-primary hover:text-primary/80 underline">3. Hosting und Server-Logfiles</a>
                <a href="#cookies" className="text-primary hover:text-primary/80 underline">4. Cookies / lokale Speicherung</a>
                <a href="#kontakt" className="text-primary hover:text-primary/80 underline">5. Kontaktaufnahme</a>
                <a href="#vertrag" className="text-primary hover:text-primary/80 underline">6. Vertragsdurchführung / Stripe</a>
                <a href="#analyse" className="text-primary hover:text-primary/80 underline">7. Analyse mit Umami</a>
                <a href="#remote" className="text-primary hover:text-primary/80 underline">8. Remote-Support</a>
                <a href="#empfaenger" className="text-primary hover:text-primary/80 underline">9. Empfänger / Auftragsverarbeiter</a>
                <a href="#drittland" className="text-primary hover:text-primary/80 underline">10. Drittlandübermittlungen</a>
                <a href="#speicherdauer" className="text-primary hover:text-primary/80 underline">11. Speicherdauer</a>
                <a href="#rechte" className="text-primary hover:text-primary/80 underline">12. Ihre Rechte</a>
                <a href="#sicherheit" className="text-primary hover:text-primary/80 underline">13. Sicherheit</a>
                <a href="#minderjaehrige" className="text-primary hover:text-primary/80 underline">14. Minderjährige</a>
                <a href="#aenderungen" className="text-primary hover:text-primary/80 underline">15. Änderungen dieser Erklärung</a>
              </nav>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              
              <div id="verantwortlicher" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">1. Verantwortlicher</h2>
                <div className="text-foreground leading-relaxed">
                  <p className="mb-1">Tech Hilfe Pro</p>
                  <p className="mb-1">[Vor- und Nachname / Firmenname]</p>
                  <p className="mb-1">[Anschrift] – Deutschland</p>
                  <p className="mb-1">E-Mail: [E-Mail-Adresse]</p>
                  <p>Telefon: [Telefonnummer]</p>
                </div>
              </div>

              <div id="uebersicht" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">2. Übersicht der Datenverarbeitungen</h2>
                <div className="text-foreground leading-relaxed">
                  <p className="mb-4">Wir verarbeiten personenbezogene Daten nur im nachfolgend beschriebenen Umfang:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Website-Betrieb (Hosting, Logfiles, Sicherheit)</li>
                    <li>Kontaktaufnahme (E-Mail, Telefon, WhatsApp)</li>
                    <li>Vertragsanbahnung und -durchführung (Service-Pakete Privat/KMU, Stripe-Zahlungen, Kundenportal)</li>
                    <li>Nutzungsanalyse (Umami, cookielos)</li>
                    <li>Remote-Support (auf ausdrückliche Einwilligung)</li>
                  </ul>
                  <p>Rechtsgrundlagen: Art. 6 Abs. 1 lit. a (Einwilligung), lit. b (Vertrag/Anbahnung), lit. f DSGVO (berechtigtes Interesse: Betrieb, Sicherheit, Betrugsprävention).</p>
                </div>
              </div>

              <div id="hosting" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">3. Hosting und Server-Logfiles</h2>
                <div className="text-foreground leading-relaxed">
                  <p>Wir nutzen einen Hosting-Dienstleister ([Provider einsetzen], Rechenzentren in der EU). Beim Aufruf unserer Seiten werden automatisch Logfiles verarbeitet (IP-Adresse in gekürzter Form, Datum/Uhrzeit, URL, Referrer, User-Agent, Statuscode). Zweck: Betrieb/Sicherheit (Art. 6 Abs. 1 lit. f DSGVO). Speicherdauer: max. 30 Tage, sofern keine sicherheitsrelevanten Ereignisse vorliegen.</p>
                </div>
              </div>

              <div id="cookies" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">4. Cookies / lokale Speicherung</h2>
                <div className="text-foreground leading-relaxed">
                  <p>Unsere Website funktioniert grundsätzlich ohne Tracking-Cookies. Nur technisch notwendige Speicherungen (z. B. Session/CSRF, Consent) können zum Einsatz kommen (Art. 6 Abs. 1 lit. f DSGVO). Optionale Funktionen (z. B. Analyse) werden <strong>cookielos</strong> betrieben (siehe Umami).</p>
                </div>
              </div>

              <div id="kontakt" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">5. Kontaktaufnahme (E-Mail, Telefon, WhatsApp)</h2>
                <div className="text-foreground leading-relaxed">
                  <p className="mb-4">Bei Kontaktaufnahme verarbeiten wir Ihre Angaben zur Bearbeitung der Anfrage (Art. 6 Abs. 1 lit. b DSGVO).</p>
                  <p><strong>WhatsApp:</strong> Bei Nutzung des Buttons wird ein Chat mit WhatsApp Ireland Ltd. gestartet. Dabei werden Meta-Daten an WhatsApp/Meta übermittelt. Die Nutzung ist freiwillig; alternativ können Sie uns per E-Mail/Telefon erreichen. Rechtsgrundlage: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).</p>
                </div>
              </div>

              <div id="vertrag" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">6. Vertragsdurchführung / Stripe-Zahlungen & Kundenportal</h2>
                <div className="text-foreground leading-relaxed">
                  <p className="mb-4">Für die Buchung, Abrechnung und Verwaltung der Abos nutzen wir <strong>Stripe</strong> (Stripe Payments Europe, Ltd., Dublin). Verarbeitete Daten: Kundenstammdaten, Zahlart-Details (tokenisiert), Rechnungen, Zahlungshistorie, Betrugspräventionsdaten.</p>
                  <p className="mb-4">Zweck/Rechtsgrundlage: Vertragsdurchführung (Art. 6 Abs. 1 lit. b), Erfüllung rechtlicher Pflichten (Aufbewahrung), berechtigtes Interesse (Betrugsprävention, Art. 6 Abs. 1 lit. f).</p>
                  <p>Stripe kann Daten in Länder außerhalb der EU übermitteln; es gelten <strong>EU-Standardvertragsklauseln</strong>. Weitere Infos: <a href="https://stripe.com/privacy" className="text-primary hover:text-primary/80 underline" target="_blank" rel="noopener noreferrer">https://stripe.com/privacy</a></p>
                </div>
              </div>

              <div id="analyse" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">7. Analyse mit Umami (cookielos)</h2>
                <div className="text-foreground leading-relaxed">
                  <p>Wir verwenden <strong>Umami Analytics</strong> in einer datensparsamen, cookielosen Konfiguration. Erhobene Daten sind aggregiert (Seitenaufrufe, Referrer, Endgerät/Browser in anonymisierter Form).</p>
                  <p>Rechtsgrundlage: berechtigtes Interesse an Reichweitenmessung (Art. 6 Abs. 1 lit. f DSGVO). Es werden keine personenbezogenen Profile erstellt.</p>
                </div>
              </div>

              <div id="remote" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">8. Remote-Support (Fernwartung)</h2>
                <div className="text-foreground leading-relaxed">
                  <p>Remote-Zugriffe erfolgen <strong>ausschließlich nach Ihrer ausdrücklichen Einwilligung</strong> und für den vereinbarten Zweck (z. B. Fehlerbehebung). Es können dabei Bildschirm-/Systeminformationen verarbeitet werden. Nach Abschluss wird der Zugriff beendet. Rechtsgrundlage: Art. 6 Abs. 1 lit. a (Einwilligung) bzw. lit. b (Vertrag).</p>
                </div>
              </div>

              <div id="empfaenger" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">9. Empfänger / Auftragsverarbeiter</h2>
                <div className="text-foreground leading-relaxed">
                  <p className="mb-4">Wir setzen sorgfältig ausgewählte Dienstleister ein (Art. 28 DSGVO):</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Hosting-Provider ([Name einsetzen])</li>
                    <li>Zahlungsdienstleister: Stripe Payments Europe, Ltd.</li>
                    <li>Analyse: Umami (eigene Instanz / EU-Hosting)</li>
                    <li>E-Mail-/Kommunikationsanbieter ([Name einsetzen])</li>
                  </ul>
                  <p>Mit den Anbietern bestehen Auftragsverarbeitungsverträge, soweit erforderlich.</p>
                </div>
              </div>

              <div id="drittland" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">10. Drittlandübermittlungen</h2>
                <div className="text-foreground leading-relaxed">
                  <p>Sofern Daten in Drittländer (z. B. USA) übertragen werden, erfolgt dies auf Grundlage geeigneter Garantien (Art. 46 DSGVO), insbesondere <strong>Standardvertragsklauseln (SCC)</strong> der EU-Kommission.</p>
                </div>
              </div>

              <div id="speicherdauer" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">11. Speicherdauer</h2>
                <div className="text-foreground leading-relaxed">
                  <p>Wir verarbeiten Daten nur so lange, wie es für den jeweiligen Zweck erforderlich ist. Gesetzliche Aufbewahrungsfristen (insb. Handels-/Steuerrecht) bleiben unberührt. Support-/Kommunikationsdaten löschen wir regelmäßig nach Abschluss des Vorgangs, sofern keine Aufbewahrungspflichten bestehen.</p>
                </div>
              </div>

              <div id="rechte" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">12. Ihre Rechte</h2>
                <div className="text-foreground leading-relaxed">
                  <p className="mb-4">Sie haben die Rechte nach Art. 15–21 DSGVO, insbesondere Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit sowie Widerspruch gegen Verarbeitungen auf Basis von Art. 6 Abs. 1 lit. f.</p>
                  <p>Einwilligungen können Sie jederzeit mit Wirkung für die Zukunft widerrufen.</p>
                </div>
              </div>

              <div id="sicherheit" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">13. Sicherheit</h2>
                <div className="text-foreground leading-relaxed">
                  <p>Wir nutzen TLS-Verschlüsselung (https). Zugriff erfolgt nach dem Need-to-know-Prinzip. Regelmäßige Updates und Sicherheitsmaßnahmen sind Teil unseres Service.</p>
                </div>
              </div>

              <div id="minderjaehrige" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">14. Minderjährige</h2>
                <div className="text-foreground leading-relaxed">
                  <p>Unser Angebot richtet sich nicht an Kinder unter 16 Jahren.</p>
                </div>
              </div>

              <div id="aenderungen" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">15. Änderungen dieser Erklärung</h2>
                <div className="text-foreground leading-relaxed">
                  <p>Wir passen diese Datenschutzerklärung an, wenn sich technische oder rechtliche Änderungen ergeben. Die jeweils aktuelle Version finden Sie auf dieser Seite.</p>
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

export default Datenschutz;