import AnimatedText from "@/components/AnimatedText";
import BlurImage from "@/components/BlurImage";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-[80vh] flex flex-col justify-center section-padding pt-24 md:pt-40 mb-8 bg-gradient-to-b from-white to-vyuhaa-50">
    <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-10">
      <div className="w-full lg:w-1/2">
        <AnimatedText
          as="h1"
          text="The AI-Powered Digital Pathology Platform for Next-Level Cancer Screening"
          className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
        />
        <AnimatedText
          text="Vyuhaa Med Data delivers a cloud-native AI platform built to transform digital histopathology workflows in clinical and screening settings. From whole-slide image analysis to deep phenotyping, our EDGE-based system combines best-in-class cell segmentation, feature extraction, and end-to-end automation – no coding or IT setup required."
          className="text-lg text-gray-600 mb-6"
          delay={100}
        />
        <div className="flex gap-4 mb-6">
          <a href="#contact">
            <Button size="lg">
              Request a Demo
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </a>
          <a href="#cerviai-platform">
            <Button variant="outline" size="lg">
              See CerviAI in Action
              <Play className="ml-2" size={18} />
            </Button>
          </a>
        </div>
        {/* Client Logos section removed as per request */}
      </div>
      <div className="w-full lg:w-1/2 relative">
        <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl max-w-xl mx-auto animate-fade-in">
          <BlurImage
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
            alt="Clinical diagnostics laboratory"
            className="w-full h-72 object-cover"
          />
        </div>
        <div className="absolute -top-8 -right-8 w-40 h-40 bg-vyuhaa-100 rounded-full blur-2xl pointer-events-none animate-pulse-glow"></div>
      </div>
    </div>
  </section>
);
export default Hero;
