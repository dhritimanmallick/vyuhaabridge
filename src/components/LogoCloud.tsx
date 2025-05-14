
import React from "react";

const logos = [
  {
    src:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=220&q=80",
    alt: "Fernandez Hospitals",
    name: "Fernandez Hospitals",
  },
  {
    src:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=220&q=80",
    alt: "CPath Labs",
    name: "CPath Labs",
  },
  {
    src:
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=220&q=80",
    alt: "Sudha Hospitals",
    name: "Sudha Hospitals",
  },
];

const LogoCloud = ({ title = "Trusted by" }: { title?: string }) => (
  <div className="mt-10 text-center">
    <h3 className="text-lg font-semibold text-gray-700 mb-4">{title}</h3>
    <div className="flex flex-wrap gap-8 justify-center items-center">
      {logos.map((logo) => (
        <div key={logo.name} className="flex flex-col items-center">
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-14 w-36 object-contain grayscale hover:grayscale-0 transition"
          />
          <span className="text-xs text-gray-500 mt-1">{logo.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default LogoCloud;

