
import React from "react";

const clientLogos = [
  {
    name: "Rotary Club",
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=220&q=80",
  },
  {
    name: "Chennai Clinik",
    src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=220&q=80",
  },
  {
    name: "Bambino Pasta",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=220&q=80",
  },
];

const Clients = () => (
  <section className="py-8 bg-white border-y border-gray-100">
    <div className="max-w-5xl mx-auto text-center">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Our Clients</h3>
      <div className="relative w-full overflow-x-hidden py-2">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {clientLogos.map(({ name, src }) => (
            <div key={name} className="flex flex-col items-center mx-4 min-w-[140px]">
              <img
                src={src}
                alt={name}
                className="h-14 w-36 object-contain grayscale hover:grayscale-0 transition bg-white rounded shadow"
              />
              <span className="mt-1 text-xs text-gray-500">{name}</span>
            </div>
          ))}
          {/* Duplicate logos for seamless loop */}
          {clientLogos.map(({ name, src }) => (
            <div key={name + "-dupe"} className="flex flex-col items-center mx-4 min-w-[140px]">
              <img
                src={src}
                alt={name}
                className="h-14 w-36 object-contain grayscale hover:grayscale-0 transition bg-white rounded shadow"
              />
              <span className="mt-1 text-xs text-gray-500">{name}</span>
            </div>
          ))}
        </div>
        <style>
          {`
            @keyframes marquee {
              0%   { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 30s linear infinite;
              display: flex;
            }
          `}
        </style>
      </div>
    </div>
  </section>
);

export default Clients;
