
import AnimatedText from "@/components/AnimatedText";
import { Button } from "@/components/ui/button";
import BlurImage from "@/components/BlurImage";

const CerviAIPlatform = () => (
  <section className="section-padding bg-white" id="cerviai-platform">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <AnimatedText
          as="h2"
          text="CerviAI™ – Screening Cervical Cancer with AI"
          className="text-2xl md:text-3xl font-bold mb-5"
        />
        <AnimatedText
          text="CerviAI is a deep learning-powered solution dedicated for automated cervical cytology screening. For other cancer diagnostics – breast, GI, lung, oral and more – explore our VyuPath platform and modular foundational models for digital pathology."
          className="mb-5 text-gray-700"
          delay={100}
        />
        <ul className="space-y-2 mb-5 text-gray-700 text-sm md:text-base">
          <li>• AI-based triage and anomaly detection for cervical cytology</li>
          <li>• Trained on over 2,800 cases in NABL-accredited labs</li>
          <li>• EDGE device with cloud sync for low-resource settings</li>
          <li>• Works with Hamamatsu, Grundium, and KFBio scanners</li>
          <li>• Modular AI models: CerviAI, VyuPath and more</li>
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
