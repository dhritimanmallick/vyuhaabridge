import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CareersSection from "../components/landing/CareersSection";
import { useEffect } from "react";

const Careers = () => {
  useEffect(() => {
    document.title = "Careers | Vyuhaa Med Data";
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <main className="pt-28">
        <CareersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
