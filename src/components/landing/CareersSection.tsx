import AnimatedText from "@/components/AnimatedText";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";

const openings = [
  {
    title: "AI/ML Research Engineer",
    location: "Hyderabad, India",
    type: "Full-time",
    description: "Build and deploy deep learning models for digital pathology and cell-level analysis.",
  },
  {
    title: "Embedded Systems Engineer",
    location: "Hyderabad, India",
    type: "Full-time",
    description: "Develop firmware and edge computing pipelines for VyuPath EDGE devices.",
  },
  {
    title: "Clinical Pathology Intern",
    location: "Remote / Hyderabad",
    type: "Internship",
    description: "Support annotation, validation, and clinical workflow integration for CerviAI.",
  },
];

const CareersSection = () => (
  <section className="section-padding bg-white" id="careers">
    <div className="max-w-5xl mx-auto">
      <AnimatedText
        as="h2"
        text="Join Our Team"
        className="text-2xl md:text-3xl font-bold mb-2 text-center"
      />
      <AnimatedText
        text="We're building the future of accessible cancer screening. Come work with us."
        className="mb-10 text-center text-muted-foreground"
        delay={100}
      />
      <div className="grid gap-6">
        {openings.map((job) => (
          <div
            key={job.title}
            className="glass-card p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div>
              <h3 className="font-bold text-lg mb-1">{job.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{job.description}</p>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin size={14} /> {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase size={14} /> {job.type}
                </span>
              </div>
            </div>
            <a href="/partner-contact">
              <Button variant="outline" size="sm">
                Apply <ArrowRight className="ml-1" size={14} />
              </Button>
            </a>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground mt-8">
        Don't see a fit? Email us at{" "}
        <a href="mailto:careers@vyuhaadata.com" className="text-vyuhaa-600 underline">
          careers@vyuhaadata.com
        </a>
      </p>
    </div>
  </section>
);

export default CareersSection;
