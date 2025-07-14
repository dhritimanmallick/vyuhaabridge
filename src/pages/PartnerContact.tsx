
import AnimatedText from '../components/AnimatedText';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Clock, Users, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PartnerContact = () => (
  <div className="flex flex-col min-h-screen overflow-hidden">
    <Navbar />
    <main>
      <section className="section-padding min-h-screen bg-gradient-to-br from-vyuhaa-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <AnimatedText 
              as="h1" 
              text="Partner & Contact" 
              className="text-4xl md:text-6xl font-bold mb-6 text-vyuhaa-900" 
            />
            <p className="text-xl text-vyuhaa-700 max-w-3xl mx-auto leading-relaxed">
              Ready to transform healthcare through AI? Connect with our team to explore partnership opportunities and learn how CerviAI can enhance your diagnostic capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information Cards */}
            <div className="space-y-6">
              <Card className="border-vyuhaa-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-vyuhaa-100 rounded-full">
                      <Mail className="text-vyuhaa-600" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-vyuhaa-900">Email Us</h3>
                      <p className="text-vyuhaa-600">Get in touch via email</p>
                    </div>
                  </div>
                  <a
                    href="mailto:admin@vyuhaadata.com"
                    className="text-lg font-semibold text-vyuhaa-700 hover:text-vyuhaa-900 transition-colors block p-3 bg-vyuhaa-50 rounded-lg hover:bg-vyuhaa-100"
                  >
                    admin@vyuhaadata.com
                  </a>
                </CardContent>
              </Card>

              <Card className="border-vyuhaa-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-vyuhaa-100 rounded-full">
                      <Phone className="text-vyuhaa-600" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-vyuhaa-900">Call Us</h3>
                      <p className="text-vyuhaa-600">Speak directly with our team</p>
                    </div>
                  </div>
                  <a
                    href="tel:+919840582365"
                    className="text-lg font-semibold text-vyuhaa-700 hover:text-vyuhaa-900 transition-colors block p-3 bg-vyuhaa-50 rounded-lg hover:bg-vyuhaa-100"
                  >
                    +91-9840582365
                  </a>
                </CardContent>
              </Card>

              <Card className="border-vyuhaa-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-vyuhaa-100 rounded-full">
                      <MapPin className="text-vyuhaa-600" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-vyuhaa-900">Visit Us</h3>
                      <p className="text-vyuhaa-600">Our headquarters location</p>
                    </div>
                  </div>
                  <div className="p-3 bg-vyuhaa-50 rounded-lg">
                    <p className="text-vyuhaa-700 font-medium">
                      Chennai, Tamil Nadu, India
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Partnership Information */}
            <div className="space-y-6">
              <Card className="border-vyuhaa-200 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-vyuhaa-100 rounded-full">
                      <Users className="text-vyuhaa-600" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-vyuhaa-900">Partnership Opportunities</h3>
                  </div>
                  <ul className="space-y-3 text-vyuhaa-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-vyuhaa-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Healthcare providers and diagnostic labs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-vyuhaa-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Technology integration partners</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-vyuhaa-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Research institutions and universities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-vyuhaa-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Global distributors and resellers</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-vyuhaa-200 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-vyuhaa-100 rounded-full">
                      <Clock className="text-vyuhaa-600" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-vyuhaa-900">Response Time</h3>
                  </div>
                  <p className="text-vyuhaa-700 mb-4">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                  <div className="bg-vyuhaa-50 p-4 rounded-lg">
                    <p className="text-sm text-vyuhaa-600">
                      <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-vyuhaa-200 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-vyuhaa-100 rounded-full">
                      <MessageCircle className="text-vyuhaa-600" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-vyuhaa-900">What to Include</h3>
                  </div>
                  <ul className="space-y-2 text-vyuhaa-700 text-sm">
                    <li>• Your organization details</li>
                    <li>• Type of partnership interest</li>
                    <li>• Current diagnostic volume</li>
                    <li>• Timeline and requirements</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center mt-16">
            <Card className="border-vyuhaa-200 shadow-lg bg-gradient-to-r from-vyuhaa-100 to-vyuhaa-50">
              <CardContent className="p-12">
                <h3 className="text-2xl font-bold text-vyuhaa-900 mb-4">
                  Ready to Transform Healthcare with AI?
                </h3>
                <p className="text-vyuhaa-700 mb-8 text-lg max-w-2xl mx-auto">
                  Join leading healthcare providers who trust CerviAI for accurate, efficient cervical cancer screening.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-vyuhaa-600 hover:bg-vyuhaa-700 text-white px-8 py-3"
                    onClick={() => window.location.href = 'mailto:admin@vyuhaadata.com?subject=Partnership Inquiry'}
                  >
                    Start Partnership Discussion
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-vyuhaa-600 text-vyuhaa-600 hover:bg-vyuhaa-50 px-8 py-3"
                    onClick={() => window.location.href = 'tel:+919840582365'}
                  >
                    Schedule a Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default PartnerContact;

