import { Link, useParams, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ShuffleHero from "@/components/ShuffleHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { bursaries } from "@/data/bursaries";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";
import { setPageMeta } from "@/lib/utils";

const BursaryDetail = () => {
  const { slug } = useParams();
  const bursary = bursaries.find((b) => b.slug === slug);

  if (!bursary) {
    return <Navigate to="/blog/bursaries-south-africa" replace />;
  }

  // Categorize details into professional sections
  const details = bursary.details;
  const eligibility = details.filter(
    (d) => /eligibility|criteria|citizen|income|average|academic|requirement/i.test(d) || d.toLowerCase().startsWith("eligibility")
  );
  const benefits = details.filter(
    (d) => /covers|includes|package|support|stipend|allowance|tuition|accommodation|books|meals|transport|laptop/i.test(d) || d.toLowerCase().startsWith("covers") || d.toLowerCase().startsWith("includes") || d.toLowerCase().startsWith("package") || d.toLowerCase().startsWith("support")
  );
  const fields = details.filter((d) => /fields|priority|focus|areas/i.test(d) || d.toLowerCase().startsWith("fields") || d.toLowerCase().startsWith("priority"));
  const application = details.filter((d) => /application|window|deadline|apply/i.test(d));
  const commitments = details.filter((d) => /service|agreement|work-back|teach|employment/i.test(d));
  const experience = details.filter((d) => /experience|vacation work|practical|training/i.test(d));

  useEffect(() => {
    setPageMeta({
      title: `${bursary.title} – Bursary Details | StudySprint`,
      description: bursary.blurb,
      canonical: typeof window !== "undefined" ? window.location.href : undefined,
      robots: "index,follow",
    });
  }, [bursary]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <article className="flex-1">
        <ShuffleHero
          badge="Bursary"
          title={bursary.title}
          description={bursary.blurb}
          buttonText="Back to Bursaries Guide"
          buttonLink="/blog/bursaries-south-africa"
        />

        <div className="container max-w-5xl py-12">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/blog">Blog</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/blog/bursaries-south-africa">Bursaries Guide</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{bursary.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mb-6">
            <Button asChild variant="ghost" size="sm">
              <Link to="/blog/bursaries-south-africa">← Back</Link>
            </Button>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Main content column */}
            <div className="space-y-6 lg:col-span-2">
              <Card>
                <CardHeader>
                  <h2 className="text-xl font-semibold">Overview</h2>
                  <p className="text-sm text-muted-foreground">{bursary.blurb}</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h2 className="text-xl font-semibold">Detailed Information</h2>
                  <p className="text-sm text-muted-foreground">Comprehensive guide covering eligibility, benefits, requirements, and application process.</p>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue={eligibility.length ? "eligibility" : benefits.length ? "benefits" : "fields"}>
                    <TabsList className="mt-4 w-full flex-wrap justify-start h-auto min-h-10">
                      <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
                      <TabsTrigger value="benefits">Coverage & Benefits</TabsTrigger>
                      <TabsTrigger value="fields">Fields & Focus Areas</TabsTrigger>
                      <TabsTrigger value="timeline">Application Timeline</TabsTrigger>
                      <TabsTrigger value="commitments">Commitments & Experience</TabsTrigger>
                      <TabsTrigger value="apply">How to Apply</TabsTrigger>
                    </TabsList>

                    <TabsContent value="eligibility">
                      {eligibility.length ? (
                        <ul className="list-disc pl-5 space-y-2">
                          {eligibility.map((e) => (
                            <li key={e}>{e}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-muted-foreground">Specific eligibility criteria are not listed here. Please review the official application page for full details.</p>
                      )}
                    </TabsContent>

                    <TabsContent value="benefits">
                      {benefits.length ? (
                        <ul className="list-disc pl-5 space-y-2">
                          {benefits.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-muted-foreground">Coverage and benefits vary by programme. Refer to the official page for specifics.</p>
                      )}
                    </TabsContent>

                    <TabsContent value="fields">
                      {fields.length ? (
                        <ul className="list-disc pl-5 space-y-2">
                          {fields.map((f) => (
                            <li key={f}>{f}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-muted-foreground">This bursary may target specific fields. Check the official site for eligible study areas.</p>
                      )}
                    </TabsContent>

                    <TabsContent value="timeline">
                      {application.length ? (
                        <ul className="list-disc pl-5 space-y-2">
                          {application.map((a) => (
                            <li key={a}>{a}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-muted-foreground">Application timelines differ. Visit the official page for current deadlines.</p>
                      )}
                    </TabsContent>

                    <TabsContent value="commitments">
                      {commitments.length || experience.length ? (
                        <ul className="list-disc pl-5 space-y-2">
                          {[...commitments, ...experience].map((c) => (
                            <li key={c}>{c}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-muted-foreground">Some bursaries include service agreements or work experience requirements. Verify on the official page.</p>
                      )}
                    </TabsContent>

                    <TabsContent value="apply">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2">Application Process</h4>
                          <ol className="list-decimal pl-5 space-y-2 text-sm">
                            <li>Review the Eligibility and Coverage sections to ensure you qualify.</li>
                            <li>Prepare standard documents: South African ID, academic transcripts, proof of household income, and university acceptance letter (if applicable).</li>
                            <li>Visit the official application portal using the button below.</li>
                            <li>Complete all required fields accurately and upload documents in accepted formats.</li>
                            <li>Submit before the deadline and keep your reference number. Monitor your email/SMS for updates.</li>
                          </ol>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Important Resources</h4>
                          <ul className="list-disc pl-5 space-y-2 text-sm">
                            <li>
                              <a className="text-primary hover:underline" href={bursary.applyUrl} target="_blank" rel="noopener noreferrer">
                                Official Application Portal
                              </a>
                            </li>
                            <li>
                              <Link className="text-primary hover:underline" to="/blog/bursaries-south-africa">Bursaries Guide Overview</Link>
                            </li>
                          </ul>
                          <p className="mt-3 text-xs text-muted-foreground">Disclaimer: Information may change. Always consult the official portal for the latest criteria, timelines, and requirements.</p>
                        </div>
                      </div>
                      <div className="mt-6">
                        <Button asChild>
                          <a href={bursary.applyUrl} target="_blank" rel="noopener noreferrer">
                            Apply Now
                          </a>
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Additional professional guidance */}
              <Card>
                <CardHeader>
                  <h2 className="text-xl font-semibold">Required Documents</h2>
                  <p className="text-sm text-muted-foreground">Prepare these before you start to avoid delays.</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Certified copy of your South African ID</li>
                    <li>Latest academic transcripts</li>
                    <li>Proof of parents'/guardians' household income</li>
                    <li>Motivation letter tailored to this bursary</li>
                    <li>Curriculum Vitae (CV)</li>
                    <li>Reference letters from teachers/professors</li>
                    <li>Proof of university acceptance (if available)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h2 className="text-xl font-semibold">Application Timeline Strategy</h2>
                  <p className="text-sm text-muted-foreground">Plan ahead to maximise your chances.</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li><span className="font-medium">12–18 months before:</span> Research opportunities and requirements</li>
                    <li><span className="font-medium">9–12 months before:</span> Prepare documents (ID, transcripts, proof of income)</li>
                    <li><span className="font-medium">6–9 months before:</span> Write and refine motivation letters</li>
                    <li><span className="font-medium">3–6 months before:</span> Submit applications (most deadlines fall here)</li>
                    <li><span className="font-medium">1–3 months before:</span> Prepare for interviews and assessments</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h2 className="text-xl font-semibold">Interview Preparation</h2>
                  <p className="text-sm text-muted-foreground">Demonstrate alignment, potential, and professionalism.</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Research the organisation's history, values, and recent projects</li>
                    <li>Prepare 2–3 thoughtful questions for your interviewers</li>
                    <li>Practice common questions and answers with a peer</li>
                    <li>Prepare examples of leadership, teamwork, and problem-solving</li>
                    <li>Dress professionally and test your technology beforehand (for virtual interviews)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h2 className="text-xl font-semibold">Common Pitfalls to Avoid</h2>
                  <p className="text-sm text-muted-foreground">Avoid these preventable mistakes.</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Missing application deadlines – set multiple reminders</li>
                    <li>Submitting incomplete or incorrect information</li>
                    <li>Using the same motivation letter for every application</li>
                    <li>Not following up on application status</li>
                    <li>Giving up after one or two rejections</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar column */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold">Quick Facts</h3>
                  <p className="text-sm text-muted-foreground">A concise summary of key points.</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    {fields.length > 0 && (
                      <div>
                        <span className="font-medium">Fields:</span> <span>{fields[0]}</span>
                      </div>
                    )}
                    {eligibility.length > 0 && (
                      <div>
                        <span className="font-medium">Eligibility:</span> <span>{eligibility[0]}</span>
                      </div>
                    )}
                    {benefits.length > 0 && (
                      <div>
                        <span className="font-medium">Benefits:</span> <span>{benefits[0]}</span>
                      </div>
                    )}
                    {application.length > 0 && (
                      <div>
                        <span className="font-medium">Applications:</span> <span>{application[0]}</span>
                      </div>
                    )}
                  </div>
                  <Separator className="my-4" />
                  <Button asChild variant="secondary" className="w-full">
                    <a href={bursary.applyUrl} target="_blank" rel="noopener noreferrer">Official Application</a>
                  </Button>
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

export default BursaryDetail;
