
import AnimatedText from '../components/AnimatedText';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Microscope, Cpu, Syringe, TestTube, FlaskConical, Dna, ShieldCheck, Brain, ScanLine, Cog, Layers, FileImage, ArrowRight, CheckCircle2, Zap, Shield, Beaker } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Globe, Settings, Wifi } from 'lucide-react';
import { useState } from 'react';

/* ─── Data ─── */

const kctProcessors = [
  {
    id: "kct-11",
    name: "KCT-11",
    tagline: "Automatic LBC Processor",
    method: "Cell Sedimentation",
    speed: "6–12 specimens / 2 min",
    highlight: "Multi-purpose centrifugation",
    image: "/lovable-uploads/kct-11-processor.png",
    features: [
      "Patented automatic preparation & reagent technology",
      "Eliminates mucus, red blood cells and cell debris",
      "Formaldehyde & xylene-free preservation liquid",
      "Filter device with absorbing mode — cell integrity preserved",
      "Simultaneous centrifugation & sample production",
      "Detects cancer, precancerous lesions, HPV, inflammation & more",
    ],
    specs: [
      { label: "Max Speed", value: "4,000 R/MIN" },
      { label: "Centrifugal Force", value: "2,800 kg" },
      { label: "Speed Accuracy", value: "±50 R/MIN" },
      { label: "Continuous Run", value: "> 8 hours" },
      { label: "Timing Range", value: "0–99 min" },
      { label: "Net Weight", value: "30 kg" },
    ],
  },
  {
    id: "kct-13",
    name: "KCT-13",
    tagline: "Dual-Filtration Processor",
    method: "Membrane + Sedimentation",
    speed: "Up to 240 slides/hour",
    highlight: "3rd-gen LCD touch screen",
    image: "/lovable-uploads/kct-13-processor.png",
    features: [
      "Double-layer filtration: mesh cloth + filter membrane",
      "Negative charge slides — no overlap, no blank sheets",
      "Integrated pressure, balance & photoelectric sensors",
      "Multi-specimen: cervical, sputum, effusion, urine & more",
      "1–4 slides per cycle, up to 240 slides/hour",
    ],
    specs: [
      { label: "Production", value: "240 slides/hr" },
      { label: "Per Cycle", value: "1–4 slides" },
      { label: "Power", value: "AC 220V ±10%" },
      { label: "Frequency", value: "50Hz ±1Hz" },
      { label: "Humidity", value: "30%–80%" },
    ],
  },
  {
    id: "kct-16",
    name: "KCT-16",
    tagline: "Integrated Production & Staining",
    method: "Natural Sedimentation",
    speed: "24 slides / 30 min",
    highlight: "Zero-pipeline architecture",
    image: "/lovable-uploads/kct-16-processor.png",
    features: [
      "Natural cell sedimentation — even distribution without overlap",
      "Production & staining integrated in one system",
      "Formaldehyde & xylene free, eco-safe reagents",
      "No dye pipelines, no pumps — eliminates cross-contamination",
      "Cell preservation bottle doubles as centrifuge tube",
      "Single-drop staining — bright, clear cell structure",
      "Static table prevents deformation during tiling",
      "Automatic waste liquid disposal",
    ],
    specs: [
      { label: "Batch Size", value: "24 slides" },
      { label: "Cycle Time", value: "~30 min" },
      { label: "Staining", value: "Integrated" },
      { label: "Pipelines", value: "None (zero)" },
    ],
  },
];

const slidesProducts = [
  {
    name: "BNA01",
    title: "Positive Charged Slides",
    description: "Color-Frosted(+) glass with permanent positive charge. Attracts frozen tissue sections and cytology preparations.",
    size: "25.4 × 76.2mm",
    pack: "50/72 pcs",
  },
  {
    name: "BNA02",
    title: "Silane Slides",
    description: "Silane-coated for enhanced adhesion of histological and plastic sections. Ground edges, 90°/45° corners.",
    size: "25.4 × 76.2mm",
    pack: "50/72 pcs",
  },
  {
    name: "BNA03",
    title: "Polysine Slides",
    description: "Premium pre-coated Polysine for improved tissue adhesion. Ideal for histopathology workflows.",
    size: "25.4 × 76.2mm",
    pack: "50/72 pcs",
  },
];

const diagnosticServices = [
  {
    title: "Sequential Testing",
    description: "LBC screening with HPV DNA triaging for improved risk stratification.",
    icon: <TestTube size={24} />,
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  {
    title: "Co-Testing",
    description: "HPV DNA + LBC CerviAI run simultaneously for best screening outcomes.",
    icon: <TestTube size={24} />,
    color: "bg-sky-50 text-sky-600 border-sky-100",
  },
  {
    title: "HPV DNA Testing",
    description: "Integrated HPV DNA testing workflow with AI-based risk stratification.",
    icon: <Dna size={24} />,
    color: "bg-violet-50 text-violet-600 border-violet-100",
  },
  {
    title: "Self-Testing HPV & PCR",
    description: "At-home self-collection kits with lab-grade accuracy for accessible screening.",
    icon: <Syringe size={24} />,
    color: "bg-amber-50 text-amber-600 border-amber-100",
  },
  {
    title: "2nd Opinion Service",
    description: "Rapid expert review for cancer, tumour & biopsy cases via digital pathology.",
    icon: <FlaskConical size={24} />,
    color: "bg-rose-50 text-rose-600 border-rose-100",
  },
];

/* ─── Component ─── */

const Products = () => {
  const [activeProcessor, setActiveProcessor] = useState(0);
  const proc = kctProcessors[activeProcessor];

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <main>

        {/* ━━━ HERO ━━━ */}
        <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-vyuhaa-950 via-vyuhaa-900 to-vyuhaa-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 40%)' }} />
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-1.5 rounded-full text-sm mb-6 border border-white/10">
              <ShieldCheck size={14} />
              <span>CDSCO Registered Medical Devices</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Turnkey Cervical<br />Cytology Platform
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10">
              From sample collection to AI-assisted diagnosis — a complete, integrated cervical cancer screening ecosystem.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/partner-contact" className="bg-white text-vyuhaa-900 font-semibold px-8 py-3 rounded-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl">
                Request Pricing
              </Link>
              <a href="#processors" className="border border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all">
                View Products ↓
              </a>
            </div>
          </div>
        </section>

        {/* ━━━ CDSCO BANNER ━━━ */}
        <section className="bg-vyuhaa-50 border-b border-vyuhaa-100">
          <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-emerald-600 shrink-0" size={20} />
              <div>
                <span className="font-semibold">VyuPath Nanozoom</span>
                <span className="text-muted-foreground ml-2">VYUHAA-Visak-AP/M/MD/025086</span>
              </div>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-emerald-600 shrink-0" size={20} />
              <div>
                <span className="font-semibold">VyuPath CerviAI SaaS</span>
                <span className="text-muted-foreground ml-2">VYUHAA-Visak-AP/M/MD/026294</span>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ COLLECTION KITS ━━━ */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-vyuhaa-500 mb-2 block">Sample Collection</span>
              <h2 className="text-3xl md:text-4xl font-bold">Collection Kits</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* LBC Kit */}
              <div className="group rounded-2xl border border-border bg-card p-8 hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-rose-50 text-rose-500"><Syringe size={22} /></div>
                  <h3 className="text-xl font-bold">CerviAI Cytology Collection Kit</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-5">Complete liquid-based cytology kit for optimal sample preservation and transport.</p>
                <ul className="space-y-2 text-sm mb-6">
                  {["2× Cell Preservative Solution (15ml)", "2× Cytology Brushes / Swabs", "Patient identification labels", "NABL Accredited lab processing"].map(item => (
                    <li key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <img src="/lovable-uploads/cerviai-cytology-collection-kit.png" alt="CerviAI Cytology Collection Kit" className="rounded-xl w-full max-h-56 object-contain" />
              </div>

              {/* HPV Self-Test Kit */}
              <div className="group rounded-2xl border border-border bg-card p-8 hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-amber-50 text-amber-500"><Syringe size={22} /></div>
                  <h3 className="text-xl font-bold">Self-Testing HPV & PCR Kit</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-5">At-home self-collection with lab-grade HPV and PCR detection accuracy.</p>
                <ul className="space-y-2 text-sm mb-6">
                  {["Specimen collection swabs for self-sampling", "Transport tubes with preservative solution", "Patient identification labels", "Lab-grade PCR analysis for HPV detection"].map(item => (
                    <li key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <img src="/lovable-uploads/hpv-self-testing-kit.png" alt="HPV Self-Testing Kit" className="rounded-xl w-full max-h-56 object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ KCT PROCESSORS ━━━ */}
        <section id="processors" className="section-padding bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-vyuhaa-500 mb-2 block">Liquid-Based Cytology</span>
              <h2 className="text-3xl md:text-4xl font-bold">KCT Processor Series</h2>
              <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Three processor models engineered for different throughput needs — all formaldehyde & xylene free.</p>
            </div>

            {/* Processor Tabs */}
            <div className="flex justify-center gap-3 mb-10">
              {kctProcessors.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setActiveProcessor(i)}
                  className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border ${
                    activeProcessor === i
                      ? "bg-vyuhaa-600 text-white border-vyuhaa-600 shadow-lg shadow-vyuhaa-600/20"
                      : "bg-card text-muted-foreground border-border hover:border-vyuhaa-300 hover:text-foreground"
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>

            {/* Active Processor Detail */}
            <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left — Image + Stats */}
                <div className="bg-gradient-to-br from-vyuhaa-50 to-muted p-8 lg:p-12 flex flex-col">
                  <div className="flex-1 flex items-center justify-center mb-8">
                    <img
                      src={proc.image}
                      alt={`${proc.name} Cytology Processor`}
                      className="max-h-72 object-contain drop-shadow-lg"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/80 backdrop-blur rounded-xl p-3 text-center border border-border">
                      <div className="text-xs text-muted-foreground mb-1">Method</div>
                      <div className="text-xs font-bold leading-tight">{proc.method}</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur rounded-xl p-3 text-center border border-border">
                      <div className="text-xs text-muted-foreground mb-1">Speed</div>
                      <div className="text-xs font-bold leading-tight">{proc.speed}</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur rounded-xl p-3 text-center border border-border">
                      <div className="text-xs text-muted-foreground mb-1">Highlight</div>
                      <div className="text-xs font-bold leading-tight">{proc.highlight}</div>
                    </div>
                  </div>
                </div>

                {/* Right — Info */}
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold mb-1">{proc.name}</h3>
                  <p className="text-muted-foreground mb-6">{proc.tagline}</p>

                  <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Key Features</h4>
                  <ul className="space-y-2.5 mb-8">
                    {proc.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 size={15} className="text-vyuhaa-500 shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Specifications</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {proc.specs.map((s) => (
                      <div key={s.label} className="bg-muted/50 rounded-lg px-3 py-2">
                        <div className="text-[11px] text-muted-foreground">{s.label}</div>
                        <div className="text-sm font-semibold">{s.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ VYUPATH OPENFLEXURE ━━━ */}
        <section className="section-padding bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-2 block">Open-Source Microscopy</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">VyuPath Openflexure</h2>
                <p className="text-muted-foreground mb-8">
                  Motorised motion and software control enable automated sample scanning and scripted, repeatable custom experiments.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-orange-100 text-orange-600 shrink-0"><Settings size={22} /></div>
                    <div>
                      <h4 className="font-bold mb-1">Take Complete Control</h4>
                      <p className="text-sm text-muted-foreground">Full motorised automation with scripted experiments and repeatable scanning workflows.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-amber-100 text-amber-600 shrink-0"><Cpu size={22} /></div>
                    <div>
                      <h4 className="font-bold mb-1">Customisable</h4>
                      <p className="text-sm text-muted-foreground">Extend functionality with modular hardware, software plugins, and community-developed extensions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-600 shrink-0"><Globe size={22} /></div>
                    <div>
                      <h4 className="font-bold mb-1">Accessible</h4>
                      <p className="text-sm text-muted-foreground">An open and affordable microscope platform, built and used in laboratories and field settings in over 60 countries worldwide.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-100/50 to-amber-100/50 rounded-3xl blur-2xl" />
                <img src="/lovable-uploads/openflexure-setup.jpg" alt="VyuPath Openflexure Microscope in action with cell imaging" className="relative rounded-2xl shadow-lg w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ SLIDE SCANNING ━━━ */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-cyan-500 mb-2 block">Digital Imaging</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Automated Slide Scanning</h2>
                <p className="text-muted-foreground mb-6">
                  High-throughput whole slide imaging compatible with Hamamatsu, Grundium, and KFBio digital scanners. Seamless integration into the VyuPath CerviAI diagnostic pipeline.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Hamamatsu", "Grundium", "KFBio"].map(s => (
                    <span key={s} className="px-4 py-2 rounded-lg bg-cyan-50 text-cyan-700 text-sm font-medium border border-cyan-100">{s}</span>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-cyan-100/50 to-vyuhaa-100/50 rounded-3xl blur-2xl" />
                <img src="/lovable-uploads/vyupath-edge-device.png" alt="VyuPath Slide Scanner" className="relative rounded-2xl shadow-lg w-full object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ CerviAI PLATFORM ━━━ */}
        <section className="section-padding bg-gradient-to-b from-vyuhaa-950 to-vyuhaa-800 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-vyuhaa-300 mb-2 block">AI-Powered Diagnostics</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">CerviAI SaaS — Digital Pathology LIMS</h2>
                <p className="text-white/70 mb-8">
                  Cloud-native Laboratory Information Management System powering the complete diagnostic workflow — from sample accession to AI-assisted reporting.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  {["Sample Accession", "Case Management", "AI Screening", "Pathologist Review", "Report Generation", "Role-Based Access"].map(feature => (
                    <div key={feature} className="bg-white/10 backdrop-blur rounded-lg p-3 text-center border border-white/10">
                      <div className="text-xs font-medium text-white/90">{feature}</div>
                    </div>
                  ))}
                </div>
                <a
                  href="https://vyupath.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-vyuhaa-900 font-semibold px-6 py-2.5 rounded-lg hover:bg-white/90 transition-all"
                >
                  Visit VyuPath Platform <ArrowRight size={16} />
                </a>
              </div>
              <div className="flex justify-center">
                <img
                  src="/lovable-uploads/vyupath-lims-screenshot.png"
                  alt="VyuPath CerviAI LIMS Platform"
                  className="rounded-2xl shadow-2xl border border-white/10 w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ SLIDES & HISTOPATHOLOGY ━━━ */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-2 block">BENOYlab® Adhesive Slides</span>
              <h2 className="text-3xl md:text-4xl font-bold">Microscope Slides & Histopathology</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-4">
                {slidesProducts.map(s => (
                  <div key={s.name} className="group rounded-xl border border-border p-5 hover:shadow-md transition-all bg-card">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold bg-vyuhaa-100 text-vyuhaa-700 px-2.5 py-1 rounded-md">{s.name}</span>
                        <h4 className="font-semibold">{s.title}</h4>
                      </div>
                      <span className="text-xs text-muted-foreground">{s.pack}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{s.description}</p>
                  </div>
                ))}
              </div>
              <div>
                <img
                  src="/lovable-uploads/adhesive-microscope-slides.png"
                  alt="BENOYlab Adhesive Microscope Slides"
                  className="rounded-2xl shadow-lg w-full object-contain"
                />
              </div>
            </div>

            {/* Pipeline steps */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-100">
              <h3 className="font-bold text-lg mb-6 text-center">Full-Stack Digital Pathology Pipeline</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { step: "1", title: "Collection Kits", icon: <Syringe size={20} /> },
                  { step: "2", title: "Adhesive Slides", icon: <Layers size={20} /> },
                  { step: "3", title: "Slide Scanning", icon: <ScanLine size={20} /> },
                  { step: "4", title: "AI Diagnostics", icon: <Cpu size={20} /> },
                ].map(s => (
                  <div key={s.step} className="bg-white rounded-xl p-5 text-center border border-teal-100 hover:shadow-md transition-all">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-100 text-teal-700 mb-3">{s.icon}</div>
                    <div className="text-sm font-semibold">{s.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ DIAGNOSTIC SERVICES ━━━ */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-vyuhaa-500 mb-2 block">Testing & Services</span>
              <h2 className="text-3xl md:text-4xl font-bold">Diagnostic Services</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {diagnosticServices.map(s => (
                <div key={s.title} className={`rounded-2xl border p-6 hover:shadow-lg transition-all duration-300 ${s.color}`}>
                  <div className="mb-4">{s.icon}</div>
                  <h3 className="font-bold text-base mb-2 text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ NeurOMx ━━━ */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-blue-900 text-white p-8 md:p-12 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-medium mb-4 border border-white/10">
                  <Brain size={14} /> Authorised Importer
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">NeurOMx</h2>
                <p className="text-white/70 mb-8 text-lg">
                  Innovatively <strong className="text-blue-300">reduces MRI scanning time from 40+ minutes</strong> to significantly shorter duration. AI-based SaMD for diagnosing neurodegenerative diseases.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {[
                    { title: "Tissue Composition", sub: "Volumetric measurement" },
                    { title: "Brain Health", sub: "Precise measurement" },
                    { title: "Radiomics Heat Map", sub: "Advanced visualization" },
                  ].map(c => (
                    <div key={c.title} className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10">
                      <div className="font-semibold text-sm mb-1">{c.title}</div>
                      <div className="text-xs text-white/60">{c.sub}</div>
                    </div>
                  ))}
                </div>
                <a href="https://uspmax.imweb.me/95" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 font-semibold text-sm transition-colors">
                  Learn more about NeurOMx <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ CTA ━━━ */}
        <section className="section-padding bg-vyuhaa-600">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-white/70 mb-8 text-lg">
              Interested in our turnkey screening solution, NeurOMx, or any diagnostic services? Let's talk.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/partner-contact" className="bg-white text-vyuhaa-700 font-semibold px-8 py-3 rounded-lg hover:bg-white/90 transition-all shadow-lg">
                Request Pricing
              </Link>
              <a href="mailto:admin@vyuhaadata.com" className="border border-white/40 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all">
                Email Us
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Products;
