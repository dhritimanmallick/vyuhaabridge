
import AnimatedText from '../components/AnimatedText';

const Impact = () => (
  <section className="section-padding min-h-screen bg-white">
    <div className="max-w-4xl mx-auto text-center">
      <AnimatedText as="h1" text="Impact & Field Validation" className="text-3xl md:text-5xl font-bold mb-6" />
      <div className="mb-8 text-blue-800 font-semibold">
        <p>5,000+ women screened</p>
        <p>&gt;60% diagnostic workload reduction</p>
        <p>Screening Programs: Telangana, North-East, UK, SEA pilots</p>
      </div>
      <div className="mb-10">
        <h2 className="text-lg font-bold mb-2">Case Studies & Testimonials</h2>
        <p>“CerviAI dramatically improved our diagnostic turnaround.” — Program Head</p>
        <p>“Reliable AI for mass field screening.” — Pathologist, Hyderabad</p>
      </div>
      <div>
        <p className="text-gray-500">Images, field stories, and more coming soon.</p>
      </div>
    </div>
  </section>
);

export default Impact;
