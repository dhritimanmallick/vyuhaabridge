
import AnimatedText from '../components/AnimatedText';
import { FileText, BarChart2 } from 'lucide-react';

const products = [
  {
    name: "CerviAI (Cervical Cytology)",
    description: "AI-enabled cervical cancer screening, deployed and validated in public health programs. Regulatory path ongoing.",
    status: "Available",
    icon: <BarChart2 className="text-vyuhaa-500" size={32} />,
  },
  {
    name: "Breast Cancer AI",
    description: "Coming soon — An AI model for triage and prioritization of FNA/biopsy images.",
    status: "Coming Soon",
    icon: <FileText className="text-blue-500" size={32} />,
  },
  {
    name: "Histopathology AI Modules",
    description: "Modular AI for GI, Lung, and Oral pathology. Under development.",
    status: "In Development",
    icon: <FileText className="text-blue-400" size={32} />,
  },
  {
    name: "Annotation Toolkits",
    description: "Custom training/validation environments for partner labs and pathologists.",
    status: "Available",
    icon: <BarChart2 className="text-vyuhaa-400" size={32} />,
  },
];

const Products = () => (
  <section className="section-padding min-h-screen bg-gray-50">
    <div className="max-w-5xl mx-auto text-center">
      <AnimatedText as="h1" text="Modular AI for Diagnostic Pathology" className="text-3xl md:text-5xl font-bold mb-6" />
      <p className="text-lg text-gray-600 mb-10">
        Each model we build addresses a specific clinical bottleneck.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map(product => (
          <div key={product.name} className="glass-card p-7 flex flex-col items-center shadow-lg hover-scale">
            <div className="mb-4">{product.icon}</div>
            <h2 className="text-xl font-semibold text-vyuhaa-600">{product.name}</h2>
            <p className="text-gray-600 mb-3">{product.description}</p>
            <span className="text-xs rounded-full px-3 py-1 bg-blue-100 text-blue-700 font-semibold">{product.status}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;

