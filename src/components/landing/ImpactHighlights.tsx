
import AnimatedText from "@/components/AnimatedText";
import Counter from "@/components/Counter";

const impactPartnerLogos = [
  { name: "Hamamatsu Photonics (uploaded)", src: "/lovable-uploads/d949f539-88bf-494c-ade6-8151d837cfdd.png" },
  { name: "MEITY (uploaded)", src: "/lovable-uploads/3c711f73-fe4a-48a2-84ea-52210a03e396.png" },
  { name: "NVIDIA Inception Program (uploaded)", src: "/lovable-uploads/f65a56e2-2263-42ca-ac9e-d27fe4115027.png" },
  { name: "ICMR (uploaded)", src: "/lovable-uploads/d6183d61-0d71-4b2f-b057-629ae3ff3573.png" },
  { name: "AMTZ", src: "/lovable-uploads/b624d886-09ac-4229-91a6-66d8f7af11c5.png" },
  { name: "Nasscom", src: "/lovable-uploads/9b5890ce-28a1-4d29-820d-604f1dbfd5ea.png" }, // NEW Nasscom LOGO
];

const ImpactHighlights = () => (
  <section className="section-padding bg-vyuhaa-50" id="impact">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-8">
        <AnimatedText
          as="h2"
          text="Our Impact"
          className="text-xl md:text-3xl font-bold mb-4"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
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
        <div className="text-sm text-gray-600 mb-2">Deployed in 3 states + 1 international pilot.</div>
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
    </div>
  </section>
);
export default ImpactHighlights;
