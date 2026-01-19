import { Code2, Server, Sparkles, Building2 } from "lucide-react";

const highlights = [
  {
    icon: Building2,
    title: "Enterprise Experience",
    description: "3.5+ years at Optum (UnitedHealth Group) owning mission-critical healthcare applications",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Server,
    title: "Backend Focus",
    description: "Expert in C#, .NET, SQL Server with full-stack exposure to React and modern web technologies",
    color: "bg-purple/10 text-purple",
  },
  {
    icon: Code2,
    title: "Modernization Leader",
    description: "Leading migration initiatives from .NET Framework 4.8 to .NET 8 with CI/CD best practices",
    color: "bg-coral/10 text-coral",
  },
  {
    icon: Sparkles,
    title: "AI-Assisted Development",
    description: "Actively leveraging AI tools to accelerate development and build real business-facing products",
    color: "bg-mint/10 text-mint",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block px-4 py-1.5 bg-purple/10 text-purple rounded-full text-sm font-medium">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display">
            Building Enterprise-Grade Solutions
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Narrative */}
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-medium">Senior Software Engineer</span> at{" "}
              <span className="text-foreground font-medium">Optum (UnitedHealth Group)</span>, where I own 
              and operate production systems that process U.S. student insurance claims and provider 
              payments for UnitedHealthcare.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey from Software Engineer to Senior Software Engineer has been marked by 
              taking ownership of critical applications, leading modernization initiatives, and 
              building automation solutions that reduced manual effort by <span className="text-primary font-medium">~95%</span>.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond enterprise work, I'm passionate about <span className="text-foreground font-medium">AI-assisted development</span> and 
              have independently built real business websites like{" "}
              <a href="https://rashisutra.com" target="_blank" rel="noopener noreferrer" className="text-purple hover:underline">rashisutra.com</a> and{" "}
              <a href="https://sandhyagems.in" target="_blank" rel="noopener noreferrer" className="text-purple hover:underline">sandhyagems.in</a>.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With an M.Tech from <span className="text-foreground font-medium">IIT Patna</span> in Mathematics & Computing, 
              I bring a strong foundation in algorithms, machine learning, and blockchain technologies 
              to my engineering practice.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4 animate-slide-in-right animation-delay-200">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`group p-6 bg-card rounded-2xl border border-border hover-lift cursor-default animation-delay-${(index + 1) * 100}`}
              >
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
