
import AnimatedText from '../components/AnimatedText';

const CerviAIPlatform = () => (
  <section className="section-padding min-h-screen bg-white">
    <div className="max-w-5xl mx-auto text-center">
      <AnimatedText
        as="h1"
        text="CerviAI Platform"
        className="text-3xl md:text-5xl font-bold mb-6"
      />
      <p className="text-lg text-gray-600 mb-10">
        AI-powered digital cytology for scalable, real-time cervical cancer screening.<br />
        Deep learning | EDGE + Cloud | Pathologist Assist
      </p>
      <div className="mb-8">
        <span className="block mb-2 font-semibold">Compatible Scanners</span>
        <ul className="flex flex-wrap justify-center gap-4 text-blue-700">
          <li>Hamamatsu</li>
          <li>Grundium</li>
          <li>KFBio</li>
        </ul>
      </div>
      <div className="mb-8">
        <span className="block font-semibold">Validation:</span>
        NABL labs, 2800+ cases, ICMR, CDSCO, TRL 7
      </div>
      <a className="button-primary" href="#contact">
        Request Edge Device Demo
      </a>
    </div>
  </section>
);

export default CerviAIPlatform;
