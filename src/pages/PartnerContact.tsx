
import AnimatedText from '../components/AnimatedText';
import { Mail, Phone } from 'lucide-react';

const PartnerContact = () => (
  <section className="section-padding min-h-screen bg-gray-50">
    <div className="max-w-3xl mx-auto text-center">
      <AnimatedText as="h1" text="Partner With Us" className="text-3xl md:text-5xl font-bold mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
        <div className="bg-white rounded-xl p-7 glass-card flex flex-col items-center mb-6 md:mb-0 shadow">
          <Mail className="text-vyuhaa-500 mb-2" size={28} />
          <div className="font-semibold text-gray-700 mb-2">Email</div>
          <a className="text-vyuhaa-700 text-lg font-bold" href="mailto:admin@vyuhaadata.com">admin@vyuhaadata.com</a>
        </div>
        <div className="bg-white rounded-xl p-7 glass-card flex flex-col items-center shadow">
          <Phone className="text-vyuhaa-500 mb-2" size={28} />
          <div className="font-semibold text-gray-700 mb-2">Phone</div>
          <a className="text-vyuhaa-700 text-lg font-bold" href="tel:+919840582365">+91-9840582365</a>
        </div>
      </div>
      <div className="mt-10 text-gray-600 space-y-2">
        <p>For governments, laboratories, NGOs, investors: <span className="font-bold">Schedule a call, request access, or apply for pilot programs.</span></p>
        <p className="text-xs text-gray-400">Integration with Notion/HubSpot: Coming soon</p>
      </div>
      <div className="mt-12">
        <a href="https://youtu.be/q-TTEbtP6oo?si=WrfDrXAPW7J8robQ" target="_blank" rel="noopener noreferrer" className="button-primary">
          Watch: CerviAI in Action
        </a>
      </div>
      <div className="mt-8 text-gray-500">Careers: <a href="mailto:admin@vyuhaadata.com" className="underline">admin@vyuhaadata.com</a></div>
    </div>
  </section>
);

export default PartnerContact;

