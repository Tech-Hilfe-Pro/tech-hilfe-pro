export type Package = {
  segment: 'privat' | 'kmu';
  slug: string;
  name: string;       // Karten-Titel
  subtitle: string;   // kurze Nutzenzeile unter dem Titel
  price: string;      // z.B. "19 € / Monat"
  taxNote: string;    // §19 UStG + Kündigung
  badge?: 'Bester Gegenwert' | 'Beliebteste Wahl';
  promo?: string;     // z.B. "15% Rabatt bei jährlicher Zahlung"
  cta: string;        // Button-Text
  bullets: string[];  // 5–6 Leistungen
  notIncluded?: string; // Fußnote
};

export const packages: Package[] = [
  // ---------- PRIVAT (HOME CARE) ----------
  {
    segment: 'privat',
    slug: 'sorglos-digital-solo',
    name: 'Sorglos Digital – Solo',
    subtitle: 'Persönliche IT-Hilfe für Einzelnutzer',
    price: '9 € / Monat',
    taxNote: 'Kein Umsatzsteuerausweis gem. § 19 UStG. Monatlich kündbar.',
    badge: 'Bester Gegenwert',
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
    slug: 'sorglos-digital-zuhause',
    name: 'Sorglos Digital – Zuhause',
    subtitle: 'Komplette IT-Betreuung für Ihr Zuhause',
    price: '19 € / Monat',
    taxNote: 'Kein Umsatzsteuerausweis gem. § 19 UStG. Monatlich kündbar.',
    badge: 'Beliebteste Wahl',
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
    slug: 'sorglos-digital-familie-plus',
    name: 'Sorglos Digital – Familie+',
    subtitle: 'Rundum-Schutz & Proaktiv-Service für Familien',
    price: '29 € / Monat',
    taxNote: 'Kein Umsatzsteuerausweis gem. § 19 UStG. Monatlich kündbar.',
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
    slug: 'kmu-flow-essential',
    name: 'KMU-Flow – Essential',
    subtitle: 'Stabile Basis für 1–10 Mitarbeitende',
    price: 'ab 29 € / Monat je Arbeitsplatz',
    taxNote: 'Kein Umsatzsteuerausweis gem. § 19 UStG. Monatlich kündbar.',
    badge: 'Bester Gegenwert',
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
    slug: 'kmu-flow-smart',
    name: 'KMU-Flow – Smart',
    subtitle: 'Proaktive Betreuung mit Vor-Ort-Leistung',
    price: 'ab 59 € / Monat je Arbeitsplatz',
    taxNote: 'Kein Umsatzsteuerausweis gem. § 19 UStG. Monatlich kündbar.',
    badge: 'Beliebteste Wahl',
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
    slug: 'kmu-flow-360',
    name: 'KMU-Flow – 360°',
    subtitle: 'Rundum-Sorglos für Micro-Unternehmen',
    price: 'ab 99 € / Monat je Arbeitsplatz',
    taxNote: 'Kein Umsatzsteuerausweis gem. § 19 UStG. Monatlich kündbar.',
    
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