
const clientLogos = [
  {
    name: "Fernandez Hospitals",
    src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=220&q=80",
  },
  {
    name: "Sudha Hospitals",
    src: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=220&q=80",
  },
  {
    name: "CPath Labs",
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=220&q=80",
  },
];
const Marquee = () => (
  <div className="w-full overflow-x-hidden py-5 bg-white border-y border-gray-100">
    <div className="flex gap-12 animate-marquee whitespace-nowrap">
      {clientLogos.map(({ name, src }) => (
        <div key={name} className="flex flex-col items-center mx-4 min-w-[140px]">
          <img src={src} alt={name} className="h-14 w-36 object-contain grayscale hover:grayscale-0 transition" />
          <span className="mt-1 text-xs text-gray-500">{name}</span>
        </div>
      ))}
      {clientLogos.map(({ name, src }) => (
        <div key={name + "-dupe"} className="flex flex-col items-center mx-4 min-w-[140px]">
          <img src={src} alt={name} className="h-14 w-36 object-contain grayscale hover:grayscale-0 transition" />
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
);
export default Marquee;
