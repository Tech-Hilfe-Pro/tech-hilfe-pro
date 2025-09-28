import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import WhatsAppIcon from "@/assets/whatsapp.svg";
import { ServicesDropdown } from "./ServicesDropdown";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  const navigation = [
    { name: "Start", href: "/" },
    { name: "Einmalige Hilfe", href: "/einmalige-hilfe" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    // Return focus to menu button
    setTimeout(() => {
      menuButtonRef.current?.focus();
    }, 100);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll for header visibility and menu auto-close
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Auto-close menu if scrolled more than 20px
    if (isMenuOpen && Math.abs(currentScrollY - lastScrollY) > 20) {
      closeMenu();
    }

    // Show/hide header based on scroll direction
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down
      setIsHeaderVisible(false);
    } else {
      // Scrolling up or at top
      setIsHeaderVisible(true);
    }

    setLastScrollY(currentScrollY);
  }, [isMenuOpen, lastScrollY, closeMenu]);

  // Throttled scroll handler
  const throttledScrollHandler = useCallback(() => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(handleScroll, 100);
  }, [handleScroll]);

  // Handle click outside
  const handleClickOutside = useCallback((event: MouseEvent) => {
    const target = event.target as Element;
    if (isMenuOpen && !target.closest('header')) {
      closeMenu();
    }
  }, [isMenuOpen, closeMenu]);

  // Handle ESC key
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape' && isMenuOpen) {
      closeMenu();
    }
  }, [isMenuOpen, closeMenu]);

  useEffect(() => {
    // Body scroll lock
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    // Add scroll listener
    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    
    // Add click outside and ESC listeners
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [throttledScrollHandler, handleClickOutside, handleKeyDown]);

  const handleWhatsApp = () => {
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track('whatsapp_start', { location: 'header' });
    }
    window.open("https://wa.me/4915565029989?text=Hallo,%20ich%20interessiere%20mich%20für%20ein%20Service-Paket...", "_blank");
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full border-b border-border bg-white/80 backdrop-blur-lg transition-transform duration-200 ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        window.matchMedia('(prefers-reduced-motion: reduce)').matches ? '' : 'ease-out'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/fh-logo.png" alt="Tech Hilfe Pro" className="h-8 w-8" />
            <span className="text-xl font-bold text-foreground">
              Tech <span className="text-primary">Hilfe</span> Pro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <ServicesDropdown />
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+4915565029989"
              className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
              aria-label="Anrufen: +49 1556 5029989"
            >
              <Phone className="h-4 w-4" />
              +49 1556 5029989
            </a>
            <a
              href="mailto:info@techhilfepro.de"
              className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
              aria-label="E-Mail senden"
            >
              info@techhilfepro.de
            </a>
            <button
              onClick={handleWhatsApp}
              className="btn-whatsapp text-sm py-2 px-4"
              aria-label="Chat auf WhatsApp starten"
            >
              <img src={WhatsAppIcon} alt="WhatsApp" className="h-4 w-4" />
              WhatsApp
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            ref={menuButtonRef}
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            className={`md:hidden border-t border-border bg-white transition-all duration-200 ${
              window.matchMedia('(prefers-reduced-motion: reduce)').matches ? '' : 'ease-out'
            } ${
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            <div className="px-2 py-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 rounded-lg text-base font-medium text-foreground hover:bg-neutral-50"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services Section */}
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-muted-foreground mb-2">Services</div>
                <div className="space-y-1">
                  <button className="block w-full text-left px-3 py-2 rounded-lg text-sm text-foreground hover:bg-neutral-50" onClick={() => { document.querySelector('#internet-wlan')?.scrollIntoView({ behavior: 'smooth' }); closeMenu(); }}>Internet & WLAN</button>
                  <button className="block w-full text-left px-3 py-2 rounded-lg text-sm text-foreground hover:bg-neutral-50" onClick={() => { document.querySelector('#pc-mac')?.scrollIntoView({ behavior: 'smooth' }); closeMenu(); }}>PC & Mac</button>
                  <button className="block w-full text-left px-3 py-2 rounded-lg text-sm text-foreground hover:bg-neutral-50" onClick={() => { document.querySelector('#drucker-scanner')?.scrollIntoView({ behavior: 'smooth' }); closeMenu(); }}>Drucker & Scanner</button>
                  <button className="block w-full text-left px-3 py-2 rounded-lg text-sm text-foreground hover:bg-neutral-50" onClick={() => { document.querySelector('#smart-home')?.scrollIntoView({ behavior: 'smooth' }); closeMenu(); }}>Smart Home</button>
                  <button className="block w-full text-left px-3 py-2 rounded-lg text-sm text-foreground hover:bg-neutral-50" onClick={() => { document.querySelector('#sicherheit-backup')?.scrollIntoView({ behavior: 'smooth' }); closeMenu(); }}>Sicherheit & Backup</button>
                  <button className="block w-full text-left px-3 py-2 rounded-lg text-sm text-foreground hover:bg-neutral-50" onClick={() => { document.querySelector('#mobilgeraete')?.scrollIntoView({ behavior: 'smooth' }); closeMenu(); }}>Mobilgeräte</button>
                </div>
              </div>
              
              <div className="px-3 py-2 space-y-2 border-t border-border mt-2 pt-2">
                <a
                  href="tel:+4915565029989"
                  className="flex items-center gap-2 text-foreground hover:text-accent"
                  aria-label="Anrufen"
                  onClick={closeMenu}
                >
                  <Phone className="h-4 w-4" />
                  +49 1556 5029989
                </a>
                <button
                  onClick={() => {
                    handleWhatsApp();
                    closeMenu();
                  }}
                  className="btn-whatsapp w-full justify-center"
                  aria-label="Chat auf WhatsApp starten"
                >
                  <img src={WhatsAppIcon} alt="WhatsApp" className="h-4 w-4" />
                  WhatsApp Support
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;