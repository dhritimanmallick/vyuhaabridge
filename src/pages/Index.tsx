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

const Index = () => {
  useEffect(() => {
    document.title = "Vyuhaa Med Data | AI-Powered Cancer Screening For The Real World";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'CerviAI by Vyuhaa Med Data delivers scalable, assistive AI-powered digital pathology for multi-disease screening, trusted by leading labs and health partners.');
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <AboutVyuhaa />
        <ImpactHighlights />
        <CerviAIPlatform />
        <HowItWorks />
        <ProductsSection />
        <TeamPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
