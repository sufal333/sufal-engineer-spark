import { Code, Database, Cloud, Layers, Brain, Stethoscope } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    color: "bg-primary/10 text-primary border-primary/20",
    skills: ["C#", "Python", "SQL", "JavaScript", "TypeScript", "C/C++", "HTML/CSS"],
  },
  {
    title: "Frameworks & Tools",
    icon: Layers,
    color: "bg-purple/10 text-purple border-purple/20",
    skills: [
      ".NET 8",
      ".NET Framework 4.8",
      "ASP.NET",
      "Web API",
      "Windows Services",
      "BizTalk Server",
      "Git",
      "Azure DevOps",
    ],
  },
  {
    title: "Cloud & Databases",
    icon: Cloud,
    color: "bg-blue/10 text-blue border-blue/20",
    skills: [
      "Microsoft Azure",
      "SQL Server",
      "T-SQL",
      "Performance Tuning",
      "Indexing",
      "CI/CD Pipelines",
    ],
  },
  {
    title: "Concepts & Practices",
    icon: Brain,
    color: "bg-mint/10 text-mint border-mint/20",
    skills: [
      "REST APIs",
      "System Integration",
      "Observability",
      "Logging",
      "Refactoring",
      "Unit Testing",
      "Modernization",
    ],
  },
  {
    title: "Domain Expertise",
    icon: Stethoscope,
    color: "bg-coral/10 text-coral border-coral/20",
    skills: [
      "U.S. Healthcare Payer",
      "Claims Processing",
      "Authorization Systems",
      "Student Insurance (UHC)",
      "Provider Payments",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "bg-pink/10 text-pink border-pink/20",
    skills: [
      "SQL Server",
      "Data Modeling",
      "Query Optimization",
      "Stored Procedures",
      "Data Loaders",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-mint/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display">
            Technical Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building enterprise-grade applications
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`bg-card p-6 rounded-2xl border border-border hover-lift animate-slide-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${category.color} border`}>
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-muted text-sm rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
