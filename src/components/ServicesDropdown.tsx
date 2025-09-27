import { useState, useRef, useEffect } from "react";
import { ChevronDown, Wifi, Monitor, Printer, Home, Shield, Smartphone } from "lucide-react";

interface ServiceCategory {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  href: string;
}

const serviceCategories: ServiceCategory[] = [
  { icon: Wifi, title: "Internet & WLAN", href: "#internet-wlan" },
  { icon: Monitor, title: "PC & Mac", href: "#pc-mac" },
  { icon: Printer, title: "Drucker & Scanner", href: "#drucker-scanner" },
  { icon: Home, title: "Smart Home", href: "#smart-home" },
  { icon: Shield, title: "Sicherheit & Backup", href: "#sicherheit-backup" },
  { icon: Smartphone, title: "Mobilgeräte", href: "#mobilgeraete" },
];

export const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  const handleItemClick = (href: string) => {
    // Scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    handleClose();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  };

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        ref={buttonRef}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-accent transition-colors duration-200"
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        Services
        <ChevronDown 
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40 bg-black/5" onClick={handleClose} />
          
          {/* Dropdown Menu */}
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 w-80 bg-white rounded-xl border border-border shadow-lg p-6"
            role="menu"
            aria-orientation="vertical"
          >
            <div className="grid grid-cols-2 gap-3">
              {serviceCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.title}
                    onClick={() => handleItemClick(category.href)}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-50 text-left transition-colors duration-200 group"
                    role="menuitem"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};