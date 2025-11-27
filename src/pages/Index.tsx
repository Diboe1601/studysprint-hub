import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-image.jpg";
import studyAppsImage from "@/assets/blog-study-apps.jpg";
import onlineCoursesImage from "@/assets/blog-online-courses.jpg";
import productivityImage from "@/assets/blog-productivity.jpg";

const Index = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "Thank you for subscribing! Check your email for the study planner.",
      });
      setEmail("");
    }
  };

  const featuredPosts = [
    {
      id: "best-study-apps-2025",
      title: "Top 10 Best Study Apps for Students in 2025",
      excerpt: "Discover the most powerful study apps that will transform your learning experience and boost your productivity.",
      category: "Apps & Tools",
      image: studyAppsImage,
      date: "Jan 15, 2025",
    },
    {
      id: "coursera-vs-udemy",
      title: "Coursera vs Udemy: Which Platform is Right for You?",
      excerpt: "A comprehensive comparison of the two leading online learning platforms to help you make the best choice.",
      category: "Online Courses",
      image: onlineCoursesImage,
      date: "Jan 12, 2025",
    },
    {
      id: "study-effectively-guide",
      title: "How to Study Effectively: Science-Backed Techniques",
      excerpt: "Learn proven study techniques based on cognitive science that will help you retain more information.",
      category: "Study Hacks",
      image: productivityImage,
      date: "Jan 10, 2025",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-accent">
        <div className="container py-16 md:py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8 text-white">
              <div>
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                  🎓 Trusted by 50,000+ Students
                </span>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                  Unlock Your Learning Potential
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-xl mb-8">
                  Discover study tips, tools, and online platforms that make learning easier and smarter. Join thousands of students achieving academic success.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-6 border-y border-white/20">
                <div>
                  <div className="text-3xl font-bold mb-1">500+</div>
                  <div className="text-sm text-white/80">Study Guides</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">100+</div>
                  <div className="text-sm text-white/80">Tool Reviews</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">50k+</div>
                  <div className="text-sm text-white/80">Students Helped</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild className="text-lg">
                  <Link to="/blog">
                    Start Learning
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary text-lg">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative lg:h-[600px] h-[400px]">
              <img
                src={heroImage}
                alt="Students studying together with laptops and books"
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-16 bg-accent/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-md">
              <Download className="h-12 w-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Get Your FREE Study Planner</h2>
              <p className="text-muted-foreground mb-6">
                Sign up now and receive our comprehensive study planner template to organize your learning journey.
              </p>
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" size="lg">
                  Download Free
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Latest Posts</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our latest guides and tips to enhance your study routine and academic success.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/blog">
                View All Posts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-hero">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Studies?</h2>
            <p className="text-lg mb-8 text-white/90">
              Join thousands of students who are already studying smarter with StudySprint.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
