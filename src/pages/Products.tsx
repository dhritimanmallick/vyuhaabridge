
import AnimatedText from '../components/AnimatedText';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Microscope, Dna, Cpu, Syringe, TestTube, FlaskConical } from 'lucide-react';

const products = [
  {
    title: "CerviAI Platform",
    description: "AI-powered cervical cytology screening platform with cloud and edge deployment options.",
    icon: <Cpu className="text-blue-500" size={24} />,
    link: "/cerviai-platform"
  },
  {
    title: "Digital Cytology Scanner",
    description: "High-throughput whole slide imaging system optimized for cytology specimens.",
    icon: <Microscope className="text-green-500" size={24} />,
    link: "#scanner"
  },
  {
    title: "LBC Collection Kits",
    description: "Liquid-based cytology collection kits for optimal sample preservation.",
    icon: <Syringe className="text-red-500" size={24} />,
    link: "#kits"
  },
  {
    title: "HPV DNA Testing",
    description: "Integrated HPV DNA testing workflow with AI-based risk stratification.",
    icon: <Dna className="text-purple-500" size={24} />,
    link: "#hpv"
  },
  {
    title: "Sequential Testing",
    description: "Do Liquid Based Cytology screening and triaging with HPV DNA Testing, sequentially for improved diagnosis.",
    icon: <TestTube className="text-vyuhaa-700" size={24} />,
    link: "#sequential"
  },
  {
    title: "2nd Opinion (Cancer/Tumour/Biopsies)",
    description: "Rapid and expert review for cancer, tumour and biopsy cases. Access subspecialty pathologists via our digital platform.",
    icon: <FlaskConical className="text-vyuhaa-600" size={24} />,
    link: "#2nd-opinion"
  },
  {
    title: "Co-Testing (HPV DNA + LBC CerviAI)",
    description: "HPV DNA and LBC CerviAI run simultaneously for best screening outcomes. Supporting integrated diagnostics.",
    icon: <TestTube className="text-vyuhaa-500" size={24} />,
    link: "#co-testing"
  }
];

const Products = () => (
  <div className="flex flex-col min-h-screen overflow-hidden">
    <Navbar />
    <main>
      <section className="section-padding min-h-screen bg-white">
        <div className="max-w-5xl mx-auto text-center">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {products.map((product) => (
          <div key={product.title} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gray-50 rounded-full mr-4">
                {product.icon}
              </div>
              <h3 className="text-xl font-bold">{product.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <a 
              href={product.link} 
              className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
            >
              Learn more →
            </a>
          </div>
        ))}
      </div>
      <div className="bg-vyuhaa-50 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">Complete Cervical Cancer Screening Solution</h2>
        <p className="text-gray-700 mb-6">
          Our integrated product ecosystem provides end-to-end cervical cancer screening capabilities, 
          from sample collection to AI-assisted diagnosis and reporting.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#contact" className="button-primary">Request Pricing</a>
          <a href="#demo" className="button-outline">Schedule Demo</a>
        </div>
        </div>
        {/* REMOVED: <LogoCloud title="Trusted By Leading Healthcare Providers" /> */}
      </div>
    </section>
    </main>
    <Footer />
  </div>
);

export default Products;
