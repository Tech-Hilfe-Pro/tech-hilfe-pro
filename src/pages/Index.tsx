import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PackagePreview from "@/components/PackagePreview";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set up scroll depth tracking
    const trackScrollDepth = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      // Track scroll milestones
      if (scrollPercent >= 25 && !sessionStorage.getItem('scroll_25')) {
        sessionStorage.setItem('scroll_25', 'true');
        if (typeof window !== 'undefined' && window.umami) {
          window.umami.track('scroll-depth', { depth: 25 });
        }
      }
      if (scrollPercent >= 50 && !sessionStorage.getItem('scroll_50')) {
        sessionStorage.setItem('scroll_50', 'true');
        if (typeof window !== 'undefined' && window.umami) {
          window.umami.track('scroll-depth', { depth: 50 });
        }
      }
      if (scrollPercent >= 75 && !sessionStorage.getItem('scroll_75')) {
        sessionStorage.setItem('scroll_75', 'true');
        if (typeof window !== 'undefined' && window.umami) {
          window.umami.track('scroll-depth', { depth: 75 });
        }
      }
      if (scrollPercent >= 100 && !sessionStorage.getItem('scroll_100')) {
        sessionStorage.setItem('scroll_100', 'true');
        if (typeof window !== 'undefined' && window.umami) {
          window.umami.track('scroll-depth', { depth: 100 });
        }
      }
    };

    window.addEventListener('scroll', trackScrollDepth);
    return () => window.removeEventListener('scroll', trackScrollDepth);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        
        {/* Vorteile Teaser */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Unsere Vorteile auf einen Blick</h3>
            <p className="text-muted-foreground mb-8">
              Die wichtigsten Gründe, warum Tech Hilfe Pro passt.
            </p>
            <Link 
              to="/vorteile" 
              className="btn-hero"
            >
              Mehr erfahren
            </Link>
          </div>
        </section>
        
        <PackagePreview />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
