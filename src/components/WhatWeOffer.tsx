import { Card } from "@/components/ui/card";
import { CheckCircle2, Briefcase, Shield, Clock, Sparkles, HeadphonesIcon } from "lucide-react";

const WhatWeOffer = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Comprehensive Desk Services",
      description: "Full-service desk management including reception, administrative support, and visitor management",
      features: ["Professional reception services", "Mail and package handling", "Visitor registration and screening"]
    },
    {
      icon: Shield,
      title: "Facility Management",
      description: "Complete facility oversight ensuring your workspace operates seamlessly",
      features: ["Maintenance coordination", "Vendor management", "Safety and compliance"]
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock availability for your critical business needs",
      features: ["Emergency response", "After-hours support", "Flexible scheduling"]
    },
    {
      icon: Sparkles,
      title: "Premium Space Solutions",
      description: "Customized workspace arrangements designed for productivity",
      features: ["Space optimization", "Modern amenities", "Flexible configurations"]
    },
    {
      icon: HeadphonesIcon,
      title: "Concierge Services",
      description: "Elevated hospitality services for your team and guests",
      features: ["Event coordination", "Catering arrangements", "Travel assistance"]
    }
  ];

  return (
    <section id="what-we-offer" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">What We Offer</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive solutions designed to elevate your workspace experience
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left Image */}
        <div className="w-full space-y-10">
          <img
            src="/what-we-offer.png" 
            alt="Integrated Desk Services"
            className="shadow-lg w-full object-cover"
          />
          <img
            src="/portfolio.png" 
            alt="Integrated Desk Services"
            className="shadow-lg w-full object-cover"
          />
        </div>


          {/* Right Content */}
        <div>
          <ul className="space-y-6 text-gray-700 leading-relaxed">

            <li className="flex items-start gap-3">
              <span className="text-black-600 text-xl mt-1">•</span>
              <p>
                <strong>Centralized Trade Support:</strong> A dedicated trading desk that centralizes the order placement process, offering Automatic Quotation and an Order Management System (OMS) for pre- and post-trade checks across asset classes.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-black-600 text-xl mt-1">•</span>
              <p>
                <strong>Advanced Risk and Compliance:</strong> Automated regulatory adherence with a Risk Control Setting and Pre-trade Inspection feature that checks all transactions (e.g., UF Limit, Suitability) and triggers real-time alerts.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-black-600 text-xl mt-1">•</span>
              <p>
                <strong>Unified Portfolio & Operations Management:</strong> Consolidated reporting for both bankable and non-bankable assets, supported by a Portfolio Management System (PMS) and efficient trade reconciliation.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-black-600 text-xl mt-1">•</span>
              <p>
                <strong>Automated Retrocession Management:</strong> Automatic calculation and reporting of revenues and commissions through a pre-set fee schedule—eliminating manual work.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-black-600 text-xl mt-1">•</span>
              <p>
                <strong>Regulatory Compliant Client Communication:</strong> A secure Instant Message System and CRM Web Portal with a Chatroom to ensure all client communication meets regulatory standards.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-black-600 text-xl mt-1">•</span>
              <p>
                <strong>Streamlined Onboarding:</strong> Complete management of Account Opening and Client Onboarding, including KYC, SOW documentation, and workflow monitoring.
              </p>
            </li>

          </ul>
        </div>

        </div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-accent/30"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default WhatWeOffer;