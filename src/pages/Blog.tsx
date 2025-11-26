import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import studyAppsImage from "@/assets/blog-study-apps.jpg";
import onlineCoursesImage from "@/assets/blog-online-courses.jpg";
import productivityImage from "@/assets/blog-productivity.jpg";

const Blog = () => {
  const categories = [
    "All Posts",
    "Study Hacks & Tips",
    "Online Courses",
    "Apps & Tools",
    "Scholarships",
    "Productivity",
  ];

  const blogPosts = [
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
      category: "Study Hacks & Tips",
      image: productivityImage,
      date: "Jan 10, 2025",
    },
    {
      id: "ai-tools-students",
      title: "Best AI Tools for Students in 2025",
      excerpt: "Explore cutting-edge AI tools that can help you study smarter, write better, and learn more efficiently.",
      category: "Apps & Tools",
      image: studyAppsImage,
      date: "Jan 8, 2025",
    },
    {
      id: "scholarships-south-africa",
      title: "Top Scholarships for South African Students",
      excerpt: "A comprehensive guide to available scholarships and bursaries for students in South Africa.",
      category: "Scholarships",
      image: onlineCoursesImage,
      date: "Jan 5, 2025",
    },
    {
      id: "productivity-hacks",
      title: "10 Productivity Hacks Every Student Should Know",
      excerpt: "Master these simple yet powerful productivity techniques to maximize your study time and results.",
      category: "Productivity",
      image: productivityImage,
      date: "Jan 3, 2025",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-accent py-16 text-white">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4 md:text-5xl">Our Blog</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Explore study tips, platform reviews, and resources to help you succeed in your learning journey.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b bg-card sticky top-16 z-40">
        <div className="container">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All Posts" ? "default" : "outline"}
                size="sm"
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
