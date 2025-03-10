
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

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <div className="overflow-hidden relative">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "blur-image", 
          isLoaded && "loaded", 
          className
        )}
      />
    </div>
  );
};

export default BlurImage;
