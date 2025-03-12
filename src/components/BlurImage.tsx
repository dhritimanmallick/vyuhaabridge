
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const BlurImage = ({ src, alt, className, width, height }: BlurImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
    };
    img.onerror = () => {
      setError(true);
      console.error(`Failed to load image: ${src}`);
    };
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <div className="overflow-hidden relative">
      {error ? (
        <div className="flex items-center justify-center bg-gray-100 w-full h-64 rounded-lg">
          <p className="text-gray-500">Image could not be loaded</p>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn(
            "blur-image transition-all duration-500", 
            isLoaded ? "loaded filter-none" : "blur-md scale-105", 
            className
          )}
          onError={() => setError(true)}
        />
      )}
    </div>
  );
};

export default BlurImage;
