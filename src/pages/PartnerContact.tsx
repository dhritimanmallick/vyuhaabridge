
import AnimatedText from '../components/AnimatedText';

const PartnerContact = () => (
  <section className="section-padding min-h-screen bg-gray-50">
    <div className="max-w-3xl mx-auto text-center">
      <AnimatedText as="h1" text="Partner With Us" className="text-3xl md:text-5xl font-bold mb-6" />
      <p className="mb-6 text-lg">
        For governments, laboratories, NGOs, investors:<br />
        Schedule a call, request access, or apply for pilot programs.
      </p>
      <a href="#contact" className="button-primary mb-6">
        Contact Us / Request Demo
      </a>
      <div className="text-gray-500">
        <p>Careers: info@vyuhaadata.com</p>
        <p>Integration with Notion/HubSpot: Coming soon</p>
      </div>
    </div>
  </section>
);

export default PartnerContact;
