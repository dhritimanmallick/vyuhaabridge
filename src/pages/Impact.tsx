
import AnimatedText from '../components/AnimatedText';
import LogoCloud from '../components/LogoCloud';
import { BarChart2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const impactStats = [
  { value: 11254, label: "Women Screened", animated: true },
  { value: "3", label: "States Deployed" },
  { value: "60%", label: "Reduction in Pathologist Workload" },
  { value: "2,800+", label: "Cases in Double-Blind Studies" },
];

const stories = [
  {
    title: "Telangana Women’s Health Camp",
    desc: "1,000+ screened in 8 days. Mobile labs deployed in remote areas.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "North-East India Pilot",
    desc: "Tribal region deployment with frontline health workers.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&q=80",
  },
];

function AnimatedCounter({ target, duration = 1800 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 30);
    ref.current = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        if (ref.current) clearInterval(ref.current);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);
    return () => {
      if (ref.current) clearInterval(ref.current);
    };
  }, [target, duration]);
  return <span className="text-2xl font-bold text-vyuhaa-600">{count.toLocaleString()}</span>;
}

const Impact = () => (
  <section className="section-padding min-h-screen bg-white">
    <div className="max-w-5xl mx-auto text-center">
      <AnimatedText as="h1" text="Scaling Screening. Saving Lives." className="text-3xl md:text-5xl font-bold mb-6" />
      <p className="text-lg text-gray-600 mb-10">
        We work with government agencies, NGOs, and diagnostic labs to bring cancer screening to women who need it most.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {impactStats.map(stat => (
          <div key={stat.label} className="p-4 bg-vyuhaa-50 rounded-xl flex flex-col items-center shadow">
            <BarChart2 className="mb-2 text-vyuhaa-500" size={28} />
            {stat.animated ? (
              <AnimatedCounter target={stat.value as number} />
            ) : (
              <span className="text-2xl font-bold text-vyuhaa-600">{stat.value}</span>
            )}
            <span className="text-xs text-gray-500">{stat.label}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {stories.map(story => (
          <div key={story.title} className="glass-card p-6 flex flex-col items-start gap-4 shadow hover-scale">
            <img src={story.image} alt={story.title} className="w-full h-40 object-cover rounded-xl mb-2" />
            <h3 className="font-bold text-lg">{story.title}</h3>
            <p className="text-gray-600 text-sm">{story.desc}</p>
          </div>
        ))}
      </div>
      <a href="#contact" className="button-primary">Explore Our Work</a>
      <LogoCloud />
    </div>
  </section>
);

export default Impact;
