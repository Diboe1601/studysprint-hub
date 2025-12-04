import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { ArrowRight, Download, BookOpen, Users, Target, Award, Clock, CheckCircle, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-image.jpg";
import studyAppsImage from "@/assets/blog-study-apps.jpg";
import onlineCoursesImage from "@/assets/blog-online-courses.jpg";
import productivityImage from "@/assets/blog-productivity.jpg";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
}

const Index = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    toast({
      title: "Success!",
      description: "Thank you for subscribing! Check your email for the study planner."
    });
    setEmail("");
    setIsSubmitting(false);
  };

  const featuredPosts: BlogPost[] = useMemo(() => [{
    id: "best-study-apps-2025",
    title: "Top 10 Best Study Apps for Students in 2025",
    excerpt: "Discover the most powerful study apps that will transform your learning experience and boost your productivity.",
    category: "Apps & Tools",
    image: studyAppsImage,
    date: "Jan 15, 2025"
  }, {
    id: "coursera-vs-udemy",
    title: "Coursera vs Udemy: Which Platform is Right for You?",
    excerpt: "A comprehensive comparison of the two leading online learning platforms to help you make the best choice.",
    category: "Online Courses",
    image: onlineCoursesImage,
    date: "Jan 12, 2025"
  }, {
    id: "study-effectively-guide",
    title: "How to Study Effectively: Science-Backed Techniques",
    excerpt: "Learn proven study techniques based on cognitive science that will help you retain more information.",
    category: "Study Hacks",
    image: productivityImage,
    date: "Jan 10, 2025"
  }], []);

  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Comprehensive Guides",
      description: "Step-by-step study guides covering various subjects and learning styles"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Goal-Oriented Approach",
      description: "Learn how to set and achieve your academic goals effectively"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Time Management",
      description: "Master time management techniques to balance study and life"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Support",
      description: "Join a community of motivated learners and share experiences"
    }
  ];

  const studyMethods = [
    {
      name: "Active Recall",
      description: "Practice retrieving information from memory to strengthen learning",
      effectiveness: "95%"
    },
    {
      name: "Spaced Repetition",
      description: "Review material at increasing intervals for long-term retention",
      effectiveness: "90%"
    },
    {
      name: "Pomodoro Technique",
      description: "25-minute focused study sessions with 5-minute breaks",
      effectiveness: "85%"
    },
    {
      name: "Feynman Technique",
      description: "Teach concepts in simple terms to identify knowledge gaps",
      effectiveness: "88%"
    }
  ];

  const testimonials = [
    {
      name: "Karabo Natasha",
      role: "Medical Student",
      content: "StudySprint helped me improve my grades by 2 full points. The study techniques are life-changing!",
      rating: 5,
      img: "https://avatar.vercel.sh/karabo"
    },
    {
      name: "Sizwe Valashiya",
      role: "Bachelor of Science Student",
      content: "The app recommendations and time management tips saved me hours each week. Highly recommended!",
      rating: 5,
      img: "https://avatar.vercel.sh/sizwe"
    },
    {
      name: "Katleho Leswetsa",
      role: "High School Student",
      content: "Finally found a platform that understands how students actually learn. The guides are so practical!",
      rating: 4,
      img: "https://avatar.vercel.sh/katleho"
    },
    {
      name: "Thandi Mokoena",
      role: "Law Student",
      content: "The Pomodoro technique guide changed how I approach my studies. I'm more productive than ever!",
      rating: 5,
      img: "https://avatar.vercel.sh/thandi"
    },
    {
      name: "David Nkosi",
      role: "Engineering Student",
      content: "Best study resource I've found online. The tool reviews are honest and incredibly helpful.",
      rating: 5,
      img: "https://avatar.vercel.sh/david"
    },
    {
      name: "Lerato Dlamini",
      role: "Commerce Student",
      content: "The scholarship guides helped me find funding I didn't even know existed. Thank you StudySprint!",
      rating: 5,
      img: "https://avatar.vercel.sh/lerato"
    },
    {
      name: "Mpho Sithole",
      role: "IT Student",
      content: "Active recall techniques from StudySprint helped me ace my programming exams. Game changer!",
      rating: 5,
      img: "https://avatar.vercel.sh/mpho"
    },
    {
      name: "Naledi Khumalo",
      role: "Nursing Student",
      content: "The study planner template is perfect for organizing my clinical rotations and theory work.",
      rating: 4,
      img: "https://avatar.vercel.sh/naledi"
    }
  ];

  const firstRow = testimonials.slice(0, testimonials.length / 2);
  const secondRow = testimonials.slice(testimonials.length / 2);

  const TestimonialCard = ({ img, name, role, content, rating }: typeof testimonials[0]) => (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-border bg-card hover:bg-accent/10",
        "transition-colors duration-200"
      )}
    >
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-4 w-4 ${
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-muted"
            }`} 
          />
        ))}
      </div>
      <blockquote className="text-sm text-muted-foreground mb-4 italic">"{content}"</blockquote>
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt={name} src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium">{name}</figcaption>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </figure>
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      {/* Hero Section */}
      <section 
        className="relative overflow-hidden min-h-[700px] md:min-h-[800px] flex items-center" 
        aria-label="Hero section"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        
        {/* Content */}
        <div className="container relative z-10 py-16 md:py-24 lg:py-32">
          <div className="max-w-3xl space-y-8 text-white">
            <div>
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 shadow-lg">
                🎓 Trusted by 1000+ Students
              </span>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6 drop-shadow-2xl">
                Unlock Your Learning Potential
              </h1>
              <p className="text-lg md:text-xl text-white/95 mb-8 drop-shadow-lg font-medium">
                Discover study tips, tools, and online platforms that make learning easier and smarter. Join thousands of students achieving academic success.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6 border-y border-white/30">
              <div>
                <div className="text-3xl font-bold mb-1 drop-shadow-lg">
                  <NumberTicker value={50} className="text-white" />+
                </div>
                <div className="text-sm text-white/90 drop-shadow-md">Study Guides</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1 drop-shadow-lg">
                  <NumberTicker value={100} className="text-white" delay={200} />+
                </div>
                <div className="text-sm text-white/90 drop-shadow-md">Tool Reviews</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1 drop-shadow-lg">
                  <NumberTicker value={1000} className="text-white" delay={400} />+
                </div>
                <div className="text-sm text-white/90 drop-shadow-md">Students Helped</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild className="text-lg shadow-xl">
                <Link to="/blog">
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/50 text-white hover:bg-white hover:text-primary text-lg backdrop-blur-sm shadow-xl">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white" aria-label="Our features">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose StudySprint?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive resources and proven strategies to help you excel in your academic journey.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="text-accent mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Methods Section */}
      <section className="py-16 bg-accent/5" aria-label="Proven study methods">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Science-Backed Study Methods</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover proven learning techniques that maximize retention and efficiency
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {studyMethods.map((method, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold">{method.name}</h3>
                  <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded-full font-medium">
                    {method.effectiveness} effective
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-16 bg-white" aria-label="Free study planner">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-md border">
              <Download className="h-12 w-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Get Your FREE Study Planner</h2>
              <p className="text-muted-foreground mb-6">
                Sign up now and receive our comprehensive study planner template to organize your learning journey. Includes:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-left max-w-md mx-auto">
                {["Weekly schedule templates", "Goal setting worksheets", "Progress trackers", "Exam preparation checklist", "Time blocking system", "Grade tracker"].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  required 
                  className="flex-1"
                  disabled={isSubmitting}
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Download Free"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-accent/5" aria-label="Student testimonials">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Students Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of students who have transformed their study habits with our guidance
            </p>
          </div>
        </div>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:30s]">
            {firstRow.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:30s]">
            {secondRow.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </Marquee>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-16 bg-white" aria-label="Featured blog posts">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Latest Posts</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our latest guides and tips to enhance your study routine and academic success.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map(post => (
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

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700" aria-label="Call to action">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Award className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Studies?</h2>
            <p className="text-lg mb-8 text-white/90">
              Join thousands of students who are already studying smarter with StudySprint. Start your journey to academic excellence today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                <Link to="/about">Learn About Our Methods</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;