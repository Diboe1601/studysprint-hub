import { Link, useParams, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ShuffleHero from "@/components/ShuffleHero";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { useEffect } from "react";
import { setPageMeta } from "@/lib/utils";

type ResourceInfo = {
  title: string;
  blurb: string;
  officialUrl: string;
  category: "Academic" | "Learning" | "Productivity" | "Writing" | "STEM" | "Language" | "Design";
};

const RESOURCES: Record<string, ResourceInfo> = {
  "google-scholar": {
    title: "Google Scholar",
    blurb: "Search academic papers, theses, and citations across disciplines.",
    officialUrl: "https://scholar.google.com/",
    category: "Academic",
  },
  "jstor": {
    title: "JSTOR",
    blurb: "Digital library of academic journals and scholarship.",
    officialUrl: "https://www.jstor.org/",
    category: "Academic",
  },
  "arxiv": {
    title: "arXiv",
    blurb: "Preprints in physics, math, computer science, and more.",
    officialUrl: "https://arxiv.org/",
    category: "Academic",
  },
  "directory-of-open-access-journals": {
    title: "Directory of Open Access Journals",
    blurb: "Index of high-quality, open-access peer-reviewed journals.",
    officialUrl: "https://doaj.org/",
    category: "Academic",
  },
  "researchgate": {
    title: "ResearchGate",
    blurb: "Network with researchers and access publications.",
    officialUrl: "https://www.researchgate.net/",
    category: "Academic",
  },
  "semantic-scholar": {
    title: "Semantic Scholar",
    blurb: "AI-powered discovery for scientific literature.",
    officialUrl: "https://www.semanticscholar.org/",
    category: "Academic",
  },
  "khan-academy": {
    title: "Khan Academy",
    blurb: "Free lessons from K-12 to college-level topics.",
    officialUrl: "https://www.khanacademy.org/",
    category: "Learning",
  },
  "edx": {
    title: "edX",
    blurb: "University-level courses — audit for free.",
    officialUrl: "https://www.edx.org/",
    category: "Learning",
  },
  "mit-opencourseware": {
    title: "MIT OpenCourseWare",
    blurb: "Complete MIT course materials, freely accessible.",
    officialUrl: "https://ocw.mit.edu/",
    category: "Learning",
  },
  "youtube-education": {
    title: "YouTube Education",
    blurb: "Curated educational channels and content.",
    officialUrl: "https://www.youtube.com/education",
    category: "Learning",
  },
  "codecademy": {
    title: "Codecademy",
    blurb: "Interactive coding lessons with free modules.",
    officialUrl: "https://www.codecademy.com/",
    category: "Learning",
  },
  "freecodecamp": {
    title: "freeCodeCamp",
    blurb: "Learn to code with projects and certifications.",
    officialUrl: "https://www.freecodecamp.org/",
    category: "Learning",
  },
  "notion": {
    title: "Notion",
    blurb: "All-in-one workspace for notes, tasks, and projects.",
    officialUrl: "https://www.notion.so/",
    category: "Productivity",
  },
  "trello": {
    title: "Trello",
    blurb: "Simple boards for project and study organization.",
    officialUrl: "https://trello.com/",
    category: "Productivity",
  },
  "google-workspace-for-education": {
    title: "Google Workspace for Education",
    blurb: "Collaboration suite widely available to students.",
    officialUrl: "https://workspace.google.com/intl/en/lp/education/",
    category: "Productivity",
  },
  "obsidian": {
    title: "Obsidian",
    blurb: "Local-first knowledge base and note-taking.",
    officialUrl: "https://obsidian.md/",
    category: "Productivity",
  },
  "grammarly": {
    title: "Grammarly",
    blurb: "Writing assistance with grammar and style suggestions.",
    officialUrl: "https://www.grammarly.com/",
    category: "Writing",
  },
  "zotero": {
    title: "Zotero",
    blurb: "Reference manager to organize sources and citations.",
    officialUrl: "https://www.zotero.org/",
    category: "Writing",
  },
  "mendeley": {
    title: "Mendeley",
    blurb: "Manage research papers and collaborate with peers.",
    officialUrl: "https://www.mendeley.com/",
    category: "Writing",
  },
  "scribbr-citation-generator": {
    title: "Scribbr Citation Generator",
    blurb: "Fast and free citations in APA, MLA, and more.",
    officialUrl: "https://www.scribbr.com/citation/generator/",
    category: "Writing",
  },
  "wolfram-alpha": {
    title: "Wolfram Alpha",
    blurb: "Computational knowledge engine for STEM.",
    officialUrl: "https://www.wolframalpha.com/",
    category: "STEM",
  },
  "desmos": {
    title: "Desmos",
    blurb: "Powerful graphing calculator and math tools.",
    officialUrl: "https://www.desmos.com/",
    category: "STEM",
  },
  "phet-simulations": {
    title: "PhET Simulations",
    blurb: "Interactive science and math simulations.",
    officialUrl: "https://phet.colorado.edu/",
    category: "STEM",
  },
  "duolingo": {
    title: "Duolingo",
    blurb: "Gamified language learning across many languages.",
    officialUrl: "https://www.duolingo.com/",
    category: "Language",
  },
  "memrise": {
    title: "Memrise",
    blurb: "Language learning with native speaker videos.",
    officialUrl: "https://www.memrise.com/",
    category: "Language",
  },
  "canva": {
    title: "Canva",
    blurb: "Create designs, presentations, and social graphics.",
    officialUrl: "https://www.canva.com/",
    category: "Design",
  },
  "gimp": {
    title: "GIMP",
    blurb: "Open-source image editor for creative projects.",
    officialUrl: "https://www.gimp.org/",
    category: "Design",
  },
};

const categoryTips: Record<ResourceInfo["category"], string[]> = {
  Academic: [
    "Use advanced filters to refine by date, field, and peer-review status.",
    "Track citations forward and backward to understand influence.",
    "Combine search engines (e.g., Google Scholar + DOAJ) for coverage.",
  ],
  Learning: [
    "Start with foundational modules, then build depth with projects.",
    "Use spaced repetition and active recall when studying.",
    "Mix video lessons with hands-on practice to retain skills.",
  ],
  Productivity: [
    "Create a simple system: capture, organise, review weekly.",
    "Use templates for study plans, class notes, and project trackers.",
    "Keep tools lightweight—avoid over-structuring your workflow.",
  ],
  Writing: [
    "Outline before drafting; use tools to polish not to replace thinking.",
    "Maintain a single source-of-truth for citations.",
    "Back up your library and store PDFs with consistent naming.",
  ],
  STEM: [
    "Experiment with parameters and visualise results to learn deeply.",
    "Validate computed answers using multiple approaches.",
    "Connect simulations to real-world examples and lab work.",
  ],
  Language: [
    "Practice daily in short sessions; speak out loud and shadow native audio.",
    "Build topic-specific vocabulary and use spaced repetition.",
    "Engage with native content (songs, shows, short clips).",
  ],
  Design: [
    "Collect inspiration, reuse templates, and keep assets organised.",
    "Prioritise readability, alignment, and contrast in visuals.",
    "Export in the right formats and compress for web performance.",
  ],
};

const ResourceDetail = () => {
  const { slug } = useParams();
  const resource = slug ? RESOURCES[slug] : undefined;

  if (!resource) {
    return <Navigate to="/blog/free-resources-students" replace />;
  }

  useEffect(() => {
    setPageMeta({
      title: `${resource.title} – Resource Details | StudySprint`,
      description: resource.blurb,
      canonical: typeof window !== "undefined" ? window.location.href : undefined,
      robots: "index,follow",
    });
  }, [resource]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <article className="flex-1">
        <ShuffleHero
          badge="Resource"
          title={resource.title}
          description={resource.blurb}
          buttonText="Back to Free Resources"
          buttonLink="/blog/free-resources-students"
        />

        <div className="container max-w-5xl py-12">
          <div className="mb-6">
            <Button asChild variant="ghost" size="sm">
              <Link to="/blog/free-resources-students">← Back</Link>
            </Button>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <Card>
                <CardHeader>
                  <h2 className="text-xl font-semibold">Overview</h2>
                  <p className="text-sm text-muted-foreground">{resource.blurb}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm leading-6">
                    <p>
                      {resource.title} is a trusted tool for students looking to level up their studies without paying a cent. Whether you’re researching a topic, learning new skills, or organising your academic life, this tool offers a solid starting point with features accessible to everyone. Used well, it can become a daily companion that saves time, improves understanding, and keeps you consistent.
                    </p>
                    <p>
                      To get the most from {resource.title}, start with a clear goal—what do you want to accomplish today? Then explore the core features that match your goal. For example, search filters and citation tools make research faster; playlists and interactive lessons help you stay engaged while learning; templates and boards keep your tasks organised and visible. Small habits matter: bookmark important pages, log progress, and review weekly.
                    </p>
                    <p>
                      While {resource.title} is powerful on its own, it works even better alongside complementary tools. Pair it with note-taking software to capture insights, use citation managers to keep references tidy, and try practice platforms to apply what you learn. Over time, build a workflow that feels effortless and supports consistent study—your future self will thank you.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button asChild variant="secondary">
                    <a href={resource.officialUrl} target="_blank" rel="noopener noreferrer">Visit official site</a>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/blog/free-resources-students">More free resources</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <h2 className="text-xl font-semibold">How to use it effectively</h2>
                  <p className="text-sm text-muted-foreground">Practical steps you can apply today.</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-sm space-y-2">
                    <li>Define your outcome (learn a concept, find sources, complete an assignment).</li>
                    <li>Explore key features first—search filters, playlists, templates, or project boards.</li>
                    <li>Save, tag, and organise resources so you can find them quickly later.</li>
                    <li>Practice actively: summarise, solve, explain, and build small projects.</li>
                    <li>Review weekly and refine your setup to reduce friction.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h2 className="text-xl font-semibold">Tips based on category</h2>
                  <p className="text-sm text-muted-foreground">Tailored advice for better outcomes.</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-sm space-y-2">
                    {categoryTips[resource.category].map((tip) => (
                      <li key={tip}>{tip}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <h2 className="text-lg font-semibold">Quick links</h2>
                  <p className="text-sm text-muted-foreground">Jump straight to what you need.</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-sm space-y-2">
                    <li>
                      <a href={resource.officialUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Official site</a>
                    </li>
                    <li>
                      <Link to="/blog/free-resources-students" className="hover:underline">All free resources</Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h2 className="text-lg font-semibold">Who is it best for?</h2>
                  <p className="text-sm text-muted-foreground">Use cases that make sense.</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-sm space-y-2">
                    <li>Students who want high-quality tools without cost.</li>
                    <li>Learners who prefer self-paced study with structure.</li>
                    <li>Anyone building a reliable, lightweight study workflow.</li>
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

export default ResourceDetail;
