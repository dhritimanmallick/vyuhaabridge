import AnimatedText from "@/components/AnimatedText";
import BlurImage from "@/components/BlurImage";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-[80vh] flex flex-col justify-center section-padding pt-24 md:pt-40 mb-8 bg-gradient-to-b from-white to-vyuhaa-50">
    <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-10">
      <div className="w-full lg:w-1/2">
        <span className="inline-block px-3 py-1 rounded-full bg-vyuhaa-100 text-vyuhaa-700 text-sm font-semibold mb-4">
          VyuPath EDGE
        </span>
        <AnimatedText
          as="h1"
          text="In-Situ EDGE-Based Screening for Next-Level Cancer Detection"
          className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
        />
        <AnimatedText
          text="VyuPath EDGE is our portable, AI-powered digital pathology device that brings lab-grade cancer screening to the point of care. From whole-slide image analysis to real-time biomarker quantification — no cloud dependency, no IT setup required."
          className="text-lg text-muted-foreground mb-6"
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
      </div>
      <div className="w-full lg:w-1/2 relative">
        <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto animate-fade-in">
          <BlurImage
            src="/lovable-uploads/vyupath-edge-device.png"
            alt="VyuPath EDGE — In-situ AI-powered screening device by Vyuhaa Med Data"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="absolute -top-8 -right-8 w-40 h-40 bg-vyuhaa-100 rounded-full blur-2xl pointer-events-none animate-pulse-glow"></div>
      </div>
    </div>
  </section>
);
export default Hero;
