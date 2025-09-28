import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Vorteile from "./pages/Vorteile";
import Packages from "./pages/Packages";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import AGB from "./pages/AGB";
import NotFound from "./pages/NotFound";
import ServerError from "./pages/ServerError";
import ITHilfeKoeln from "./pages/ITHilfeKoeln";
import ComputerhilfeNeuss from "./pages/ComputerhilfeNeuss";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
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
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
