import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ShuffleHero from "@/components/ShuffleHero";

const PrivacyPolicy = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <ShuffleHero
        badge="🔒 Your Privacy Matters"
        title="Privacy Policy"
        description="Last updated: January 2025. Learn how we protect and handle your personal information."
      />

      <main className="flex-1">
        <div className="container max-w-4xl py-16">
          <div className="prose prose-lg max-w-none space-y-8">

            {/* INTRODUCTION */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-muted-foreground">
                Welcome to StudySprint. We value your privacy and are committed to protecting your personal information. 
                This Privacy Policy explains how we collect, use, store, and safeguard your data when you browse our website, 
                as well as the rights you have regarding your personal information.
              </p>
            </section>

            {/* INFORMATION WE COLLECT */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We may collect, use, store, and process the following categories of personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Identity Data:</strong> Name, username, or similar identifiers.</li>
                <li><strong>Contact Data:</strong> Email address and social media handles.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and time zone settings.</li>
                <li><strong>Usage Data:</strong> How you interact with our website and services.</li>
                <li><strong>Marketing Data:</strong> Your communication and marketing preferences.</li>
              </ul>
            </section>

            {/* HOW WE USE YOUR INFORMATION */}
            <section>
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

            {/* COOKIES */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
              <p className="text-muted-foreground">
                StudySprint uses cookies and similar tracking technologies to improve functionality, enhance user 
                experience, and analyze website traffic. You can disable cookies in your browser settings, but this 
                may affect certain features of the website.
              </p>
            </section>

            {/* THIRD-PARTY SERVICES */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
              <p className="text-muted-foreground mb-4">
                We may work with trusted third-party service providers, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Google Analytics – to understand website traffic and performance.</li>
                <li>Email marketing services – for optional newsletter distribution.</li>
                <li>Advertising partners (including Google AdSense) – to display relevant ads.</li>
              </ul>
            </section>

            {/* USER RIGHTS */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access the personal data we hold about you.</li>
                <li>Request corrections to inaccurate information.</li>
                <li>Request deletion of your personal data.</li>
                <li>Object to the processing of your data.</li>
                <li>Request a copy or transfer of your data.</li>
                <li>Withdraw consent at any time.</li>
              </ul>
            </section>

            {/* DATA SECURITY */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate security measures to protect your personal data from unauthorized access, 
                alteration, or disclosure. Access is limited to individuals and partners who require it for legitimate 
                business purposes.
              </p>
            </section>

            {/* CHILDREN */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Children&apos;s Privacy</h2>
              <p className="text-muted-foreground">
                StudySprint is intended for students of all ages. If you are under 16, please obtain parental consent 
                before sharing personal information. Parents may contact us to request the deletion of their child’s data.
              </p>
            </section>

            {/* CHANGES */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated 
                “Last updated” date at the top of the policy.
              </p>
            </section>

            {/* CONTACT */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                For questions about this Privacy Policy or your personal data, contact us at:  
                <br />
                <strong>studysprint.official24@gmail.com</strong>
              </p>
            </section>

            {/* DISCLAIMER */}
            <section className="border-t pt-8 mt-8">
              <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
              <p className="text-muted-foreground mb-4">
                The information on StudySprint is intended for general educational and informational purposes. While we 
                strive for accuracy:
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
