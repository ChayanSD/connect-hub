import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import WhatWeOffer from "@/components/WhatWeOffer";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Building2 } from "lucide-react";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border shadow-sm">
        
        <nav className="container mx-auto px-6">
          <div className="flex items-center justify-between">

            {/* LEFT — Logo appears when scrolled */}
            <div className="transition-all duration-300">
              {isScrolled && (
                <div className="flex items-center space-x-2 animate-in fade-in slide-in-from-bottom-4">
                  <Building2 className="w-7 h-7 text-accent" />
                  <span className="text-lg font-semibold">
                    Integrated Desk Services
                  </span>
                </div>
              )}
            </div>

            {/* RIGHT NAV */}
            <div className="hidden md:flex items-center">

              <a href="#who-we-are" className="relative text-white font-medium px-6 py-4 block group">
                <span className="absolute inset-0 bg-[#2F6E8E] -skew-x-12 transition-all duration-300 group-hover:bg-[#245669]" />
                <span className="relative z-10">Who We Are</span>
              </a>

              <a href="#what-we-offer" className="relative text-white font-medium px-6 py-4 block group">
                <span className="absolute inset-0 bg-[#D2C1A6] -skew-x-12 transition-all duration-300 group-hover:bg-[#bca98c]" />
                <span className="relative z-10">What We Offer</span>
              </a>

              <a href="#contact" className="relative text-white font-medium px-6 py-4 block group">
                <span className="absolute inset-0 bg-[#C44A30] -skew-x-12 transition-all duration-300 group-hover:bg-[#a33d28]" />
                <span className="relative z-10">Contact</span>
              </a>

              <Link to="/auth" className="ml-5">
                <Button variant="outline" size="sm">Admin Login</Button>
              </Link>

            </div>
          </div>
        </nav>

      </header>

      <main>
        <Hero />
        <WhoWeAre />
        <WhatWeOffer />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
