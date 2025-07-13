import { Zap, Shield, Smartphone, Palette, Globe, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance that delivers exceptional speed and user experience across all devices."
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Built with security best practices and reliable infrastructure to protect your data."
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Responsive design that looks perfect on every screen size, from mobile to desktop."
  },
  {
    icon: Palette,
    title: "Beautiful Design",
    description: "Carefully crafted interfaces that combine aesthetics with exceptional usability."
  },
  {
    icon: Globe,
    title: "Global Ready",
    description: "Internationalization support and CDN delivery for worldwide accessibility."
  },
  {
    icon: Users,
    title: "User Focused",
    description: "Designed with your users in mind, ensuring intuitive and engaging experiences."
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Our Solution
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the features that make us the perfect choice for your next project
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="feature-card group animate-slide-up"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-smooth group-hover:bg-primary/20 group-hover:shadow-glow">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}