import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Target, Users, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-accent py-16 text-white">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4 md:text-5xl">About StudySprint</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Empowering students through smarter study habits and digital learning tools.
          </p>
        </div>
      </section>

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

      {/* CTA Section */}
      <section className="py-16">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to our newsletter and get weekly study tips, tool recommendations, and learning resources delivered to your inbox.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Subscribe Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
