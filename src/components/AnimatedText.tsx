
import { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  once?: boolean;
}

const AnimatedText = ({ 
  text, 
  className, 
  delay = 0,
  as: Component = 'p',
  once = true
}: AnimatedTextProps) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const animateWhenVisible = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            element.classList.add('animate-fade-up');
          }, delay);
          
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          element.classList.remove('animate-fade-up');
        }
      });
    };

    const observer = new IntersectionObserver(animateWhenVisible, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    observer.observe(element);
    
    return () => {
      observer.disconnect();
    };
  }, [delay, once]);

  return (
    <Component 
      ref={elementRef as any}
      className={cn("opacity-0", className)}
    >
      {text}
    </Component>
  );
};

export default AnimatedText;
