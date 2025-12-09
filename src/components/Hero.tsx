import { Building2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full overflow-hidden">

      {/* ---------------- TOP WHITE SECTION ---------------- */}
      <div className="relative bg-white pt-24 pb-20 px-6">

        <div className="container mx-auto flex items-center space-x-2 mb-8 sm:mb-12">
          <Building2 className="w-6 sm:w-8 h-6 sm:h-8 text-accent" />
          <span className="text-lg sm:text-xl font-bold">Integrated Desk Services</span>
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2">

          {/* LEFT SIDE CONTENT (Your existing content) */}
          <div className="flex-1 max-w-xl text-center md:text-left space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              Exceptional Workspace
              <span className="block text-accent">Solutions</span>
            </h1>

          </div>

          {/* RIGHT SIDE IMAGE WITH DIAGONAL CLIP */}
          <div className="flex-1 relative h-[280px] sm:h-[320px] md:h-[420px] mt-8 sm:mt-12 md:mt-0 w-full">
            <div
              className="absolute inset-0 [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] md:[clip-path:polygon(12%_0%,100%_0%,100%_100%,0%_100%)]"
            >
             <picture>
               <source srcSet="/mainSectionImage.webp" type="image/webp" />
               <img
                  src="/mainSectionImage.jpg"
                  alt="About Fargo Space"
                  className="w-full h-full object-cover rounded-lg shadow-lg select-none
                           animate-in fade-in slide-in-from-right-4 duration-1000"
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  loading="eager"
                />
             </picture>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- BLUE INFO STRIP ---------------- */}
       <div className="bg-[#0B4566] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
         <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">

           <div>
             <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug">
              The Empowering Platform. <br className="hidden sm:block"/> Your dedicated Main-IAM partner.
             </h2>
           </div>

           <div>
             <p className="text-base sm:text-lg leading-relaxed opacity-90">
               Fargo Space Partners Limited focuses exclusively on the comprehensive concerns and high demands of Independent Asset Managers (IAMs) and the operational complexities they face. As a dedicated Main-IAM, our platform provides the scalable infrastructure required to facilitate your success.
             </p>
           </div>

         </div>
       </div>

    </section>
  );
};

export default Hero;
