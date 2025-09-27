import { useState, useEffect } from "react";

const phrases = [
  "WLAN einrichten",
  "PC beschleunigen", 
  "Drucker Setup",
  "Virenschutz",
  "Backup/Restore",
  "E-Mail/Outlook",
  "Smart-TV Setup",
  "Datenumzug",
  "NAS & Cloud",
  "VPN fürs Büro", 
  "Microsoft 365",
  "Mac & Windows"
];

export const TypewriterLine = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Just show the first phrase without animation
      setDisplayText(phrases[0]);
      return;
    }

    const currentPhrase = phrases[currentIndex];
    
    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (!isDeleting) {
        // Typing
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setIsPaused(true);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Move to next phrase
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isPaused ? 1500 : isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentIndex, displayText, isDeleting, isPaused]);

  return (
    <div className="flex justify-center mt-4">
      <div 
        className="text-xl md:text-2xl font-medium text-accent h-8 flex items-center min-w-[280px] justify-center"
        aria-live="polite"
        aria-label="Unsere Services"
      >
        <span className="inline-block">
          {displayText}
          <span className="animate-pulse ml-1 text-primary">|</span>
        </span>
      </div>
    </div>
  );
};