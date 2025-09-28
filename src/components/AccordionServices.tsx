import { useState } from "react";
import { ChevronDown, Wifi, Monitor, Printer, Home, Shield, Smartphone } from "lucide-react";

const serviceCategories = [
  {
    id: "internet-wlan",
    icon: Wifi,
    title: "Internet & WLAN",
    items: ["WLAN optimieren", "FRITZ!Box/Router", "Mesh-Setup"]
  },
  {
    id: "pc-mac", 
    icon: Monitor,
    title: "PC & Mac",
    items: ["System-Tuning", "Neuinstallation & Updates", "E-Mail/Outlook"]
  },
  {
    id: "drucker-scanner",
    icon: Printer, 
    title: "Drucker & Scanner",
    items: ["WLAN-Drucker", "Scan-Workflows (PDF)"]
  },
  {
    id: "smart-home",
    icon: Home,
    title: "Smart Home", 
    items: ["Smart-TV/Streaming", "NAS/Backups"]
  },
  {
    id: "sicherheit-backup",
    icon: Shield,
    title: "Sicherheit & Backup",
    items: ["Virencheck & Bereinigung", "Backup-Lösung"]
  },
  {
    id: "mobilgeraete",
    icon: Smartphone,
    title: "Mobilgeräte",
    items: ["Smartphone-Umzug", "Familienfreigabe"]
  }
];

export const AccordionServices = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (categoryId: string) => {
    const newOpen = openCategory === categoryId ? null : categoryId;
    setOpenCategory(newOpen);
    
    if (newOpen && typeof window !== 'undefined' && window.umami) {
      window.umami.track('accordion_open_services', { category: categoryId });
    }
  };

  const handleBookClick = (categoryId: string) => {
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track(`service_book_click_${categoryId}`);
    }
    
    // Scroll to contact section
    const contactElement = document.querySelector('#kontakt');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-16 bg-neutral-50" id="einmalige-hilfe">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-section-title text-foreground">
            Einmalige Hilfe (ohne Abo)
          </h2>
          <div className="mt-4 p-4 bg-white rounded-xl border border-border">
            <p className="text-sm text-foreground">
              <span className="font-medium">Standard:</span> Remote ab 39 € / 30 Min, Vor-Ort 89 € / Std. • 
              <span className="font-medium text-primary"> Mitglied:</span> Vor-Ort 69 € / Termin (bis 60 Min); danach je angefangene 15 Min: 19 €
            </p>
          </div>
        </div>

        <div className="space-y-2">
          {serviceCategories.map((category) => {
            const IconComponent = category.icon;
            const isOpen = openCategory === category.id;
            
            return (
              <div key={category.id} className="rounded-xl border border-border bg-white overflow-hidden">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
                  aria-expanded={isOpen}
                  data-umami-event="accordion_open_services"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-lg font-semibold text-foreground">{category.title}</span>
                  </div>
                  <ChevronDown 
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 border-t border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        {category.items.map((item, index) => (
                          <div key={index} className="flex items-center gap-2 py-2">
                            <span className="text-sm text-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="ml-6 flex flex-col items-end gap-2">
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          Mitgliederpreis 69 €
                        </span>
                        <a
                          href="/it-hilfe-koeln"
                          className="text-xs text-muted-foreground hover:text-primary transition-colors"
                        >
                          IT-Hilfe Köln
                        </a>
                        <a
                          href="/computerhilfe-neuss"
                          className="text-xs text-muted-foreground hover:text-primary transition-colors"
                        >
                          Computerhilfe Neuss
                        </a>
                        <button
                          onClick={() => handleBookClick(category.id)}
                          className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                          data-umami-event={`service_book_click_${category.id}`}
                        >
                          Jetzt buchen
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};