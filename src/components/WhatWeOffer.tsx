import SectionTitle from "@/components/SectionTitle";

const WhatWeOffer = () => {

  return (
    <section id="what-we-offer" className="py-24 ">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <SectionTitle title="What We Offer" className="text-3xl md:text-4xl lg:text-5xl" />
          <p className="text-lg text-muted-foreground">
            Comprehensive solutions designed to elevate your workspace experience
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left Image */}
        <div className="w-full space-y-10">
          <img
            src="/what-we-offer.webp" 
            alt="Integrated Desk Services"
            className="shadow-lg w-full object-cover"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            loading="lazy"
            decoding="async"
          />
          <img
            src="/portfolio.webp" 
            alt="Integrated Desk Services"
            className="shadow-lg w-full object-cover"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            loading="lazy"
            decoding="async"
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

      </div>
    </section>
  );
};

export default WhatWeOffer;