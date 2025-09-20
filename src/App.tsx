
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CerviAIPlatform from "./pages/CerviAIPlatform";
import Products from "./pages/Products";
import Impact from "./pages/Impact";
import Team from "./pages/Team";
import News from "./pages/News";
import PartnerContact from "./pages/PartnerContact";
import FlexureChallenge from "./pages/FlexureChallenge";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cerviai-platform" element={<CerviAIPlatform />} />
          <Route path="/products" element={<Products />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/news" element={<News />} />
          <Route path="/partner-contact" element={<PartnerContact />} />
          <Route path="/flexure-challenge" element={<FlexureChallenge />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
