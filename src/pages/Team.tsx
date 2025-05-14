
import AnimatedText from '../components/AnimatedText';
import { Users } from 'lucide-react';
import LogoCloud from '../components/LogoCloud';

const team = [
  {
    name: "Dhritiman Mallick",
    title: "Founder & Operations",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. CP Ranjani",
    title: "Lead Pathologist",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=400&q=80",
  }
];

const Team = () => (
  <section className="section-padding min-h-screen bg-gray-50">
    <div className="max-w-5xl mx-auto text-center">
      <AnimatedText as="h1" text="Built by Experts in Healthcare, AI, and Public Health" className="text-3xl md:text-5xl font-bold mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
        {team.map(member => (
          <div key={member.name} className="glass-card p-7 flex flex-col items-center shadow-lg hover-scale">
            <img src={member.image} alt={member.name} className="w-28 h-28 rounded-full object-cover mb-3 border-4 border-vyuhaa-200 shadow" />
            <h2 className="text-xl font-semibold text-vyuhaa-600">{member.name}</h2>
            <span className="text-gray-700">{member.title}</span>
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

