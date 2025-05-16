import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import AnimatedText from "../components/AnimatedText";
import BlurImage from "../components/BlurImage";

// Placeholder logo/image URLs
const logos = [
  {
    name: "CfHE IIT Hyderabad",
    src: "https://vyuhaa-logos.s3.amazonaws.com/cfhe.png", // Replace with your own asset or keep as placeholder
  },
  {
    name: "NVIDIA Inception",
    src: "https://vyuhaa-logos.s3.amazonaws.com/nvidia.png",
  },
  {
    name: "CPath Labs",
    src: "https://vyuhaa-logos.s3.amazonaws.com/cpathlabs.png",
  },
  {
    name: "Telangana NHM",
    src: "https://vyuhaa-logos.s3.amazonaws.com/telangana.png",
  },
  {
    name: "Diagnexia UK",
    src: "https://vyuhaa-logos.s3.amazonaws.com/diagnexia.png",
  },
];

// Placeholder for client/customer logos
const clientLogos = [
  {
    name: "Fernandez Hospitals",
    src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=220&q=80",
  },
  {
    name: "Sudha Hospitals",
    src: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=220&q=80",
  },
  {
    name: "CPath Labs",
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=220&q=80",
  },
];

const impactPartnerLogos = [
  {
    name: "IIT Hyderabad",
    src: "https://vyuhaa-logos.s3.amazonaws.com/cfhe.png",
  },
  {
    name: "NVIDIA Inception",
    src: "https://vyuhaa-logos.s3.amazonaws.com/nvidia.png",
  },
  {
    name: "Hamamatsu Photonics",
    src: "https://vyuhaa-logos.s3.amazonaws.com/hamamatsu.png",
  },
  {
    name: "CCAMP",
    src: "https://vyuhaa-logos.s3.amazonaws.com/ccamp.png",
  },
  {
    name: "MEITY",
    src: "https://vyuhaa-logos.s3.amazonaws.com/meity.png",
  }
];

const Marquee = () => (
  <div className="w-full overflow-x-hidden py-5 bg-white border-y border-gray-100">
    <div className="flex gap-12 animate-marquee whitespace-nowrap">
      {clientLogos.map(({ name, src }) => (
        <div key={name} className="flex flex-col items-center mx-4 min-w-[140px]">
          <img src={src} alt={name} className="h-14 w-36 object-contain grayscale hover:grayscale-0 transition" />
          <span className="mt-1 text-xs text-gray-500">{name}</span>
        </div>
      ))}
      {/* Duplicate for seamless loop */}
      {clientLogos.map(({ name, src }) => (
        <div key={name + "-dupe"} className="flex flex-col items-center mx-4 min-w-[140px]">
          <img src={src} alt={name} className="h-14 w-36 object-contain grayscale hover:grayscale-0 transition" />
          <span className="mt-1 text-xs text-gray-500">{name}</span>
        </div>
      ))}
    </div>
    <style>
      {`
        @keyframes marquee {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: flex;
        }
      `}
    </style>
  </div>
);

// --- COMPONENTS ---

const Hero = () => (
  <section className="relative min-h-[80vh] flex flex-col justify-center section-padding pt-24 md:pt-40 mb-8 bg-gradient-to-b from-white to-vyuhaa-50">
    <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-10">
      <div className="w-full lg:w-1/2">
        {/* Increase Vyuhaa Logo size and display it at the top of Hero */}
        <div className="flex mb-6">
          <img
            src="https://vyuhaa-logos.s3.amazonaws.com/vyuhaa-logo.png"
            alt="Vyuhaa Logo"
            className="h-20 md:h-28 w-auto mx-auto mb-2"
          />
        </div>
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
      </div>
      <div className="w-full lg:w-1/2 relative">
        <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl max-w-xl mx-auto animate-fade-in">
          <BlurImage
            // Laboratory/diagnostics photo
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

const AboutVyuhaa = () => (
  <section className="section-padding bg-white" id="about">
    <div className="max-w-4xl mx-auto text-center">
      <AnimatedText
        as="h2"
        text="Reimagining Cancer Screening with AI + Access"
        className="text-2xl md:text-4xl font-bold mb-4"
      />
      <AnimatedText
        text="Vyuhaa Med Data builds cutting-edge assistive technologies that bring the power of AI to pathology labs, screening programs, and frontline health workers. Our mission is to make early detection faster, smarter, and more accessible — starting with cervical cancer."
        className="text-gray-600 mb-5"
        delay={100}
      />
    </div>
  </section>
);

const ImpactHighlights = () => (
  <section className="section-padding bg-vyuhaa-50" id="impact">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-8">
        <AnimatedText
          as="h2"
          text="Our Impact"
          className="text-xl md:text-3xl font-bold mb-4"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-extrabold text-vyuhaa-600">5,000+</span>
            <span className="text-gray-700 text-sm text-center">Women Screened</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-extrabold text-vyuhaa-600">NABL</span>
            <span className="text-gray-700 text-sm text-center">Double-Blind Lab Studies</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-extrabold text-vyuhaa-600">&gt;60%</span>
            <span className="text-gray-700 text-sm text-center">Workload Reduction</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-extrabold text-vyuhaa-600">4</span>
            <span className="text-gray-700 text-sm text-center">Regions Deployed</span>
          </div>
        </div>
        <div className="text-sm text-gray-600 mb-2">Deployed in 3 states + 1 international pilot.</div>
        {/* Replaced logos with `impactPartnerLogos` */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-2">
          <span className="text-gray-500 mr-2 font-semibold">Supported by:</span>
          {impactPartnerLogos.map(({ name, src }) => (
            <img
              key={name}
              src={src}
              alt={name}
              className="h-10 md:h-14 w-auto object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

const CerviAIPlatform = () => (
  <section className="section-padding bg-white" id="cerviai-platform">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <AnimatedText
          as="h2"
          text="CerviAI™ – Screening Cervical Cancer with AI"
          className="text-2xl md:text-3xl font-bold mb-5"
        />
        <AnimatedText
          text="CerviAI is a deep learning-powered solution dedicated for automated cervical cytology screening. For other cancer diagnostics – breast, GI, lung, oral and more – explore our VyuPath platform and modular foundational models for digital pathology."
          className="mb-5 text-gray-700"
          delay={100}
        />
        <ul className="space-y-2 mb-5 text-gray-700 text-sm md:text-base">
          <li>• AI-based triage and anomaly detection for cervical cytology</li>
          <li>• Trained on over 2,800 cases in NABL-accredited labs</li>
          <li>• EDGE device with cloud sync for low-resource settings</li>
          <li>• Works with Hamamatsu, Grundium, and KFBio scanners</li>
          <li>• Modular AI models: CerviAI, VyuPath and more</li>
        </ul>
        <a href="#request-demo">
          <Button size="lg">Request Edge Device Demo</Button>
        </a>
      </div>
      <div className="flex flex-col items-center space-y-6">
        <BlurImage
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80"
          alt="CerviAI Edge Device in diagnostics lab"
          className="w-full h-64 object-cover rounded-xl"
        />
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="section-padding bg-vyuhaa-50">
    <div className="max-w-5xl mx-auto">
      <AnimatedText
        as="h2"
        text="How It Works"
        className="text-2xl md:text-3xl font-bold mb-6 text-center"
      />
      {/* Simplified workflow diagram */}
      <div className="grid gap-8 md:grid-cols-4 items-center">
        <div className="flex flex-col items-center">
          <BlurImage
            src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=200&q=80"
            alt="Slide Scanned"
            className="w-24 h-24 object-cover rounded-full mb-2"
          />
          <span className="text-sm font-semibold text-gray-700 text-center mt-2">Slide Scanned</span>
        </div>
        <div className="flex flex-col items-center">
          <BlurImage
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=200&q=80"
            alt="AI Inference"
            className="w-24 h-24 object-cover rounded-full mb-2"
          />
          <span className="text-sm font-semibold text-gray-700 text-center mt-2">AI Inference<br />EDGE/Cloud</span>
        </div>
        <div className="flex flex-col items-center">
          <BlurImage
            src="https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=200&q=80"
            alt="Review Interface"
            className="w-24 h-24 object-cover rounded-full mb-2"
          />
          <span className="text-sm font-semibold text-gray-700 text-center mt-2">Pathologist Review</span>
        </div>
        <div className="flex flex-col items-center">
          <BlurImage
            src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=200&q=80"
            alt="Report Sync"
            className="w-24 h-24 object-cover rounded-full mb-2"
          />
          <span className="text-sm font-semibold text-gray-700 text-center mt-2">Report Generation &amp; Sync</span>
        </div>
      </div>
    </div>
  </section>
);

const ProductsSection = () => (
  <section className="section-padding bg-white" id="products">
    <div className="max-w-6xl mx-auto">
      <AnimatedText
        as="h2"
        text="Modular AI for Diagnostic Pathology"
        className="text-2xl md:text-3xl font-bold mb-2 text-center"
      />
      <AnimatedText
        text="Each model we build addresses a specific clinical bottleneck."
        className="mb-10 text-center text-gray-600"
        delay={100}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass-card p-6 flex flex-col items-center">
          <BlurImage src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&q=80" alt="CerviAI" className="w-20 h-20 mb-4 rounded-full"/>
          <div className="font-bold text-vyuhaa-600 mb-1">CerviAI (Cervical Cytology)</div>
          <div className="text-sm text-gray-700 text-center">Deployed, validated, regulatory path ongoing</div>
        </div>
        <div className="glass-card p-6 flex flex-col items-center opacity-60">
          <BlurImage src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=300&q=80" alt="BreastAI" className="w-20 h-20 mb-4 rounded-full"/>
          <div className="font-bold text-blue-600 mb-1">Breast Cancer AI</div>
          <div className="text-xs italic text-gray-500 mb-1">(Coming Soon)</div>
          <div className="text-sm text-gray-700 text-center">Focused on FNA/biopsy image triage</div>
        </div>
        <div className="glass-card p-6 flex flex-col items-center">
          <BlurImage src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=300&q=80" alt="Histopathology AI" className="w-20 h-20 mb-4 rounded-full"/>
          <div className="font-bold text-blue-500 mb-1">Histopathology AI Modules</div>
          <div className="text-sm text-gray-700 text-center">GI, Lung, Oral — under development</div>
        </div>
        <div className="glass-card p-6 flex flex-col items-center">
          <BlurImage src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=300&q=80" alt="Annotation Tools" className="w-20 h-20 mb-4 rounded-full"/>
          <div className="font-bold text-black mb-1">Annotation Toolkits</div>
          <div className="text-sm text-gray-700 text-center">Custom training/validation environments for labs</div>
        </div>
      </div>
    </div>
  </section>
);

const TeamPreview = () => (
  <section className="section-padding bg-vyuhaa-50" id="team">
    <div className="max-w-5xl mx-auto">
      <AnimatedText
        as="h2"
        text="Built by Experts in Healthcare, AI, and Public Health"
        className="text-2xl md:text-3xl font-bold mb-8 text-center"
      />
      <div className="flex flex-wrap gap-8 justify-center">
        <div className="flex flex-col items-center">
          <BlurImage src="https://vyuhaa-logos.s3.amazonaws.com/dhritiman.jpg" alt="Dhritiman Mallick" className="w-24 h-24 rounded-full mb-2"/>
          <span className="font-bold text-vyuhaa-800">Dhritiman Mallick</span>
          <span className="text-gray-500 text-sm">Founder &amp; Operations</span>
        </div>
        <div className="flex flex-col items-center">
          <BlurImage src="https://vyuhaa-logos.s3.amazonaws.com/ranjani.jpg" alt="Dr. CP Ranjani" className="w-24 h-24 rounded-full mb-2"/>
          <span className="font-bold text-vyuhaa-800">Dr. CP Ranjani</span>
          <span className="text-gray-500 text-sm">Lead Pathologist</span>
        </div>
      </div>
    </div>
  </section>
);

// --- PAGE MAIN ---

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
