import { useState } from "react";
import { Send, Linkedin, Mail, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block px-4 py-1.5 bg-purple/10 text-purple rounded-full text-sm font-medium">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in senior engineering roles at product-based companies. Let's discuss how I can contribute to your team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground">
                I'm always open to discussing new opportunities, interesting projects, or potential collaborations. Drop me a message!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Hyderabad, India</p>
                </div>
              </div>

              <a
                href="https://linkedin.com/in/sufal-sikder"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-blue" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-medium group-hover:text-primary transition-colors">
                    linkedin.com/in/sufal-sikder
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-coral" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">Use the form to reach me</p>
                </div>
              </div>
            </div>

            {/* Recruiter message */}
            <div className="p-6 bg-gradient-to-br from-primary/10 to-purple/10 rounded-2xl border border-primary/20">
              <p className="text-sm leading-relaxed">
                <span className="font-semibold">For Recruiters:</span> I'm actively seeking senior software engineering roles at product-based companies where I can leverage my enterprise experience, backend expertise, and passion for building scalable systems.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="animate-slide-in-right animation-delay-200">
            {isSubmitted ? (
              <div className="h-full flex items-center justify-center bg-card rounded-2xl border border-border p-8 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-mint/10 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-mint" />
                  </div>
                  <h3 className="text-xl font-bold">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl border border-border p-6 md:p-8 space-y-6"
              >
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about the opportunity or project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gap-2"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
