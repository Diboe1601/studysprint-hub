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

            <section>
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-muted-foreground">
                Welcome to StudySprint. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We may collect, use, store and transfer different kinds of personal data about you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Identity Data:</strong> Name, username or similar identifier</li>
                <li><strong>Contact Data:</strong> Email address and social media handles</li>
                <li><strong>Technical Data:</strong> IP address, browser type, time zone settings, and device information</li>
                <li><strong>Usage Data:</strong> Information about how you use our website and services</li>
                <li><strong>Marketing Data:</strong> Your preferences in receiving marketing from us</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To provide and maintain our service</li>
                <li>To send you newsletters and marketing communications (with your consent)</li>
                <li>To respond to your comments, questions, and requests</li>
                <li>To analyze and improve our website performance</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
              <p className="text-muted-foreground">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
              <p className="text-muted-foreground mb-4">
                We may employ third-party companies and individuals for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Google Analytics - for website analytics</li>
                <li>Email marketing services - for newsletter distribution</li>
                <li>Advertising partners - including Google AdSense</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request transfer of your data</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="text-muted-foreground">
                We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal data to those employees and partners who have a business need to know.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our website is intended for students of all ages. If you are under 16, please ensure you have parental consent before providing us with any personal information. Parents can contact us to request deletion of their child's information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at: contact@studysprint.com
              </p>
            </section>

            <section className="border-t pt-8 mt-8">
              <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
              <p className="text-muted-foreground mb-4">
                The information provided on StudySprint is for general informational and educational purposes only. While we strive to provide accurate and up-to-date information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>We make no representations or warranties of any kind about the completeness, accuracy, or reliability of the information</li>
                <li>Any action you take based on the information on our website is at your own risk</li>
                <li>We are not responsible for the content of external links to third-party websites</li>
                <li>Product and service recommendations are based on our research and opinions</li>
                <li>We may earn affiliate commissions from some links, which helps support our content creation</li>
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
