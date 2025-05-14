
import AnimatedText from '../components/AnimatedText';

const Team = () => (
  <section className="section-padding min-h-screen bg-gray-50">
    <div className="max-w-4xl mx-auto text-center">
      <AnimatedText as="h1" text="Our Team & Collaborators" className="text-3xl md:text-5xl font-bold mb-10" />
      <ul className="space-y-6">
        <li>
          <strong>Founders and Advisors:</strong> Dr. A. Example, Dr. B. Path, Dr. C. Innovate
        </li>
        <li>
          <strong>Collaborators:</strong> IIT Hyderabad, CPath Labs, CfHE, VC Partners
        </li>
      </ul>
      <div className="mt-8 text-gray-500 text-sm">Full bios/photos coming soon.</div>
    </div>
  </section>
);

export default Team;
