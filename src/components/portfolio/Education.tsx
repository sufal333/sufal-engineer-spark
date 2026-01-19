import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    id: 1,
    institution: "Indian Institute of Technology (IIT) Patna",
    degree: "M.Tech",
    field: "Mathematics & Computing",
    period: "2020 – 2022",
    cgpa: "8.84",
    thesis: "Predicting Blockchain User Behavior",
    color: "border-l-primary",
    bgColor: "bg-primary/5",
  },
  {
    id: 2,
    institution: "Government College of Engineering & Ceramic Technology",
    degree: "B.Tech",
    field: "Computer Science & Engineering",
    period: "2016 – 2020",
    cgpa: "8.81",
    color: "border-l-purple",
    bgColor: "bg-purple/5",
  },
];

export function Education() {
  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue/10 text-blue rounded-full text-sm font-medium">
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display">
            Academic Background
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strong foundation in computer science, mathematics, and cutting-edge research
          </p>
        </div>

        {/* Education cards */}
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`${edu.bgColor} border-l-4 ${edu.color} rounded-2xl p-6 md:p-8 hover-lift animate-slide-in-up`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                {/* Main content */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center shadow-sm">
                      <GraduationCap className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{edu.institution}</h3>
                      <p className="text-muted-foreground">{edu.period}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="secondary" className="text-sm">
                      {edu.degree}
                    </Badge>
                    <span className="text-muted-foreground">in</span>
                    <span className="font-medium">{edu.field}</span>
                  </div>

                  {edu.thesis && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BookOpen className="w-4 h-4" />
                      <span>Thesis: {edu.thesis}</span>
                    </div>
                  )}
                </div>

                {/* CGPA */}
                <div className="flex items-center gap-2 bg-card px-4 py-3 rounded-xl shadow-sm">
                  <Award className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">CGPA</p>
                    <p className="text-2xl font-bold">{edu.cgpa}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
