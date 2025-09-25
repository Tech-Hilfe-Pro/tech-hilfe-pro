import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Startseite", href: "/" },
    { name: "Vorteile", href: "/benefits" },
    { name: "Pakete", href: "/pakete" },
    { name: "Über uns", href: "/about" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleWhatsApp = () => {
    window.open("https://wa.me/4915565029989", "_blank");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/80 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/favicon.png" alt="Tech Hilfe Pro" className="h-8 w-8" />
            <span className="text-xl font-semibold text-foreground">
              Tech Hilfe Pro
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
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+4915565029989"
              className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
              aria-label="Anrufen"
            >
              <Phone className="h-4 w-4" />
              Anrufen
            </a>
            <button
              onClick={handleWhatsApp}
              className="btn-whatsapp text-sm py-2 px-4"
              aria-label="Chat auf WhatsApp starten"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            aria-label="Menü öffnen"
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
          <div className="md:hidden border-t border-border bg-white">
            <div className="px-2 py-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 rounded-lg text-base font-medium text-foreground hover:bg-neutral-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 space-y-2">
                <a
                  href="tel:+4915565029989"
                  className="flex items-center gap-2 text-foreground hover:text-accent"
                  aria-label="Anrufen"
                >
                  <Phone className="h-4 w-4" />
                  +49 1556 5029989
                </a>
                <button
                  onClick={handleWhatsApp}
                  className="btn-whatsapp w-full justify-center"
                  aria-label="Chat auf WhatsApp starten"
                >
                  <MessageCircle className="h-4 w-4" />
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