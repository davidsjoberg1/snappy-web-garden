import { Button } from "./button";
import { Mail, Phone, MapPin, Twitter, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              YourSite
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Building the future of web experiences with cutting-edge technology 
              and exceptional design. Let's create something amazing together.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover-lift">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-lift">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-lift">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-smooth">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-muted-foreground hover:text-primary transition-smooth">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@yoursite.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 YourSite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}