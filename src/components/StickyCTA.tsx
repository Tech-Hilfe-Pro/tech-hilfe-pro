import { useState, useEffect } from "react";

interface StickyCTAProps {
  onJoinClick: () => void;
}

export const StickyCTA = ({ onJoinClick }: StickyCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 200px from top
      const scrolled = window.scrollY > 200;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track('cta_sticky_join');
    }
    onJoinClick();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      {/* Safe area padding for iOS */}
      <div className="bg-white border-t border-border p-4 pb-safe">
        <button
          onClick={handleClick}
          className="w-full btn-hero py-4 text-base font-semibold"
          data-umami-event="cta_sticky_join"
        >
          Jetzt Mitglied werden
        </button>
      </div>
    </div>
  );
};