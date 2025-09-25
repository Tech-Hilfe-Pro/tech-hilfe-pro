import { Link } from "react-router-dom";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import WhatsAppIcon from "@/assets/whatsapp.svg";

const Footer = () => {
  const handleWhatsApp = () => {
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track('whatsapp_start', { location: 'footer' });
    }
    window.open("https://wa.me/4915565029989?text=Hallo,%20ich%20interessiere%20mich%20für%20ein%20Service-Paket...", "_blank");
  };

  const handleConsultation = () => {
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track('cta_consultation', { location: 'footer' });
    }
  };

  return (
    <footer className="bg-neutral-900 text-white">
      {/* CTA Section */}
      <div className="border-b border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">
              Bereit für planbare IT statt Feuerlöschen?
            </h2>
            <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns über Ihre IT-Herausforderungen sprechen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleConsultation}
                className="btn-hero"
              >
                Kostenlose Erstberatung
              </button>
              <button
                onClick={handleWhatsApp}
                className="btn-whatsapp"
                aria-label="Chat auf WhatsApp starten"
              >
                <img src={WhatsAppIcon} alt="WhatsApp" className="h-5 w-5" />
                WhatsApp Support starten
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/favicon.png" alt="Tech Hilfe Pro" className="h-8 w-8" />
              <span className="text-xl font-semibold">Tech Hilfe Pro</span>
            </div>
            <p className="text-neutral-400 mb-6 max-w-md">
              Ihr vertrauensvoller IT-Partner in Köln. Proaktive Betreuung, 
              planbare Kosten und persönlicher Service – ohne Fachjargon.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-neutral-300">Köln & Umgebung</span>
              </div>
              <a 
                href="tel:+4915565029989"
                className="flex items-center gap-3 hover:text-accent transition-colors"
              >
                <Phone className="h-5 w-5 text-accent" />
                <span>+49 1556 5029989</span>
              </a>
              <a 
                href="mailto:kontakt@techhilfepro.de"
                className="flex items-center gap-3 hover:text-accent transition-colors"
              >
                <Mail className="h-5 w-5 text-accent" />
                <span>kontakt@techhilfepro.de</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-neutral-400">
              <li><Link to="/benefits/proaktive-betreuung" className="hover:text-white transition-colors">Proaktive Betreuung</Link></li>
              <li><Link to="/benefits/schneller-support" className="hover:text-white transition-colors">Remote Support</Link></li>
              <li><Link to="/benefits/sicherheit-und-updates" className="hover:text-white transition-colors">Sicherheit & Updates</Link></li>
              <li><Link to="/pakete" className="hover:text-white transition-colors">Managed Services</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Unternehmen</h3>
            <ul className="space-y-2 text-neutral-400">
              <li><Link to="/about" className="hover:text-white transition-colors">Über uns</Link></li>
              <li><Link to="/kontakt" className="hover:text-white transition-colors">Kontakt</Link></li>
              <li><Link to="/pakete" className="hover:text-white transition-colors">Pakete & Preise</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-neutral-400 text-sm">
              © 2024 Tech Hilfe Pro. Alle Rechte vorbehalten.
            </div>
            <div className="flex gap-6 text-sm text-neutral-400">
              <Link to="/impressum" className="hover:text-white transition-colors">
                Impressum
              </Link>
              <Link to="/datenschutz" className="hover:text-white transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;