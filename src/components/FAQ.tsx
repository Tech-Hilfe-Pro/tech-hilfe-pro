import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Brauche ich unbedingt ein Paket?",
      answer: "Nein. Wir helfen auch ohne Vertrag. Die Pakete machen Kosten planbar und senken Ausfälle."
    },
    {
      question: "Wie schnell erhalte ich Hilfe?",
      answer: "In der Regel am selben Werktag, remote oft innerhalb von 1–2 Stunden."
    },
    {
      question: "Was ist, wenn etwas vor Ort nötig ist?",
      answer: "Wir kommen zu Ihnen in Köln & Umgebung. On-Site Service: 79-89 €/Stunde."
    },
    {
      question: "Sind Daten bei Fernwartung sicher?",
      answer: "Ja. Zugriff nur mit Ihrer Freigabe, Ende-zu-Ende verschlüsselt, DSGVO-konform."
    },
    {
      question: "Kann ich monatlich kündigen?",
      answer: "Privat: monatlich kündbar. KMU: Kündigungsfrist laut Paket (transparent ausgewiesen)."
    },
    {
      question: "Welche Zahlungsmethoden gibt es?",
      answer: "Monatlich per SEPA-Lastschrift oder jährlich mit 15% Rabatt."
    },
    {
      question: "Welche Gebiete werden abgedeckt?",
      answer: "Köln und Umgebung. Bei größeren Entfernungen sprechen wir individuelle Lösungen ab."
    },
    {
      question: "Was passiert außerhalb der Geschäftszeiten?",
      answer: "Notfall-Support nach Vereinbarung. Standard-Support: Mo-Fr 9-18 Uhr."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-neutral-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section-title mb-4 text-foreground">
            Häufige Fragen
          </h2>
          <p className="text-subtitle">
            Alles, was Sie über unsere IT-Services wissen möchten
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-border rounded-xl overflow-hidden transition-all duration-200 hover:shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors duration-200"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 pb-5 text-muted-foreground leading-relaxed animate-fade-in"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;