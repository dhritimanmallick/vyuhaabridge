
import { useState } from 'react';
import AnimatedText from './AnimatedText';
import { 
  BarChart3, 
  PieChart, 
  LineChart, 
  Brain, 
  Database, 
  Settings 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    id: 'dataAnalytics',
    icon: <BarChart3 size={32} className="text-vyuhaa-500" />,
    title: 'Data Analytics',
    description: 'Transform raw data into meaningful insights with our advanced analytics platform.',
    benefits: ['Real-time reporting', 'Interactive dashboards', 'Custom metrics']
  },
  {
    id: 'businessIntelligence',
    icon: <PieChart size={32} className="text-vyuhaa-500" />,
    title: 'Business Intelligence',
    description: 'Make data-driven decisions with comprehensive business intelligence tools.',
    benefits: ['Trend identification', 'Competitive analysis', 'Performance tracking']
  },
  {
    id: 'predictiveAnalytics',
    icon: <Brain size={32} className="text-vyuhaa-500" />,
    title: 'AI & Machine Learning',
    description: 'Leverage AI to predict trends and automate complex data analysis tasks.',
    benefits: ['Predictive modeling', 'Pattern recognition', 'Anomaly detection']
  },
  {
    id: 'dataIntegration',
    icon: <Database size={32} className="text-vyuhaa-500" />,
    title: 'Data Integration',
    description: 'Seamlessly connect multiple data sources into a unified, accessible format.',
    benefits: ['Cloud integration', 'API connections', 'ETL processing']
  },
  {
    id: 'dataVisualization',
    icon: <LineChart size={32} className="text-vyuhaa-500" />,
    title: 'Data Visualization',
    description: 'Present complex data in intuitive, interactive visual formats.',
    benefits: ['Custom charts', 'Interactive reports', 'Real-time updates']
  },
  {
    id: 'customSolutions',
    icon: <Settings size={32} className="text-vyuhaa-500" />,
    title: 'Custom Solutions',
    description: 'Tailored data solutions designed to address your specific business challenges.',
    benefits: ['Industry-specific models', 'Dedicated expert support', 'Scalable architecture']
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
            text="Our Services"
            className="text-vyuhaa-600 font-semibold mb-3 inline-block"
          />
          <AnimatedText
            as="h2"
            text="Transforming Data Challenges Into Opportunities"
            className="text-3xl md:text-4xl font-bold mb-6"
            delay={100}
          />
          <AnimatedText
            text="Our comprehensive suite of data services helps businesses of all sizes harness the full potential of their data."
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
