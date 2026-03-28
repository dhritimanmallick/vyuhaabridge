
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import Products from "./pages/Products";
import Impact from "./pages/Impact";
import Team from "./pages/Team";
import News from "./pages/News";
import PartnerContact from "./pages/PartnerContact";
import Careers from "./pages/Careers";
import DropletDx from "./pages/DropletDx";
import PartnerLogin from "./pages/PartnerLogin";
import PartnerDashboard from "./pages/PartnerDashboard";
import Opinion from "./pages/Opinion";
import OpinionArticle from "./pages/OpinionArticle";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          <Route path="/products" element={<Products />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/news" element={<News />} />
          <Route path="/partner-contact" element={<PartnerContact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/dropletdx" element={<DropletDx />} />
          <Route path="/partner-login" element={<PartnerLogin />} />
          <Route path="/partner-dashboard" element={<PartnerDashboard />} />
          <Route path="/opinion" element={<Opinion />} />
          <Route path="/opinion/:slug" element={<OpinionArticle />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
