export type Package = {
  segment: 'privat' | 'kmu';
  slug: string;
  name: string;
  subtitle: string;
  positioning: string;  // Kurzer Positionierungssatz
  monthlyPrice: number;
  yearlyPrice: number;
  taxNote: string;
  badge?: 'Bester Gegenwert' | 'Beliebteste Wahl';
  cta: string;
  keyDifferences: string[];  // 3 Hauptunterschiede
  included: string[];
  notIncluded: string[];
  slaMatrix: {
    priority: string;
    description: string;
    responseTime: string;
    resolutionTime: string;
  }[];
  tier: 'S' | 'M' | 'L';
  onsiteIncluded: number;
  onsiteUnlockAfterMonths: number;
  deviceLimit?: number; // Nur für Privat
  userLimit?: number;   // Nur für KMU
};

export const packages: Package[] = [
  // Privat Packages
  {
    segment: 'privat',
    slug: 'privat-solo',
    name: 'Sorglos Digital – Solo',
    subtitle: 'Für Einzelpersonen & Minimalisten',
    positioning: 'Grundschutz ohne Schnickschnack.',
    monthlyPrice: 15,
    yearlyPrice: 13, // 15% Rabatt
    taxNote: 'Kein Umsatzsteuerausweis gem. § 19 UStG. Monatlich kündbar.',
    cta: 'Jetzt starten',
    tier: 'S',
    onsiteIncluded: 1,
    onsiteUnlockAfterMonths: 12,
    deviceLimit: 2,
    keyDifferences: [
      'Remote-Support werktags 9-17 Uhr',
      'E-Mail & Chat-Support',
      'Basis-Sicherheitscheck monatlich'
    ],
    included: [
      'Unbegrenzter Remote-Support werktags (9-17 Uhr)',
      'E-Mail & Chat-Support',
      'Monatlicher Sicherheitscheck',
      'Software-Updates',
      'Basis-Virenschutz',
      'Vor-Ort-Termin verfügbar nach 12 Monaten ununterbrochener Mitgliedschaft'
    ],
    notIncluded: [
      'Vor-Ort-Service (vor 12 Monaten)',
      'Abend- & Wochenend-Support',
      'Hardware-Beschaffung',
      'Datenrettung',
      'Express-Support'
    ],
    slaMatrix: [
      {
        priority: 'P1 (Kritisch)',
        description: 'System nicht nutzbar',
        responseTime: '4 Stunden',
        resolutionTime: '1 Werktag'
      },
      {
        priority: 'P2 (Hoch)',
        description: 'Eingeschränkte Nutzung',
        responseTime: '1 Werktag',
        resolutionTime: '2 Werktage'
      },
      {
        priority: 'P3 (Normal)',
        description: 'Kleinere Probleme',
        responseTime: '2 Werktage',
        resolutionTime: '5 Werktage'
      },
      {
        priority: 'P4 (Niedrig)',
        description: 'Fragen & Optimierung',
        responseTime: '3 Werktage',
        resolutionTime: 'Geplant'
      }
    ]
  },
  {
    segment: 'privat',
    slug: 'privat-zuhause',
    name: 'Sorglos Digital – Zuhause',
    subtitle: 'Für Familien & Home-Office',
    positioning: 'Vollständiger Schutz für das digitale Zuhause.',
    monthlyPrice: 25,
    yearlyPrice: 21, // 15% Rabatt
    taxNote: 'Kein Umsatzsteuerausweis gem. § 19 UStG. Monatlich kündbar.',
    badge: 'Beliebteste Wahl',
    cta: 'Jetzt starten',
    tier: 'M',
    onsiteIncluded: 1,
    onsiteUnlockAfterMonths: 8,
    deviceLimit: 5,
    keyDifferences: [
      'Erweiterte Support-Zeiten bis 20 Uhr',
      'WhatsApp-Support inklusive',
      'Quartalsweise Gesundheitschecks'
    ],
    included: [
      'Alles aus Solo (ohne Vor-Ort nach 12 Mon.)',
      'Unbegrenzter Remote-Support (9-20 Uhr)',
      'WhatsApp-Support',
      'Quartalsweise Gesundheitschecks',
      'Netzwerk-Optimierung',
      'Backup-Beratung',
      'Vor-Ort-Termin verfügbar nach 8 Monaten ununterbrochener Mitgliedschaft'
    ],
    notIncluded: [
      'Vor-Ort-Service (vor 8 Monaten)',
      'Abend- & Wochenend-Support',
      'Hardware-Beschaffung',
      'Datenrettung',
      'Express-Support'
    ],
    slaMatrix: [
      {
        priority: 'P1 (Kritisch)',
        description: 'System nicht nutzbar',
        responseTime: '2 Stunden',
        resolutionTime: '4 Stunden'
      },
      {
        priority: 'P2 (Hoch)',
        description: 'Eingeschränkte Nutzung',
        responseTime: '4 Stunden',
        resolutionTime: '1 Werktag'
      },
      {
        priority: 'P3 (Normal)',
        description: 'Kleinere Probleme',
        responseTime: '1 Werktag',
        resolutionTime: '3 Werktage'
      },
      {
        priority: 'P4 (Niedrig)',
        description: 'Fragen & Optimierung',
        responseTime: '2 Werktage',
        resolutionTime: 'Geplant'
      }
    ]
  },
  {
    segment: 'privat',
    slug: 'privat-familieplus',
    name: 'Sorglos Digital – Familie+',
    subtitle: 'Für große Haushalte & Power-User',
    positioning: 'Maximaler Schutz mit persönlicher Betreuung.',
    monthlyPrice: 39,
    yearlyPrice: 33, // 15% Rabatt
    taxNote: 'Kein Umsatzsteuerausweis gem. § 19 UStG. Monatlich kündbar.',
    badge: 'Bester Gegenwert',
    cta: 'Jetzt starten',
    tier: 'L',
    onsiteIncluded: 1,
    onsiteUnlockAfterMonths: 4,
    deviceLimit: 10,
    keyDifferences: [
      'Support auch am Wochenende',
      '1 Vor-Ort-Termin pro Jahr inklusive',
      'Prioritäts-Support mit fester Ansprechperson'
    ],
    included: [
      'Alles aus Zuhause (ohne Vor-Ort nach 8 Mon.)',
      'Unbegrenzter Remote-Support + Wochenende',
      'Wochenend-Support (Sa 10-16 Uhr)',
      'Prioritäts-Support',
      'Persönlicher Ansprechpartner',
      'Erweiterte Datenrettung',
      'Vor-Ort-Termin verfügbar nach 4 Monaten ununterbrochener Mitgliedschaft'
    ],
    notIncluded: [
      'Vor-Ort-Service (vor 4 Monaten)',
      'Abend- & Wochenend-Support',
      'Hardware-Beschaffung',
      'Datenrettung',
      'Express-Support'
    ],
    slaMatrix: [
      {
        priority: 'P1 (Kritisch)',
        description: 'System nicht nutzbar',
        responseTime: '1 Stunde',
        resolutionTime: '2 Stunden'
      },
      {
        priority: 'P2 (Hoch)',
        description: 'Eingeschränkte Nutzung',
        responseTime: '2 Stunden',
        resolutionTime: '4 Stunden'
      },
      {
        priority: 'P3 (Normal)',
        description: 'Kleinere Probleme',
        responseTime: '4 Stunden',
        resolutionTime: '1 Werktag'
      },
      {
        priority: 'P4 (Niedrig)',
        description: 'Fragen & Optimierung',
        responseTime: '1 Werktag',
        resolutionTime: 'Geplant'
      }
    ]
  },
  // KMU Packages
  {
    segment: 'kmu',
    slug: 'kmu-flow-essential',
    name: 'KMU-Flow – Essential',
    subtitle: 'Stabile Basis für 1–10 Mitarbeitende',
    positioning: 'Ihr solides IT-Fundament ohne Überraschungen.',
    monthlyPrice: 29,
    yearlyPrice: 25, // 15% Rabatt
    taxNote: 'Kein Umsatzsteuerausweis gem. § 19 UStG. Monatlich kündbar.',
    cta: 'Jetzt starten',
    tier: 'S',
    onsiteIncluded: 1,
    onsiteUnlockAfterMonths: 12,
    userLimit: 10,
    keyDifferences: [
      'Standard-SLA: Reaktion bis zum nächsten Werktag',
      'Keine Vor-Ort-Termine inklusive',
      'Basis-Sicherheit & monatliche Updates'
    ],
    included: [
      'Monitoring & monatliches Patch-Management',
      'Helpdesk (Mo–Fr, 8–18 Uhr)',
      'Sicherheits-Baseline (AV/Firewall verwaltet)',
      'Fernwartung DSGVO-konform (2-Faktor)',
      'Halbjährlicher vCIO-Check (30 Min.)',
      'Unbegrenzter Remote-Support (fairer Gebrauch)',
      'Vor-Ort-Termin verfügbar nach 12 Monaten ununterbrochener Mitgliedschaft'
    ],
    notIncluded: [
      'Projektarbeiten',
      'Hardware & Spezialsoftware',
      'Zusätzliche Vor-Ort-Einsätze (vor 12 Monaten)',
      '24/7-Support',
      'Express-Support',
      'Erweiterte Security-Tools'
    ],
    slaMatrix: [
      {
        priority: 'P1 (Kritisch)',
        description: 'Kompletter Systemausfall, keine Arbeit möglich',
        responseTime: '15 Minuten',
        resolutionTime: '4 Stunden'
      },
      {
        priority: 'P2 (Hoch)',
        description: 'Eingeschränkte Funktion, Arbeit teilweise möglich',
        responseTime: '1 Stunde',
        resolutionTime: '8 Stunden'
      },
      {
        priority: 'P3 (Normal)',
        description: 'Kleinere Probleme, Workarounds verfügbar',
        responseTime: '4 Stunden',
        resolutionTime: '2 Werktage'
      },
      {
        priority: 'P4 (Niedrig)',
        description: 'Anfragen, Optimierungen, Schulungen',
        responseTime: '1 Werktag',
        resolutionTime: 'Geplant'
      }
    ]
  },
  {
    segment: 'kmu',
    slug: 'kmu-flow-smart',
    name: 'KMU-Flow – Smart',
    subtitle: 'Proaktive Betreuung mit Vor-Ort-Leistung',
    positioning: 'Der perfekte Mix aus Fernwartung und persönlicher Betreuung.',
    monthlyPrice: 59,
    yearlyPrice: 50, // 15% Rabatt
    taxNote: 'Kein Umsatzsteuerausweis gem. § 19 UStG. Monatlich kündbar.',
    badge: 'Beliebteste Wahl',
    cta: 'Jetzt starten',
    tier: 'M',
    onsiteIncluded: 1,
    onsiteUnlockAfterMonths: 8,
    userLimit: 25,
    keyDifferences: [
      'Beschleunigte SLA: Reaktion unter 4 Stunden',
      'Quartalsweise Vor-Ort-Termine inklusive',
      'Verwaltetes Cloud-Backup & Berichte'
    ],
    included: [
      'Alles aus Essential (ohne Vor-Ort nach 12 Mon.)',
      'Reaktionszeit < 4 Std. (Werktage)',
      'Verwaltetes Cloud-Backup (100 GB pro Gerät)',
      'Quartalsbericht & Roadmap-Empfehlungen',
      'Priorisierter Support',
      'Vor-Ort-Termin verfügbar nach 8 Monaten ununterbrochener Mitgliedschaft'
    ],
    notIncluded: [
      'Projektarbeiten',
      'Hardware & Spezialsoftware',
      'Zusätzliche Vor-Ort-Einsätze (vor 8 Monaten)',
      '24/7-Support'
    ],
    slaMatrix: [
      {
        priority: 'P1 (Kritisch)',
        description: 'Kompletter Systemausfall, keine Arbeit möglich',
        responseTime: '15 Minuten',
        resolutionTime: '4 Stunden'
      },
      {
        priority: 'P2 (Hoch)',
        description: 'Eingeschränkte Funktion, Arbeit teilweise möglich',
        responseTime: '1 Stunde',
        resolutionTime: '8 Stunden'
      },
      {
        priority: 'P3 (Normal)',
        description: 'Kleinere Probleme, Workarounds verfügbar',
        responseTime: '4 Stunden',
        resolutionTime: '2 Werktage'
      },
      {
        priority: 'P4 (Niedrig)',
        description: 'Anfragen, Optimierungen, Schulungen',
        responseTime: '1 Werktag',
        resolutionTime: 'Geplant'
      }
    ]
  },
  {
    segment: 'kmu',
    slug: 'kmu-flow-360',
    name: 'KMU-Flow – 360°',
    subtitle: 'Rundum-Sorglos für anspruchsvolle Unternehmen',
    positioning: 'Maximale Sicherheit und Verfügbarkeit – auch nachts und am Wochenende.',
    monthlyPrice: 99,
    yearlyPrice: 84, // 15% Rabatt
    taxNote: 'Kein Umsatzsteuerausweis gem. § 19 UStG. Monatlich kündbar.',
    badge: 'Bester Gegenwert',
    cta: 'Jetzt starten',
    tier: 'L',
    onsiteIncluded: 3,
    onsiteUnlockAfterMonths: 4,
    userLimit: 50,
    keyDifferences: [
      'Premium-SLA: 24/7-Notfallnummer verfügbar',
      'Bis zu 3 Vor-Ort-Einsätze pro Jahr inklusive',
      'Erweiterte Security & Netzwerk-Optimierung'
    ],
    included: [
      'Alles aus Smart (ohne Vor-Ort nach 8 Mon.)',
      'Priorisierte Reaktion + Notfallnummer 24/7',
      'Erweitertes Security-Paket (EDR/Anti-Phishing)',
      'Netzwerk-/WLAN-Optimierung standortweit',
      'Persönlicher Ansprechpartner',
      'Bis zu 3 Vor-Ort-Termine, der erste verfügbar nach 4 Monaten ununterbrochener Mitgliedschaft'
    ],
    notIncluded: [
      'Projektarbeiten',
      'Hardware & Spezialsoftware', 
      'Zusätzliche Vor-Ort-Einsätze (über 3 hinaus)',
      'Schulungen (separat buchbar)'
    ],
    slaMatrix: [
      {
        priority: 'P1 (Kritisch)',
        description: 'Kompletter Systemausfall, keine Arbeit möglich',
        responseTime: '15 Minuten',
        resolutionTime: '4 Stunden'
      },
      {
        priority: 'P2 (Hoch)',
        description: 'Eingeschränkte Funktion, Arbeit teilweise möglich',
        responseTime: '1 Stunde',
        resolutionTime: '8 Stunden'
      },
      {
        priority: 'P3 (Normal)',
        description: 'Kleinere Probleme, Workarounds verfügbar',
        responseTime: '4 Stunden',
        resolutionTime: '2 Werktage'
      },
      {
        priority: 'P4 (Niedrig)',
        description: 'Anfragen, Optimierungen, Schulungen',
        responseTime: '1 Werktag',
        resolutionTime: 'Geplant'
      }
    ]
  }
];