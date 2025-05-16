
import AnimatedText from '../components/AnimatedText';
import { Users, Linkedin } from 'lucide-react';
import LogoCloud from '../components/LogoCloud';

const team = [
  {
    name: "Dhritiman Mallick",
    title: "Chief Executive Officer",
    image: "/lovable-uploads/82cad346-abe3-414a-b274-253d6632262c.png",
    linkedin: "https://www.linkedin.com/in/dhritimanmallick/"
  },
  {
    name: "Krishna Mohan Reddy",
    title: "Chief Technology Officer",
    image: "/lovable-uploads/41ef9c5e-a8ff-4079-91d2-0250162289a4.png",
    linkedin: "https://www.linkedin.com/in/krishna-mohan-reddy-70b9511/"
  },
  {
    name: "CP Madhusudan",
    title: "BD Head and Non Profit Ventures",
    image: "/lovable-uploads/d4c177a4-f2b2-44f2-a9ff-03b03ba02c10.png",
    linkedin: "https://www.linkedin.com/in/madhusudancp/"
  },
  {
    name: "Dr. CP Ranjani",
    title: "Clinical Director",
    image: "/lovable-uploads/60cd84f8-9b3b-445d-9793-996df499e478.png",
    linkedin: "https://www.linkedin.com/in/dr-ranjani-chakravarthy-b078b319/"
  }
];

const Team = () => (
  <section className="section-padding min-h-screen bg-gray-50">
    <div className="max-w-5xl mx-auto text-center">
      <AnimatedText as="h1" text="Built by Experts in Healthcare, AI, and Public Health" className="text-3xl md:text-5xl font-bold mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
        {team.map(member => (
          <div key={member.name} className="glass-card p-7 flex flex-col items-center shadow-lg hover-scale relative">
            <img src={member.image} alt={member.name} className="w-28 h-28 rounded-full object-cover mb-3 border-4 border-vyuhaa-200 shadow" />
            <h2 className="text-xl font-semibold text-vyuhaa-600">{member.name}</h2>
            <span className="text-gray-700 mb-1">{member.title}</span>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center text-vyuhaa-600 hover:text-vyuhaa-800 transition"
              aria-label={`LinkedIn profile of ${member.name}`}
            >
              <Linkedin size={22} className="mr-1" />
              <span className="sr-only">{`LinkedIn profile of ${member.name}`}</span>
            </a>
          </div>
        ))}
      </div>
      <div className="my-12">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Collaborators & Advisors</h3>
        <LogoCloud title="With support from" />
      </div>
    </div>
  </section>
);

export default Team;
