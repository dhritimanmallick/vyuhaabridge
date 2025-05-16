import AnimatedText from '../components/AnimatedText';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import LogoCloud from '../components/LogoCloud';
import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: "Dr. Aditya Bharadwaj",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
    bio: "PhD in Computer Vision & AI from IISc. 10+ years in medical imaging and deep learning.",
    linkedin: "https://linkedin.com/in/username1",
  },
  {
    name: "Dr. Vidya Akavoor",
    role: "Chief Medical Officer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    bio: "MD Pathology with 15+ years in cytopathology. Led digital transformation at major hospitals.",
    linkedin: "https://linkedin.com/in/username2",
  },
  {
    name: "Karthik Srinivasan",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    bio: "MS in Computer Science. Expert in scalable AI systems and medical device software.",
    linkedin: "https://linkedin.com/in/username3",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Research Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    bio: "PhD in Biomedical Engineering. Published researcher in computer-aided diagnostics.",
    linkedin: "https://linkedin.com/in/username4",
  },
];

const advisors = [
  {
    name: "Dr. Rajiv Desai",
    role: "Medical Advisor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    bio: "30+ years in pathology. Former department head at AIIMS.",
    linkedin: "https://linkedin.com/in/username5",
  },
  {
    name: "Anjali Menon",
    role: "Business Strategy",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    bio: "MBA from IIM-A. 20+ years in healthcare business development.",
    linkedin: "https://linkedin.com/in/username6",
  },
];

const Team = () => (
  <section className="section-padding min-h-screen bg-white">
    <div className="max-w-5xl mx-auto text-center">
      <div className="mb-4 flex">
        <Link to="/" className="ml-auto">
          <Button variant="outline" size="sm">
            Home
          </Button>
        </Link>
      </div>
      <AnimatedText as="h1" text="Meet the Team" className="text-3xl md:text-5xl font-bold mb-10" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {teamMembers.map((member) => (
          <div key={member.name} className="glass-card p-6 flex flex-col items-center text-center hover-scale">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-32 h-32 object-cover rounded-full mb-4 border-2 border-vyuhaa-100"
            />
            <h3 className="font-bold text-lg">{member.name}</h3>
            <p className="text-vyuhaa-500 text-sm mb-2">{member.role}</p>
            <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
            <div className="mt-auto flex gap-2">
              <a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-vyuhaa-50 hover:bg-vyuhaa-100 transition-colors"
              >
                <Linkedin size={18} className="text-blue-700" />
              </a>
              <a 
                href={`mailto:contact@vyuhaa.com?subject=Contact ${member.name}`}
                className="p-2 rounded-full bg-vyuhaa-50 hover:bg-vyuhaa-100 transition-colors"
              >
                <Mail size={18} className="text-vyuhaa-500" />
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <h2 className="text-2xl font-bold mb-6">Advisory Board</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto">
        {advisors.map((advisor) => (
          <div key={advisor.name} className="glass-card p-6 flex flex-col items-center text-center hover-scale">
            <img 
              src={advisor.image} 
              alt={advisor.name} 
              className="w-24 h-24 object-cover rounded-full mb-3 border-2 border-vyuhaa-100"
            />
            <h3 className="font-bold text-lg">{advisor.name}</h3>
            <p className="text-vyuhaa-500 text-sm mb-2">{advisor.role}</p>
            <p className="text-gray-600 text-sm mb-3">{advisor.bio}</p>
            <a 
              href={advisor.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        ))}
      </div>
      
      <div className="bg-vyuhaa-50 rounded-xl p-6 mb-10">
        <h2 className="text-xl font-bold mb-3">Join Our Team</h2>
        <p className="text-gray-700 mb-4">
          We're always looking for talented individuals passionate about healthcare innovation and AI.
          If you're interested in making a difference in women's health, we'd love to hear from you.
        </p>
        <a 
          href="mailto:careers@vyuhaa.com" 
          className="button-primary inline-flex items-center gap-2"
        >
          <Mail size={18} /> Contact Us
        </a>
      </div>
      
      <LogoCloud title="Our Partners" />
    </div>
  </section>
);

export default Team;
