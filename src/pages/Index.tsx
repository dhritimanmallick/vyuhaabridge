import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/landing/Hero";
import Marquee from "../components/landing/Marquee";
import AboutVyuhaa from "../components/landing/AboutVyuhaa";
import ImpactHighlights from "../components/landing/ImpactHighlights";
import CerviAIPlatform from "../components/landing/CerviAIPlatform";
import HowItWorks from "../components/landing/HowItWorks";
import ProductsSection from "../components/landing/ProductsSection";
import TeamPreview from "../components/landing/TeamPreview";
import LocationsSection from "../components/LocationsSection";
import CareersSection from "../components/landing/CareersSection";

const Index = () => {
  useEffect(() => {
    document.title = "Vyuhaa Med Data | AI-Powered Cancer Screening For The Real World";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'VyuPath EDGE by Vyuhaa Med Data delivers in-situ, AI-powered digital pathology for multi-disease screening at the point of care.');
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <div className="max-w-5xl mx-auto text-center py-6">
          <h3 className="text-xl md:text-2xl font-semibold text-muted-foreground">Our Clients</h3>
        </div>
        <Marquee />
        <AboutVyuhaa />
        <ImpactHighlights />
        <CerviAIPlatform />
        <HowItWorks />
        <ProductsSection />
        <TeamPreview />
        <CareersSection />
        <LocationsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
