
import AnimatedText from "@/components/AnimatedText";
import { Microscope, Cpu, Syringe, TestTube, FlaskConical, Dna, Brain, ScanLine, Cog } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  { icon: <Syringe size={20} />, label: "LBC Collection Kits" },
  { icon: <Cog size={20} />, label: "KCT Cytology Processors" },
  { icon: <ScanLine size={20} />, label: "Slide Scanning Systems" },
  { icon: <Cpu size={20} />, label: "CerviAI™ AI Platform" },
  { icon: <TestTube size={20} />, label: "Sequential & Co-Testing" },
  { icon: <FlaskConical size={20} />, label: "2nd Opinion Service" },
  { icon: <Dna size={20} />, label: "HPV DNA Testing" },
  { icon: <Brain size={20} />, label: "NeurOMx (Authorised Importer)" },
];

const ProductsSection = () => (
  <section className="section-padding bg-white" id="products">
    <div className="max-w-6xl mx-auto">
      <AnimatedText
        as="h2"
        text="Turnkey Solution for Cervical Cytology"
        className="text-2xl md:text-3xl font-bold mb-2 text-center"
      />
      <AnimatedText
        text="End-to-end screening — from sample collection to AI-assisted diagnosis."
        className="mb-10 text-center text-muted-foreground"
        delay={100}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {highlights.map((h) => (
          <div key={h.label} className="glass-card p-4 flex flex-col items-center text-center gap-2">
            <div className="p-2 bg-muted rounded-full text-vyuhaa-600">{h.icon}</div>
            <span className="text-sm font-medium">{h.label}</span>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link to="/products" className="button-primary">View All Products & Services →</Link>
      </div>
    </div>
  </section>
);
export default ProductsSection;
