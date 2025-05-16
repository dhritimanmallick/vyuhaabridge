
import AnimatedText from "@/components/AnimatedText";
import BlurImage from "@/components/BlurImage";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const clientLogos = [
  {
    name: "Rotary Club",
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=220&q=80",
  },
  {
    name: "Chennai Clinik",
    src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=220&q=80",
  },
  {
    name: "Bambino Pasta",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=220&q=80",
  },
];

const Hero = () => (
  <section className="relative min-h-[80vh] flex flex-col justify-center section-padding pt-24 md:pt-40 mb-8 bg-gradient-to-b from-white to-vyuhaa-50">
    <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-10">
      <div className="w-full lg:w-1/2">
        <AnimatedText
          as="h1"
          text="AI-Powered Cancer Screening. Built for the Real World."
          className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
        />
        <AnimatedText
          text="CerviAI™ by Vyuhaa Med Data is our AI-powered platform for scalable, assistive cervical cancer screening. For other cancer diagnostics and foundational models, explore our VyuPath platform."
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
        {/* Client Logos */}
        <div className="flex gap-8 items-center mt-6 mb-2">
          {clientLogos.map((logo) => (
            <div key={logo.name} className="flex flex-col items-center min-w-[110px]">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-12 w-28 object-contain grayscale hover:grayscale-0 transition bg-white rounded shadow"
                style={{ maxWidth: 110 }}
              />
              <span className="text-xs text-gray-500 mt-1">{logo.name}</span>
            </div>
          ))}
        </div>
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

