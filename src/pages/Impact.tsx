
import AnimatedText from '../components/AnimatedText';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Counter from '../components/Counter';

const impactPartnerLogos = [
  { name: "Hamamatsu Photonics", src: "/lovable-uploads/d949f539-88bf-494c-ade6-8151d837cfdd.png" },
  { name: "MEITY", src: "/lovable-uploads/3c711f73-fe4a-48a2-84ea-52210a03e396.png" },
  { name: "NVIDIA Inception Program", src: "/lovable-uploads/f65a56e2-2263-42ca-ac9e-d27fe4115027.png" },
  { name: "ICMR", src: "/lovable-uploads/d6183d61-0d71-4b2f-b057-629ae3ff3573.png" },
  { name: "AMTZ", src: "/lovable-uploads/b624d886-09ac-4229-91a6-66d8f7af11c5.png" },
  { name: "Nasscom", src: "/lovable-uploads/9b5890ce-28a1-4d29-820d-604f1dbfd5ea.png" },
  { name: "Fernandez Hospitals", src: "/lovable-uploads/437b36d6-112f-46ce-87c5-fd23d15d87da.png" },
  { name: "CPath Labs", src: "/lovable-uploads/da2a01e1-db46-45a2-ac32-0ca58df76db0.png" },
  { name: "FPAI India", src: "/lovable-uploads/1a5cbed5-cf05-47db-9485-40ed3aa61d3d.png" },
  { name: "ASHWINI Gudalur Hospitals", src: "/lovable-uploads/3186371e-c856-40ba-a5da-7c06683a32e8.png" },
  { name: "Sudha Hospitals", src: "/lovable-uploads/cc70310d-d85e-4631-88d1-518b0d21df65.png" },
];

const Impact = () => (
  <div className="flex flex-col min-h-screen overflow-hidden">
    <Navbar />
    <main>
      <section className="section-padding pt-32 min-h-screen bg-white">
        <div className="max-w-5xl mx-auto text-center">
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-extrabold text-vyuhaa-600">
            <Counter to={10000} duration={1800} />
            +
          </span>
          <span className="text-gray-700 text-sm text-center">Women Screened</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-extrabold text-vyuhaa-600">NABL</span>
          <span className="text-gray-700 text-sm text-center">Double-Blind Lab Studies</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-extrabold text-vyuhaa-600">&gt;60%</span>
          <span className="text-gray-700 text-sm text-center">Workload Reduction</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-extrabold text-vyuhaa-600">4</span>
          <span className="text-gray-700 text-sm text-center">Regions Deployed</span>
        </div>
      </div>
      <div className="text-sm text-gray-600 mb-4">Deployed in 3 states + 1 international pilot.</div>
      <div className="flex flex-wrap justify-center items-center gap-6 mt-2">
        <span className="text-gray-500 mr-2 font-semibold">Supported by:</span>
        {impactPartnerLogos.map(({ name, src }) => (
          <img
            key={name}
            src={src}
            alt={name}
            className="h-10 md:h-14 w-auto object-contain grayscale hover:grayscale-0 transition bg-white py-2 px-3 rounded"
          />
        ))}
        </div>

      </div>
    </section>
    </main>
    <Footer />
  </div>
);

export default Impact;
