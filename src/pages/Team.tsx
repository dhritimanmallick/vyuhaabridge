
import AnimatedText from '../components/AnimatedText';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlurImage from "../components/BlurImage";
import { Linkedin } from "lucide-react";

const teamMembers = [
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

const Team = () => (
  <div className="flex flex-col min-h-screen overflow-hidden">
    <Navbar />
    <main>
      <section className="section-padding pt-32 min-h-screen bg-white">
        <div className="max-w-5xl mx-auto text-center">
      

      <div className="flex flex-wrap gap-8 justify-center mb-16">
        {teamMembers.map(member => (
          <div key={member.name} className="flex flex-col items-center glass-card p-6 text-center hover-scale">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4"
              aria-label={`View ${member.name}'s LinkedIn`}
            >
              <BlurImage src={member.image} alt={member.name} className="w-28 h-28 rounded-full hover:scale-105 transition" />
            </a>
            <h3 className="font-bold text-lg">{member.name}</h3>
            <p className="text-vyuhaa-500 text-sm mb-2">{member.title}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} LinkedIn`}
              className="text-vyuhaa-500 hover:text-vyuhaa-700"
            >
              <Linkedin size={24} />
            </a>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-8 text-gray-800">Our Histopathologist Team</h2>
      <div className="flex flex-wrap gap-8 justify-center mb-16">
        {histopathologists.map(member => (
          <div key={member.name} className="flex flex-col items-center glass-card p-6 text-center hover-scale">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4"
              aria-label={`View ${member.name}'s LinkedIn`}
            >
              <BlurImage src={member.image} alt={member.name} className="w-28 h-28 rounded-full hover:scale-105 transition" />
            </a>
            <h3 className="font-bold text-lg">{member.name}</h3>
            <p className="text-vyuhaa-500 text-sm mb-2">{member.title}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} LinkedIn`}
              className="text-vyuhaa-500 hover:text-vyuhaa-700"
            >
              <Linkedin size={24} />
            </a>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Our Partners</h2>
        <div className="flex flex-wrap justify-center items-center gap-6">
          <img src="/lovable-uploads/d949f539-88bf-494c-ade6-8151d837cfdd.png" alt="Hamamatsu Photonics" className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition" />
          <img src="/lovable-uploads/3c711f73-fe4a-48a2-84ea-52210a03e396.png" alt="MEITY" className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition" />
          <img src="/lovable-uploads/f65a56e2-2263-42ca-ac9e-d27fe4115027.png" alt="NVIDIA Inception Program" className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition" />
          <img src="/lovable-uploads/d6183d61-0d71-4b2f-b057-629ae3ff3573.png" alt="ICMR" className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition" />
          <img src="/lovable-uploads/b624d886-09ac-4229-91a6-66d8f7af11c5.png" alt="AMTZ" className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition" />
          <img src="/lovable-uploads/9b5890ce-28a1-4d29-820d-604f1dbfd5ea.png" alt="Nasscom" className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition" />
          <img src="/lovable-uploads/1a5cbed5-cf05-47db-9485-40ed3aa61d3d.png" alt="FPAI India" className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition" />
          <img src="/lovable-uploads/3186371e-c856-40ba-a5da-7c06683a32e8.png" alt="ASHWINI Gudalur Hospitals" className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition" />
        </div>
      </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Team;

