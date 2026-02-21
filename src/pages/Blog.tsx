import { useState, useMemo, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import ShuffleHero from "@/components/ShuffleHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blogPosts } from "@/data/blogPosts";
import { Search, Filter, BookOpen } from "lucide-react";
import { setPageMeta } from "@/lib/utils";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    setPageMeta({
      title: "StudySprint Blog – Guides, Tools, Bursaries",
      description:
        "Explore study tips, app reviews, bursary guidance, and learning strategies for South African students.",
      canonical: typeof window !== "undefined" ? window.location.href : undefined,
      robots: "index,follow",
    });
  }, []);

  const categories = [
    "All Posts",
    "Study Hacks & Tips",
    "Online Courses",
    "Apps & Tools",
    "Scholarships",
    "Productivity",
  ];

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;

    // Filter by category
    if (selectedCategory !== "All Posts") {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort posts - removed views since it doesn't exist in BlogPost type
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedCategory, searchQuery, sortBy]);

  // Get category counts
  const categoryCounts = useMemo(() => {
    const counts: { [key: string]: number } = {};
    categories.forEach(category => {
      if (category === "All Posts") {
        counts[category] = blogPosts.length;
      } else {
        counts[category] = blogPosts.filter(post => post.category === category).length;
      }
    });
    return counts;
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <ShuffleHero
        badge="📚 Study Resources"
        title="Our Blog"
        description="Explore our collection of study tips, tool reviews, and learning strategies to help you excel in your academic journey."
        buttonText="View Latest Posts"
        buttonLink="#posts"
      />

      {/* Search and Filter Section - Centered */}
      <section id="posts" className="py-8 border-b bg-card">
        <div className="container">
          <div className="flex flex-col items-center gap-6">
            {/* Search Bar - Centered */}
            <div className="w-full max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full"
                />
              </div>
            </div>

            {/* Category Filters - Centered */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === selectedCategory ? "default" : "outline"}
                  size="sm"
                  className="whitespace-nowrap"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                  <span className="ml-2 text-xs opacity-70">
                    ({categoryCounts[category]})
                  </span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          {/* Results Info */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold">
                {selectedCategory === "All Posts" ? "All Posts" : selectedCategory}
              </h2>
              <p className="text-muted-foreground">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>
          </div>

          {/* Blog Grid - Clean without ads */}
          {filteredPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Posts");
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
