import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Placeholder blog posts - these can be replaced with real content later
const blogPosts = [
  {
    id: 1,
    title: "Modernizing Legacy .NET Applications: A Practical Guide",
    excerpt: "Lessons learned from migrating enterprise applications from .NET Framework 4.8 to .NET 8, including CI/CD best practices and testing strategies.",
    date: "Coming Soon",
    readTime: "8 min read",
    category: "Engineering",
    gradient: "from-primary/20 to-coral/20",
  },
  {
    id: 2,
    title: "Building AI-Assisted Applications: My Journey with Modern Tools",
    excerpt: "How I leverage AI tools to accelerate development, build real products, and maintain code quality in production systems.",
    date: "Coming Soon",
    readTime: "6 min read",
    category: "AI & Development",
    gradient: "from-purple/20 to-pink/20",
  },
  {
    id: 3,
    title: "Healthcare Domain: Understanding Claims and Authorization Systems",
    excerpt: "A deep dive into U.S. healthcare payer systems, claims processing, and the technical challenges of building reliable healthcare software.",
    date: "Coming Soon",
    readTime: "10 min read",
    category: "Domain Knowledge",
    gradient: "from-mint/20 to-blue/20",
  },
];

export function Blog() {
  return (
    <section id="blog" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-coral/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-mint/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block px-4 py-1.5 bg-coral/10 text-coral rounded-full text-sm font-medium">
            Blog
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display">
            Thoughts & Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Writing about software engineering, enterprise development, and technology
          </p>
        </div>

        {/* Blog posts grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover-lift animate-slide-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Post header with gradient */}
              <div className={`h-40 bg-gradient-to-br ${post.gradient} relative p-6 flex flex-col justify-end`}>
                <Badge className="absolute top-4 left-4 bg-card/90 text-foreground">
                  {post.category}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-bold line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                {/* Read more - disabled for coming soon */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-auto text-muted-foreground hover:text-foreground group/btn"
                  disabled
                >
                  Coming Soon
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter signup placeholder */}
        <div className="mt-16 bg-card border border-border rounded-2xl p-8 text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
          <p className="text-muted-foreground mb-4">
            Blog coming soon! Follow me on LinkedIn for updates on new articles.
          </p>
          <Button variant="outline" asChild>
            <a
              href="https://linkedin.com/in/sufal-sikder"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow on LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
