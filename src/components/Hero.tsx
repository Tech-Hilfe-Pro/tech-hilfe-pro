import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import WhatsAppIcon from "@/assets/whatsapp.svg";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  
  const isMobile = useIsMobile();
  
  const staticText = "Planbare IT-Kosten. Proaktiver Support. Sicherheit für Köln & Umgebung: ";
  
  // Full service list for desktop
  const servicesDesktop = [
    "Computer-Reparatur",
    "WLAN-Setup", 
    "Smart-Home-Installation",
    "Virenentfernung",
    "Datensicherung",
    "TV-Wandmontage",
    "Drucker-Einrichtung",
    "Netzwerk-Support",
    "Videotürklingel-Setup",
    "Kamera-Installation",
    "Streaming-Setup",
    "Smart-TV-Setup",
    "Audio-Video-Setup",
    "System-Installation"
  ];
  
  // Shortened service list for mobile
  const servicesMobile = [
    "Computer-Reparatur",
    "WLAN-Setup", 
    "Smart-Home-Setup",
    "Virenentfernung",
    "Datensicherung",
    "TV-Wandmontage",
    "Drucker-Setup",
    "Netzwerk-Support",
    "Video-Setup",
    "Kamera-Installation"
  ];
  
  const services = isMobile ? servicesMobile : servicesDesktop;
  const typeSpeed = 100;
  const deleteSpeed = 50;
  const pauseDuration = 2000;

  useEffect(() => {
    // Check if user prefers reduced motion
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setPrefersReducedMotion(reducedMotion);
    
    if (reducedMotion) {
      return;
    }

    // Track animation start (only once)
    if (!animationStarted && typeof window !== 'undefined' && window.umami) {
      window.umami.track('hero_cycle_start');
      setAnimationStarted(true);
    }
  }, [animationStarted]);

  useEffect(() => {
    if (prefersReducedMotion || isPaused) {
      return;
    }

    const currentService = services[currentServiceIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (displayText.length === 0) {
        // When finished deleting, move to next service and start typing
        const nextIndex = (currentServiceIndex + 1) % services.length;
        
        // Track word change
        if (typeof window !== 'undefined' && window.umami) {
          window.umami.track('hero_cycle_word', { word: services[nextIndex] });
        }
        
        setCurrentServiceIndex(nextIndex);
        setIsDeleting(false);
        setIsTyping(true);
        return;
      } else {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, deleteSpeed);
      }
    } else if (isTyping) {
      if (displayText === currentService) {
        // When finished typing, pause then start deleting
        setIsTyping(false);
        setShowCursor(false);
        timeout = setTimeout(() => {
          setShowCursor(true);
          setIsDeleting(true);
        }, pauseDuration);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentService.slice(0, displayText.length + 1));
        }, typeSpeed);
      }
    } else if (!isTyping && !isDeleting && displayText === "") {
      // Failsafe: if stuck in limbo, restart typing
      setIsTyping(true);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, isDeleting, currentServiceIndex, prefersReducedMotion, isPaused]);

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
            {/* Main Headline with Service Rotation */}
            <h1 
              className="text-hero mb-8 text-foreground"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onFocus={() => setIsPaused(true)}
              onBlur={() => setIsPaused(false)}
            >
              {staticText}
              <span 
                className="relative inline-block text-accent text-left"
                style={{ minWidth: isMobile ? '300px' : '450px' }}
              >
                {prefersReducedMotion ? (
                  <span aria-live="polite">IT-Service & Support</span>
                ) : (
                  <span 
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    {displayText}
                    <span className={`typewriter-cursor ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
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

            {/* Trust Indicators */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-start to-brand-end flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Lokaler Support</h3>
                <p className="text-sm text-muted-foreground">Köln & Umgebung</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-start to-brand-end flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Schnelle Reaktion</h3>
                <p className="text-sm text-muted-foreground">Meist am selben Tag</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-start to-brand-end flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Planbare Kosten</h3>
                <p className="text-sm text-muted-foreground">Feste Monatsraten</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;