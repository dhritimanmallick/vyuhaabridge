
import AnimatedText from '../components/AnimatedText';
import LogoCloud from '../components/LogoCloud';
import { Award, FileText, Video, Trophy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
  {
    title: "Published at MIT Solve",
    image: "https://solve-mit-uploads.s3.amazonaws.com/team/fdc5af11be774b1a8cf4adae1ac7aab8/NFT1BzknNI_solution_Screen_Shot_2024-03-19_at_10.18.06_AM.png",
    desc: "Vyuhaa's solution is published by Massachusetts Institute of Technology's Solve program.",
    icon: <ExternalLink className="text-blue-500" size={22} />,
    link: "https://solve.mit.edu/solutions/86062",
    external: true,
  },
  {
    title: "Recognized by ICMR as a National Health priority project",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
    desc: "Selected as a National Health priority by the Indian Council of Medical Research.",
    icon: <Trophy className="text-vyuhaa-500" size={22} />,
  },
  {
    title: "Top 3 Start-ups from India at NVIDIA GTC San Jose, 2024",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
    desc: "Showcased in the Top 3 Indian start-ups at the NVIDIA GTC global event 2024.",
    icon: <Award className="text-blue-500" size={22} />,
  },
  {
    title: "Champions at Eureka 2024",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=400&q=80",
    desc: "Emerged as champions at Asia’s largest business case competition, Eureka 2024.",
    icon: <Trophy className="text-vyuhaa-500" size={22} />,
  },
  {
    title: "Winners, AWS Challenge award for public sector",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400&q=80",
    desc: "Awarded as winners of the AWS Challenge for outstanding work in the public sector.",
    icon: <Award className="text-blue-500" size={22} />,
  },
  {
    title: "India's AI market poised for rapid growth, transforming retail, sustainability and more by 2027",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400&q=80",
    desc: "Recent reports highlight that India now accounts for 16% of the global AI talent pool, second only to the United States. The domestic AI workforce, currently estimated at 600,000, is expected to double by 2027.",
    icon: <FileText className="text-blue-500" size={22} />,
    link: "https://www.financialexpress.com/business/start-ups/indias-ai-market-poised-for-rapid-growth-transforming-retail-sustainability-and-more-by-2027/3905939/",
    external: true,
  },
  {
    title: "100 words, 10 minutes, a shot at funding: Founders pitch their ideas at IIT Madras's Sangam 2025",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=400&q=80",
    desc: "Startups get a platform to pitch their innovative ideas to investors and industry experts at IIT Madras's premier entrepreneurship event.",
    icon: <FileText className="text-blue-500" size={22} />,
    link: "https://theprint.in/science/100-words-10-minutes-a-shot-at-funding-founders-pitch-their-ideas-at-iit-madrass-sangam-2025/2680080/",
    external: true,
  },
];

const News = () => (
  <section className="section-padding min-h-screen bg-white">
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-4 flex">
        <Link to="/" className="ml-auto">
          <Button variant="outline" size="sm">
            Home
          </Button>
        </Link>
      </div>
      <AnimatedText as="h1" text="News & Publications" className="text-3xl md:text-5xl font-bold mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-10">
        {news.map((item) => (
          item.link && item.external ? (
            <a
              href={item.link}
              key={item.title}
              className="glass-card p-6 flex gap-4 items-center shadow hover-scale transition-all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View more about ${item.title}`}
            >
              <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-lg mr-3" />
              <div className="flex-1 text-left">
                <div className="flex items-center mb-2">
                  {item.icon}
                  <span className="ml-2 font-bold underline transition-colors hover:text-blue-700">{item.title}</span>
                </div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </a>
          ) : (
            <div key={item.title} className="glass-card p-6 flex gap-4 items-center shadow hover-scale">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-lg mr-3" />
              <div className="flex-1 text-left">
                <div className="flex items-center mb-2">{item.icon}<span className="ml-2 font-bold">{item.title}</span></div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          )
        ))}
      </div>
      {/* Camp Video */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-2 flex items-center justify-center">
          <Video className="text-vyuhaa-500 mr-2" size={20}/>Camp Highlight Video</h2>
        <div className="relative rounded-xl overflow-hidden shadow-lg max-w-2xl mx-auto">
          <iframe
            src="https://www.youtube.com/embed/mNJdPBQZeEM?si=9fSVUDE0KzV83_Jb"
            title="Camp Highlight Video"
            className="w-full aspect-video rounded-xl border"
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>
      </div>
      <LogoCloud />
      <div className="mt-8 text-gray-500 text-sm">More publications and demo videos coming soon.</div>
    </div>
  </section>
);

export default News;
