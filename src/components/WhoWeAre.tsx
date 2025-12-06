import { Card } from "@/components/ui/card";
import { Award, Users, Target, Zap } from "lucide-react";

const WhoWeAre = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering premium quality in every service"
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our priority, always"
    },
    {
      icon: Target,
      title: "Precision",
      description: "Attention to detail in every aspect of our work"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Leveraging modern solutions for optimal results"
    }
  ];

  return (
    <section id="who-we-are" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-4 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Who We Are</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
          <div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Fargo Space Partners Limited offers the Integrated Desk Services for IAM, a dedicated platform explicitly designed to serve Independent Asset Managers (IAMs). Operating as a Main-IAM, our mission is to "Empower Growth, Enable the Future," providing the scalable infrastructure necessary for our Sub-IAM partners to achieve client success.
          </p>
          <br/>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We deliver the IAM One-Stop Workstation, a comprehensive and integrated suite of fintech solutions and desk services that replaces generic facility support. Our platform and dedicated team—including specialized Fargo Space Traders—streamline all aspects of your operations, from account opening and regulatory compliant communication to centralized trade support, automated risk control settings, and efficient retrocession management. We are committed to injecting expertise, reliability, and innovation into your entire operational lifecycle.
          </p>
          </div>
          <img className="w-full lg:w-1/2" src="/who-we-are.png" alt="Image about fargo space" />
        </div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all duration-300 border-border/50 hover:border-accent/50"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default WhoWeAre;