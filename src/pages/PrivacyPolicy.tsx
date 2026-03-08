import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { setPageMeta } from "@/lib/utils";

const PrivacyPolicy = () => {
  useEffect(() => {
    setPageMeta({
      title: "Privacy Policy – StudySprint",
      description:
        "How StudySprint collects, uses, and protects your data. Learn about cookies, third-party services, and your rights.",
      canonical: typeof window !== "undefined" ? window.location.href : undefined,
      robots: "index,follow",
    });
  }, []);
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      {/* Hero section removed */}

      <main className="flex-1">
        <div className="container max-w-4xl py-16">
          <div className="prose prose-lg max-w-none space-y-8">

            {/* LAST UPDATED - NEW */}
            <section className="border-b pb-4">
              <p className="text-sm text-muted-foreground">
                <strong>Last Updated:</strong> March 8, 2026
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Effective Date:</strong> March 8, 2026
              </p>
            </section>

            {/* QUICK SUMMARY - NEW */}
            <section className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Quick Summary</h2>
              <p className="text-muted-foreground mb-4">Here's what you should know about your privacy on StudySprint:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>We collect your name and email when you subscribe to our newsletter, comment on blog posts, or contact us directly.</li>
                <li>We use cookies and similar technologies to analyze site traffic and improve your experience.</li>
                <li><strong>We never sell your personal data</strong> to third parties.</li>
                <li>You can request access to your data, corrections, or complete deletion at any time.</li>
                <li>We retain your information for 12 months after your last interaction with our site.</li>
              </ul>
            </section>

            {/* QUICK NAVIGATION - NEW */}
            <section className="mb-8 p-4 bg-gray-100 rounded-lg">
              <h3 className="font-semibold mb-3">Quick Navigation</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <a href="#introduction" className="text-blue-600 hover:underline text-sm">Introduction</a>
                <a href="#information-we-collect" className="text-blue-600 hover:underline text-sm">Information We Collect</a>
                <a href="#how-we-use" className="text-blue-600 hover:underline text-sm">How We Use</a>
                <a href="#cookies" className="text-blue-600 hover:underline text-sm">Cookies</a>
                <a href="#third-party" className="text-blue-600 hover:underline text-sm">Third-Party</a>
                <a href="#your-rights" className="text-blue-600 hover:underline text-sm">Your Rights</a>
                <a href="#data-security" className="text-blue-600 hover:underline text-sm">Data Security</a>
                <a href="#contact" className="text-blue-600 hover:underline text-sm">Contact Us</a>
              </div>
            </section>

            {/* INTRODUCTION - YOUR EXISTING CONTENT */}
            <section id="introduction">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-muted-foreground">
                Here at StudySprint, your trust matters most. Because we care about security, every detail you share is handled with attention. When visiting our site, know that your info stays under careful watch - how it's gathered, kept, or used depends on clear choices we make together. 
                Each step taken follows strict handling rules just for you. What belongs to you remains yours, always visible, changeable, respected through actions not promises. Your control shows up in real ways across each part of the experience.
              </p>
            </section>

            {/* INFORMATION WE COLLECT - YOUR EXISTING CONTENT */}
            <section id="information-we-collect">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                Personal details could show up in our records. Information like names might get saved. Some data sticks around for handling. Records can include contact points. Details are kept under review. Processing happens when needed. Stored bits depend on purpose. Usage follows certain rules:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Identity Data:</strong> Name, username, or similar identifiers.</li>
                <li><strong>Contact Data:</strong> Email address and social media handles.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and time zone settings.</li>
                <li><strong>Usage Data:</strong> How you interact with our website and services.</li>
                <li><strong>Marketing Data:</strong> Your communication and marketing preferences.</li>
              </ul>
            </section>

            {/* HOW WE USE YOUR INFORMATION - YOUR EXISTING CONTENT */}
            <section id="how-we-use">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To operate, maintain, and improve our website and services.</li>
                <li>To send newsletters and marketing content (only with your consent).</li>
                <li>To respond to comments, inquiries, and support requests.</li>
                <li>To analyze site performance and user experience.</li>
                <li>To comply with applicable laws and regulations.</li>
              </ul>
            </section>

            {/* COOKIES - YOUR EXISTING CONTENT */}
            <section id="cookies">
              <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
              <p className="text-muted-foreground">
                When you visit StudySprint, tiny files called cookies help the site work better plus keep track of how people move around it. 
                Changing your browser to block these might slow some parts down a bit. Each person decides their own comfort level with that choice.
              </p>
            </section>

            {/* THIRD-PARTY SERVICES - YOUR EXISTING CONTENT */}
            <section id="third-party">
              <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
              <p className="text-muted-foreground mb-4">
                Finding partners we trust helps us offer what you need - companies that handle specific tasks for our operations. These outside experts support different parts of how things run behind the scenes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Google Analytics – to understand website traffic and performance.</li>
                <li>Email marketing services – for optional newsletter distribution.</li>
                <li>Advertising partners (including Google AdSense) – to display relevant ads.</li>
              </ul>
            </section>

            {/* USER RIGHTS - YOUR EXISTING CONTENT */}
            <section id="your-rights">
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                Your rights might include certain options, based on where you live:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>You can look at your own information stored in our system whenever needed.</li>
                <li>Request corrections to inaccurate information.</li>
                <li>Your personal information can be removed upon request.</li>
                <li>Refuse how your information gets handled.</li>
                <li>A person can ask to get their information sent elsewhere. One option is having it shared directly with them.</li>
                <li>You can take back your permission whenever you want.</li>
              </ul>
            </section>

            {/* DATA SECURITY - YOUR EXISTING CONTENT */}
            <section id="data-security">
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="text-muted-foreground">
                Staying safe online means putting up barriers where they’re needed most. Only those who truly need to see your details can get near them. 
                Protection kicks in the moment someone tries to peek without permission. Think of it like locks on doors - only certain keys work. Partners involved must follow strict rules, every single time. What you share stays shielded from changes or leaks. Each step taken aims squarely at keeping things private.
              </p>
            </section>

            {/* CHILDREN - YOUR EXISTING CONTENT */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Children&apos;s Privacy</h2>
              <p className="text-muted-foreground">
                Young learners can use StudySprint too. 
                When under sixteen, get a parent’s okay before giving any personal details. Reach out to us if you want your child’s info removed - we’ll take care of it.
              </p>
            </section>

            {/* CHANGES - YOUR EXISTING CONTENT */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground">
                From time to time, this Privacy Policy might change. Updates appear right here, marked clearly up front with a new “Last updated” date showing when things changed.
              </p>
            </section>

            {/* CONTACT - YOUR EXISTING CONTENT */}
            <section id="contact">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any concerns regarding this Privacy Policy or information we hold about you, reach out using the details below:  
                <br />
                <strong>studysprint.official24@gmail.com</strong>
              </p>
            </section>

            {/* DISCLAIMER - YOUR EXISTING CONTENT */}
            <section className="border-t pt-8 mt-8">
              <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
              <p className="text-muted-foreground mb-4">
                StudySprint shares details meant mostly for learning and awareness. Accuracy matters to us, yet results may differ at times:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>We do not guarantee the completeness or accuracy of information on the site.</li>
                <li>Any actions you take based on our content are at your own discretion and risk.</li>
                <li>We are not responsible for the content of external websites linked from our pages.</li>
                <li>Recommendations are based on research and opinion but may not apply to all individuals.</li>
                <li>Some links may be affiliate links, which help support StudySprint without additional cost to you.</li>
              </ul>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;