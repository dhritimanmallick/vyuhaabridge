import AnimatedText from "@/components/AnimatedText";
import edgePipelineImg from "@/assets/edge-pipeline.png";

const PipelineSection = () => (
  <section className="section-padding bg-gradient-to-b from-gray-50 to-white" id="pipeline">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <AnimatedText
          as="h2"
          text="Advanced AI-Powered Analysis Pipeline"
          className="text-2xl md:text-4xl font-bold mb-4"
        />
        <AnimatedText
          text="Our EDGE platform combines cutting-edge AI algorithms for comprehensive tissue analysis and biomarker quantification"
          className="text-gray-600 max-w-3xl mx-auto"
          delay={100}
        />
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
        <img 
          src={edgePipelineImg} 
          alt="EDGE Pipeline - Advanced AI-powered image analysis pipeline and biomarker analysis workflow"
          className="w-full"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-100">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Edge Pipeline</h3>
          <p className="text-gray-700 mb-4">Advanced AI-powered image analysis pipeline</p>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><strong className="text-orange-600">Hi-plex image:</strong> Multi-channel whole-slide imaging input</li>
            <li><strong className="text-green-600">Nucleus/Cell image:</strong> AI-powered cell detection and isolation</li>
            <li><strong className="text-gray-600">Cell segmentation:</strong> Precise boundary delineation</li>
            <li><strong className="text-purple-600">Feature extraction:</strong> Morphological and intensity quantification</li>
            <li><strong className="text-red-600">Phenotyping:</strong> Cell classification and spatial analysis</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-pink-50 p-8 rounded-xl border border-orange-100">
          <h3 className="text-xl font-bold mb-4 text-orange-900">AI-Powered Biomarker Analysis</h3>
          <p className="text-gray-700 mb-4">Comprehensive biomarker detection and quantification</p>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><strong>IHC Her2:</strong> HER2 protein overexpression detection</li>
            <li><strong>IHC ER/PR:</strong> Hormone receptor status assessment</li>
            <li><strong>IHC Ki67:</strong> Proliferation index measurement</li>
            <li><strong>FISH HER2:</strong> Gene amplification analysis</li>
            <li><strong>ISH HER2:</strong> In-situ hybridization for precise gene copy detection</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default PipelineSection;
