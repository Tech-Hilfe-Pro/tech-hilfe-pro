export type Package = {
  segment: 'privat' | 'kmu';
  slug: string;
  name: string;       // Karten-Titel
  subtitle: string;   // kurze Nutzenzeile unter dem Titel
  price: string;      // z.B. "19 € / Monat"
  taxNote: string;    // §19 UStG + Kündigung
  badge?: 'Empfohlen' | '—';
  promo?: string;     // z.B. "15% Rabatt bei jährlicher Zahlung"
  cta: string;        // Button-Text
  bullets: string[];  // 5–6 Leistungen
  notIncluded?: string; // Fußnote
};

export const packages: Package[] = [
  // ---------- PRIVAT (HOME CARE) ----------
  {
    segment: 'privat',
    slug: 'home-care-solo',
    name: 'HOME CARE Solo',
    subtitle: 'Persönliche IT-Hilfe für Einzelnutzer',
    price: '9 € / Monat',
    taxNote: 'Kein Umsatzsteuerausweis gem. § 19 UStG. Monatlich kündbar.',
    badge: '—',
    promo: '15% Rabatt bei jährlicher Zahlung',
    cta: 'Kostenlose Erstberatung',
    bullets: [
      'Unbegrenzter Remote-Support (werktags)',
      'Telefon- und WhatsApp-Support',
      'Regelmäßige Updates & Patch-Management',
      'Monatlicher Sicherheits-Check (remote)',
      'Verwalteter Virenschutz inklusive'
    ],
    notIncluded: 'Vor-Ort-Einsätze, Hardware, Ersatzteile, Spezialsoftware'
  },
  {
    segment: 'privat',
    slug: 'home-care-home',
    name: 'HOME CARE Home',
    subtitle: 'Komplette IT-Betreuung für Ihr Zuhause',
    price: '19 € / Monat',
    taxNote: 'Kein Umsatzsteuerausweis gem. § 19 UStG. Monatlich kündbar.',
    badge: 'Empfohlen',
    promo: '15% Rabatt bei jährlicher Zahlung',
    cta: 'Kostenlose Erstberatung',
    bullets: [
      'Unbegrenzter Remote-Support (werktags)',
      'Telefon- und WhatsApp-Support',
      'WLAN-Optimierung & Router-Härtung',
      'Regelmäßige Updates & Patch-Management',
      'Monatlicher System-Gesundheitscheck',
      'Einfache Erklärungen ohne Fachjargon'
    ],
    notIncluded: 'Vor-Ort-Einsätze (außer inkl. Aktionen), Hardware, Ersatzteile'
  },
  {
    segment: 'privat',
    slug: 'home-care-familie-plus',
    name: 'HOME CARE Familie+',
    subtitle: 'Rundum-Schutz & Proaktiv-Service für Familien',
    price: '29 € / Monat',
    taxNote: 'Kein Umsatzsteuerausweis gem. § 19 UStG. Monatlich kündbar.',
    badge: '—',
    promo: '15% Rabatt bei jährlicher Zahlung',
    cta: 'Kostenlose Erstberatung',
    bullets: [
      'Bis 5 Nutzer / bis zu 8 Geräte',
      'Priorisierte Hilfe & Rückruf binnen 2 Std.',
      'Bis zu 2 Vor-Ort-Checks pro Jahr inklusive',
      'Premium-Backup (verwaltet)',
      'Phishing- & Betrugsschutz-Beratung',
      'Kurzes Familien-Onboarding (verständlich)'
    ],
    notIncluded: 'Zusätzliche Vor-Ort-Einsätze, Hardware/Teile, Spezialsoftware'
  },

  // ---------- KMU (BUSINESS CARE) ----------
  {
    segment: 'kmu',
    slug: 'business-care-essential',
    name: 'BUSINESS CARE Essential',
    subtitle: 'Stabile Basis für 1–10 Mitarbeitende',
    price: 'ab 29 € / Monat je Arbeitsplatz',
    taxNote: 'Kein Umsatzsteuerausweis gem. § 19 UStG. Monatlich kündbar.',
    badge: '—',
    promo: '15% Rabatt bei jährlicher Zahlung',
    cta: 'Kostenfreie Erstberatung buchen',
    bullets: [
      'Monitoring & monatliches Patch-Management',
      'Helpdesk (Mo–Fr, 8–18 Uhr), Reaktion NBD',
      'Sicherheits-Baseline (AV/Firewall verwaltet)',
      'Fernwartung DSGVO-konform (2-Faktor)',
      'Halbjährlicher vCIO-Check (30 Min.)'
    ],
    notIncluded: 'Projektarbeiten, Spezial-Software, Hardware & Ersatzteile'
  },
  {
    segment: 'kmu',
    slug: 'business-care-smart',
    name: 'BUSINESS CARE Smart',
    subtitle: 'Proaktive Betreuung mit Vor-Ort-Leistung',
    price: 'ab 59 € / Monat je Arbeitsplatz',
    taxNote: 'Kein Umsatzsteuerausweis gem. § 19 UStG. Monatlich kündbar.',
    badge: 'Empfohlen',
    promo: '15% Rabatt bei jährlicher Zahlung',
    cta: 'Kostenfreie Erstberatung buchen',
    bullets: [
      'Alles aus Essential',
      'Reaktionszeit < 4 Std. (Werktage)',
      '1 Vor-Ort-Termin pro Quartal inklusive',
      'Verwaltetes Cloud-Backup (100 GB pro Gerät)',
      'Quartalsbericht & Roadmap-Empfehlungen'
    ],
    notIncluded: 'Zusätzliche Vor-Ort-Einsätze, Projektarbeiten, Hardware/Teile'
  },
  {
    segment: 'kmu',
    slug: 'business-care-360',
    name: 'BUSINESS CARE 360°',
    subtitle: 'Rundum-Sorglos für Micro-Unternehmen',
    price: 'ab 99 € / Monat je Arbeitsplatz',
    taxNote: 'Kein Umsatzsteuerausweis gem. § 19 UStG. Monatlich kündbar.',
    badge: '—',
    promo: '15% Rabatt bei jährlicher Zahlung',
    cta: 'Kostenfreie Erstberatung buchen',
    bullets: [
      'Alles aus Smart',
      'Priorisierte Reaktion + Notfallnummer 24/7',
      'Bis zu 3 Vor-Ort-Einsätze/Jahr inklusive',
      'Erweitertes Security-Paket (EDR/Anti-Phishing)',
      'Netzwerk-/WLAN-Optimierung standortweit'
    ],
    notIncluded: 'Projekt-Rollouts außerhalb des Umfangs, Hardware & Spezialsoftware'
  }
];