import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import WhatWeOffer from "@/components/WhatWeOffer";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Building2, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

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
        
        <nav className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">

            {/* LEFT — Logo appears when scrolled */}
            <div className="transition-all duration-300">
              {isScrolled && (
                <div className="flex items-center space-x-2 animate-in fade-in slide-in-from-bottom-4">
                  <Building2 className="w-7 h-7 text-accent" />
                  <div className="flex flex-col">
                      <span className="text-lg font-bold text-gray-900">Fargo Space</span>
                      <span className="text-xs text-gray-500">Integrated Desk Services</span>
                    </div>
                </div>
              )}
            </div>

            <div className="hidden md:flex items-center space-x-2 my-4">
              <a href="#who-we-are" className="px-5 py-2 text-sm font-medium text-gray-700 hover:text-[#2F6E8E] transition-colors relative group">
                Who We Are
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2F6E8E] transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a href="#what-we-offer" className="px-5 py-2 text-sm font-medium text-gray-700 hover:text-[#2F6E8E] transition-colors relative group">
                What We Offer
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2F6E8E] transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a href="#contact" className="px-5 py-2 text-sm font-medium text-gray-700 hover:text-[#2F6E8E] transition-colors relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2F6E8E] transition-all duration-300 group-hover:w-full"></span>
              </a>

              <Link to="/auth" className="ml-4">
                <Button 
                  className="bg-[#2F6E8E] hover:bg-[#245669] text-white shadow-md hover:shadow-lg transition-all duration-200"
                  size="sm"
                >
                  Admin Login
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                  <div className="flex items-center space-x-2 mb-8 pb-4 border-b">
                    <Building2 className="w-7 h-7 text-accent" />
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-gray-900">Fargo Space</span>
                      <span className="text-xs text-gray-500">Integrated Desk Services</span>
                    </div>
                  </div>
                  
                  <nav className="flex flex-col gap-3">
                    <a 
                      href="#who-we-are" 
                      className="px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#2F6E8E] rounded-lg transition-colors"
                    >
                      Who We Are
                    </a>
                    <a 
                      href="#what-we-offer" 
                      className="px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#2F6E8E] rounded-lg transition-colors"
                    >
                      What We Offer
                    </a>
                    <a 
                      href="#contact" 
                      className="px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#2F6E8E] rounded-lg transition-colors"
                    >
                      Contact
                    </a>
                    <Link to="/auth" className="mt-4">
                      <Button className="w-full bg-[#2F6E8E] hover:bg-[#245669] text-white">
                        Admin Login
                      </Button>
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
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