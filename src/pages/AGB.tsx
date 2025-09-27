import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AGB = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Meta tags handled in main.tsx */}
      <title>AGB – Tech Hilfe Pro</title>
      <meta name="description" content="Allgemeine Geschäftsbedingungen für IT-Service & Support (Privat & KMU)." />

      <main>
        {/* Breadcrumb */}
        <div className="bg-neutral-50 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-accent hover:underline">
                Startseite
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground">AGB</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-white to-neutral-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-accent hover:underline mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Zurück zur Startseite
            </Link>
            
            <h1 className="text-hero mb-4">Allgemeine Geschäftsbedingungen (AGB)</h1>
            <p className="text-subtitle">
              Rechtliche Grundlagen für die Nutzung unserer IT-Services
            </p>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-8 bg-white border-b border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold mb-6 text-foreground">Inhaltsverzeichnis</h2>
            <nav className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <a href="#geltungsbereich" className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded p-1">§ 1. Geltungsbereich und Begriffe</a>
              <a href="#vertragspartner" className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded p-1">§ 2. Vertragspartner, Kontakt, Leistungsgebiet</a>
              <a href="#vertragsschluss" className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded p-1">§ 3. Vertragsschluss, Kundenkonto, Bestellweg</a>
              <a href="#leistung-privat" className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded p-1">§ 4. Leistungsbeschreibung – Privat</a>
              <a href="#leistung-kmu" className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded p-1">§ 5. Leistungsbeschreibung – KMU</a>
              <a href="#fair-use" className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded p-1">§ 6. Fair-Use-Policy</a>
              <a href="#sla" className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded p-1">§ 7. SLA-Zielwerte und Servicezeiten</a>
              <a href="#vor-ort" className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded p-1">§ 8. Vor-Ort-Termin(e)</a>
              <a href="#nicht-enthalten" className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded p-1">§ 9. Nicht enthaltene Leistungen</a>
              <a href="#mitwirkung" className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded p-1">§ 10. Mitwirkungspflichten</a>
              <a href="#preise" className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded p-1">§ 11. Preise, Abrechnung und Steuern</a>
              <a href="#laufzeit" className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded p-1">§ 12. Laufzeit, Kündigung, Paketwechsel</a>
              <a href="#widerruf" className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded p-1">§ 13. Widerrufsrecht für Verbraucher</a>
              <a href="#haftung" className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded p-1">§ 14. Gewährleistung und Haftung</a>
              <a href="#datenschutz" className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded p-1">§ 15. Datenschutz und Vertraulichkeit</a>
              <a href="#urheberrecht" className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded p-1">§ 16. Urheber-/Nutzungsrechte</a>
              <a href="#subunternehmer" className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded p-1">§ 17. Subunternehmer</a>
              <a href="#aenderungen" className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded p-1">§ 18. Leistungs-/AGB-Änderungen</a>
              <a href="#hoehere-gewalt" className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded p-1">§ 19. Höhere Gewalt</a>
              <a href="#schlussbestimmungen" className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded p-1">§ 20. Schlussbestimmungen</a>
              <a href="#anlage" className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded p-1">Anlage 1 – Paketgrenzen, Ausschlüsse</a>
            </nav>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none space-y-8">
              
              <div id="geltungsbereich" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">1. Geltungsbereich und Begriffe</h2>
                <div className="space-y-4 text-foreground">
                  <p>1. Diese AGB regeln Abschluss, Inhalt und Durchführung von Verträgen zwischen <strong>Tech Hilfe Pro</strong> (nachfolgend „Anbieter") und</p>
                  <div className="ml-4">
                    <p>a) <strong>Verbrauchern</strong> im Sinne des § 13 BGB (Privatkunden; Tab „Für Privat") sowie</p>
                    <p>b) <strong>Unternehmern</strong> im Sinne des § 14 BGB (Geschäftskunden/KMU; Tab „Für Unternehmen").</p>
                  </div>
                  <p>2. Abweichende, entgegenstehende oder ergänzende AGB des Kunden werden nur bei ausdrücklicher schriftlicher Zustimmung des Anbieters Vertragsbestandteil.</p>
                  <p>3. Maßgeblich ist die <strong>jeweils zum Zeitpunkt des Vertragsschlusses</strong> gültige Fassung dieser AGB.</p>
                </div>
              </div>

              <div id="vertragspartner" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">2. Vertragspartner, Kontakt, Leistungsgebiet</h2>
                <div className="space-y-4 text-foreground">
                  <p>1. Vertragspartner ist Tech Hilfe Pro, [Adresse einsetzen], Sitz Köln (Deutschland).</p>
                  <p>2. Kontakt: <Link to="/kontakt" className="text-accent hover:underline">kontakt@techhilfepro.de</Link>, +49 1556 5029989.</p>
                  <p>3. Leistungen werden remote erbracht; Vor-Ort-Leistungen erfolgen im regulären Radius von <strong>bis zu 25 km</strong> ab Köln. Darüber hinaus gelten Fahrtkosten gemäß aktueller Preisliste.</p>
                </div>
              </div>

              <div id="vertragsschluss" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">3. Vertragsschluss, Kundenkonto, Bestellweg</h2>
                <div className="space-y-4 text-foreground">
                  <p>1. Der Vertrag kommt zustande durch Online-Buchung eines Service-Pakets (Button <strong>„Jetzt starten"</strong>) mit nachfolgendem <strong>Stripe-Checkout</strong> und Bestätigungs-E-Mail.</p>
                  <p>2. Der Kunde verwaltet seine Daten, Zahlarten, Paketwechsel und Kündigungen im <strong>Kundenportal</strong> (Stripe Customer Portal).</p>
                  <p>3. Die auf der Website dargestellte Leistungsbeschreibung des gewählten Pakets wird Vertragsbestandteil. Individuelle Abreden haben Vorrang.</p>
                </div>
              </div>

              <div id="leistung-privat" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">4. Leistungsbeschreibung – Privat („Für Privat")</h2>
                <div className="space-y-4 text-foreground">
                  <p>1. Der Anbieter bietet die Privat-Pakete <strong>Solo (S)</strong>, <strong>Zuhause (M)</strong> und <strong>Familie+ (L)</strong>.</p>
                  <p>2. Inhalt und Grenzen ergeben sich aus der jeweils sichtbaren Paketbeschreibung (Karten/Modal „Details zum Plan"): insbesondere Remote-Support werktags, Reaktionszeiten (SLA-Zielwerte), Sicherheits-Checks, ggf. WhatsApp-Support, Wochenendzeiten (nur wo ausgewiesen).</p>
                  <p>3. <strong>Geräte-/Haushaltsbezug:</strong> Die Leistung richtet sich an den jeweiligen Haushalt des Kunden. Ggf. bestehende Mengenlimits (z. B. Anzahl Geräte) ergeben sich aus der Paketbeschreibung.</p>
                  <p>4. <strong>Kein 24/7-Support</strong>, es sei denn ausdrücklich im Paket ausgewiesen.</p>
                </div>
              </div>

              <div id="leistung-kmu" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">5. Leistungsbeschreibung – Geschäftskunden/KMU („Für Unternehmen")</h2>
                <div className="space-y-4 text-foreground">
                  <p>1. Der Anbieter bietet die KMU-Pakete <strong>Essential (S)</strong>, <strong>Smart (M)</strong> und <strong>360° (L)</strong>; Abrechnung <strong>pro Arbeitsplatz</strong> („Seat").</p>
                  <p>2. Inhalt und Grenzen ergeben sich aus der Paketbeschreibung: Monitoring/Patch-Management, Helpdesk werktags, SLA-Zielwerte, ggf. On-Site-Einsätze pro Jahr, Security-Leistungen, Berichte u. a.</p>
                  <p>3. <strong>Kein 24/7-Support</strong>, außer im Paket <strong>360°</strong>, dort gemäß Beschreibung (Notfallnummer/P1).</p>
                </div>
              </div>

              <div id="fair-use" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">6. Fair-Use-Policy (gilt für alle Pakete)</h2>
                <div className="space-y-4 text-foreground">
                  <p>1. „Unbegrenzter Remote-Support" bedeutet <strong>angemessene Nutzung</strong>. Typischer Rahmen: <strong>bis zu 3 Supportfälle pro Monat</strong> mit <strong>je ≤ 45 Minuten</strong>.</p>
                  <p>2. Bei dauerhaft deutlich überdurchschnittlicher Inanspruchnahme (z. B. wiederkehrende Projektarbeiten, umfangreiche Schulungen, Massen-Onboardings) kann der Anbieter</p>
                  <div className="ml-4">
                    <p>a) ein <strong>Upgrade</strong> empfehlen oder</p>
                    <p>b) <strong>Zusatzleistungen</strong> nach Preisliste anbieten.</p>
                  </div>
                  <p>3. Der Anbieter ist berechtigt, Support zu vertagen, wenn erst <strong>Ursachenbehebung, Schulung oder Upgrade</strong> sinnvoll/vorrangig ist. Ziel ist <strong>proaktive Betreuung</strong>, nicht die permanente Bearbeitung von Notfällen.</p>
                </div>
              </div>

              <div id="sla" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">7. SLA-Zielwerte und Servicezeiten</h2>
                <div className="space-y-4 text-foreground">
                  <p>1. Die in den Paketen angegebenen Reaktions- und Lösungszeiten (P1–P4) sind <strong>Zielwerte</strong> und gelten <strong>werktags (Mo–Fr)</strong> innerhalb der Servicezeiten; abweichende Zeitfenster (z. B. Samstag) sind paketbezogen ausgewiesen.</p>
                  <p>2. Für <strong>KMU 360°</strong> gilt zusätzlich die <strong>Notfallnummer/24-7</strong> für P1-Störungen gemäß Paketbeschreibung.</p>
                  <p>3. SLA-Zielwerte gelten nur bei <strong>vollständiger Mitwirkung</strong> des Kunden (Zugänge, Informationen, Tests, Freigaben, Internetverbindung).</p>
                </div>
              </div>

              <div id="vor-ort" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">8. Vor-Ort-Termin(e) – Inklusivleistungen und Freischaltung</h2>
                <div className="space-y-4 text-foreground">
                  <p>1. Sofern ein Paket <strong>Vor-Ort-Termin(e) inklusive</strong> enthält, werden diese <strong>erst nach ununterbrochener Laufzeit</strong> des gebuchten Pakets freigeschaltet:</p>
                  <ul className="ml-6 list-disc space-y-1">
                    <li><strong>S-Pakete (Solo/Essential):</strong> nach <strong>12 Monaten</strong></li>
                    <li><strong>M-Pakete (Zuhause/Smart):</strong> nach <strong>8 Monaten</strong></li>
                    <li><strong>L-Pakete (Familie+/360°):</strong> nach <strong>4 Monaten</strong></li>
                  </ul>
                  <p>2. Credits sind <strong>nicht übertragbar</strong>, verfallen <strong>12 Monate nach Freischaltung</strong> und gelten für <strong>Werktage 9–18 Uhr</strong>; außerhalb dieser Zeiten können Zuschläge anfallen.</p>
                  <p>3. Der erste inklusiv Termin pro Jahr wird ab Freischaltung verfügbar. <strong>Zusätzliche Vor-Ort-Einsätze</strong> sind jederzeit <strong>kostenpflichtig</strong> gemäß Preisliste.</p>
                  <p>4. <strong>Stornierung</strong> durch den Kunden &lt; 24 h vor Terminbeginn oder Nichterscheinen gilt als verbraucht.</p>
                  <p>5. Anfahrt bis <strong>25 km</strong> inklusive; darüber hinaus gilt eine km-Pauschale gemäß Preisliste.</p>
                </div>
              </div>

              <div id="nicht-enthalten" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">9. Nicht enthaltene Leistungen (Auszug)</h2>
                <div className="space-y-4 text-foreground">
                  <p>1. <strong>Hardware-/Ersatzteile</strong>, <strong>Spezial-/Lizenzsoftware</strong>, <strong>Projektarbeiten/Rollouts</strong>, <strong>Datenrettung forensisch oder nach physischem Schaden</strong>, <strong>Express-/24-7-Support</strong> (falls nicht im Paket vorgesehen), <strong>Smart-Home-Verkabelung/Bauleistungen</strong>, <strong>Schulungen</strong>.</p>
                  <p>2. Der Anbieter kann solche Leistungen gesondert anbieten (Voranschlag/Preisliste).</p>
                </div>
              </div>

              <div id="mitwirkung" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">10. Mitwirkungspflichten des Kunden</h2>
                <div className="space-y-4 text-foreground">
                  <p>1. Bereitstellung notwendiger Informationen/Zugänge, <strong>rechtmäßiger Softwarelizenzen</strong>, stabiler Internet- und Stromversorgung.</p>
                  <p>2. <strong>Remote-Zugriff</strong>: nur nach Einwilligung; der Kunde stellt sicher, dass Datenschutz/Geheimhaltung im eigenen Verantwortungsbereich eingehalten werden.</p>
                  <p>3. <strong>Datensicherung:</strong> Der Kunde ist für regelmäßige Backups verantwortlich; bei verwaltetem Backup prüft der Kunde die <strong>Sicherungsreports</strong>.</p>
                  <p>4. Der Kunde benennt einen <strong>ansprechbaren Ansprechpartner</strong> (KMU) und dokumentiert interne Änderungen (z. B. Neueintritte).</p>
                </div>
              </div>

              <div id="preise" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">11. Preise, Abrechnung und Steuern</h2>
                <div className="space-y-4 text-foreground">
                  <p>1. Die aktuellen Paketpreise sind auf der Website ausgewiesen; Jahreszahlung erhält <strong>15 % Rabatt</strong> (sofern angezeigt).</p>
                  <p>2. Abrechnung <strong>monatlich</strong> (oder jährlich) per Stripe; Zahlungsarten gemäß Stripe-Checkout.</p>
                  <p>3. Der Anbieter weist gemäß § 19 UStG <strong>keine Umsatzsteuer</strong> aus (Kleinunternehmerregelung), solange anwendbar.</p>
                  <p>4. <strong>Zahlungsverzug</strong>: Bei ausbleibender Zahlung kann der Anbieter Leistungen aussetzen; gesetzliche Rechte bleiben unberührt.</p>
                </div>
              </div>

              <div id="laufzeit" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">12. Laufzeit, Kündigung, Paketwechsel</h2>
                <div className="space-y-4 text-foreground">
                  <p>1. Verträge sind <strong>monatlich kündbar</strong>, soweit nicht im Bestellprozess anders angegeben. Kündigungen erfolgen im Kundenportal mit Wirkung zum Ende des laufenden Abrechnungszeitraums.</p>
                  <p>2. <strong>Paketwechsel</strong> sind zum nächsten Abrechnungsbeginn möglich.</p>
                  <p>3. Bei Kündigung oder Downgrade <strong>vor Freischaltung</strong> verfallen etwaige Vor-Ort-Credits. Bereits <strong>freigeschaltete, aber nicht genutzte</strong> Credits verfallen mit Vertragsende.</p>
                  <p>4. <strong>Sperr-/Missbrauchsfälle</strong> (z. B. bewusste Fehlinformationen, Umgehung von Limits) berechtigen zur fristlosen Kündigung.</p>
                </div>
              </div>

              <div id="widerruf" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">13. Widerrufsrecht für Verbraucher (Fernabsatz)</h2>
                <div className="space-y-4 text-foreground">
                  <p>1. <strong>Verbraucher</strong> haben ein <strong>14-tägiges Widerrufsrecht</strong> ab Vertragsschluss.</p>
                  <p>2. <strong>Hinweis auf vorzeitiges Erlöschen</strong> (§ 356 Abs. 4 BGB): Das Widerrufsrecht erlischt, wenn der Anbieter die Dienstleistung vollständig erbracht hat und erst mit ausdrücklicher Zustimmung vor Ablauf der Widerrufsfrist begonnen hat.</p>
                  <p>3. <strong>Muster-Widerrufsformular</strong>:</p>
                  <blockquote className="border-l-4 border-border pl-4 italic">
                    An Tech Hilfe Pro, [Adresse/E-Mail]:<br />
                    Hiermit widerrufe ich den von mir abgeschlossenen Vertrag über die Erbringung der folgenden Dienstleistung: [Bezeichnung], bestellt am [Datum], Name/Anschrift, Datum, Unterschrift (nur bei Mitteilung auf Papier).
                  </blockquote>
                </div>
              </div>

              <div id="haftung" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">14. Gewährleistung und Haftung</h2>
                <div className="space-y-4 text-foreground">
                  <p>1. Es gelten die gesetzlichen Gewährleistungsrechte.</p>
                  <p>2. <strong>Haftungsausschluss</strong>: Der Anbieter haftet</p>
                  <div className="ml-4">
                    <p>a) bei Vorsatz und grober Fahrlässigkeit unbeschränkt;</p>
                    <p>b) bei einfacher Fahrlässigkeit nur bei Verletzung <strong>wesentlicher Vertragspflichten</strong> (Kardinalpflichten) und beschränkt auf den <strong>vorhersehbaren, vertragstypischen Schaden</strong>;</p>
                    <p>c) für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit stets unbeschränkt.</p>
                  </div>
                  <p>3. Keine Haftung für <strong>Datenverlust</strong>, sofern der Schaden bei ordnungsgemäßem Backup im Verantwortungsbereich des Kunden vermeidbar gewesen wäre.</p>
                </div>
              </div>

              <div id="datenschutz" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">15. Datenschutz und Vertraulichkeit</h2>
                <div className="space-y-4 text-foreground">
                  <p>1. Es gilt die <Link to="/datenschutz" className="text-accent hover:underline"><strong>Datenschutzerklärung</strong></Link> des Anbieters (abrufbar über „Datenschutz" auf der Website).</p>
                  <p>2. Der Anbieter verarbeitet personenbezogene Daten zur Vertragserfüllung, Support, Abrechnung und Betrugsprävention.</p>
                  <p>3. Beide Parteien wahren Vertraulichkeit über nicht öffentliche Informationen.</p>
                </div>
              </div>

              <div id="urheberrecht" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">16. Urheber-/Nutzungsrechte, Open-Source</h2>
                <div className="space-y-4 text-foreground">
                  <p>1. Soweit der Anbieter Software/Automationen/Skripte bereitstellt, erhält der Kunde eine <strong>nicht ausschließliche, nicht übertragbare</strong> Nutzungserlaubnis für die Vertragslaufzeit.</p>
                  <p>2. Open-Source-Bestandteile gelten nach deren Lizenzen.</p>
                </div>
              </div>

              <div id="subunternehmer" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">17. Subunternehmer</h2>
                <div className="space-y-4 text-foreground">
                  <p>Der Anbieter darf qualifizierte <strong>Subunternehmer</strong> einsetzen, bleibt aber alleiniger Vertragspartner und verantwortlich für deren Leistung.</p>
                </div>
              </div>

              <div id="aenderungen" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">18. Leistungs-/AGB-Änderungen</h2>
                <div className="space-y-4 text-foreground">
                  <p>1. Der Anbieter kann Leistungen <strong>angemessen weiterentwickeln</strong> (z. B. Sicherheitsupdates, neue Mindestanforderungen).</p>
                  <p>2. AGB-Änderungen werden dem Kunden mindestens <strong>6 Wochen</strong> vorher mitgeteilt. Widerspricht der Kunde nicht bis zum Wirksamwerden, gelten die Änderungen als angenommen; Verbraucher werden hierauf gesondert hingewiesen. Gesetzliche Rechte bleiben unberührt.</p>
                </div>
              </div>

              <div id="hoehere-gewalt" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">19. Höhere Gewalt</h2>
                <div className="space-y-4 text-foreground">
                  <p>Bei Ereignissen außerhalb der Zumutbarkeit (höhere Gewalt, großflächige Störungen, Ausfall von Drittanbietern) ruhen Leistungspflichten für die Dauer der Beeinträchtigung.</p>
                </div>
              </div>

              <div id="schlussbestimmungen" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">20. Schlussbestimmungen</h2>
                <div className="space-y-4 text-foreground">
                  <p>1. Es gilt <strong>deutsches Recht</strong> unter Ausschluss des UN-Kaufrechts.</p>
                  <p>2. Gegenüber Kaufleuten ist <strong>Gerichtsstand Köln</strong>.</p>
                  <p>3. Vertragssprache ist <strong>Deutsch</strong>.</p>
                  <p>4. Sollten einzelne Bestimmungen unwirksam sein, bleibt der Vertrag im Übrigen wirksam; an die Stelle tritt die gesetzliche Regelung.</p>
                </div>
              </div>

              <div id="anlage" className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Anlage 1 – Paketgrenzen, Ausschlüsse, Klarstellungen</h2>
                <div className="space-y-4 text-foreground">
                  <ul className="space-y-2 list-disc ml-6">
                    <li><strong>Remote-Support nur mit Einwilligung</strong> für Fernzugriff; 2-Faktor-Schutz aktiv.</li>
                    <li><strong>Projektarbeiten/Rollouts/Schulungen</strong> sind nicht Bestandteil der Pakete; Angebot nach Aufwand/Preisliste.</li>
                    <li><strong>On-Site-Konditionen</strong>: Terminfenster 4 Stunden; Wartezeiten, Park-/Zutrittskosten trägt der Kunde; unverschuldete Verhinderung berechtigt zur Neuplanung.</li>
                    <li><strong>Geräte/Seats-Limits</strong> gemäß Paketbeschreibung; zusätzliche Geräte/Seats gegen Aufpreis.</li>
                    <li><strong>Reisekosten</strong> außerhalb des Standardradius gemäß Preisliste.</li>
                    <li><strong>Wiederherstellungen/Neuinstallationen</strong> (System- oder Daten-Recovery) gelten als Zusatzleistung.</li>
                    <li><strong>SLA-Zielwerte</strong> gelten nicht bei höherer Gewalt, Drittstörungen, mangelnder Mitwirkung, fehlendem Internet/Strom oder wenn notwendige Upgrades/Backups verweigert werden.</li>
                  </ul>
                </div>
              </div>

              {/* Links zu anderen rechtlichen Seiten */}
              <div className="bg-neutral-50 border border-border rounded-2xl p-8">
                <h2 className="text-xl font-semibold mb-4 text-foreground">Weitere rechtliche Informationen</h2>
                <div className="flex flex-wrap gap-4">
                  <Link to="/datenschutz" className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded">
                    Datenschutzerklärung
                  </Link>
                  <Link to="/impressum" className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded">
                    Impressum
                  </Link>
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

export default AGB;