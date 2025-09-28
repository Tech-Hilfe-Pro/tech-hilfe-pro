import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Suspense, lazy } from "react";

// Lazy load pages for code splitting
const Index = lazy(() => import("./pages/Index"));
const Vorteile = lazy(() => import("./pages/Vorteile"));
const Packages = lazy(() => import("./pages/Packages"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));
const AGB = lazy(() => import("./pages/AGB"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ServerError = lazy(() => import("./pages/ServerError"));
const ITHilfeKoeln = lazy(() => import("./pages/ITHilfeKoeln"));
const ComputerhilfeNeuss = lazy(() => import("./pages/ComputerhilfeNeuss"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">
            <div className="animate-pulse text-muted-foreground">Laden...</div>
          </div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/benefits/:slug" element={<Vorteile />} />
              <Route path="/vorteile" element={<Vorteile />} />
              <Route path="/plans" element={<Packages />} />
              <Route path="/einmalige-hilfe" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/kontakt" element={<Contact />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
              <Route path="/agb" element={<AGB />} />
              <Route path="/widerruf" element={<div>Widerruf page coming soon</div>} />
              <Route path="/it-hilfe-koeln" element={<ITHilfeKoeln />} />
              <Route path="/computerhilfe-neuss" element={<ComputerhilfeNeuss />} />
              <Route path="/500" element={<ServerError />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
