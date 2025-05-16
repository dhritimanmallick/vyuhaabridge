import AnimatedText from '../components/AnimatedText';
import { Button } from "@/components/ui/button";
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
    </div>
  </section>
);

export default PartnerContact;
