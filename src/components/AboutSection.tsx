
import AnimatedText from './AnimatedText';
import BlurImage from './BlurImage';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const benefits = [
    'AI-driven efficiency in disease detection',
    'Rural healthcare access through mobile screening camps',
    'Multi-disease screening capabilities',
    'EDGE-based technology for low-resource settings',
    'Clinical validation with leading healthcare institutions'
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <AnimatedText
              as="span"
              text="About Us"
              className="text-vyuhaa-600 font-semibold mb-3 inline-block"
            />
            <AnimatedText
              as="h2"
              text="Pioneers in AI-Driven Healthcare Innovation"
              className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
              delay={100}
            />
            <AnimatedText
              text="Vyuhaa Med Data is an AI-driven healthcare startup dedicated to making early disease detection accessible, affordable, and scalable. Our flagship product, CerviAI, is revolutionizing cervical cancer screening in underserved communities."
              className="text-gray-600 mb-6"
              delay={200}
            />
            <AnimatedText
              text="We are actively conducting women's health screening camps in rural India, addressing gaps in cervical cancer detection by bringing AI-driven digital cytology directly to those who need it most. By integrating with public health initiatives, we ensure high-quality, low-cost diagnostics for mass screening programs."
              className="text-gray-600 mb-6"
              delay={300}
            />
            
            <div className="space-y-3 mt-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start"
                  style={{ animationDelay: `${400 + (index * 100)}ms` }}
                >
                  <CheckCircle className="text-vyuhaa-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
              <BlurImage 
                src="https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Vyuhaa Med Data Team"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-64 h-64 bg-vyuhaa-100 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-vyuhaa-200 rounded-lg z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
