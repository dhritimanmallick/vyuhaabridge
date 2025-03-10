
import AnimatedText from './AnimatedText';
import BlurImage from './BlurImage';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const benefits = [
    'Industry-leading data expertise',
    'Custom solutions for unique challenges',
    'Cutting-edge technology and methodologies',
    'Dedicated support and training',
    'Secure and compliant data handling'
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
              text="Pioneers in Data Transformation & Analytics"
              className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
              delay={100}
            />
            <AnimatedText
              text="At Vyuhaa Data, we're passionate about helping businesses harness the power of their data. Our team of expert data scientists, engineers, and consultants work collaboratively to deliver tailored solutions that address your specific challenges."
              className="text-gray-600 mb-6"
              delay={200}
            />
            <AnimatedText
              text="With decades of combined experience across industries, we've developed a deep understanding of how to extract meaningful insights from complex datasets and translate them into actionable business strategies."
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
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Vyuhaa Data Team"
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
