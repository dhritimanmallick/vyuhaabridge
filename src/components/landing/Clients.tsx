
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
      <div className="flex flex-wrap gap-8 justify-center items-center">
        {clientLogos.map((logo) => (
          <div key={logo.name} className="flex flex-col items-center min-w-[110px]">
            <img
              src={logo.src}
              alt={logo.name}
              className="h-12 w-28 object-contain grayscale hover:grayscale-0 transition bg-white rounded shadow"
              style={{ maxWidth: 110 }}
            />
            <span className="text-xs text-gray-500 mt-1">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Clients;
