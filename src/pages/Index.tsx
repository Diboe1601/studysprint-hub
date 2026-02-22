import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Marquee } from "@/components/ui/marquee";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { ArrowRight, Download, BookOpen, Users, Target, Award, Clock, CheckCircle, Star, HelpCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-image.jpg";
import studyAppsImage from "@/assets/blog-study-apps.jpg";
import onlineCoursesImage from "@/assets/blog-online-courses.jpg";
import productivityImage from "@/assets/blog-productivity.jpg";
import { setPageMeta } from "@/lib/utils";

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

  useEffect(() => {
    setPageMeta({
      title: "StudySprint - Study Smarter, Not Harder",
      description:
        "Discover study tips, tools, and online platforms for South African students. Practical guides, bursary advice, and honest app reviews.",
      canonical: typeof window !== "undefined" ? window.location.href : undefined,
      robots: "index,follow",
    });
  }, []);
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

      {/* What is StudySprint? */}
      <section className="py-16 bg-white" aria-label="What is StudySprint?">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">What is StudySprint?</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              What if studying felt less like guessing? StudySprint builds around students, offering ways to learn efficiently, organize daily moves, then pick educational paths with confidence. Because real guidance matters, posts include step-by-step walkthroughs rooted in evidence, tips on financial aid, transparent breakdowns of apps worth trying, along with printable planners turning vague goals into steady motion. 
              When tests loom, when tools need comparing, when support funds open - you find what works, stripped down, ready to use. Hidden agendas do not live here.
            </p>
            <p>
              Meant for high schoolers,university and TVET students, and postgraduate candidates , what we offer stays rooted in South Africa yet fits learners everywhere. Not drowning in endless data matters - so filtering noise out comes first. Confusion from mixed messages? That gets cleared up here. Tips lacking proof or purpose won’t stick around long. Real tools show up instead - ones that fit actual needs without false promises. Scholarships listed are within reach, not pipe dreams. Trust builds through consistency, so every piece follows strict review rules. Sources back claims when needed, never hidden or vague. No one pays to be featured - that line doesn’t get crossed. Updates roll in often as systems shift and deadlines change. 
              Suggestions appear only if they’ve shown results before. Better grades become possible. Anxiety dips slowly. Progress feels closer than expected.
            </p>
          </div>
        </div>
      </section>

      {/* What You’ll Find on StudySprint */}
      <section className="py-16 bg-accent/5" aria-label="StudySprint Content Overview">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">StudySprint Content Overview</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Picture your days falling into place, one smart choice at a time. From picking the right course to finding money for it, each step gets clearer. Our guides show the way, opening doors without pressure. Templates sit ready - use them your own way. 
            Recommendations wait quietly, helpful but never pushy. Build something real around what fits only you.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h3 className="font-semibold">Step-by-Step Study Guides</h3>
                <p className="text-sm text-muted-foreground">Finding answers yourself instead of just rereading helps memory stick. Spreading study sessions out over time builds stronger retention gradually. Working in focused bursts followed by short breaks keeps energy steady throughout. Approaches used during tests can change outcomes more than expected.

                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h3 className="font-semibold">Bursary & Scholarship Advice</h3>
                <p className="text-sm text-muted-foreground">Starting strong in South Africa while eyeing worldwide openings. Qualifications matter just as much as timing does. Think ahead before applying - details count more than you expect.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h3 className="font-semibold">Honest App & Tool Reviews</h3>
                <p className="text-sm text-muted-foreground">Focused on getting things done, jotting down ideas, using digital flashcards, yet also checking out study timetables - all tried, then measured side by side.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h3 className="font-semibold">Curated Online Courses</h3>
                <p className="text-sm text-muted-foreground">Top platforms and pathways for skill-building and academic support.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h3 className="font-semibold">Downloadable Templates</h3>
                <p className="text-sm text-muted-foreground">Pencil in a schedule that maps out each study session. Slot your tasks into timed chunks throughout the day. Lay out review periods ahead of exams with clear goals. Watch progress by marking scores after every test.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h3 className="font-semibold">University & Career Readiness</h3>
                <p className="text-sm text-muted-foreground">Starting with your story, then shaping how you talk about it. Choices come later, once practice sharpens the words. Clarity builds when talking feels natural.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h3 className="font-semibold">Simple Ways Students Can Get More Done</h3>
                <p className="text-sm text-muted-foreground">Pacing your day in chunks shapes how clearly you think. Watching small habits grow changes what feels possible each morning. Quiet patterns replace noise, slowly building steady attention instead.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h3 className="font-semibold">Community Insights</h3>
                <p className="text-sm text-muted-foreground">Everyday moments, tested advice, because real people shared what worked. Some found their rhythm, others stumbled into wins - still learning together.</p>
              </div>
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
              Starting strong, our tools guide learning through real methods that work. Success begins when support meets effort, shaped by clear steps forward. 
              Every step built on what students actually need comes alive here. Growth shows up where materials match goals - simple, steady, useful.
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

      {/* FAQ Section - SEO Optimized with Schema Markup */}
      <section className="py-16 bg-accent/5" aria-label="Frequently asked questions" itemScope itemType="https://schema.org/FAQPage">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              <HelpCircle className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Find answers to common questions about StudySprint and how we help students succeed
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-border rounded-lg px-6 bg-card" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                <span itemProp="name">What is StudySprint?</span>
              </AccordionTrigger>
              <AccordionContent itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-muted-foreground">
                  Every day, StudySprint opens doors without charging a fee. Created for learners who want more from their time, it nudges better routines into place through small shifts. Instead of just reading, you get step-by-step walkthroughs that show how things work. 
                  Hidden inside are handpicked apps and links - quiet helpers when the workload piles up. Progress doesn’t shout here; it grows where attention goes. Behind each post lies a reason: make studying feel less like climbing, more like moving forward.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border rounded-lg px-6 bg-card" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                <span itemProp="name">Are the study tips and recommendations research-based?</span>
              </AccordionTrigger>
              <AccordionContent itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-muted-foreground">
                  Truth is, we build every piece on solid ground - backed by cognitive science, shaped through talks with education pros, guided by methods that actually work. You get clear, usable direction because precision matters here.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border rounded-lg px-6 bg-card" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                <span itemProp="name">Do I need to register or create an account?</span>
              </AccordionTrigger>
              <AccordionContent itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-muted-foreground">
                  Nope. All materials - every piece, every tutorial, every tool - you can reach them anytime on StudySprint, free. Zero need to register. 
                  If someday things shift, maybe a newsletter shows up or profiles appear, jumping in would never be forced. You’d still choose your path. Always.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border rounded-lg px-6 bg-card" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                <span itemProp="name">Does StudySprint collect personal information?</span>
              </AccordionTrigger>
              <AccordionContent itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-muted-foreground">
                  When you visit, some basics get recorded - stuff like what device you’re using or where you click around. 
                  If we grab anything more personal, say an email, it is because you chose to share it. Curious about specifics? The full picture lives in our Privacy Policy.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-border rounded-lg px-6 bg-card" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                <span itemProp="name">Is StudySprint completely free?</span>
              </AccordionTrigger>
              <AccordionContent itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-muted-foreground">
                  For sure - every single blog post, study guide, and learning tool is free to access. Ads might show up here and there, alongside some affiliate links, just so we can keep things running. Still, what we suggest comes straight from experience, nothing swayed by outside support.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-border rounded-lg px-6 bg-card" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                <span itemProp="name">Do you accept guest posts or partnership requests?</span>
              </AccordionTrigger>
              <AccordionContent itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-muted-foreground">
                  Sure thing - we’re open to guest articles along with collaboration ideas.
                  Right now, guest posts aren’t something we put online. That could change later down the line, though. Got a thought that might fit? Send it over to <a href="mailto:studysprint-official@gmail.com" className="text-primary hover:underline">studysprint-official@gmail.com</a>.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border border-border rounded-lg px-6 bg-card" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                <span itemProp="name">Can I share StudySprint articles with others?</span>
              </AccordionTrigger>
              <AccordionContent itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-muted-foreground">
                  Sure thing. Feel free to pass along links to our stuff - share them with  friends, classmates, or on social media. That said, duplicating entire pieces word for word? Not allowed unless you ask first.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border border-border rounded-lg px-6 bg-card" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                <span itemProp="name">How can I contact StudySprint?</span>
              </AccordionTrigger>
              <AccordionContent itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-muted-foreground">
                  Got something on your mind? Reach out anytime by sending an email to <a href="mailto:studysprint-official@gmail.com" className="text-primary hover:underline">studysprint-official@gmail.com</a>. Questions, thoughts, suggestions - whatever it is, we’re here. Replies usually come fast, because waiting around stinks. Hearing from you matters more than you think. That inbox stays open for real talk, nothing less.

                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
