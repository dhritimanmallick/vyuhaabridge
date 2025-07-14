
import AnimatedText from '../components/AnimatedText';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import LogoCloud from '../components/LogoCloud'; // Removed as per instruction
import { Video, Youtube, Linkedin } from 'lucide-react';

const CerviAIPlatform = () => (
  <div className="flex flex-col min-h-screen overflow-hidden">
    <Navbar />
    <main>
      <section className="section-padding pt-32 min-h-screen bg-white">
        <div className="max-w-5xl mx-auto text-center">
      
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
            <li className="flex items-start"><Video className="text-vyuhaa-500 mr-2 mt-0.5" size={20} /> AI-based triage and anomaly detection for cervical cytology</li>
            <li className="flex items-start"><Video className="text-vyuhaa-500 mr-2 mt-0.5" size={20} /> Trained on over 2,800 cases in NABL-accredited labs</li>
            <li className="flex items-start"><Video className="text-vyuhaa-500 mr-2 mt-0.5" size={20} /> EDGE device with cloud sync for low-resource settings</li>
            <li className="flex items-start"><Video className="text-vyuhaa-500 mr-2 mt-0.5" size={20} /> Compatible with Hamamatsu, Grundium, and KFBio scanners</li>
            <li className="flex items-start"><Video className="text-vyuhaa-500 mr-2 mt-0.5" size={20} /> Modular AI models tailored to sub-specialties</li>
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

      {/* Automated Slide Processing Section */}
      <div className="bg-white rounded-xl p-6 mt-12 shadow flex flex-col md:flex-row md:items-center md:justify-between gap-8 border border-vyuhaa-100">
        <div className="flex-1 mb-6 md:mb-0 md:mr-8">
          <AnimatedText
            as="h2"
            text="Automated Slide Processing"
            className="text-2xl md:text-3xl font-bold mb-4 text-left"
          />
          <p className="text-base md:text-lg text-gray-700 mb-3 text-left">
            Accelerate your cytology workflow with next-gen automation. Our EDGE device and deep learning models enable hands-free scanning, rapid feature analysis, and reporting—from scan to results in minutes.
          </p>
          <p className="text-gray-600 text-left text-sm">
            See below for a quick demonstration of automated digital pathology slide processing using CerviAI Platform.
          </p>
        </div>
        <div className="flex-1">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/27IiuGPmB0c?si=soqCbS-2pWZLzLhd&autoplay=0&mute=1&loop=1"
              title="Automated Slide Processing - CerviAI Platform"
              className="w-full aspect-video rounded-xl border"
              allow="autoplay; encrypted-media"
            ></iframe>
            <span className="absolute top-2 right-2 inline-flex items-center bg-white bg-opacity-70 rounded px-2 py-1 text-xs font-semibold"><Video size={16} className="mr-1" />Automated Slide Processing</span>
          </div>
        </div>
      </div>

      {/* Collection Kit Video Section */}
      <div className="bg-vyuhaa-50 rounded-xl p-6 mt-12 shadow flex flex-col md:flex-row md:items-center md:justify-between gap-8 border border-vyuhaa-100">
        <div className="flex-1 mb-6 md:mb-0 md:mr-8">
          <AnimatedText
            as="h2"
            text="CerviAI Collection Kit Demo"
            className="text-2xl md:text-3xl font-bold mb-4 text-left"
          />
          <p className="text-base md:text-lg text-gray-700 mb-3 text-left">
            Take a look at our CerviAI Collection Kit in action, designed to streamline cervical cytology sample collection and ensure sample integrity for optimal diagnostic results.
          </p>
        </div>
        <div className="flex-1">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/bzYKezOjx9I?si=2OHqtCZEhOYoiEpR"
              title="CerviAI Collection Kit Demo"
              className="w-full aspect-video rounded-xl border"
              allow="autoplay; encrypted-media"
            ></iframe>
            <span className="absolute top-2 right-2 inline-flex items-center bg-white bg-opacity-70 rounded px-2 py-1 text-xs font-semibold"><Video size={16} className="mr-1" />Collection Kit Demo</span>
          </div>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16 mb-6">
        <a
          href="https://www.youtube.com/@VyuhaaMed/videos"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-vyuhaa-50 hover:bg-vyuhaa-100 rounded-lg font-medium gap-2 transition"
        >
          <Youtube className="text-red-500" size={22} /> YouTube
        </a>
        <a
          href="https://www.linkedin.com/company/vyuhaa-med-data/?viewAsMember=true"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-vyuhaa-50 hover:bg-vyuhaa-100 rounded-lg font-medium gap-2 transition"
        >
          <Linkedin className="text-blue-700" size={22} /> LinkedIn
        </a>
        </div>
        {/* Removed <LogoCloud /> */}
      </div>
    </section>
    </main>
    <Footer />
  </div>
);

export default CerviAIPlatform;

