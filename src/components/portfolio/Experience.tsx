import { Calendar, MapPin, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Optum (UnitedHealth Group)",
    location: "Hyderabad, India",
    period: "Jul 2025 – Present",
    current: true,
    description: [
      "Own and operate applications processing U.S. student insurance claims and provider payments for UnitedHealthcare.",
      "Lead modernization initiatives migrating applications from .NET Framework 4.8 to .NET 8.",
      "Refactor legacy codebases, update dependencies, and improve test coverage across the platform.",
      "Manage production releases using Azure DevOps CI/CD pipelines.",
      "Support enterprise integrations, including BizTalk-based workflows.",
    ],
    technologies: ["C#", ".NET 8", ".NET Framework 4.8", "Azure", "Azure DevOps", "SQL Server"],
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Optum (UnitedHealth Group)",
    location: "Hyderabad, India",
    period: "Jul 2022 – Jun 2025",
    current: false,
    description: [
      "Built a Dual Health Plan Identification system using .NET and SQL Server to detect members with multiple insurance plans.",
      "Developed a Windows application to resolve pending authorizations and automate provider communication.",
      "Created an Aging Claims Reporting Automation tool using Python and .NET, reducing manual effort by ~95%.",
      "Contributed to provider-facing portals using React and .NET.",
      "Designed dynamic healthcare data loaders for efficient SQL Server ingestion.",
    ],
    technologies: ["C#", ".NET", "SQL Server", "Python", "React"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block px-4 py-1.5 bg-coral/10 text-coral rounded-full text-sm font-medium">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display">
            Professional Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building enterprise healthcare solutions at one of the world's largest health companies
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                } md:w-1/2 pl-8 md:pl-0`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-0 w-4 h-4 rounded-full border-4 border-background ${
                    exp.current ? "bg-mint" : "bg-primary"
                  } left-0 md:left-auto ${
                    index % 2 === 0 ? "md:-right-2" : "md:-left-2"
                  } -translate-x-1/2 md:translate-x-0`}
                />

                {/* Card */}
                <div className="bg-card p-6 rounded-2xl border border-border hover-lift animate-slide-in-up">
                  {/* Header */}
                  <div className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    {exp.current && (
                      <Badge className="bg-mint/10 text-mint hover:bg-mint/20 mb-2">
                        Current Role
                      </Badge>
                    )}
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-lg text-primary font-medium">{exp.company}</p>
                    <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground ${
                      index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                    }`}>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className={`mt-4 space-y-2 text-left`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ChevronRight className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className={`mt-4 flex flex-wrap gap-2 ${
                    index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                  }`}>
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
