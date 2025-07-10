import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy - Brandforce.ai";
  }, []);

  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-manrope font-bold mb-8">Privacy Policy</h1>
          <p className="text-xl text-secondary mb-8">
            Last updated: December 15, 2024
          </p>

          <div className="space-y-8">
            <Card className="bg-elevated border-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-manrope">1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-secondary">
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or contact us for support.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Personal Information</h4>
                    <ul className="list-disc pl-6 text-secondary space-y-1">
                      <li>Name and contact information</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Company information</li>
                      <li>Website URLs and domain information</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Usage Information</h4>
                    <ul className="list-disc pl-6 text-secondary space-y-1">
                      <li>How you use our services</li>
                      <li>Features you access</li>
                      <li>Time spent on our platform</li>
                      <li>Device and browser information</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-elevated border-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-manrope">2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-secondary">We use the information we collect to:</p>
                <ul className="list-disc pl-6 text-secondary space-y-2">
                  <li>Provide, maintain, and improve our SEO services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Communicate with you about products, services, and events</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, investigate, and prevent fraudulent transactions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-elevated border-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-manrope">3. Information Sharing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-secondary">
                  We do not sell, rent, or share your personal information with third parties for their marketing purposes 
                  without your explicit consent.
                </p>
                <p className="text-secondary">We may share your information in the following circumstances:</p>
                <ul className="list-disc pl-6 text-secondary space-y-2">
                  <li>With service providers who help us operate our business</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights, privacy, safety, or property</li>
                  <li>In connection with a merger, acquisition, or sale of assets</li>
                  <li>With your consent or at your direction</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-elevated border-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-manrope">4. Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-secondary">
                  We implement appropriate technical and organizational security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p className="text-secondary">
                  However, no method of transmission over the internet or electronic storage is 100% secure. 
                  We cannot guarantee absolute security of your information.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-elevated border-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-manrope">5. Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-secondary">
                  We retain your personal information for as long as necessary to provide our services, 
                  comply with legal obligations, resolve disputes, and enforce our agreements.
                </p>
                <p className="text-secondary">
                  When we no longer need your information, we will securely delete or anonymize it.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-elevated border-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-manrope">6. Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-secondary">Depending on your location, you may have the following rights:</p>
                <ul className="list-disc pl-6 text-secondary space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your personal information</li>
                  <li>Restrict processing of your information</li>
                  <li>Data portability</li>
                  <li>Object to processing based on legitimate interests</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
                <p className="text-secondary">
                  To exercise these rights, please contact us at privacy@brandforce.ai.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-elevated border-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-manrope">7. Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-secondary">
                  We use cookies and similar tracking technologies to collect information about your browsing activities 
                  and to provide personalized experiences.
                </p>
                <p className="text-secondary">
                  You can control cookies through your browser settings, but disabling cookies may limit your ability 
                  to use certain features of our service.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-elevated border-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-manrope">8. Third-Party Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-secondary">
                  Our service may contain links to third-party websites. We are not responsible for the privacy practices 
                  or content of these external sites.
                </p>
                <p className="text-secondary">
                  We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-elevated border-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-manrope">9. Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-secondary">
                  Our service is not intended for children under 13 years of age. We do not knowingly collect 
                  personal information from children under 13.
                </p>
                <p className="text-secondary">
                  If you become aware that a child has provided us with personal information, please contact us 
                  so we can take appropriate action.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-elevated border-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-manrope">10. International Transfers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-secondary">
                  Your information may be transferred to and processed in countries other than your country of residence. 
                  We ensure appropriate safeguards are in place to protect your information.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-elevated border-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-manrope">11. Changes to Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-secondary">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
                <p className="text-secondary">
                  Your continued use of our service after any changes constitutes acceptance of the updated Privacy Policy.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-elevated border-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-manrope">12. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-secondary">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-secondary">
                  Email: privacy@brandforce.ai<br />
                  Address: [Company Address]
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}