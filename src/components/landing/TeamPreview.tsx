import AnimatedText from "@/components/AnimatedText";
import BlurImage from "@/components/BlurImage";

const team = [
  {
    name: "Dhritiman Mallick",
    title: "Founder & Operations",
    image: "/lovable-uploads/82cad346-abe3-414a-b274-253d6632262c.png",
  },
  {
    name: "Dr. CP Ranjani",
    title: "Lead Pathologist",
    image: "https://vyuhaa-logos.s3.amazonaws.com/ranjani.jpg",
  },
  {
    name: "CP Madhusudan",
    title: "BD Head and Non Profit Ventures",
    image: "/lovable-uploads/d4c177a4-f2b2-44f2-a9ff-03b03ba02c10.png",
  },
  {
    name: "Krishna Mohan Reddy",
    title: "Co-Founder & CTO",
    image: "/lovable-uploads/41ef9c5e-a8ff-4079-91d2-0250162289a4.png",
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
      <div className="flex flex-wrap gap-8 justify-center">
        {team.map(member => (
          <div key={member.name} className="flex flex-col items-center">
            <BlurImage src={member.image} alt={member.name} className="w-24 h-24 rounded-full mb-2"/>
            <span className="font-bold text-vyuhaa-800">{member.name}</span>
            <span className="text-gray-500 text-sm">{member.title}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default TeamPreview;
