import { useState } from "react";
import { ExternalLink, Github, Sparkles, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const categories = ["All", "Business", "Academic"];

const projects = [
  {
    id: 1,
    title: "RashiSutra",
    category: "Business",
    description: "AI-assisted astrology platform built end-to-end using modern web technologies. Provides personalized horoscope readings and astrological insights.",
    technologies: ["React", "AI/ML", "Modern Web Stack"],
    liveUrl: "https://rashisutra.com",
    role: "Full Stack Development, AI Integration, Architecture",
    highlight: "AI-Powered",
    gradient: "from-purple/20 to-pink/20",
  },
  {
    id: 2,
    title: "Sandhya Gems",
    category: "Business",
    description: "Primary business website for Sandhya Gems jewelry brand. Designed and developed independently with focus on elegant presentation and user experience.",
    technologies: ["Web Development", "E-commerce", "Responsive Design"],
    liveUrl: "https://sandhyagems.in",
    role: "Design, Development, Deployment",
    highlight: "Business Site",
    gradient: "from-primary/20 to-coral/20",
  },
  {
    id: 3,
    title: "Fast Sandhya Gems",
    category: "Business",
    description: "Performance-optimized variant of the Sandhya Gems website focusing on speed, Core Web Vitals, and conversion optimization.",
    technologies: ["Performance Optimization", "Web Vitals", "SEO"],
    liveUrl: "https://fast.sandhyagems.in",
    role: "Performance Engineering, Optimization",
    highlight: "Speed Optimized",
    gradient: "from-mint/20 to-blue/20",
  },
  {
    id: 4,
    title: "Blockchain User Behavior Prediction",
    category: "Academic",
    description: "M.Tech Thesis at IIT Patna. Built machine learning models to analyze and predict blockchain user behavior patterns using transaction data.",
    technologies: ["Python", "Machine Learning", "Blockchain", "Data Analysis"],
    role: "Research, Model Development, Analysis",
    highlight: "M.Tech Thesis",
    gradient: "from-coral/20 to-purple/20",
  },
  {
    id: 5,
    title: "Secure Smart Contracts in Vyper",
    category: "Academic",
    description: "Comparative study of Solidity and Vyper for smart contract development. Authored secure smart contracts and evaluated security features of both languages.",
    technologies: ["Vyper", "Solidity", "Ethereum", "Smart Contracts"],
    role: "Research, Contract Development, Security Analysis",
    highlight: "Blockchain Security",
    gradient: "from-blue/20 to-mint/20",
  },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center space-y-4 mb-12">
          <span className="inline-block px-4 py-1.5 bg-mint/10 text-mint rounded-full text-sm font-medium">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display">
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications and research projects showcasing full-stack development and AI integration
          </p>
        </div>

        {/* Category filters */}
        <div className="flex justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category === "Business" && <Sparkles className="w-4 h-4 mr-1" />}
              {category === "Academic" && <GraduationCap className="w-4 h-4 mr-1" />}
              {category}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-card rounded-2xl border border-border overflow-hidden hover-lift animate-scale-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project header with gradient */}
              <div className={`h-32 bg-gradient-to-br ${project.gradient} relative p-6 flex items-end`}>
                <Badge className="absolute top-4 right-4 bg-card/90 text-foreground">
                  {project.highlight}
                </Badge>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </p>

                <div>
                  <p className="text-xs text-muted-foreground mb-1">Role</p>
                  <p className="text-sm font-medium">{project.role}</p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  {project.liveUrl && (
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Visit
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
