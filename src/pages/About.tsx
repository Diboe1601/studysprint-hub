import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ShuffleHero from "@/components/ShuffleHero";
import { Button } from "@/components/ui/button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { BookOpen, Target, Users, Heart, Award, Clock, TrendingUp, Globe, Star, CheckCircle, HelpCircle } from "lucide-react";

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
      description: "All our recommendations are backed by research and real-world testing"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Student-First",
      description: "We prioritize student needs and experiences in everything we create"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Continuous Improvement",
      description: "We constantly update our content with the latest tools and strategies"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Accessibility",
      description: "Making quality education resources available to all students"
    }
  ];

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
              At StudySprint, we believe that every student deserves access to the best learning resources and study strategies. Our mission is to help students discover innovative tools, platforms, and techniques that make learning more effective, engaging, and enjoyable.
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
              Helping students achieve academic excellence through proven strategies and innovative tools
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
              StudySprint was born from a simple observation: students today have access to more learning resources than ever before, yet many still struggle to find the right tools and strategies that work for them.
            </p>
            <p className="text-muted-foreground mb-4">
              We started this blog to bridge that gap. Our team researches, tests, and reviews various study apps, online platforms, and learning techniques to bring you honest, helpful recommendations. Whether you're preparing for exams, learning a new skill, or looking for scholarship opportunities, we're here to guide you.
            </p>
            <p className="text-muted-foreground">
              Today, StudySprint serves thousands of students worldwide, helping them discover better ways to study, learn, and succeed. We're constantly updating our content with the latest tools and strategies to ensure you always have access to the best resources available.
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
              The principles that guide everything we do at StudySprint
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
              Education enthusiasts dedicated to helping students succeed
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
      <section className="py-16 bg-muted/50" itemScope itemType="https://schema.org/FAQPage">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              <HelpCircle className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
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
                  StudySprint is a free educational platform created to help students boost their productivity, develop smarter study habits, and discover valuable learning resources. We offer in-depth blogs, practical guides, and curated tools designed to support your academic journey.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border rounded-lg px-6 bg-card" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                <span itemProp="name">Are the study tips and recommendations research-based?</span>
              </AccordionTrigger>
              <AccordionContent itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-muted-foreground">
                  Absolutely. All our content is developed using reliable sources, including insights from cognitive science, guidance from education experts, and proven learning methodologies. We prioritise delivering accurate and practical advice you can trust.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border rounded-lg px-6 bg-card" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                <span itemProp="name">Do I need to register or create an account?</span>
              </AccordionTrigger>
              <AccordionContent itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-muted-foreground">
                  Not at all. Every article, guide, and resource on StudySprint is freely accessible without any sign-up required. Should we introduce features like newsletters or user accounts in the future, participation will always remain entirely optional.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border rounded-lg px-6 bg-card" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                <span itemProp="name">Does StudySprint collect personal information?</span>
              </AccordionTrigger>
              <AccordionContent itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-muted-foreground">
                  We collect only essential data such as device information and browsing behaviour through analytics tools like Google Analytics. Personal details, including your email address, are only gathered when you voluntarily provide them. For full details, please review our <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-border rounded-lg px-6 bg-card" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                <span itemProp="name">Is StudySprint completely free?</span>
              </AccordionTrigger>
              <AccordionContent itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-muted-foreground">
                  Yes, 100%. All our blog posts, study guides, and educational resources are available at no cost. We may display advertisements or include affiliate links to help maintain the platform, but these never influence our honest recommendations.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-border rounded-lg px-6 bg-card" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                <span itemProp="name">Do you accept guest posts or partnership requests?</span>
              </AccordionTrigger>
              <AccordionContent itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-muted-foreground">
                  Currently, we do not publish guest contributions. However, we may explore collaboration opportunities in the future. If you have an idea worth discussing, feel free to reach out via <a href="mailto:studysprint-official@gmail.com" className="text-primary hover:underline">studysprint-official@gmail.com</a>.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border border-border rounded-lg px-6 bg-card" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                <span itemProp="name">Can I share StudySprint articles with others?</span>
              </AccordionTrigger>
              <AccordionContent itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-muted-foreground">
                  Of course! You're more than welcome to share links to our content with friends, classmates, or on social media. However, please note that reproducing or copying full articles without prior permission is not permitted.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border border-border rounded-lg px-6 bg-card" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                <span itemProp="name">How can I contact StudySprint?</span>
              </AccordionTrigger>
              <AccordionContent itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-muted-foreground">
                  We'd love to hear from you! For any questions, feedback, or enquiries, please email us at <a href="mailto:studysprint-official@gmail.com" className="text-primary hover:underline">studysprint-official@gmail.com</a>. We aim to respond as quickly as possible.
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