
import { MapPin } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";

const locations = [
  {
    city: "Chennai",
    address: `4/608 G1 VOC Street Perungudi OMR Chennai Neelankarai Chennai City Corporation
    Kanchipuram Tamil Nadu - 600041`
  },
  {
    city: "Bangalore",
    address: `3rd Floor, Nasscom, CoE IOT
    29/A, 27th Main Rd, Sector 5,
    1st Sector, HSR Layout,
    Bengaluru, Karnataka 560102`
  },
  {
    city: "Visakhapatnam",
    address: `I-Hub MedTech Zone, J5G5+7WF,
    First floor, I-Hub, Siddeswaram,
    Nadupuru Reserve Forest,
    Visakhapatnam, Andhra Pradesh 530032`
  },
  {
    city: "Hyderabad",
    address: `C/O CPath Labs 5th Floor, Plot No, KK Plaza, 450 & 476, 100 Feet Rd,
    Ayyappa Society, Chanda Naik Nagar, Madhapur, Hyderabad, Telangana 500081`
  }
];

const LocationsSection = () => (
  <section id="locations" className="section-padding bg-white">
    <div className="max-w-5xl mx-auto">
      <AnimatedText
        as="h2"
        text="Our Locations"
        className="text-2xl md:text-3xl font-bold mb-8 text-center"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {locations.map((loc) => (
          <div
            key={loc.city}
            className="glass-card p-6 flex flex-col items-start gap-3 shadow animate-fade-in"
          >
            <div className="flex items-center gap-2 text-vyuhaa-700">
              <MapPin className="text-vyuhaa-500" size={22} />
              <span className="font-semibold text-lg">{loc.city}</span>
            </div>
            <div className="text-gray-600 whitespace-pre-line text-sm">{loc.address}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LocationsSection;
