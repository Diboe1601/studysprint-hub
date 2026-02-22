import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ShuffleHero from "@/components/ShuffleHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, Send } from "lucide-react";
import { setPageMeta } from "@/lib/utils";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setPageMeta({
      title: "Contact StudySprint",
      description:
        "Questions or feedback? Contact StudySprint. We respond within 24–48 hours on weekdays.",
      canonical: typeof window !== "undefined" ? window.location.href : undefined,
      robots: "index,follow",
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("access_key", "241996ce-fb33-4152-b0c2-ce3597ea14d3");
      fd.append("name", formData.name);
      fd.append("email", formData.email);
      fd.append("subject", formData.subject);
      fd.append("message", formData.message);

      const resp = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });

      const data = await resp.json();

      if (!resp.ok || !data?.success) {
        console.error("[Contact] web3forms submission error:", { status: resp.status, data });
        throw new Error("GENERIC_CONTACT_SEND_FAILED");
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      const detailed = err instanceof Error ? err.message : typeof err === "string" ? err : "Unknown error";
      console.error("[Contact] send failed:", detailed);
      toast({
        title: "Send Failed",
        description: "We couldn't send your message right now. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <ShuffleHero
        badge="💬 Get In Touch"
        title="Contact Us"
        description="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        buttonText="Email Us"
        buttonLink="mailto:studysprint.official24@gmail.com"
      />

      {/* Contact Section */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Got something on your mind. Maybe it's a thought about what we share. Or perhaps there’s a subject you’d like to toss into the mix. 
                  Even if it’s only a quick greeting. We’re around whenever you need us.
                </p>
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground mt-6">
                  <p>
                    Reach out anytime clarity is needed on bursary rules, useful study tools are wanted, mistakes are noticed, or topics come to mind worth exploring here. 
                    Hearing about real experiences with learning habits matters - what clicks, what drags, shapes how these guides grow. Schools, nonprofits, businesses bringing ideas forward that lift learners through fair chances: think aid campaigns, skill sessions, trusted savings - let it flow our way.
                  </p>
                  <p>
                    Most replies here come straight from a person, not a script. Usually within one or two days during the week, someone will answer. If your message is about an urgent step in applying, we point out what to do next using trustworthy references. Instead of submitting forms or giving legal opinions, our role leans toward offering step-by-step lists, fillable examples, and usable direction. That way, moving ahead feels clearer, even without hand-holding. 
                    When your query calls for more digging, expect a note saying we’re on it - along with a clear timeframe. To speed things up, share your due date, useful pages, plus steps already taken.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">studysprint.official24@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Social Media</h3>
                    <p className="text-muted-foreground">
                      Follow us on Instagram, TikTok, and Facebook for daily study tips
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="font-semibold mb-4">Frequently Asked Questions</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Response time: Usually within 24-48 hours</li>
                  <li>• We welcome guest post submissions</li>
                  <li>• Partnership inquiries are always open</li>
                  <li>• Feedback and suggestions are appreciated</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us more..."
                    rows={6}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
