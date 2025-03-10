
import { useState } from 'react';
import AnimatedText from './AnimatedText';
import { 
  Microscope, 
  Brain, 
  Map, 
  Building, 
  Shield, 
  Globe 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    id: 'cerviAI',
    icon: <Microscope size={32} className="text-vyuhaa-500" />,
    title: 'CerviAI Platform',
    description: 'AI-powered EDGE-based digital cytology and pathology platform for real-time cervical cancer screening.',
    benefits: ['Real-time results', 'Reduced specialist dependency', 'Cost-effective screening']
  },
  {
    id: 'ruralHealthcare',
    icon: <Map size={32} className="text-vyuhaa-500" />,
    title: 'Rural Outreach',
    description: 'Bringing AI-driven digital cytology directly to underserved communities through screening camps.',
    benefits: ['Remote area accessibility', 'Integration with PMJAY', 'Mass screening capabilities']
  },
  {
    id: 'multiDisease',
    icon: <Brain size={32} className="text-vyuhaa-500" />,
    title: 'Multi-Disease Screening',
    description: 'Extended capabilities for tuberculosis, leprosy, and histopathology-based diagnostics.',
    benefits: ['Versatile applications', 'Comprehensive diagnostics', 'Adaptable AI models']
  },
  {
    id: 'edgeTechnology',
    icon: <Building size={32} className="text-vyuhaa-500" />,
    title: 'EDGE-Based Technology',
    description: 'Cloud-independent processing for low-resource and remote healthcare settings.',
    benefits: ['No internet dependency', 'Faster processing', 'Resource-efficient']
  },
  {
    id: 'clinicalValidation',
    icon: <Shield size={32} className="text-vyuhaa-500" />,
    title: 'Clinical Validation',
    description: 'Undergoing validation with ICMR for CDSCO approvals for large-scale implementation.',
    benefits: ['Regulatory compliance', 'Evidence-based approach', 'Quality assurance']
  },
  {
    id: 'globalPartnerships',
    icon: <Globe size={32} className="text-vyuhaa-500" />,
    title: 'Strategic Partnerships',
    description: 'Collaborations with global health organizations, policymakers, and investors.',
    benefits: ['Expanded reach', 'Public health integration', 'Sustainable impact']
  }
];

const FeaturesSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  return (
    <section id="features" className="bg-gradient-to-b from-white to-vyuhaa-50 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedText
            as="span"
            text="Our Solutions"
            className="text-vyuhaa-600 font-semibold mb-3 inline-block"
          />
          <AnimatedText
            as="h2"
            text="Transforming Healthcare Through AI-Driven Innovation"
            className="text-3xl md:text-4xl font-bold mb-6"
            delay={100}
          />
          <AnimatedText
            text="Our comprehensive suite of AI-powered healthcare solutions addresses critical gaps in medical diagnostics and early disease detection."
            className="text-gray-600 max-w-2xl mx-auto"
            delay={200}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className="glass-card p-8 card-hover"
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
              style={{ animationDelay: `${100 * index}ms` }}
            >
              <div 
                className={cn(
                  "transition-transform duration-700 ease-in-out", 
                  hoveredFeature === feature.id ? "transform -translate-y-2" : ""
                )}
              >
                <div className="mb-5">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-5">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-vyuhaa-500 mr-2"></span>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
