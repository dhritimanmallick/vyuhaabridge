import AnimatedText from "@/components/AnimatedText";
import BlurImage from "@/components/BlurImage";
const ProductsSection = () => (
  <section className="section-padding bg-white" id="products">
    <div className="max-w-6xl mx-auto">
      <AnimatedText
        as="h2"
        text="Modular AI for Diagnostic Pathology"
        className="text-2xl md:text-3xl font-bold mb-2 text-center"
      />
      <AnimatedText
        text="Each model we build addresses a specific clinical bottleneck."
        className="mb-10 text-center text-gray-600"
        delay={100}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass-card p-6 flex flex-col items-center">
          <BlurImage src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&q=80" alt="CerviAI" className="w-20 h-20 mb-4 rounded-full"/>
          <div className="font-bold text-vyuhaa-600 mb-1">CerviAI (Cervical Cytology)</div>
          <div className="text-sm text-gray-700 text-center">Deployed, validated, regulatory path ongoing</div>
        </div>
        <div className="glass-card p-6 flex flex-col items-center opacity-60">
          <BlurImage src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=300&q=80" alt="BreastAI" className="w-20 h-20 mb-4 rounded-full"/>
          <div className="font-bold text-blue-600 mb-1">Breast Cancer AI</div>
          <div className="text-xs italic text-gray-500 mb-1">(Coming Soon)</div>
          <div className="text-sm text-gray-700 text-center">Focused on FNA/biopsy image triage</div>
        </div>
        <div className="glass-card p-6 flex flex-col items-center">
          <BlurImage src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=300&q=80" alt="Histopathology AI" className="w-20 h-20 mb-4 rounded-full"/>
          <div className="font-bold text-blue-500 mb-1">Histopathology AI Modules</div>
          <div className="text-sm text-gray-700 text-center">GI, Lung, Oral — under development</div>
        </div>
        <div className="glass-card p-6 flex flex-col items-center">
          <BlurImage src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=300&q=80" alt="Annotation Tools" className="w-20 h-20 mb-4 rounded-full"/>
          <div className="font-bold text-black mb-1">Annotation Toolkits</div>
          <div className="text-sm text-gray-700 text-center">Custom training/validation environments for labs</div>
        </div>
        <div className="glass-card p-6 flex flex-col items-center">
          <BlurImage src="https://images.unsplash.com/photo-1519060825752-c48361be9c87?auto=format&fit=crop&w=300&q=80" alt="Sequential Testing" className="w-20 h-20 mb-4 rounded-full"/>
          <div className="font-bold text-vyuhaa-700 mb-1">Sequential Testing</div>
          <div className="text-sm text-gray-700 text-center">
            Liquid Based Cytology screening and triaging with HPV DNA Testing for efficient risk stratification.
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default ProductsSection;
