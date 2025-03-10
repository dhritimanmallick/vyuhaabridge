
import { useEffect, useRef } from 'react';
import AnimatedText from './AnimatedText';
import BlurImage from './BlurImage';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      const elementsToAnimate = heroRef.current.querySelectorAll('.parallax-element');
      elementsToAnimate.forEach((elem: Element) => {
        const speed = parseFloat((elem as HTMLElement).dataset.speed || "1");
        (elem as HTMLElement).style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="home"
      ref={heroRef} 
      className="relative min-h-screen flex flex-col justify-center overflow-hidden section-padding pt-32 md:pt-40"
    >
      {/* Background elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-vyuhaa-300/10 rounded-full blur-3xl parallax-element" data-speed="2"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-vyuhaa-400/10 rounded-full blur-3xl parallax-element" data-speed="1.5"></div>
      
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center z-10">
        <div className="w-full md:w-1/2 md:pr-10 mb-12 md:mb-0">
          <div className="inline-block mb-2">
            <span className="text-xs md:text-sm font-semibold px-3 py-1 rounded-full bg-vyuhaa-100 text-vyuhaa-800 animate-fade-in">
              Data Transformation Solutions
            </span>
          </div>
          
          <AnimatedText
            as="h1"
            text="Transform Your Data Into Actionable Insights"
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
            delay={100}
          />
          
          <AnimatedText
            text="Vyuhaa Data helps businesses make sense of complex data through advanced analytics, AI-powered solutions, and intuitive visualization tools."
            className="text-gray-600 text-lg mb-8"
            delay={200}
          />
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
            <a href="#contact" className="button-primary flex items-center justify-center">
              Get Started 
              <ArrowRight size={16} className="ml-2" />
            </a>
            <a href="#features" className="button-outline flex items-center justify-center">
              Learn More
            </a>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
            <BlurImage 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Data Analytics Dashboard"
              className="w-full h-auto rounded-2xl"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-vyuhaa-100 rounded-lg animate-pulse-glow parallax-element" data-speed="3"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-vyuhaa-50 rounded-lg animate-pulse-glow parallax-element" data-speed="2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
