
import AnimatedText from '../components/AnimatedText';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BlurImage from "../components/BlurImage";
import LogoCloud from '../components/LogoCloud';

const teamMembers = [
  {
    name: "Dhritiman Mallick",
    title: "Chief Executive Officer",
    image: "/lovable-uploads/82cad346-abe3-414a-b274-253d6632262c.png",
  },
  {
    name: "Dr. CP Ranjani",
    title: "Lead Pathologist",
    image: "/lovable-uploads/60cd84f8-9b3b-445d-9793-996df499e478.png",
  },
  {
    name: "CP Madhusudan",
    title: "BD Head and Non Profit Ventures",
    image: "/lovable-uploads/d4c177a4-f2b2-44f2-a9ff-03b03ba02c10.png",
  },
  {
    name: "Krishna Mohan Reddy",
    title: "Chief Technology Officer",
    image: "/lovable-uploads/41ef9c5e-a8ff-4079-91d2-0250162289a4.png",
  }
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

      <div className="flex flex-wrap gap-8 justify-center mb-16">
        {teamMembers.map(member => (
          <div key={member.name} className="flex flex-col items-center glass-card p-6 text-center hover-scale">
            <BlurImage src={member.image} alt={member.name} className="w-28 h-28 rounded-full mb-4" />
            <h3 className="font-bold text-lg">{member.name}</h3>
            <p className="text-vyuhaa-500 text-sm mb-2">{member.title}</p>
          </div>
        ))}
      </div>

      <LogoCloud title="Our Partners" />
    </div>
  </section>
);

export default Team;

