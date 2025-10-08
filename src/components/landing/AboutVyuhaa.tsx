import AnimatedText from "@/components/AnimatedText";
import { CheckCircle2 } from "lucide-react";

const AboutVyuhaa = () => (
  <section className="section-padding bg-gradient-to-b from-white to-gray-50" id="about">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <AnimatedText
          as="h2"
          text="Fast, Accurate, and Scalable Digital Pathology Analysis"
          className="text-2xl md:text-4xl font-bold mb-4"
        />
        <AnimatedText
          text="Vyuhaa Med Data's AI platform transforms how pathology labs and clinical scientists work with digital histopathology. Designed for translational and clinical research, our VyuPath platform delivers intuitive, browser-based analysis with cutting-edge AI modules."
          className="text-gray-600 mb-5 max-w-4xl mx-auto"
          delay={100}
        />
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <CheckCircle2 className="text-green-600" size={24} />
            Why Digital Pathology with AI?
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li>• Provides crucial insights into tissue organization for immuno-oncology and biomarker discovery</li>
            <li>• Advances drug development with high-plex imaging capabilities</li>
            <li>• Enables precision oncology through accurate biomarker analysis</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <CheckCircle2 className="text-blue-600" size={24} />
            The Challenge
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li>• Manual analysis is time-consuming and subjective</li>
            <li>• Requires specialized image analysis and AI expertise</li>
            <li>• Large data volumes demand significant computational resources</li>
            <li>• Lack of accessible, intuitive software tools</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-100">
        <h3 className="text-2xl font-bold mb-4 text-center">Our Solution: VyuPath Platform</h3>
        <p className="text-center text-gray-700 mb-6 max-w-3xl mx-auto">
          VyuPath is our modular AI platform that simplifies digital pathology analysis with AI-powered image segmentation, quantification, and a fast, intuitive cloud system for visualization directly in your browser. CerviAI is our first module, with more AI capabilities expanding soon.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="text-center">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
              <h4 className="font-semibold text-blue-700">Visualize & Quantify</h4>
            </div>
            <p className="text-sm text-gray-600">Whole-slide images directly in browser with no installation</p>
          </div>
          <div className="text-center">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
              <h4 className="font-semibold text-purple-700">AI-Powered Analysis</h4>
            </div>
            <p className="text-sm text-gray-600">Extract cells, shapes, marker intensities, and phenotypes automatically</p>
          </div>
          <div className="text-center">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
              <h4 className="font-semibold text-green-700">Collaborate Seamlessly</h4>
            </div>
            <p className="text-sm text-gray-600">Share, annotate, and engage with colleagues in real-time</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default AboutVyuhaa;
