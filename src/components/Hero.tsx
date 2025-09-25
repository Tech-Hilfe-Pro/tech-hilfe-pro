import { useEffect, useState } from "react";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  const fullText = "Planbare IT-Kosten. Proaktiver Support. Sicherheit für Köln & Umgebung.";
  const typingSpeed = 50; // milliseconds per character

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Skip animation for users who prefer reduced motion
      setDisplayText(fullText);
      setShowCursor(false);
      return;
    }

    const timer = setTimeout(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        // Hide cursor after typing is complete
        setTimeout(() => setShowCursor(false), 1000);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, fullText]);

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
    window.open("https://wa.me/4915565029989", "_blank");
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
            {/* Main Headline with Typewriter Effect */}
            <h1 className="text-hero mb-8 text-foreground">
              {displayText}
              {showCursor && (
                <span className="inline-block w-0.5 h-[1em] bg-accent ml-1 animate-pulse" />
              )}
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
                <MessageCircle className="mr-2 h-5 w-5" />
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