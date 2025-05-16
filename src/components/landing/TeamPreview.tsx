
import AnimatedText from "@/components/AnimatedText";
import BlurImage from "@/components/BlurImage";

const team = [
  {
    name: "Dhritiman Mallick",
    title: "Founder & Operations",
    image: "https://vyuhaa-logos.s3.amazonaws.com/dhritiman.jpg",
  },
  {
    name: "Dr. CP Ranjani",
    title: "Lead Pathologist",
    image: "https://vyuhaa-logos.s3.amazonaws.com/ranjani.jpg",
  },
  {
    name: "CP Madhusudan",
    title: "BD Head and Non Profit Ventures",
    image: "https://vyuhaa-logos.s3.amazonaws.com/madhusudan.jpg",
  },
  {
    name: "Krishna Mohan Reddy",
    title: "Co-Founder & CTO",
    image: "https://vyuhaa-logos.s3.amazonaws.com/krishna.jpg",
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
