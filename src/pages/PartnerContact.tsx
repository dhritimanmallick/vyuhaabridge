
import AnimatedText from '../components/AnimatedText';
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const PartnerContact = () => (
  <section className="section-padding min-h-screen bg-white">
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-4 flex">
        <Link to="/" className="ml-auto">
          <Button variant="outline" size="sm">
            Home
          </Button>
        </Link>
      </div>
      <AnimatedText as="h1" text="Partner & Contact" className="text-3xl md:text-5xl font-bold mb-10" />
      <div className="max-w-md mx-auto bg-vyuhaa-50 rounded-xl shadow-md p-8 flex flex-col items-start gap-6 mt-6">
        <div className="flex items-center gap-4">
          <Mail className="text-vyuhaa-500" size={24} />
          <a
            href="mailto:admin@vyuhaadata.com"
            className="text-base md:text-lg font-semibold text-vyuhaa-700 hover:underline"
          >
            admin@vyuhaadata.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Phone className="text-vyuhaa-500" size={24} />
          <a
            href="tel:+919840582365"
            className="text-base md:text-lg font-semibold text-vyuhaa-700 hover:underline"
          >
            +91-9840582365
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default PartnerContact;

