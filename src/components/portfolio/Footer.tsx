import { Linkedin, Github, Mail, Heart } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/sufal-sikder",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/sufal-sikder",
    icon: Github,
  },
  {
    name: "Email",
    href: "#contact",
    icon: Mail,
  },
];

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#" className="text-2xl font-bold font-display">
              <span className="text-foreground">Sufal</span>
              <span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              Senior Software Engineer building enterprise-grade solutions at the intersection of healthcare and technology.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-wrap gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Sufal Sikder. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-coral fill-coral" /> using modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
}
