import { Link } from "react-router-dom";
import { ArrowLeft, RefreshCw, MessageCircle } from "lucide-react";
import WhatsAppIcon from "@/assets/whatsapp.svg";

const ServerError = () => {
  const handleWhatsApp = () => {
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track('whatsapp_start', { location: '500' });
    }
    window.open("https://wa.me/4915565029989?text=Hallo,%20ich%20habe%20ein%20technisches%20Problem%20auf%20Ihrer%20Website...", "_blank");
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-bold text-muted-foreground mb-4">500</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Interner Serverfehler
        </h2>
        <p className="text-muted-foreground mb-8">
          Entschuldigung, es ist ein technischer Fehler aufgetreten. Unser Support hilft gerne weiter.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Zur Startseite
          </Link>
          <button
            onClick={handleRefresh}
            className="btn-secondary inline-flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Neu laden
          </button>
          <button
            onClick={handleWhatsApp}
            className="btn-whatsapp"
          >
            <img src={WhatsAppIcon} alt="WhatsApp" className="h-4 w-4" />
            Support kontaktieren
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServerError;