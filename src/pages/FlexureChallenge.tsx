import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Mail, Calendar, Award, Target, Lightbulb, FileText, Settings, Clock, Users, Zap } from 'lucide-react';
import engineeringBackground from '@/assets/engineering-background.jpg';
import flexureMechanism from '@/assets/flexure-mechanism.jpg';
import studentsEngineering from '@/assets/students-engineering.jpg';

const FlexureChallenge = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <main>
        {/* Hero Section with Background */}
        <section 
          className="section-padding pt-32 min-h-screen relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${engineeringBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            
            {/* Header */}
            <div className="text-center mb-8">
              <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 text-white rounded-2xl p-8 mb-8 shadow-2xl">
                <div className="text-lg font-semibold opacity-90 mb-2 flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5" />
                  VYUHAA
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-3 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  SINGLE-AXIS FLEXURE<br />DESIGN CHALLENGE
                </h1>
                <p className="text-lg opacity-90 font-medium">Precision Z-Axis Positioning Stage Design</p>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-6 rounded-xl mb-8 font-bold text-xl shadow-xl transform hover:scale-105 transition-transform">
                <Award className="inline-block w-6 h-6 mr-3" />
                ₹25,000 Prize + Industry Recognition
                <div className="text-sm font-normal mt-2 opacity-90">
                  Open to all engineering students • Teams of 2-4 members
                </div>
              </div>

              {/* Students Illustration */}
              <div className="mb-8">
                <img 
                  src={studentsEngineering} 
                  alt="Engineering students collaborating on design projects" 
                  className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl border border-white/20"
                />
              </div>
            </div>

            {/* Challenge Description */}
            <Card className="mb-8 border-2 border-white/30 bg-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center justify-center gap-3">
                    <Target className="w-6 h-6" />
                    Design Challenge
                  </h2>
                  
                  {/* Flexure Mechanism Illustration */}
                  <div className="mb-6">
                    <img 
                      src={flexureMechanism} 
                      alt="Precision flexure mechanism for Z-axis positioning" 
                      className="w-full max-w-lg mx-auto rounded-xl shadow-lg border border-white/20"
                    />
                  </div>
                  
                  <p className="text-white/90 mb-6 leading-relaxed text-lg">
                    Design a flexure-based Z-axis positioning stage achieving sub-micron precision 
                    for semiconductor and aerospace applications.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Badge className="bg-yellow-500/20 text-yellow-200 border-yellow-400/50 px-6 py-3 font-semibold text-sm">
                      Focus: Single Z-Axis Translation Movement
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/50 px-6 py-3 font-semibold text-sm">
                      <Users className="w-4 h-4 mr-2" />
                      Collaborative Team Project
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Target Specifications */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-white">
                <Settings className="w-6 h-6" />
                Target Specifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-l-4 border-l-yellow-400 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
                  <CardContent className="p-6">
                    <div className="text-xs text-yellow-200 font-medium uppercase tracking-wide mb-2">
                      Positioning Accuracy
                    </div>
                    <div className="text-2xl font-bold text-white">≤ 0.01 μm</div>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-blue-400 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
                  <CardContent className="p-6">
                    <div className="text-xs text-blue-200 font-medium uppercase tracking-wide mb-2">
                      Repeatability
                    </div>
                    <div className="text-2xl font-bold text-white">≤ 0.1 μm (3σ)</div>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-green-400 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
                  <CardContent className="p-6">
                    <div className="text-xs text-green-200 font-medium uppercase tracking-wide mb-2">
                      Travel Range
                    </div>
                    <div className="text-2xl font-bold text-white">≥ 2 mm</div>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-purple-400 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
                  <CardContent className="p-6">
                    <div className="text-xs text-purple-200 font-medium uppercase tracking-wide mb-2">
                      Resolution
                    </div>
                    <div className="text-2xl font-bold text-white">≤ 20 nm</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Flexure Design Options */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                Flexure Design Options
              </h3>
              <Card className="border border-sky-200 bg-sky-50/50">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-3 rounded border border-sky-200 text-center">
                      <div className="font-semibold text-sm text-sky-900 mb-1">Blade Flexure</div>
                      <div className="text-xs text-sky-700">Most common, good for long stroke, low compression</div>
                    </div>
                    <div className="bg-white p-3 rounded border border-sky-200 text-center">
                      <div className="font-semibold text-sm text-sky-900 mb-1">Notch Flexure</div>
                      <div className="text-xs text-sky-700">Higher buckling load, constrains 5 DoF</div>
                    </div>
                    <div className="bg-white p-3 rounded border border-sky-200 text-center">
                      <div className="font-semibold text-sm text-sky-900 mb-1">Parallel Blades</div>
                      <div className="text-xs text-sky-700">Increased force capability, precise motion</div>
                    </div>
                    <div className="bg-white p-3 rounded border border-sky-200 text-center">
                      <div className="font-semibold text-sm text-sky-900 mb-1">Series Configuration</div>
                      <div className="text-xs text-sky-700">Compact envelope, increased stroke</div>
                    </div>
                  </div>
                  <div className="bg-slate-100 p-3 rounded border text-center text-xs font-mono text-slate-700">
                    <div>Stiffness: K = (E·b·t³)/(4·l³)</div>
                    <div className="text-xs mt-1">Where: E=Young's modulus, b=width, t=thickness, l=length</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Key Design Considerations */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Key Design Considerations
              </h3>
              <Card className="border border-amber-200 bg-amber-50/50">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-sm text-amber-900">
                      <span className="text-amber-600 font-bold mt-0.5">•</span>
                      <span>Material selection: Ti-6Al-4V recommended for strength/weight ratio</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-amber-900">
                      <span className="text-amber-600 font-bold mt-0.5">•</span>
                      <span>Stress concentrations: Use generous fillets at flexure roots</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-amber-900">
                      <span className="text-amber-600 font-bold mt-0.5">•</span>
                      <span>Manufacturing: Wire EDM for precision, consider recast layer removal</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-amber-900">
                      <span className="text-amber-600 font-bold mt-0.5">•</span>
                      <span>Fatigue life: Keep stress below 20% of yield strength for infinite life</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-amber-900">
                      <span className="text-amber-600 font-bold mt-0.5">•</span>
                      <span>Buckling prevention: Ensure proper load line alignment</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Phase 1: Initial Proposal */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Phase 1: Initial Proposal (Week 1-2)
              </h3>
              <Card className="border border-green-200 bg-green-50/50">
                <CardContent className="p-6">
                  <div className="bg-destructive text-white p-3 rounded text-center font-bold text-sm mb-4">
                    Submission Deadline: 30th September 2025
                  </div>
                  <div className="bg-sky-100 p-3 rounded text-sm text-sky-800 mb-4">
                    <strong>Submission Instructions:</strong> Email your 4-page proposal document to{" "}
                    <span className="font-semibold">admin@vyuhaadata.com</span> with the subject line:{" "}
                    <span className="font-semibold">"Flexure Design Competition"</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-sm text-green-900">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Executive Summary (0.5 page): Design approach & innovation</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-green-900">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Literature Review (1 page): 8-10 technical references</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-green-900">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Conceptual Design (1.5 pages): CAD concepts & rationale</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-green-900">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Project Plan (0.5 page): Timeline & work distribution</span>
                    </div>
                  </div>
                  <div className="bg-slate-100 p-3 rounded mt-4 text-xs text-slate-700">
                    <strong>Total:</strong> 3-4 page proposal document
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Phase 2: Final Submission */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Phase 2: Final Submission (For Shortlisted Teams)
              </h3>
              <Card className="border border-green-200 bg-green-50/50">
                <CardContent className="p-6">
                  <div className="bg-destructive text-white p-3 rounded text-center font-bold text-sm mb-4">
                    Final Submission Deadline: 30th October 2025
                  </div>
                  <div className="bg-amber-100 p-3 rounded text-xs text-amber-800 text-center mb-4">
                    <strong>Note:</strong> Only shortlisted participants from Phase 1 advance to this stage
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-sm text-green-900">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Complete 3D CAD Assembly (SolidWorks/Inventor/Fusion 360)</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-green-900">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>2D Technical Drawings with GD&T annotations</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-green-900">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>FEA Analysis: Stress, modal, sensitivity studies</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-green-900">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Technical Report (15-20 pages) with proper citations</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-green-900">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>PowerPoint Presentation & CAD demonstration</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Competition Timeline */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Competition Timeline
              </h3>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Badge className="bg-primary text-white min-w-[80px] text-center text-xs">Week 1-2</Badge>
                      <span className="text-muted-foreground font-medium">Initial proposal submission (3-4 pages)</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Badge className="bg-primary text-white min-w-[80px] text-center text-xs">Week 3-5</Badge>
                      <span className="text-muted-foreground font-medium">Detailed design development and analysis</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Badge className="bg-primary text-white min-w-[80px] text-center text-xs">Week 6</Badge>
                      <span className="text-muted-foreground font-medium">Final submission and presentation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Section */}
            <Card className="text-center">
              <CardContent className="p-8">
                <Button asChild className="mb-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                  <a href="mailto:admin@vyuhaadata.com" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    SUBMIT YOUR DESIGN
                  </a>
                </Button>
                
                <div className="text-sm mb-3">
                  <strong>Contact:</strong> <span className="text-primary font-semibold">admin@vyuhaadata.com</span>
                </div>
                <div className="text-xs text-muted-foreground leading-relaxed">
                  Teams of 2-4 students • All engineering disciplines welcome<br />
                  <strong>Complete mentorship and technical support provided</strong>
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Additional Sections with White Background */}
        <section className="section-padding bg-gradient-to-br from-background to-primary/5">
          <div className="max-w-4xl mx-auto">
            
            {/* Why Participate Section */}
            <Card className="mb-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-white shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-6 text-primary flex items-center justify-center gap-3">
                  <Lightbulb className="w-6 h-6" />
                  Why Participate?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors">
                    <Award className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                    <h4 className="font-bold text-primary mb-2">Industry Recognition</h4>
                    <p className="text-sm text-muted-foreground">Get noticed by precision engineering companies</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors">
                    <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-bold text-primary mb-2">Team Collaboration</h4>
                    <p className="text-sm text-muted-foreground">Work with talented peers on real-world challenges</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors">
                    <Target className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h4 className="font-bold text-primary mb-2">Skill Development</h4>
                    <p className="text-sm text-muted-foreground">Master precision engineering and CAD design</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FlexureChallenge;