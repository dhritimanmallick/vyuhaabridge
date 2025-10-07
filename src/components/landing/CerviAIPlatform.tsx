
import AnimatedText from "@/components/AnimatedText";
import { Button } from "@/components/ui/button";
import BlurImage from "@/components/BlurImage";

const CerviAIPlatform = () => (
  <section className="section-padding bg-white" id="cerviai-platform">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <AnimatedText
          as="h2"
          text="CerviAI™ – AI-Driven Cervical Cancer Screening"
          className="text-2xl md:text-3xl font-bold mb-5"
        />
        <AnimatedText
          text="CerviAI is our flagship deep learning platform for automated cervical cytology screening and biomarker analysis. Built for clinical laboratories and pathology workflows, it delivers faster, more accurate precision oncology diagnostics with cutting-edge technology integration."
          className="mb-5 text-gray-700"
          delay={100}
        />
        <ul className="space-y-2 mb-5 text-gray-700 text-sm md:text-base">
          <li>• <strong>Browser-based slide viewer:</strong> Visualize whole-slide images online with zero installation</li>
          <li>• <strong>Accurate biomarker quantification:</strong> Detect, classify, and score according to clinical guidelines</li>
          <li>• <strong>AI-powered segmentation:</strong> Extract nuclei, cell shapes, and marker intensities automatically</li>
          <li>• <strong>EDGE device:</strong> On-device AI analysis without browser dependency – ideal for low-resource settings and field deployment</li>
          <li>• <strong>Droplet microfluidics integration:</strong> Advanced micro-fluidics technology for enhanced cancer screening workflows</li>
          <li>• <strong>Seamless integration:</strong> Works with Hamamatsu, Grundium, and KFBio scanners</li>
          <li>• <strong>Trained on 2,800+ cases:</strong> Validated in NABL-accredited clinical laboratories</li>
        </ul>
        <a href="#request-demo">
          <Button size="lg">Request Edge Device Demo</Button>
        </a>
      </div>
      <div className="flex flex-col items-center space-y-6">
        <BlurImage
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80"
          alt="CerviAI Edge Device in diagnostics lab"
          className="w-full h-64 object-cover rounded-xl"
        />
      </div>
    </div>
  </section>
);
export default CerviAIPlatform;
