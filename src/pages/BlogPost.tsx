import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import studyAppsImage from "@/assets/blog-study-apps.jpg";

const BlogPost = () => {
  const { id } = useParams();

  // This is a simplified example. In a real app, you'd fetch the post data based on the id
  const post = {
    id: id || "best-study-apps-2025",
    title: "Top 10 Best Study Apps for Students in 2025",
    category: "Apps & Tools",
    date: "January 15, 2025",
    readTime: "8 min read",
    image: studyAppsImage,
    content: `
      <p>Finding the right study apps can transform your learning experience and significantly boost your productivity. In 2025, there are countless options available, but which ones truly stand out? After extensive research and testing, we've compiled this comprehensive guide to the best study apps that every student should know about.</p>

      <h2>1. Notion - The All-in-One Workspace</h2>
      <p>Notion continues to dominate as the ultimate study companion. Its flexibility allows you to create custom databases, note-taking systems, and study schedules all in one place. Students love it for:</p>
      <ul>
        <li>Customizable templates for different subjects</li>
        <li>Collaborative features for group projects</li>
        <li>Integration with other productivity tools</li>
      </ul>

      <h2>2. Anki - Master Any Subject Through Spaced Repetition</h2>
      <p>When it comes to memorization and long-term retention, Anki remains unbeatable. This flashcard app uses spaced repetition algorithms to help you remember information efficiently.</p>

      <h2>3. Forest - Stay Focused and Beat Procrastination</h2>
      <p>Forest gamifies the focus experience by growing virtual trees while you study. If you leave the app, your tree dies. It's a simple yet powerful way to stay on task.</p>

      <h2>4. Quizlet - Interactive Learning Made Easy</h2>
      <p>With millions of user-created study sets, Quizlet offers a vast library of learning materials across all subjects. Features include:</p>
      <ul>
        <li>Multiple study modes (flashcards, tests, games)</li>
        <li>Audio support for language learning</li>
        <li>Progress tracking and performance insights</li>
      </ul>

      <h2>5. Grammarly - Perfect Your Writing</h2>
      <p>Essential for essay writing and academic papers, Grammarly checks your grammar, spelling, and style in real-time. The premium version offers advanced suggestions for clarity and tone.</p>

      <h2>Conclusion</h2>
      <p>The right study apps can make a significant difference in your academic success. Start with one or two apps that address your biggest challenges, then gradually incorporate others as needed. Remember, the best app is the one you'll actually use consistently.</p>
    `,
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <article className="flex-1">
        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Content */}
        <div className="container max-w-4xl py-12">
          <Link to="/blog">
            <Button variant="ghost" size="sm" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <header className="mb-8">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl font-bold mb-4 md:text-5xl">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                {post.readTime}
              </div>
            </div>
          </header>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-semibold mb-4">Was this article helpful?</h3>
            <p className="text-muted-foreground mb-4">
              Share your thoughts or suggest topics you'd like us to cover next.
            </p>
            <Button asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
