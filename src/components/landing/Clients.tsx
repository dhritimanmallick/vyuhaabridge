
import React from "react";

const clientLogos = [
  {
    name: "Bambino Pasta",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=220&q=80",
  },
  {
    name: "Rotary Club",
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=220&q=80",
  },
];

const Clients = () => (
  <section className="py-8 bg-white border-y border-gray-100">
    <div className="max-w-5xl mx-auto text-center">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Our Clients</h3>
      <div className="flex justify-center gap-12 py-4">
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
      </div>
    </div>
  </section>
);

export default Clients;
