import { Button } from "./button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-bounce-gentle"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary-glow/30 rounded-full blur-xl animate-bounce-gentle" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Build Something{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Amazing
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Create beautiful, modern websites that captivate your audience and drive results. 
            Experience the perfect blend of design and functionality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button size="lg" className="shadow-glow text-lg px-8 py-4 group">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 transition-smooth group-hover:translate-x-1" />
            </Button>
            
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 hover-lift">
              View Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}