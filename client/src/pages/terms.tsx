import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Terms() {
  useEffect(() => {
    document.title = "Terms of Service - Brandforce.ai";
  }, []);

  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-manrope font-bold mb-8">Terms of Service</h1>
          <p className="text-xl text-secondary mb-8">
            Last updated: December 15, 2024
          </p>

          <div className="space-y-8">
            <Card className="bg-elevated border-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-manrope">1. Agreement to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-secondary">
                  By accessing and using Brandforce.ai ("Service"), you agree to be bound by these Terms of Service ("Terms"). 
                  If you disagree with any part of these terms, you may not access the Service.
                </p>
                <p className="text-secondary">
                  These Terms apply to all visitors, users, and others who access or use the Service.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-elevated border-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-manrope">2. Description of Service</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-secondary">
                  Brandforce.ai provides AI-powered SEO services including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-secondary space-y-2">
                  <li>AI-powered keyword research and analysis</li>
                  <li>Technical SEO audits and recommendations</li>
                  <li>Content optimization services</li>
                  <li>Link building and outreach campaigns</li>
                  <li>Local SEO optimization</li>
                  <li>Performance tracking and reporting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-elevated border-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-manrope">3. User Accounts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-secondary">
                  When you create an account with us, you must provide accurate, complete, and current information. 
                  You are responsible for safeguarding the password and for all activities under your account.
                </p>
                <p className="text-secondary">
                  You agree not to disclose your password to any third party and to notify us immediately upon 
                  becoming aware of any breach of security or unauthorized use of your account.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-elevated border-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-manrope">4. Acceptable Use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-secondary">You agree not to use the Service:</p>
                <ul className="list-disc pl-6 text-secondary space-y-2">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-elevated border-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-manrope">5. Service Availability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-secondary">
                  We strive to provide continuous service availability but cannot guarantee uninterrupted access. 
                  We reserve the right to modify, suspend, or discontinue the Service at any time without notice.
                </p>
                <p className="text-secondary">
                  We will not be liable for any loss or damage arising from service interruptions or modifications.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-elevated border-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-manrope">6. Payment Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-secondary">
                  Payment terms will be specified in your service agreement. All fees are non-refundable unless 
                  otherwise stated in writing. We reserve the right to change our pricing with 30 days' notice.
                </p>
                <p className="text-secondary">
                  Failure to pay fees when due may result in suspension or termination of your account.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-elevated border-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-manrope">7. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-secondary">
                  The Service and its original content, features, and functionality are owned by Brandforce.ai and are 
                  protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <p className="text-secondary">
                  You retain ownership of content you provide to us, but grant us a license to use, modify, and distribute 
                  such content as necessary to provide our services.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-elevated border-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-manrope">8. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-secondary">
                  In no event shall Brandforce.ai be liable for any indirect, incidental, special, consequential, or punitive 
                  damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
                <p className="text-secondary">
                  Our total liability for any claim arising out of or relating to these Terms shall not exceed the amount 
                  paid by you for the Service in the 12 months preceding the claim.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-elevated border-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-manrope">9. Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-secondary">
                  We may terminate or suspend your account immediately, without prior notice or liability, for any reason, 
                  including without limitation if you breach the Terms.
                </p>
                <p className="text-secondary">
                  Upon termination, your right to use the Service will cease immediately. All provisions of the Terms 
                  shall survive termination.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-elevated border-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-manrope">10. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-secondary">
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes 
                  by posting the new Terms on this page and updating the "Last updated" date.
                </p>
                <p className="text-secondary">
                  Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-elevated border-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-manrope">11. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-secondary">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <p className="text-secondary">
                  Email: legal@brandforce.ai<br />
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