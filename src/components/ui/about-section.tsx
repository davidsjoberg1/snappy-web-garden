import { Button } from "./button";
import { CheckCircle } from "lucide-react";

const achievements = [
  "10,000+ satisfied customers worldwide",
  "99.9% uptime reliability guarantee", 
  "24/7 dedicated customer support",
  "Industry-leading security standards"
];

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Our Story
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We are passionate about creating exceptional digital experiences that help 
              businesses thrive in the modern world. Our team combines technical expertise 
              with creative vision to deliver solutions that exceed expectations.
            </p>
            
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 animate-slide-up"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="shadow-elegant">
              Learn More About Us
            </Button>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="card-gradient rounded-2xl p-8 shadow-card hover-lift">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Team Members</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">5</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">99%</div>
                  <div className="text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}