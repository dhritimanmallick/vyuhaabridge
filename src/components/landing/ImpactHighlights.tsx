
import AnimatedText from "@/components/AnimatedText";

const impactPartnerLogos = [
  { name: "NVIDIA Inception", src: "https://vyuhaa-logos.s3.amazonaws.com/nvidia.png" },
  { name: "Hamamatsu Photonics (uploaded)", src: "/lovable-uploads/d949f539-88bf-494c-ade6-8151d837cfdd.png" },
  { name: "Hamamatsu Photonics", src: "https://vyuhaa-logos.s3.amazonaws.com/hamamatsu.png" },
  { name: "MEITY (uploaded)", src: "/lovable-uploads/3c711f73-fe4a-48a2-84ea-52210a03e396.png" },
  { name: "NVIDIA Inception Program (uploaded)", src: "/lovable-uploads/f65a56e2-2263-42ca-ac9e-d27fe4115027.png" },
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
            <span className="text-2xl md:text-3xl font-extrabold text-vyuhaa-600">10,000+</span>
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
