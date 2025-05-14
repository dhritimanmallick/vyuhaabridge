
import AnimatedText from '../components/AnimatedText';

const Products = () => (
  <section className="section-padding min-h-screen bg-gray-50">
    <div className="max-w-5xl mx-auto text-center">
      <AnimatedText
        as="h1"
        text="Products"
        className="text-3xl md:text-5xl font-bold mb-6"
      />
      <ul className="space-y-6">
        <li>
          <h2 className="text-xl font-semibold text-vyuhaa-600">CerviAI (Cervical)</h2>
          <p>AI-enabled cervical cancer screening solution for OB-GYNs & hospitals.</p>
        </li>
        <li>
          <h2 className="text-xl font-semibold text-blue-600">BreastAI <span className="italic text-gray-400">(Coming Soon)</span></h2>
          <p>Extending AI assistance to breast cytology diagnostics.</p>
        </li>
        <li>
          <h2 className="text-xl font-semibold text-blue-500">Histopathology Modules</h2>
          <p>GI, Lung, Oral, and more—modular AI pathology support.</p>
        </li>
        <li>
          <h2 className="text-lg font-semibold">Annotation Tools</h2>
          <p>Empowering pathologists to annotate, collaborate, and build datasets.</p>
        </li>
      </ul>
    </div>
  </section>
);

export default Products;
