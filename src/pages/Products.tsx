
import AnimatedText from '../components/AnimatedText';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Microscope, Cpu, Syringe, TestTube, FlaskConical, Dna, ShieldCheck, Brain, ScanLine, Cog } from 'lucide-react';

const turnkeyFeatures = [
  {
    title: "LBC Collection Kits",
    description: "Liquid-based cytology collection kits for optimal sample preservation and transport.",
    icon: <Syringe className="text-red-500" size={22} />,
  },
  {
    title: "KCT-11 Cytology Processor",
    description: "Automatic LBC processor using cell sedimentation. Processes 6–12 specimens every 2 minutes. Formaldehyde & xylene-free.",
    icon: <Cog className="text-blue-500" size={22} />,
  },
  {
    title: "KCT-13 Cytology Processor (Vacuum)",
    description: "Vacuum-based automated cytology processor for high-quality, consistent thin-layer slide preparation.",
    icon: <Cog className="text-emerald-600" size={22} />,
  },
  {
    title: "KCT-16 Automated Cytology Processor",
    description: "Next-gen fully automated cytology processor with advanced centrifugation and reagent handling for high-throughput labs.",
    icon: <Cog className="text-violet-600" size={22} />,
  },
  {
    title: "Automated Slide Scanning Systems",
    description: "High-throughput whole slide imaging compatible with Hamamatsu, Grundium, and KFBio digital scanners.",
    icon: <ScanLine className="text-cyan-600" size={22} />,
  },
  {
    title: "CerviAI™ AI Platform",
    description: "AI-powered cervical cytology screening with EDGE and cloud deployment. Trained on 2,800+ cases.",
    icon: <Cpu className="text-vyuhaa-600" size={22} />,
  },
];

const additionalProducts = [
  {
    title: "Sequential Testing",
    description: "LBC screening and triaging with HPV DNA Testing for improved risk stratification and diagnosis.",
    icon: <TestTube className="text-vyuhaa-700" size={22} />,
  },
  {
    title: "Co-Testing (HPV DNA + LBC CerviAI)",
    description: "HPV DNA and LBC CerviAI run simultaneously for best screening outcomes.",
    icon: <TestTube className="text-vyuhaa-500" size={22} />,
  },
  {
    title: "HPV DNA Testing",
    description: "Integrated HPV DNA testing workflow with AI-based risk stratification.",
    icon: <Dna className="text-purple-500" size={22} />,
  },
  {
    title: "2nd Opinion (Cancer/Tumour/Biopsies)",
    description: "Rapid expert review for cancer, tumour and biopsy cases via our digital pathology platform.",
    icon: <FlaskConical className="text-vyuhaa-600" size={22} />,
  },
];

const kctSpecs = [
  { item: "Maximum Speed", value: "4000 R/MIN" },
  { item: "Production Speed", value: "6–12 specimens / 2 MIN" },
  { item: "Timing Range", value: "1 MIN – 99 MIN" },
  { item: "Noise Level", value: "< 55 dB" },
  { item: "Maximum Capacity", value: "12 × 18 ml" },
  { item: "Max Centrifugal Force", value: "4620 ×g" },
  { item: "Voltage / Frequency", value: "220V / 50Hz" },
  { item: "Power", value: "100W" },
  { item: "Dimensions", value: "330 × 375 × 250 mm" },
  { item: "Weight", value: "16 KGS" },
];

const Products = () => (
  <div className="flex flex-col min-h-screen overflow-hidden">
    <Navbar />
    <main>
      <section className="section-padding pt-32 bg-white">
        <div className="max-w-6xl mx-auto">

          {/* Hero */}
          <div className="text-center mb-16">
            <AnimatedText
              as="h1"
              text="Turnkey Solution for Cervical Cytology"
              className="text-3xl md:text-4xl font-bold mb-4"
            />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From sample collection to AI-assisted diagnosis — an end-to-end, integrated cervical cancer screening ecosystem.
            </p>
          </div>

          {/* CDSCO Registration */}
          <div className="bg-vyuhaa-50 border border-vyuhaa-200 rounded-xl p-6 mb-14 flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-4">
              <ShieldCheck className="text-green-600 shrink-0" size={40} />
              <div>
                <h3 className="font-bold text-lg mb-1">CDSCO Registered Medical Devices</h3>
                <p className="text-sm text-muted-foreground mb-2">Central Drugs Standard Control Organisation, Govt. of India</p>
                <div className="space-y-1 text-sm">
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <span className="font-semibold">VyuPath Nanozoom</span>
                    <span className="text-muted-foreground">Reg: VYUHAA-Visak-AP/M/MD/025086</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <span className="font-semibold">VyuPath CerviAI SaaS</span>
                    <span className="text-muted-foreground">Reg: VYUHAA-Visak-AP/M/MD/026294</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Turnkey Solution Grid */}
          <h2 className="text-2xl font-bold mb-6 text-center">Complete Screening Pipeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {turnkeyFeatures.map((f) => (
              <div key={f.title} className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-border">
                <div className="flex items-center mb-3">
                  <div className="p-3 bg-muted rounded-full mr-4">{f.icon}</div>
                  <h3 className="text-lg font-bold">{f.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{f.description}</p>
              </div>
            ))}
          </div>

          {/* KCT-11 Technical Specs */}
          <div className="bg-card rounded-xl shadow border border-border p-8 mb-16">
            <h2 className="text-2xl font-bold mb-2">KCT-11 Automatic LBC Cytology Processor</h2>
            <p className="text-muted-foreground mb-6">Cell automatic sedimentation method — formaldehyde and xylene free. Fully closed structure with cover plate locking for safe, reliable operation.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-semibold">Parameter</th>
                    <th className="text-left py-2 font-semibold">Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {kctSpecs.map((s) => (
                    <tr key={s.item} className="border-b border-border/50">
                      <td className="py-2 pr-4 text-muted-foreground">{s.item}</td>
                      <td className="py-2 font-medium">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Products */}
          <h2 className="text-2xl font-bold mb-6 text-center">Diagnostic Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {additionalProducts.map((p) => (
              <div key={p.title} className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-border">
                <div className="flex items-center mb-3">
                  <div className="p-3 bg-muted rounded-full mr-4">{p.icon}</div>
                  <h3 className="text-lg font-bold">{p.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{p.description}</p>
              </div>
            ))}
          </div>

          {/* NeurOMx Section */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-8 mb-16 border border-blue-100">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="text-blue-600" size={32} />
              <h2 className="text-2xl font-bold">NeurOMx — Authorised Importer</h2>
            </div>
            <p className="text-muted-foreground mb-4 max-w-3xl">
              NeurOMx innovatively <strong className="text-blue-600">reduces MRI scanning time from over 40 minutes</strong> to a significantly shorter duration. It helps diagnose neurodegenerative diseases more accurately by analyzing brain structure and function during MRI scans using AI-based SaMD (Software as a Medical Device).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 text-center border border-blue-100">
                <div className="font-semibold text-sm">Accurate tissue composition</div>
                <div className="text-xs text-muted-foreground">& volumetric measurement</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-blue-100">
                <div className="font-semibold text-sm">Precise brain health</div>
                <div className="text-xs text-muted-foreground">measurement</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-blue-100">
                <div className="font-semibold text-sm">Radiomics Heat Map</div>
                <div className="text-xs text-muted-foreground">advanced visualization</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Vyuhaa Med Data is the authorised importer of NeurOMx for India. 
              <a href="https://uspmax.imweb.me/95" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-1">Learn more about NeurOMx →</a>
            </p>
          </div>

          {/* CTA */}
          <div className="bg-vyuhaa-50 rounded-xl p-8 text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Get Started</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Interested in our turnkey screening solution, NeurOMx, or any of our diagnostic services? Reach out to us.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/partner-contact" className="button-primary">Request Pricing</a>
              <a href="mailto:admin@vyuhaadata.com" className="button-outline">Email Us</a>
            </div>
          </div>

        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Products;
