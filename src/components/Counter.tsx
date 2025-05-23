
import React, { useEffect, useRef, useState } from "react";

interface CounterProps {
  to: number;
  duration?: number;
  className?: string;
  from?: number;
}

const Counter: React.FC<CounterProps> = ({ to, duration = 1500, className, from = 0 }) => {
  const [count, setCount] = useState(from);
  const ref = useRef<number>(from);

  useEffect(() => {
    const start = from;
    const end = to;
    const range = end - start;
    let current = start;
    const increment = Math.max(1, Math.floor(range / (duration / 30))); // frame ~30ms
    const startTime = Date.now();

    function updateCounter() {
      const elapsed = Date.now() - startTime;
      const ease = (t: number) => t < 0.5 ? 2*t*t : -1 + (4 - 2*t)*t; // easeInOut
      let progress = Math.min(1, elapsed / duration);
      let value = Math.floor(start + range * ease(progress));
      if (range > 0 && value > end) value = end;
      if (range < 0 && value < end) value = end;
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    }
    updateCounter();
    // eslint-disable-next-line
  }, [to, duration, from]);

  return (
    <span className={className}>{count.toLocaleString()}</span>
  );
};

export default Counter;
