import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@/assets/whatsapp.svg";

const Hero = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  const staticText = "Planbare IT-Kosten. Proaktiver Support. Sicherheit für Köln & Umgebung: ";
  
  const desktopServices = [
    "TV-Wandmontage",
    "Computer-Reparatur & Hilfe", 
    "Drucker-Einrichtung",
    "WLAN-Einrichtung & Optimierung",
    "Netzwerk-Troubleshooting",
    "Smart-Home-Installation",
    "Videotürklingel-Setup",
    "Sicherheitskameras einrichten",
    "Heimsicherheit prüfen",
    "Streaming-Geräte einrichten",
    "Smart-TV-Setup", 
    "Audio-/Video-Kalibrierung",
    "Viren- & Malware-Entfernung",
    "Daten-Backup & Wiederherstellung",
    "Betriebssystem-Installation",
    "PC-Tune-Up & Beschleunigung",
    "E-Mail & Cloud-Konten einrichten",
    "Smartphone & Tablet-Support",
    "Smart-Beleuchtung konfigurieren",
    "Smart-Thermostat-Einbau"
  ];

  const mobileServices = [
    "TV-Wandmontage",
    "Computerhilfe",
    "Drucker-Setup",
    "WLAN-Setup",
    "Netzwerk-Check",
    "Smart-Home-Service",
    "Videotürklingel",
    "Kamera-Setup",
    "Heimsicherheits-Check",
    "Streaming-Setup",
    "Smart-TV-Setup",
    "AV-Kalibrierung",
    "Malware-Entfernung",
    "Backup & Restore",
    "OS-Installation",
    "PC-Tune-Up",
    "E-Mail & Cloud-Setup",
    "Mobilgeräte-Support",
    "Smart-Licht-Setup",
    "Thermostat-Setup"
  ];
  
  const services = isMobile ? mobileServices : desktopServices;
  const displayInterval = 3000; // 3 seconds per word

  // Check for mobile and reduced motion on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const checkReducedMotion = () => {
      setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };
    
    checkMobile();
    checkReducedMotion();
    window.addEventListener('resize', checkMobile);
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', checkReducedMotion);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      mediaQuery.removeEventListener('change', checkReducedMotion);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    // Track animation start only once
    if (currentServiceIndex === 0 && typeof window !== 'undefined' && window.umami) {
      window.umami.track('hero_cycle_start');
    }

    if (isPaused) {
      return;
    }

    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        const nextIndex = (currentServiceIndex + 1) % services.length;
        setCurrentServiceIndex(nextIndex);
        setIsVisible(true);
        
        // Track word change
        if (typeof window !== 'undefined' && window.umami) {
          window.umami.track('hero_cycle_word', { word: services[nextIndex] });
        }
      }, 250); // Transition duration
    }, displayInterval);

    return () => clearInterval(interval);
  }, [currentServiceIndex, services, isPaused, displayInterval, prefersReducedMotion]);

  const handleConsultation = () => {
    // Track analytics event
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track('cta_consultation', { location: 'hero' });
    }
  };

  const handleWhatsApp = () => {
    // Track analytics event
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track('whatsapp_start', { location: 'hero' });
    }
    window.open("https://wa.me/4915565029989?text=Hallo,%20ich%20interessiere%20mich%20für%20ein%20Service-Paket...", "_blank");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-neutral-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pb-20 pt-16 lg:pb-32 lg:pt-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 
              className="text-hero mb-8 text-foreground"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onFocus={() => setIsPaused(true)}
              onBlur={() => setIsPaused(false)}
            >
              <span className="block">
                {staticText}
              </span>
              <span 
                className="text-accent inline-block relative overflow-hidden"
                style={{ 
                  height: '1.2em',
                  minWidth: isMobile ? '240px' : '420px',
                  verticalAlign: 'top'
                }}
                aria-live="polite"
                aria-atomic="true"
              >
                {prefersReducedMotion ? (
                  <span className="block leading-none">IT-Service & Support</span>
                ) : (
                  <span 
                    className={`block absolute top-0 left-0 leading-none transition-opacity duration-500 ease-in-out ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    {services[currentServiceIndex]}
                  </span>
                )}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-subtitle mx-auto max-w-2xl mb-12">
              Keine Überraschungen: monatliche Pakete, schneller Support per Telefon, 
              WhatsApp, Fernwartung und vor Ort.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleConsultation}
                className="btn-hero group min-h-[48px]"
                aria-label="Kostenlose Erstberatung vereinbaren"
              >
                Kostenlose Erstberatung
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button
                onClick={handleWhatsApp}
                className="btn-secondary group min-h-[48px]"
                aria-label="WhatsApp Support starten"
              >
                <img src={WhatsAppIcon} alt="WhatsApp" className="mr-2 h-5 w-5" />
                WhatsApp Support starten
              </button>
            </div>

            {/* Trust Indicators - erweitert mit Teasern und Links */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link 
                to="/benefits/lokaler-support"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.umami) {
                    window.umami.track('card_click', { benefit_slug: 'lokaler-support' });
                  }
                }}
                className="flex flex-col items-center text-center group cursor-pointer p-6 rounded-xl hover:bg-neutral-50 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-start to-brand-end flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Lokaler Support</h3>
                <p className="text-sm text-muted-foreground mb-3">Köln & Umgebung. Schnell vor Ort, fester Ansprechpartner, WhatsApp-Direktkontakt.</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Wir kommen aus Köln, kennen Wege, Zeiten und typische Setups. Ob Nippes, Ehrenfeld oder Sülz: kurze Anfahrt, klare Absprachen, verlässlich vor Ort. Viele Anliegen lösen wir bereits per Fernwartung, damit der Termin maximal kurz bleibt.
                </p>
                <span className="text-accent font-medium group-hover:underline">Mehr erfahren</span>
              </Link>
              
              <Link 
                to="/benefits/schnelle-reaktion"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.umami) {
                    window.umami.track('card_click', { benefit_slug: 'schnelle-reaktion' });
                  }
                }}
                className="flex flex-col items-center text-center group cursor-pointer p-6 rounded-xl hover:bg-neutral-50 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-start to-brand-end flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Schnelle Reaktion</h3>
                <p className="text-sm text-muted-foreground mb-3">Meist am selben Tag. Remote oft in 1–2 Stunden.</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Anfragen landen ohne Warteschleife beim richtigen Ansprechpartner. Monitoring und feste Wartungszyklen verhindern vieles im Vorfeld. Was bleibt, lösen wir pragmatisch – remote, telefonisch oder bei Bedarf vor Ort.
                </p>
                <span className="text-accent font-medium group-hover:underline">Mehr erfahren</span>
              </Link>
              
              <Link 
                to="/benefits/planbare-kosten"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.umami) {
                    window.umami.track('card_click', { benefit_slug: 'planbare-kosten' });
                  }
                }}
                className="flex flex-col items-center text-center group cursor-pointer p-6 rounded-xl hover:bg-neutral-50 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-start to-brand-end flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Planbare Kosten</h3>
                <p className="text-sm text-muted-foreground mb-3">Feste Monatsraten statt unklarer Stunden.</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Monatlich kalkulierbar, mit 15 % Rabatt bei jährlicher Zahlung. Kein Break-Fix-Chaos: Sie zahlen für Stabilität und Ruhe, nicht für Feuerwehreinsätze.
                </p>
                <span className="text-accent font-medium group-hover:underline">Mehr erfahren</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;