
import AnimatedText from "@/components/AnimatedText";
import BlurImage from "@/components/BlurImage";

const steps = [
  {
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=200&q=80",
    alt: "Affordable collection kits for LBC and HPV",
    text: (
      <>
        Affordable collection kits
        <br />
        for LBC and HPV
      </>
    ),
  },
  {
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=200&q=80",
    alt: "Slide development and automated processing",
    text: (
      <>
        Slide development &amp;
        <br />
        automated processing
      </>
    ),
  },
  {
    img: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=200&q=80",
    alt: "Slide Scanned",
    text: <>Slide Scanned</>,
  },
  {
    img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=200&q=80",
    alt: "AI Inference",
    text: (
      <>
        AI Inference
        <br />
        EDGE/Cloud
      </>
    ),
  },
  {
    img: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=200&q=80",
    alt: "Review Interface",
    text: <>Pathologist Review</>,
  },
  {
    img: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=200&q=80",
    alt: "Report Sync",
    text: (
      <>
        Report Generation
        <br />
        &amp; Sync
      </>
    ),
  },
];

const HowItWorks = () => (
  <section className="section-padding bg-vyuhaa-50">
    <div className="max-w-5xl mx-auto">
      <AnimatedText
        as="h2"
        text="How It Works"
        className="text-2xl md:text-3xl font-bold mb-6 text-center"
      />
      <div className="grid gap-8 md:grid-cols-6 items-stretch">
        {steps.map((step, idx) => (
          <div
            className="flex flex-col items-center text-center"
            key={idx}
          >
            <div className="flex items-center justify-center h-28 w-28 mb-3">
              <BlurImage
                src={step.img}
                alt={step.alt}
                className="w-24 h-24 object-cover rounded-full shadow"
              />
            </div>
            <span className="text-sm font-semibold text-gray-700 leading-tight">{step.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
