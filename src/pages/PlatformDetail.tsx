import { Link, useParams, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ShuffleHero from "@/components/ShuffleHero";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { useEffect } from "react";
import { setPageMeta } from "@/lib/utils";

const PLATFORM_MAP: Record<string, {
  title: string;
  blurb: string;
  details: string[];
  officialUrl: string;
}> = {
  "coursera-academic-excellence-certificates": {
    title: "Coursera: Academic Excellence & Certificates",
    blurb: "University-backed courses with structured paths and recognised certificates.",
    details: [
      "Partners: Leading universities and companies",
      "Learning model: Specialisations, graded assignments, peer review",
      "Certificates: Shareable; some offer credit and degree pathways",
      "Best for: Formal learning, career pivots into data, business, tech",
    ],
    officialUrl: "https://www.coursera.org/",
  },
  "udemy-practical-skills-flexibility": {
    title: "Udemy: Practical Skills & Flexibility",
    blurb: "Hands-on courses with flexible pacing across thousands of topics.",
    details: [
      "Library: Large catalog with niche practical skill courses",
      "Pacing: Self-paced, lifetime access, short sprints",
      "Instructors: Individual experts; check ratings and previews",
      "Best for: Rapid upskilling and tool-specific learning",
    ],
    officialUrl: "https://www.udemy.com/",
  },
};

const PlatformDetail = () => {
  const { slug } = useParams();
  const platform = slug ? PLATFORM_MAP[slug] : undefined;

  if (!platform) {
    return <Navigate to="/blog/coursera-vs-udemy" replace />;
  }

  useEffect(() => {
    setPageMeta({
      title: `${platform.title} – Platform Details | StudySprint`,
      description: platform.blurb,
      canonical: typeof window !== "undefined" ? window.location.href : undefined,
      robots: "index,follow",
    });
  }, [platform]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <article className="flex-1">
        <ShuffleHero
          badge="Platform"
          title={platform.title}
          description={platform.blurb}
          buttonText="Back to Coursera vs Udemy"
          buttonLink="/blog/coursera-vs-udemy"
        />

        <div className="container max-w-5xl py-12">
          <div className="mb-6">
            <Button asChild variant="ghost" size="sm">
              <Link to="/blog/coursera-vs-udemy">← Back</Link>
            </Button>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Main content column */}
            <div className="space-y-6 lg:col-span-2">
              <Card>
                <CardHeader>
                  <h2 className="text-xl font-semibold">Overview</h2>
                  <p className="text-sm text-muted-foreground">{platform.blurb}</p>
                </CardHeader>
                <CardContent>
                  {/* Expanded 300+ words per platform */}
                  {slug === "coursera-academic-excellence-certificates" && (
                    <div className="space-y-4 text-sm leading-6">
                      <p>
                        Coursera stands out for academic credibility and structured learning that closely mirrors university experiences. Courses are created in partnership with leading institutions and companies, which means syllabi are carefully designed, outcomes are clear, and assessments often include graded quizzes, peer-reviewed assignments, and capstone projects. Learners progress through weekly modules that build a coherent skill pathway, whether it’s data science, business strategy, or software engineering fundamentals. This structure helps you set a realistic pace, track progress, and stay accountable without losing the flexibility of online learning.
                      </p>
                      <p>
                        Where Coursera shines is the signalling value of its certificates and the depth of its multi-course Specializations. Many employers recognise the Coursera brand alongside prominent partners like Stanford, University of Michigan, Google, or IBM. For career pivoters and those who value a more formal approach, this credibility can boost confidence on your CV, LinkedIn, or portfolio. In some cases, Coursera provides pathways to academic credit or even fully online degrees, making it uniquely positioned for learners who want credentials that stretch beyond a certificate of completion.
                      </p>
                      <p>
                        Practically, you’ll find discussion forums, community support, and occasionally mentor-led feedback to reinforce understanding. Financial aid is available for many programmes, which reduces barriers to entry if cost is a concern. The platform’s breadth—spanning data analytics, AI, business, health, and humanities—means you can follow a guided journey from beginner to intermediate and beyond. If you’re aiming for formal learning, career switches, or structured outcomes backed by recognised institutions, Coursera offers a well-signposted route with assessments that help you gauge mastery at every step.
                      </p>
                    </div>
                  )}

                  {slug === "udemy-practical-skills-flexibility" && (
                    <div className="space-y-4 text-sm leading-6">
                      <p>
                        Udemy excels at practical, tool-focused upskilling with unmatched flexibility. Instead of university partnerships, courses are authored by individual instructors—freelancers, consultants, or professionals—who distil hands-on experience into video lessons and projects. This means you can quickly learn specific tools like Excel, Python, Figma, Power BI, or video editing software by following step-by-step instruction and building small portfolio pieces. Learning is self-paced with lifetime access, so you can binge a series over a weekend, revisit key sections months later, or pause and resume as your schedule allows.
                      </p>
                      <p>
                        Because the catalog is massive, quality varies; the best approach is to vet courses with previews, ratings, Q&A engagement, and recent reviews (ideally updated within the last year). Udemy’s frequent sales make most courses very affordable, often in the $10–$20 range, which is perfect for tactical skills you need right now. Many courses include downloadable resources and practical exercises, helping you consolidate knowledge and produce tangible outputs for your portfolio or workflow.
                      </p>
                      <p>
                        For learners who prioritise speed, flexibility, and immediate application, Udemy is a strong fit. It’s ideal for filling skill gaps, exploring new tools, or levelling up quickly in areas like data visualisation, design systems, automation scripts, or productivity workflows. Certificates of completion carry less signalling value compared to university-backed credentials, but that’s rarely a blocker for roles where demonstrable skill and portfolio proof matter most. If your goal is fast, practical learning you can apply tomorrow, Udemy’s breadth and pace make it a reliable first stop.
                      </p>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <a href={platform.officialUrl} target="_blank" rel="noopener noreferrer">Visit official site</a>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <h2 className="text-xl font-semibold">Why choose this platform?</h2>
                  <p className="text-sm text-muted-foreground">Quick guidance to help you decide.</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-sm space-y-2">
                    <li>Check course previews and syllabus depth.</li>
                    <li>Read recent reviews and ratings (last 6–12 months).</li>
                    <li>Consider your goal: formal credential vs practical skill.</li>
                    <li>Balance budget, time, and instructor quality.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default PlatformDetail;
