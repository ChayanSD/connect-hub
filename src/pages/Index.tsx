import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import WhatWeOffer from "@/components/WhatWeOffer";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Building2 className="w-8 h-8 text-accent" />
              <span className="text-xl font-bold">Integrated Desk Services</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#who-we-are" className="text-sm hover:text-accent transition-colors">Who We Are</a>
              <a href="#what-we-offer" className="text-sm hover:text-accent transition-colors">What We Offer</a>
              <a href="#contact" className="text-sm hover:text-accent transition-colors">Contact</a>
              <Link to="/auth">
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