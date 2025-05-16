
import React from "react";
import AnimatedText from '../components/AnimatedText';

const partners = [
  {
    name: "Indian Council for Medical Research",
    logo: "https://vyuhaa-logos.s3.amazonaws.com/icmr.png",
  },
  {
    name: "Hamamatsu Photonics",
    logo: "https://vyuhaa-logos.s3.amazonaws.com/hamamatsu.png",
  },
  {
    name: "Ministry of Electronics and IT",
    logo: "https://vyuhaa-logos.s3.amazonaws.com/meity.png",
  },
  {
    name: "NVIDIA",
    logo: "https://vyuhaa-logos.s3.amazonaws.com/nvidia.png",
  },
  {
    name: "Google for Startups",
    logo: "https://vyuhaa-logos.s3.amazonaws.com/google.png",
  },
  {
    name: "Microsoft",
    logo: "https://vyuhaa-logos.s3.amazonaws.com/microsoft.png",
  },
  {
    name: "Center for Cellular and Molecular Platforms",
    logo: "https://vyuhaa-logos.s3.amazonaws.com/ccamp.png",
  },
  {
    name: "Github",
    logo: "https://vyuhaa-logos.s3.amazonaws.com/github.png",
  },
  {
    name: "Atlassian",
    logo: "https://vyuhaa-logos.s3.amazonaws.com/atlassian.png",
  },
];

const Collaboration = () => (
  <section className="section-padding min-h-screen bg-vyuhaa-50">
    <div className="max-w-5xl mx-auto text-center">
      <AnimatedText as="h1" text="Collaboration & Partnerships" className="text-3xl md:text-5xl font-bold mb-8" />
      <div className="flex flex-wrap justify-center gap-10 py-6">
        {partners.map(({ name, logo }) => (
          <div key={name} className="flex flex-col items-center">
            <img src={logo} alt={name} className="h-20 w-36 object-contain grayscale hover:grayscale-0 transition" />
            <span className="text-xs text-gray-700 font-medium mt-2">{name}</span>
          </div>
        ))}
      </div>
      <p className="text-gray-600 pt-4">Together, paving the way for accessible, data-driven healthcare across India and beyond.</p>
    </div>
  </section>
);

export default Collaboration;
