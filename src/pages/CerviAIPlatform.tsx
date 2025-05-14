
import AnimatedText from '../components/AnimatedText';
import LogoCloud from '../components/LogoCloud';
import { Video, CheckCircle, BarChart2 } from 'lucide-react';

const CerviAIPlatform = () => (
  <section className="section-padding min-h-screen bg-white">
    <div className="max-w-5xl mx-auto text-center">
      <AnimatedText as="h1" text="CerviAI™ – Your Digital Cytology Companion" className="text-3xl md:text-5xl font-bold mb-6" />
      <div className="flex flex-col md:flex-row gap-8 mb-10 items-center justify-center">
        <div className="flex-1">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/q-TTEbtP6oo?si=WrfDrXAPW7J8robQ&autoplay=0&mute=1&loop=1"
              title="CerviAI in Action"
              className="w-full aspect-video rounded-xl border"
              allow="autoplay; encrypted-media"
            ></iframe>
            <span className="absolute top-2 right-2 inline-flex items-center bg-white bg-opacity-70 rounded px-2 py-1 text-xs font-semibold"><Video size={16} className="mr-1" />CerviAI in Action</span>
          </div>
        </div>
        <div className="flex-1 text-left md:text-left">
          <p className="text-lg text-gray-700 mb-6">
            CerviAI is a deep learning-powered platform designed for automated cervical cytology screening. Trained on diverse, real-world datasets, it assists pathologists in identifying high-risk cases faster, with precision.
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start"><CheckCircle className="text-vyuhaa-500 mr-2 mt-0.5" size={20} /> AI-based triage and anomaly detection for cervical cytology</li>
            <li className="flex items-start"><CheckCircle className="text-vyuhaa-500 mr-2 mt-0.5" size={20} /> Trained on over 2,800 cases in NABL-accredited labs</li>
            <li className="flex items-start"><CheckCircle className="text-vyuhaa-500 mr-2 mt-0.5" size={20} /> EDGE device with cloud sync for low-resource settings</li>
            <li className="flex items-start"><CheckCircle className="text-vyuhaa-500 mr-2 mt-0.5" size={20} /> Compatible with Hamamatsu, Grundium, and KFBio scanners</li>
            <li className="flex items-start"><CheckCircle className="text-vyuhaa-500 mr-2 mt-0.5" size={20} /> Modular AI models tailored to sub-specialties</li>
          </ul>
          <div className="flex gap-4">
            <a href="#contact" className="button-primary">Request a Demo</a>
            <a href="https://youtu.be/q-TTEbtP6oo?si=WrfDrXAPW7J8robQ" target="_blank" rel="noopener noreferrer" className="button-outline">See CerviAI in Action</a>
          </div>
        </div>
      </div>

      <div className="bg-vyuhaa-50 rounded-xl p-6 mt-8 shadow flex flex-col md:flex-row md:items-center md:justify-between gap-6 animate-fade-in">
        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-semibold mb-2">How It Works</h2>
          <ol className="list-decimal list-inside text-gray-700 text-left space-y-1">
            <li>Slide Scanned (on-site or remotely)</li>
            <li>AI Inference on EDGE or Cloud</li>
            <li>Review Interface for Pathologists</li>
            <li>Report Generation and Sync</li>
          </ol>
        </div>
        <img
          src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400&q=80"
          alt="Workflow diagram"
          className="w-full md:w-60 rounded-lg object-cover ml-auto"
        />
      </div>

      <LogoCloud />
    </div>
  </section>
);

export default CerviAIPlatform;

