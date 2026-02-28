
import AnimatedText from '../components/AnimatedText';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Microscope, Cpu, Syringe, TestTube, FlaskConical, Dna, ShieldCheck, Brain, ScanLine, Cog, Layers, FileImage } from 'lucide-react';

const turnkeyFeatures = [
  {
    title: "LBC Collection Kits",
    description: "Liquid-based cytology collection kits for optimal sample preservation and transport. Includes 2× cell preservative solution (15ml) and 2× cytology brushes.",
    icon: <Syringe className="text-red-500" size={22} />,
    image: "/lovable-uploads/cytology-collection-kit.jpeg",
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

const slidesProducts = [
  {
    title: "Positive Charged Slides (BNA01)",
    description: "Color-Frosted(+) glass slides with permanent positive charge. Electrostatically attract frozen tissue sections and cytology preparations. 25.4 × 76.2mm, 1.0–1.2mm thick.",
    pack: "50/72 pcs",
  },
  {
    title: "Silane Slides (BNA02)",
    description: "Prepared with Silane to enhance adhesion of histological and plastic sections to microscope slide. Ground edges, 90°/45° corners.",
    pack: "50/72 pcs",
  },
  {
    title: "Polysine Slides (BNA03)",
    description: "Premium glass slides with frosted end, pre-coated with Polysine for improved tissue adhesion. Ideal for histopathology workflows.",
    pack: "50/72 pcs",
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
    title: "Self-Testing HPV & PCR",
    description: "Pioneering self-testing HPV and PCR kits for cervical cancer screening — enabling accessible, at-home sample collection with lab-grade accuracy.",
    icon: <Syringe className="text-orange-500" size={22} />,
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

          {/* Collection Kit Showcase */}
          <div className="bg-card rounded-xl shadow border border-border p-8 mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Syringe className="text-red-500" size={28} />
              <h2 className="text-2xl font-bold">CerviAI Cytology Collection Kits</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-muted-foreground mb-4">
                  Complete liquid-based cytology collection kits for optimal sample preservation and transport. Each kit contains:
                </p>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-start gap-2"><span className="text-vyuhaa-600 font-bold">•</span> 2× Cell Preservative Solution (15ml)</li>
                  <li className="flex items-start gap-2"><span className="text-vyuhaa-600 font-bold">•</span> 2× Cytology Brushes / Specimen Collection Swabs</li>
                  <li className="flex items-start gap-2"><span className="text-vyuhaa-600 font-bold">•</span> Patient identification labels (BED, REF, DATE, HOUR)</li>
                  <li className="flex items-start gap-2"><span className="text-vyuhaa-600 font-bold">•</span> Lab processing by CPath Laboratories (NABL Accredited)</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/cerviai-cytology-collection-kit.png" 
                  alt="CerviAI Cytology Collection Kit - Complete Cytology System for Gynaecologists" 
                  className="rounded-xl shadow-md max-h-72 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Self-Testing HPV & PCR Kits */}
          <div className="bg-card rounded-xl shadow border border-border p-8 mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Syringe className="text-orange-500" size={28} />
              <h2 className="text-2xl font-bold">Self-Testing HPV & PCR Kits</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-muted-foreground mb-4">
                  Pioneering self-collection HPV and PCR kits for cervical cancer screening — enabling accessible, at-home sample collection with lab-grade accuracy.
                </p>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-start gap-2"><span className="text-vyuhaa-600 font-bold">•</span> Specimen collection swabs for self-sampling</li>
                  <li className="flex items-start gap-2"><span className="text-vyuhaa-600 font-bold">•</span> Transport tubes with preservative solution</li>
                  <li className="flex items-start gap-2"><span className="text-vyuhaa-600 font-bold">•</span> Patient identification labels (BED, REF, DATE, HOUR)</li>
                  <li className="flex items-start gap-2"><span className="text-vyuhaa-600 font-bold">•</span> Lab-grade PCR analysis for HPV detection</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <img
                  src="/lovable-uploads/hpv-self-testing-kit.png"
                  alt="CerviAI HPV Self-Testing Kit with swab and transport tube"
                  className="rounded-xl shadow-md max-h-72 object-contain"
                />
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

          {/* Adhesive Microscope Slides & Histopathology */}
          <div className="bg-card rounded-xl shadow border border-border p-8 mb-16">
            <div className="flex items-center gap-3 mb-2">
              <Layers className="text-teal-600" size={28} />
              <h2 className="text-2xl font-bold">Slides & Histopathology</h2>
            </div>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              From adhesive microscope slides to full-stack digital pathology with AI — we offer the complete histopathology workflow, starting from kits to AI-enabled diagnostic systems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Adhesive Microscope Slides</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  BENOYlab® adhesive microscope slides, packaged in high quality plastic boxes and double cellophane wrapped to protect against moisture and foreign particles.
                </p>
                <div className="space-y-4">
                  {slidesProducts.map((s) => (
                    <div key={s.title} className="bg-muted/50 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-sm">{s.title}</h4>
                        <span className="text-xs bg-vyuhaa-100 text-vyuhaa-700 px-2 py-0.5 rounded">{s.pack}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{s.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src="/lovable-uploads/adhesive-microscope-slides.png"
                  alt="Adhesive Microscope Slides - Positive Charged, Silane, Polysine"
                  className="rounded-lg shadow-md w-full object-contain bg-white"
                />
              </div>
            </div>

            {/* Full-Stack Digital Pathology */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <FileImage className="text-teal-600" size={20} />
                Full-Stack Digital Pathology with AI
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our end-to-end histopathology pipeline covers every step — from specimen collection kits and high-quality adhesive slides, through automated slide scanning and whole-slide imaging, to AI-powered analysis and reporting.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {["Collection Kits", "Adhesive Slides", "Slide Scanning", "AI Diagnostics"].map((step, i) => (
                  <div key={step} className="bg-white rounded-lg p-3 text-center border border-teal-100">
                    <div className="text-lg font-bold text-teal-600 mb-1">{i + 1}</div>
                    <div className="text-xs font-medium">{step}</div>
                  </div>
                ))}
              </div>
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
