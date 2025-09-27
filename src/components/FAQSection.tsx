import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Kann ich monatlich kündigen?",
    answer: "Ja, alle Memberships sind monatlich kündbar zum Monatsende. Eine Kündigung ist jederzeit möglich."
  },
  {
    question: "Gilt das 14-tägige Widerrufsrecht?",
    answer: "Ja, Sie haben 14 Tage Widerrufsrecht. Bei sofortigem Beginn der Dienstleistung wird anteiliger Wertersatz berechnet."
  },
  {
    question: "Wie funktioniert der Fernzugriff?",
    answer: "Fernzugriff erfolgt nur mit Ihrer ausdrücklichen Einwilligung über sichere, verschlüsselte Verbindungen. Sie haben jederzeit die Kontrolle."
  },
  {
    question: "Wo bieten Sie Service an?",
    answer: "Unser Einsatzgebiet umfasst Köln, Neuss und Umgebung. Remote-Support ist deutschlandweit verfügbar."
  },
  {
    question: "Warum wird keine Umsatzsteuer ausgewiesen?",
    answer: "Wir sind nach §19 UStG (Kleinunternehmer) von der Umsatzsteuer befreit und weisen daher keine Mehrwertsteuer aus."
  }
];

export const FAQSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-section-title text-foreground">
            Häufige Fragen
          </h2>
        </div>

        <div className="space-y-2">
          {faqData.map((item, index) => {
            const isOpen = openItem === index;
            
            return (
              <div key={index} className="rounded-xl border border-border bg-white overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-medium text-foreground pr-4">
                    {item.question}
                  </span>
                  <ChevronDown 
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 border-t border-border">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
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