
import AnimatedText from "@/components/AnimatedText";
const AboutVyuhaa = () => (
  <section className="section-padding bg-white" id="about">
    <div className="max-w-4xl mx-auto text-center">
      <AnimatedText
        as="h2"
        text="Reimagining Cancer Screening with AI + Access"
        className="text-2xl md:text-4xl font-bold mb-4"
      />
      <AnimatedText
        text="Vyuhaa Med Data builds cutting-edge assistive technologies that bring the power of AI to pathology labs, screening programs, and frontline health workers. Our mission is to make early detection faster, smarter, and more accessible — starting with cervical cancer."
        className="text-gray-600 mb-5"
        delay={100}
      />
    </div>
  </section>
);
export default AboutVyuhaa;
