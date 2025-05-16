
import AnimatedText from "@/components/AnimatedText";
import BlurImage from "@/components/BlurImage";
const TeamPreview = () => (
  <section className="section-padding bg-vyuhaa-50" id="team">
    <div className="max-w-5xl mx-auto">
      <AnimatedText
        as="h2"
        text="Built by Experts in Healthcare, AI, and Public Health"
        className="text-2xl md:text-3xl font-bold mb-8 text-center"
      />
      <div className="flex flex-wrap gap-8 justify-center">
        <div className="flex flex-col items-center">
          <BlurImage src="https://vyuhaa-logos.s3.amazonaws.com/dhritiman.jpg" alt="Dhritiman Mallick" className="w-24 h-24 rounded-full mb-2"/>
          <span className="font-bold text-vyuhaa-800">Dhritiman Mallick</span>
          <span className="text-gray-500 text-sm">Founder &amp; Operations</span>
        </div>
        <div className="flex flex-col items-center">
          <BlurImage src="https://vyuhaa-logos.s3.amazonaws.com/ranjani.jpg" alt="Dr. CP Ranjani" className="w-24 h-24 rounded-full mb-2"/>
          <span className="font-bold text-vyuhaa-800">Dr. CP Ranjani</span>
          <span className="text-gray-500 text-sm">Lead Pathologist</span>
        </div>
      </div>
    </div>
  </section>
);
export default TeamPreview;
