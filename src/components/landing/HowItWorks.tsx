
import AnimatedText from "@/components/AnimatedText";
import BlurImage from "@/components/BlurImage";

const HowItWorks = () => (
  <section className="section-padding bg-vyuhaa-50">
    <div className="max-w-5xl mx-auto">
      <AnimatedText
        as="h2"
        text="How It Works"
        className="text-2xl md:text-3xl font-bold mb-6 text-center"
      />
      <div className="grid gap-8 md:grid-cols-6 items-center">
        <div className="flex flex-col items-center">
          <BlurImage
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=200&q=80"
            alt="Affordable collection kits for LBC and HPV"
            className="w-24 h-24 object-cover rounded-full mb-2"
          />
          <span className="text-sm font-semibold text-gray-700 text-center mt-2">Affordable collection kits<br/>for LBC and HPV</span>
        </div>
        <div className="flex flex-col items-center">
          <BlurImage
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=200&q=80"
            alt="Slide development and automated processing"
            className="w-24 h-24 object-cover rounded-full mb-2"
          />
          <span className="text-sm font-semibold text-gray-700 text-center mt-2">Slide development &amp;<br/>automated processing</span>
        </div>
        <div className="flex flex-col items-center">
          <BlurImage
            src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=200&q=80"
            alt="Slide Scanned"
            className="w-24 h-24 object-cover rounded-full mb-2"
          />
          <span className="text-sm font-semibold text-gray-700 text-center mt-2">Slide Scanned</span>
        </div>
        <div className="flex flex-col items-center">
          <BlurImage
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=200&q=80"
            alt="AI Inference"
            className="w-24 h-24 object-cover rounded-full mb-2"
          />
          <span className="text-sm font-semibold text-gray-700 text-center mt-2">AI Inference<br />EDGE/Cloud</span>
        </div>
        <div className="flex flex-col items-center">
          <BlurImage
            src="https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=200&q=80"
            alt="Review Interface"
            className="w-24 h-24 object-cover rounded-full mb-2"
          />
          <span className="text-sm font-semibold text-gray-700 text-center mt-2">Pathologist Review</span>
        </div>
        <div className="flex flex-col items-center">
          <BlurImage
            src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=200&q=80"
            alt="Report Sync"
            className="w-24 h-24 object-cover rounded-full mb-2"
          />
          <span className="text-sm font-semibold text-gray-700 text-center mt-2">Report Generation &amp; Sync</span>
        </div>
      </div>
    </div>
  </section>
);
export default HowItWorks;
