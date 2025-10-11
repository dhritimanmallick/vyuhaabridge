import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedText from "../components/AnimatedText";
import BlurImage from "../components/BlurImage";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Droplet, Microscope, Zap, TrendingUp, CheckCircle2 } from "lucide-react";
import microfluidicChip from "@/assets/microfluidic-chip-real.jpg";
import highSpeedCamera from "@/assets/high-speed-camera.jpg";
import imagingTechnology from "@/assets/imaging-technology.jpg";

const DropletDx = () => {
  useEffect(() => {
    document.title = "DropletDx | AI-Powered Microfluidic HPV Detection";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DropletDx combines AI-powered microfluidics with VyuPath imaging for revolutionary cervical cancer screening. Affordable, scalable, and faster HPV detection for developing economies.');
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="container mx-auto max-w-6xl text-center">
            <AnimatedText
              text="DropletDx"
              as="h1"
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            />
            <AnimatedText
              text="Redefining Cervical Cancer Screening with AI-Powered Microfluidics"
              as="h2"
              className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto"
              delay={100}
            />
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/partner-contact">Request Information</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/cerviai-platform">See Our Technology</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Problem & Market Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">The Challenge</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Over a billion women are at risk of cervical cancer in South Asia and Africa
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-red-500">
                      <CheckCircle2 size={20} />
                    </div>
                    <p className="text-gray-700">Lack of self-screening/testing methods</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-red-500">
                      <CheckCircle2 size={20} />
                    </div>
                    <p className="text-gray-700">Shortage of pathologists and high operational costs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-red-500">
                      <CheckCircle2 size={20} />
                    </div>
                    <p className="text-gray-700">Limited real-time analysis capabilities</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-red-500">
                      <CheckCircle2 size={20} />
                    </div>
                    <p className="text-gray-700">Low scalability for large-scale screening programs</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-100">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Market Opportunity</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-green-600">
                      <TrendingUp size={20} />
                    </div>
                    <p className="text-gray-700">WHO target of 70% screening by 2030</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-green-600">
                      <TrendingUp size={20} />
                    </div>
                    <p className="text-gray-700">HPV testing recommended for primary screening by WHO and IACR</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-green-600">
                      <TrendingUp size={20} />
                    </div>
                    <p className="text-gray-700">Current HPV tests are cost-prohibitive for developing economies</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-green-600">
                      <TrendingUp size={20} />
                    </div>
                    <p className="text-gray-700">Growing demand for affordable, efficient, and scalable diagnostic solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Solution</h2>
              <p className="text-xl text-gray-700">
                AI-powered microfluidic droplet technology for HPV Detection
              </p>
            </div>

            {/* Microfluidic Chip Image */}
            <div className="mb-12 rounded-xl overflow-hidden shadow-2xl">
              <BlurImage 
                src={microfluidicChip} 
                alt="Microfluidic chip with visible channels for droplet-based HPV detection"
                className="w-full h-auto"
              />
            </div>

            {/* Video Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">See Droplet Microfluidics in Action</h3>
              <div className="rounded-xl overflow-hidden shadow-2xl aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/EjyM8sNplm4"
                  title="Droplet-based Microfluidics Technology"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Key Innovations</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Droplet className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Small and Customized</h4>
                      <p className="text-gray-700">Efficient cervical cancer screening at scale</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Microscope className="text-purple-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Automated Processing</h4>
                      <p className="text-gray-700">High-precision sample processing with minimal manual intervention</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-pink-100 p-3 rounded-lg">
                      <Zap className="text-pink-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Faster Detection</h4>
                      <p className="text-gray-700">Integrated optics and AI for rapid diagnosis</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <TrendingUp className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Cost-Effective</h4>
                      <p className="text-gray-700">Affordable solution for developing economies</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Applications</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Cervical Cancer Detection</h4>
                    <p className="text-gray-700">Primary screening for HPV and precancerous lesions</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">High-Throughput Diagnostics</h4>
                    <p className="text-gray-700">Process thousands of samples efficiently</p>
                  </div>
                  <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Scalable Platform</h4>
                    <p className="text-gray-700">Expandable for multiple disease applications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Technology Integration
            </h2>
            <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
              Combining Microfluidics, High-Resolution Imaging on VyuPath, and AI-Powered Processing
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="h-48 overflow-hidden">
                  <BlurImage 
                    src={microfluidicChip} 
                    alt="Microfluidic droplet production for single-cell analysis"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">1</div>
                  <h3 className="text-xl font-bold mb-3">Droplet Production</h3>
                  <p className="text-gray-700">
                    Generates single-cell droplets for precise analysis
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="h-48 overflow-hidden">
                  <BlurImage 
                    src={imagingTechnology} 
                    alt="VyuPath high-resolution optical imaging system"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">2</div>
                  <h3 className="text-xl font-bold mb-3">Detection</h3>
                  <p className="text-gray-700">
                    High-resolution optical detection powered by VyuPath imaging systems
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="h-48 overflow-hidden">
                  <BlurImage 
                    src={highSpeedCamera} 
                    alt="High-speed camera for AI-powered image analysis"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block bg-pink-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">3</div>
                  <h3 className="text-xl font-bold mb-3">AI Processing</h3>
                  <p className="text-gray-700">
                    AI-driven image analysis and data interpretation for rapid diagnosis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market & GTM Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Global Diagnostic Market</h2>
              <p className="text-2xl font-bold text-blue-600">$100B+ Opportunity</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Target Segments</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-600" size={20} />
                    <p className="text-gray-700">Hospitals & Diagnostic Labs</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-600" size={20} />
                    <p className="text-gray-700">Research Institutions & Pharma</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-600" size={20} />
                    <p className="text-gray-700">Point-of-Care Testing Facilities</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Go-to-Market Strategy</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-1">Hardware Sales</h4>
                    <p className="text-gray-700">DropletDx devices for research labs and hospitals</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-1">Consumables</h4>
                    <p className="text-gray-700">Microfluidic cartridges and reagent kits</p>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-1">SaaS Model</h4>
                    <p className="text-gray-700">AI-powered diagnostics platform license fees</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Growth Trajectory</h3>
              <p className="text-lg text-gray-700">
                Expected sales of <span className="font-bold text-blue-600">1 million+ tests</span> within 3 years of FDA approval
              </p>
            </div>
          </div>
        </section>

        {/* Current State & CTA Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-6">Current State</h2>
              <div className="space-y-4 mb-8">
                <p className="text-lg">✓ Corporate operations and registrations completed</p>
                <p className="text-lg">✓ MVP is functional and operational for scaling</p>
                <p className="text-lg">✓ Regulatory filings initiated in India and United States</p>
              </div>
              <Button asChild size="lg" variant="secondary">
                <Link to="/partner-contact">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DropletDx;
