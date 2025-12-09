import { Building2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 sm:py-12 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between items-center gap-4 sm:gap-6">
          {/* <div className="flex items-center space-x-2">
            <Building2 className="w-6 h-6 text-accent" />
            <span className="font-semibold">Integrated Desk Services</span>
          </div> */}
          
          <div className="text-sm text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Integrated Desk Services. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;