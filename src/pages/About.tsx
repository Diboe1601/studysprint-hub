import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ShuffleHero from "@/components/ShuffleHero";
import { Button } from "@/components/ui/button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { BookOpen, Target, Users, Heart, Award, Clock, TrendingUp, Globe, Star, CheckCircle, HelpCircle } from "lucide-react";
import { useEffect } from "react";
import { setPageMeta } from "@/lib/utils";

const About = () => {
  const teamMembers = [
    {
      name: "Sello Mpho",
      role: "Founder & Tech Reviewer",
      bio: "Software engineer passionate about educational apps",
      expertise: ["App Development", "Tool Analysis", "User Experience"]
    },
    {
      name: "Oratile Molefe",
      role: "Content Strategist",
      bio: "Learning psychologist focused on student success strategies",
      expertise: ["Learning Psychology","Study Techniques", "Productivity", "Student Wellness"]
    }
  ];

  const milestones = [
    { year: "2023", event: "StudySprint Founded", description: "Started with a mission to help students study smarter" },
    { year: "2024", event: "1,000 Students Reached", description: "Expanded our community and content offerings" },
    { year: "2025", event: "50+ Comprehensive Guides", description: "Published extensive library of study resources" },
    { year: "2026", event: "Global Community", description: "Helping students worldwide achieve academic success" }
  ];

  const values = [
    {
      icon: <Star className="h-6 w-6" />,
      title: "Evidence-Based",
      description: "Every suggestion we make rests on evidence gathered from studies along with hands-on trials"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Student-First",
      description: "Every choice we make begins with how students feel about it. What matters most shows up in their daily moments. Designs take shape around real feedback, not guesses. Learning tools grow from actual struggles they face. Each detail answers a quiet wish they never spoke aloud"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Continuous Improvement",
      description: "New tools show up regularly. Our material changes each time they do. Updates slip in whenever fresh methods appear"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Accessibility",
      description: "Making quality education resources available to all students"
    }
  ];

  useEffect(() => {
    setPageMeta({
      title: "About StudySprint – Mission, Values, Team",
      description:
        "Empowering South African students with research-backed study guides, bursary advice, and honest tool reviews.",
      canonical: typeof window !== "undefined" ? window.location.href : undefined,
      robots: "index,follow",
    });
  }, []);
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <ShuffleHero
        badge="🚀 Our Story"
        title="About StudySprint"
        description="Empowering students through smarter study habits and digital learning tools. Discover our mission to transform education."
        buttonText="Join Our Community"
        buttonLink="/contact"
      />

      {/* Mission Section */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              Learning should never feel out of reach, which is why StudySprint exists. Behind each idea we share lies a simple goal - making study time work better for everyone. Tools matter, yet so does how you use them, guiding our search for fresh methods. 
              Engagement grows when effort meets clarity, something we aim to support. What works today might shift tomorrow, keeping us focused on what truly helps students learn.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-16">
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Quality Content</h3>
              <p className="text-sm text-muted-foreground">
                Well-researched articles and guides
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Practical Tips</h3>
              <p className="text-sm text-muted-foreground">
                Actionable strategies you can use today
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Student-Focused</h3>
              <p className="text-sm text-muted-foreground">
                Created for students, by education enthusiasts
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Passion-Driven</h3>
              <p className="text-sm text-muted-foreground">
                Dedicated to making learning better
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16 bg-primary/5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every student can reach high marks when smart methods guide their way - imagine progress built on real results, shaped by fresh approaches that work. Learning gets stronger when techniques are tested; new resources open doors just a bit wider each day
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                <NumberTicker value={1000} />+
              </div>
              <div className="text-sm text-muted-foreground">Students Helped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                <NumberTicker value={50} delay={200} />+
              </div>
              <div className="text-sm text-muted-foreground">Study Guides</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                <NumberTicker value={100} delay={400} />+
              </div>
              <div className="text-sm text-muted-foreground">Tool Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                <NumberTicker value={25} delay={600} />+
              </div>
              <div className="text-sm text-muted-foreground">Countries Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-4">
              It started with noticing something clear. Right now, learners can reach countless ways to study. Still, lots of them have trouble picking what fits best. StudySprint came up because of that gap.
            </p>
            <p className="text-muted-foreground mb-4">
              This blog began as a way to fill the space between confusion and clarity. Behind every post is a group digging into study tools, trying them out, seeing what works. Honest thoughts come from real testing of apps, websites, ways to learn. Help comes without shortcuts or false promises. 
              If exams are near, curiosity has struck, or funding feels out of reach, direction shows up here. Support sits quietly in each paragraph, ready when needed.
            </p>
            <p className="text-muted-foreground">
              Right now, StudySprint supports countless learners across the globe, guiding them toward smarter study habits that lead to real results. Our materials get refreshed all the time - new methods, fresh tools - so what you find here stays sharp and useful.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              What shapes each move we make over here at StudySprint
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-lg border border-border hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  {value.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Centered */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              Education enthusiasts dedicated to helping students succeed. Success becomes possible when support shows up consistently. Helping others grow matters more than anything else here
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid gap-8 md:grid-cols-2 max-w-2xl">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center p-6 rounded-lg bg-card border border-border">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                    <Users className="h-10 w-10" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-accent mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="space-y-1">
                    {member.expertise.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">
              From humble beginnings to helping thousands of students worldwide
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-1/2 pr-8 pl-8">
                  <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
                    <div className="text-sm font-semibold text-primary mb-1">{milestone.year}</div>
                    <h3 className="font-semibold text-lg mb-2">{milestone.event}</h3>
                    <p className="text-muted-foreground text-sm">{milestone.description}</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-primary rounded-full border-4 border-white z-10"></div>
                <div className="w-1/2 pl-8 pr-8"></div>
              </div>
            ))}
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container max-w-3xl text-center">
          <Award className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg mb-8 opacity-90">
            Subscribe to our newsletter and get weekly study tips, tool recommendations, and learning resources delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Subscribe Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              <Link to="/blog">Explore Our Blog</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
