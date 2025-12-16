import { useParams, Link, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ShuffleHero from "@/components/ShuffleHero";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

const BlogPost = () => {
  const { id } = useParams();

  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Bursary cards for the Bursaries Guide post
  const bursaryCards = post?.id === "bursaries-south-africa" ? [
    {
      title: "National Student Financial Aid Scheme (NSFAS)",
      blurb: "Government support for students from low-income households.",
      details: [
        "Eligibility: SA citizens; combined household income < R350,000/year",
        "Covers: Full tuition, accommodation, meals, transport, learning materials",
        "Application Window: September–November annually",
        "Requirement: Maintain satisfactory academic progress",
      ],
      applyUrl: "https://www.nsfas.org.za/content/how-to-apply.html",
    },
    {
      title: "Funza Lushaka Bursary Programme",
      blurb: "Full-cost bursary supporting teaching qualifications with a service commitment.",
      details: [
        "Fields: Teaching (Foundation, Intermediate, Senior/FET)",
        "Priority: Mathematics, Physical Science, Technology, African Languages",
        "Service Agreement: Teach one year for each funded year",
        "Support: Mentorship and teaching practice assistance",
      ],
      applyUrl: "https://www.funzalushaka.doe.gov.za/Home/FirstTime",
    },
    {
      title: "Sasol Bursary Programme",
      blurb: "Comprehensive support with practical work experience.",
      details: [
        "Fields: Chemical/Mechanical Engineering, Data Science, Accounting",
        "Includes: Tuition, residence fees, book allowance, monthly stipend",
        "Work Experience: Compulsory vacation work & potential employment",
        "Competitiveness: Typically require 70%+ academic average",
      ],
      applyUrl: "https://www.sasolbursaries.com/welcome/sasol-foundation-bursaries/",
    },
    {
      title: "Investec Bursary Programme",
      blurb: "Targets high-achieving students in finance and tech.",
      details: [
        "Fields: Chartered Accounting, Actuarial Science, IT, Finance",
        "Features: Leadership development, networking, mentoring",
        "Selection: Academic excellence (~75%+), need, leadership",
      ],
      applyUrl: "https://www.investec.com/en_za/welcome-to-investec/sustainability/our-community/bursaries.html",
    },
    {
      title: "Standard Bank Bursary",
      blurb: "Developing diverse talent for Africa's banking future.",
      details: [
        "Fields: IT, Data Analytics, Finance, Economics, Marketing",
        "Focus: Transformation, excellence, digital innovation",
        "Opportunities: Vacation work & graduate programmes",
      ],
      applyUrl: "https://www.standardbank.com/sbg/standard-bank-group/careers/early-careers/bursaries",
    },
    {
      title: "Absa Bursary Programme",
      blurb: "Building Africa's next generation of banking professionals.",
      details: [
        "Fields: Finance, Accounting, IT, Mathematics, Statistics",
        "Package: Tuition, accommodation, meal allowance, laptop",
        "Career: Priority for Absa graduate programmes",
      ],
      applyUrl: "https://www.absa.co.za/about-us/careers/students-and-graduates/",
    },
    {
      title: "Anglo American Bursary",
      blurb: "Mining innovation and sustainable resource development.",
      details: [
        "Fields: Mining Engineering, Geology, Metallurgy, Environmental Science",
        "Includes: Tuition, accommodation, books, mentorship",
        "Experience: Structured vacation work; potential global exposure",
      ],
      applyUrl: "https://www.angloamerican.com/careers/students-and-graduates",
    },
    {
      title: "Eskom Bursary Scheme",
      blurb: "Developing critical skills for South Africa's energy future.",
      details: [
        "Fields: Electrical/Mechanical Engineering, Nuclear Physics",
        "Benefits: Stipend, paid vacation work, employment opportunities",
      ],
      applyUrl: "https://www.eskom.co.za/careers/bursaries/",
    },
    {
      title: "Mandela Rhodes Foundation Scholarship",
      blurb: "Prestigious postgraduate scholarship for ethical leadership.",
      details: [
        "Level: Honours and Masters",
        "Criteria: Excellence, leadership, reconciliation, entrepreneurship",
        "Programme: Leadership development & mentoring",
      ],
      applyUrl: "https://www.mandelarhodes.org/scholarship/",
    },
    {
      title: "Allan Gray Orbis Foundation",
      blurb: "Cultivates entrepreneurial leadership in SA.",
      details: [
        "Eligibility: Grade 12 & 1st-year university",
        "Support: Tuition, allowance, laptop, entrepreneurial development",
        "Network: Mentors & like-minded peers",
      ],
      applyUrl: "https://allangrayorbis.org/programmes/scholarship/",
    },
    {
      title: "Nedbank Bursary",
      blurb: "Supports careers in finance and technology.",
      details: [
        "Fields: BCom Accounting, IT, Data Science",
        "Highlights: Tuition coverage & academic support",
      ],
      applyUrl: "https://www.nedbank.co.za/content/nedbank/desktop/gt/en/aboutus/about-nedbank-group/careers/students-and-graduates.html",
    },
    {
      title: "Old Mutual Bursary",
      blurb: "Invests in analytically strong students.",
      details: [
        "Fields: Actuarial Science, Finance, IT",
        "Highlights: Mentorship, vacation work, graduate opportunities",
      ],
      applyUrl: "https://www.oldmutual.co.za/careers/students-graduates/",
    },
    {
      title: "Transnet Bursary",
      blurb: "Build SA’s transport & logistics sector.",
      details: [
        "Fields: Engineering, Logistics, Supply Chain",
        "Highlights: Practical training & work exposure",
      ],
      applyUrl: "https://www.transnet.net/Careers/Bursaries/Pages/Home.aspx",
    },
    {
      title: "Discovery Bursary",
      blurb: "For careers in health sciences & tech.",
      details: [
        "Fields: Actuarial Science, Data Analytics, Health Sciences",
        "Highlights: Innovation, wellness, leadership development",
      ],
      applyUrl: "https://www.discovery.co.za/corporate/careers-students-and-graduates",
    },
    {
      title: "Shoprite Bursary",
      blurb: "Grow in retail and supply chain sectors.",
      details: [
        "Fields: Retail Management, Supply Chain, Commerce",
        "Highlights: Guaranteed job placement for top performers",
      ],
      applyUrl: "https://www.shopriteholdings.co.za/careers/bursaries.html",
    },
    {
      title: "MTN Foundation Bursary",
      blurb: "Aligned with SA’s digital future.",
      details: [
        "Fields: IT, Engineering, Commerce, Data Science",
        "Highlights: Mentorship and graduate programme opportunities",
      ],
      applyUrl: "https://www.mtn.co.za/about-mtn/careers/students-and-graduates",
    },
    {
      title: "FNB Fund Bursary",
      blurb: "Invests in innovation-driven careers.",
      details: [
        "Fields: IT, Commerce, Engineering, Data Science",
        "Highlights: Emphasis on digital skills & future-focused learning",
      ],
      applyUrl: "https://www.fnb.co.za/about-fnb/careers/students-graduates.html",
    },
  ] : null;

  // Platform cards for Coursera vs Udemy post
  const platformCards = post?.id === "coursera-vs-udemy" ? [
    {
      title: "Coursera: Academic Excellence & Certificates",
      blurb: "University-backed courses, structured learning paths, and recognised certificates.",
      details: [
        "Partners: Top universities (e.g., Stanford, Michigan) and industry leaders",
        "Structure: Guided specialisations with graded assignments and peer review",
        "Certificates: Shareable certificates; some offer credit/degree pathways",
        "Best for: Formal learning, career pivots into data, business, and tech",
        "Learning model: Weekly modules, graded quizzes, capstone projects",
        "Support: Discussion forums, peer review, occasional mentor feedback",
        "Costs: Single courses ($49–$99), specialisations ($39–$79/month), degrees vary",
        "Financial aid: Available on many programmes",
        "Recognition: University-backed certificates with higher signalling value",
      ],
      officialUrl: "https://www.coursera.org/",
    },
    {
      title: "Udemy: Practical Skills & Flexibility",
      blurb: "Hands-on, project-focused courses with flexible pacing across thousands of topics.",
      details: [
        "Library: Massive catalog with many niche and practical skill courses",
        "Learning: Self-paced, lifetime access; learn in short sprints",
        "Instructors: Individual experts; quality varies—check ratings and previews",
        "Best for: Rapid upskilling, specific tools (e.g., Excel, Python, Figma)",
        "Practice: Project-based lessons and downloadable resources",
        "Pacing: Watch anytime; pause/rewind; revisit after months",
        "Costs: Frequent sales bring most courses to $10–$20",
        "Selection tips: Use previews, ratings, and recent reviews",
        "Recognition: Certificates of completion; portfolio-proof matters more",
      ],
      officialUrl: "https://www.udemy.com/",
    },
  ] : null;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <article className="flex-1">
        <ShuffleHero
          badge={post.category}
          title={post.title}
          description={post.excerpt}
          buttonText="Back to Blog"
          buttonLink="/blog"
        />

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

          {bursaryCards && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Explore Bursaries</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {bursaryCards.map((b) => (
                  <Card key={b.title} className="h-full">
                    <CardHeader>
                      <h3 className="text-lg font-semibold">
                        <Link to={`/bursary/${b.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`} className="hover:underline">
                          {b.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">{b.blurb}</p>
                    </CardHeader>
                    <CardFooter className="gap-2">
                      <Button asChild variant="outline" size="sm">
                        <Link to={`/bursary/${b.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}>View details</Link>
                      </Button>
                      <Button asChild variant="secondary" size="sm">
                        <a href={b.applyUrl} target="_blank" rel="noopener noreferrer">Apply</a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {platformCards && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Platform Highlights</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {platformCards.map((p) => (
                  <Card key={p.title} className="h-full">
                    <CardHeader>
                      <h3 className="text-lg font-semibold">
                        <Link to={`/platform/${p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`} className="hover:underline">
                          {p.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">{p.blurb}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 text-sm space-y-2">
                        {p.details.map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="gap-2">
                      <Button asChild variant="outline" size="sm">
                        <Link to={`/platform/${p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}>View details</Link>
                      </Button>
                      <Button asChild variant="secondary" size="sm">
                        <a href={p.officialUrl} target="_blank" rel="noopener noreferrer">Visit site</a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          )}

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
