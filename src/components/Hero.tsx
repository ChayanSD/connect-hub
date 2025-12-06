import { Button } from "@/components/ui/button";
import { ArrowRight, Building2 } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full overflow-hidden">

      {/* ---------------- TOP WHITE SECTION ---------------- */}
      <div className="relative bg-white pt-24 pb-20 px-6">

        <div className="container mx-auto flex items-center space-x-2">
          <Building2 className="w-8 h-8 text-accent" />
          <span className="text-xl font-bold">Integrated Desk Services</span>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row items-center">

          {/* LEFT SIDE CONTENT (Your existing content) */}
          <div className="flex-1 max-w-xl text-center md:text-left space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Exceptional Workspace
              <span className="block text-accent">Solutions</span>
            </h1>

            {/* <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Premium desk services and facility management for modern businesses
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-gradient-to-r from-primary to-primary/90 hover:shadow-elegant transition-all duration-300"
              >
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("who-we-are")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn More
              </Button>
            </div> */}
          </div>

          {/* RIGHT SIDE IMAGE WITH DIAGONAL CLIP */}
          <div className="flex-1 relative h-[320px] md:h-[420px] mt-12 md:mt-0 w-full">
            <div
              className="absolute inset-0"
              style={{
                clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            >
              <img
                src="/hero-image.jpg" // <-- Replace with your real image
                alt="Hero"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- BLUE INFO STRIP ---------------- */}
      <div className="bg-[#0B4566] text-white py-20 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-start">

          <div>
            <h2 className="text-3xl md:text-4xl font-light leading-snug">
             The Empowering Platform. <br/> Your dedicated Main-IAM partner.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed opacity-90">
              Fargo Space Partners Limited focuses exclusively on the comprehensive concerns and high demands of Independent Asset Managers (IAMs) and the operational complexities they face. As a dedicated Main-IAM, our platform provides the scalable infrastructure required to facilitate your success.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
