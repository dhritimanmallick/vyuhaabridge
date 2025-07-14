
const clientLogos = [
  {
    name: "Fernandez Hospitals",
    src: "/lovable-uploads/437b36d6-112f-46ce-87c5-fd23d15d87da.png",
  },
  {
    name: "CPath Labs",
    src: "/lovable-uploads/da2a01e1-db46-45a2-ac32-0ca58df76db0.png",
  },
  {
    name: "FPAI India",
    src: "/lovable-uploads/1a5cbed5-cf05-47db-9485-40ed3aa61d3d.png",
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
