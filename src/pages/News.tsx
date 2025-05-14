
import AnimatedText from '../components/AnimatedText';
import LogoCloud from '../components/LogoCloud';
import { Award, FileText } from "lucide-react";

const news = [
  {
    title: "Awarded by NVIDIA Inception",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    desc: "Recognized for AI leadership and innovation in healthcare technology at global stage.",
    icon: <Award className="text-blue-500" size={22} />,
  },
  {
    title: "CPath Labs Milestone",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=400&q=80",
    desc: "Implemented CerviAI in double-blind, NABL-accredited pathology workflow.",
    icon: <FileText className="text-vyuhaa-500" size={22} />,
  },
  {
    title: "Upcoming: PLOS & JPI Publications",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400&q=80",
    desc: "Peer-reviewed results and conference presentations forthcoming.",
    icon: <FileText className="text-blue-500" size={22} />,
  },
];

const News = () => (
  <section className="section-padding min-h-screen bg-white">
    <div className="max-w-4xl mx-auto text-center">
      <AnimatedText as="h1" text="News & Publications" className="text-3xl md:text-5xl font-bold mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-10">
        {news.map((item) => (
          <div key={item.title} className="glass-card p-6 flex gap-4 items-center shadow hover-scale">
            <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-lg mr-3" />
            <div className="flex-1 text-left">
              <div className="flex items-center mb-2">{item.icon}<span className="ml-2 font-bold">{item.title}</span></div>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <LogoCloud />
      <div className="mt-8 text-gray-500 text-sm">More publications and demo videos coming soon.</div>
    </div>
  </section>
);

export default News;

