import { ArrowDown, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DecorativeShapes } from "./DecorativeShapes";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background decorative elements */}
      <DecorativeShapes />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 animate-slide-in-left">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-mint/10 text-mint rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-mint rounded-full animate-pulse" />
              Open to new opportunities
            </div>

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-tight">
                Hi, I'm{" "}
                <span className="gradient-text">Sufal Sikder</span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium">
                Senior Software Engineer
              </p>
            </div>

            {/* Tagline */}
            <p className="text-lg text-muted-foreground max-w-lg">
              Full Stack Developer specializing in scalable enterprise systems, 
              backend architecture, and AI-assisted development. Building the future 
              of healthcare technology at Optum.
            </p>

            {/* Quick info */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-coral" />
                Hyderabad, India
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-purple" />
                Optum (UnitedHealth Group)
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="space-y-1">
                <p className="text-3xl font-bold text-foreground">3.5+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-foreground">95%</p>
                <p className="text-sm text-muted-foreground">Automation Achieved</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-foreground">IIT</p>
                <p className="text-sm text-muted-foreground">Patna Graduate</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="#experience">View Experience</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>

          {/* Profile Image Area */}
          <div className="relative flex justify-center lg:justify-end animate-slide-in-right animation-delay-200">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-110" />
              
              {/* Main image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-card shadow-2xl">
                {/* Placeholder - replace with actual photo */}
                <div className="w-full h-full bg-gradient-to-br from-primary/30 via-purple/20 to-coral/30 flex items-center justify-center">
                  <span className="text-6xl sm:text-7xl lg:text-8xl font-bold font-display text-foreground/20">
                    SS
                  </span>
                </div>
              </div>

              {/* Floating decorations */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-2xl rotate-12 animate-float" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-purple rounded-full animate-float-reverse" />
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-coral shape-blob animate-pulse-scale" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
