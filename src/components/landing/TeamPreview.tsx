
import AnimatedText from "@/components/AnimatedText";
import BlurImage from "@/components/BlurImage";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Dhritiman Mallick",
    title: "Chief Executive Officer",
    image: "/lovable-uploads/82cad346-abe3-414a-b274-253d6632262c.png",
    linkedin: "https://www.linkedin.com/in/dhritiman-mallick/",
  },
  {
    name: "Dr. CP Ranjani",
    title: "Clinical Director",
    image: "/lovable-uploads/60cd84f8-9b3b-445d-9793-996df499e478.png",
    linkedin: "https://www.linkedin.com/in/cp-ranjani/",
  },
  {
    name: "CP Madhusudan",
    title: "BD Head and Non Profit Ventures",
    image: "/lovable-uploads/d4c177a4-f2b2-44f2-a9ff-03b03ba02c10.png",
    linkedin: "https://www.linkedin.com/in/cpmadhu/",
  },
  {
    name: "Krishna Mohan Reddy",
    title: "Chief Technology Officer",
    image: "/lovable-uploads/41ef9c5e-a8ff-4079-91d2-0250162289a4.png",
    linkedin: "https://www.linkedin.com/in/krishnamohanreddyk/",
  }
];

const histopathologists = [
  {
    name: "Dr. Manideep Robbi",
    title: "Histopathologist",
    image: "/lovable-uploads/dr-manideep-robbi.png",
    linkedin: "#",
  },
  {
    name: "Dr. CP Ranjani",
    title: "Histopathologist",
    image: "/lovable-uploads/60cd84f8-9b3b-445d-9793-996df499e478.png",
    linkedin: "https://www.linkedin.com/in/cp-ranjani/",
  },
  {
    name: "Dr. Sunita Kolekar Samleti",
    title: "Histopathologist",
    image: "/lovable-uploads/dr-sunita-kolekar.jpg",
    linkedin: "#",
  }
];

const TeamPreview = () => (
  <section className="section-padding bg-vyuhaa-50" id="team">
    <div className="max-w-5xl mx-auto">
      <AnimatedText
        as="h2"
        text="Built by Experts in Healthcare, AI, and Public Health"
        className="text-2xl md:text-3xl font-bold mb-8 text-center"
      />
      <div className="flex flex-wrap gap-8 justify-center mb-12">
        {team.map(member => (
          <div key={member.name} className="flex flex-col items-center">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2"
              aria-label={`View ${member.name}'s LinkedIn`}
            >
              <BlurImage src={member.image} alt={member.name} className="w-24 h-24 rounded-full hover:scale-105 transition" />
            </a>
            <span className="font-bold text-vyuhaa-800">{member.name}</span>
            <span className="text-gray-500 text-sm">{member.title}</span>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} LinkedIn`}
              className="mt-1 text-vyuhaa-500 hover:text-vyuhaa-700"
            >
              <Linkedin size={20} />
            </a>
          </div>
        ))}
      </div>

      <AnimatedText
        as="h3"
        text="Our Histopathologist Team"
        className="text-xl md:text-2xl font-bold mb-6 text-center"
      />
      <div className="flex flex-wrap gap-8 justify-center">
        {histopathologists.map(member => (
          <div key={member.name} className="flex flex-col items-center">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2"
              aria-label={`View ${member.name}'s LinkedIn`}
            >
              <BlurImage src={member.image} alt={member.name} className="w-24 h-24 rounded-full hover:scale-105 transition" />
            </a>
            <span className="font-bold text-vyuhaa-800">{member.name}</span>
            <span className="text-gray-500 text-sm">{member.title}</span>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} LinkedIn`}
              className="mt-1 text-vyuhaa-500 hover:text-vyuhaa-700"
            >
              <Linkedin size={20} />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default TeamPreview;

